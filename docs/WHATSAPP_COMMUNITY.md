# Comunidad de WhatsApp, Malibú FC

Estado: estructura operativa preparada; nombres, administradores y enlaces concretos pendientes de validación, 2026-08-10.

## Estructura recomendada

La comunidad existente puede ser la contenedora. No se crea un grupo adicional de avisos oficiales porque duplicaría el grupo general.

| Espacio | Audiencia | Uso | Permiso recomendado |
| --- | --- | --- | --- |
| Cúpula / administración deportiva | dirección y responsables | decisiones, incidencias de primer y segundo equipo, seguimiento diario | solo responsables |
| Convocatorias, primer equipo | jugadores y responsables del primer equipo | disponibilidad, convocatoria y confirmación de asistencia | mensajes restringidos cuando se cierre la convocatoria |
| Convocatorias, segundo equipo | jugadores y responsables del segundo equipo | mismo flujo, completamente separado | mensajes restringidos cuando se cierre la convocatoria |
| General | todo el entorno del club | conversación, apoyo, fotos y vida social | conversación abierta con moderación |

## Categorías de mensajes

- `OPERATIVO`, disponibilidad, lesión comunicada, cambio de hora o campo.
- `CONVOCATORIA-1`, primer equipo.
- `CONVOCATORIA-2`, segundo equipo.
- `DECISIÓN`, asunto que requiere voto de la cúpula.
- `CONTENIDO`, fotos, vídeos, permisos y material para redes.
- `LOGÍSTICA`, equipación, transporte, pagos internos o material.
- `HITO`, ascenso, patrocinio, campaña o anuncio relevante.

## Flujo de convocatoria

1. Responsable deportivo abre una encuesta de disponibilidad en el grupo del equipo correspondiente.
2. Se fija una hora límite y se registra el resultado en la herramienta privada de control.
3. Se prepara un borrador de convocatoria sin publicar nombres no confirmados.
4. La cúpula valida excepciones, cambios y dudas.
5. Se envía la convocatoria cerrada al grupo correcto.
6. El resultado y la asistencia se archivan en el control privado, no en la web pública automáticamente.

## Flujo de incidencias

La cúpula usa un formato breve: `FECHA · EQUIPO · TIPO · HECHO · IMPACTO · ACCIÓN · RESPONSABLE · PRÓXIMA REVISIÓN`. No se comparten diagnósticos médicos, documentos ni datos sensibles en la comunidad.

## Automatización por fases

- Fase 1, manual con plantillas y encuestas nativas de WhatsApp.
- Fase 2, consolidación en Google Sheets privado y Apps Script, sin leer mensajes de WhatsApp automáticamente.
- Fase 3, integración oficial sólo si el volumen justifica coste, permisos, mantenimiento y cumplimiento.

No se usarán bots no oficiales, scraping de WhatsApp, sesiones clonadas ni credenciales compartidas.

## Configuración pendiente de Iván

- Nombre definitivo de la comunidad y de los cuatro espacios.
- Lista de administradores por espacio.
- Quién puede cerrar convocatorias y quién puede corregirlas.
- Hora límite estándar de disponibilidad.
- Enlace de invitación, si se desea publicarlo.
