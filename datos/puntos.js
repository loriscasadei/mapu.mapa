/* ======================================================================
   PUNTOS · base de datos editable
   Accesos, refugios, puntos de paso, lagunas y cumbres donde empiezan o
   terminan los tramos. No cambies el "id": une el punto con su posición.
   
   Cómo editar sin romper nada:
     · Los textos van entre comillas simples: 'así'. Si el texto lleva un
       apóstrofo, escribilo con barra: 'O\'Higgins'.
     · Cada campo termina con coma, y cada registro { ... } también.
     · Vacío = '' (dos comillas). Sí/no = true / false, sin comillas.
     · Las líneas que empiezan con // son comentarios: la app las ignora.
     · Si algo queda mal escrito, la app lo avisa arriba del panel.
   
   Qué significa cada campo: datos/LEEME.md
   ====================================================================== */

const PUNTOS = [

{
  // identidad
  id:                 'CAT',
  nombre:             'Villa Catedral',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          'Línea 55 (la 55B va por Av. Bustillo y la 55P por Av. Pioneros). Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 55 (55B runs along Av. Bustillo and 55P along Av. Pioneros). Pay with the SUBE card.',
  parada:             'Villa Catedral (el recorrido termina ahí)',
  parada_en:          'Villa Catedral (the route ends there)',
  frecuencia:         'Cada 2 horas',
  frecuencia_en:      'Every 2 hours',
  ultimo_regreso:     '',
  estacionamiento:    'Hay estacionamiento pago y gratuito',
  estacionamiento_en: 'Paid and free parking available',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -8,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'VT',
  nombre:             'Arroyo Van Titter',
  nombre_en_tramos:   '',
  detalle:            'empalme',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         5,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'FRE',
  nombre:             'Refugio Frey',
  nombre_en_tramos:   '',
  detalle:            'laguna Toncek',
  tipo:               'refugio',
  descripcion:        'Abierto todo el año. Web: www.refugiofreybariloche.com, donde hay un parte actualizado del estado de los senderos.',
  descripcion_en:     'Open all year. Website: www.refugiofreybariloche.com, with an up-to-date report on trail conditions.',

  // el refugio
  capacidad:          '',
  reserva:            'Para dormir en el refugio o acampar junto a él hace falta reserva previa confirmada',
  reserva_en:         'To sleep at the hut or camp beside it you need a confirmed booking in advance',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -4,
  etiqueta_y:         22,
  etiqueta_lado:      'centro',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CDF',
  nombre:             'Cancha de Fútbol',
  nombre_en_tramos:   '',
  detalle:            'empalme del filo',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         9,
  etiqueta_y:         -16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'PRI',
  nombre:             'Punta Princesa',
  nombre_en_tramos:   '',
  detalle:            'filo del Catedral',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          'Línea 55 hasta Villa Catedral; de ahí se sube en un medio de elevación de Catedral Alta Patagonia. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 55 to Villa Catedral; from there take a Catedral Alta Patagonia lift. Pay with the SUBE card.',
  parada:             'Villa Catedral (el recorrido termina ahí)',
  parada_en:          'Villa Catedral (the route ends there)',
  frecuencia:         'Línea 55: cada 2 horas. Medios de elevación: normalmente de 9 a 17; consultar cuáles funcionan',
  frecuencia_en:      'Line 55: every 2 hours. Lifts: normally 9 am to 5 pm; check which are running',
  ultimo_regreso:     '',
  estacionamiento:    'En la base de Villa Catedral: pago y gratuito',
  estacionamiento_en: 'At the base of Villa Catedral: paid and free',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -9,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'RUC',
  nombre:             'Arroyo Rucaco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         0,
  etiqueta_y:         19,
  etiqueta_lado:      'centro',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'JAK',
  nombre:             'Refugio San Martín',
  nombre_en_tramos:   'Laguna Jakob',
  detalle:            'laguna Jakob',
  tipo:               'refugio',
  descripcion:        'Abierto todo el año. Web: www.refugiojakob.com.ar',
  descripcion_en:     'Open all year. Website: www.refugiojakob.com.ar',

  // el refugio
  capacidad:          '',
  reserva:            'Para dormir hace falta reserva previa confirmada',
  reserva_en:         'To sleep there you need a confirmed booking in advance',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         15,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'TAM',
  nombre:             'Tambo de Báez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          'Línea 20 hasta Puerto Moreno (Av. Bustillo, km 10,5), o línea 10 hasta Colonia Suiza. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 20 to Puerto Moreno (Av. Bustillo, km 10.5), or line 10 to Colonia Suiza. Pay with the SUBE card.',
  parada:             'Desde Puerto Moreno: ripio a la izquierda (camino viejo a Catedral), a 1,5 km bifurcación a la derecha y 4 km más hasta el ingreso. Desde Colonia Suiza: 5 km a pie hacia el arroyo Casa de Piedra',
  parada_en:          'From Puerto Moreno: gravel road on the left (old road to Catedral), at 1.5 km take the right fork and walk 4 km more to the entrance. From Colonia Suiza: 5 km on foot toward the Casa de Piedra stream',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'A 300 m de la Ruta Provincial 79, pasando la tranquera. Se llega en auto por el mismo camino',
  estacionamiento_en: '300 m from Provincial Route 79, past the gate. Reachable by car along the same road',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CES',
  nombre:             'Los Césares',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'En auto, desde Bariloche: Ruta 40 hacia El Bolsón, 36 km hasta el desvío a la derecha pasando Villa Mascardi. Por el ripio, a pocos metros está la Seccional de Guardaparques del lago Mascardi, donde se cobra el ingreso al Parque. Desde la Seccional son 25 km más hasta Los Césares, pasando el ingreso al Hotel Tronador. El camino entre Los Rápidos y Pampa Linda es de sentido único en algunos horarios: subida de 10:30 a 14 desde Los Rápidos; bajada de 16 a 18 desde Pampa Linda; doble mano de 19:30 a 9. Está prohibido subir entre las 14 y las 19:30.',
  descripcion_en:     'By car from Bariloche: Route 40 toward El Bolsón, 36 km to the turn-off on the right after Villa Mascardi. On the gravel road, a few metres in, is the Lake Mascardi ranger station, where the Park entry fee is collected. From the ranger station it is 25 km more to Los Césares, past the entrance to the Tronador hotel. The road between Los Rápidos and Pampa Linda is one-way at some hours: uphill from 10:30 am to 2 pm from Los Rápidos; downhill from 4 to 6 pm from Pampa Linda; two-way from 7:30 pm to 9 am. Going up is prohibited between 2 pm and 7:30 pm.',

  // cómo llegar
  colectivo:          'En verano hay un minibus de traslado hasta Pampa Linda que pasa por el Hotel Tronador, cerca del inicio del sendero. Hay que reservar',
  colectivo_en:       'In summer there is a minibus to Pampa Linda that stops at the Tronador hotel, near the trail start. Booking is required',
  parada:             'Hotel Tronador',
  parada_en:          'Tronador hotel',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'NEG',
  nombre:             'Refugio Italia',
  nombre_en_tramos:   'Laguna Negra',
  detalle:            'laguna Negra',
  tipo:               'refugio',
  descripcion:        'Refugio Manfredo Segre, también llamado Italia, a orillas de la laguna Negra. Abierto de noviembre a abril. Web: www.refugiolagunanegra.com',
  descripcion_en:     'Manfredo Segre hut, also called Italia, on the shore of Laguna Negra. Open November to April. Website: www.refugiolagunanegra.com',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         5,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'COL',
  nombre:             'Colonia Suiza',
  nombre_en_tramos:   '',
  detalle:            'arroyo Goye',
  tipo:               'acceso',
  descripcion:        'En auto: Av. Bustillo hasta la rotonda del km 18; a la izquierda por el Circuito Chico y después el camino de ripio a Colonia Suiza, hasta el puente del arroyo Goye.',
  descripcion_en:     'By car: Av. Bustillo to the km 18 roundabout; left along the Circuito Chico and then the gravel road to Colonia Suiza, up to the Goye stream bridge.',

  // cómo llegar
  colectivo:          'Línea 10, o línea 20 hasta Av. Bustillo km 18 y línea 13 hasta el puente del arroyo Goye. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 10, or line 20 to Av. Bustillo km 18 and line 13 to the Goye stream bridge. Pay with the SUBE card.',
  parada:             'Cerca del puente del arroyo Goye',
  parada_en:          'Near the Goye stream bridge',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         14,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'LOP',
  nombre:             'Refugio López',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         5,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'ALO',
  nombre:             'Arroyo López',
  nombre_en_tramos:   '',
  detalle:            'Circuito Chico',
  tipo:               'acceso',
  descripcion:        'En auto: Av. Bustillo hasta la rotonda del km 18; a la izquierda por el Circuito Chico, pasando el punto panorámico, hasta el arroyo López. El inicio se reconoce por un kiosco con forma de cabaña.',
  descripcion_en:     'By car: Av. Bustillo to the km 18 roundabout; left along the Circuito Chico, past the viewpoint, to the López stream. The start is recognisable by a cabin-shaped kiosk.',

  // cómo llegar
  colectivo:          'Línea 10, o línea 20 hasta Av. Bustillo km 18,3 y línea 13 (que entra a Colonia Suiza y vuelve al Circuito Chico). Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 10, or line 20 to Av. Bustillo km 18.3 and line 13 (which enters Colonia Suiza and returns to the Circuito Chico). Pay with the SUBE card.',
  parada:             'Ingreso a Colonia Suiza (donde empieza el ripio); de ahí 200 m por el asfalto del Circuito Chico hacia Bahía López hasta el arroyo López',
  parada_en:          'Colonia Suiza entrance (where the gravel starts); from there 200 m along the Circuito Chico asphalt toward Bahía López to the López stream',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'Gratuito, al inicio del sendero',
  estacionamiento_en: 'Free, at the trail start',

  // etiqueta en el mapa
  etiqueta_x:         8,
  etiqueta_y:         -9,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'BLO',
  nombre:             'Bahía López',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'En auto: Circuito Chico hasta Bahía López (km 32), junto al hotel Alun Nehuen.',
  descripcion_en:     'By car: Circuito Chico to Bahía López (km 32), next to the Alun Nehuen hotel.',

  // cómo llegar
  colectivo:          'Línea 10. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 10. Pay with the SUBE card.',
  parada:             'Mirador de Bahía López; de ahí se camina hasta el inicio del sendero',
  parada_en:          'Bahía López viewpoint; from there walk to the trail start',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'Gratuito',
  estacionamiento_en: 'Free',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         14,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CAB',
  nombre:             'Laguna CAB',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CRE',
  nombre:             'Laguna Cretón',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         15,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'AZU',
  nombre:             'Laguna Azul',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         14,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'JUJ',
  nombre:             'Laguna Jujuy',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         0,
  etiqueta_y:         -11,
  etiqueta_lado:      'centro',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'ILO',
  nombre:             'Laguna Ilón',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'PLI',
  nombre:             'Pampa Linda',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'En auto, desde Bariloche: Ruta 40 hacia El Bolsón, 36 km hasta el desvío a la derecha pasando Villa Mascardi. Por el ripio, a pocos metros está la Seccional de Guardaparques del lago Mascardi, donde se cobra el ingreso al Parque. Desde la Seccional son 50 km más hasta Pampa Linda (85 km en total). El camino entre Los Rápidos y Pampa Linda es de sentido único en algunos horarios: subida de 10:30 a 14 desde Los Rápidos; bajada de 16 a 18 desde Pampa Linda; doble mano de 19:30 a 9. Está prohibido subir entre las 14 y las 19:30.',
  descripcion_en:     'By car from Bariloche: Route 40 toward El Bolsón, 36 km to the turn-off on the right after Villa Mascardi. On the gravel road, a few metres in, is the Lake Mascardi ranger station, where the Park entry fee is collected. From the ranger station it is 50 km more to Pampa Linda (85 km in total). The road between Los Rápidos and Pampa Linda is one-way at some hours: uphill from 10:30 am to 2 pm from Los Rápidos; downhill from 4 to 6 pm from Pampa Linda; two-way from 7:30 pm to 9 am. Going up is prohibited between 2 pm and 7:30 pm.',

  // cómo llegar
  colectivo:          'Minibus de traslado en verano, unas 2 horas de viaje, con reserva. Empresas: Transitando lo Natural (del 15 de diciembre al 15 de abril; 20 de Febrero 25; tel. (0294) 4423250) y Travel Light Turismo (de noviembre a abril; 20 de Febrero 426; tel. (0294) 4213932)',
  colectivo_en:       'Summer shuttle, about 2 hours, booking required. Companies: Transitando lo Natural (15 December to 15 April; 20 de Febrero 25; tel. (0294) 4423250) and Travel Light Turismo (November to April; 20 de Febrero 426; tel. (0294) 4213932)',
  parada:             'Sale de Bariloche a las 8:30',
  parada_en:          'Leaves Bariloche at 8:30 am',
  frecuencia:         '',
  ultimo_regreso:     'Sale de Pampa Linda a las 17:00',
  ultimo_regreso_en:  'Leaves Pampa Linda at 5:00 pm',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'MEI',
  nombre:             'Refugio Otto Meiling',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'refugio',
  descripcion:        'Abierto de noviembre a mayo. Está en la ladera del Tronador, entre los glaciares Castaño Overa y Alerce, a casi 2.000 m. Web: www.refugiomeiling.com',
  descripcion_en:     'Open November to May. It sits on the slope of Tronador, between the Castaño Overa and Alerce glaciers, at almost 2,000 m. Website: www.refugiomeiling.com',

  // el refugio
  capacidad:          '',
  reserva:            'Es obligatorio reservar para acampar y para dormir en el refugio',
  reserva_en:         'Booking is mandatory to camp and to sleep at the hut',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         11,
  etiqueta_y:         16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'RVI',
  nombre:             'Refugio Viejo',
  nombre_en_tramos:   '',
  detalle:            'Tronador',
  tipo:               'refugio',
  descripcion:        'Refugio Manuel Ojeda Cancino, llamado Viejo del Tronador. Funciona como vivac: no tiene refugiero ni servicios. Más información en el sitio del Club Andino Bariloche (clubandino.org).',
  descripcion_en:     'Manuel Ojeda Cancino hut, known as the "Viejo" hut on Tronador. It works as a bivouac: there is no hut keeper or services. More information on the Club Andino Bariloche site (clubandino.org).',

  // el refugio
  capacidad:          'Unas 10 personas como máximo',
  capacidad_en:       'About 10 people at most',
  reserva:            '',
  que_se_compra:      'Nada: no hay refugiero ni servicios. Hay que llevar calentador',
  que_se_compra_en:   'Nothing: there is no hut keeper or services. Bring a stove',
  agua:               'Al subir hay hilos de agua, a veces poco caudalosos. En el refugio se puede derretir nieve',
  agua_en:            'There are thin streams on the way up, sometimes with little flow. At the hut you can melt snow',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         15,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'ROC',
  nombre:             'Refugio Roca',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'refugio',
  descripcion:        'Refugio Agostino Rocca, en el Paso de las Nubes. Abierto de noviembre a mayo. Web: www.refugiorocca.com',
  descripcion_en:     'Agostino Rocca hut, at Paso de las Nubes. Open November to May. Website: www.refugiorocca.com',

  // el refugio
  capacidad:          '',
  reserva:            'Reserva obligatoria en el refugio',
  reserva_en:         'Booking is mandatory at the hut',
  que_se_compra:      '',
  agua:               '',
  acampe:             'Prohibido acampar en las inmediaciones del refugio',
  acampe_en:          'Camping is prohibited near the hut',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         11,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'PFR',
  nombre:             'Puerto Frías',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'Se llega navegando: Puerto Pañuelo a Puerto Blest (catamarán), traslado en bus de Puerto Blest a Puerto Alegre (3 km) y lancha por el lago Frías hasta Puerto Frías, todo con Turisur. No se puede acampar en Puerto Frías. Puerto Frías tiene la Aduana, y desde ahí sale el camino a Chile.',
  descripcion_en:     'You get there by boat: Puerto Pañuelo to Puerto Blest (catamaran), bus from Puerto Blest to Puerto Alegre (3 km) and a boat across Lake Frías to Puerto Frías, all with Turisur. Camping is not allowed at Puerto Frías. Puerto Frías has the customs post, and the road to Chile leaves from there.',

  // cómo llegar
  colectivo:          'Línea 20 hasta Puerto Pañuelo. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 20 to Puerto Pañuelo. Pay with the SUBE card.',
  parada:             'Puerto Pañuelo (Llao Llao)',
  parada_en:          'Puerto Pañuelo (Llao Llao)',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'GUT',
  nombre:             'Seccional Gutiérrez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          'Línea 50. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 50. Pay with the SUBE card.',
  parada:             'Villa Los Coihues (última parada); de ahí 3 km a pie por la ruta que bordea el lago Gutiérrez',
  parada_en:          'Villa Los Coihues (last stop); from there 3 km on foot along the road beside Lake Gutiérrez',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'Gratuito, en la Seccional de Guardaparques (pasando el puente de ingreso, 300 m y a la izquierda)',
  estacionamiento_en: 'Free, at the ranger station (after the entrance bridge, 300 m and then left)',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'DUE',
  nombre:             'Cascada de los Duendes',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -9,
  etiqueta_y:         -5,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'MIG',
  nombre:             'Mirador del Gutiérrez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -9,
  etiqueta_y:         12,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'GSU',
  nombre:             'Cabecera sur',
  nombre_en_tramos:   '',
  detalle:            'lago Gutiérrez',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          'Vía Bariloche, el que va a El Bolsón. Los boletos se compran en la Terminal de Ómnibus o en Onelli 369',
  colectivo_en:       'Vía Bariloche, the one to El Bolsón. Tickets are bought at the bus terminal or at Onelli 369',
  parada:             'Km 2016 de la Ruta 40, ingreso al Complejo Los Baqueanos; también se puede caminar 1 km por la ruta hasta el inicio del sendero',
  parada_en:          'Km 2016 of Route 40, entrance to the Los Baqueanos complex; you can also walk 1 km along the road to the trail start',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'Al costado de la Ruta 40 (km 2015), o en el Complejo Los Baqueanos, donde se paga la estadía',
  estacionamiento_en: 'On the side of Route 40 (km 2015), or at the Los Baqueanos complex, where a fee is charged',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         15,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'LLA',
  nombre:             'Parque Llao Llao',
  nombre_en_tramos:   '',
  detalle:            'Circuito Chico',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          'Línea 20. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 20. Pay with the SUBE card.',
  parada:             'Puerto Pañuelo (km 25 de la Av. Bustillo); de ahí, por el Circuito Chico, 1 km hasta el Centro de Informes Llao Llao',
  parada_en:          'Puerto Pañuelo (km 25 of Av. Bustillo); from there 1 km along the Circuito Chico to the Llao Llao Information Centre',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'Gratuito en el Centro de Informes Llao Llao; pago en Puerto Pañuelo',
  estacionamiento_en: 'Free at the Llao Llao Information Centre; paid at Puerto Pañuelo',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CLL',
  nombre:             'Cerro Llao Llao',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -6,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TAC',
  nombre:             'Villa Tacul',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -9,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'SMI',
  nombre:             'Inicio',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CSM',
  nombre:             'Cerro San Martín',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         14,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

// ===== Puntos agregados desde el Anexo I (Disp. 150/19) y OpenStreetMap =====
// Los ids que empiezan con E son empalmes o accesos detectados automáticamente: renombralos si conocés el lugar.

{
  // identidad
  id:                 'FAA',
  nombre:             'Lago Villarino',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'FAL',
  nombre:             'Cerro Falkner',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NIV',
  nombre:             'Cascada Ñivinco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NIA',
  nombre:             'Ruta 40, antes de Villarino',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MON',
  nombre:             'Cerro La Mona',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LEC',
  nombre:             'Lago Espejo Chico',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MEL',
  nombre:             'Lagunas Las Mellizas',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LAG',
  nombre:             'Las Lagunas',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ACT',
  nombre:             'Arroyo Cataratas',
  nombre_en_tramos:   '',
  detalle:            'lago Traful',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MNT',
  nombre:             'Margen norte lago Traful',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MLE',
  nombre:             'Mirador Lago Espejo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'SLE',
  nombre:             'Seccional Lago Espejo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LCO',
  nombre:             'Lago Correntoso',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E06',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cartel de Villa Traful',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E05',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Aiken',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E07',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Vulcanche',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'AGU',
  nombre:             'Aguada del Burro',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NAS',
  nombre:             'Mirador El Naso',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'AGB',
  nombre:             'Ruta 231, km 4,5',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PAN',
  nombre:             'Ruta 231, km 6,5',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'COI',
  nombre:             'Coihue El Abuelo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ABU',
  nombre:             'Ruta 231, km 2,5',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'BUO',
  nombre:             'Cerro Buol',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E33',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Playa Bahía de la Última Esperanza',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E22',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cerro Buol',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RAN',
  nombre:             'Arroyo La Rana',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'UES',
  nombre:             'Brazo Última Esperanza',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TLA',
  nombre:             'Tapera de Lagos',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TRF',
  nombre:             'Traful',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NE2',
  nombre:             'Cerro Negro',
  nombre_en_tramos:   '',
  detalle:            'Traful',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CPA',
  nombre:             'Cerro Panguinal',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CNE',
  nombre:             'Cajón Negro',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'FBE',
  nombre:             'Filo Falso Belvedere',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E31',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cerro Book',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VOR',
  nombre:             'Valle del Arroyo Voruco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CDO',
  nombre:             'Cascada Dora',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E17',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Mirador Cascada Dora',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CSA',
  nombre:             'Cascada Santa Ana',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'R7L',
  nombre:             'Ruta de los 7 Lagos',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'DSA',
  nombre:             'Ruta 231, km 28',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'INA',
  nombre:             'Cascada Inacayal',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ANT',
  nombre:             'Calle Cacique Antriao',
  nombre_en_tramos:   '',
  detalle:            'Villa La Angostura',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E43',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Macrolote 5',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E51',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Macrolote 5',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'BAY',
  nombre:             'Base Cerro Bayo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E52',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de 76 Viviendas IPPV',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PMA',
  nombre:             'Población Martínez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'DOR',
  nombre:             'Cerro Dormilón',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'OCO',
  nombre:             'Cerro O\'Connor',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MNB',
  nombre:             'Mallín de las Nieblas',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'IST',
  nombre:             'Istmo Quetrihué',
  nombre_en_tramos:   '',
  detalle:            'Villa La Angostura',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E35',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cabañas Colibri',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MQU',
  nombre:             'Miradores de Quetrihué',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E32',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Mirador Bahía Mansa',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'OCA',
  nombre:             'Chacras del Manzano',
  nombre_en_tramos:   '',
  detalle:            'ruta 40',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E34',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Acceso Sendero Rio Bonito',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E12',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Bahía Manzano Resort',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RBV',
  nombre:             'Valle del Río Bonito',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RBA',
  nombre:             'Río Bonito, ruta 40',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RAG',
  nombre:             'Arroyo Ragintuco',
  nombre_en_tramos:   '',
  detalle:            'ruta 40',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ARR',
  nombre:             'Bosque de Arrayanes',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CHB',
  nombre:             'Población Chabol',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CEN',
  nombre:             'Cerro Centinela',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'HUA',
  nombre:             'Río Huemul, ruta 40',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CCO',
  nombre:             'Cerro Colorado',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PBL',
  nombre:             'Piedras Blancas',
  nombre_en_tramos:   '',
  detalle:            'isla Victoria',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E41',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Puerto Anchorena',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'IVA',
  nombre:             'Puerto Anchorena',
  nombre_en_tramos:   '',
  detalle:            'isla Victoria',
  tipo:               'acceso',
  descripcion:        'Se llega en catamarán desde Puerto Pañuelo con Turisur o con Espacio S.A. (catamarán Cau Cau). El ingreso al Parque y la tasa de embarque se cobran en Puerto Pañuelo al embarcar. En la isla hay 90 minutos de permanencia.',
  descripcion_en:     'You get there by catamaran from Puerto Pañuelo with Turisur or Espacio S.A. (Cau Cau catamaran). The Park entry fee and boarding fee are collected at Puerto Pañuelo when boarding. The stop on the island lasts 90 minutes.',

  // cómo llegar
  colectivo:          'Línea 20 hasta Puerto Pañuelo. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 20 to Puerto Pañuelo. Pay with the SUBE card.',
  parada:             'Puerto Pañuelo (Llao Llao)',
  parada_en:          'Puerto Pañuelo (Llao Llao)',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TOT',
  nombre:             'Bahía Totoras',
  nombre_en_tramos:   '',
  detalle:            'isla Victoria',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'OBA',
  nombre:             'Lago Ortiz Basualdo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LCA',
  nombre:             'Lago Los Cántaros',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E02',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Mirador Cascada Los Cántaros',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PCA',
  nombre:             'Puerto Cántaros',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'Se llega en catamarán desde Puerto Pañuelo hasta Puerto Blest (Turisur), y de ahí al muelle de Puerto Cántaros: 5 minutos en catamarán, o una hora a pie por un sendero fácil que rodea la bahía por el bosque. El ingreso al Parque y la tasa de embarque se cobran en Puerto Pañuelo.',
  descripcion_en:     'You get there by catamaran from Puerto Pañuelo to Puerto Blest (Turisur), and from there to the Puerto Cántaros jetty: 5 minutes by catamaran, or an hour on foot along an easy trail round the bay through the forest. The Park entry fee and boarding fee are collected at Puerto Pañuelo.',

  // cómo llegar
  colectivo:          'Línea 20 hasta Puerto Pañuelo. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 20 to Puerto Pañuelo. Pay with the SUBE card.',
  parada:             'Puerto Pañuelo (Llao Llao)',
  parada_en:          'Puerto Pañuelo (Llao Llao)',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'BLE',
  nombre:             'Puerto Blest',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'Se llega en catamarán desde Puerto Pañuelo (Turisur, única concesionaria de la navegación regular y turística). El ingreso al Parque y la tasa de embarque se cobran en Puerto Pañuelo al embarcar. Hay un hotel en Puerto Blest; no se puede acampar.',
  descripcion_en:     'You get there by catamaran from Puerto Pañuelo (Turisur, the only licensed operator of regular and tourist sailings). The Park entry fee and boarding fee are collected at Puerto Pañuelo when boarding. There is a hotel at Puerto Blest; camping is not allowed.',

  // cómo llegar
  colectivo:          'Línea 20 hasta Puerto Pañuelo; también hay traslado turístico de Turisur al puerto. Se paga con la tarjeta SUBE.',
  colectivo_en:       'Line 20 to Puerto Pañuelo; Turisur also runs a tourist transfer to the port. Pay with the SUBE card.',
  parada:             'Puerto Pañuelo (Llao Llao)',
  parada_en:          'Puerto Pañuelo (Llao Llao)',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E57',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Abra de Pérez Rosales',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VIC',
  nombre:             'Mirador Cerro Vichadero',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MDO',
  nombre:             'Mirada del Doctor',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E47',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Punta condor',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E14',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Refugio Otto Meiling',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'GCO',
  nombre:             'Glaciar Castaño Overa',
  nombre_en_tramos:   '',
  detalle:            'mirador',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'GDI',
  nombre:             'Garganta del Diablo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E48',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Laguna Ilón',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PPE',
  nombre:             'Piedra Pérez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CTE',
  nombre:             'Casa de Té Los Ventisqueros',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'No llega ningún transporte: solo se accede en auto o a pie desde Pampa Linda, a 7,5 km.',
  descripcion_en:     'No transport reaches it: access is only by car or on foot from Pampa Linda, 7.5 km away.',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E59',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Almohadilla',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VUR',
  nombre:             'Paso Vuriloche',
  nombre_en_tramos:   '',
  detalle:            'límite',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MVA',
  nombre:             'Mirador del Valle',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E15',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Pampa Linda',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E68',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Portezuelo de Bariloche O Tronador',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E09',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ROS',
  nombre:             'Laguna Rosada',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E40',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          'Vía Bariloche, el que va a El Bolsón. Se baja en la parada de la Seccional de Guardaparques de Los Maitenes y se camina en sentido contrario hasta el cartel de ingreso a Lof Wiritray; desde el cruce son 2 km por un camino no vehicular hasta el camping Relmu Lafquen',
  colectivo_en:       'Vía Bariloche, the one to El Bolsón. Get off at the Los Maitenes ranger station stop and walk back the other way to the Lof Wiritray entrance sign; from the junction it is 2 km on a non-vehicle road to the Relmu Lafquen campsite',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NEU',
  nombre:             'Ex refugio Neumeyer',
  nombre_en_tramos:   '',
  detalle:            'valle del Challhuaco',
  tipo:               'acceso',
  descripcion:        'No hay transporte público. En auto son 19 km hasta el refugio Neumeyer: desde la rotonda de la Circunvalación y la Ruta 40 (Diarco), 1,5 km por la Circunvalación y a la derecha por el camino de ripio, siguiendo la señalización por el valle del Challhuaco. Horario de acceso al valle: del 1 de noviembre al 30 de abril, de 8 a 21; del 1 de mayo al 31 de octubre, de 9 a 19, y conviene consultar el estado del camino por la nieve.',
  descripcion_en:     'There is no public transport. By car it is 19 km to the Neumeyer hut: from the Circunvalación and Route 40 roundabout (Diarco), 1.5 km along the Circunvalación and then right onto the gravel road, following the signs through the Challhuaco valley. Valley access hours: 1 November to 30 April, 8 am to 9 pm; 1 May to 31 October, 9 am to 7 pm, and it is wise to check road conditions because of snow.',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E19',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LVE',
  nombre:             'Laguna Verde',
  nombre_en_tramos:   '',
  detalle:            'valle del Challhuaco',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E58',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Camping Agreste Remü Lafken',
  tipo:               'acceso',
  descripcion:        'En auto: Ruta 40 hasta el km 2014, desvío a la derecha y 3 km de ripio siguiendo los carteles hasta el camping Relmu Lafquen (comunidad mapuche Lof Wiritray).',
  descripcion_en:     'By car: Route 40 to km 2014, turn right and follow the signs along 3 km of gravel to the Relmu Lafquen campsite (Mapuche community Lof Wiritray).',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'Pago, dentro del camping Relmu Lafquen',
  estacionamiento_en: 'Paid, inside the Relmu Lafquen campsite',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E49',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Laguna Verde Valle del Challhuaco',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MAI',
  nombre:             'Cabecera norte Mascardi',
  nombre_en_tramos:   '',
  detalle:            'seccional Los Maitenes',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E67',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Campamento Los Césares',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E66',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Campamento Los Césares',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CHA',
  nombre:             'Cerro Challhuaco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E39',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cascada Los Césares',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VOL',
  nombre:             'Cerro Volcánico',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CLC',
  nombre:             'Cascada Los Césares',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LEO',
  nombre:             'Playa Leones',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LLU',
  nombre:             'Laguna Llum',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LLC',
  nombre:             'Laguna Los Césares',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MAR',
  nombre:             'Campamento Marista',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        'En auto: desde la Seccional de Guardaparques del lago Mascardi (donde se cobra el ingreso al Parque) son 8 km más hasta el camping Marista.',
  descripcion_en:     'By car: from the Lake Mascardi ranger station (where the Park entry fee is collected) it is 8 km more to the Marista campsite.',

  // cómo llegar
  colectivo:          'En verano hay un minibus de traslado hasta Pampa Linda que pasa por el Campamento Marista. Hay que reservar',
  colectivo_en:       'In summer there is a minibus to Pampa Linda that stops at the Marista camp. Booking is required',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E42',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Laguna Juventus',
  tipo:               'acceso',
  descripcion:        'En auto: Ruta 40 hacia El Bolsón; pasando Villa Mascardi, desvío a la derecha hacia Pampa Linda. Hay que dejar el auto en la Seccional de Guardaparques del lago Mascardi (donde se cobra el ingreso al Parque) y seguir 500 m a pie, porque no hay estacionamiento cerca del sendero.',
  descripcion_en:     'By car: Route 40 toward El Bolsón; after Villa Mascardi, turn right toward Pampa Linda. Leave the car at the Lake Mascardi ranger station (where the Park entry fee is collected) and continue 500 m on foot, as there is no parking near the trail.',

  // cómo llegar
  colectivo:          'Vía Bariloche, el que va a El Bolsón. Pasando Villa Mascardi se baja en la parada del desvío a Pampa Linda; por el ripio hasta la Seccional (cobro del ingreso al Parque) y 500 m más hasta el inicio del sendero',
  colectivo_en:       'Vía Bariloche, the one to El Bolsón. After Villa Mascardi get off at the Pampa Linda turn-off stop; follow the gravel road to the ranger station (Park entry fee) and 500 m more to the trail start',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LLO',
  nombre:             'Arroyo Llodconto',
  nombre_en_tramos:   '',
  detalle:            'Huella Andina',
  tipo:               'acceso',
  descripcion:        'En auto: desde la Seccional de Guardaparques del lago Mascardi (donde se cobra el ingreso al Parque) son 6 km más. El inicio del sendero está a 400 m del camping La Querencia, junto al puente del arroyo Llodconto.',
  descripcion_en:     'By car: from the Lake Mascardi ranger station (where the Park entry fee is collected) it is 6 km more. The trail starts 400 m from La Querencia campsite, beside the Llodconto stream bridge.',

  // cómo llegar
  colectivo:          'En verano hay un minibus de traslado hasta Pampa Linda que pasa por el camping La Querencia. Hay que reservar con anticipación',
  colectivo_en:       'In summer there is a minibus to Pampa Linda that stops at La Querencia campsite. Book in advance',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E08',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Huinca Ruca',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'JUV',
  nombre:             'Laguna Juventus',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'HUI',
  nombre:             'Cerro Huinca',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'FGR',
  nombre:             'Cerro Falso Granítico',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E26',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Huinca Ruca',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'GUI',
  nombre:             'Lago Guillelmo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E01',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Camping Agreste',
  tipo:               'acceso',
  descripcion:        'Camino de montaña de 10 km de ripio entre la Ruta 40 y el lago Steffen, de sentido único en algunos horarios: ingreso de 10 a 14; regreso de 15 a 20; doble mano de 21 a 7.',
  descripcion_en:     'A 10 km gravel mountain road between Route 40 and Lake Steffen, one-way at some hours: entry from 10 am to 2 pm; exit from 3 pm to 8 pm; two-way from 9 pm to 7 am.',

  // cómo llegar
  colectivo:          'Vía Bariloche, el que va a El Bolsón. Se baja en el cruce del camino al lago Steffen y quedan 10 km hasta el lago. El boleto se compra en la Terminal de Ómnibus o en la oficina de Mitre 321',
  colectivo_en:       'Vía Bariloche, the one to El Bolsón. Get off at the junction of the road to Lake Steffen; it is 10 km to the lake. Tickets are bought at the bus terminal or at the office at Mitre 321',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    'Gratuito y pago (camping)',
  estacionamiento_en: 'Free and paid (campsite)',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'STE',
  nombre:             'Lago Steffen',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E29',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Los Piletones del Río Manso',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

];
