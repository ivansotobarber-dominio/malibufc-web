# Modelo operativo semanal, Malibú FC

Estado: procedimiento base para el primer y segundo equipo, 2026-08-10.

## 1. Arquitectura de trabajo

```mermaid
flowchart TB
  W[WhatsApp normal de Iván] --> P[Encuestas y mensajes]
  P --> S[Google Sheets privado]
  S --> A[Apps Script]
  A --> D[Borrador de convocatoria]
  D --> R[Revisión responsable]
  R --> G[Grupo Convocatorias 1ª o 2ª]
  G --> S
  S --> K[Registro de asistencia]
  K --> C[Contenido autorizado]
  C --> I[Instagram, YouTube y web]
```

La web pública nunca consulta directamente la hoja de control. La hoja contiene los datos internos y Apps Script aplica validaciones y permisos. WhatsApp sirve para coordinar y confirmar; la hoja conserva el histórico.

## 2. Roles mínimos

| Rol | Responsabilidad semanal | Sustituto |
| --- | --- | --- |
| Dirección deportiva | decisiones entre equipos, excepciones y cierre | por asignar |
| Responsable primer equipo | encuesta, convocatoria y asistencia de primera | por asignar |
| Responsable segundo equipo | encuesta, convocatoria y asistencia de segunda | por asignar |
| Comunicación | fotos, textos, redes y web | por asignar |
| Administrador de datos | Sheets, Apps Script, copias y auditoría | Codex durante el piloto |

Cada equipo debe tener responsable y suplente. Nadie debe depender de una sola persona para cerrar una convocatoria.

## 3. Preparación única

1. Confirmar zona horaria de Google Sheets: `Atlantic/Canary`.
2. Confirmar usuarios y roles en `docs/malibu-control-system.md`.
3. Mantener una hoja privada con estas pestañas: `Inicio`, `Listas`, `Plantilla`, `Eventos`, `Disponibilidad`, `Convocatorias`, `Asistencia`, `Resumen jugadores`, `Dashboard` y `Mensajes y uso`.
4. Definir `teamId` fijo: `first` y `second`.
5. Crear una fila de evento antes de abrir cada encuesta.
6. Preparar en WhatsApp mensajes guardados para disponibilidad, cierre, convocatoria, cambio y asistencia.
7. Probar un evento ficticio de cada equipo antes de usar datos reales.

## 4. Rutina semanal base

La semana se organiza alrededor de la hora de cada partido. Si el partido cambia de día, se desplazan los hitos manteniendo las mismas distancias.

### Lunes, cierre y aprendizaje

- Dirección deportiva cierra el resultado, asistencia e incidencias del fin de semana.
- Comunicación selecciona fotos y vídeos con permiso de publicación.
- Se registra qué contenido se publica y qué queda pendiente.
- Se revisan errores de convocatoria y faltantes de datos.

### Martes, planificación

- Responsables confirman partidos, entrenamientos, rival, campo y hora.
- Se crean los eventos de `first` y `second` en Sheets.
- Se define el objetivo de convocatoria y la fecha límite de respuesta.
- Comunicación reserva el paquete de contenidos de la semana.

### Miércoles, apertura de disponibilidad

- Se publica en `Convocatorias 1ª` la encuesta del primer equipo.
- Se publica en `Convocatorias 2ª` la encuesta del segundo equipo.
- El mensaje incluye evento, fecha, hora límite y respuestas permitidas: `sí`, `no`, `duda`.
- No se solicitan diagnósticos ni información médica en el grupo.

### Jueves, seguimiento

- El responsable revisa no respuestas y dudas.
- Se envía un recordatorio sólo a quienes no han respondido, si es posible sin exponer datos.
- Las incidencias se resumen en la cúpula con el formato `EQUIPO · HECHO · IMPACTO · ACCIÓN · RESPONSABLE`.
- Apps Script recalcula disponibles, no disponibles, dudas y déficit.

### Viernes, cierre y borrador

- Se cierra la encuesta a la hora definida.
- Se revisan elegibilidad, duplicados, bajas y cupo.
- Se genera el borrador de convocatoria para cada equipo.
- Dirección deportiva valida excepciones.
- El responsable envía la convocatoria final al grupo correcto.

### Día de partido

- Se registran cambios de última hora en la cúpula.
- Se evita editar mensajes antiguos sin dejar una corrección fechada.
- El responsable registra llegada, asistencia y cualquier incidencia operativa.
- Comunicación captura material sólo con autorización.

### Día posterior

- Se cierra asistencia y resultado en Sheets.
- Se calculan indicadores sin mezclar equipos.
- Se prepara, si procede, un resultado para la web, un reel, stories y un borrador de YouTube.
- Todo dato público requiere confirmación antes de publicar.

## 5. Plantillas de WhatsApp

### Apertura de disponibilidad

`[DISPONIBILIDAD · 1ª/2ª] Partido contra [RIVAL], [DÍA] a las [HORA], en [CAMPO]. Responde a la encuesta antes de [LÍMITE]. Si tienes una limitación horaria, indícala por privado al responsable.`

### Convocatoria

`[CONVOCATORIA · 1ª/2ª] Partido contra [RIVAL], [DÍA] [HORA], [CAMPO]. Citación: [HORA]. Convocados: [LISTA AUTORIZADA]. Reservas: [LISTA]. Confirmen recepción en la encuesta o al responsable.`

### Cambio

`[CAMBIO · 1ª/2ª] Se modifica [DATO] del evento [EVENTO]. Nuevo dato: [VALOR]. Responsable: [NOMBRE]. Actualizado: [FECHA Y HORA CANARIAS].`

## 6. Reglas de datos y privacidad

- La hoja es privada y no se publica en GitHub ni se enlaza desde la web.
- Teléfonos, observaciones médicas, disciplina y conflictos sólo se registran si son imprescindibles y con acceso restringido.
- Las convocatorias públicas sólo se publican con nombres y fotografías autorizados.
- El grupo no sustituye al histórico: cada decisión se registra en Sheets.
- No se automatiza WhatsApp normal mediante scraping, sesiones clonadas o bots no oficiales.

## 7. Indicadores semanales

- porcentaje de respuestas por equipo,
- no respuestas antes del cierre,
- disponibilidad positiva,
- convocados y reservas,
- confirmaciones,
- asistencia, retrasos y ausencias justificadas,
- cambios de última hora,
- errores detectados,
- tiempo entre cierre y convocatoria,
- piezas de contenido producidas y publicadas.

Los porcentajes deben mostrar siempre numerador, denominador, equipo y periodo.

## 8. Cierre de semana

El domingo o lunes se archiva un resumen breve: partidos celebrados, convocatorias cerradas, incidencias abiertas, datos que faltan, contenidos publicados, decisiones de la cúpula y tres prioridades de la siguiente semana.

## 9. Primera semana de implantación

1. Confirmar responsables y suplentes.
2. Confirmar zona horaria y catálogos de la hoja.
3. Crear un evento de prueba para cada equipo.
4. Ejecutar encuestas y generar borradores sin publicar datos reales.
5. Revisar permisos y mensajes.
6. Ejecutar el primer ciclo real con revisión manual.
7. Registrar errores y ajustar tiempos antes de automatizar más.
