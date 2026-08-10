# Integración de YouTube, Malibú FC

Estado: Fase 1 preparada, pendiente de autorización OAuth del titular.
Cuenta autorizada prevista: `ivansotobarber@gmail.com`.
Canal objetivo: `Malibú FC`, independiente de los canales `Iván Soto` y `Envite Canario`.
Modo actual: lectura únicamente, sin publicación, modificación, borrado ni acceso de escritura.

## Arquitectura de cuenta

La cuenta Google puede gestionar varios canales, pero los canales no se anidan unos dentro de otros. Malibú FC se creará como canal separado, preferiblemente vinculado a una cuenta de marca, dentro de la misma cuenta Google de Iván. Nunca se debe usar el canal personal o el de Envite como identidad de publicación de Malibú FC. Antes de cada operación se debe comprobar el selector de canal y el `channel_id` canónico.

## Objetivo y límites

Este conector local usa la API oficial YouTube Data API v3 y OAuth 2.0 con PKCE. No utiliza scraping, cookies, contraseñas, cuentas de servicio ni credenciales incrustadas. GitHub Pages continúa siendo una web pública estática y no recibe tokens. Los secretos y metadatos privados se guardan en `private-data/youtube/`, excluido por `.gitignore`.

Todas las consultas autenticadas ejecutan `channels.list(part="snippet,contentDetails,statistics", mine=true)` y verifican el `channel_id` canónico antes de devolver datos. Si la cuenta devuelve otro canal, varios canales o un canal distinto del canónico, la operación se aborta. El ID canónico sólo se guarda después de que Iván confirme explícitamente el canal mostrado.

## Configuración manual única

1. Entrar en [Google Cloud Console](https://console.cloud.google.com/) con `ivansotobarber@gmail.com`, crear o seleccionar un proyecto para Malibú FC y habilitar **YouTube Data API v3**. YouTube exige un proyecto de Google Cloud y autorización OAuth para datos privados, según la documentación oficial.
2. En **Google Auth Platform**, configurar la pantalla de consentimiento. Mientras la aplicación esté en pruebas, añadir `ivansotobarber@gmail.com` como usuario de prueba. Mantener únicamente el alcance `https://www.googleapis.com/auth/youtube.readonly` para esta fase.
3. Crear un cliente OAuth de tipo **Desktop app** y descargar el JSON. Copiarlo localmente como `private-data/youtube/client_secret.json`. No subirlo al repositorio, no pegar su contenido en el chat y no compartirlo.
4. Desde PowerShell, situado en la raíz del repositorio, ejecutar:

   ```powershell
   python tools/youtube_malibu.py auth
   ```

   Se abrirá el navegador. Iniciar sesión sólo con `ivansotobarber@gmail.com`, revisar la cuenta y el canal, y confirmar escribiendo `SI` cuando aparezca `Canal detectado`. Si no es Malibú FC, responder cualquier otra cosa y el proceso se detendrá sin guardar identidad canónica.
5. Una vez confirmado, el script guarda fuera de Git `private-data/youtube/token.json` y `private-data/youtube/channel.json`. El segundo archivo contiene el ID canónico y los datos básicos mostrados en la confirmación.
6. Comprobar la integración en modo lectura:

   ```powershell
   python tools/youtube_malibu.py status
   python tools/youtube_malibu.py videos
   python tools/youtube_malibu.py playlists
   ```

   `info` es un alias de `status`. `analytics` está reservado para una fase posterior y no ejecuta ninguna llamada.

## Datos y operaciones

| Operación | Estado | Permiso | Confirmación |
| --- | --- | --- | --- |
| `auth` | preparada | OAuth `youtube.readonly` | selección explícita del canal |
| `status` / `info` | disponible | lectura | no |
| `videos` | disponible | lectura | no |
| `playlists` | disponible | lectura | no |
| `analytics` | reservado | requiere alcance Analytics adicional | se definirá antes |
| preparar publicación | futura | borrador local | no |
| subir vídeo | futura | escritura | siempre explícita, por defecto privado o no listado |
| modificar público | futura | escritura | siempre explícita |
| borrar | futura | escritura destructiva | siempre explícita |

La lista de vídeos usa la playlist de subidas indicada por `contentDetails.relatedPlaylists.uploads`; la API oficial documenta que `playlistItems.list` permite recuperar los vídeos de esa playlist. Las consultas se limitan al canal canónico confirmado.

## Pendientes de Fase 1

- Crear el proyecto y cliente OAuth en Google Cloud.
- Ejecutar `auth` y confirmar el canal correcto.
- Registrar el `channel_id` confirmado en el entorno local, si se desea además fijarlo mediante `MALIBU_FC_CHANNEL_ID`.
- Verificar `status`, `videos` y `playlists`.
- No activar subidas, edición, analítica avanzada ni automatizaciones hasta cerrar la revisión de permisos y el flujo de confirmación.

## Seguridad operativa

No guardar `client_secret.json`, `token.json`, `channel.json` ni archivos `.env` en commits. Si se sospecha una exposición, revocar el acceso desde la cuenta de Google y volver a ejecutar `auth`. El conector no modifica DNS, GitHub Pages, WhatsApp ni el contenido de YouTube.

Referencias oficiales: [OAuth para aplicaciones de escritorio](https://developers.google.com/youtube/v3/guides/auth/installed-apps), [canales y `mine=true`](https://developers.google.com/youtube/v3/guides/implementation/channels), [`playlistItems.list`](https://developers.google.com/youtube/v3/docs/playlistItems/list), [trabajo con IDs de canal](https://developers.google.com/youtube/v3/guides/working_with_channel_ids).
