#!/usr/bin/env python3
"""Conector local, de solo lectura, para el canal de YouTube de Malibú FC.

No usa librerías externas ni contiene credenciales. Los tokens y la identidad
canónica del canal se guardan fuera del repositorio, por defecto en
private-data/youtube/ (ruta ignorada por Git).
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import http.server
import json
import os
from pathlib import Path
import secrets
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
import webbrowser

EXPECTED_CHANNEL_NAME = "Malibú FC"
YOUTUBE_SCOPE = "https://www.googleapis.com/auth/youtube.readonly"
DEFAULT_CLIENT_JSON = "private-data/youtube/client_secret.json"
DEFAULT_TOKEN_JSON = "private-data/youtube/token.json"
DEFAULT_CHANNEL_JSON = "private-data/youtube/channel.json"
DEFAULT_REDIRECT_URI = "http://127.0.0.1:8765/oauth2callback"
API_ROOT = "https://www.googleapis.com/youtube/v3/"


class YouTubeIntegrationError(RuntimeError):
    pass


def local_path(env_name: str, default: str) -> Path:
    return Path(os.environ.get(env_name, default)).expanduser()


def load_json(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise YouTubeIntegrationError(
            f"No existe {path}. Configure {path.name} siguiendo docs/YOUTUBE_MALIBU.md."
        ) from exc
    except json.JSONDecodeError as exc:
        raise YouTubeIntegrationError(f"JSON no válido en {path}: {exc}") from exc


def save_json(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def client_config() -> tuple[dict, Path]:
    path = local_path("YOUTUBE_OAUTH_CLIENT_JSON", DEFAULT_CLIENT_JSON)
    data = load_json(path)
    config = data.get("installed") or data.get("web")
    if not config:
        raise YouTubeIntegrationError("El cliente OAuth debe contener la sección installed o web.")
    for key in ("client_id", "auth_uri", "token_uri"):
        if not config.get(key):
            raise YouTubeIntegrationError(f"Falta {key} en el cliente OAuth.")
    return config, path


def token_path() -> Path:
    return local_path("YOUTUBE_TOKEN_PATH", DEFAULT_TOKEN_JSON)


def channel_path() -> Path:
    return local_path("YOUTUBE_CHANNEL_METADATA_PATH", DEFAULT_CHANNEL_JSON)


def compact(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def normalise(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    return "".join(ch for ch in value if not unicodedata.combining(ch)).casefold().strip()


def token_is_valid(token: dict) -> bool:
    expires_at = token.get("_expires_at")
    return bool(token.get("access_token")) and (not expires_at or time.time() < float(expires_at) - 60)


def form_post(url: str, values: dict) -> dict:
    request = urllib.request.Request(
        url,
        data=urllib.parse.urlencode(values).encode("utf-8"),
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise YouTubeIntegrationError(f"OAuth devolvió HTTP {exc.code}: {body}") from exc
    except urllib.error.URLError as exc:
        raise YouTubeIntegrationError(f"No se pudo conectar con Google: {exc.reason}") from exc


def refresh_access_token(config: dict, token: dict) -> dict:
    if not token.get("refresh_token"):
        raise YouTubeIntegrationError("El token no tiene refresh_token; vuelva a ejecutar auth.")
    values = {
        "client_id": config["client_id"],
        "client_secret": config.get("client_secret", ""),
        "refresh_token": token["refresh_token"],
        "grant_type": "refresh_token",
    }
    updated = form_post(config["token_uri"], values)
    updated["refresh_token"] = token["refresh_token"]
    updated["_expires_at"] = time.time() + int(updated.get("expires_in", 3600))
    save_json(token_path(), updated)
    return updated


class OAuthCallback(http.server.BaseHTTPRequestHandler):
    code: str | None = None
    error: str | None = None
    state: str | None = None

    def do_GET(self) -> None:  # noqa: N802
        query = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
        OAuthCallback.code = query.get("code", [None])[0]
        OAuthCallback.error = query.get("error", [None])[0]
        OAuthCallback.state = query.get("state", [None])[0]
        self.send_response(200)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.end_headers()
        self.wfile.write("Autorización recibida. Puede cerrar esta ventana.\n".encode("utf-8"))

    def log_message(self, *_args: object) -> None:
        return


def redirect_uri(config: dict) -> str:
    for uri in config.get("redirect_uris", []):
        if uri.startswith("http://127.0.0.1") or uri.startswith("http://localhost"):
            return uri
    return DEFAULT_REDIRECT_URI


def oauth_login(config: dict) -> dict:
    verifier = base64.urlsafe_b64encode(secrets.token_bytes(48)).rstrip(b"=").decode("ascii")
    challenge = base64.urlsafe_b64encode(hashlib.sha256(verifier.encode("ascii")).digest()).rstrip(b"=").decode("ascii")
    state = secrets.token_urlsafe(32)
    callback = redirect_uri(config)
    parsed = urllib.parse.urlparse(callback)
    try:
        server = http.server.HTTPServer((parsed.hostname or "127.0.0.1", parsed.port or 80), OAuthCallback)
    except OSError as exc:
        raise YouTubeIntegrationError(f"No se pudo abrir el callback local {callback}: {exc}") from exc
    params = {
        "client_id": config["client_id"],
        "redirect_uri": callback,
        "response_type": "code",
        "scope": YOUTUBE_SCOPE,
        "access_type": "offline",
        "prompt": "consent",
        "state": state,
        "code_challenge": challenge,
        "code_challenge_method": "S256",
    }
    url = config["auth_uri"] + "?" + urllib.parse.urlencode(params)
    print("Se abrirá el navegador para autorizar únicamente la cuenta ivansotobarber@gmail.com.")
    print(url)
    if not webbrowser.open(url):
        print("Abra manualmente la URL anterior.")
    server.timeout = 300
    while OAuthCallback.code is None and OAuthCallback.error is None:
        server.handle_request()
    server.server_close()
    if OAuthCallback.error:
        raise YouTubeIntegrationError(f"Google canceló OAuth: {OAuthCallback.error}")
    if OAuthCallback.state != state:
        raise YouTubeIntegrationError("El estado OAuth no coincide; se aborta por seguridad.")
    token = form_post(config["token_uri"], {
        "client_id": config["client_id"],
        "client_secret": config.get("client_secret", ""),
        "code": OAuthCallback.code,
        "code_verifier": verifier,
        "grant_type": "authorization_code",
        "redirect_uri": callback,
    })
    token["_expires_at"] = time.time() + int(token.get("expires_in", 3600))
    save_json(token_path(), token)
    return token


def get_token(config: dict, force_login: bool = False) -> dict:
    if not force_login:
        try:
            token = load_json(token_path())
            if token_is_valid(token):
                return token
            if token.get("refresh_token"):
                return refresh_access_token(config, token)
        except YouTubeIntegrationError:
            pass
    return oauth_login(config)


def api_get(token: dict, resource: str, params: dict) -> dict:
    query = urllib.parse.urlencode({key: value for key, value in params.items() if value is not None})
    request = urllib.request.Request(API_ROOT + resource + "?" + query, headers={"Authorization": f"Bearer {token['access_token']}"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise YouTubeIntegrationError(f"YouTube API HTTP {exc.code}: {body}") from exc
    except urllib.error.URLError as exc:
        raise YouTubeIntegrationError(f"No se pudo conectar con YouTube: {exc.reason}") from exc


def mine_channel(token: dict) -> list[dict]:
    response = api_get(token, "channels", {
        "part": "snippet,contentDetails,statistics",
        "mine": "true",
        "maxResults": 50,
    })
    return response.get("items", [])


def canonical_id() -> str | None:
    configured = os.environ.get("MALIBU_FC_CHANNEL_ID")
    if configured:
        return configured.strip()
    try:
        return str(load_json(channel_path())["channel_id"])
    except (YouTubeIntegrationError, KeyError):
        return None


def select_channel(items: list[dict], require_canonical: bool) -> dict:
    if not items:
        raise YouTubeIntegrationError("La cuenta autorizada no devuelve ningún canal.")
    expected = canonical_id()
    if require_canonical and not expected:
        raise YouTubeIntegrationError("No existe canal canónico. Ejecute auth y confirme el canal Malibú FC.")
    if expected:
        matches = [item for item in items if item.get("id") == expected]
        if len(matches) != 1:
            ids = ", ".join(item.get("id", "?") for item in items)
            raise YouTubeIntegrationError(f"Aislamiento fallido: el canal canónico {expected} no coincide con los canales devueltos ({ids}).")
        return matches[0]
    if len(items) != 1:
        raise YouTubeIntegrationError("Hay varios canales en la cuenta; no se guarda ninguno sin una selección explícita.")
    return items[0]


def channel_summary(channel: dict) -> dict:
    snippet = channel.get("snippet", {})
    statistics = channel.get("statistics", {})
    content = channel.get("contentDetails", {}).get("relatedPlaylists", {})
    channel_id = channel.get("id")
    return {
        "channel_id": channel_id,
        "title": snippet.get("title"),
        "description": snippet.get("description"),
        "custom_url": snippet.get("customUrl"),
        "url": f"https://www.youtube.com/channel/{channel_id}" if channel_id else None,
        "uploads_playlist_id": content.get("uploads"),
        "video_count": statistics.get("videoCount"),
        "subscriber_count": statistics.get("subscriberCount"),
        "view_count": statistics.get("viewCount"),
        "retrieved_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
    }


def authenticated_channel(token: dict) -> dict:
    return select_channel(mine_channel(token), require_canonical=True)


def command_auth(config: dict) -> None:
    token = get_token(config, force_login=True)
    items = mine_channel(token)
    channel = select_channel(items, require_canonical=False)
    summary = channel_summary(channel)
    print("Canal detectado:")
    print(compact(summary))
    answer = input("¿Confirmas que este canal es Malibú FC? Escribe SI para continuar: ").strip().casefold()
    if answer not in {"si", "sí", "s"}:
        raise YouTubeIntegrationError("Confirmación no recibida; no se guardó la identidad canónica.")
    if normalise(summary.get("title") or "") != normalise(EXPECTED_CHANNEL_NAME):
        print("Aviso: el título no coincide exactamente con Malibú FC; se guarda sólo por confirmación explícita.")
    save_json(channel_path(), summary)
    print(f"Identidad canónica guardada fuera de Git en {channel_path()}.")


def command_status(token: dict) -> None:
    print(compact(channel_summary(authenticated_channel(token))))


def command_videos(token: dict) -> None:
    channel = authenticated_channel(token)
    uploads = channel.get("contentDetails", {}).get("relatedPlaylists", {}).get("uploads")
    if not uploads:
        raise YouTubeIntegrationError("El canal no expone la playlist de subidas.")
    items: list[dict] = []
    page_token = None
    while True:
        response = api_get(token, "playlistItems", {
            "part": "snippet,contentDetails,status",
            "playlistId": uploads,
            "maxResults": 50,
            "pageToken": page_token,
        })
        items.extend(response.get("items", []))
        page_token = response.get("nextPageToken")
        if not page_token:
            break
    print(compact({"channel_id": channel["id"], "uploads_playlist_id": uploads, "items": items}))


def command_playlists(token: dict) -> None:
    channel = authenticated_channel(token)
    items: list[dict] = []
    page_token = None
    while True:
        response = api_get(token, "playlists", {
            "part": "snippet,contentDetails,status",
            "channelId": channel["id"],
            "maxResults": 50,
            "pageToken": page_token,
        })
        items.extend(response.get("items", []))
        page_token = response.get("nextPageToken")
        if not page_token:
            break
    print(compact({"channel_id": channel["id"], "items": items}))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Malibú FC, YouTube Data API v3, fase 1 solo lectura")
    parser.add_argument("command", choices=["auth", "status", "info", "videos", "playlists", "analytics"], help="operación")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    try:
        config, _ = client_config()
        if args.command == "auth":
            command_auth(config)
            return 0
        if args.command == "analytics":
            raise YouTubeIntegrationError("Analytics queda preparado para una fase posterior con youtube.readonly + youtube.analytics.readonly.")
        token = get_token(config)
        if args.command in {"status", "info"}:
            command_status(token)
        elif args.command == "videos":
            command_videos(token)
        elif args.command == "playlists":
            command_playlists(token)
        return 0
    except YouTubeIntegrationError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    except KeyboardInterrupt:
        print("\nCancelado.", file=sys.stderr)
        return 130


if __name__ == "__main__":
    raise SystemExit(main())