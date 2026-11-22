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
  donde_dormir:       'En los refugios Emilio Frey y San Martín (laguna Jakob), los dos con reserva previa confirmada',
  donde_dormir_en:    'At the Emilio Frey and San Martín (Laguna Jakob) huts, both with a confirmed booking in advance',
  salidas_de_escape:  '',
  como_volver:        'Tambo de Báez queda a 5 km a pie de Colonia Suiza (línea 10) y a 5,5 km de Puerto Moreno, en Av. Bustillo km 10,5 (línea 20)',
  como_volver_en:     'Tambo de Báez is 5 km on foot from Colonia Suiza (line 10) and 5.5 km from Puerto Moreno, at Av. Bustillo km 10.5 (line 20)',
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
  donde_dormir:       'En los refugios Emilio Frey, San Martín (laguna Jakob) y Manfredo Segre (Italia, laguna Negra), con reserva previa confirmada',
  donde_dormir_en:    'At the Emilio Frey, San Martín (Laguna Jakob) and Manfredo Segre (Italia, Laguna Negra) huts, with a confirmed booking in advance',
  salidas_de_escape:  '',
  como_volver:        'En Colonia Suiza: línea 10, o línea 13 hasta Av. Bustillo km 18 y línea 20',
  como_volver_en:     'At Colonia Suiza: line 10, or line 13 to Av. Bustillo km 18 and line 20',
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
  donde_dormir:       'En los refugios Emilio Frey, San Martín (laguna Jakob), Manfredo Segre (Italia, laguna Negra) y López, o en las áreas de acampe junto a ellos',
  donde_dormir_en:    'At the Emilio Frey, San Martín (Laguna Jakob), Manfredo Segre (Italia, Laguna Negra) and López huts, or in the camping areas beside them',
  salidas_de_escape:  'Desde el refugio Frey se puede bajar a Villa Los Coihues o a la base del Catedral; desde el San Martín, a Colonia Suiza (por Tambo de Báez) o a Los Césares por la Huella Andina; desde el refugio Italia, a Colonia Suiza por el valle del arroyo Goye',
  salidas_de_escape_en: 'From the Frey hut you can descend to Villa Los Coihues or to the base of Catedral; from San Martín, to Colonia Suiza (via Tambo de Báez) or to Los Césares along the Huella Andina; from the Italia hut, to Colonia Suiza along the Goye stream valley',
  como_volver:        'El final es en el arroyo López, sobre el Circuito Chico: línea 10, o línea 13 hasta Av. Bustillo km 18 y línea 20',
  como_volver_en:     'The finish is at the López stream, on the Circuito Chico: line 10, or line 13 to Av. Bustillo km 18 and line 20',
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
  donde_dormir:       'En el refugio Manfredo Segre (Italia, laguna Negra)',
  donde_dormir_en:    'At the Manfredo Segre hut (Italia, Laguna Negra)',
  salidas_de_escape:  '',
  como_volver:        'El final es en el arroyo López, sobre el Circuito Chico: línea 10, o línea 13 hasta Av. Bustillo km 18 y línea 20',
  como_volver_en:     'The finish is at the López stream, on the Circuito Chico: line 10, or line 13 to Av. Bustillo km 18 and line 20',
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
  donde_dormir:       'En el refugio Emilio Frey, con reserva previa confirmada',
  donde_dormir_en:    'At the Emilio Frey hut, with a confirmed booking in advance',
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
  donde_dormir:       'En el refugio San Martín (laguna Jakob), con reserva previa confirmada',
  donde_dormir_en:    'At the San Martín hut (Laguna Jakob), with a confirmed booking in advance',
  salidas_de_escape:  '',
  como_volver:        'Desde Los Césares sale hacia Bariloche el minibus de verano que viene de Pampa Linda; hay que reservar',
  como_volver_en:     'From Los Césares you can take the summer minibus coming from Pampa Linda back to Bariloche; booking is required',
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
  donde_dormir:       'Noche 1 en el refugio Manfredo Segre (Italia). Noche 2 en la laguna CAB (Lluvu), sin servicios. Noche 3 en la laguna Cretón, en la zona de pernocte de la orilla, sin servicios. Noche 4 en el camping refugio Ilón, con reserva obligatoria (acampe o domos)',
  donde_dormir_en:    'Night 1 at the Manfredo Segre (Italia) hut. Night 2 at Laguna CAB (Lluvu), no services. Night 3 at Laguna Cretón, in the overnight area on the shore, no services. Night 4 at the Ilón refuge campsite, booking required (camping or domes)',
  salidas_de_escape:  'Con mal clima desde la laguna Cretón se puede salir hacia Los Césares por la laguna Azul: un tramo muy exigente, de pedrero empinado y con mucho sol. Desde el refugio Italia se puede bajar a Colonia Suiza, y desde la laguna Ilón volver a Pampa Linda',
  salidas_de_escape_en: 'In bad weather from Laguna Cretón you can exit to Los Césares via Laguna Azul: a very demanding stretch of steep scree with strong sun. From the Italia hut you can descend to Colonia Suiza, and from Laguna Ilón return to Pampa Linda',
  como_volver:        'Desde Pampa Linda hay minibus de traslado en verano, con reserva. Sale a las 17:00',
  como_volver_en:     'From Pampa Linda there is a summer shuttle, booking required. It leaves at 5:00 pm',
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
  donde_dormir:       'En el refugio Emilio Frey y en el San Martín (laguna Jakob), con reserva previa confirmada',
  donde_dormir_en:    'At the Emilio Frey hut and the San Martín hut (Laguna Jakob), with a confirmed booking in advance',
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
  donde_dormir:       'En el refugio Manfredo Segre (Italia, laguna Negra), con reserva previa confirmada',
  donde_dormir_en:    'At the Manfredo Segre hut (Italia, Laguna Negra), with a confirmed booking in advance',
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
  donde_dormir:       'En el refugio Agostino Rocca (abierto de noviembre a mayo, reserva obligatoria). Solo se puede acampar en Pampa Linda o en el refugio Rocca: no se permite dormir en el camino, en Puerto Frías ni en Puerto Blest',
  donde_dormir_en:    'At the Agostino Rocca hut (open November to May, booking mandatory). Camping is only allowed at Pampa Linda or at the Rocca hut: sleeping is not allowed on the trail, at Puerto Frías or at Puerto Blest',
  salidas_de_escape:  '',
  como_volver:        'Desde Puerto Frías el regreso es con Turisur: lancha por el lago Frías, bus hasta Puerto Blest y catamarán hasta Puerto Pañuelo. El pasaje no se reserva en el refugio: hay que comprarlo en la oficina de Turisur en Bariloche antes de salir. También conviene reservar el traslado terrestre entre Pampa Linda y Bariloche',
  como_volver_en:     'From Puerto Frías you return with Turisur: a boat across Lake Frías, a bus to Puerto Blest and a catamaran to Puerto Pañuelo. The ticket cannot be booked at the hut: it must be bought at the Turisur office in Bariloche before setting out. It is also wise to book the ground transfer between Pampa Linda and Bariloche',
},

{
  id:                 'tv11',
  nombre:             'Pampa Linda, Ilón y Roca',
  nombre_en:          'Pampa Linda, Ilón and Roca',
  resumen:            'Circuito por la laguna Ilón y el refugio Roca',
  resumen_en:         'Loop via Laguna Ilón and Roca hut',
  senda_apn:          '',
  etapas:             [
    ['ilo-pli'],   // día 1
    ['ilo-roc'],   // día 2
    ['pli-roc'],   // día 3
  ],

  // lo propio de la travesía
  donde_dormir:       'En el camping refugio Ilón (con refugiero, domos con comidas y baños; reservar) y en el refugio Agostino Rocca (reserva obligatoria; prohibido acampar cerca)',
  donde_dormir_en:    'At the Ilón refuge campsite (with a hut keeper, domes with meals and toilets; book ahead) and at the Agostino Rocca hut (booking mandatory; no camping nearby)',
  salidas_de_escape:  '',
  como_volver:        'El circuito vuelve a Pampa Linda; desde ahí hay minibus de traslado en verano, con reserva. Sale a las 17:00',
  como_volver_en:     'The circuit returns to Pampa Linda; from there there is a summer shuttle, booking required. It leaves at 5:00 pm',
},

];
