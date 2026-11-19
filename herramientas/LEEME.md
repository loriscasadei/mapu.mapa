# Actualizar el estado de los senderos

    node herramientas/actualizar-estado.mjs

Lee el formulario de registro de trekking del Parque Nacional Nahuel Huapi y reescribe `datos/estado.js`. Si no puede leerlo (sin internet, o Google cambió el formato), no toca el archivo y avisa con un error. También lista los nombres de `datos/tramos.js` que ya no están en el formulario.

## Repetirlo cada pocas horas (macOS, cada 2 h)

    crontab -e

y agregar, con la ruta real de esta carpeta:

    0 */2 * * * cd /ruta/a/dev_loris && /usr/local/bin/node herramientas/actualizar-estado.mjs >> herramientas/estado.log 2>&1

Con la app publicada en un servidor, conviene programar el mismo comando allí (cron, o una tarea programada de GitHub Actions).
