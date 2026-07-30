# Backlog del ecosistema digital Malibú FC

Fecha de revisión: 2026-07-29.

Este documento contiene únicamente trabajo ejecutable. La estrategia se mantiene en `docs/MASTER_PLAN.md` y la secuencia de fases en `docs/ROADMAP.md`.

Prioridades: P0 bloquea un hito comprometido, P1 aporta valor inmediato, P2 mejora una capacidad existente y P3 requiere validación previa.

## Ahora

| ID | Prioridad | Tarea | Responsable | Dependencia | Criterio de aceptación |
|---|---|---|---|---|---|
| AH-03 | P0 | Confirmar responsable de la web y vendedor | Iván y directiva | Datos legales | Identidad y datos mínimos disponibles para textos legales |
| AH-04 | P0 | Validar información deportiva y corporativa existente | Iván y directiva | Fuente autorizada | Cada dato pendiente de `PROJECT_CONTEXT.md` queda confirmado, corregido o retirado |
| AH-06 | P0 | Confirmar WhatsApp, Instagram y decisión sobre correo | Iván | Canales oficiales | Enlaces configurados y probados |
| AH-07 | P0 | Definir productos y condiciones comerciales | Iván y directiva | Proveedor y operativa | Precio, impuestos, variantes, disponibilidad, entrega, cambios e incidencias confirmados |
| AH-08 | P0 | Completar aviso legal, privacidad y condiciones de pedido | Responsable legal por confirmar | AH-03 y AH-07 | Textos sin marcadores pendientes y coherentes con la operación |
| AH-09 | P0 | Sustituir placeholders y activar datos públicos confirmados | Codex | AH-04 a AH-08 | La web solo muestra información confirmada |
| AH-10 | P0 | Ejecutar revisión final de publicación | Codex | AH-09 | Responsive, teclado, enlaces, consola, SEO, privacidad y secretos validados |
| AH-11 | P0 | Habilitar indexación tras la revisión final | Codex e Iván | AH-10 | HTTPS ya operativo; `robots.txt` y sitemap definitivos habilitados tras aprobar la publicación |
| AH-12 | P1 | Asignar responsables funcionales y aprobador final | Directiva | Acuerdo organizativo | Responsables y suplencias documentados |

## Próximo

| ID | Prioridad | Tarea | Responsable | Dependencia | Criterio de aceptación |
|---|---|---|---|---|---|
| PR-01 | P1 | Definir el modelo mínimo de producto | Responsable de productos por asignar | AH-07 | Campos, reglas y responsable documentados |
| PR-02 | P1 | Implantar un registro privado de pedidos | Responsable de pedidos por asignar | PR-01 | Herramienta, permisos, estados y copia de seguridad probados |
| PR-03 | P1 | Documentar el procedimiento de pedido, cobro y entrega | Responsable de pedidos por asignar | PR-02 | Flujo operable por un suplente sin instrucciones externas |
| PR-04 | P1 | Definir proceso de actualización y recuperación de la web | Responsable web por asignar | AH-01 y AH-12 | Frecuencia, revisión, copia y restauración documentadas |
| PR-05 | P1 | Verificar indexación y sitemap | Responsable web por asignar | AH-11 | Sitemap enviado y estado de indexación comprobado |
| PR-06 | P2 | Crear guía de identidad con activos confirmados | Responsable de comunicación por asignar | Activos oficiales publicados | Usos, colores, tipografías, tono y formatos documentados |
| PR-07 | P2 | Crear plan de contenidos y plantillas iniciales | Responsable de comunicación por asignar | AH-12 y PR-06 | Flujo editorial y plantillas reutilizables aprobados |
| PR-08 | P0 | Corregir zona horaria de la hoja de control a `Atlantic/Canary` | Iván o administrador de Sheets | Confirmación de impacto y copia de seguridad | Zona horaria verificada y fechas existentes conciliadas |
| PR-09 | P0 | Aprobar usuarios, roles, autenticación, permisos y retención del control deportivo | Iván y dirección deportiva | `docs/malibu-control-system.md` | Matriz nominal aprobada y prueba de acceso no autorizado superada |
| PR-10 | P1 | Aprobar catálogos y modelo canónico del control deportivo | Responsable deportivo por asignar | `docs/malibu-sheets-data-model.md` | Campos, estados, claves y reglas de integridad confirmados |
| PR-11 | P1 | Migrar Google Sheets y completar Apps Script fase 2 | Codex y responsable deportivo | PR-08 a PR-10 | Copia, migración conciliada, API validada y auditoría activa |
| PR-12 | P1 | Pilotar el ciclo evento, disponibilidad, convocatoria y asistencia | Responsable deportivo por asignar | PR-11 | Un ciclo real autorizado cerrado sin errores críticos y con conciliación manual |

## Más adelante

| ID | Prioridad | Tarea | Responsable | Dependencia | Criterio de aceptación |
|---|---|---|---|---|---|
| MA-03 | P2 | Implantar sistema de comunicación y archivo de contenidos | Responsable de comunicación por asignar | PR-07 | Publicaciones trazables por objetivo, activo, fecha, estado y resultado |
| MA-04 | P2 | Centralizar activos visuales oficiales | Responsable de comunicación por asignar | PR-06 | Versiones, procedencia, autorizaciones y usos registrados |
| MA-05 | P2 | Definir modelo y seguimiento de patrocinadores | Responsable comercial por asignar | AH-12 | Compromisos, vigencia, activos y renovaciones trazables |
| MA-06 | P3 | Evaluar una plataforma más profesional | Responsable web por asignar | Volumen o limitación demostrada | Informe de requisitos, costes, riesgos y umbral de migración aprobado |

## En espera

| ID | Prioridad | Tarea | Responsable | Dependencia | Criterio de aceptación |
|---|---|---|---|---|---|
| ES-01 | P3 | Evaluar base de datos y panel de administración | Por asignar | Uso recurrente no cubierto manualmente | Caso de negocio y privacidad aprobados |
| ES-02 | P3 | Evaluar stock en tiempo real y pago con tarjeta | Por asignar | Volumen de ventas suficiente | Coste total, margen y operación justifican la inversión |
| ES-03 | P3 | Evaluar área privada, socios o abonados | Por asignar | Necesidad y usuarios definidos | Alcance, identidad, permisos y mantenimiento aprobados |
| ES-04 | P3 | Evaluar automatización de convocatorias, calendario y redes | Por asignar | Procesos manuales medidos | Ahorro esperado y criterio de éxito cuantificados |
| ES-05 | P3 | Evaluar analítica y almacenamiento profesional de medios | Por asignar | Objetivo de uso y política de privacidad | Herramienta, coste, retención y permisos aprobados |

## Descartado para el alcance actual

| ID | Prioridad | Tarea | Responsable | Dependencia | Criterio de reconsideración |
|---|---|---|---|---|---|
| DE-01 | P3 | Aplicación móvil propia | No asignado | Ninguna | Uso recurrente que la web responsive no pueda cubrir |
| DE-02 | P3 | Comercio electrónico avanzado o sistema de pago propio | No asignado | Ninguna | Volumen que haga insuficiente el flujo manual |
| DE-03 | P3 | Red social, chat interno o streaming | No asignado | Ninguna | Necesidad estratégica aprobada y recursos de operación |
| DE-04 | P3 | Estadísticas deportivas complejas o IA integrada en la web | No asignado | Ninguna | Problema definido, datos suficientes y retorno demostrable |
| DE-05 | P3 | Infraestructura de servidor propia | No asignado | Ninguna | Requisito técnico que no pueda resolverse con servicios gestionados y portables |
