# Base de datos de senderos

Esta carpeta es lo único que se edita a mano, salvo `estado.js` (generado, ver abajo). Hay cuatro archivos, uno por tipo de objeto:

| Archivo | Qué guarda | Cuántos |
|---|---|---|
| `tramos.js` | Senderos entre dos puntos: lo que se dibuja en el mapa | 111 |
| `puntos.js` | Accesos, refugios, puntos de paso, lagunas y cumbres | 152 |
| `travesias.js` | Recorridos armados encadenando tramos | 11 |
| `sendas.js` | Información de las sendas oficiales (acceso, normas, servicios, descripción) que se muestra en la ficha de sus tramos | 61 |

Las normas para cuidar el lugar y los contactos de emergencia no están acá: están en la página estática `../info-utiles.html`, que se edita directamente.

La parte que **no** se edita a mano está en `../geo/`: las trazas, los perfiles de altura, la posición de cada punto y el relieve. De ahí salen la distancia, el desnivel, las alturas mínima y máxima y el origen de la traza (OpenStreetMap, track GPX o sin traza).

Cada registro tiene **siempre todos sus campos**, aunque estén vacíos. Así queda a la vista qué falta completar.

## Cómo editar

1. Abrí el archivo con un editor de texto (VS Code, TextEdit en modo texto plano).
2. Cambiá el valor que está a la derecha de los dos puntos. No cambies el nombre del campo.
3. Guardá y recargá `index.html` en el navegador.
4. Si algo quedó mal escrito, aparece un recuadro rojo arriba del panel que dice qué registro y qué campo tienen el problema.

Formato de los valores:

| Tipo | Cómo se escribe | Ejemplo |
|---|---|---|
| texto | entre comillas simples | `'Sube por bosque de lengas.'` |
| texto vacío | dos comillas simples | `''` |
| texto con apóstrofo | barra antes del apóstrofo | `'Paso O\'Higgins'` |
| número | sin comillas | `12` |
| sí / no | `true` o `false`, sin comillas | `true` |
| lista | entre corchetes, separada por comas | `[12, 27, 63]` |

Cada campo termina con coma. Cada registro va entre llaves `{ }` y también termina con coma.

**Agregar un tramo o un punto nuevo:** copiá un registro entero, pegalo y cambiale los valores. La app solo lo puede dibujar si existe su traza o su posición en `geo/geometria.js`; si no existe, lo avisa y no lo muestra. Pedile a Claude que genere la traza desde OpenStreetMap o un GPX.

**Borrar:** borrá el registro entero, desde `{` hasta `},`. Si una travesía lo usaba, la app avisa.

---

## Tramo (`tramos.js`)

### Identidad

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `id` | texto | Código único. Une el tramo con su traza. **No cambiar.** | — |
| `desde` | id de punto | Punto donde arranca el tramo (por ejemplo `'CAT'`) | — |
| `hasta` | id de punto | Punto donde termina el tramo | — |
| `nombre` | texto | Nombre propio del tramo | Se arma con los puntos: "Villa Catedral a Arroyo Van Titter" |
| `via` | texto | Por dónde pasa. Se muestra como "por …" | No se muestra |
| `ida_y_vuelta` | sí/no | El tramo vuelve por la misma traza: no se ofrece "Ver al revés" | — |
| `solo_travesia` | sí/no | El tramo no se puede empezar por separado: solo se ve y se cuenta dentro de una travesía (por ejemplo, un tramo largo sin acceso propio) | — |

### Dificultad y norma

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `dificultad` | valor fijo | Dificultad del tramo. Define el color en el mapa y el filtro «Dificultad» | — |
| `nota_dificultad` | texto | Nota bajo la dificultad | Si está fuera de la APN, se aclara. Si no, no se muestra nada |
| `sendas_apn` | lista de números | Sendas oficiales de la APN que se muestran | No se muestra el bloque |
| `sendas_apn_total` | número | Total de sendas oficiales que pasan por el tramo. Si es mayor que la lista, se muestra "y N más" | — |
| `fuera_de_apn` | sí/no | No figura en el listado de la APN (por ejemplo, un parque municipal) | — |
| `administra` | texto | Quién lo administra, si está fuera de la APN | — |
| `registro` | valor fijo | Registro de trekking | — |
| `huella_andina` | sí/no | Es parte de la Huella Andina | — |

### Ubicación y estado

Alimentan los filtros «Zona», «Duración» y «Habilitado» de la barra sobre el mapa. El estado **no se escribe a mano**: lo genera `../herramientas/actualizar-estado.mjs` en `estado.js`.

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `zona` | texto | Zona del tramo. Cada nombre distinto aparece como una opción del filtro «Zona»: escribirlo siempre igual | Se agrupa en «Sin zona» |
| `duracion_dias` | número | Días de caminata del tramo, para el filtro «Duración» (5 = más de 4). **Provisorio: calculado con la fórmula de tiempo, a 8 h por día; corregir a mano** | `0`: el tramo no entra en ninguna opción del filtro salvo que estén todas tildadas |
| `nombres_en_registro` | lista de textos | Nombre(s) del sendero o travesía en el formulario de registro del Parque que recorren este tramo, escritos tal cual figuran allí. El estado (habilitado, cerrado, solo con guía) se toma de ahí. Si hay varios, gana el mejor estado | `[]`: el tramo queda «No verificado» |

Valores de `dificultad`. Salen del Anexo I de la Disposición 150/19, período 1: Baja = fácil, Media = moderada, Alta = difícil. Ver `../INFORME-SENDAS.md`:

| Valor | En el mapa |
|---|---|
| `'facil'` | Fácil (verde, línea llena) |
| `'moderada'` | Moderada (naranja, rayada) |
| `'dificil'` | Difícil (rojo, punteada) |
| `'sin_dato'` | Sin dato (marrón) |

Valores de `registro`:

| Valor | Qué muestra |
|---|---|
| `'obligatorio'` | Obligatorio, con el enlace a la web del parque |
| `'a_confirmar'` | A confirmar |
| `'dificultad_baja'` | A confirmar, con la nota de que la dificultad baja estaría exceptuada |
| `'no_requiere'` | No hace falta |

### Cómo es

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `descripcion` | texto | Cómo es el sendero | "Pendiente de escribir" |
| `descripcion_verificada` | sí/no | `true` cuando la descripción está comprobada en el terreno | Con `false` se muestra "Descripción provisoria" |
| `agua` | texto | Dónde hay agua | "a relevar" |
| `vadeos` | texto | Cruces de arroyo | "a relevar" |
| `sombra` | texto | Cuánto tramo va a la sombra o expuesto | "a relevar" |

---

## Punto (`puntos.js`)

### Todos los puntos

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `id` | texto | Código único. Une el punto con su posición. **No cambiar.** | — |
| `nombre` | texto | Nombre en el mapa y en la ficha | — |
| `nombre_en_tramos` | texto | Nombre que se usa al nombrar tramos. Ejemplo: el Refugio San Martín aparece como "Laguna Jakob" | Se usa `nombre` |
| `detalle` | texto | Línea chica bajo el nombre en el mapa | No se muestra |
| `tipo` | valor fijo | `'acceso'`, `'refugio'`, `'paso'`, `'laguna'` o `'cumbre'`. Define el símbolo y qué campos extra tiene | — |
| `descripcion` | texto | Texto libre en la ficha del punto | No se muestra |
| `etiqueta_x`, `etiqueta_y` | número | Corrimiento de la etiqueta respecto del punto, en píxeles. `y` negativo la sube | — |
| `etiqueta_lado` | valor fijo | `'derecha'`, `'izquierda'` o `'centro'`: hacia dónde crece el texto | — |
| `solo_con_zoom` | sí/no | El punto solo aparece al acercar el mapa | — |

### Solo refugios (`tipo: 'refugio'`)

`capacidad`, `reserva`, `que_se_compra`, `agua`, `acampe`, `si_esta_lleno`: todos de texto. Si están todos vacíos, la ficha dice "Pendiente: …". Si hay alguno completo, se muestran los seis y los vacíos dicen "a relevar".

### Solo accesos (`tipo: 'acceso'`)

`colectivo`, `parada`, `frecuencia`, `ultimo_regreso`, `estacionamiento`: todos de texto. Funcionan igual que los del refugio.

Si cambiás el `tipo` de un punto, agregá o borrá estos campos extra. Si no, la app avisa qué falta o qué sobra.

---

## Travesía (`travesias.js`)

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `id` | texto | Código único | — |
| `nombre` | texto | Nombre de la travesía | — |
| `resumen` | texto | Línea bajo el nombre ("De Villa Catedral a…") | — |
| `nombre_en` | texto | Nombre en inglés (versión en inglés de la página) | Se muestra el nombre en español |
| `resumen_en` | texto | Resumen en inglés | Se muestra el resumen en español |
| `senda_apn` | texto | Número de senda oficial. Va como texto porque puede ser `'58 y 63'` | — |
| `etapas` | lista de listas de ids | Una lista por día, con los tramos de ese día en el orden en que se caminan. El sentido de cada tramo se deduce solo. **La cantidad de listas es la cantidad de días**, y define en qué opción del filtro «Duración» aparece. Provisorio: la división en días es una propuesta, corregir a mano | — |
| `donde_dormir` | texto | Dónde se duerme | "a definir" |
| `salidas_de_escape` | texto | Por dónde salir si hay que abandonar | "a relevar" |
| `como_volver` | texto | Cómo se vuelve desde el final | "a relevar" |

La dificultad (la del tramo más exigente), la distancia, el desnivel y el perfil de una travesía no se escriben: se calculan con sus tramos. Cada día de la ficha reúne la información de sus tramos.

Las travesías no se dibujan como líneas propias: son combinaciones de tramos ya existentes. Aparecen al elegir 2, 3, 4 o más de 4 días en el filtro «Duración» (con 1 día se ven los tramos). En ese modo, los filtros de distancia y desnivel se aplican al día más largo o más exigente de cada travesía.

---

## Senda oficial (`sendas.js`)

Una senda es un recorrido del Anexo I del Parque o un sendero municipal de Llao Llao (por ejemplo «Base Cerro Catedral - Refugio Emilio Frey»). Su información aparece en la ficha de cada tramo que la compone, en el bloque «Información de la senda oficial». Los datos objetivos (acceso, horarios, normas, servicios) vienen de barilochetrekking.com, sitio del Club Andino Bariloche con Parques Nacionales. Las descripciones están reescritas con otras palabras. Cada ficha enlaza a la fuente.

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `id` | texto | Número de la senda oficial (`'63'`). Los senderos municipales llevan `mb` y un número (`'mb1'`); `38b` y `23b` son variantes. **No cambiar.** | — |
| `nombre` | texto | Nombre como figura en la fuente | — |
| `tramos` | lista de ids | Tramos de `tramos.js` que la componen. Solo en esos tramos se muestra la senda | `[]`: la senda no se muestra en ningún lado |
| `fuente` | texto | Enlace (https) a la página de origen | No se enlaza |
| `dificultad` | valor fijo | `'Baja'`, `'Media'`, `'Alta'`, `'Muy Alta'` o `'Extrema'`, según el listado del Parque para la `temporada` | — |
| `temporada`, `temporada_en` | texto | Meses a los que se aplica esa dificultad (`'noviembre a abril'`) | No se muestra |
| `dificultad_otra` | valor fijo | Dificultad en el resto del año, si cambia. Vacío si es la misma | No se muestra |
| `temporada_otra`, `temporada_otra_en` | texto | Meses de la otra dificultad | No se muestra |
| `registro` | valor fijo | `'obligatorio'` o `'no_requiere'` | — |
| `precauciones`, `precauciones_en` | lista de textos | Normas y avisos. Las dos listas tienen que tener la misma cantidad de líneas | No se muestra el bloque |
| `servicios`, `servicios_en` | texto | Refugios, campings, navegación, teleférico | No se muestra |
| `descripcion`, `descripcion_en` | texto | Cómo es el recorrido | No se muestra. Si la senda tiene un solo tramo y ese tramo no tiene descripción propia, se usa esta en «Cómo es» |

Para sumar una senda hacen falta su traza (los tramos) en `geo/`: lo que se agrega acá es solo la información.

## Textos en inglés

Los campos de texto de `puntos.js` y `travesias.js` aceptan una versión en inglés con el mismo nombre y `_en` al final (`colectivo_en`). Es **opcional**: si falta, en la versión en inglés se muestra el español. La planilla de Google usa las mismas columnas `_en` y, si una celda tiene texto, gana sobre `datos/`.

## Estado de los senderos y del formulario (`estado.js`, generado)

`estado.js` también guarda `FORMULARIO`: los códigos de los campos del formulario de registro del Parque y los valores a precargar para cada sendero o travesía. Con eso la ficha arma el botón «Hacer el registro». No se edita a mano.

`estado.js` no se edita: lo escribe `herramientas/actualizar-estado.mjs`, que lee el formulario de registro de trekking del Parque (el mismo enlace de la web del parque) y anota si cada sendero está **habilitado** o **cerrado** (los de «sólo con guía» cuentan como habilitados y conservan esa aclaración). Se corre con `node herramientas/actualizar-estado.mjs` (hace falta Node 18 o más nuevo) y conviene repetirlo cada pocas horas (ver `herramientas/LEEME.md`).

Cada tramo toma su estado de los nombres que tiene en `nombres_en_registro`. Si ninguno aparece en el formulario, el tramo queda **No verificado**. Por defecto el mapa muestra los habilitados y los no verificados.

## Completar textos desde la planilla de Google

Los textos de «cómo es», agua, vadeos, sombra, datos de refugios y accesos, y datos de travesías se pueden escribir en la planilla **Mapu Mapa - datos para completar** en lugar de en estos archivos. La página la lee sola. Una celda vacía deja lo que haya acá. Cada dato tiene una columna en español y otra `_en` para el inglés. El id de la planilla está en `mapa-config.js`.
