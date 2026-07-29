# Contexto del proyecto Malibú FC

Fecha de consolidación: 2026-07-29.

## Función de este documento

Este documento reúne el contexto funcional y las decisiones confirmadas del proyecto. El repositorio `ivansotobarber-dominio/malibufc-web` es la fuente de verdad técnica, documental y operativa. Una afirmación no se considera confirmada por aparecer en una versión anterior de la web.

El mandato y la dirección estratégica se mantienen en `docs/MASTER_PLAN.md`, y su secuencia de implantación en `docs/ROADMAP.md`. Las decisiones se registran con detalle, fecha y origen en `docs/DECISIONS.md`. Las tareas se mantienen en `docs/BACKLOG.md` y la información que debe aportar o validar Iván se concentra en `docs/CONTENT_PENDING.md`.

## Contexto funcional confirmado

El objetivo inmediato es desarrollar, publicar y mantener la web oficial del Malibú FC con coste fijo mínimo. El dominio principal confirmado es `malibufc.es`, registrado en OVHcloud, y la publicación se realizará mediante GitHub Pages.

La primera versión debe permitir presentar el club y, cuando exista información validada, sus equipos, patrocinadores y catálogo de productos. Los pedidos se iniciarán mediante WhatsApp, serán confirmados manualmente por el club y se pagarán posteriormente por Bizum.

La web no formaliza automáticamente la venta, no almacena pedidos y no publica datos de pago. El seguimiento de pedidos y los datos personales deben mantenerse fuera del repositorio, en un entorno restringido.

## Decisiones confirmadas

1. El repositorio será la fuente de verdad técnica, documental y operativa del proyecto.
2. La primera versión cubrirá web oficial, dominio propio, catálogo, pedidos por WhatsApp y pagos posteriores por Bizum.
3. La arquitectura utilizará HTML, CSS y JavaScript puro.
4. Inicialmente no habrá backend, base de datos, registro de usuarios ni pasarela de pago.
5. La solución priorizará el coste fijo mínimo.
6. El alojamiento será GitHub Pages, con `malibufc.es` como dominio principal y `www.malibufc.es` como variante secundaria.
7. El diseño será responsive.
8. Los datos operativos modificables se centralizarán en `js/config.js`.
9. No se inventará información y se separarán hechos confirmados, pendientes y placeholders.
10. La arquitectura se mantendrá portable para una migración futura.
11. El número o alias de Bizum se comunicará de forma privada después de confirmar el pedido y nunca se almacenará en el repositorio público.

## Arquitectura actual

`index.html` contiene la portada. `css/styles.css` y `css/review.css` contienen el sistema visual, los puntos de ruptura responsive y los ajustes de accesibilidad. `js/config.js` contiene los datos operativos. `js/app.js` genera catálogo y patrocinadores, configura los enlaces de contacto y controla el menú móvil.

`aviso-legal.html`, `privacidad.html` y `condiciones-pedido.html` son borradores. `assets/logo-provisional.svg`, `assets/favicon.svg` y `assets/producto-camiseta.svg` son recursos provisionales.

La indexación está bloqueada temporalmente mediante `robots.txt`. El archivo `CNAME` ya declara `malibufc.es`. El sitemap se conserva como `sitemap.pending.xml` hasta cerrar el resto de bloqueos de publicación. La configuración operativa del dominio se mantiene en `docs/DOMAIN_AND_DEPLOYMENT.md`.

## Modelo operativo previsto

GitHub alojará el código y GitHub Pages servirá los archivos estáticos desde la raíz de `main`. `malibufc.es` será el nombre canónico y `www.malibufc.es` redirigirá al dominio raíz cuando los DNS y el certificado estén activos.

`js/config.js` será el punto de actualización de temporada, dominio, contactos, productos y patrocinadores. Los productos y patrocinadores permanecerán desactivados hasta confirmar sus datos y su autorización de publicación.

Cada producto activo podrá abrir WhatsApp con un mensaje asociado. El club deberá confirmar disponibilidad, características, importe, plazo y entrega antes de facilitar los datos de Bizum por privado.

## Sistema interno de control deportivo

El club dispone de una hoja privada de Google Sheets como fuente operativa confirmada para plantilla, eventos, disponibilidad, convocatorias y asistencia. El Excel local asociado es una referencia privada y queda excluido del repositorio.

La integración futura utilizará un frontend estático separado de la web pública, una API de Google Apps Script y Google Sheets. No habrá conexión directa desde el navegador a la hoja. La fase 1 funciona exclusivamente con datos simulados; la conexión real requiere aprobar previamente autenticación, permisos por rol, retención, catálogos y corrección de la zona horaria.

El diagnóstico funcional y técnico se mantiene en `docs/malibu-control-system.md`. El modelo canónico y el mapeo de las hojas actuales se mantienen en `docs/malibu-sheets-data-model.md`.

## Información pendiente de validación

Los siguientes datos aparecen en antecedentes o recursos iniciales, pero no cuentan todavía con confirmación documental:

1. Ubicación en Santa Cruz de Tenerife.
2. Modalidad de fútbol 7.
3. Existencia de dos equipos.
4. Ascenso a Primera en la Liga Clausura 2026.
5. Temporada 2026/27.
6. Lema “Más que un sentimiento, una familia”.
7. Relación con La Laguna Gran Hotel como patrocinador.
8. Camiseta oficial, opciones de personalización y condiciones comerciales.
9. WhatsApp, Instagram y correo oficiales.
10. Identidad del responsable de la web y del vendedor.

Estos elementos no deben publicarse como hechos ni activar funcionalidades hasta que Iván o la directiva los confirmen. El detalle requerido se mantiene en `docs/CONTENT_PENDING.md`.

## Estado de preparación

La base técnica es adecuada para el alcance inicial y no necesita dependencias ni proceso de compilación. La publicación definitiva continúa bloqueada por información legal, comercial, deportiva, de contacto e imágenes. El dominio está confirmado y GitHub Pages está activo, pero la delegación DNS continúa en `NXDOMAIN`; por ello el dominio y el certificado todavía no están operativos.

El repositorio público `ivansotobarber-dominio/malibufc-web` está operativo. `main` contiene el commit inicial y GitHub Pages publica desde `/(root)`. GitHub reconoce `malibufc.es` como dominio personalizado; quedan pendientes la delegación DNS, el certificado y `Enforce HTTPS`.
