# API de control deportivo

Estado: estructura de fase 1, no desplegada y sin escrituras habilitadas.

## Configuración futura

1. Crear un proyecto de Google Apps Script con zona horaria `Atlantic/Canary`.
2. Copiar estos archivos conservando sus nombres.
3. Crear la propiedad de script `SPREADSHEET_ID` con el identificador de la hoja privada.
4. Aprobar scopes mínimos, identidad de ejecución, usuarios autorizados y política de despliegue.
5. Probar primero con una copia sin datos personales.
6. Habilitar escrituras únicamente después de aprobar y probar el modelo canónico.

Apps Script admite web apps mediante `doGet` y `doPost`. La identidad efectiva depende de la opción de despliegue, por lo que no debe publicarse como acceso anónimo a una hoja privada. La API deberá incorporar autorización por rol antes de conectarse al frontend.

El identificador de la hoja no es un secreto suficiente ni una credencial. Debe permanecer fuera del frontend y configurarse en propiedades del script.

## Enrutado

La web app recibe la ruta lógica en el parámetro `path`, por ejemplo:

```text
https://script.google.com/macros/s/DEPLOYMENT_ID/exec?path=/v1/health
```

Apps Script solo expone `doGet` y `doPost`. Las actualizaciones `PUT` se enviarán como `POST` con `_method: "PUT"` hasta migrar a una API con métodos HTTP nativos.

## Limitaciones deliberadas

- Las operaciones de escritura responden `NOT_IMPLEMENTED`.
- La lectura refleja el esquema actual, no el modelo canónico definitivo.
- No hay todavía autenticación ni autorización por rol.
- No se ha configurado ningún identificador, URL, token ni secreto.
- No se debe desplegar contra producción en este estado.
