# Web oficial del Malibú FC

Fuente de verdad técnica y documental de la web oficial del Malibú FC. La solución utiliza HTML, CSS y JavaScript puro, GitHub Pages y el dominio confirmado `malibufc.es`, sin servidor, base de datos ni pasarela de pago.

## Estado

El repositorio público y GitHub Pages están activos. El dominio continúa sin resolución DNS y la web no está autorizada todavía para indexación ni venta de productos. Los bloqueos vigentes se mantienen en `docs/BACKLOG.md`.

## Documentación principal

1. `AGENTS.md`, reglas permanentes del proyecto.
2. `docs/PROJECT_CONTEXT.md`, contexto y estado consolidado.
3. `docs/DECISIONS.md`, decisiones confirmadas.
4. `docs/BACKLOG.md`, tareas priorizadas.
5. `docs/CONTENT_PENDING.md`, información que debe aportar Iván.

## Edición rápida

Los datos principales están en `js/config.js`. Se pueden cambiar productos, patrocinadores, temporada y canales de contacto sin modificar el diseño.

No incluir nunca el número o alias de Bizum en el repositorio. Se comunica por privado después de confirmar cada pedido.

## Dominio y publicación

`malibufc.es` es el dominio principal y `www.malibufc.es` redirigirá al dominio raíz. La configuración de GitHub Pages, los registros exactos de OVHcloud, HTTPS, comprobaciones y reversión se mantienen exclusivamente en `docs/DOMAIN_AND_DEPLOYMENT.md`.

La publicación definitiva continúa condicionada al cierre de los P0 de `docs/BACKLOG.md`.

## Migración futura

El dominio es independiente del alojamiento. Para migrar a WordPress, Shopify, Webflow u otra plataforma, se crea la nueva web, se prueba y después se cambian los DNS. La dirección pública puede mantenerse.
