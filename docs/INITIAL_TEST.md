# Prueba inicial del sistema

Fecha: 2026-08-16.

## Alcance

Se ha validado el flujo sintético de control deportivo sin tocar datos reales de Google Sheets:

1. Plantilla, jugadores MOCK-P001 a MOCK-P012, separados entre `first` y `second`.
2. Evento MOCK-E001, disponibilidad abierta y fecha límite.
3. Respuestas sintéticas disponible, duda y no disponible.
4. Convocatoria sintética de MOCK-P001 y MOCK-P002.
5. Dashboard sintético con jugadores, eventos, renovaciones y preparación.

La fuente de esta prueba es `src/control/api.js`. El modo está identificado en la interfaz como `Datos simulados` y no permite confundirlo con producción.

## Resultado

La capa API permite listar jugadores y eventos, consultar o guardar disponibilidad y guardar convocatorias. La interfaz separa filtros por equipo y muestra el déficit respecto al objetivo del evento. No se ha habilitado escritura contra Google Sheets.

## Prueba adicional de pedido

El catálogo público mantiene los productos como referencias. Los pedidos siguen desactivados hasta confirmar precios, tallas, stock, condiciones, responsable y WhatsApp oficial. Por tanto, el flujo de pedido real no se ejecuta con datos ficticios.

## QA técnico realizado

- `node --check` correcto en `js/app.js`, `js/config.js`, `src/control/control.js` y `src/control/api.js`.
- Parser HTML sin IDs duplicados en las páginas públicas e interna.
- Servidor local iniciado para revisión de rutas.
- QA visual automatizado pendiente de disponer del binario Chromium de Playwright en el entorno.
