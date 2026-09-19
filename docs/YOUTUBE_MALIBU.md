# Integración de YouTube, Malibú FC

Estado del canal: creado por Iván; foto de perfil cargada por Iván (confirmación del 17-09-2026).
Estado de la integración API: pendiente de autorización OAuth del titular.
Cuenta autorizada prevista: `ivansotobarber@gmail.com`.
Canal objetivo: `Malibú FC`, independiente de los canales `Iván Soto` y `Envite Canario`.
Modo actual: lectura únicamente, sin publicación, modificación, borrado ni acceso de escritura.

## Arquitectura de cuenta

La cuenta Google gestiona varios canales. Malibú FC es un canal separado dentro de la cuenta de Iván; no se debe usar el canal personal ni Envite Canario como identidad de publicación. Antes de cada operación se debe comprobar el selector de canal y el `channel_id` canónico. Canal e identificador comprobados en Studio el 17-09-2026: `UCv_TUzgGJb4Xyi16DcKBRcA` y `@malibufc_tenerife`.

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

## Pendientes de integración API

- Crear el proyecto y cliente OAuth en Google Cloud si se decide activar la integración API.
- Ejecutar `auth` y confirmar el canal correcto antes de usar el conector.
- Verificar `status`, `videos` y `playlists` desde la integración.
- No activar subidas, edición, analítica avanzada ni automatizaciones hasta cerrar la revisión de permisos y el flujo de confirmación.

## Personalización del canal

Estos valores están preparados para aplicarlos únicamente al canal independiente **Malibú FC**, nunca al canal personal «Iván Soto» ni a «Envite Canario».

| Campo | Valor preparado |
| --- | --- |
| Nombre | `Malibú FC` |
| Identificador | `@malibufc_tenerife`, verificado en Studio el 17-09-2026 |
| ID del canal | `UCv_TUzgGJb4Xyi16DcKBRcA`, verificado en Studio el 17-09-2026 |
| Imagen de perfil | Cargada por Iván, según confirmación; archivo oficial `assets/images/club/escudo-malibu-fc.png` |
| Descripción | Configurada por Iván; verificada en el canal público: `Canal oficial del Malibú FC, equipo de fútbol 7 de Tenerife. Aquí compartimos partidos grabados con Veo Go, goles, resúmenes y momentos del equipo. Fútbol, amistad y pasión desde Canarias.` |
| Enlace web | `https://malibufc.es/`, guardado y visible en el canal público |
| Instagram | `https://www.instagram.com/malibufc__/?hl=es`, guardado en el perfil del canal |
| Correo de contacto | `info@malibufc.es`, configurado en Studio |
| Pestaña Inicio | Activada y guardada el 17-09-2026; las secciones se poblarán al publicar contenido |

### Banner y marca de agua

Los archivos preparados en este repositorio fueron cargados por Iván, según su confirmación del 17-09-2026. El banner mide 2560 × 1440 px y pesa menos de 6 MB; la marca de agua es PNG transparente de 150 × 150 px y menos de 1 MB. El banner usa el escudo oficial y el texto «MALIBÚ FC» y «FÚTBOL 7 · TENERIFE · CANARIAS».

| Pieza | Archivo | Estado |
|---|---|---|
| Banner | `assets/images/youtube/banner-malibu-fc.png` | Cargado por Iván, según confirmación; falta revisión visual por dispositivo |
| Marca de agua | `assets/images/youtube/marca-agua-malibu-fc.png` | Cargada por Iván, según confirmación; Studio indica que se muestra durante todo el vídeo |

La configuración se guardó desde YouTube Studio en el canal correcto y la página pública fue comprobada. La revisión visual del banner por dispositivo queda pendiente. Especificaciones oficiales: [personalizar la marca del canal](https://support.google.com/youtube/answer/10456525?hl=es).

### Próximo paso editorial

La portada está activa, pero al 17-09-2026 el canal aún no tiene vídeos publicados. Cuando Iván aporte la grabación Veo Go, preparar título, descripción, miniatura, visibilidad y lista de reproducción antes de publicar. No hacer público un vídeo sin revisar el corte final y confirmar su visibilidad.

## Seguridad operativa

No guardar `client_secret.json`, `token.json`, `channel.json` ni archivos `.env` en commits. Si se sospecha una exposición, revocar el acceso desde la cuenta de Google y volver a ejecutar `auth`. El conector no modifica DNS, GitHub Pages, WhatsApp ni el contenido de YouTube.

Referencias oficiales: [OAuth para aplicaciones de escritorio](https://developers.google.com/youtube/v3/guides/auth/installed-apps), [canales y `mine=true`](https://developers.google.com/youtube/v3/guides/implementation/channels), [`playlistItems.list`](https://developers.google.com/youtube/v3/docs/playlistItems/list), [trabajo con IDs de canal](https://developers.google.com/youtube/v3/guides/working_with_channel_ids).
