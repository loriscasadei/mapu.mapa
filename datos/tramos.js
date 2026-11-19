/* ======================================================================
   TRAMOS · base de datos editable
   Un tramo es un sendero entre dos puntos. Es lo que se dibuja en el mapa.
   No cambies el "id": es lo que une el tramo con su traza en geo/geometria.js.
   
   Cómo editar sin romper nada:
     · Los textos van entre comillas simples: 'así'. Si el texto lleva un
       apóstrofo, escribilo con barra: 'O\'Higgins'.
     · Cada campo termina con coma, y cada registro { ... } también.
     · Vacío = '' (dos comillas). Sí/no = true / false, sin comillas.
     · Las líneas que empiezan con // son comentarios: la app las ignora.
     · Si algo queda mal escrito, la app lo avisa arriba del panel.
   
   Qué significa cada campo: datos/LEEME.md
   ====================================================================== */

const TRAMOS = [

{
  // identidad
  id:                       'cat-vt',
  desde:                    'CAT',
  hasta:                    'VT',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [12, 27, 44, 59, 62, 63],
  sendas_apn_total:         12,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio Piedritas desde Catedral', 'Refugio Frey desde Catedral'],

  // cómo es
  descripcion:              'Sale de la base del cerro Catedral y faldea hacia el sur, con el lago Gutiérrez abajo, hasta el empalme con la senda que sube desde el lago.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'vt-fre',
  desde:                    'VT',
  hasta:                    'FRE',
  nombre:                   '',
  via:                      'Refugio Piedritas',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [10, 14, 15, 19, 20, 24],
  sendas_apn_total:         25,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio Frey desde Catedral', 'Refugio Frey desde Gutiérrez', 'Refugio Piedritas desde Catedral', 'Refugio Piedritas desde lago Gutiérrez'],

  // cómo es
  descripcion:              'Sube por el valle del arroyo Van Titter entre lengas, pasa por el refugio Piedritas y termina en la laguna Toncek. El final es lo más empinado.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'gut-vt',
  desde:                    'GUT',
  hasta:                    'VT',
  nombre:                   '',
  via:                      'Playa Muñoz',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [10, 11, 12, 13, 14, 15],
  sendas_apn_total:         13,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio Piedritas desde lago Gutiérrez', 'Refugio Frey desde Gutiérrez'],

  // cómo es
  descripcion:              'Sale del extremo norte del lago Gutiérrez y sube faldeando por bosque hasta el empalme con la senda de Villa Catedral.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'vt-gsu',
  desde:                    'VT',
  hasta:                    'GSU',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [13, 23, 24, 25, 26, 27],
  sendas_apn_total:         14,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'gut-due',
  desde:                    'GUT',
  hasta:                    'DUE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [8, 11, 12, 13, 25, 70],
  sendas_apn_total:         6,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              'Paseo corto por bosque hasta la cascada.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'gut-mig',
  desde:                    'GUT',
  hasta:                    'MIG',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [9],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              'Subida corta y empinada hasta un balcón sobre el lago.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'fre-cdf',
  desde:                    'FRE',
  hasta:                    'CDF',
  nombre:                   '',
  via:                      'Laguna Schmoll',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [14, 15, 20, 26, 28, 32],
  sendas_apn_total:         24,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Frey- Jakob'],

  // cómo es
  descripcion:              'Sube de Frey a la laguna Schmoll y sigue por pedrero hasta la Cancha de Fútbol, donde se juntan la senda a Jakob y la del filo.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'pri-cdf',
  desde:                    'PRI',
  hasta:                    'CDF',
  nombre:                   '',
  via:                      'el filo',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [14, 26, 45, 52, 56, 57],
  sendas_apn_total:         14,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Filo de Catedral-V° Rucaco- Jakob'],

  // cómo es
  descripcion:              'Recorre el filo del Catedral casi sin desnivel, por alto y expuesto al viento, desde la zona de los medios de elevación.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cdf-ruc',
  desde:                    'CDF',
  hasta:                    'RUC',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [15, 20, 28, 32, 35, 44],
  sendas_apn_total:         22,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Frey- Jakob', 'Filo de Catedral-V° Rucaco- Jakob', 'Lag. Jakob- Refugio San Martín (Huella Andina)'],

  // cómo es
  descripcion:              'Bajada fuerte por pedrero desde la Cancha de Fútbol hasta el fondo del valle del Rucaco.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ruc-jak',
  desde:                    'RUC',
  hasta:                    'JAK',
  nombre:                   '',
  via:                      'Paso Brecha Negra',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [15, 20, 28, 32, 35, 44],
  sendas_apn_total:         22,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Frey- Jakob', 'Filo de Catedral-V° Rucaco- Jakob', 'Lag. Jakob- Refugio San Martín (Huella Andina)'],

  // cómo es
  descripcion:              'Cruza el valle del Rucaco y sube al paso Brecha Negra, desde donde se baja a la laguna Jakob.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'jak-tam',
  desde:                    'JAK',
  hasta:                    'TAM',
  nombre:                   '',
  via:                      'Arroyo Casa de Piedra',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [15, 28, 40, 52, 64, 153],
  sendas_apn_total:         13,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Casa de Piedra Stream (Tambo de Baez)- Los Césares (Huella Andina)', 'Los Césares- Arroyo Casa de Piedra'],

  // cómo es
  descripcion:              'Baja por el valle del arroyo Casa de Piedra hasta el Tambo de Báez, sobre el camino a Colonia Suiza. La parte alta es una bajada empinada en zigzag.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'jak-ces',
  desde:                    'JAK',
  hasta:                    'CES',
  nombre:                   '',
  via:                      'Arroyo Casalata',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [20, 32, 57, 69, 162, 175],
  sendas_apn_total:         11,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Los Césares- Ref. San Martín (Jakob)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'jak-neg',
  desde:                    'JAK',
  hasta:                    'NEG',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [65, 66, 16, 17, 158, 159],
  sendas_apn_total:         46,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      ['Jackob - Laguna Negra'],

  // cómo es
  descripcion:              'Es el tramo más técnico del circuito. Va por filos y pedreros, con trepadas y poca marcación, y con mal tiempo la orientación se complica.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'col-neg',
  desde:                    'COL',
  hasta:                    'NEG',
  nombre:                   '',
  via:                      'Arroyo Goye',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [90, 101, 102, 103, 104, 106],
  sendas_apn_total:         9,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['Lag. Negra- Refugio Italia'],

  // cómo es
  descripcion:              'Sube por el valle del arroyo Goye, largo y parejo por bosque, y termina con una subida empinada hasta la laguna Negra.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'lop-neg',
  desde:                    'LOP',
  hasta:                    'NEG',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [90, 91, 92, 102, 103, 114],
  sendas_apn_total:         8,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['López - Laguna Negra'],

  // cómo es
  descripcion:              'Une los dos refugios por alto, con sectores de pedrero y trepada. Con nieve o mal tiempo cambia mucho.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'alo-lop',
  desde:                    'ALO',
  hasta:                    'LOP',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [90, 91, 92, 100, 103, 113],
  sendas_apn_total:         8,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio López'],

  // cómo es
  descripcion:              'Subida corta y empinada desde el Circuito Chico hasta el refugio, con vista al Nahuel Huapi.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'blo-lop',
  desde:                    'BLO',
  hasta:                    'LOP',
  nombre:                   '',
  via:                      'Palotinos y cerro López',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [100, 102, 113, 114, 115, 116],
  sendas_apn_total:         8,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['López por Palotinos'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'neg-cab',
  desde:                    'NEG',
  hasta:                    'CAB',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [91, 92, 104, 106, 115, 116],
  sendas_apn_total:         8,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['5 Lagunas (Colonia Suiza- Pampa Linda)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'lop-cab',
  desde:                    'LOP',
  hasta:                    'CAB',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [132, 142, 172, 174],
  sendas_apn_total:         4,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cab-cre',
  desde:                    'CAB',
  hasta:                    'CRE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [91, 92, 104, 106, 115, 116],
  sendas_apn_total:         12,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['5 Lagunas (Colonia Suiza- Pampa Linda)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cre-azu',
  desde:                    'CRE',
  hasta:                    'AZU',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [92, 104, 116, 131, 132, 142],
  sendas_apn_total:         9,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['Los Césares - Pampa Linda (Lagunas Azul e Ilón)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'azu-ces',
  desde:                    'AZU',
  hasta:                    'CES',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [92, 104, 116, 130, 170, 171],
  sendas_apn_total:         9,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['Laguna Azul (desde Los Césares)', 'Los Césares - Pampa Linda (Lagunas Azul e Ilón)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cre-juj',
  desde:                    'CRE',
  hasta:                    'JUJ',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [91, 106, 115],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['5 Lagunas (Colonia Suiza- Pampa Linda)', 'Laguna Ilón- Laguna Cretón'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'juj-ilo',
  desde:                    'JUJ',
  hasta:                    'ILO',
  nombre:                   '',
  via:                      'Mirada del Doctor',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [91, 106, 115],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['5 Lagunas (Colonia Suiza- Pampa Linda)', 'Laguna Ilón- Laguna Cretón'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ilo-azu',
  desde:                    'ILO',
  hasta:                    'AZU',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [130, 131, 132, 142, 171],
  sendas_apn_total:         5,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Travesía López–Cretón',
  duracion_dias:            1,
  nombres_en_registro:      ['Los Césares - Pampa Linda (Lagunas Azul e Ilón)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ilo-pli',
  desde:                    'ILO',
  hasta:                    'PLI',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [91, 106, 115, 128, 129, 130],
  sendas_apn_total:         10,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Laguna Ilón', '5 Lagunas (Colonia Suiza- Pampa Linda)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'pli-mei',
  desde:                    'PLI',
  hasta:                    'MEI',
  nombre:                   '',
  via:                      'La Almohadilla',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [124, 139],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio Otto Meiling'],

  // cómo es
  descripcion:              'Desde Pampa Linda sube por bosque hasta La Almohadilla y sigue por el filo hasta el refugio, entre los glaciares Castaño Overa y Alerce.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'pli-rvi',
  desde:                    'PLI',
  hasta:                    'RVI',
  nombre:                   '',
  via:                      'Mallín Chileno',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [133],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio Viejo Tronador'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'mei-rvi',
  desde:                    'MEI',
  hasta:                    'RVI',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'sin_dato',
  nota_dificultad:          '',
  sendas_apn:               [148, 149],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            0,
  nombres_en_registro:      ['Refugio Viejo Tronador'],

  // cómo es
  descripcion:              'Travesía entre los dos refugios del Tronador por terreno glaciario.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'pli-roc',
  desde:                    'PLI',
  hasta:                    'ROC',
  nombre:                   '',
  via:                      'Paso de las Nubes',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [78, 125, 126],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio Rocca- Paso de las Nubes', 'Pampa Linda por Paso de las Nubes'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'roc-pfr',
  desde:                    'ROC',
  hasta:                    'PFR',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [77, 78, 126],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Lago Frías - Refugio Rocca (Paso de las Nubes)', 'Pampa Linda- lago Frías', 'Lago Frías - Pampa Linda'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'lla-cll',
  desde:                    'LLA',
  hasta:                    'CLL',
  nombre:                   '',
  via:                      'Lago Escondido',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'sin_dato',
  nota_dificultad:          '',
  sendas_apn:               [],
  sendas_apn_total:         0,
  fuera_de_apn:             true,
  administra:               'Parque Municipal Llao Llao',
  registro:                 'a_confirmar',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Llao Llao y Bariloche',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              'Camina por bosque de coihues, pasa por el lago Escondido y sube hasta un mirador sobre el Nahuel Huapi y el brazo Tristeza.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'lla-tac',
  desde:                    'LLA',
  hasta:                    'TAC',
  nombre:                   '',
  via:                      'Lago Escondido',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'sin_dato',
  nota_dificultad:          '',
  sendas_apn:               [],
  sendas_apn_total:         0,
  fuera_de_apn:             true,
  administra:               'Parque Municipal Llao Llao',
  registro:                 'a_confirmar',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Llao Llao y Bariloche',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              'Sendero casi plano por bosque, pasando por el lago Escondido, hasta la costa en Villa Tacul.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'csm',
  desde:                    'SMI',
  hasta:                    'CSM',
  nombre:                   'Cerro San Martín',
  via:                      '',
  ida_y_vuelta:             true,

  // dificultad y norma
  dificultad:               'sin_dato',
  nota_dificultad:          '',
  sendas_apn:               [],
  sendas_apn_total:         0,
  fuera_de_apn:             true,
  administra:               '',
  registro:                 'a_confirmar',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Llao Llao y Bariloche',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              'Subida corta y directa. Arranca empinada y gana casi todo el desnivel en los primeros 250 metros, con sectores al 38 %. La bajada repite casi la misma traza.',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

// ===== Tramos agregados desde el Anexo I (Disp. 150/19) y OpenStreetMap =====

{
  // identidad
  id:                       'fal-faa',
  desde:                    'FAL',
  hasta:                    'FAA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [225],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villarino y Espejo',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Falkner'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'nia-niv',
  desde:                    'NIA',
  hasta:                    'NIV',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [224],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villarino y Espejo',
  duracion_dias:            1,
  nombres_en_registro:      ['Cascada Ñivinco'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'mon-lec',
  desde:                    'MON',
  hasta:                    'LEC',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [221],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villarino y Espejo',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro La Mona'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'lag-mle',
  desde:                    'LAG',
  hasta:                    'MLE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [220],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'mnt-mel',
  desde:                    'MNT',
  hasta:                    'MEL',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [229],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Traful',
  duracion_dias:            1,
  nombres_en_registro:      ['Lagunas las Mellizas'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'lco-sle',
  desde:                    'LCO',
  hasta:                    'SLE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [219],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e05-e06',
  desde:                    'E05',
  hasta:                    'E06',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [226],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Traful',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e07-nas',
  desde:                    'E07',
  hasta:                    'NAS',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [226],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Traful',
  duracion_dias:            1,
  nombres_en_registro:      ['Mirador del Naso'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'agu-agb',
  desde:                    'AGU',
  hasta:                    'AGB',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [192],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Aguada del Burro'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'nas-ne2',
  desde:                    'NAS',
  hasta:                    'NE2',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [226],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Traful',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Negro'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'coi-e33',
  desde:                    'COI',
  hasta:                    'E33',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [194],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e33-abu',
  desde:                    'E33',
  hasta:                    'ABU',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [194, 195],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e22-e31',
  desde:                    'E22',
  hasta:                    'E31',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [203, 227],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e22-buo',
  desde:                    'E22',
  hasta:                    'BUO',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [202],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ran-r7l',
  desde:                    'RAN',
  hasta:                    'R7L',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [193],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ues-e33',
  desde:                    'UES',
  hasta:                    'E33',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [195],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'tla-e22',
  desde:                    'TLA',
  hasta:                    'E22',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [202, 203, 227],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'tla-act',
  desde:                    'TLA',
  hasta:                    'ACT',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [202, 203, 227],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Arroyo Cataratas'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'trf-mnb',
  desde:                    'TRF',
  hasta:                    'MNB',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [214],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Traful',
  duracion_dias:            1,
  nombres_en_registro:      ['Huella Andina Angostura- Traful', 'Mallín de las Nieblas'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cpa-pan',
  desde:                    'CPA',
  hasta:                    'PAN',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [198],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Panguinal'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cne-buo',
  desde:                    'CNE',
  hasta:                    'BUO',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [202],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cajón Negro'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'fbe-ina',
  desde:                    'FBE',
  hasta:                    'INA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [196, 197],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Inacayal'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'fbe-cne',
  desde:                    'FBE',
  hasta:                    'CNE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [196],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Falso Belvedere', 'Cajón Negro'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'vor-e35',
  desde:                    'VOR',
  hasta:                    'E35',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [207],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Arroyo Voruco/ Bonito'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e17-dsa',
  desde:                    'E17',
  hasta:                    'DSA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [201],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cascadas Dora y Santa Ana'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e17-cdo',
  desde:                    'E17',
  hasta:                    'CDO',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [201],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cascada Dora', 'Cascadas Dora y Santa Ana'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'csa-e17',
  desde:                    'CSA',
  hasta:                    'E17',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [201],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cascada Santa Ana', 'Cascadas Dora y Santa Ana'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ina-ant',
  desde:                    'INA',
  hasta:                    'ANT',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [196, 197],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Inacayal'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e43-e31',
  desde:                    'E43',
  hasta:                    'E31',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [227],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e51-e52',
  desde:                    'E51',
  hasta:                    'E52',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [227],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'bay-e31',
  desde:                    'BAY',
  hasta:                    'E31',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [203],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Bayo: Ujenjo- Traful'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'dor-pma',
  desde:                    'DOR',
  hasta:                    'PMA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [211],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Dormilón'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'oco-oca',
  desde:                    'OCO',
  hasta:                    'OCA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [206],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro O´Connor'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'mnb-rag',
  desde:                    'MNB',
  hasta:                    'RAG',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [213, 214],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Traful',
  duracion_dias:            1,
  nombres_en_registro:      ['Huella Andina Angostura- Traful'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'mqu-e32',
  desde:                    'MQU',
  hasta:                    'E32',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [204],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Mireadores Península de Quetrihue'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e32-ist',
  desde:                    'E32',
  hasta:                    'IST',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [204, 205],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Peninsula de Quetrihue - Parque Nacional Los Arrayanes'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e34-e12',
  desde:                    'E34',
  hasta:                    'E12',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [207],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Arroyo Voruco/ Bonito'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e12-rba',
  desde:                    'E12',
  hasta:                    'RBA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [208],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Arroyo Voruco/ Bonito'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'rbv-e12',
  desde:                    'RBV',
  hasta:                    'E12',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [207, 208],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Arroyo Voruco/ Bonito'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'arr-e32',
  desde:                    'ARR',
  hasta:                    'E32',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [205],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Villa La Angostura',
  duracion_dias:            1,
  nombres_en_registro:      ['Peninsula de Quetrihue - Parque Nacional Los Arrayanes'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'hua-cen',
  desde:                    'HUA',
  hasta:                    'CEN',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [216],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Centinela y Colorado',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Centinela'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cco-chb',
  desde:                    'CCO',
  hasta:                    'CHB',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [212],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Centinela y Colorado',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Colorado'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'pbl-e41',
  desde:                    'PBL',
  hasta:                    'E41',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [81, 87],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Isla Victoria y Anchorena',
  duracion_dias:            1,
  nombres_en_registro:      ['Piedras Blancas (Isla Victoria)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e41-tot',
  desde:                    'E41',
  hasta:                    'TOT',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [82],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Isla Victoria y Anchorena',
  duracion_dias:            1,
  nombres_en_registro:      ['Totoras (Isla Victoria)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'iva-e41',
  desde:                    'IVA',
  hasta:                    'E41',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [81, 82, 87],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Isla Victoria y Anchorena',
  duracion_dias:            1,
  nombres_en_registro:      ['Totoras (Isla Victoria)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'oba-lca',
  desde:                    'OBA',
  hasta:                    'LCA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [75],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Puerto Blest',
  duracion_dias:            1,
  nombres_en_registro:      ['Laguna Ortíz Basualdo'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'lca-e02',
  desde:                    'LCA',
  hasta:                    'E02',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [74, 75],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Puerto Blest',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e02-ble',
  desde:                    'E02',
  hasta:                    'BLE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [73],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Puerto Blest',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'pca-e02',
  desde:                    'PCA',
  hasta:                    'E02',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [73, 74, 75],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Puerto Blest',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e57-vic',
  desde:                    'E57',
  hasta:                    'VIC',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [76],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Puerto Blest',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'pri-e47',
  desde:                    'PRI',
  hasta:                    'E47',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [157],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Catedral',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e48-mdo',
  desde:                    'E48',
  hasta:                    'MDO',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [128, 129],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Laguna Ilón'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cte-ppe',
  desde:                    'CTE',
  hasta:                    'PPE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [137],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Piedra Pérez'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'cte-gdi',
  desde:                    'CTE',
  hasta:                    'GDI',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [141],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e59-gco',
  desde:                    'E59',
  hasta:                    'GCO',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [152],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Mirador Glaciar Castaño Overo'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'vur-e68',
  desde:                    'VUR',
  hasta:                    'E68',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [134],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Paso Vuriloches'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e15-mva',
  desde:                    'E15',
  hasta:                    'MVA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [151],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Mirador del Valle'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e09-ros',
  desde:                    'E09',
  hasta:                    'ROS',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [135, 136],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Tronador y Pampa Linda',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Volcanico'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ros-vol',
  desde:                    'ROS',
  hasta:                    'VOL',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [135],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Volcanico'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'ces-e67',
  desde:                    'CES',
  hasta:                    'E67',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [164, 165],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e40-mai',
  desde:                    'E40',
  hasta:                    'MAI',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [38, 39, 184],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'neu-e49',
  desde:                    'NEU',
  hasta:                    'E49',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [4, 5],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Challhuaco',
  duracion_dias:            1,
  nombres_en_registro:      ['Refugio Velco'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e58-leo',
  desde:                    'E58',
  hasta:                    'LEO',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [38, 39, 184],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Playa Leones (lago Mascardi)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e49-cha',
  desde:                    'E49',
  hasta:                    'CHA',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [5],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Challhuaco',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Challhuaco'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e49-lve',
  desde:                    'E49',
  hasta:                    'LVE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [4],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Cerro Challhuaco',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e39-e66',
  desde:                    'E39',
  hasta:                    'E66',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [164, 165],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Lago los Césares'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e39-clc',
  desde:                    'E39',
  hasta:                    'CLC',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [164, 165],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      [],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'llc-e39',
  desde:                    'LLC',
  hasta:                    'E39',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [165],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Lago los Césares'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'llu-e19',
  desde:                    'LLU',
  hasta:                    'E19',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [39, 184],
  sendas_apn_total:         2,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Laguna Llum'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'llu-leo',
  desde:                    'LLU',
  hasta:                    'LEO',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'facil',
  nota_dificultad:          '',
  sendas_apn:               [38, 39, 184],
  sendas_apn_total:         3,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'no_requiere',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Laguna Llum'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'mar-fgr',
  desde:                    'MAR',
  hasta:                    'FGR',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [47],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Falso Granítico'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e42-juv',
  desde:                    'E42',
  hasta:                    'JUV',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [49],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Laguna Juventus'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'llo-e01',
  desde:                    'LLO',
  hasta:                    'E01',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [48],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Mascardi-Steffen (Huella Andina)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e08-hui',
  desde:                    'E08',
  hasta:                    'HUI',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'dificil',
  nota_dificultad:          '',
  sendas_apn:               [50],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Cerro Huinca'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'gui-e26',
  desde:                    'GUI',
  hasta:                    'E26',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [51],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            false,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Mascardi y Los Césares',
  duracion_dias:            1,
  nombres_en_registro:      ['Bicisenda Lago Guillelmo'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

{
  // identidad
  id:                       'e29-ste',
  desde:                    'E29',
  hasta:                    'STE',
  nombre:                   '',
  via:                      '',
  ida_y_vuelta:             false,

  // dificultad y norma
  dificultad:               'moderada',
  nota_dificultad:          '',
  sendas_apn:               [188],
  sendas_apn_total:         1,
  fuera_de_apn:             false,
  administra:               '',
  registro:                 'obligatorio',
  huella_andina:            true,

  // ubicación, duración y registro del Parque
  zona:                     'Lago Steffen',
  duracion_dias:            1,
  nombres_en_registro:      ['Steffen- Villegas (Huella Andina)', 'Mascardi-Steffen (Huella Andina)'],

  // cómo es
  descripcion:              '',
  descripcion_verificada:   false,
  agua:                     '',
  vadeos:                   '',
  sombra:                   '',
},

];
