# Actualizar el estado de los senderos

    node herramientas/actualizar-estado.mjs

Lee el formulario de registro de trekking del Parque Nacional Nahuel Huapi y reescribe `datos/estado.js`. Si no puede leerlo (sin internet, o Google cambió el formato), no toca el archivo y avisa con un error. También lista los nombres de `datos/tramos.js` que ya no están en el formulario.

## Repetirlo cada pocas horas (macOS, cada 2 h)

    crontab -e

y agregar, con la ruta real de esta carpeta:

    0 */2 * * * cd /ruta/a/dev_loris && /usr/local/bin/node herramientas/actualizar-estado.mjs >> herramientas/estado.log 2>&1

Con la app publicada en un servidor, conviene programar el mismo comando allí (cron, o una tarea programada de GitHub Actions).

## Automático en GitHub (cada 3 horas)

El archivo `.github/workflows/actualizar-estado.yml` hace lo mismo en los servidores de GitHub, sin que tengas que dejar nada prendido:

- Corre cada 3 horas y también a mano (pestaña **Actions**, **Actualizar estado de los senderos**, **Run workflow**).
- Solo sube `datos/estado.js` a `main` si el estado de algún sendero cambió. Una vez al día lo sube igual, para que la fecha de lectura no quede vieja.
- Necesita que el repositorio tenga activadas las Actions (Settings, Actions, General) con permiso de escritura para el flujo (Workflow permissions: Read and write).

# Actualizar el pronóstico del clima

    node herramientas/actualizar-clima.mjs

Pide a Open-Meteo el pronóstico de 7 días (modelos ECMWF, GFS e ICON) para cada zona y reescribe `datos/clima.js`, por franjas (mañana 6–12, tarde 12–18, noche 18–24, hora de Argentina) y por alturas fijas (800 a 3300 m). También guarda la lluvia de los últimos 7 y 30 días. Si Open-Meteo no responde, no toca el archivo y avisa con un error. Qué es cada campo: lo explica `notas` dentro de `datos/clima.js`.

Hace 2 pedidos por vez, que Open-Meteo cuenta como unas 100 consultas (el límite gratis es 10.000 por día).

## Cambiar el punto de una zona

Las zonas y su punto (latitud y longitud) están en `herramientas/zonas-clima.csv`. Se abre con Excel: cambiar los números y guardar como CSV (sirve con `;` o `,`, y con coma o punto decimal). La columna `zona` tiene que decir lo mismo que el campo `zona` de los tramos (planilla de Google; el programa mira la copia `datos/planilla.js`). Si falta una zona o sobra una, el programa lo avisa al terminar.
