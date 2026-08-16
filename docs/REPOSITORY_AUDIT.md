# Auditoría inicial del repositorio

Fecha: 2026-08-16.

## Resultado ejecutivo

El repositorio ya contiene una web estática multipágina, un modelo operativo de Google Sheets, una estructura inicial de Google Apps Script, documentación de gobierno, assets oficiales y un conector de YouTube en modo lectura. No conviene reconstruirlo. La prioridad es corregir documentos desactualizados, ordenar el canon y cerrar los bloqueos de publicación.

## Inventario

| Ámbito | Evidencia | Estado |
|---|---|---|
| Web pública | `index.html`, `/plantilla/`, `/calendario/`, `/tienda/`, legales | Implementada, pendiente de aprobación pública |
| Diseño | `css/styles.css`, `css/review.css`, brief de rediseño | Sistema visual existente, necesita bible persistente |
| Datos públicos | `js/config.js`, `js/app.js` | Centralizados, con placeholders explícitos |
| Operación deportiva | `src/control/`, `apps-script/`, Google Sheets privado | Fase 1 sintética, API no desplegada |
| Gobierno | `AGENTS.md`, `MASTER_PLAN`, `PROJECT_CONTEXT`, `DECISIONS`, `BACKLOG`, `ROADMAP` | Existente, con una contradicción histórica corregida |
| Medios | `malibu-campana-2026-2027/`, assets de equipo y producto | Parcial, sin archivo histórico completo |
| YouTube | `tools/youtube_malibu.py`, `docs/YOUTUBE_MALIBU.md` | Conector aislado, lectura y OAuth preparados |
| Publicación | `CNAME`, `DOMAIN_AND_DEPLOYMENT.md`, GitHub remoto | Operativa según el contexto consolidado |

## Contradicciones detectadas

1. `ROADMAP.md` indicaba que GitHub Pages y el dominio no estaban activos, mientras `PROJECT_CONTEXT.md` y el historial de despliegue los daban por operativos. Se actualizó el estado del roadmap al 2026-08-16.
2. `BACKLOG.md` contenía las filas PR-13 y PR-14 unidas en una sola fila Markdown. Se separaron para preservar trazabilidad.
3. La web contiene placeholders visibles, pero están etiquetados como pendientes o demostración. No son datos canónicos y bloquean la activación comercial e indexación.
4. La historia del club solo tiene antecedentes y correcciones; no existe todavía una cronología confirmada. Se mantiene en construcción.

## Duplicidades controladas

La estrategia pertenece a `MASTER_PLAN`, los hechos a `PROJECT_CONTEXT`, las decisiones a `DECISIONS`, las tareas a `BACKLOG` y la operación semanal a `OPERATING_WEEK`. Los nuevos documentos de canon, riesgos, bible, workflows y activos solo resumen reglas y enlazan al propietario; no sustituyen esos documentos.

## Próximo criterio de control

Antes de cada publicación se debe comprobar que el dato procede de `js/config.js` o de una fuente documental confirmada, que el asset figura en `ASSET_REGISTER.md`, que los placeholders siguen visibles como tales y que no se han incorporado datos internos al repositorio público.
