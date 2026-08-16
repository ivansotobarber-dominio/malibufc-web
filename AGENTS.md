# Instrucciones permanentes del proyecto Malibú FC

## Mandato

Este repositorio es la fuente de verdad técnica, documental y operativa del ecosistema digital Malibú FC. Trabajar conforme a `docs/MASTER_PLAN.md`, ejecutar según `docs/BACKLOG.md` y respetar la secuencia de `docs/ROADMAP.md`.

No ampliar el alcance por iniciativa propia. Toda capacidad nueva debe responder a una necesidad demostrada, tener responsable, criterio de éxito y evaluación de coste, mantenimiento, privacidad y portabilidad.

## Fuentes de verdad

1. `docs/MASTER_PLAN.md`, mandato, principios, alcance y límites.
2. `docs/PROJECT_CONTEXT.md`, hechos conocidos y estado actual.
3. `docs/DECISIONS.md`, decisiones confirmadas y trazables.
4. `docs/ROADMAP.md`, fases y criterios de transición.
5. `docs/BACKLOG.md`, trabajo ejecutable y prioridad.
6. `docs/CONTENT_PENDING.md`, información que debe aportar o validar Iván.
7. `js/config.js`, datos operativos de la web.
8. `docs/malibu-control-system.md`, arquitectura y operación del control deportivo.
9. `docs/malibu-sheets-data-model.md`, modelo canónico de datos internos.
10. `docs/DOMAIN_AND_DEPLOYMENT.md`, configuración de dominio, DNS, Pages y HTTPS.
11. docs/OPERATING_WEEK.md, procedimiento semanal de convocatorias, asistencia y contenidos.
12. `docs/CANON.md`, clasificación de hechos, decisiones y pendientes.
13. `docs/REPOSITORY_AUDIT.md`, inventario y contradicciones detectadas.
14. `docs/RISKS.md`, riesgos y controles del ecosistema.
15. `docs/ASSET_REGISTER.md`, procedencia y autorización de assets.
16. `docs/VISUAL_BIBLE.md`, reglas visuales y fotográficas.
17. `docs/DESIGN_SYSTEM.md`, componentes, estados y reglas de interfaz.
18. `docs/WORKFLOWS.md`, flujos operativos y creativos.
19. `docs/HISTORY.md`, memoria histórica en construcción.

No duplicar contenido entre documentos. Actualizar el archivo propietario de cada información y usar referencias desde los demás.

## Gobierno de la información

Clasificar cada dato como confirmado, pendiente de validación o placeholder. No presentar como hecho ningún dato solo porque aparezca en código, archivos anteriores o conversaciones.

Clasificar además la información como pública, interna o restringida según `docs/MASTER_PLAN.md`. El repositorio público solo puede contener información pública y autorizada.

No almacenar teléfonos privados, número o alias de Bizum, datos bancarios, pedidos, credenciales, documentos identificativos, información médica, conflictos internos ni datos personales no autorizados. No subir material gráfico sin procedencia y permiso de publicación.

Mantener `private-data/`, `.env`, copias de hojas, exportaciones y artefactos de auditoría fuera de Git. `.env.example` solo puede contener nombres de variables y valores no sensibles.

## Arquitectura y costes

Mantener la web inicial con HTML, CSS y JavaScript puro, mobile first, sin backend, base de datos, pasarela, gestor de contenidos ni proceso de compilación. Usar GitHub Pages, dominio propio y HTTPS cuando se cierre la preparación de lanzamiento.

Priorizar coste fijo mínimo, operación sencilla, dependencias evitables y soluciones reversibles. Documentar toda nueva dependencia y justificar por qué una alternativa manual o ya disponible no resuelve el problema.

Centralizar en `js/config.js` temporada, dominio, contactos, productos, plantilla pública, calendario, entradas de demostración, patrocinadores, colaboradores, competición y redes sociales. Separar código, contenido y datos. Mantener formatos portables y evitar acoplamiento innecesario a proveedores.

No reorganizar el repositorio según una arquitectura futura antes de necesitarla. Crear carpetas y documentos cuando exista contenido real, responsable y flujo de mantenimiento.

El control deportivo interno seguirá la arquitectura frontend estático, API de Google Apps Script y Google Sheets privado. El frontend nunca se conectará directamente a Sheets, no incluirá el identificador de la hoja, credenciales ni datos reales. Todo acceso y validación se aplicará en servidor. `src/control/api.js` será la frontera entre interfaz y API para permitir cambiar el almacenamiento en el futuro.

No desplegar la integración con datos reales hasta aprobar usuarios, roles, autenticación, permisos, retención y zona horaria `Atlantic/Canary`. La mera posesión de una URL o del identificador de una hoja no constituye autenticación.

## Pedidos y pagos

La web inicia solicitudes mediante WhatsApp. El club confirma por privado disponibilidad, características, importe, plazo y entrega antes de facilitar el Bizum. La web no formaliza automáticamente la venta ni almacena datos del cliente.

Los productos solo se activan con datos y condiciones confirmados. El registro de pedidos debe permanecer en una herramienta privada con permisos restringidos.

## Proceso de trabajo

Antes de actuar:

1. Leer los documentos de gobierno afectados.
2. Comprobar el estado de Git y preservar cambios ajenos.
3. Resolver si la información está confirmada o pendiente.
4. Vincular el trabajo con una tarea del backlog o registrar una nueva.

Durante el cambio, mantenerlo pequeño, trazable, reversible y limitado a lo solicitado. Usar ramas para cambios relevantes cuando el remoto esté operativo.

Después de un cambio material:

1. Actualizar el documento propietario de la información afectada.
2. Registrar en `docs/DECISIONS.md` únicamente decisiones confirmadas.
3. Actualizar estado, dependencia o aceptación en `docs/BACKLOG.md`.
4. Actualizar `CHANGELOG.md` cuando exista y el cambio afecte una versión compartida.
5. Registrar versiones mediante Git.

No sustituir una decisión confirmada sin documentar la nueva decisión y la anterior que deja sin efecto.

## Validación

Antes de publicar código o contenido:

1. Confirmar que no existen secretos ni datos internos o restringidos.
2. Verificar que no se muestran placeholders como hechos.
3. Revisar responsive, accesibilidad básica, navegación por teclado, enlaces y errores de consola.
4. Revisar SEO básico, metadatos, `robots.txt`, sitemap, `CNAME`, dominio y HTTPS.
5. Comprobar la coherencia de WhatsApp, catálogo, condiciones de pedido y textos legales.
6. Confirmar procedencia, autorización, dimensiones y texto alternativo de las imágenes.
7. Obtener revisión del responsable funcional para cambios públicos relevantes.

No activar producción mientras exista un bloqueo P0 aplicable en `docs/BACKLOG.md`.

## Convenciones

Usar español, redacción directa y fechas `AAAA-MM-DD` con zona horaria de Canarias. Emplear nombres descriptivos en minúsculas, sin espacios, tildes ni caracteres especiales; separar palabras con guion cuando corresponda.

No crear carpetas vacías. No conservar duplicados sin una razón documentada. Mantener los datos configurables fuera de la estructura visual siempre que sea viable.

## Cierre de cada bloque de trabajo

Informar de forma concisa:

1. Trabajo realizado.
2. Archivos creados o modificados.
3. Decisiones confirmadas incorporadas.
4. Supuestos o datos todavía pendientes.
5. Riesgos técnicos, operativos, legales o de privacidad.
6. Pendientes concretos de Iván.
7. Una única próxima acción recomendada.
8. Rama, commits, publicación, pruebas e incidencias del repositorio.
