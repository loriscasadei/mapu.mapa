# Contexto del proyecto
Mapa de trekking estático (HTML/CSS/JS plano, sin build). Se prueba abriendo index.html (funciona con file://, así que no se puede usar fetch: los datos son archivos .js con `const`).

- `datos/` es la base de datos que el usuario edita a mano. Formato: un campo por línea, alineados, todos los campos presentes en cada registro (vacíos como '' o false), comentarios `//` de sección. Respetar ese formato al editar.
- Si se agrega, renombra o quita un campo: actualizar a la vez `CAMPOS` en app.js (el validador), todos los registros del archivo y `datos/LEEME.md`.
- `geo/` es generado. No editar a mano: `relieve.js` es base64 y `geometria.js` es una línea larga. Modificarlos con scripts.
- Los ids de tramos y puntos unen `datos/` con `geo/`. No renombrarlos sin cambiar los dos.
- Orden de carga: Leaflet (cdnjs), mapa-config.js, geo/geometria.js, geo/frontera.js, datos/puntos.js, tramos.js, travesias.js, estado.js, app.js.
- El mapa de fondo es real (Leaflet + Esri World Topo, o MapTiler si `mapa-config.js` tiene clave). Las trazas, símbolos y nombres siguen siendo un SVG en píxeles de `geo/` que `app.js` acomoda a la vista del mapa (proyección Web Mercator, `S_PX`, `LON_C`, `MERC_C`). `geo/relieve.js` (imagen) y `D.ctx`/`D.L` ya no se usan.
- Solo temporada de verano: no hay datos ni selector de invierno.
- `info-utiles.html` es estática (cuidar el lugar, emergencia): no se repite en las fichas.
- Los textos de datos/ se insertan con `esc()` (sin HTML).
- Mantener la atribución del mapa base y de OSM (debajo del mapa va solo eso). El aviso de trazas sin verificar queda en las fichas.
- La v1 original está en ../mapa-trekking/ (sin tocar).
- `geo/` cubre todo el parque (Web Mercator, ~35 m/px). Se generó el 12/11/2026 con OSM (extracto Geofabrik) y elevación terrarium/SRTM; los scripts quedaron fuera del proyecto. Para regenerar hay que reconstruirlos.
- Los tramos y puntos agregados desde el Anexo I están al final de `datos/tramos.js` y `datos/puntos.js`. Los puntos `E01`, `E02`… son empalmes o accesos automáticos. `INFORME-SENDAS.md` dice qué senda quedó trazada y cuál no.
- La ficha de lo elegido se abre sobre el mapa (`#dr`: lateral en pantalla ancha, hoja inferior en el celular); `#pin` de abajo es solo el inicio. La dirección (#...) guarda filtros, ficha, capa y vista (`urlActual()` en app.js). Búsqueda (`IDX`), GPX (`gpxTramo`, `gpxTv`) y capas (`CAPAS`) también están en app.js.
- `geo/geometria.js` ya no trae `ctx` ni `L` (pesaban 900 KB y no se usaban). `geo/frontera.js` también es generado.
- `.github/workflows/actualizar-estado.yml` lee el registro del Parque cada 3 h y sube `datos/estado.js` a `main`. Corre desde `main`: hay que traer esos cambios a `dev_loris` (`git pull origin main`) antes de subir.
- El campo de descripción del tramo en app.js es `desc` (`d` es la traza dibujada).
