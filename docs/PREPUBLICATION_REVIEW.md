# Revisión previa a publicación

Fecha: 2026-07-30.

## Resultado

La arquitectura estática es adecuada para GitHub Pages y el alcance inicial. El dominio y HTTPS están operativos, y la identidad visual y las primeras imágenes oficiales ya están publicadas. La web no está lista todavía para su lanzamiento funcional porque faltan datos de contacto, condiciones comerciales, información deportiva validada y textos legales definitivos.

## Ajustes aplicados

1. Los productos y las entidades no confirmadas quedan desactivados; los patrocinadores y colaboradores confirmados se muestran mediante enlaces de texto.
2. Las afirmaciones deportivas y corporativas sin validación se sustituyen en la web por mensajes de preparación.
3. La web muestra un aviso visible mientras `siteReady` no sea `true`.
4. Los enlaces de contacto sin configurar quedan realmente deshabilitados para ratón y teclado.
5. La generación del catálogo evita insertar contenido de configuración mediante HTML sin escapar.
6. El menú móvil permite cierre mediante la tecla Escape.
7. Se añaden estilos de foco visible y preferencia de movimiento reducido.
8. La indexación queda bloqueada mediante `robots.txt` hasta el lanzamiento.
9. El dominio `malibufc.es`, el certificado y el forzado de HTTPS están operativos; el sitemap permanece pendiente hasta autorizar la indexación.
10. El escudo oficial sustituye los recursos provisionales visibles y se utiliza también como favicon derivado.
11. La equipación se muestra como referencia visual, con pedidos desactivados hasta confirmar sus condiciones.
12. La galería y el catálogo se han revisado a 1440 px y 390 px, sin errores ni avisos de consola.
13. Los enlaces confirmados de patrocinadores, colaboradores e Instagram se han incorporado; YouTube queda visible y desactivado como canal en construcción.
14. La identidad futbolística y canaria, la sección de historia en construcción y los enlaces oficiales de la Liga de la Amistad se han incorporado sin añadir datos deportivos no confirmados.

## Bloqueos

Los bloqueos detallados se mantienen en `docs/BACKLOG.md`. La publicación y la activación de GitHub Pages no deben ejecutarse hasta cerrar los elementos P0.

## Procedimiento de lanzamiento

1. Confirmar los contenidos y completar `js/config.js`.
2. Completar los textos legales.
3. Completar la trazabilidad histórica de las imágenes oficiales con autor y fecha aproximada.
4. Crear los DNS definidos en `docs/DOMAIN_AND_DEPLOYMENT.md`.
5. Actualizar y renombrar `sitemap.pending.xml` a `sitemap.xml`.
6. Sustituir `robots.txt` por una versión que permita indexación e incluya el sitemap definitivo.
7. Establecer `siteReady: true`.
8. Repetir las comprobaciones técnicas y visuales.
9. Publicar desde la raíz de la rama `main`, validar raíz y `www`, y activar HTTPS.
