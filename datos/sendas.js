/* ======================================================================
   SENDAS · información de las sendas oficiales
   Una senda es un recorrido del Anexo I del Parque (por ejemplo "Base Cerro
   Catedral - Refugio Emilio Frey"). Se arma encadenando uno o más tramos, y su
   información aparece en la ficha de cada tramo que la compone.
   El "id" es el número de la senda oficial; los senderos municipales llevan "mb" y un número.
   Datos tomados de barilochetrekking.com (Club Andino Bariloche y Parques
   Nacionales): lo objetivo (acceso, horarios, normas) se copió; las descripciones
   se reescribieron con otras palabras.

   Cómo editar sin romper nada:
     · Los textos van entre comillas simples: 'así'. Si el texto lleva un
       apóstrofo, escribilo con barra: 'O\'Higgins'.
     · Cada campo termina con coma, y cada registro { ... } también.
     · Vacío = '' (dos comillas) o [] (lista vacía).
     · Si algo queda mal escrito, la app lo avisa arriba del panel.

   Qué significa cada campo: datos/LEEME.md
   ====================================================================== */

const SENDAS = [
{
  // identidad
  id:                       '04',
  nombre:                   '',
  tramos:                   ['neu-e49', 'e49-lve'],
  fuente:                   'https://barilochetrekking.com/sendero-04/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '05',
  nombre:                   '',
  tramos:                   ['neu-e49', 'e49-cha'],
  fuente:                   'https://barilochetrekking.com/sendero-05/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '08',
  nombre:                   '',
  tramos:                   ['gut-due'],
  fuente:                   'https://barilochetrekking.com/sendero-08/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '09',
  nombre:                   '',
  tramos:                   ['gut-mig'],
  fuente:                   'https://barilochetrekking.com/sendero-09/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '10',
  nombre:                   '',
  tramos:                   ['gut-vt', 'vt-fre'],
  fuente:                   'https://barilochetrekking.com/sendero-10/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '11',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-11/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '23',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-23/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '23b',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-23b/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '38',
  nombre:                   '',
  tramos:                   ['e40-mai', 'e58-leo', 'llu-leo'],
  fuente:                   'https://barilochetrekking.com/sendero-38/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '38b',
  nombre:                   '',
  tramos:                   ['e40-mai', 'e58-leo'],
  fuente:                   'https://barilochetrekking.com/sendero-38b/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '47',
  nombre:                   '',
  tramos:                   ['mar-fgr'],
  fuente:                   'https://barilochetrekking.com/sendero-47/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '48',
  nombre:                   '',
  tramos:                   ['llo-e01'],
  fuente:                   'https://barilochetrekking.com/sendero-48/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '49',
  nombre:                   '',
  tramos:                   ['e42-juv'],
  fuente:                   'https://barilochetrekking.com/sendero-49/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '58',
  nombre:                   '',
  tramos:                   ['pri-cdf', 'fre-cdf'],
  fuente:                   'https://barilochetrekking.com/sendero-58/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '63',
  nombre:                   '',
  tramos:                   ['cat-vt', 'vt-fre'],
  fuente:                   'https://barilochetrekking.com/sendero-63/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '72',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-72/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '73',
  nombre:                   '',
  tramos:                   ['pca-e02', 'e02-ble'],
  fuente:                   'https://barilochetrekking.com/sendero-73/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '74',
  nombre:                   '',
  tramos:                   ['pca-e02', 'lca-e02'],
  fuente:                   'https://barilochetrekking.com/sendero-74/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '75',
  nombre:                   '',
  tramos:                   ['e02-ble', 'lca-e02', 'oba-lca'],
  fuente:                   'https://barilochetrekking.com/sendero-75/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '77',
  nombre:                   '',
  tramos:                   ['roc-pfr'],
  fuente:                   'https://barilochetrekking.com/sendero-77/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '82',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-82/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '90',
  nombre:                   '',
  tramos:                   ['alo-lop'],
  fuente:                   'https://barilochetrekking.com/sendero-90/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '101',
  nombre:                   '',
  tramos:                   ['col-neg'],
  fuente:                   'https://barilochetrekking.com/sendero-101/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '113',
  nombre:                   '',
  tramos:                   ['blo-lop'],
  fuente:                   'https://barilochetrekking.com/sendero-113/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '124',
  nombre:                   '',
  tramos:                   ['pli-mei'],
  fuente:                   'https://barilochetrekking.com/sendero-124/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '125',
  nombre:                   '',
  tramos:                   ['pli-roc'],
  fuente:                   'https://barilochetrekking.com/sendero-125/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '127',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-127/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '128',
  nombre:                   '',
  tramos:                   ['ilo-pli'],
  fuente:                   'https://barilochetrekking.com/sendero-128/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '129',
  nombre:                   '',
  tramos:                   ['ilo-roc'],
  fuente:                   'https://barilochetrekking.com/sendero-129/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '133',
  nombre:                   '',
  tramos:                   ['pli-rvi'],
  fuente:                   'https://barilochetrekking.com/sendero-133/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '135',
  nombre:                   '',
  tramos:                   ['e09-ros', 'ros-vol'],
  fuente:                   'https://barilochetrekking.com/sendero-135/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '137',
  nombre:                   '',
  tramos:                   ['cte-ppe'],
  fuente:                   'https://barilochetrekking.com/sendero-137/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '140',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-140/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '151',
  nombre:                   '',
  tramos:                   ['e15-mva'],
  fuente:                   'https://barilochetrekking.com/sendero-151/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '152',
  nombre:                   '',
  tramos:                   ['e59-gco'],
  fuente:                   'https://barilochetrekking.com/sendero-152/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '153',
  nombre:                   '',
  tramos:                   ['jak-tam'],
  fuente:                   'https://barilochetrekking.com/sendero-153/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '162',
  nombre:                   '',
  tramos:                   ['jak-ces'],
  fuente:                   'https://barilochetrekking.com/sendero-162/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '164',
  nombre:                   '',
  tramos:                   ['e39-e66', 'e39-clc'],
  fuente:                   'https://barilochetrekking.com/sendero-164/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '165',
  nombre:                   '',
  tramos:                   ['e39-e66', 'llc-e39'],
  fuente:                   'https://barilochetrekking.com/sendero-165/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '166',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-166/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '167',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-167/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '169',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-169/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '170',
  nombre:                   '',
  tramos:                   ['azu-ces'],
  fuente:                   'https://barilochetrekking.com/sendero-170/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '184',
  nombre:                   '',
  tramos:                   ['llu-e19'],
  fuente:                   'https://barilochetrekking.com/sendero-184/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '188',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-188/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '201',
  nombre:                   '',
  tramos:                   ['neg-cab'],
  fuente:                   'https://barilochetrekking.com/sendero-201/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '202',
  nombre:                   '',
  tramos:                   ['cab-cre'],
  fuente:                   'https://barilochetrekking.com/sendero-202/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '203',
  nombre:                   '',
  tramos:                   ['cre-juj', 'juj-ilo'],
  fuente:                   'https://barilochetrekking.com/sendero-203/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '204',
  nombre:                   '',
  tramos:                   ['fre-cdf', 'cdf-ruc', 'ruc-jak'],
  fuente:                   'https://barilochetrekking.com/sendero-204/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '205',
  nombre:                   '',
  tramos:                   ['jak-neg'],
  fuente:                   'https://barilochetrekking.com/sendero-205/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '206',
  nombre:                   '',
  tramos:                   ['lop-neg'],
  fuente:                   'https://barilochetrekking.com/sendero-206/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       '207',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-207/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb1',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb1/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb2',
  nombre:                   '',
  tramos:                   ['lla-cll'],
  fuente:                   'https://barilochetrekking.com/sendero-mb2/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb3',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb3/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb4',
  nombre:                   '',
  tramos:                   ['lla-tac'],
  fuente:                   'https://barilochetrekking.com/sendero-mb4/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb5',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb5/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb6',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb6/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb7',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb7/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb8',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb8/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

{
  // identidad
  id:                       'mb9',
  nombre:                   '',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb9/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               '',
  temporada:                '',
  temporada_en:             '',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 '',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              '',
  descripcion_en:           '',
},

];
