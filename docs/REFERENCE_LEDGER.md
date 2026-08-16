# Ledger de referencias de diseño

Fecha: 2026-08-16.

Estas referencias se han utilizado para extraer principios, no para copiar interfaces.

| Referencia | Elemento observado | Aplicación no literal en Malibú |
|---|---|---|
| [Kansas City Chiefs, Schedule](https://www.chiefs.com/schedule/) | Calendario como producto principal, con fecha, rival y contexto | Match centre propio, sin datos hasta confirmación |
| [Golden State Warriors, Schedule](https://www.nba.com/warriors/schedule) | Acceso directo a calendario y navegación por temporada | Página calendario multipágina, optimizada para móvil |
| [Golden State Warriors, roster](https://www.nba.com/team/1610612744/lineups-traditional) | Plantilla como información estructurada, no como galería anónima | Plantilla pública separada, con estados de autorización |
| [FC Barcelona, History](https://www.fcbarcelona.com/en/club/history/rewind) | Historia como archivo editorial vivo | Historia Malibú en construcción, con timeline basado en fuentes |
| [FC Barcelona, Documentation Centre](https://www.fcbarcelona.com/en/club/documentation-center/) | Archivo como activo institucional | Registro histórico progresivo de temporadas, fotos, vídeos y equipaciones |

## Hipótesis visual extraída

La web debe priorizar partido, plantilla, historia y archivo como objetos editoriales de club. El patrón válido es `objetivo → contenido real → estado → acción`, no `plantilla → tarjetas`. Esta hipótesis se mantiene compatible con el HTML, CSS y JavaScript actuales.
