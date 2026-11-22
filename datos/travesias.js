/* ======================================================================
   TRAVESÍAS · base de datos editable
   Recorridos de varios días armados con tramos de datos/tramos.js (que son de 1 día).
   "etapas" tiene una lista por día, con los ids de los tramos de ese día en el orden
   en que se caminan. La cantidad de listas es la cantidad de días de la travesía.
   "nombre_en" y "resumen_en" son el nombre y el resumen en inglés.
   Una travesía no se dibuja aparte: usa las trazas de sus tramos.
   
   Cómo editar sin romper nada:
     · Los textos van entre comillas simples: 'así'. Si el texto lleva un
       apóstrofo, escribilo con barra: 'O\'Higgins'.
     · Cada campo termina con coma, y cada registro { ... } también.
     · Vacío = '' (dos comillas). Sí/no = true / false, sin comillas.
     · Las líneas que empiezan con // son comentarios: la app las ignora.
     · Si algo queda mal escrito, la app lo avisa arriba del panel.
   
   Qué significa cada campo: datos/LEEME.md
   ====================================================================== */

const TRAVESIAS = [

{
  id:                 'tv1',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '64',
  etapas:             [
    ['cat-vt', 'vt-fre'],   // día 1
    ['fre-cdf', 'cdf-ruc', 'ruc-jak'],   // día 2
    ['jak-tam'],   // día 3
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv2',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '65',
  etapas:             [
    ['cat-vt', 'vt-fre'],   // día 1
    ['fre-cdf', 'cdf-ruc', 'ruc-jak'],   // día 2
    ['jak-neg'],   // día 3
    ['col-neg'],   // día 4
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv3',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '66',
  etapas:             [
    ['cat-vt', 'vt-fre'],   // día 1
    ['fre-cdf', 'cdf-ruc', 'ruc-jak'],   // día 2
    ['jak-neg'],   // día 3
    ['lop-neg'],   // día 4
    ['alo-lop'],   // día 5
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv4',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '103',
  etapas:             [
    ['col-neg'],   // día 1
    ['lop-neg', 'alo-lop'],   // día 2
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv5',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '58 y 63',
  etapas:             [
    ['pri-cdf', 'fre-cdf'],   // día 1
    ['vt-fre', 'cat-vt'],   // día 2
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv6',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '162',
  etapas:             [
    ['jak-tam'],   // día 1
    ['jak-ces'],   // día 2
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv7',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '106',
  etapas:             [
    ['col-neg'],   // día 1
    ['neg-cab'],   // día 2
    ['cab-cre'],   // día 3
    ['cre-juj', 'juj-ilo'],   // día 4
    ['ilo-pli'],   // día 5
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv8',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '',
  etapas:             [
    ['cat-vt', 'vt-fre'],   // día 1
    ['fre-cdf', 'cdf-ruc', 'ruc-jak'],   // día 2
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv9',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '',
  etapas:             [
    ['jak-neg'],   // día 1
    ['col-neg'],   // día 2
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv10',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '',
  etapas:             [
    ['pli-roc'],   // día 1
    ['roc-pfr'],   // día 2
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv11',
  nombre:             '',
  nombre_en:          '',
  resumen:            '',
  resumen_en:         '',
  senda_apn:          '',
  etapas:             [
    ['ilo-pli'],   // día 1
    ['ilo-roc'],   // día 2
    ['pli-roc'],   // día 3
  ],

  // lo propio de la travesía
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

];
