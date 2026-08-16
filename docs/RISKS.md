# Riesgos y controles

Fecha: 2026-08-16.

| ID | Riesgo | Nivel | Control | Responsable |
|---|---|---|---|---|
| R-01 | Publicar datos deportivos no confirmados | Alto | P0 AH-04, revisión de responsable deportivo | Iván y directiva |
| R-02 | Exponer datos personales de plantilla o pedidos | Crítico | Hoja privada, sin datos reales en Git, revisión previa | Codex y administrador |
| R-03 | Expectativa de compra por precios o stock ficticios | Alto | Pedidos desactivados y copy de referencia | Responsable de productos |
| R-04 | Confundir canal personal, Envite y Malibú en YouTube | Alto | `channel_id` canónico y conector aislado | Iván |
| R-05 | Desfase horario en convocatorias | Medio | Google Sheets y Apps Script en `Atlantic/Canary` | Administrador de Sheets |
| R-06 | Historia convertida en hecho sin pruebas | Alto | Historia marcada en construcción y canon con fuentes | Responsable de historia |
| R-07 | Dependencia excesiva de un proveedor | Medio | HTML estático, datos centralizados y API aislada | Responsable web |
| R-08 | Cambios públicos sin aprobador | Alto | Matriz de responsables y launch gate | Iván |

No se cierra un riesgo por intención. Se cierra cuando existe evidencia verificable y queda registrada.
