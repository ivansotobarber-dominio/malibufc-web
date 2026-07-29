# Revisión previa a publicación

Fecha: 2026-07-29.

## Resultado

La arquitectura estática es adecuada para GitHub Pages y el alcance inicial. La web no está lista todavía para producción porque faltan datos confirmados, recursos oficiales y textos legales.

## Ajustes aplicados

1. Los productos y patrocinadores no confirmados quedan desactivados.
2. Las afirmaciones deportivas y corporativas sin validación se sustituyen en la web por mensajes de preparación.
3. La web muestra un aviso visible mientras `siteReady` no sea `true`.
4. Los enlaces de contacto sin configurar quedan realmente deshabilitados para ratón y teclado.
5. La generación del catálogo evita insertar contenido de configuración mediante HTML sin escapar.
6. El menú móvil permite cierre mediante la tecla Escape.
7. Se añaden estilos de foco visible y preferencia de movimiento reducido.
8. La indexación queda bloqueada mediante `robots.txt` hasta el lanzamiento.
9. El dominio `malibufc.es` está confirmado y dispone de `CNAME`; el sitemap permanece pendiente hasta autorizar la indexación.

## Bloqueos

Los bloqueos detallados se mantienen en `docs/BACKLOG.md`. La publicación y la activación de GitHub Pages no deben ejecutarse hasta cerrar los elementos P0.

## Procedimiento de lanzamiento

1. Confirmar los contenidos y completar `js/config.js`.
2. Completar los textos legales.
3. Sustituir los recursos provisionales.
4. Crear los DNS definidos en `docs/DOMAIN_AND_DEPLOYMENT.md`.
5. Actualizar y renombrar `sitemap.pending.xml` a `sitemap.xml`.
6. Sustituir `robots.txt` por una versión que permita indexación e incluya el sitemap definitivo.
7. Establecer `siteReady: true`.
8. Repetir las comprobaciones técnicas y visuales.
9. Publicar desde la raíz de la rama `main`, validar raíz y `www`, y activar HTTPS.
