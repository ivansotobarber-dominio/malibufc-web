# Comunidad de WhatsApp, Malibú FC

Estado: estructura operativa preparada; nombres, administradores y enlaces concretos pendientes de validación, 2026-08-10.

## Recomendación ejecutiva

No se puede crear una cuenta de WhatsApp sólo con correo. WhatsApp Business exige un número que pueda recibir un código por SMS o llamada. La recomendación es usar el mismo teléfono de Iván, pero con una línea móvil o eSIM exclusiva del club, registrarla en WhatsApp Business y mantener el WhatsApp personal como respaldo administrativo. WhatsApp Business permite trabajar desde el mismo dispositivo con su propio número; no conviene mezclar ambos usos en el mismo número.\n\nSi Iván decide utilizar el mismo número personal, habrá que migrarlo a WhatsApp Business: se conservará la cuenta empresarial en ese número, pero dejará de ser una cuenta personal separada. Es una opción válida para el piloto, no la arquitectura final recomendada.

La solución inicial no necesita WhatsApp Business Platform ni un bot. WhatsApp Business App es gratuita y suficiente para el uso diario, perfiles, respuestas rápidas, etiquetas y gestión de grupos. La automatización debe vivir en Google Sheets privado + Apps Script: recoge disponibilidad, calcula el borrador, registra quién respondió y genera el mensaje que un administrador revisa y pega en el grupo.

La API oficial de WhatsApp se reservará para mensajes directos y procesos de atención cuando el volumen lo justifique. No se debe diseñar como si pudiera leer y moderar automáticamente las conversaciones de los grupos existentes.

## Estructura recomendada

La comunidad existente puede ser la contenedora. No se crea un grupo adicional de avisos oficiales porque duplicaría el grupo general.

Los tres grupos ya creados son suficientes para empezar:

- `General`, conversación y vida social.
- `Convocatorias 1ª`, disponibilidad y convocatorias del primer equipo.
- `Convocatorias 2ª`, disponibilidad y convocatorias del segundo equipo.

La cúpula deportiva debe mantenerse como grupo privado de administradores, dentro o fuera de la comunidad según la configuración disponible, pero no se mezcla con jugadores.

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

## Flujo recomendado de convocatorias

| Momento | Acción | Responsable | Salida |
| --- | --- | --- | --- |
| T-72 h | Publicar encuesta de disponibilidad en el grupo del equipo | Responsable deportivo | respuestas sí, no o duda |
| T-48 h | Cerrar encuesta y revisar incidencias | Responsable deportivo | lista de disponibles y alertas |
| T-36 h | Generar borrador de convocatoria desde Sheets | Sistema privado | texto sin publicar |
| T-24 h | Validar excepciones en la cúpula | Dirección deportiva | convocatoria aprobada |
| T-24/T-12 h | Pegar convocatoria en el grupo correcto | Administrador | confirmaciones finales |
| Día de partido | Registrar cambios y asistencia | Responsable de partido | acta interna |
| T+1 | Cerrar asistencia, resultado y contenido autorizado | Dirección deportiva y comunicación | histórico y paquete de redes |

## Modelo privado mínimo

La hoja de control debe separar `personas`, `equipos`, `eventos`, `disponibilidad`, `convocatorias`, `asistencia`, `incidencias` y `registro_mensajes`. Los grupos sólo reciben el resultado necesario; no se publica la hoja ni se almacenan datos sensibles en WhatsApp.

## Coste y decisión

- Opción recomendada ahora: WhatsApp Business App + línea del club + Google Sheets/Apps Script. Coste de software de WhatsApp: cero; queda el coste de la línea móvil.
- Opción posterior: WhatsApp Business Platform/Cloud API. Requiere número, Meta Business y configuración técnica; el coste depende de conversaciones y proveedor. No aporta valor suficiente mientras las convocatorias sean de dos grupos y se puedan revisar manualmente.

No se usarán bots no oficiales, scraping de WhatsApp, sesiones clonadas ni credenciales compartidas.

## Configuración pendiente de Iván

- Nombre definitivo de la comunidad y de los cuatro espacios.
- Lista de administradores por espacio.
- Quién puede cerrar convocatorias y quién puede corregirlas.
- Hora límite estándar de disponibilidad.
- Enlace de invitación, si se desea publicarlo.
