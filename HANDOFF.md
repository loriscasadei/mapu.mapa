# Traspaso del proyecto (Mapu Mapa)

Para quien siga el desarrollo en una conversación nueva. Leé primero `CLAUDE.md` (reglas y estructura) y después esto (estado y pendientes). Actualizado el 22/11/2026.

## Quién es el usuario
Loris, guía de montaña en Bariloche, no programador. Hablarle en español rioplatense, en lenguaje simple, sin jerga (si hace falta un término técnico, explicarlo). Repositorio: `caloris34/mapu.mapa` (antes `patagonian.trails`), carpeta local `patagonian.trails/dev_loris`. Loris trabaja en la rama `dev_loris`; su compañero Inti en `dev_inti` (hace las páginas Info útiles y Sobre el proyecto). `main` es la rama publicada (GitHub Pages: https://caloris34.github.io/mapu.mapa/).

Reglas de trabajo acordadas:
- Antes de subir (push) a `main` o `dev_loris`: `git pull origin main` (un robot de GitHub Actions sube `datos/estado.js` a `main`).
- Hacer commits cuando se pide; subir solo si lo pide (el sistema bloquea un push que no se pidió).
- No tocar `dev_inti`. Commits con el autor ya configurado en el repo (no usar el email personal).
- Todo lo visible va en español (es-AR) y en inglés (ver abajo).

## Qué es
Mapa de trekking estático del Parque Nacional Nahuel Huapi (HTML/CSS/JS plano, sin build, funciona abriendo `index.html`). Mapa real con Leaflet (MapTiler Outdoor / Satélite con clave, Esri sin clave) debajo de un SVG propio con trazas, símbolos y nombres. 111 tramos, 152 puntos, 11 travesías.

## Hecho hasta ahora (todo en commits locales; ver "Pendiente de subir")
- Mapa real, límites (Chile al oeste, 50 km al este del último sendero), sin baldosas del lado chileno (`geo/frontera.js`).
- Filtros: Dificultad, Distancia, Desnivel, Duración (1 día = tramos; 2 o más = travesías), Zona, Habilitado. Aviso y botón si no queda nada. El mapa se acerca a lo que queda visible.
- Estado Habilitado/Cerrado leído del registro del Parque (`herramientas/actualizar-estado.mjs`; robot en `.github/workflows/actualizar-estado.yml`, cada 3 h, ya probado a mano).
- Ficha sobre el mapa (lateral en pantalla ancha, hoja inferior en el celular), búsqueda, mi ubicación, descarga GPX (tramo y travesía), capas Topográfico/Satélite, enlace compartible (filtros, ficha, capa, vista, idioma en `#...`).
- Versión en inglés con banderas (`i18n.js`, función `tt(es,en)`; NO usar `L`, es de Leaflet). El encabezado no se mueve al cambiar de idioma (`bi()` en `site.js`).
- Travesías por día: tv1 a tv11. Tramo `ilo-roc` (Laguna Ilón a Refugio Roca, 13,2 km, sacado de OpenStreetMap) es `solo_travesia: true`: solo aparece dentro de travesías.
- Planilla de Google para completar textos: «Mapu Mapa - datos para completar» (id `1IsC1HT_NAGuznr4g_08ZQWfj6l52b6QbXMLeR6BEDno`, en el Drive de Loris, ya compartida como «Cualquier persona con el enlace: Lector»). La página la lee sola (`cargarHojas()` en `app.js`, por `gviz/tq?tqx=out:csv&sheet=<hoja>`). Verificado que el endpoint responde 200 con CORS. Celda vacía = se usa lo de `datos/`. Columnas `campo_en` para el inglés. El id está en `mapa-config.js` (`HOJA_GOOGLE_ID`).
- Se quitó el tiempo de marcha de todos lados (el campo `tiempo_medido` ya no existe).

## Hecho el 22/11/2026 (sin commit todavía)
- Perfil de altura interactivo (ejes, km/altura/pendiente al tocar o pasar el mouse, punto en el mapa, teclado).
- `datos/sendas.js`: información de 61 sendas de barilochetrekking.com (datos objetivos copiados, descripciones reescritas, español e inglés), visible en la ficha de los tramos; enlaza a la fuente.
- Accesos (colectivos, paradas, horarios, estacionamiento, caminos de sentido único), refugios (apertura, reserva) y travesías (dónde dormir, escape, cómo volver) completados en `datos/puntos.js` y `datos/travesias.js`, con `campo_en`.
- Botón «Hacer el registro»: perfil guardado solo en el navegador y formulario oficial precompletado (ver pendiente 1b).
- Textos largos de «Cómo llegar» en bloque, y arreglado el «−0 m» de bajada.

## Pendiente de subir
Hay 3 commits locales sin subir a GitHub (`d07ad53` inglés y travesías, `e49c398` ilo-roc + planilla, `fe918de` encabezado). Antes: `git pull origin main`, y subir a `dev_loris` y `main` solo si Loris lo pide.

## Pendiente (en orden)
1. **Planilla de Google = única fuente de los textos que se completan a mano** (decisión de Loris, 22/11/2026). La planilla «Mapu Mapa - datos para completar» está en Drive en Bariloche > WirinMapu (mismo id, sigue compartida «Cualquier persona con el enlace: Lector»). Ahí viven, en español e inglés: descripciones, agua, vadeos y sombra de tramos; descripción, capacidad, reserva, qué se compra, agua, acampe y si está lleno de refugios; colectivo, parada, frecuencia, último regreso y estacionamiento de accesos; dónde dormir, salidas de escape y cómo volver de travesías. Esos campos están **vacíos en `datos/`** a propósito. Consecuencia: si la planilla no se puede leer en la primera visita de alguien (sin internet y sin copia guardada), las fichas muestran «a relevar»; después se usa la copia del navegador (`pt.hojas`). Para editar se usa el conector de Google Sheets (`mcp__claude_ai_Google_Sheets__*`; el de Drive solo cambia título y permisos): escribir solo donde corresponda y con `null` para saltear celdas. No se borra nada de `datos/sendas.js`: esas sendas no están en la planilla. Falta cargar (no inventar): agua, vadeos y sombra de tramos; capacidad, qué se compra y si está lleno de refugios; frecuencia y último colectivo de casi todos los accesos; `donde_dormir`/`salidas_de_escape` de travesías que no figuran en la fuente.
1b. **Botón «Hacer el registro»** (hecho el 22/11/2026, falta probarlo en un celular real y con una cuenta de Google real). Abre el formulario oficial del Parque ya completado. Los datos de la persona (email, nombre, DNI, teléfono, residencia, contacto, vehículo, acompañantes) quedan solo en su navegador (`localStorage`, clave `pt.perfil`); no van a ningún servidor. Cómo funciona: `herramientas/formulario.mjs` lee del formulario de Google los códigos de cada campo y, por cada sendero o travesía, los valores a precargar; `actualizar-estado.mjs` lo guarda en `datos/estado.js` (`FORMULARIO`) y `app.js` (`abrirRegistro`, `regUrl`) arma el enlace. Si esa lectura falla, el robot igual actualiza el estado y la ficha muestra solo el enlace al registro. **El robot corre desde `main`: hay que llevar `herramientas/` a `main` para que `FORMULARIO` se mantenga al día** (las fechas disponibles cambian a diario). No se completan solas la autoevaluación ni la pernocte y reservas: es una declaración jurada. Modelo de referencia: https://nahuelhuapitrekking.up.railway.app/. Cuentas de usuario: por decisión de Loris (22/11/2026) no hay cuentas por ahora; «Ingresar» y «Registrarse» están grises con «Coming soon» (`pintarUsuario()` en site.js; el diálogo y `auth.js` quedaron dormidos). A futuro: cuentas reales para que el perfil viaje entre dispositivos (necesita servidor y política de privacidad).
1c. **Sendas sin tramo.** 19 de las 61 sendas de `datos/sendas.js` tienen `tramos: []` porque no hay tramo equivalente en el mapa (por ejemplo Puerto Frías - Puerto Blest, Saltillo Las Nalcas, Cerro Diego Flores de León, Castillo Rojo, Los Césares - Los Rápidos, Steffen - Villegas, Cerro Otto, Campanario, Arrayanes, Goye, Bella Vista). Su información está cargada pero no se ve hasta que tengan traza (ver `INFORME-SENDAS.md`).
2. **Probar en un celular real** (nunca se probó): gestos de dos dedos, hoja inferior, botones, ubicación (solo funciona en https).
3. **Comprobar que Pages se republica** cuando el robot sube un cambio de estado (no está verificado).
4. Revisar con Loris (es guía): día a día de las travesías (las propuse yo), `duracion_dias`, `zona`, `nombres_en_registro`.
5. Ideas que Loris aceptó o dejó abiertas: uso sin internet / instalar como app, perfil de altura interactivo, favoritos y cuenta real (hoy el registro es de prueba, solo en el navegador; haría falta Supabase o similar), botón «avisar de un error», vista previa al compartir (WhatsApp), dominio propio, sección Montañismo (subida de GPX; hoy «Coming soon»; las trazas de trekking quedan las del mapa).

## Cosas que hay que saber
- La clave de MapTiler está en `mapa-config.js` y está restringida por dominio a `caloris34.github.io` en el panel de MapTiler. Por eso abierta con `file://` el mapa de MapTiler no carga (se ve gris). Para probar en local hay que servir la página y agregar `localhost`/`127.0.0.1` en MapTiler.
- `geo/` es generado y los scripts originales no están en el repo. Se recuperó la proyección (Web Mercator, `S_PX=2388`, `LON_C=-71.601`) y se generó a mano la traza de `ilo-roc` consultando Overpass (necesita User-Agent) y las alturas del servicio terrarium de AWS.
- Probar en un navegador de verdad: Brave en modo headless funciona: `"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" --headless=new --disable-gpu --window-size=1300,900 --virtual-time-budget=20000 --screenshot=ARCHIVO.png "file://RUTA/index.html"` (o `--dump-dom` con un script que escriba el resultado en `document.title`). El ancho mínimo de ventana en headless es ~500 px.
- La descripción de un tramo es `db.descripcion` (se lee con `fv(db,'descripcion')`); `t.d` es la traza dibujada.
- Los textos en `datos/` y la planilla están en español; el inglés de los datos solo existe en la planilla (`_en`) y en `nombre_en`/`resumen_en` de las travesías.
- `info-utiles.html` y `sobre-el-proyecto.html` los edita Inti: solo se traducen encabezado y pie.
