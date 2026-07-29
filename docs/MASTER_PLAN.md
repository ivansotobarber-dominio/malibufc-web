# Plan maestro del ecosistema digital Malibú FC

Fecha de aprobación: 2026-07-29.

## Función del documento

Este es el documento rector del ecosistema digital Malibú FC. Define el mandato, los principios, el alcance objetivo y los límites de evolución. La secuencia de implantación se mantiene en `docs/ROADMAP.md`, el trabajo ejecutable en `docs/BACKLOG.md` y las reglas permanentes para Codex en `AGENTS.md`.

## Mandato

El repositorio será la fuente de verdad técnica, documental y operativa del proyecto Malibú FC. La web será la primera pieza visible, pero el objetivo es construir progresivamente un ecosistema ligero que conserve la memoria del club y facilite su gestión sin depender de herramientas caras ni procesos improvisados.

El ecosistema podrá cubrir:

1. Presencia pública y marca.
2. Catálogo y venta manual de productos.
3. Primer y segundo equipo.
4. Plantilla, renovaciones y disponibilidad.
5. Asistencia a entrenamientos y partidos.
6. Convocatorias y alineaciones.
7. Calendario, resultados y clasificación.
8. Comunicación interna y redes sociales.
9. Documentación institucional.
10. Patrocinadores y colaboradores.
11. Contenidos audiovisuales.
12. Archivo histórico.

La incorporación de cada capacidad dependerá de una necesidad demostrada, un responsable y un modelo de datos y privacidad adecuado.

## Principios rectores

1. Coste fijo mínimo. Priorizar servicios gratuitos o de coste anual reducido.
2. Desarrollo incremental. Validar la necesidad antes de construir funciones complejas.
3. Fuente de verdad única. Registrar en el repositorio las decisiones, documentos y datos públicos relevantes.
4. Información verificable. Marcar como pendiente todo dato no confirmado.
5. Separación de responsabilidades. Mantener diferenciados código, contenido y datos.
6. Diseño mobile first. Priorizar la experiencia móvil sin degradar el uso en ordenador.
7. Portabilidad. Evitar dependencias que dificulten trasladar dominio, contenidos o datos.
8. Protección de datos. Publicar únicamente información clasificada como pública y autorizada.
9. Operación simple. Permitir el mantenimiento por responsables sin conocimientos técnicos avanzados.
10. Reversibilidad. Favorecer decisiones técnicas y operativas que puedan deshacerse o sustituirse.

## Arquitectura evolutiva

La arquitectura se implantará por necesidad, sin crear carpetas, módulos ni dependencias vacías. El repositorio podrá evolucionar hacia cinco ámbitos:

1. `docs`, gobierno, contexto, decisiones, riesgos, modelos y planes.
2. Web pública, código estático, configuración y activos autorizados.
3. Operaciones deportivas, plantillas y procesos sin datos privados en el repositorio público.
4. Comercio, definiciones de productos, procesos y plantillas, excluyendo datos personales de pedidos.
5. Comunicación, gobierno, medios y archivo histórico.

La web inicial utilizará HTML, CSS y JavaScript puro, GitHub Pages, dominio propio, HTTPS y datos configurables. No requiere backend, base de datos ni proceso de compilación.

Los datos internos o restringidos deberán mantenerse en herramientas con acceso controlado. Google Sheets, CSV o JSON solo podrán utilizarse cuando su ubicación y permisos sean compatibles con la clasificación de la información.

## Modelo comercial inicial

La venta inicial será manual y sin pasarela:

```text
Web
→ Producto
→ WhatsApp con mensaje predefinido
→ Confirmación de disponibilidad
→ Bizum
→ Registro privado del pedido
→ Entrega
```

La web no formaliza automáticamente la venta ni almacena datos del cliente. El número o alias de Bizum y el registro de pedidos permanecerán fuera del repositorio público.

Los modelos mínimos de producto, pedido, jugador, asistencia, convocatoria, partido, contenido y patrocinador se definirán antes de implantar cada capacidad, no de forma anticipada.

## Gobierno operativo

Deberán asignarse responsables funcionales para web, productos, pedidos, plantilla, convocatorias, redes sociales, patrocinadores, documentación, material deportivo y aprobación final.

Ningún cambio público relevante se desplegará sin revisión del responsable correspondiente. Los responsables, permisos, frecuencia de actualización y mecanismo de copia de seguridad deberán quedar documentados cuando se active cada ámbito.

## Política de datos

La información se clasifica en:

### Pública

Historia confirmada, resultados publicados, jugadores con autorización, patrocinadores, productos, fotografías autorizadas y canales oficiales de contacto.

### Interna

Disponibilidad, convocatorias provisionales, asistencia, costes, márgenes, contactos operativos y actas internas.

### Restringida

Teléfonos privados, pagos, datos personales, documentos identificativos, información médica, conflictos internos y credenciales.

El repositorio público solo puede contener información pública. La presencia previa de un dato en un archivo no constituye autorización ni confirmación.

## Priorización

Las iniciativas se evaluarán por impacto operativo, frecuencia de uso, ahorro de tiempo, coste, facilidad de implantación, riesgo, dependencias y valor para jugadores, patrocinadores o visibilidad pública.

El orden estratégico es:

1. Repositorio y documentación.
2. Web pública y dominio.
3. Catálogo, WhatsApp y Bizum.
4. Datos reales del club.
5. Asistencia y convocatorias.
6. Comunicación y contenidos.
7. Identidad y activos.
8. Patrocinadores.
9. Automatización.

## Límites actuales

No se desarrollarán hasta que exista una necesidad demostrada:

1. Aplicación móvil.
2. Plataforma completa de socios.
3. Comercio electrónico avanzado.
4. Sistema de pago propio.
5. Red social o chat interno.
6. Streaming.
7. Estadísticas deportivas complejas.
8. Inteligencia artificial integrada en la web.
9. Infraestructura de servidor propia.

Antes de aprobar una evolución avanzada se documentarán el problema, usuarios, frecuencia, coste, complejidad, mantenimiento, privacidad, alternativa manual, capacidad de migración y criterio de éxito.

## Sistema documental

1. `AGENTS.md`, reglas permanentes de ejecución.
2. `docs/PROJECT_CONTEXT.md`, hechos conocidos y estado del proyecto.
3. `docs/MASTER_PLAN.md`, mandato y dirección estratégica.
4. `docs/ROADMAP.md`, fases y criterios de salida.
5. `docs/DECISIONS.md`, decisiones confirmadas con trazabilidad.
6. `docs/BACKLOG.md`, tareas ejecutables y priorizadas.
7. `docs/CONTENT_PENDING.md`, información que debe aportar o validar Iván.

La documentación especializada se creará cuando exista contenido real que gobernar. No se crearán documentos o estructuras solo para reproducir este plan.

## Resultado esperado

El ecosistema deberá convertirse progresivamente en un sistema ordenado, económico, mantenible y portable que permita gestionar la presencia pública, la operación y la memoria del Malibú FC. Cada fase deberá aportar valor autónomo y conservar una salida manual viable.
## Requisitos de información por ámbito

Estos son requisitos de diseño para las capacidades futuras. No autorizan a publicar datos ni obligan a implantar el sistema antes de su fase.

### Productos y pedidos

Cada producto deberá poder registrar identificador, nombre, descripción, precio, imágenes, tallas, colores, tipo de manga, nombre y dorsal opcionales, disponibilidad, plazo estimado, proveedor, coste, margen y estado.

Cada pedido deberá poder registrar identificador, fecha, cliente, producto, talla, personalización, importe, confirmación del pago, estado, entrega y observaciones. Los datos del cliente, pago y pedido se conservarán fuera del repositorio público.

### Gestión deportiva

La plantilla deberá poder registrar nombre, equipo asignado, posición, dorsal, estado de renovación, disponibilidad, observaciones y consentimiento para uso de imagen.

La asistencia deberá distinguir entrenamiento o partido, fecha, equipo, jugador, disponible, no disponible o pendiente, motivo opcional y hora de respuesta.

Las convocatorias deberán registrar partido, equipo, jugadores convocados y no convocados, porteros, cuerpo técnico, hora, lugar, equipación y observaciones.

Los partidos deberán registrar rival, competición, jornada, fecha, campo, resultado, goleadores, asistentes, convocatoria, incidencias y material audiovisual.

### Comunicación

El sistema de contenidos podrá cubrir convocatorias, resultados, previas, fichajes, renovaciones, comunicados, campañas de abonados, patrocinadores, productos, vídeos humorísticos y archivo histórico.

Cada contenido deberá poder registrar título, canal, objetivo, texto, imágenes, fecha prevista, estado, responsable, resultado y activos utilizados.

### Identidad y medios

Los activos oficiales podrán incluir escudo y variantes, paleta, tipografías, equipaciones, fotografías de plantilla, patrocinadores, plantillas de redes, hojas de personaje, vídeos, música, narraciones e imágenes históricas.

La futura guía de marca deberá definir uso del escudo, colores, tipografías, tono, estilo fotográfico y audiovisual, usos incorrectos y formatos.

### Patrocinadores

Cada relación deberá poder registrar patrocinador, contacto, aportación, contraprestaciones, duración, activos donde aparece, publicaciones comprometidas, estado, renovación y documentación.

Cuando exista necesidad, podrán desarrollarse dossier comercial, paquetes de patrocinio, inventario de activos, informe de visibilidad y seguimiento de compromisos.

## Estructura objetivo indicativa

La estructura podrá crecer hacia los siguientes ámbitos, siempre de forma progresiva y sin carpetas vacías:

```text
docs/
web/
operations/
  players/
  attendance/
  callups/
  matches/
  renewals/
  templates/
commerce/
  products/
  orders/
  stock/
  suppliers/
communications/
  social-media/
  campaigns/
  press/
  templates/
governance/
  minutes/
  roles/
  sponsors/
  policies/
media/
  photos/
  videos/
  character-sheets/
  source-assets/
archive/
```

Esta estructura es una dirección de crecimiento, no una instrucción para mover la web actual ni crear módulos sin responsable y contenido real.
