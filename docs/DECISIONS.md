# Registro de decisiones

Este archivo contiene únicamente decisiones confirmadas. Los datos pendientes o las alternativas se mantienen fuera de este registro.

## 2026-07-29

### D-001. Repositorio como fuente de verdad

El repositorio `ivansotobarber/malibufc-web` será la fuente de verdad técnica y documental del proyecto.

Origen: instrucción expresa de Iván.

### D-002. Objetivo de la primera versión

La primera versión cubrirá la web oficial del Malibú FC, dominio propio, catálogo de productos, solicitudes de pedido por WhatsApp y pagos por Bizum confirmados fuera de la web.

Origen: instrucción expresa de Iván.

### D-003. Arquitectura inicial

La web se desarrollará con HTML, CSS y JavaScript puro. Inicialmente no tendrá backend, base de datos ni pasarela de pago.

Origen: instrucción expresa de Iván.

### D-004. Criterio económico

La solución priorizará el coste fijo mínimo.

Origen: instrucción expresa de Iván.

### D-005. Alojamiento

La web se preparará para GitHub Pages con dominio propio.

Origen: instrucción expresa de Iván.

### D-006. Diseño y configuración

La web será responsive y los datos operativos modificables se mantendrán centralizados.

Origen: instrucción expresa de Iván.

### D-007. Gobierno de contenido

No se inventará información. Las decisiones confirmadas, la información pendiente y los placeholders se mantendrán separados.

Origen: instrucción expresa de Iván.

### D-008. Portabilidad

El repositorio se mantendrá preparado para una migración futura a una plataforma más profesional.

Origen: instrucción expresa de Iván.

### D-009. Protección de los datos de pago

El número o alias de Bizum se comunicará de forma privada después de confirmar cada pedido y no se almacenará en el repositorio público.

Origen: objetivo funcional confirmado y criterio de seguridad existente, ratificado como regla del proyecto.
### D-010. Ampliación a ecosistema digital progresivo

Fecha: 2026-07-29.

Decisión: ampliar el mandato del repositorio desde la web inicial a un ecosistema digital ligero para la presencia pública, operación, comunicación, comercio, gobierno y memoria del Malibú FC.

Motivo: disponer de una fuente de verdad única y evolucionar las capacidades del club de forma ordenada.

Impacto: la web continúa siendo la primera prioridad, mientras las capacidades posteriores se implantan por fases y solo con necesidad demostrada.

Responsable: Iván.

Estado: confirmada.

Alternativas descartadas: limitar permanentemente el repositorio a la web o implantar desde el inicio una plataforma integral.

### D-011. Fuente operativa del control deportivo

Fecha: 2026-07-29.

Decisión: Google Sheets será la fuente operativa de producción para asistencia, disponibilidad y convocatorias. El Excel local se conserva como referencia privada y no se incorpora al repositorio.

Origen: instrucción expresa de Iván.

### D-012. Integración mediada por Google Apps Script

Fecha: 2026-07-29.

Decisión: el frontend interno no se conectará directamente a Google Sheets. El flujo objetivo será frontend estático, API de Google Apps Script y hoja privada.

Motivo: separar presentación, reglas y almacenamiento, aplicar controles de acceso y conservar portabilidad.

Origen: instrucción expresa de Iván.

### D-013. Separación entre web pública y control interno

Fecha: 2026-07-29.

Decisión: la web pública y el control deportivo interno serán áreas funcionalmente separadas. El repositorio público no contendrá Excel, secretos, datos personales ni información deportiva restringida.

Origen: instrucción expresa de Iván y reglas de privacidad del proyecto.

### D-014. Implantación inicial con datos simulados

Fecha: 2026-07-29.

Decisión: la fase 1 del control deportivo se desarrollará con datos sintéticos y una capa API intercambiable. La conexión a producción se pospone hasta aprobar modelo, permisos, autenticación y pruebas.

Origen: instrucción expresa de Iván.

### D-015. Dominio principal

Fecha: 2026-07-29.

Decisión: `malibufc.es`, registrado en OVHcloud, será el dominio principal de la web oficial. `www.malibufc.es` será la variante secundaria y redirigirá al dominio raíz.

Origen: confirmación expresa de Iván.

### D-016. DNS y HTTPS de la web pública

Fecha: 2026-07-29.

Decisión: el dominio raíz apuntará a las direcciones oficiales de GitHub Pages mediante registros A y AAAA; `www` apuntará directamente a `ivansotobarber.github.io` mediante CNAME. HTTPS será obligatorio mediante `Enforce HTTPS`.

Restricción: no se modificarán registros MX ni configuraciones asociadas al correo.

Origen: solicitud expresa de Iván y arquitectura confirmada del proyecto.

### D-017. Cuenta propietaria de GitHub

Fecha: 2026-07-29.

Decisión: `ivansotobarber-dominio` será la cuenta propietaria del repositorio `malibufc-web`. Esta decisión sustituye la referencia a `ivansotobarber` de D-001 y el objetivo CNAME de `www` indicado en D-016.

Impacto: el repositorio será `ivansotobarber-dominio/malibufc-web` y `www.malibufc.es` deberá apuntar a `ivansotobarber-dominio.github.io`.

Origen: confirmación expresa de Iván.

### D-018. Identidad visual e imágenes oficiales

Fecha: 2026-07-30.

Decisión: el escudo en PNG aportado por Iván será la identidad visual oficial de la web. La fotografía de la equipación, las dos fotografías de grupo y el cartel conmemorativo aportados en la misma entrega quedan autorizados para su publicación en `malibufc.es`.

Restricción: la exhibición de la equipación no habilita pedidos ni confirma precio, tallas, variantes, disponibilidad o condiciones comerciales.

Origen: aportación y autorización expresa de Iván.

### D-019. Patrocinadores, colaboradores y redes sociales

Fecha: 2026-07-30.

Decisión: Giroenviro y La Laguna Gran Hotel se publicarán como patrocinadores. Envite Canario y Peakland se publicarán como colaboradores. El Instagram oficial del equipo será `https://www.instagram.com/malibufc__/?hl=es`.

Restricción: YouTube se mostrará como canal «en construcción» y no tendrá enlace hasta que Iván aporte la URL oficial. Los logotipos de las entidades no se reproducirán sin archivos autorizados; inicialmente se usarán tarjetas de texto enlazadas.

Origen: confirmación expresa de Iván.

### D-020. Identidad futbolística, territorial y competición

Fecha: 2026-07-30.

Decisión: la web presentará al Malibú FC como equipo de fútbol de Tenerife, Canarias, y reforzará visualmente su carácter deportivo y canario usando los activos oficiales del club. La historia tendrá un apartado propio marcado como «en construcción» hasta disponer de contenido validado.

Decisión: la Liga de la Amistad se identifica como la competición en la que juega el equipo y se enlazarán su web oficial, Instagram y Facebook.

Restricción: no se publicarán todavía municipio, modalidad concreta, categoría, resultados, temporadas ni hitos históricos no confirmados.

Origen: confirmación expresa de Iván.

### D-021. Cuadro de mando, plantilla pública, calendario y entradas

Fecha: 2026-07-30.

Decisión: el sistema interno incorporará un cuadro de mando de plantilla, renovaciones, asignación, posiciones, captación y actividad deportiva. Los agregados reales se calcularán mediante la API de Google Apps Script sobre la hoja privada; el repositorio y la demostración solo contendrán datos sintéticos.

Decisión: la web pública tendrá secciones de plantilla, calendario y entradas gratuitas. La plantilla permanecerá sin nombres ni fotografías hasta confirmar autorización pública. El calendario inicial y la entrada a 0 € se mostrarán como demostración, sin reserva, cobro ni almacenamiento de datos.

Restricción: la hoja privada no se expondrá directamente desde GitHub Pages y no se copiarán al repositorio nombres, observaciones, estados internos ni otros datos personales.

Origen: instrucción expresa de Iván y reglas de privacidad confirmadas del proyecto.


### D-022. Arquitectura multipágina de la web pública

Fecha: 2026-07-30.

Decisión: la portada funcionará como resumen del club y enlazará páginas independientes para plantilla, calendario y tienda en las rutas `/plantilla/`, `/calendario/` y `/tienda/`. Todas compartirán identidad visual, navegación, configuración y publicación mediante GitHub Pages.

Restricción: la separación en páginas no modifica el estado de los datos. La plantilla, el calendario, las entradas y los pedidos seguirán sujetos a sus confirmaciones y autorizaciones pendientes.

Origen: instrucción expresa de Iván.


### D-023. Ampliación del catálogo previsto

Fecha: 2026-07-30.

Decisión: la tienda mostrará como productos previstos la segunda equipación negra con letras blancas, bufanda, chaqueta retro, chándal, mochila, brazalete de capitán, llavero y pizarra táctica personalizada. La fotografía del brazalete aportada por Iván queda autorizada para su publicación.

Restricción: la inclusión en el catálogo no confirma fabricación, diseño final, precio, tallas, stock ni disponibilidad. Los pedidos permanecerán desactivados hasta validar las condiciones comerciales de cada producto. La segunda equipación utilizará una visualización conceptual identificada expresamente como tal. Los artículos sin fotografía autorizada usarán una presentación gráfica identificada como «Imagen pendiente».

Origen: instrucción expresa de Iván.


### D-024. Imágenes de referencia del catálogo

Fecha: 2026-07-31.

Decisión: las imágenes aportadas por Iván para la segunda equipación, chaqueta retro, mochila, bufanda, chándal, llavero y pizarra táctica quedan autorizadas para su publicación en la tienda y sustituyen la visualización conceptual anterior y las tarjetas «Imagen pendiente» de esos productos.

Restricción: las imágenes se identificarán como «Diseño de referencia» y no acreditan por sí solas fabricación, marca contractual, diseño final, stock o disponibilidad. Los pedidos seguirán desactivados hasta confirmar condiciones comerciales.

Origen: aportación e instrucción expresa de Iván.

### D-025. Arquitectura de canales de YouTube bajo una cuenta Google

Fecha: 2026-08-10.

Decision: la cuenta `ivansotobarber@gmail.com` sera la cuenta administradora de los canales de Ivan Soto, Envite Canario y Malibu FC. Malibu FC tendra un canal independiente, preferiblemente vinculado a una cuenta de marca, y nunca se tratara como un canal anidado dentro de otro.

Restriccion: cada operacion debe verificar el canal seleccionado y su `channel_id` canonico. No se publicara desde el canal personal ni desde Envite Canario por error.

Origen: instruccion expresa de Ivan.

### D-026. WhatsApp normal para Malibú FC y Business para negocios

Fecha: 2026-08-10.

Decision: Malibú FC utilizará el WhatsApp normal de Iván para la comunidad y sus grupos, porque es un equipo de amigos y no una empresa comercial. WhatsApp Business se reservará para Envite Canario y otros negocios, con otro número en el mismo teléfono cuando proceda.

Restriccion: las convocatorias se automatizarán mediante encuestas, Google Sheets y Apps Script con revisión humana. No se usarán bots no oficiales ni automatización de sesiones de WhatsApp normal.

Origen: instrucción expresa de Iván.

### D-027. Cierre semanal de convocatorias el sábado

Fecha: 2026-08-10.

Decision: los partidos del Malibú FC se disputan normalmente entre lunes y jueves y las convocatorias de ambos equipos se cierran y publican el sábado anterior. El domingo queda para recordatorio logístico y desde el cierre sólo se admiten cambios excepcionales registrados.

Origen: instrucción expresa de Iván.

### D-028. Nombre del primer equipo y patrocinadores de las equipaciones

Fecha: 2026-08-18.

Decisión: el primer equipo se denomina públicamente «Malibú Hacendado». Alianza BIM y Envite Canario se publicarán como patrocinadores de la segunda equipación. Los logotipos de Alianza BIM, Envite Canario, Giroenviro y La Laguna Gran Hotel se integran en la web con sus enlaces oficiales.

Decisión complementaria: Giroenviro y La Laguna Gran Hotel corresponden a la primera equipación. La confirmación no acredita por sí sola vigencia contractual ni condiciones comerciales.

Origen: instrucción expresa de Iván y archivos aportados o recibidos por Gmail.
