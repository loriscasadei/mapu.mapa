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
  nombre:             'Frey y Jakob',
  nombre_en:          'Frey and Jakob',
  resumen:            'De Villa Catedral al Tambo de Báez',
  resumen_en:         'From Villa Catedral to Tambo de Báez',
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
  nombre:             'Frey, Jakob y laguna Negra',
  nombre_en:          'Frey, Jakob and Laguna Negra',
  resumen:            'De Villa Catedral a Colonia Suiza',
  resumen_en:         'From Villa Catedral to Colonia Suiza',
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
  nombre:             'Cuatro refugios',
  nombre_en:          'Four huts',
  resumen:            'Frey, Jakob, Italia y López',
  resumen_en:         'Frey, Jakob, Italia and López',
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
  nombre:             'Laguna Negra y López',
  nombre_en:          'Laguna Negra and López',
  resumen:            'De Colonia Suiza al Circuito Chico',
  resumen_en:         'From Colonia Suiza to Circuito Chico',
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
  nombre:             'Frey por el filo',
  nombre_en:          'Frey along the ridge',
  resumen:            'De Punta Princesa a Villa Catedral',
  resumen_en:         'From Punta Princesa to Villa Catedral',
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
  nombre:             'Jakob por la Huella Andina',
  nombre_en:          'Jakob on the Huella Andina',
  resumen:            'Del Tambo de Báez a Los Césares',
  resumen_en:         'From Tambo de Báez to Los Césares',
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
  nombre:             'Cinco lagunas',
  nombre_en:          'Five lagoons',
  resumen:            'De Colonia Suiza a Pampa Linda',
  resumen_en:         'From Colonia Suiza to Pampa Linda',
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
  nombre:             'Frey y Jakob en dos días',
  nombre_en:          'Frey and Jakob in two days',
  resumen:            'De Villa Catedral al refugio Jakob',
  resumen_en:         'From Villa Catedral to Jakob hut',
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
  nombre:             'Jakob y laguna Negra',
  nombre_en:          'Jakob and Laguna Negra',
  resumen:            'Del refugio Jakob a Colonia Suiza',
  resumen_en:         'From Jakob hut to Colonia Suiza',
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
  nombre:             'Pampa Linda, Roca y Frías',
  nombre_en:          'Pampa Linda, Roca and Frías',
  resumen:            'De Pampa Linda a Puerto Frías por el refugio Roca',
  resumen_en:         'From Pampa Linda to Puerto Frías via Roca hut',
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

];
