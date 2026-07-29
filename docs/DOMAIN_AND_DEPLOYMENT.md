# Dominio y despliegue de GitHub Pages

Fecha de configuración: 2026-07-29.

## Configuración confirmada

| Elemento | Valor |
|---|---|
| Dominio principal | `malibufc.es` |
| Variante secundaria | `www.malibufc.es` |
| Comportamiento esperado de `www` | Redirección automática a `https://malibufc.es/` |
| Registrador y DNS | OVHcloud |
| Repositorio | `ivansotobarber-dominio/malibufc-web` |
| Rama de publicación | `main` |
| Carpeta de publicación | `/(root)` |
| Archivo de dominio | `/CNAME` |
| HTTPS | Obligatorio mediante `Enforce HTTPS` |

`malibufc.es` es el dominio canónico. Por este motivo, el archivo `CNAME` y el campo Custom domain de GitHub Pages deben contener `malibufc.es`, no la variante `www`.

GitHub Pages redirigirá `www.malibufc.es` al dominio raíz cuando ambos DNS estén configurados correctamente.

## Estado comprobado

Comprobación realizada el 2026-07-29 desde Canarias:

| Componente | Estado |
|---|---|
| Servidor autoritativo de `.es` | `NXDOMAIN` para `malibufc.es` |
| Resolutor público Cloudflare `1.1.1.1` | `NXDOMAIN` |
| Resolutor público Google `8.8.8.8` | `NXDOMAIN` |
| Registros A y AAAA del dominio raíz | No publicados |
| CNAME de `www` | No publicado |
| Repositorio público | Activo en `https://github.com/ivansotobarber-dominio/malibufc-web` |
| GitHub Pages | Compilación completada desde `main` y `/(root)` |
| Certificado TLS | No emitido; GitHub responde `The certificate does not exist yet` |
| HTTPS forzado | No activado |

El estado `NXDOMAIN` en el servidor autoritativo de `.es` indica que el alta o la delegación todavía no es visible públicamente. No debe interpretarse como un error de los registros que aún no se han creado.

## Orden de implantación

La secuencia evita publicar DNS hacia un sitio inexistente y reduce el riesgo de apropiación del dominio:

1. Crear o hacer accesible el repositorio `ivansotobarber-dominio/malibufc-web`.
2. Configurar identidad Git, realizar el primer commit y enviar `main`.
3. En GitHub, abrir `Settings`, `Pages`.
4. En `Build and deployment`, seleccionar `Deploy from a branch`.
5. Seleccionar rama `main`, carpeta `/(root)` y guardar.
6. Esperar a que la URL provisional de GitHub Pages responda.
7. En `Custom domain`, introducir `malibufc.es` y guardar.
8. Verificar opcionalmente el dominio en la configuración personal de Pages de GitHub y conservar el TXT generado.
9. Crear en OVHcloud únicamente los registros A, AAAA y CNAME indicados en este documento.
10. Esperar la propagación y la validación DNS de GitHub.
11. Cuando GitHub haya emitido el certificado, activar `Enforce HTTPS`.
12. Ejecutar las pruebas DNS, HTTP y HTTPS de este documento.

GitHub recomienda asociar primero el dominio al sitio de Pages y configurar después los DNS. No se deben crear registros definitivos que apunten a GitHub mientras el repositorio y Pages estén deshabilitados.

## Registros DNS exactos en OVHcloud

Ruta habitual: `Web Cloud`, `Dominios`, `malibufc.es`, `Zona DNS`, `Añadir una entrada`.

### Dominio raíz

Crear cuatro entradas A. En el campo Subdominio dejar el valor vacío. OVHcloud puede mostrarlo posteriormente como `@`.

| Tipo | Subdominio | TTL | Destino |
|---|---|---|---|
| A | vacío | Predeterminado, normalmente 3600 | `185.199.108.153` |
| A | vacío | Predeterminado, normalmente 3600 | `185.199.109.153` |
| A | vacío | Predeterminado, normalmente 3600 | `185.199.110.153` |
| A | vacío | Predeterminado, normalmente 3600 | `185.199.111.153` |

Crear también cuatro entradas AAAA para IPv6:

| Tipo | Subdominio | TTL | Destino |
|---|---|---|---|
| AAAA | vacío | Predeterminado, normalmente 3600 | `2606:50c0:8000::153` |
| AAAA | vacío | Predeterminado, normalmente 3600 | `2606:50c0:8001::153` |
| AAAA | vacío | Predeterminado, normalmente 3600 | `2606:50c0:8002::153` |
| AAAA | vacío | Predeterminado, normalmente 3600 | `2606:50c0:8003::153` |

### Variante `www`

Crear una entrada CNAME:

| Tipo | Subdominio | TTL | Destino |
|---|---|---|---|
| CNAME | `www` | Predeterminado, normalmente 3600 | `ivansotobarber-dominio.github.io.` |

El destino debe apuntar directamente a `ivansotobarber-dominio.github.io`, sin `/malibufc-web`, protocolo ni ruta. El punto final representa un nombre DNS completo; si el formulario de OVHcloud lo elimina o lo incorpora automáticamente, el resultado es equivalente.

### Registros que pueden entrar en conflicto

Antes de añadir los registros anteriores:

- Sustituir únicamente los A o AAAA preexistentes del dominio raíz que apunten al parking o alojamiento provisional de OVHcloud.
- En `www`, eliminar únicamente entradas A, AAAA o CNAME incompatibles antes de crear el CNAME indicado.
- No crear un registro CNAME en el dominio raíz.
- No crear registros comodín como `*.malibufc.es`.

## Protección del correo

No modificar, eliminar ni sustituir:

- Registros MX.
- TXT de SPF.
- CNAME o TXT de DKIM.
- TXT de DMARC.
- Registros de autodiscover, autoconfig o servicios de correo.

Los cambios de este documento se limitan a A y AAAA del dominio raíz y CNAME de `www`. Si OVHcloud muestra una advertencia sobre correo, cancelar la operación y comprobar que el campo Subdominio sea exclusivamente vacío para el raíz o `www`, según corresponda.

## Verificación del dominio en GitHub

La verificación del dominio protege frente a usos no autorizados por otros usuarios de GitHub:

1. Abrir la configuración personal de GitHub.
2. Acceder a `Pages`.
3. Añadir `malibufc.es`.
4. GitHub generará un nombre y valor TXT específicos.
5. Crear en OVHcloud exactamente el TXT generado.
6. Pulsar Verify en GitHub.
7. Mantener el TXT después de la verificación.

El valor TXT no se incluye en el repositorio porque GitHub debe generarlo para la cuenta propietaria. No debe inventarse ni reutilizarse uno de otro dominio.

## Activación de HTTPS

GitHub inicia automáticamente la comprobación DNS y la solicitud de certificado al guardar el dominio personalizado. La opción `Enforce HTTPS` solo se puede activar cuando el certificado está emitido.

En `Settings`, `Pages`:

1. Confirmar que `DNS check successful` aparece junto a `malibufc.es`.
2. Esperar a que desaparezca cualquier mensaje `Certificate not yet created`.
3. Marcar `Enforce HTTPS`.
4. Confirmar que las peticiones HTTP redirigen a HTTPS.

La emisión puede tardar hasta 24 horas desde que los DNS son correctos. Si existen registros CAA, al menos uno debe permitir `letsencrypt.org`; no se debe añadir o modificar un CAA sin comprobar antes los existentes.

## Comprobación de propagación DNS

Ejecutar desde PowerShell:

```powershell
Resolve-DnsName malibufc.es -Type A -Server 1.1.1.1
Resolve-DnsName malibufc.es -Type A -Server 8.8.8.8
Resolve-DnsName malibufc.es -Type AAAA -Server 1.1.1.1
Resolve-DnsName www.malibufc.es -Type CNAME -Server 1.1.1.1
```

Resultado esperado:

- El dominio raíz devuelve las cuatro IPv4 de GitHub Pages.
- El dominio raíz devuelve las cuatro IPv6 de GitHub Pages.
- `www.malibufc.es` devuelve `ivansotobarber-dominio.github.io`.
- No aparece `NXDOMAIN`.

La propagación puede ser desigual durante varias horas. La comprobación se considera cerrada cuando al menos Cloudflare y Google devuelvan el mismo resultado y GitHub muestre `DNS check successful`.

## Comprobación HTTP y HTTPS

Después de publicar y activar HTTPS:

```powershell
curl.exe -I http://malibufc.es/
curl.exe -I https://malibufc.es/
curl.exe -I http://www.malibufc.es/
curl.exe -I https://www.malibufc.es/
```

Resultado esperado:

| URL | Resultado |
|---|---|
| `http://malibufc.es/` | Redirección a `https://malibufc.es/` |
| `https://malibufc.es/` | Respuesta 200 |
| `http://www.malibufc.es/` | Redirección hacia el dominio principal HTTPS |
| `https://www.malibufc.es/` | Redirección hacia `https://malibufc.es/` |

También deben comprobarse certificado válido para ambos nombres, ausencia de contenido mixto, carga de CSS y JavaScript, enlaces legales y página 404.

## Indexación

La publicación técnica del dominio no implica autorizar indexación. `robots.txt` mantiene temporalmente `Disallow: /` porque continúan pendientes contenidos, contactos, condiciones comerciales, textos legales e imágenes definitivas.

La indexación solo se habilitará tras cerrar los P0 de publicación, activar el sitemap definitivo y ejecutar la revisión final.

## Reversión

Si la publicación falla:

1. Desactivar el dominio personalizado en GitHub Pages.
2. Retirar exclusivamente los A, AAAA y CNAME creados para GitHub Pages.
3. No modificar registros MX ni otros registros de correo.
4. Mantener la copia de la zona DNS de OVHcloud y documentar el incidente.

No debe dejarse el dominio apuntando a GitHub Pages con Pages deshabilitado.
