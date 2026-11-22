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
  nombre:                   'Refugio Neumeyer (Domos) - Mirador Laguna Verde',
  tramos:                   ['neu-e49', 'e49-lve'],
  fuente:                   'https://barilochetrekking.com/sendero-04/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Media',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Prohibido bañarse o entrar a la laguna Verde: es el hábitat de la ranita del Challhuaco.',
    'Prohibido llevar mascotas.',
    'Seguir los carteles y no salirse del camino.',
  ],
  precauciones_en:          [
    'Swimming in or entering Laguna Verde is prohibited: it is the habitat of the Challhuaco frog.',
    'Pets are prohibited.',
    'Follow the signs and do not leave the path.',
  ],
  servicios:                'Refugio Neumeyer (www.refugioneumeyer.com), con domos y restaurante. Desde el refugio hay otros paseos cortos: mirador del Valle, Valle de los Perdidos y mirador del Ñirihuau; consultar y avisar al refugiero antes de salir.',
  servicios_en:             'Neumeyer hut (www.refugioneumeyer.com), with domes and a restaurant. From the hut there are other short walks: Mirador del Valle, Valle de los Perdidos and Mirador del Ñirihuau; ask and tell the hut keeper before setting out.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Empieza junto a los domos del refugio, en el valle del Challhuaco, por un bosque de lengas muy bien señalizado. Tras unos minutos hay un punto panorámico y más adelante la laguna de Los Patos. En la bifurcación con el camino a la cumbre del Challhuaco (a la izquierda) se sigue a la derecha hacia la laguna Verde. Otros 15 minutos después de la laguna está el mirador del Pedregoso, con vista a Bariloche y al Nahuel Huapi. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts beside the hut domes, in the Challhuaco valley, through a very well-marked lenga forest. After a few minutes there is a viewpoint and later Laguna de Los Patos. At the fork with the path to the Challhuaco summit (on the left) continue right toward Laguna Verde. Another 15 minutes beyond the lake is the Pedregoso viewpoint, with a view of Bariloche and Nahuel Huapi. Return the same way.',
},

{
  // identidad
  id:                       '05',
  nombre:                   'Refugio Neumeyer (Domos) - Cerro Challhuaco',
  tramos:                   ['neu-e49', 'e49-cha'],
  fuente:                   'https://barilochetrekking.com/sendero-05/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Seguir los carteles y no salirse del camino.',
    'En el sector de rocas, el camino está marcado con pintura y pircas.',
    'Entre julio y diciembre hay nieve y conviene llevar raquetas.',
    'En verano hay mucho sol y no hay sombra: llevar bastante agua.',
    'Mirar el pronóstico, sobre todo el viento.',
    'Preguntar en el refugio cómo está el sendero y avisar que se sale.',
  ],
  precauciones_en:          [
    'Follow the signs and do not leave the path.',
    'On the rocky section the route is marked with paint and cairns.',
    'Between July and December there is snow and snowshoes are advised.',
    'In summer the sun is strong and there is no shade: carry plenty of water.',
    'Check the forecast, especially the wind.',
    'Ask at the hut about trail conditions and tell them you are heading out.',
  ],
  servicios:                'Refugio Neumeyer en el valle del Challhuaco.',
  servicios_en:             'Neumeyer hut in the Challhuaco valley.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Parte junto a los domos del refugio y entra en un bosque de lengas, bien señalizado. Pasa por un punto panorámico y por la laguna de Los Patos, y llega a una bifurcación: a la derecha va la laguna Verde, y hay que tomar la izquierda, hacia la cumbre. Desde ahí son 3 km más de subida constante, alternando lengas bajas con pedreros donde las pircas marcan el rumbo. Hay mucho sol y la vuelta es por el mismo camino.',
  descripcion_en:           'It starts beside the hut domes and enters a well-marked lenga forest. It passes a viewpoint and Laguna de Los Patos, then reaches a fork: right goes to Laguna Verde, so take the left toward the summit. From there it is 3 km more of steady climbing, alternating stunted lenga with scree where cairns show the way. The sun exposure is high and the return is by the same path.',
},

{
  // identidad
  id:                       '08',
  nombre:                   'Seccional Lago Gutiérrez - Cascada de los Duendes',
  tramos:                   ['gut-due'],
  fuente:                   'https://barilochetrekking.com/sendero-08/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Cuidado al caminar por la ruta de acceso: pasan autos y bicicletas.',
    'El sendero cruza una bicisenda.',
    'Seguir los carteles y no salirse de la senda.',
  ],
  precauciones_en:          [
    'Take care walking along the access road: cars and bicycles use it.',
    'The trail crosses a bike path.',
    'Follow the signs and stay on the path.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Paseo fácil y corto, bueno para ir con chicos. Arranca frente a la Seccional de Guardaparques, por un camino ancho y casi plano junto al arroyo Pescadero. Es un sendero autoguiado, con carteles sobre el bosque andino patagónico. A pocos metros cruza una bicisenda, y hay raíces y piedras en el piso. En el desvío hay que ir a la derecha (la izquierda lleva al mirador, a Playa Muñoz y al refugio Frey), cruzar un puente y se llega a la cascada. La vuelta es por el mismo camino.',
  descripcion_en:           'An easy, short walk, good for children. It starts opposite the ranger station, on a wide, almost flat path beside the Pescadero stream. It is a self-guided trail with signs about the Andean Patagonian forest. A few metres in it crosses a bike path, and there are roots and stones underfoot. At the fork go right (left leads to the viewpoint, Playa Muñoz and the Frey hut), cross a bridge and you reach the waterfall. The return is by the same path.',
},

{
  // identidad
  id:                       '09',
  nombre:                   'Seccional Lago Gutiérrez - Mirador del Lago Gutiérrez',
  tramos:                   ['gut-mig'],
  fuente:                   'https://barilochetrekking.com/sendero-09/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Cuidado en la ruta de acceso: pasan autos y bicicletas.',
    'El sendero cruza una bicisenda.',
    'Sendero empinado, con raíces.',
    'Buen calzado: la tierra suelta y el barro hacen resbalar.',
    'Seguir los carteles y no salirse del camino.',
  ],
  precauciones_en:          [
    'Take care on the access road: cars and bicycles use it.',
    'The trail crosses a bike path.',
    'Steep trail, with roots.',
    'Wear good footwear: loose soil and mud are slippery.',
    'Follow the signs and do not leave the path.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Parte frente a la Seccional de Guardaparques por un camino ancho y casi plano junto al arroyo Pescadero, cruzado enseguida por una bicisenda. La primera parte es autoguiada, con carteles sobre el bosque andino patagónico. En el primer desvío se va a la izquierda (la derecha lleva a la cascada de los Duendes) y en el siguiente a la derecha (la izquierda va a Playa Muñoz y al refugio Frey). Esta última parte es bastante empinada, con raíces. El mirador da una vista abierta del lago Gutiérrez y los cerros. Se vuelve por el mismo camino.',
  descripcion_en:           'It leaves opposite the ranger station on a wide, almost flat path beside the Pescadero stream, soon crossed by a bike path. The first part is self-guided, with signs about the Andean Patagonian forest. At the first fork go left (right leads to Cascada de los Duendes) and at the next go right (left goes to Playa Muñoz and the Frey hut). This last part is quite steep, with roots. The viewpoint gives an open view of Lake Gutiérrez and the surrounding peaks. Return the same way.',
},

{
  // identidad
  id:                       '10',
  nombre:                   'Seccional Lago Gutiérrez - Refugio Emilio Frey',
  tramos:                   ['gut-vt', 'vt-fre'],
  fuente:                   'https://barilochetrekking.com/sendero-10/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Dormir en el refugio Frey requiere reserva previa confirmada.',
    'En la web del refugio hay un parte del estado del sendero, actualizado.',
    'El sendero cruza una bicisenda.',
    'Llevar agua.',
    'El refugio Piedritas no es lugar de pernocte.',
  ],
  precauciones_en:          [
    'Sleeping at the Frey hut requires a confirmed booking.',
    'The hut\'s website has an up-to-date trail condition report.',
    'The trail crosses a bike path.',
    'Carry water.',
    'Piedritas hut is not an overnight place.',
  ],
  servicios:                'Refugio Emilio Frey (www.refugiofreybariloche.com).',
  servicios_en:             'Emilio Frey hut (www.refugiofreybariloche.com).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Se la conoce como «Picada Eslovena». Es algo más exigente que la que sale de la base del Catedral, porque empieza al nivel del lago. Parte frente a la Seccional y los primeros metros comparten camino con el de la cascada de los Duendes. Primero hay un bosque denso de coihues con algo de pendiente, y luego faldea el lago Gutiérrez a un mismo nivel. Al cruzar el arroyo La Menta se pasa por «el quemado», con restos de un incendio de 1995-1996. Durante las primeras 2 horas hay vegetación baja y poca sombra. En un desvío, a la izquierda se va a Playa Muñoz; hay que ir a la derecha y subir casi tres horas más por bosque, cruzando el Van Titter y pasando por el refugio Piedritas, hasta el refugio Frey. Se puede volver por el mismo camino, bajar a la base del Catedral o seguir al refugio San Martín.',
  descripcion_en:           'It is known as the "Picada Eslovena". It is somewhat more demanding than the one from the base of Catedral, because it starts at lake level. It starts opposite the ranger station and the first metres share the path to Cascada de los Duendes. First there is dense coihue forest with some slope, then it contours along Lake Gutiérrez at a constant height. Crossing the La Menta stream it passes through "el quemado", with traces of a 1995-1996 fire. For the first 2 hours the vegetation is low with little shade. At a fork, left goes to Playa Muñoz; take the right and climb almost three more hours through forest, crossing the Van Titter and passing Piedritas hut, to the Frey hut. You can return the same way, descend to the base of Catedral or continue to the San Martín hut.',
},

{
  // identidad
  id:                       '11',
  nombre:                   'Seccional Lago Gutiérrez - Playa Muñoz',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-11/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Prohibido hacer fuego y pernoctar en Playa Muñoz.',
    'Cuidado en la ruta de acceso: pasan autos y bicicletas.',
    'El sendero cruza una bicisenda.',
    'En verano, gorro por el sol.',
    'Llevar agua.',
  ],
  precauciones_en:          [
    'Fires and overnight stays are prohibited at Playa Muñoz.',
    'Take care on the access road: cars and bicycles use it.',
    'The trail crosses a bike path.',
    'In summer bring a hat for the sun.',
    'Carry water.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale frente a la Seccional de Guardaparques, y los primeros metros son los mismos que van a la cascada, al mirador y al refugio Frey, cruzados por una bicisenda. Pasado el bosque de coihues hay una zona de vegetación baja, a un mismo nivel, y se cruza el arroyo La Menta por «el quemado», marcado por un incendio de 1995-1996. En las primeras 2 horas hay poca sombra. En el desvío, a la izquierda se va a Playa Muñoz (a la derecha, al refugio Frey), y desde ahí baja con pendiente fuerte hasta la playa. Se vuelve por el mismo camino, girando a la derecha en la primera bifurcación hacia Villa Los Coihues.',
  descripcion_en:           'It starts opposite the ranger station, and the first metres are the same as those to the waterfall, the viewpoint and the Frey hut, crossed by a bike path. Past the coihue forest there is a low-vegetation zone, at constant height, and the La Menta stream is crossed at "el quemado", marked by a 1995-1996 fire. For the first 2 hours there is little shade. At the fork, left goes to Playa Muñoz (right to the Frey hut), and from there it drops steeply to the beach. Return the same way, turning right at the first fork toward Villa Los Coihues.',
},

{
  // identidad
  id:                       '23',
  nombre:                   'Cabecera Sur del Lago Gutiérrez - Playa Muñoz',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-23/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Cuidado en la ruta de acceso por el tránsito.',
    'Prohibido hacer fuego y pernoctar en Playa Muñoz.',
    'Llevar agua.',
  ],
  precauciones_en:          [
    'Take care on the access road because of traffic.',
    'Fires and overnight stays are prohibited at Playa Muñoz.',
    'Carry water.',
  ],
  servicios:                'Complejo Los Baqueanos: abierto todo el año (www.complejobaqueanos.com).',
  servicios_en:             'Los Baqueanos complex: open all year (www.complejobaqueanos.com).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Se entra por la Ruta 40, a la altura del km 2015, en la cabecera sur del lago Gutiérrez, o por el complejo Los Baqueanos, caminando por la playa hasta la margen oeste. El camino está bien marcado por el uso, pasa de la costa al bosque y mantiene siempre el mismo nivel. Desde la ruta son 7 km hasta Playa Muñoz. Se vuelve por el mismo camino, o se sigue hacia el norte hasta Villa Los Coihues, 9 km más.',
  descripcion_en:           'You enter from Route 40, at km 2015, at the south end of Lake Gutiérrez, or through the Los Baqueanos complex, walking along the beach to the west shore. The path is well worn, goes from the shore into the forest and stays always at the same level. From the road it is 7 km to Playa Muñoz. Return the same way, or continue north to Villa Los Coihues, 9 km more.',
},

{
  // identidad
  id:                       '23b',
  nombre:                   'Cabecera Sur del Lago Gutiérrez - Lago Mascardi',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-23b/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Es un camino vehicular interno, sin señalizar, en una zona con pobladores.',
    'Atención al pasar por propiedad privada.',
  ],
  precauciones_en:          [
    'It is an internal vehicle road, unsigned, in an area with residents.',
    'Take care when crossing private property.',
  ],
  servicios:                'Complejo Los Baqueanos: abierto todo el año (www.complejobaqueanos.com). Camping Relmu Lafquen.',
  servicios_en:             'Los Baqueanos complex: open all year (www.complejobaqueanos.com). Relmu Lafquen campsite.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Caminata corta que va por caminos vehiculares internos, no por un sendero de montaña. Une el lago Gutiérrez con el lago Mascardi y forma parte del Camino de los Vuriloches, una travesía de mucho valor histórico y natural: pueblos originarios, los primeros europeos llegados desde Chile, las misiones jesuitas y la Comisión de Límites del perito Moreno. Cruza la zona plana de «la divisoria de aguas», donde nacen dos vertientes: la del Atlántico (lagos Gutiérrez y Nahuel Huapi, ríos Limay y Negro) y la del Pacífico (lagos Mascardi y Steffen, río Manso). De norte a sur empieza en el complejo Los Baqueanos y sigue por caminos internos hasta la Ruta 40 y la Seccional Los Maitenes, de donde salen 2 km al lago Mascardi y al camping Relmu Lafquen. Conviene hablar con la comunidad Lof Wiritray para conocer su cultura e historia. También se llega a Los Baqueanos caminando desde Playa Muñoz o Villa Los Coihues.',
  descripcion_en:           'A short walk along internal vehicle roads, not a mountain trail. It links Lake Gutiérrez with Lake Mascardi and is part of the Camino de los Vuriloches, a traverse of great historical and natural value: native peoples, the first Europeans arriving from Chile, the Jesuit missions and the Boundary Commission led by Perito Moreno. It crosses the flat "watershed" zone where two drainage basins begin: the Atlantic (lakes Gutiérrez and Nahuel Huapi, Limay and Negro rivers) and the Pacific (lakes Mascardi and Steffen, Manso river). North to south it starts at the Los Baqueanos complex and follows internal roads to Route 40 and the Los Maitenes ranger station, from where 2 km lead to Lake Mascardi and the Relmu Lafquen campsite. It is worth talking to the Lof Wiritray community to learn about their culture and history. Los Baqueanos can also be reached on foot from Playa Muñoz or Villa Los Coihues.',
},

{
  // identidad
  id:                       '38',
  nombre:                   'Seccional Maitenes - Laguna Llum (Mirador de la Isla Corazón)',
  tramos:                   ['e40-mai', 'e58-leo', 'llu-leo'],
  fuente:                   'https://barilochetrekking.com/sendero-38/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Puede hacer falta calzado extra para vadear.',
    'Atención a las marcas, sobre todo entre la laguna Llum y el mirador: hay muchos cruces de senderos.',
    'Prohibido hacer fuego y acampar en Playa Leones y en la laguna Llum.',
    'No se puede pernoctar en la zona de la laguna Llum. Si se sigue a Los Césares por el norte del Mascardi, el único lugar permitido es «Machete», sin servicios y sin fuego.',
  ],
  precauciones_en:          [
    'Spare footwear for wading may be needed.',
    'Pay attention to the marks, especially between Laguna Llum and the viewpoint: there are many path junctions.',
    'Fires and camping are prohibited at Playa Leones and Laguna Llum.',
    'Overnight stays are not allowed around Laguna Llum. If you continue to Los Césares along the north of Mascardi, the only permitted place is "Machete", with no services and no fires.',
  ],
  servicios:                'Camping Relmu Lafquen, de la comunidad mapuche Lof Wiritray.',
  servicios_en:             'Relmu Lafquen campsite, run by the Mapuche community Lof Wiritray.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Parte junto al camping Relmu Lafquen, de la comunidad mapuche Lof Wiritray, a 3 km de ripio desde la Ruta 40; estacionar dentro del camping es pago. Hay que cruzar el arroyo Fresco, que a fines de primavera y principios de verano trae mucha agua (suele haber puente; si no, se vadea) y a fines de verano y otoño casi no tiene. Con el lago bajo se puede caminar la primera parte por la playa. Está bien señalizado con marcas rojas y lleva a Playa Leones, a 4 km, y después a la laguna Llum. Se puede seguir una hora más hasta el mirador de la Isla Corazón, pero desde el final de la laguna el sendero está más cerrado por la vegetación, con partes de mucha pendiente, poco mantenimiento y fácil de perder. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts beside the Relmu Lafquen campsite, of the Mapuche community Lof Wiritray, 3 km of gravel from Route 40; parking inside the campsite is paid. You must cross the Fresco stream, which in late spring and early summer carries a lot of water (there is usually a bridge; if not, you wade) and in late summer and autumn has almost none. With the lake low you can walk the first part along the beach. It is well marked with red marks and leads to Playa Leones, 4 km away, and then to Laguna Llum. You can continue an hour more to the Isla Corazón viewpoint, but from the end of the lake the trail is more overgrown, with some very steep parts, little maintenance and easy to lose. Return the same way.',
},

{
  // identidad
  id:                       '38b',
  nombre:                   'Seccional Maitenes - Playa Leones',
  tramos:                   ['e40-mai', 'e58-leo'],
  fuente:                   'https://barilochetrekking.com/sendero-38b/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Puede hacer falta calzado extra para vadear.',
    'Prohibido hacer fuego y acampar en Playa Leones y en la laguna Llum.',
  ],
  precauciones_en:          [
    'Spare footwear for wading may be needed.',
    'Fires and camping are prohibited at Playa Leones and Laguna Llum.',
  ],
  servicios:                'Camping Relmu Lafquen, de la comunidad mapuche Lof Wiritray.',
  servicios_en:             'Relmu Lafquen campsite, run by the Mapuche community Lof Wiritray.',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio está junto al camping Relmu Lafquen, de la comunidad mapuche Lof Wiritray, al que se llega por 3 km de ripio desde la Ruta 40; si se estaciona dentro del camping, el estacionamiento es pago. Primero hay que cruzar el arroyo Fresco, que a fines de la primavera y comienzo del verano trae mucha agua; suele haber puente o pasarela, y si no, hay que vadear. A fines del verano y en otoño casi no tiene agua. Con el lago bajo se puede hacer la primera parte por la playa; después se entra al bosque, con muy poco desnivel hasta Playa Leones. Está bien señalizado con marcas rojas y es ideal para los días de calor porque va por bosque. Se vuelve por el mismo camino.',
  descripcion_en:           'The start is beside the Relmu Lafquen campsite, of the Mapuche community Lof Wiritray, reached by 3 km of gravel from Route 40; if you park inside the campsite the parking is paid. First you must cross the Fresco stream, which in late spring and early summer carries a lot of water; there is usually a bridge or footbridge, and if not you must wade. In late summer and autumn it has almost no water. With the lake low you can walk the first part along the beach; then you enter the forest, with very little climbing to Playa Leones. It is well marked with red marks and ideal for hot days because it runs through forest. Return the same way.',
},

{
  // identidad
  id:                       '47',
  nombre:                   'Campamento Marista - Cerro Falso Granítico',
  tramos:                   ['mar-fgr'],
  fuente:                   'https://barilochetrekking.com/sendero-47/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Prestar atención a las marcas.',
    'Llevar suficiente agua.',
    'Mucho sol: llevar gorro.',
  ],
  precauciones_en:          [
    'Pay attention to the marks.',
    'Carry enough water.',
    'Strong sun: bring a hat.',
  ],
  servicios:                'Camping Carilafquen (Congregación Marista): solo para grupos con fines educativos, con reserva y autorización previa. Camping La Querencia: abierto de noviembre a marzo.',
  servicios_en:             'Carilafquen campsite (Marista Congregation): only for educational groups, with prior booking and authorisation. La Querencia campsite: open November to March.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Arranca frente al camping Carilafquen, sobre el camino al Tronador. Es corto, pero bastante empinado. Al comienzo se camina junto al cauce de un río. Hay que mirar bien las marcas, y en el sector sin vegetación las pircas muestran el rumbo. Desde la cima se ven el Tronador y los cerros Bonete y Cresta de Gallo. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts opposite the Carilafquen campsite, on the road to Tronador. It is short but quite steep. At first you walk beside a river bed. Watch the marks carefully, and in the vegetation-free section cairns show the way. From the top you can see Tronador and cerros Bonete and Cresta de Gallo. Return the same way.',
},

{
  // identidad
  id:                       '48',
  nombre:                   'Lago Mascardi (Arroyo Llodconto) - Lago Steffen',
  tramos:                   ['llo-e01'],
  fuente:                   'https://barilochetrekking.com/sendero-48/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Llevar calzado extra: hay vados.',
  ],
  precauciones_en:          [
    'Bring spare footwear: there are fords.',
  ],
  servicios:                'En el lago Mascardi: camping La Querencia, abierto de noviembre a marzo. En el lago Steffen: camping Lago Steffen.',
  servicios_en:             'At Lake Mascardi: La Querencia campsite, open November to March. At Lake Steffen: Lago Steffen campsite.',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio está a 400 m del camping La Querencia, al lado del puente del arroyo Llodconto, en el camino al Tronador. Los primeros 9,5 km van por un camino de vehículos de uso oficial hasta el Puesto de Boock; ahí la senda cruza la propiedad por los corrales y hay que dejar siempre cerradas las tranqueras. Se sigue por las marcas de la Huella Andina en un valle casi plano, con mallines y arroyos de poco caudal para vadear. Al final baja por un bosque alto de coihues y cipreses hasta el camping del lago Steffen. También se puede hacer en sentido inverso, hacia el norte, o seguir al sur por la siguiente etapa de la Huella Andina.',
  descripcion_en:           'The start is 400 m from La Querencia campsite, beside the Llodconto stream bridge, on the Tronador access road. The first 9.5 km follow a vehicle road for official use only up to the Puesto de Boock; there the path crosses the property past the corrals and the gates must always be left closed. Follow the Huella Andina marks through an almost flat valley with wet meadows and low-flow streams to wade. At the end it descends through a tall coihue and cypress forest to the Lake Steffen campsite. It can also be done in reverse, northbound, or continued south on the next Huella Andina stage.',
},

{
  // identidad
  id:                       '49',
  nombre:                   'Seccional Mascardi - Laguna Juventus',
  tramos:                   ['e42-juv'],
  fuente:                   'https://barilochetrekking.com/sendero-49/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Llevar calzado extra por los mallines.',
    'Permanecer en el sendero.',
  ],
  precauciones_en:          [
    'Bring spare footwear for the wet meadows.',
    'Stay on the trail.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio está a la izquierda de la ruta a Pampa Linda, a unos 500 m de la Seccional del lago Mascardi, donde se cobra el ingreso al Parque; no hay donde estacionar cerca, así que se deja el auto en la Seccional y se sigue a pie. Empieza con una subida bastante empinada y después se mantiene a nivel junto a la laguna. A comienzos de la temporada los mallines tienen bastante agua: hay piedras y troncos para cruzar. Los senderos no dan la vuelta completa a la laguna: se recorre una orilla, se vuelve y se sigue por la otra. Se retorna a la ruta por el mismo camino.',
  descripcion_en:           'The start is on the left of the Pampa Linda road, about 500 m from the Lake Mascardi ranger station, where the Park entry fee is collected; there is nowhere to park nearby, so leave the car at the ranger station and continue on foot. It begins with a fairly steep climb and then stays level beside the lake. Early in the season the wet meadows hold quite a lot of water: there are stones and logs to cross on. The trails do not go all the way round the lake: you walk one shore, come back and continue along the other. Return to the road the same way.',
},

{
  // identidad
  id:                       '58',
  nombre:                   'Punta Princesa (filo Cerro Catedral) - Refugio Emilio Frey',
  tramos:                   ['pri-cdf', 'fre-cdf'],
  fuente:                   'https://barilochetrekking.com/sendero-58/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Dormir en el refugio Frey o acampar al lado requiere reserva previa confirmada.',
    'En la web del refugio hay un parte del estado del sendero (nieve acumulada).',
    'Sendero técnico, para gente con mucha experiencia en trekking.',
    'Conviene hacerlo con buen clima, cielo despejado y sin viento; bajar con cuidado para no torcerse ni resbalar.',
    'Llevar agua.',
  ],
  precauciones_en:          [
    'Sleeping at the Frey hut or camping beside it requires a confirmed booking.',
    'The hut\'s website has a trail condition report (accumulated snow).',
    'Technical trail, for people with a lot of trekking experience.',
    'Best done in good weather, with clear skies and no wind; descend carefully to avoid sprains and slips.',
    'Carry water.',
  ],
  servicios:                'Catedral Alta Patagonia (medios de elevación, normalmente de 9 a 17; consultar cuáles funcionan). Refugio Emilio Frey: abierto todo el año.',
  servicios_en:             'Catedral Alta Patagonia (lifts, normally 9 am to 5 pm; check which are running). Emilio Frey hut: open all year.',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio se alcanza subiendo en uno de los medios de elevación del Catedral hasta la cumbre, y de ahí se va a Punta Princesa, donde arranca el sendero por el filo. Después de unos 3,5 km de pedrero hay un desvío a la derecha hacia el refugio San Martín; hay que seguir derecho, hasta que el rumbo gira a la izquierda y empieza una bajada muy empinada hacia la «Cancha de Fútbol». En los últimos 2 km se pasa por la laguna Schmoll y después por la Toncek, junto al refugio Frey. Desde el refugio se puede volver a la base del Catedral, bajar a Villa Los Coihues o seguir al refugio San Martín.',
  descripcion_en:           'The start is reached by taking one of the Catedral lifts to the top, and from there heading to Punta Princesa, where the trail follows the ridge. After about 3.5 km of scree there is a fork to the right toward the San Martín hut; keep straight on, until the route turns left and begins a very steep descent toward the "Cancha de Fútbol". In the last 2 km you pass Laguna Schmoll and then Laguna Toncek, beside the Frey hut. From the hut you can return to the base of Catedral, descend to Villa Los Coihues or continue to the San Martín hut.',
},

{
  // identidad
  id:                       '63',
  nombre:                   'Base Cerro Catedral - Refugio Emilio Frey',
  tramos:                   ['cat-vt', 'vt-fre'],
  fuente:                   'https://barilochetrekking.com/sendero-63/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Para dormir en el refugio Frey o acampar al lado hay que tener la reserva confirmada.',
    'En la web del refugio hay un parte del estado del sendero, actualizado.',
    'Llevar agua.',
    'El refugio Piedritas no es lugar de pernocte.',
  ],
  precauciones_en:          [
    'To sleep at the Frey hut or camp beside it you need a confirmed booking.',
    'The hut\'s website has an up-to-date trail condition report.',
    'Carry water.',
    'Piedritas hut is not an overnight place.',
  ],
  servicios:                'Refugio Emilio Frey: abierto todo el año.',
  servicios_en:             'Emilio Frey hut: open all year.',

  // cómo es (texto propio, reescrito)
  descripcion:              'De las vías para llegar al refugio Frey, es la más elegida: sale del estacionamiento del centro de esquí, tiene transporte público, menos desnivel y va casi todo por bosque, con sombra en los días de calor. Los primeros metros comparten un camino de vehículos. A los 6 km se une con el sendero que viene del lago Gutiérrez y sigue casi 2 km junto al arroyo Van Titter, pasando por el refugio Piedritas. Después viene la parte empinada, se cruza el arroyo otra vez y se llega al refugio Frey, a orillas de la laguna Toncek. Se puede volver por el mismo camino, bajar a Villa Los Coihues o seguir al refugio San Martín.',
  descripcion_en:           'Of the ways to reach the Frey hut, this is the most popular: it starts at the ski resort car park, has public transport, less climbing, and runs mostly through forest with shade on hot days. The first metres share a vehicle road. At km 6 it joins the trail from Lake Gutiérrez and follows the Van Titter stream for almost 2 km, passing Piedritas hut. Then comes the steep part, the stream is crossed again and you reach the Frey hut on the shore of Laguna Toncek. You can return the same way, descend to Villa Los Coihues or continue to the San Martín hut.',
},

{
  // identidad
  id:                       '72',
  nombre:                   'Puerto Frías - Puerto Blest',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-72/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Solo se puede hacer si se duerme en el Hotel Puerto Blest: hay que reservar antes el hotel y el lugar en el catamarán.',
    'No se puede acampar en Puerto Blest ni en Puerto Frías.',
    'Calcular la salida y la llegada según la época y las horas de luz.',
    'En la temporada de lluvias los senderos se llenan de barro y resbalan mucho.',
  ],
  precauciones_en:          [
    'It can only be done if you sleep at the Puerto Blest hotel: book the hotel and your catamaran seat beforehand.',
    'Camping is not allowed at Puerto Blest or Puerto Frías.',
    'Plan your start and finish around the season and the hours of daylight.',
    'In the rainy season the trails turn to mud and are very slippery.',
  ],
  servicios:                'Turisur navega el Nahuel Huapi y el lago Frías: Puerto Pañuelo a Puerto Blest, bus de Puerto Blest a Puerto Alegre y lancha de Puerto Alegre a Puerto Frías. Se paga aparte de la navegación a Puerto Blest. Si se usa un solo tramo de navegación, se cobra el ida y vuelta completo. También se puede contratar una embarcación privada, siempre que esté habilitada por Parques Nacionales. Hotel Puerto Blest: temporada baja desde Semana Santa hasta el 14 de diciembre, y puede haber días cerrado. Si se reserva el hotel, el catamarán va incluido en la tarifa.',
  servicios_en:             'Turisur sails Nahuel Huapi and Lake Frías: Puerto Pañuelo to Puerto Blest, a bus from Puerto Blest to Puerto Alegre and a boat from Puerto Alegre to Puerto Frías. It is paid separately from the trip to Puerto Blest. If you use only one leg of the boat, the full return fare is charged. You can also hire a private boat, as long as it is licensed by the National Parks. Puerto Blest hotel: low season from Easter to 14 December, and it may be closed some days. If you book the hotel, the catamaran is included in the fare.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Camino histórico: era el antiguo paso entre Argentina y Chile, el Paso de los Raulíes, hoy reemplazado por el Cruce de Lagos. Arranca en la Aduana de Puerto Frías, sigue 1,5 km por la ruta que va a Chile y después toma el sendero hacia Puerto Blest. Los primeros 2 km son de subida constante, por una senda recién señalizada. Pasa por las lagunas Pangue y Los Clavos y baja despacio entre selva valdiviana, muy húmeda, cruzando varios arroyos. A los 6 km sale un desvío de 1 km (ida y vuelta) hasta el hito fronterizo VIII-13. El final comparte traza con el sendero de Puerto Cántaros a Puerto Blest.',
  descripcion_en:           'A historic route: it was the old crossing between Argentina and Chile, the Raulíes Pass, now replaced by the Cruce de Lagos. It starts at the customs building in Puerto Frías, follows the road to Chile for 1.5 km and then takes the trail to Puerto Blest. The first 2 km climb steadily on a recently marked path. It passes lagunas Pangue and Los Clavos and drops slowly through very wet Valdivian rainforest, crossing several streams. At km 6 a 1 km round-trip side path leads to boundary marker VIII-13. The last stretch shares the trail from Puerto Cántaros to Puerto Blest.',
},

{
  // identidad
  id:                       '73',
  nombre:                   'Puerto Blest - Puerto Cántaros',
  tramos:                   ['pca-e02', 'e02-ble'],
  fuente:                   'https://barilochetrekking.com/sendero-73/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Con lluvia o nieve los senderos pueden estar cubiertos de nieve o barro y resbalar mucho.',
    'Atención al horario de salida del catamarán.',
  ],
  precauciones_en:          [
    'In rain or snow the trails may be covered in snow or mud and very slippery.',
    'Watch the catamaran departure time.',
  ],
  servicios:                'Turisur: única empresa concesionaria de la navegación regular y turística entre Puerto Pañuelo y Puerto Blest.',
  servicios_en:             'Turisur: the only company licensed for regular and tourist sailings between Puerto Pañuelo and Puerto Blest.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sendero de 3 km, llamado «Parques Nacionales», que une Puerto Blest con el sendero al lago Cántaros. Está muy bien señalizado y entra en la selva valdiviana, cruza un puente colgante y varios arroyos, con vistas a la bahía de Puerto Blest. Atención a los horarios del catamarán de regreso.',
  descripcion_en:           'A 3 km trail, called "Parques Nacionales", linking Puerto Blest with the trail to Lake Cántaros. It is very well signed and enters the Valdivian rainforest, crossing a suspension bridge and several streams, with views of Puerto Blest bay. Watch the return catamaran times.',
},

{
  // identidad
  id:                       '74',
  nombre:                   'Puerto Cántaros - Lago Cántaros (Puerto Blest)',
  tramos:                   ['pca-e02', 'lca-e02'],
  fuente:                   'https://barilochetrekking.com/sendero-74/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Media',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Sendero de tablones con escalera y pendiente fuerte.',
    'Con lluvia o nieve puede estar cubierto de barro o nieve y resbalar mucho.',
    'Atención al horario de salida del catamarán.',
  ],
  precauciones_en:          [
    'Boardwalk trail with stairs and a steep slope.',
    'In rain or snow it may be covered in mud or snow and very slippery.',
    'Watch the catamaran departure time.',
  ],
  servicios:                'Turisur: única empresa concesionaria de la navegación regular y turística entre Puerto Pañuelo y Puerto Blest.',
  servicios_en:             'Turisur: the only company licensed for regular and tourist sailings between Puerto Pañuelo and Puerto Blest.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sendero autoguiado que empieza en el muelle de Puerto Cántaros, adonde se llega en 5 minutos de catamarán desde Puerto Blest o a pie en una hora por un sendero fácil que rodea la bahía por el bosque. La subida por la escalinata lleva una hora y pasa por cuatro miradores con vista a la cascada, a la selva valdiviana y al lago Cántaros. Al final hay un alerce de más de 1.500 años. Se vuelve por el mismo camino, atentos al horario del catamarán a Bariloche.',
  descripcion_en:           'A self-guided trail starting at the Puerto Cántaros jetty, reached in 5 minutes by catamaran from Puerto Blest or on foot in an hour along an easy trail round the bay through the forest. The climb up the stairway takes an hour and passes four viewpoints with views of the waterfall, the Valdivian rainforest and Lake Cántaros. At the end there is an alerce tree more than 1,500 years old. Return the same way, keeping an eye on the catamaran time back to Bariloche.',
},

{
  // identidad
  id:                       '75',
  nombre:                   'Puerto Blest - Lago Ortíz Basualdo',
  tramos:                   ['e02-ble', 'lca-e02', 'oba-lca'],
  fuente:                   'https://barilochetrekking.com/sendero-75/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Solo se puede hacer si se duerme en el hotel de Puerto Blest: hay que reservar antes.',
    'No se puede acampar en Puerto Blest.',
    'Calcular la salida y la llegada según las horas de luz.',
    'Con lluvia, los senderos se cubren de barro y resbalan mucho.',
  ],
  precauciones_en:          [
    'It can only be done if you sleep at the Puerto Blest hotel: book beforehand.',
    'Camping is not allowed at Puerto Blest.',
    'Plan your start and finish around daylight hours.',
    'In rain the trails get muddy and very slippery.',
  ],
  servicios:                'Turisur: navegación Puerto Pañuelo - Puerto Blest. Hotel Puerto Blest: temporada baja desde Semana Santa hasta el 14 de diciembre; con el hotel reservado, el catamarán va incluido.',
  servicios_en:             'Turisur: sailing Puerto Pañuelo - Puerto Blest. Puerto Blest hotel: low season from Easter to 14 December; if you book the hotel the catamaran is included.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale junto al hotel y bordea el lago por la playa hasta cruzar un puente colgante sobre el arroyo Blest, donde se une al camino de tablones que viene de Puerto Cántaros. Se sube por escaleras hasta el mirador del lago Cántaros, junto al Alerce Milenario, y ahí empieza el tramo hacia el Ortiz Basualdo. Es una selva valdiviana muy húmeda, con musgos, líquenes, alerces grandes y muchos puentes y pasarelas. A unos 4 km está «La Heladera», un paredón vertical con hielo y nieve de aludes permanentes; más adelante, las cascadas del arroyo Cántaros y un bosque puro de alerces. Tras casi 9 km se llega a la Playa de los Palos, donde nace el río Cántaros. La vuelta es por el mismo camino.',
  descripcion_en:           'It starts beside the hotel and follows the shore along the beach to a suspension bridge over the Blest stream, where it joins the boardwalk from Puerto Cántaros. Stairs climb to the Lake Cántaros viewpoint, beside the Alerce Milenario, and the Ortiz Basualdo stretch begins there. It is very wet Valdivian rainforest, with mosses, lichens, big alerce trees and many bridges and walkways. At about 4 km is "La Heladera", a vertical wall holding ice and snow from permanent avalanches; further on, the Cántaros stream waterfalls and a pure alerce forest. After almost 9 km you reach Playa de los Palos, where the Cántaros river begins. The return is by the same path.',
},

{
  // identidad
  id:                       '77',
  nombre:                   'Refugio Agostino Rocca - Lago Frías y Puerto Blest',
  tramos:                   ['roc-pfr'],
  fuente:                   'https://barilochetrekking.com/sendero-77/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'No se puede acampar en el lago Frías ni en Puerto Blest.',
    'El sendero tiene carteles con la distancia recorrida (01/12, 02/12…) para calcular el tiempo y llegar al embarque.',
    'Atención al horario de salida del catamarán.',
  ],
  precauciones_en:          [
    'Camping is not allowed at Lake Frías or Puerto Blest.',
    'The trail has signs with the distance covered (01/12, 02/12…) so you can time your arrival for boarding.',
    'Watch the catamaran departure time.',
  ],
  servicios:                'Refugio Agostino Rocca: abierto de noviembre a mayo. Turisur: navegación por el Nahuel Huapi y el lago Frías, con bus entre Puerto Blest y Puerto Alegre. Hotel Puerto Blest: temporada baja desde Semana Santa hasta el 14 de diciembre; con el hotel reservado, el catamarán va incluido.',
  servicios_en:             'Agostino Rocca hut: open November to May. Turisur: sailings on Nahuel Huapi and Lake Frías, with a bus between Puerto Blest and Puerto Alegre. Puerto Blest hotel: low season from Easter to 14 December; if you book the hotel the catamaran is included.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale junto al refugio y está bien señalizado. Al terminar la primera bajada por bosque de lengas hay unas rocas con vista al frente del glaciar Frías. Sigue un pedrero corto en bajada casi hasta el río Frías, se cruza un arroyo y se camina por bosque siempre del mismo lado del río. En el km 9 un puente colgante cruza el río otra vez. Después se navega el lago Frías hasta Puerto Alegre, un bus lleva hasta Puerto Blest y el catamarán vuelve a Puerto Pañuelo. También se puede hacer de norte a sur, desde Puerto Blest hasta Pampa Linda, durmiendo en el refugio Rocca.',
  descripcion_en:           'It leaves beside the hut and is well marked. At the end of the first descent through lenga forest there are rocks with a view of the Frías glacier front. A short scree descent follows almost to the Frías river, a stream is crossed and the path runs through forest always on the same side of the river. At km 9 a suspension bridge crosses the river again. Then you sail Lake Frías to Puerto Alegre, take a bus to Puerto Blest, and the catamaran returns to Puerto Pañuelo. It can also be done north to south, from Puerto Blest to Pampa Linda, sleeping at the Rocca hut.',
},

{
  // identidad
  id:                       '82',
  nombre:                   'Isla Victoria - Puerto Anchorena',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-82/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Atención al horario de salida del catamarán.',
  ],
  precauciones_en:          [
    'Watch the catamaran departure time.',
  ],
  servicios:                'Dos empresas navegan desde Puerto Pañuelo a Isla Victoria y a la península de Quetrihué (bosque de arrayanes): Turisur y Espacio S.A. (catamarán Cau Cau).',
  servicios_en:             'Two companies sail from Puerto Pañuelo to Isla Victoria and the Quetrihué peninsula (myrtle forest): Turisur and Espacio S.A. (Cau Cau catamaran).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sendero de 2 km en total que forma parte de la visita guiada a la isla Victoria, durante los 90 minutos de parada en Puerto Anchorena. Pasa por el Centro de Visitantes y también se puede hacer por cuenta propia, siguiendo la cartelería.',
  descripcion_en:           'A 2 km trail in total, part of the guided visit to Isla Victoria during the 90-minute stop at Puerto Anchorena. It passes the Visitor Centre and can also be done on your own, following the signs.',
},

{
  // identidad
  id:                       '90',
  nombre:                   'Arroyo López - Refugio López',
  tramos:                   ['alo-lop'],
  fuente:                   'https://barilochetrekking.com/sendero-90/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'enero a marzo',
  temporada_en:             'January to March',
  dificultad_otra:          'Alta',
  temporada_otra:           'abril a diciembre',
  temporada_otra_en:        'April to December',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Entre julio y diciembre hay que subir con piqueta y crampones, y solo con buen conocimiento de montaña.',
    'De enero a marzo es más accesible: sin nieve, sin equipo especial y bien señalizado.',
    'Llevar calzado extra: cuando el arroyo López trae mucha agua hay que vadearlo cerca del refugio.',
  ],
  precauciones_en:          [
    'Between July and December you need an ice axe and crampons, and good mountain knowledge.',
    'From January to March it is more accessible: no snow, no special gear and well marked.',
    'Bring spare footwear: when the López stream is high you have to wade it near the hut.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio está sobre el Circuito Chico, junto a un kiosco con forma de cabaña, y casi siempre hay muchos autos. Al principio hay muchos cruces y cuesta ver las marcas rojas. A los 5 minutos empieza la subida empinada, con raíces y piedras sueltas; el terreno está muy erosionado, así que conviene buen calzado y bastones. Tras una hora se llega al refugio Roca Negra: hay que rodearlo y seguir unos metros por el camino de autos hasta retomar las marcas que cortan los caracoles. Al final está el arroyo López, que con poco caudal se cruza por las piedras y, si no, se vadea (no hay puente). Desde el refugio se puede seguir a La Hoya y al Pico Turista (2.060 m), unas 3 horas ida y vuelta, con piedras sueltas y a veces nieve o hielo incluso en verano; la parte antes de La Hoya es la más técnica, y conviene ir con guía y consultar al refugiero.',
  descripcion_en:           'The start is on the Circuito Chico, beside a cabin-shaped kiosk, and there are almost always many cars. At first there are many junctions and the red marks are hard to spot. After 5 minutes the steep climb begins, with roots and loose stones; the ground is badly eroded, so good footwear and poles help. After an hour you reach the Roca Negra hut: go around it and follow the car track for a few metres until you find the trail marks again, which cut the switchbacks. At the end is the López stream, which at low flow is crossed on stones and otherwise waded (there is no bridge). From the hut you can continue to La Hoya and Pico Turista (2,060 m), about 3 hours round trip, with loose rock and sometimes snow or ice even in summer; the part before La Hoya is the most technical, and a guide is advisable, as is asking the hut keeper.',
},

{
  // identidad
  id:                       '101',
  nombre:                   'Arroyo Goye (Colonia Suiza) - Refugio Manfredo Segre (Laguna Negra)',
  tramos:                   ['col-neg'],
  fuente:                   'https://barilochetrekking.com/sendero-101/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Mucha exposición al sol: llevar gorro, anteojos de sol y protector.',
  ],
  precauciones_en:          [
    'Strong sun exposure: bring a hat, sunglasses and sunscreen.',
  ],
  servicios:                'Refugio Manfredo Segre (Laguna Negra): abierto de noviembre a abril.',
  servicios_en:             'Manfredo Segre hut (Laguna Negra): open from November to April.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale de Colonia Suiza con una subida suave y constante junto al arroyo Goye, por un valle con algunos mallines. Después de unas 3 horas se cruzan el arroyo Navidad y el arroyo Negro o Goye, y el camino se vuelve muy empinado en zigzag, los «caracoles». Arriba aparece la vista de la laguna Negra, el cerro Negro y el refugio Manfredo Segre, también llamado Italia. Desde el refugio se puede conectar con el refugio López o seguir al sur por la travesía de las 5 lagunas hasta la laguna CAB.',
  descripcion_en:           'It leaves Colonia Suiza with a gentle, steady climb beside the Goye stream, through a valley with a few wet meadows. After about 3 hours you cross the Navidad and then the Negro (or Goye) streams, and the path turns very steep in switchbacks known as the "caracoles". At the top there is a view of Laguna Negra, Cerro Negro and the Manfredo Segre hut, also called Italia. From the hut you can link to the López hut or continue south on the 5 lagunas traverse to Laguna CAB.',
},

{
  // identidad
  id:                       '113',
  nombre:                   'Bahía López - Refugio López (Palotinos)',
  tramos:                   ['blo-lop'],
  fuente:                   'https://barilochetrekking.com/sendero-113/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Sendero peligroso, solo para expertos o con guía.',
    'Es de un solo sentido: no se puede hacer del refugio hacia Bahía López.',
    'Se recomienda guía de montaña: pide experiencia en pedreros expuestos y saber encontrar la ruta.',
    'No es recomendable para quien tiene vértigo: hay varios pasos donde no se puede resbalar.',
    'Pasadas las primeras dos horas ya no se puede volver atrás.',
    'Cuidado después de lluvias: en la cara sur se acumula hielo en los pedreros.',
    'No hay agua ni sombra.',
    'El punto de inicio no coincide con el de llegada (3 km): planificar cómo recuperar el vehículo.',
  ],
  precauciones_en:          [
    'Dangerous trail, for experts only or with a guide.',
    'One direction only: it cannot be done from the hut toward Bahía López.',
    'A mountain guide is recommended: it needs experience on exposed scree and route-finding.',
    'Not advisable for people with vertigo: there are several passages where you must not slip.',
    'After the first two hours there is no way back.',
    'Take care after rain: ice builds up on the scree on the south face.',
    'There is no water or shade.',
    'The start and the finish are not at the same place (3 km apart): plan how to recover your vehicle.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Al principio es el mismo camino que va al mirador del Brazo Tristeza. En el mirador hay que buscar a la izquierda, pegado a la pared y clavado en un árbol, el cartel de madera que avisa que el desvío es «solo para expertos y con guía». Empieza como camino de cornisa sobre un acantilado y después sube por el filo, marcado solo con pircas. Hay un primer resalte de roca de unos 8 m y otro media hora después. Sigue un gran pedrero que cae muy fuerte hacia el Brazo Tristeza, que se cruza sin perder altura hasta un filo. Se pasa a la otra vertiente y se llega al borde de «La Hoya», desde donde siempre se ve el refugio pero es fácil perder la senda. Lastimarse acá implicaría una evacuación muy larga y compleja. La bajada del refugio se hace por la ruta tradicional hasta el arroyo López.',
  descripcion_en:           'At the start it is the same path that goes to the Brazo Tristeza viewpoint. At the viewpoint look to the left, hard against the wall and nailed to a tree, for the wooden sign saying the fork is "for experts only and with a guide". It begins as a ledge path over a cliff and then climbs the ridge, marked only with cairns. There is a first rock step of about 8 m and another half an hour later. A large scree slope follows, falling steeply toward the Brazo Tristeza; you cross it without losing height to a ridge. You pass to the other side and reach the edge of "La Hoya", from where the hut is always in sight but it is easy to lose the path. An injury here would mean a very long and complex evacuation. The descent from the hut is by the traditional route down to the López stream.',
},

{
  // identidad
  id:                       '124',
  nombre:                   'Pampa Linda - Refugio Otto Meiling',
  tramos:                   ['pli-mei'],
  fuente:                   'https://barilochetrekking.com/sendero-124/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Es obligatorio reservar para acampar y dormir en el refugio.',
    'La nieve suele quedar hasta diciembre y tapa las marcas: conviene ir justo por la cresta.',
    'Calcular la salida y la llegada según las horas de luz.',
    'Con lluvia, los senderos se cubren de barro y resbalan mucho.',
  ],
  precauciones_en:          [
    'Booking is mandatory to camp or sleep at the hut.',
    'Snow usually remains until December and covers the trail marks: stay right on the crest.',
    'Plan your start and finish around daylight hours.',
    'In rain the trails get muddy and very slippery.',
  ],
  servicios:                'Refugio Otto Meiling: abierto de noviembre a mayo, con reserva obligatoria. En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'Otto Meiling hut: open November to May, booking required. In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale a pocos metros de la Seccional de Guardaparques. Los primeros 3 km son casi planos, hasta el puente sobre el Castaño Overa. Después son unos 6 km y 500 m de desnivel por una ladera hasta «La Almohadilla». Sigue con menos pendiente hacia el oeste, y a unos 2 km está el «Descanso de los Caballos», en el límite de la vegetación. La parte final son 2 km y 350 m de desnivel por una cresta sin vegetación, con marcas de pintura en las rocas. El refugio está en la ladera del Tronador, entre los glaciares Castaño Overa y Alerce, a casi 2.000 m. Se vuelve por el mismo camino, o se conecta con el refugio Rocca por el cruce del glaciar Alerce o por el valle hacia el Paso de las Nubes.',
  descripcion_en:           'It starts a few metres from the ranger station. The first 3 km are almost flat, up to the bridge over the Castaño Overa. Then there are about 6 km and 500 m of climbing up a hillside to "La Almohadilla". It continues on an easier slope west, and about 2 km on is the "Descanso de los Caballos", at the tree line. The final part is 2 km and 350 m of ascent along a vegetation-free crest, with paint marks on the rocks. The hut sits on the slope of Tronador, between the Castaño Overa and Alerce glaciers, at almost 2,000 m. Return the same way, or link to the Rocca hut across the Alerce glacier or via the valley toward Paso de las Nubes.',
},

{
  // identidad
  id:                       '125',
  nombre:                   'Pampa Linda - Refugio Agostino Rocca',
  tramos:                   ['pli-roc'],
  fuente:                   'https://barilochetrekking.com/sendero-125/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Calcular la salida y la llegada según la época y las horas de luz.',
    'Con lluvia, los senderos se cubren de barro y resbalan mucho.',
  ],
  precauciones_en:          [
    'Plan your start and finish around the season and daylight hours.',
    'In rain the trails get muddy and very slippery.',
  ],
  servicios:                'Refugio Agostino Rocca: abierto de noviembre a mayo; reserva obligatoria; no se puede acampar cerca. En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'Agostino Rocca hut: open November to May; booking required; no camping nearby. In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Arranca a pocos metros de la Seccional de Guardaparques. Los primeros 3 km son casi planos, hasta el puente sobre el río Castaño Overa. Después se sube por una ladera; a los 800 m hay que tomar el desvío a la derecha hacia el Paso de las Nubes y el refugio Rocca. A 700 m se llega al río Alerce, que se bordea unos 5 km hasta un puente. Luego se pasa un mallín por la izquierda y la pendiente aumenta hasta los caracoles. Más arriba el camino se suaviza y cruza cañadones y mallines hasta un gran mallín desde donde se ve el refugio, a 5 minutos. Se vuelve por el mismo camino o se sigue a Lago Frías por el Paso de las Nubes, o a la laguna Ilón.',
  descripcion_en:           'It starts a few metres from the ranger station. The first 3 km are almost flat, up to the bridge over the Castaño Overa river. Then it climbs a mountainside; at 800 m take the right fork toward Paso de las Nubes and the Rocca hut. After 700 m you reach the Alerce river, which you follow for about 5 km to a bridge. Then a wet meadow is passed on the left and the slope steepens up to the switchbacks. Higher up the path eases and crosses stone gullies and small meadows to a large green meadow from which the hut is visible, 5 minutes away. Return the same way, or continue to Lake Frías via Paso de las Nubes, or to Laguna Ilón.',
},

{
  // identidad
  id:                       '127',
  nombre:                   'Refugio Otto Meiling - Refugio Agostino Rocca (Cruce Glaciar Alerce)',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-127/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Extrema',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Obligatorio ir con guía de montaña.',
  ],
  precauciones_en:          [
    'A mountain guide is mandatory.',
  ],
  servicios:                'Refugio Otto Meiling: abierto de noviembre a mayo. Refugio Agostino Rocca: abierto de noviembre a mayo.',
  servicios_en:             'Otto Meiling hut: open November to May. Agostino Rocca hut: open November to May.',

  // cómo es (texto propio, reescrito)
  descripcion:              'La travesía que une los dos refugios cruza el glaciar Alerce y pide conocimientos técnicos, por eso es obligatorio contratar un guía de montaña. Según el terreno, el guía provee calzado especial, raquetas o crampones, y se aplican los protocolos habituales de seguridad en glaciar, como encordar al grupo. El cruce del glaciar lleva alrededor de 1 hora. Hay una alternativa sin glaciar, por el valle (19 km en total): se baja del Meiling hacia Pampa Linda y, poco antes del río Castaño Overa, se toma el desvío a la izquierda hacia el Rocca; de ahí se sigue el mismo camino de Pampa Linda al refugio Rocca.',
  descripcion_en:           'The traverse linking the two huts crosses the Alerce glacier and needs technical skills, so hiring a mountain guide is mandatory. Depending on conditions, the guide provides special footwear, snowshoes or crampons, and the usual glacier safety protocols apply, such as roping up the group. The glacier crossing takes around 1 hour. There is a glacier-free alternative through the valley (19 km in total): descend from the Meiling hut toward Pampa Linda and, shortly before the Castaño Overa river, take the left fork toward the Rocca hut; from there follow the same path as from Pampa Linda to the Rocca hut.',
},

{
  // identidad
  id:                       '128',
  nombre:                   'Pampa Linda - Laguna Ilón (Mirada del Doctor)',
  tramos:                   ['ilo-pli'],
  fuente:                   'https://barilochetrekking.com/sendero-128/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Calcular la salida y la llegada según la época y las horas de luz.',
    'Con lluvia, los senderos se cubren de barro y resbalan mucho.',
  ],
  precauciones_en:          [
    'Plan your start and finish around the season and daylight hours.',
    'In rain the trails get muddy and very slippery.',
  ],
  servicios:                'Camping Refugio Ilón: abierto de noviembre a abril. En Pampa Linda: camping Los Vuriloches, Hostería Pampa Linda y Albergue Pampa Linda.',
  servicios_en:             'Ilón refuge campsite: open November to April. In Pampa Linda: Los Vuriloches campsite, Pampa Linda inn and Pampa Linda hostel.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale a pocos metros de la Seccional de Guardaparques, por el mismo camino que va al refugio Meiling. A los 300 m hay que tomar un desvío a la derecha que lleva, en 15 minutos, al río Alerce, que se cruza por un puente colgante. Está bien señalizado y sigue con una pendiente muy fuerte durante 2 km, hasta una zona de mallines que se rodea hasta la laguna Ilón. Desde la playa de la laguna, hacia la izquierda, sale la senda a la «Mirada del Doctor», un mirador natural a 4 km (8 km y 3 horas ida y vuelta). Desde Ilón se vuelve por el mismo camino, se conecta con el refugio Rocca por el paso La Marca o se sigue al norte hacia la laguna Cretón (travesía de las 5 lagunas hasta Colonia Suiza).',
  descripcion_en:           'It starts a few metres from the ranger station, on the same path that goes to the Meiling hut. After 300 m take a fork to the right that leads, in 15 minutes, to the Alerce river, crossed by a suspension bridge. It is well marked and continues with a very steep slope for 2 km, to a wet meadow area that you go round to reach Laguna Ilón. From the lake beach, to the left, a path leaves to the "Mirada del Doctor", a natural viewpoint 4 km away (8 km and 3 hours round trip). From Ilón you can return the same way, link to the Rocca hut via Paso La Marca, or continue north to Laguna Cretón (the 5 lagunas traverse to Colonia Suiza).',
},

{
  // identidad
  id:                       '129',
  nombre:                   'Laguna Ilón (Mirada del Doctor) - Refugio Agostino Rocca (Paso La Marca)',
  tramos:                   ['ilo-roc'],
  fuente:                   'https://barilochetrekking.com/sendero-129/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Se recomienda ir con guía de montaña.',
    'Es una travesía larga: calcular las horas de luz.',
    'Consultar el estado del camino y avisar al refugiero.',
    'Llevar suficiente agua.',
  ],
  precauciones_en:          [
    'A mountain guide is recommended.',
    'It is a long traverse: plan around daylight hours.',
    'Ask about trail conditions and let the hut keeper know.',
    'Carry enough water.',
  ],
  servicios:                'Camping Refugio Ilón: abierto de noviembre a abril; reservar el lugar en domos o en carpa. Refugio Agostino Rocca: abierto de noviembre a mayo.',
  servicios_en:             'Ilón refuge campsite: open November to April; book your place in the domes or tent. Agostino Rocca hut: open November to May.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale del área de acampe de la laguna Ilón y la bordea por la izquierda, por el mismo sendero de la «Mirada del Doctor» (el desvío está a una hora). Siguiendo las marcas celestes se camina una hora más hacia el oeste entre bosques y pampas hasta el pedrero que faldea el cerro Mar de Piedras, y se sube hasta el paso La Marca. Después se baja por bosques de lengas y coihues y se vuelve a subir por una estribación del cerro Constitución, con vista lejana a la laguna Huaca. A unos 500 m del refugio se une con el sendero de Pampa Linda. Tiene dos subidas y bajadas fuertes, así que es exigente. Con el desvío a la Mirada del Doctor, sumar 1 hora. Se puede hacer también en sentido contrario.',
  descripcion_en:           'It leaves the Laguna Ilón camping area and goes round the lake on the left, on the same path as the "Mirada del Doctor" (the fork is an hour away). Following the light blue marks you walk one more hour west through forests and pampas to the scree that skirts Cerro Mar de Piedras, and climb to Paso La Marca. Then you drop through lenga and coihue forests and climb again over a spur of Cerro Constitución, with a distant view of Laguna Huaca. About 500 m from the hut it joins the trail from Pampa Linda. It has two big ups and downs, so it is demanding. With the side trip to the Mirada del Doctor, add 1 hour. It can also be done in the opposite direction.',
},

{
  // identidad
  id:                       '133',
  nombre:                   'Pampa Linda - Refugio Manuel Ojeda Cancino (Refugio Viejo del Tronador)',
  tramos:                   ['pli-rvi'],
  fuente:                   'https://barilochetrekking.com/sendero-133/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Llevar documentación personal: hay que hacer el trámite migratorio en la Gendarmería Nacional y con Carabineros de Chile.',
    'Se recomienda ir con guía de montaña.',
    'Es una travesía larga: calcular las horas de luz.',
    'Llevar calentador y buen abrigo: la temperatura baja mucho de noche.',
    'Llevar suficiente agua.',
  ],
  precauciones_en:          [
    'Bring personal ID: you must complete immigration formalities at the Argentine Gendarmería and with the Chilean Carabineros.',
    'A mountain guide is recommended.',
    'It is a long traverse: plan around daylight hours.',
    'Bring a stove and warm clothing: the temperature drops a lot at night.',
    'Carry enough water.',
  ],
  servicios:                'Refugio Manuel Ojeda Cancino (refugio «Viejo» del Tronador): sin refugiero ni servicios, se usa como vivac; entran unas 10 personas como máximo; hay que llevar calentador. En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'Manuel Ojeda Cancino hut ("Viejo" Tronador hut): no hut keeper or services, used as a bivouac; it holds about 10 people at most; bring a stove. In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Antes de empezar hay que hacer el trámite migratorio en la Gendarmería de Pampa Linda. Se sigue por el camino al Ventisquero Negro y, al kilómetro, a la izquierda, se toma el sendero al Saltillo Las Nalcas; se cruzan el primer arroyo y el puente del Manso Superior, y a pocos metros se va a la derecha por el camino que bordea el río Cauquenes. En las dos bifurcaciones siguientes se va siempre a la derecha (a la izquierda se va a la laguna La Rosada y al cerro Volcánico). Se llega al paso Los Vuriloches y se rodea el Mallín Chileno hasta el puesto de carabineros, donde se hace un segundo trámite y se avisa que se sube a dormir al refugio; ahí se puede acampar. Los carabineros suelen estar solo en enero y febrero, hasta las 18. Desde ahí la senda sube sin pausa unas 3 horas más hasta el refugio, sobre un promontorio rocoso, el último antes de la zona glaciar sur del Tronador y con el mejor acceso a las cumbres. Hasta el cruce a Chile hay agua en varios puntos; al subir, solo hilos de agua y, en el refugio, se puede derretir nieve. Se vuelve por el mismo camino.',
  descripcion_en:           'Before starting you must complete the immigration formalities at the Gendarmería in Pampa Linda. Follow the road to Ventisquero Negro and, after a kilometre, take the trail on the left to Saltillo Las Nalcas; cross the first stream and the Manso Superior bridge, and a few metres on go right along the path beside the Cauquenes river. At the next two forks always go right (left goes to Laguna La Rosada and Cerro Volcánico). You reach Paso Los Vuriloches and go round the Mallín Chileno to the Carabineros post, where a second formality is done and you announce that you are going up to sleep at the hut; camping is possible there. The Carabineros are usually there only in January and February, until 6 pm. From there the path climbs steadily about 3 more hours to the hut, on a rocky promontory, the last one before the southern glacier zone of Tronador and with the best access to the summits. Up to the border crossing there is water in several places; while climbing, only thin trickles and, at the hut, you can melt snow. Return the same way.',
},

{
  // identidad
  id:                       '135',
  nombre:                   'Pampa Linda - Cerro Volcánico',
  tramos:                   ['e09-ros', 'ros-vol'],
  fuente:                   'https://barilochetrekking.com/sendero-135/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Se recomienda ir con guía de montaña.',
    'El comienzo tiene tablones; con lluvia o nieve puede estar inundado o con mucho barro.',
    'Llevar calzado extra: hay que vadear arroyos y cruzar mallines.',
    'Es una jornada larga: calcular las horas de luz.',
    'No hay lugar habilitado para dormir: se sube y se baja en el día.',
  ],
  precauciones_en:          [
    'A mountain guide is recommended.',
    'The start has boardwalks; in rain or snow it may be flooded or very muddy.',
    'Bring spare footwear: you have to wade streams and cross wet meadows.',
    'It is a long day: plan around daylight hours.',
    'There is no authorised place to sleep: go up and down in one day.',
  ],
  servicios:                'En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Se sigue el camino de autos hacia el mirador del Ventisquero Negro y, unos 400 m después de la hostería, se toma el desvío a la izquierda hacia el Saltillo Las Nalcas; donde termina el camino de autos se puede dejar el vehículo. La senda no está bien señalizada, así que hay que ir atentos. Comparte el comienzo con las del Saltillo y el refugio Viejo, sobre tablones. Luego se sube cruzando varias veces un arroyo, hasta una zona de mallines marcada con estacas blancas. Tras un tramo de bosque se llega al filo, de lajas sueltas y arena, marcado con pircas y pintura roja. Pasa por un hito fronterizo y una subida en zigzag lleva a la cumbre, con vista al volcán Osorno, el Puntiagudo, los lagos Fonck y Hess y la cara sur del Tronador. Se vuelve por el mismo camino, o con un desvío a la laguna La Rosada.',
  descripcion_en:           'Follow the car track toward the Ventisquero Negro viewpoint and, about 400 m past the inn, take the left fork toward Saltillo Las Nalcas; where the car track ends you can leave the vehicle. The path is not well signed, so stay alert. It shares its start with the Saltillo and Refugio Viejo trails, on boardwalks. Then it climbs, crossing a stream several times, to a wet meadow area marked with white stakes. After a forest stretch you reach the ridge, of loose slabs and sand, marked with cairns and red paint. It passes a boundary marker and a zigzag climb leads to the summit, with views of Osorno and Puntiagudo volcanoes, lakes Fonck and Hess and the south face of Tronador. Return the same way, or detour to Laguna La Rosada.',
},

{
  // identidad
  id:                       '137',
  nombre:                   'Pampa Linda - Piedra Pérez',
  tramos:                   ['cte-ppe'],
  fuente:                   'https://barilochetrekking.com/sendero-137/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Mucha pendiente y piedra suelta: buen calzado.',
    'Se recomienda ir con guía de montaña.',
    'Llevar suficiente agua.',
  ],
  precauciones_en:          [
    'Very steep with loose stone: good footwear.',
    'A mountain guide is recommended.',
    'Carry enough water.',
  ],
  servicios:                'En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio está bien señalizado, junto a la confitería Los Ventisqueros, en la base del Tronador, a 7,5 km de Pampa Linda. No llega ningún transporte: se accede en auto o a pie. Al principio hay que cruzar unos arroyos, por piedras o vadeando según el caudal. Es una subida rápida y muy empinada, casi toda en zigzag, hasta una altura sin vegetación donde hay que guiarse por pircas. Desde el primer mirador se ve el glaciar del Manso, el Ventisquero Negro, y unos metros más adelante otro mirador da al glaciar Castaño Overa. Se vuelve por el mismo camino.',
  descripcion_en:           'The start is well signed, beside the Los Ventisqueros café, at the base of Tronador, 7.5 km from Pampa Linda. No transport reaches it: access is by car or on foot. At the start you cross a few streams, on stones or by wading depending on the flow. It is a quick, very steep climb, almost all in zigzags, to a height with no vegetation where you must follow cairns. From the first viewpoint you can see the Manso glacier, the Ventisquero Negro, and a few metres further another viewpoint looks onto the Castaño Overa glacier. Return the same way.',
},

{
  // identidad
  id:                       '140',
  nombre:                   'Pampa Linda - Saltillo Las Nalcas',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-140/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'El sendero tiene sectores de tablones. Con lluvia o nieve puede estar inundado o con mucho barro.',
  ],
  precauciones_en:          [
    'The trail has boardwalk sections. In rain or snow it may be flooded or very muddy.',
  ],
  servicios:                'En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Se sigue el camino de autos hacia el Ventisquero Negro y, unos 400 m después de la hostería, se toma el desvío a la izquierda; unos metros más adelante hay un arroyo y termina el camino, donde se puede dejar el auto. De ahí son unos 30 minutos: se cruza un arroyo, el puente del río Manso Superior, y se toma el desvío a la izquierda (el de la derecha va al cerro Volcánico y al refugio Viejo). El salto cae libre más de 40 m desde el cerro Biblioteca, rodeado de chilcos con flores rojas y grandes nalcas. Se vuelve por el mismo camino.',
  descripcion_en:           'Follow the car track toward Ventisquero Negro and, about 400 m past the inn, take the left fork; a few metres on there is a stream and the road ends, where you can leave the car. From there it is about 30 minutes: cross a small stream, the Manso Superior river bridge, and take the left fork (the right one goes to Cerro Volcánico and the Viejo hut). The waterfall drops freely more than 40 m from Cerro Biblioteca, surrounded by chilco shrubs with red flowers and big nalca plants. Return the same way.',
},

{
  // identidad
  id:                       '151',
  nombre:                   'Pampa Linda - Mirador del Valle',
  tramos:                   ['e15-mva'],
  fuente:                   'https://barilochetrekking.com/sendero-151/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Mucha pendiente: buen calzado.',
    'Llevar suficiente agua.',
  ],
  precauciones_en:          [
    'Steep: wear good footwear.',
    'Carry enough water.',
  ],
  servicios:                'En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale a pocos metros de la Seccional de Guardaparques, por el camino al refugio Otto Meiling. A un kilómetro hay que tomar el desvío a la izquierda hacia el mirador, al que se llega tras una hora y media más. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts a few metres from the ranger station, on the path to the Otto Meiling hut. After one kilometre take the left fork toward the viewpoint, which you reach after another hour and a half. Return the same way.',
},

{
  // identidad
  id:                       '152',
  nombre:                   'Pampa Linda - Mirador Glaciar Castaño Overa',
  tramos:                   ['e59-gco'],
  fuente:                   'https://barilochetrekking.com/sendero-152/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Mucha pendiente: buen calzado.',
    'Llevar suficiente agua.',
  ],
  precauciones_en:          [
    'Steep: wear good footwear.',
    'Carry enough water.',
  ],
  servicios:                'En Pampa Linda: camping Los Vuriloches (todo el año), Hostería Pampa Linda (todo el año) y Albergue Pampa Linda (solo en verano).',
  servicios_en:             'In Pampa Linda: Los Vuriloches campsite (all year), Pampa Linda inn (all year) and Pampa Linda hostel (summer only).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale a pocos metros de la Seccional de Guardaparques. Los primeros 3 km son casi planos, hasta el puente sobre el río Castaño Overa. Desde ahí se sigue media hora por el camino al refugio Meiling hasta un cartel que manda a la izquierda hacia el mirador, al que se llega tras una hora más. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts a few metres from the ranger station. The first 3 km are almost flat, up to the bridge over the Castaño Overa river. From there follow the path to the Meiling hut for half an hour to a sign pointing left toward the viewpoint, which you reach after one more hour. Return the same way.',
},

{
  // identidad
  id:                       '153',
  nombre:                   'Tambo de Báez - Refugio San Martín (Laguna Jakob)',
  tramos:                   ['jak-tam'],
  fuente:                   'https://barilochetrekking.com/sendero-153/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [],
  precauciones_en:          [],
  servicios:                'Refugio San Martín (Laguna Jakob): abierto todo el año (www.refugiojakob.com.ar). Tambo de Báez: estacionamiento.',
  servicios_en:             'San Martín hut (Laguna Jakob): open all year (www.refugiojakob.com.ar). Tambo de Báez: car park.',

  // cómo es (texto propio, reescrito)
  descripcion:              'La entrada al Tambo de Báez está sobre la Ruta Provincial 79, por un ripio entre el arroyo Casa de Piedra y Colonia Suiza, y a 300 m, pasando la tranquera, hay estacionamiento. Los primeros 400 m son los mismos que van al cerro Bella Vista; en el desvío se sigue a la izquierda y en pocos minutos se llega al arroyo Casa de Piedra. Se lo bordea, y pasados los primeros 6 km se cruza el puente para seguir por la otra margen hasta el final del valle. Tras un bosque alto de lengas empieza una pendiente fuerte en zigzag, los «caracoles», hasta una pasarela; cruzado el arroyo se sube casi una hora más hasta la laguna Jakob. Se vuelve por el mismo camino, o se sigue a la laguna Negra (con guía) o a Los Césares por la Huella Andina.',
  descripcion_en:           'The entrance to Tambo de Báez is on Provincial Route 79, on a gravel road between the Casa de Piedra stream and Colonia Suiza, and 300 m in, past the gate, there is parking. The first 400 m are the same as for Cerro Bella Vista; at the fork continue left and in a few minutes you reach the Casa de Piedra stream. You follow it, and after the first 6 km you cross the bridge to continue on the other bank to the head of the valley. After a tall lenga forest a steep zigzag slope begins, the "caracoles", up to a footbridge; once across the stream you climb almost an hour more to Laguna Jakob. Return the same way, or continue to Laguna Negra (with a guide) or to Los Césares along the Huella Andina.',
},

{
  // identidad
  id:                       '162',
  nombre:                   'Refugio San Martín (Laguna Jakob) - Los Césares (Arroyo Casalata)',
  tramos:                   ['jak-ces'],
  fuente:                   'https://barilochetrekking.com/sendero-162/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Reservar lugar en el refugio San Martín, en la laguna Jakob.',
    'Llevar calzado extra para vadear.',
    'Prohibido hacer fuego.',
    'Conviene hacer esta variante desde febrero, cuando ya no hay nieve.',
    'Travesía muy larga: calcular bien el tiempo, salir temprano y con buen clima.',
  ],
  precauciones_en:          [
    'Book a place at the San Martín hut, at Laguna Jakob.',
    'Bring spare footwear for river crossings.',
    'Fires are prohibited.',
    'Best done from February, when the snow is gone.',
    'A very long traverse: plan your time well, start early and in good weather.',
  ],
  servicios:                'Refugio San Martín (Laguna Jakob): abierto todo el año. Cerca de Los Césares: área de pernocte «Los 3 álamos», sin servicios; Hotel Tronador, abierto de noviembre a abril.',
  servicios_en:             'San Martín hut (Laguna Jakob): open all year. Near Los Césares: "Los 3 álamos" overnight area, no services; Tronador hotel, open November to April.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale del refugio San Martín hacia el sur, por promontorios de roca que ganan altura rápido, hasta el paso Schweizer. La bajada es muy empinada y se ven los hilos de agua que originan el arroyo Casalata. Después del pedrero entra en un bosque bajo de lengas. A la hora hay un lugar donde se puede acampar solo en emergencia. Un poco más adelante hay una señal de Huella Andina que indica girar a la izquierda: es una traza nueva que evita el mallín y los cruces del arroyo, poco transitada y con raíces y cañas en el suelo. Hay otro sitio de emergencia, se vadea el Casalata, se lo vuelve a cruzar y se entra en un bosque de cipreses con vista al lago Mascardi. Al final se cruzan el arroyo Claro y la pasarela del río Manso, y unos álamos marcan el camping libre, sin fuego. Faltan 2 km hasta la ruta. También se puede hacer hacia el norte, desde Los Césares, todo en subida.',
  descripcion_en:           'It leaves the San Martín hut heading south over rock outcrops that gain height quickly, up to Paso Schweizer. The descent is very steep and you can see the threads of water that form the Casalata stream. After the scree it enters a low lenga forest. An hour on there is a place to camp in emergencies only. A little further a Huella Andina sign points left: it is a new route that avoids the wet meadow and the stream crossings, little used and with roots and reeds underfoot. There is another emergency site, the Casalata is waded and crossed again, and the path enters a cypress forest with a view of Lake Mascardi. At the end the Claro stream and the Manso river footbridge are crossed, and poplars mark the free campsite, no fires. It is 2 km more to the road. It can also be done northbound, from Los Césares, all uphill.',
},

{
  // identidad
  id:                       '164',
  nombre:                   'Los Césares - Cascada de los Césares',
  tramos:                   ['e39-e66', 'e39-clc'],
  fuente:                   'https://barilochetrekking.com/sendero-164/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'septiembre a mayo',
  temporada_en:             'September to May',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'junio a agosto',
  temporada_otra_en:        'June to August',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Sendero empinado: atención a las raíces para no tropezar.',
    'Buen calzado: la tierra suelta y el barro hacen resbalar.',
    'Seguir los carteles y no salirse de la senda.',
  ],
  precauciones_en:          [
    'Steep trail: watch for roots so you do not trip.',
    'Good footwear: loose soil and mud are slippery.',
    'Follow the signs and stay on the path.',
  ],
  servicios:                'Cerca de Los Césares: área de pernocte «Los 3 álamos», sin servicios; Hotel Tronador, abierto de noviembre a abril.',
  servicios_en:             'Near Los Césares: "Los 3 álamos" overnight area, no services; Tronador hotel, open November to April.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale de Los Césares, a orillas del Mascardi, por el camino a Pampa Linda. Hay que tomar el primer desvío a la derecha, que indica la cascada (el otro va al lago Los Césares y al cerro Diego Flores de León). Tiene pendiente y, según la época, zonas con mucho barro. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts at Los Césares, on the Mascardi shore, on the road to Pampa Linda. Take the first fork on the right, signed for the waterfall (the other goes to Lago Los Césares and Cerro Diego Flores de León). It has a slope and, depending on the season, very muddy areas. Return the same way.',
},

{
  // identidad
  id:                       '165',
  nombre:                   'Los Césares - Lago Los Césares',
  tramos:                   ['e39-e66', 'llc-e39'],
  fuente:                   'https://barilochetrekking.com/sendero-165/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Llevar calzado extra: según la época hay que vadear arroyos.',
    'Prohibido pernoctar en el lago Los Césares.',
    'Prohibido hacer fuego.',
  ],
  precauciones_en:          [
    'Bring spare footwear: depending on the season you must wade streams.',
    'Overnight stays at Lago Los Césares are prohibited.',
    'Fires are prohibited.',
  ],
  servicios:                'Cerca de Los Césares: área de pernocte «Los 3 álamos», sin servicios. Hotel Tronador, abierto de noviembre a abril.',
  servicios_en:             'Near Los Césares: "Los 3 álamos" overnight area, no services. Tronador hotel, open November to April.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale de Los Césares, sobre el camino a Pampa Linda. Hay que tomar el segundo desvío a la derecha (el de la izquierda va a la cumbre del cerro Diego Flores de León). Tiene bastante pendiente y, según la época, barro y arroyos para vadear. Termina junto al lago, en la naciente del arroyo Los Césares. Se vuelve por el mismo camino.',
  descripcion_en:           'It leaves Los Césares, on the road to Pampa Linda. Take the second fork on the right (the left one goes to the summit of Cerro Diego Flores de León). It is fairly steep and, depending on the season, muddy with streams to wade. It ends beside the lake, at the source of the Los Césares stream. Return the same way.',
},

{
  // identidad
  id:                       '166',
  nombre:                   'Los Césares - Cerro Diego Flores de León',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-166/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Sendero muy empinado: buen calzado, porque la tierra suelta y el barro hacen resbalar.',
    'Seguir los carteles y no salirse de la senda.',
    'Mirar el clima y la nieve en altura antes de salir.',
  ],
  precauciones_en:          [
    'Very steep trail: wear good footwear, as loose soil and mud are slippery.',
    'Follow the signs and stay on the path.',
    'Check the weather and the snow at altitude before setting out.',
  ],
  servicios:                'Cerca de Los Césares: área de pernocte «Los 3 álamos», sin servicios. Hotel Tronador, abierto de noviembre a abril.',
  servicios_en:             'Near Los Césares: "Los 3 álamos" overnight area, no services. Tronador hotel, open November to April.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Empieza igual que el sendero al lago y la cascada de los Césares: hay que tomar siempre los desvíos de la izquierda. Es una subida fuerte, en zigzag, entre bosque, hasta el pedrero y el filo del cerro Flores de León. Se siguen las marcas rojas y, donde no hay vegetación, las pircas. Arriba es fácil desorientarse, así que conviene salir solo con buen tiempo. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts like the trail to Lago and Cascada de los Césares: always take the left forks. It is a hard zigzag climb through forest to the scree and the ridge of Cerro Flores de León. Follow the red marks and, where there is no vegetation, the cairns. It is easy to lose your bearings up high, so go only in good weather. The return is by the same path.',
},

{
  // identidad
  id:                       '167',
  nombre:                   'Los Césares - Los Rápidos',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-167/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Atención a las marcas y las pircas: es un sendero abierto hace poco, con muy poco tránsito y poca señalización.',
    'Mirar el clima y la nieve acumulada en altura.',
    'Es una travesía larga: calcular las horas de luz.',
    'Planificar la salida y cómo recuperar el vehículo: el camino tiene horarios de sentido único.',
  ],
  precauciones_en:          [
    'Watch the marks and cairns: it is a recently opened trail, with very little traffic and little signage.',
    'Check the weather and the snow accumulated at altitude.',
    'It is a long traverse: plan around daylight hours.',
    'Plan your departure and how to recover your vehicle: the road has one-way hours.',
  ],
  servicios:                'Cerca de Los Césares: área de pernocte «Los 3 álamos», sin servicios; Hotel Tronador, abierto de noviembre a abril. En Los Rápidos: camping Los Rápidos, abierto todo el año (www.losrapidos.com.ar).',
  servicios_en:             'Near Los Césares: "Los 3 álamos" overnight area, no services; Tronador hotel, open November to April. At Los Rápidos: Los Rápidos campsite, open all year (www.losrapidos.com.ar).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Empieza en Los Césares, igual que el sendero al lago y la cascada, y hay que tomar siempre los desvíos a la izquierda hacia el cerro Flores de León. Toda la primera parte es una subida fuerte, en zigzag, entre bosque, hasta el pedrero y el filo. Se siguen las marcas rojas y, sin vegetación, las piedras apiladas. Arriba es fácil desorientarse; ahí se une la senda de la Huella Andina abierta hace poco, que termina en Los Rápidos y tiene pocas huellas. Luego el camino entra en el bosque, faldea el cerro perdiendo altura y baja fuerte al valle, cada vez más claro, hasta un tronco que hace de puente sobre el arroyo Avilés. Los últimos 20 minutos van por el sendero bien señalizado que une el camping Los Rápidos con el lago Los Moscos. Se puede hacer en sentido inverso.',
  descripcion_en:           'It starts at Los Césares, like the trail to the lake and waterfall, and you must always take the left forks toward Cerro Flores de León. The whole first part is a hard zigzag climb through forest to the scree and the ridge. Follow the red marks and, without vegetation, the stacked stones. It is easy to lose your way up there; that is where the recently opened Huella Andina path that ends at Los Rápidos joins, with few signs of use. The path then enters the forest, contours the hill losing height and drops steeply to the valley, getting clearer, to a log serving as a bridge over the Avilés stream. The last 20 minutes follow the well-signed trail that links Los Rápidos campsite with Lago Los Moscos. It can be done in reverse.',
},

{
  // identidad
  id:                       '169',
  nombre:                   'Los Césares - Castillo Rojo',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-169/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Llevar calzado para vadear.',
    'Prestar atención a las marcas y carteles: hay muchos cruces de senderos.',
    'Prohibido acampar y hacer fuego.',
  ],
  precauciones_en:          [
    'Bring footwear for river crossings.',
    'Pay attention to marks and signs: there are many path junctions.',
    'Camping and fires are prohibited.',
  ],
  servicios:                'Cerca de Los Césares: Hotel Tronador.',
  servicios_en:             'Near Los Césares: Tronador hotel.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale de Los Césares y bordea el río Manso hasta el puente colgante; sigue cruzando el arroyo Claro y después el Casalata, por las marcas de la Huella Andina hacia el refugio San Martín. Con poco caudal se cruzan por las piedras, a veces hay que vadear. En la costa del Mascardi hay muchísimas sendas y es fácil desorientarse. Pocos metros después del Casalata, un cartel indica el cerro Castillo Rojo. El último kilómetro es muy empinado, en caracoles: buen calzado y cuidado al pisar. Se vuelve por el mismo camino.',
  descripcion_en:           'It leaves Los Césares and follows the Manso river to the suspension bridge, then crosses the Claro stream and the Casalata, following the Huella Andina marks toward the San Martín hut. With low flow they are crossed on stones; sometimes you must wade. The Mascardi shore has countless paths and it is easy to get lost. A few metres after the Casalata, a sign points to Cerro Castillo Rojo. The last kilometre is very steep, in switchbacks: wear good footwear and watch your step. Return the same way.',
},

{
  // identidad
  id:                       '170',
  nombre:                   'Los Césares - Laguna Azul (Calvú)',
  tramos:                   ['azu-ces'],
  fuente:                   'https://barilochetrekking.com/sendero-170/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Llevar calzado para vadear.',
    'Calcular bien los tiempos.',
    'Mirar el caudal del río antes de salir.',
    'Llevar gorro: hay mucho sol.',
    'Prohibido hacer fuego.',
  ],
  precauciones_en:          [
    'Bring footwear for river crossings.',
    'Estimate your timing carefully.',
    'Check the river flow before setting out.',
    'Bring a hat: the sun exposure is high.',
    'Fires are prohibited.',
  ],
  servicios:                'Cerca de Los Césares: área de pernocte «Los 3 álamos», sin servicios. Hotel Tronador, abierto de noviembre a abril.',
  servicios_en:             'Near Los Césares: "Los 3 álamos" overnight area, no services. Tronador hotel, open November to April.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale de Los Césares, a orillas del lago Mascardi, y bordea el río Manso hasta el puente colgante. Sigue por el arroyo Claro hasta su unión con el Callvuco, y por este hasta su naciente en la laguna Azul. Hay tramos por el lecho del río: ahí hay que guiarse por las pircas. Conviene ir bien entrado el verano, con el arroyo más bajo, y llevar un par de zapatos extra para vadear. Vuelve por el mismo camino. Desde la laguna Azul, un tramo muy exigente, de pedrero empinado y sin sombra, conecta con la travesía de las 5 lagunas (y sirve de salida de emergencia con mal tiempo desde Cretón).',
  descripcion_en:           'It starts at Los Césares on the shore of Lake Mascardi and follows the Manso river to the suspension bridge. It continues along the Claro stream to its junction with the Callvuco, and up that one to its source at Laguna Azul. Some stretches run along the river bed, where the cairns mark the way. It is best done well into summer, with the stream lower, and with spare shoes for wading. It returns the same way. From Laguna Azul a very demanding, steep, shadeless scree section links to the 5 lagunas traverse (and serves as a bad-weather escape from Cretón).',
},

{
  // identidad
  id:                       '184',
  nombre:                   'Los Césares - Laguna Llum',
  tramos:                   ['llu-e19'],
  fuente:                   'https://barilochetrekking.com/sendero-184/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Llevar calzado para vadear.',
    'Sendero poco transitado, para gente con experiencia en trekking.',
    'Entre Los Césares y la cabecera norte del lago Mascardi solo se puede dormir en «Los 3 álamos», en «Machete» (cerca del mirador de la Isla Corazón) y en el camping Relmu Lafquen, de la comunidad mapuche Lof Wiritray.',
    'No se puede acampar en la laguna Llum ni en Playa Leones. Prohibido hacer fuego.',
  ],
  precauciones_en:          [
    'Bring footwear for river crossings.',
    'Little-used trail, for people with trekking experience.',
    'Between Los Césares and the north end of Lake Mascardi you may only sleep at "Los 3 álamos", at "Machete" (near the Isla Corazón viewpoint) and at the Relmu Lafquen campsite, run by the Mapuche community Lof Wiritray.',
    'Camping is not allowed at Laguna Llum or Playa Leones. Fires are prohibited.',
  ],
  servicios:                'Cerca de Los Césares: Hotel Tronador. En el área de pernocte «Machete» no hay servicios.',
  servicios_en:             'Near Los Césares: Tronador hotel. There are no services at the "Machete" overnight area.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Aunque el sendero se llama «hasta la laguna Llum», el único lugar donde Parques Nacionales autoriza dormir es «Machete», a 12 km de Los Césares. Primero bordea el río Manso hasta el puente colgante, en un sector con muchos cruces de caminos donde hay que seguir las marcas de la Huella Andina. Según el caudal, el arroyo Casalata se vadea o se cruza por las piedras; apenas pasado, un cartel indica ir a la derecha hacia la laguna Llum (a la izquierda se va al refugio San Martín). Después sigue casi a nivel por la costa norte del lago Mascardi. Forma parte de la travesía Camino de los Vuriloches: es de dificultad alta, pide mucha experiencia y todo el equipo para una noche sin servicios, y la senda es irregular, con poca señalización y mantenimiento. Un ascenso muy empinado en caracoles llega al mirador de la Isla Corazón (1.160 m), con vista al Tronador y a la laguna Llum; desde ahí hasta la cabecera norte del Mascardi el camino se ve mejor y tiene más gente.',
  descripcion_en:           'Although the trail is named "to Laguna Llum", the only place where the National Parks authorise sleeping is "Machete", 12 km from Los Césares. It first follows the Manso river to the suspension bridge, in an area with many path junctions where you must follow the Huella Andina marks. Depending on flow, the Casalata stream is waded or crossed on stones; just after it a sign points right to Laguna Llum (left goes to the San Martín hut). It then continues almost level along the north shore of Lake Mascardi. It is part of the Camino de los Vuriloches traverse: high difficulty, it needs plenty of experience and all the gear for a night with no services, and the path is irregular with poor signage and maintenance. A very steep switchback climb reaches the Isla Corazón viewpoint (1,160 m), with views of Tronador and Laguna Llum; from there to the north end of Mascardi the path is clearer and busier.',
},

{
  // identidad
  id:                       '188',
  nombre:                   'Lago Steffen - Río Villegas',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-188/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Planificar la salida y cómo recuperar el vehículo: el camino al lago Steffen tiene horarios de sentido único.',
  ],
  precauciones_en:          [
    'Plan your departure and how to recover your vehicle: the road to Lake Steffen has one-way hours.',
  ],
  servicios:                'En Río Villegas: camping Cohuinco.',
  servicios_en:             'At Río Villegas: Cohuinco campsite.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Empieza al lado de la casa del guardaparque y va hacia el sur. Unos 100 m antes del camping El Viejo Manzano, a la izquierda, está señalizado el inicio. Sigue las marcas de la Huella Andina por un bosque de ñires, donde hay que atender al rumbo porque hay muchas huellas de animales que confunden. Tras una hora hay un cruce con una estaca y una flecha que manda a la derecha; ahí el camino baja hacia el río, al que se llega media hora después. El último tramo bordea el río Manso hasta su unión con el Villegas, donde está el camping Cohuinco, en territorio de la comunidad mapuche Huenchupan. También se puede hacer de sur a norte; en ese caso hay que prever el traslado desde el lago Steffen hasta la Ruta 40 (10 km).',
  descripcion_en:           'It starts beside the ranger house and heads south. About 100 m before the El Viejo Manzano campsite, on the left, the start is signed. It follows the Huella Andina marks through a ñire forest, where you must watch your direction because many animal tracks can confuse. After an hour there is a junction with a stake and an arrow sending you right; there the path drops toward the river, reached half an hour later. The last stretch follows the Manso river to its junction with the Villegas, where the Cohuinco campsite is, on the territory of the Huenchupan Mapuche community. It can also be done south to north; in that case plan the transfer from Lake Steffen to Route 40 (10 km).',
},

{
  // identidad
  id:                       '201',
  nombre:                   'Refugio Manfredo Segre (Laguna Negra) - Laguna CAB (LLuvu)',
  tramos:                   ['neg-cab'],
  fuente:                   'https://barilochetrekking.com/sendero-201/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Se recomienda ir con guía de montaña.',
    'Prohibido hacer fuego.',
  ],
  precauciones_en:          [
    'A mountain guide is recommended.',
    'Fires are prohibited.',
  ],
  servicios:                'Refugio Manfredo Segre (Laguna Negra): abierto de noviembre a abril. En la laguna CAB (Lluvu) no hay servicios.',
  servicios_en:             'Manfredo Segre hut (Laguna Negra): open from November to April. There are no services at Laguna CAB (Lluvu).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sale del refugio Manfredo Segre (Italia) rodeando la laguna Negra por la derecha, con tramos donde hay cuerdas fijas en la roca. Sube al filo y cruza el collado entre el cerro Negro y el Bailey Willis, con vista al Tronador. La bajada es empinada, primero por piedra suelta y después por bosque. Luego sigue a nivel por el fondo del valle hasta el arroyo La Chata, un buen lugar para cargar agua. Pasado el arroyo Lluvuco el camino sube siempre y, en los últimos kilómetros, atraviesa un cañaveral denso.',
  descripcion_en:           'It leaves the Manfredo Segre (Italia) hut going round Laguna Negra on the right, with places where fixed ropes are installed on the rock. It climbs to the ridge and crosses the saddle between Cerro Negro and Cerro Bailey Willis, with a view of Tronador. The descent is steep, first on loose rock and then through forest. It then continues level along the valley floor to the La Chata stream, a good place to fill up with water. After the Lluvuco stream the path climbs all the way and, in the last kilometres, crosses a dense reed bed.',
},

{
  // identidad
  id:                       '202',
  nombre:                   'Laguna CAB (LLuvu) - Laguna Cretón',
  tramos:                   ['cab-cre'],
  fuente:                   'https://barilochetrekking.com/sendero-202/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Se recomienda ir con guía de montaña.',
    'Sendero muy exigente, para gente con experiencia en montaña.',
    'Prohibido hacer fuego.',
    'Suele haber nieve o hielo, sobre todo a la mañana.',
  ],
  precauciones_en:          [
    'A mountain guide is recommended.',
    'Very demanding trail, for people with mountain experience.',
    'Fires are prohibited.',
    'There is often snow or ice, especially in the morning.',
  ],
  servicios:                'No hay servicios. La zona de pernocte está a orillas de la laguna Cretón.',
  servicios_en:             'No services. The overnight area is on the shore of Laguna Cretón.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Desde la laguna CAB se sube el cerro CAB por una pendiente fuerte, entre pedreros y lajas sueltas, hasta el filo, y se baja al mallín del Mate Dulce, que está justo en la línea divisoria de aguas. Hay que orientarse bien al cruzar el mallín, antes de otra subida empinada al filo. Del otro lado se ve la laguna Cretón, y se desciende muy abrupto entre piedras sueltas y bloques: es el sector más difícil de toda la travesía. Con mal clima conviene salir por la laguna Azul hacia Los Césares, otro tramo muy exigente de pedrero empinado y sin sombra.',
  descripcion_en:           'From Laguna CAB you climb Cerro CAB on a steep slope of scree and loose slabs to the ridge, then drop to the Mate Dulce wet meadow, right on the watershed. Navigate carefully when crossing the meadow, before another steep climb to the ridge. On the other side Laguna Cretón comes into view, and the descent is very abrupt through loose stones and big blocks: it is the hardest part of the whole traverse. In bad weather it is better to exit via Laguna Azul to Los Césares, another very demanding stretch of steep, shadeless scree.',
},

{
  // identidad
  id:                       '203',
  nombre:                   'Laguna Cretón - Laguna Ilón',
  tramos:                   ['cre-juj', 'juj-ilo'],
  fuente:                   'https://barilochetrekking.com/sendero-203/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Se recomienda ir con guía de montaña.',
    'Sendero muy exigente, para gente con experiencia en montaña.',
    'Prohibido hacer fuego.',
    'Suele haber nieve o hielo, sobre todo a la mañana.',
  ],
  precauciones_en:          [
    'A mountain guide is recommended.',
    'Very demanding trail, for people with mountain experience.',
    'Fires are prohibited.',
    'There is often snow or ice, especially in the morning.',
  ],
  servicios:                'Laguna Cretón: sin servicios. Camping Refugio Ilón: abierto de noviembre a abril; reserva obligatoria para acampar y para dormir en los domos (www.refugioilon.com.ar).',
  servicios_en:             'Laguna Cretón: no services. Ilón refuge campsite: open November to April; booking required to camp and to sleep in the domes (www.refugioilon.com.ar).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Desde la laguna Cretón se sube a un filo rocoso con vista a la laguna Calvú o Azul, la más grande de la travesía de las 5 lagunas. En esta zona de alta montaña se bordean las lagunas Chubut y Jujuy y se asciende al filo del cerro Capitán, a 1.950 m, el paso más alto de la travesía, con vistas al Tronador y sus glaciares. La bajada cruza un bosque de lengas achaparradas donde hay que mirar bien las marcas, y después alternan pampas y mallines, como el Mallín de Ricardo, hasta la orilla de la laguna Ilón, donde se acampa o se duerme en el domo del refugio. Desde la playa sale una senda a la «Mirada del Doctor», a 4 km. Con mal clima, la salida de emergencia es hacia Los Césares por la laguna Azul, un tramo muy exigente de pedrero empinado y sin sombra.',
  descripcion_en:           'From Laguna Cretón you climb a rocky ridge with a view of Laguna Calvú or Azul, the biggest of the 5 lagunas traverse. In this high-mountain area you pass lagunas Chubut and Jujuy and climb to the ridge of Cerro Capitán, at 1,950 m, the highest pass of the traverse, with views of Tronador and its glaciers. The descent crosses a stunted lenga forest where you must watch the marks, then pampas and wet meadows alternate, such as the Mallín de Ricardo, to the shore of Laguna Ilón, where you camp or sleep in the refuge dome. From the beach a path leaves to the "Mirada del Doctor", 4 km away. In bad weather the emergency exit is to Los Césares via Laguna Azul, a very demanding stretch of steep, shadeless scree.',
},

{
  // identidad
  id:                       '204',
  nombre:                   'Refugio Emilio Frey - Refugio San Martín (Laguna Jakob)',
  tramos:                   ['fre-cdf', 'cdf-ruc', 'ruc-jak'],
  fuente:                   'https://barilochetrekking.com/sendero-204/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Dormir en cualquiera de los dos refugios requiere reserva previa confirmada.',
    'Conviene hacerlo en este sentido, con buen clima, cielo despejado y sin viento.',
    'Bajar con cuidado para no torcerse ni resbalar.',
    'Se recomienda ir con guía de montaña.',
    'Consultar el estado del camino y avisar al refugiero.',
    'Prohibido hacer fuego.',
    'Llevar agua.',
  ],
  precauciones_en:          [
    'Sleeping at either hut requires a confirmed booking.',
    'Best done in this direction, in good weather, with clear skies and no wind.',
    'Descend carefully to avoid sprains and slips.',
    'A mountain guide is recommended.',
    'Ask about trail conditions and let the hut keeper know.',
    'Fires are prohibited.',
    'Carry water.',
  ],
  servicios:                'Refugio Emilio Frey: abierto todo el año. Refugio San Martín (Laguna Jakob): abierto todo el año.',
  servicios_en:             'Emilio Frey hut: open all year. San Martín hut (Laguna Jakob): open all year.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Desde el refugio Frey se bordea la laguna Toncek por la margen derecha, y después la laguna Schmoll. Sigue una subida muy fuerte entre rocas hasta la «Cancha de Fútbol», ya en el filo. Pocos metros más adelante un cartel indica el desvío a la izquierda hacia el valle del Rucaco, rumbo al refugio San Martín (el otro camino sigue por el filo hasta el Catedral). Es una zona sin vegetación, de pedreros. Pasado el valle se vuelve a subir al filo del cerro Brecha Negra y se baja a la laguna Jakob, donde está el refugio San Martín. Desde ahí se puede seguir la travesía de los 4 refugios, bajar a Colonia Suiza o conectar con la Huella Andina hacia Los Césares.',
  descripcion_en:           'From the Frey hut you go round Laguna Toncek on its right bank, then Laguna Schmoll. A very hard climb among rocks follows to the "Cancha de Fútbol", already on the ridge. A few metres on, a sign points left to the Rucaco valley and the San Martín hut (the other path follows the ridge to Catedral). It is a vegetation-free zone of scree. After the valley it climbs again to the Brecha Negra ridge and drops to Laguna Jakob, where the San Martín hut is. From there you can continue the 4 huts traverse, descend to Colonia Suiza or link to the Huella Andina toward Los Césares.',
},

{
  // identidad
  id:                       '205',
  nombre:                   'Refugio San Martín (Laguna Jakob) - Refugio Manfredo Segre (Laguna Negra)',
  tramos:                   ['jak-neg'],
  fuente:                   'https://barilochetrekking.com/sendero-205/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Extrema',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Obligatorio ir con guía de montaña.',
    'Es de un solo sentido: hacerlo así y no al revés, por la dificultad de la pendiente.',
    'Sendero técnico, para gente con mucha experiencia en trekking.',
    'De diciembre a enero hacen falta crampones y piqueta. Conviene hacerlo desde febrero, sin nieve.',
    'Dormir en los dos refugios requiere reserva previa confirmada.',
    'Llevar agua.',
  ],
  precauciones_en:          [
    'A mountain guide is mandatory.',
    'One direction only: do it this way and not the reverse, because of the steep ground.',
    'Technical trail, for people with a lot of trekking experience.',
    'From December to January crampons and an ice axe are essential. It is best from February, with no snow.',
    'Sleeping at both huts requires a confirmed booking.',
    'Carry water.',
  ],
  servicios:                'Refugio San Martín (Laguna Jakob): abierto todo el año. Refugio Manfredo Segre (Laguna Negra).',
  servicios_en:             'San Martín hut (Laguna Jakob): open all year. Manfredo Segre hut (Laguna Negra).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sendero muy técnico y de un solo sentido. Los primeros 20 minutos desde el refugio San Martín van hacia el paso Schweizer y la laguna Los Témpanos; en la laguna hay que tomar a la derecha (a la izquierda se sigue al arroyo Casalata y Los Césares). Después hay una parte muy técnica, con tramos de escalada, donde es fácil perder el rumbo. Llegando al pico Refugio se camina por el filo del Cordón de los Inocentes, se pasa por el cerro Navidad y se baja hasta el arroyo Navidad. En el valle se une con el sendero que viene de Colonia Suiza: se va a la izquierda y se sube en zigzag, los caracoles, hasta la laguna Negra y el refugio Manfredo Segre.',
  descripcion_en:           'A very technical, one-direction trail. The first 20 minutes from the San Martín hut go toward Paso Schweizer and Laguna Los Témpanos; at the lake turn right (left continues to the Casalata stream and Los Césares). Then comes a very technical part, with scrambling sections, where it is easy to lose your way. On reaching Pico Refugio you walk along the ridge of the Cordón de los Inocentes, pass Cerro Navidad and drop to the Navidad stream. In the valley it joins the trail from Colonia Suiza: go left and climb the zigzag switchbacks to Laguna Negra and the Manfredo Segre hut.',
},

{
  // identidad
  id:                       '206',
  nombre:                   'Refugio López - Refugio Manfredo Segre (Laguna Negra)',
  tramos:                   ['lop-neg'],
  fuente:                   'https://barilochetrekking.com/sendero-206/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Alta',
  temporada:                'noviembre a abril',
  temporada_en:             'November to April',
  dificultad_otra:          'Muy Alta',
  temporada_otra:           'mayo a octubre',
  temporada_otra_en:        'May to October',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Entre julio y diciembre hay que subir con piolet y crampones, y solo con buen conocimiento de montaña.',
    'Consultar el estado del camino y avisar al refugiero.',
    'Se recomienda ir con guía de montaña.',
  ],
  precauciones_en:          [
    'Between July and December you need an ice axe and crampons, and good mountain knowledge.',
    'Ask about trail conditions and let the hut keeper know.',
    'A mountain guide is recommended.',
  ],
  servicios:                'Refugio Manfredo Segre (Laguna Negra): abierto de noviembre a abril.',
  servicios_en:             'Manfredo Segre hut (Laguna Negra): open from November to April.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Conviene hacerla desde febrero, cuando hay menos nieve arriba; antes hace falta experiencia y equipo especial. El sentido recomendado es desde el refugio López: se sube a «La Hoya» y al filo del cerro López, con piedras sueltas y una pendiente fuerte donde a veces hay que usar las manos; es el tramo más técnico. Del filo se baja a un valle y se sube al cerro Bailey Willis, que se recorre por el filo hasta ver la laguna Negra y el refugio Manfredo Segre (Italia). Desde el refugio se puede volver a Colonia Suiza por la ruta tradicional. En sentido inverso se baja del refugio López hacia el Circuito Chico.',
  descripcion_en:           'It is best done from February, when there is less snow on top; earlier it needs experience and special gear. The recommended direction is from the López hut: you climb to "La Hoya" and the ridge of Cerro López, with loose rock and a steep slope where you sometimes need your hands; it is the most technical stretch. From the ridge you drop into a valley and climb Cerro Bailey Willis, whose ridge you follow until Laguna Negra and the Manfredo Segre (Italia) hut come into view. From the hut you can return to Colonia Suiza by the traditional route. In the opposite direction you descend from the López hut toward the Circuito Chico.',
},

{
  // identidad
  id:                       '207',
  nombre:                   'Los Rápidos (Lago Mascardi) - Lago Los Moscos',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-207/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Hay cruces de muchos caminos: no tomar desvíos.',
  ],
  precauciones_en:          [
    'There are many path junctions: do not take side paths.',
  ],
  servicios:                'Camping Los Rápidos: abierto todo el año (www.losrapidos.com.ar).',
  servicios_en:             'Los Rápidos campsite: open all year (www.losrapidos.com.ar).',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sendero bueno para observar aves, que empieza frente al camping Los Rápidos. Tiene poca pendiente y está bien señalizado, pero hay muchos cruces de caminos y es fácil desorientarse. Se puede ir y volver por el mismo camino junto al río Manso, o hacer el circuito completo saliendo a la ruta y volviendo por ella hasta el puente de Los Rápidos, donde hay estacionamiento gratuito.',
  descripcion_en:           'A good trail for birdwatching, starting opposite the Los Rápidos campsite. It has a gentle slope and is well signed, but there are many path junctions and it is easy to lose your way. You can go there and back on the same path beside the Manso river, or do the full circuit, leaving to the road and returning along it to the Los Rápidos bridge, where there is free parking.',
},

{
  // identidad
  id:                       'mb1',
  nombre:                   'Sendero Arrayanes (Parque Municipal Llao Llao)',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb1/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'No se puede pasar la noche.',
    'Traer de vuelta toda la basura.',
    'Es un sendero peatonal: no se puede andar en bicicleta.',
    'Antes de entrar hay que pagar el ingreso al Parque Municipal Llao Llao (también hay un QR en la entrada): se paga con tarjeta o en efectivo por Rapipago o Pago Fácil. Los residentes de Bariloche, los jubilados y los menores de 12 años no pagan.',
    'Horario de ingreso en verano: de 8 a 22. En invierno, consultar el estado de los senderos y el horario de permanencia.',
    'Los días de viento los senderos permanecen cerrados: consultar el clima.',
    'Está prohibido entrar con bicicleta o con mascotas, acampar, fumar y hacer fuego.',
    'Circular solo por los senderos señalizados y seguir las indicaciones del guardaparque municipal.',
    'No dejar objetos de valor a la vista en el auto estacionado.',
    'En algunos sectores no hay señal de celular.',
  ],
  precauciones_en:          [
    'Overnight stays are not allowed.',
    'Take all your rubbish back with you.',
    'Pedestrian trail: no bicycles.',
    'Before entering you must pay the Llao Llao Municipal Park entry fee (there is also a QR code at the entrance): pay by card or in cash through Rapipago or Pago Fácil. Bariloche residents, retirees and children under 12 do not pay.',
    'Summer entry hours: 8 am to 10 pm. In winter, check trail status and permitted hours.',
    'On windy days the trails stay closed: check the weather.',
    'Bicycles, pets, camping, smoking and fires are prohibited.',
    'Use only the marked trails and follow the municipal ranger\'s instructions.',
    'Do not leave valuables in view in a parked car.',
    'There is no mobile signal in some areas.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'La entrada este es la principal, bien señalizada, con Centro de Informes y estacionamiento, a 1 km de Puerto Pañuelo o del hotel Llao Llao, sobre el Circuito Chico. A los 10 minutos hay un pequeño bosque de arrayanes. Después se sigue hasta la costa del lago Moreno, con vista a los cerros López y Goye y a la isla de los Conejos. Casi una hora después de empezar aparece de nuevo la ruta asfaltada, y a 100 m a la izquierda está la casa del guardaparque municipal. Para volver se puede seguir la ruta asfaltada hacia Puerto Pañuelo o regresar por el mismo sendero.',
  descripcion_en:           'The east entrance is the main one, well signed, with an Information Centre and car park, 1 km from Puerto Pañuelo or the Llao Llao hotel, on the Circuito Chico. After 10 minutes there is a small myrtle (arrayán) wood. Then you continue to the shore of Lake Moreno, with views of cerros López and Goye and Isla de los Conejos. Almost an hour after starting the paved road appears again, and 100 m to the left is the municipal ranger house. To return you can follow the paved road toward Puerto Pañuelo or go back along the same trail.',
},

{
  // identidad
  id:                       'mb2',
  nombre:                   'Cerro Llao Llao (Parque Municipal Llao Llao)',
  tramos:                   ['lla-cll'],
  fuente:                   'https://barilochetrekking.com/sendero-mb2/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Según el estado físico o de salud, la dificultad puede ser Media.',
    'No se puede pasar la noche.',
    'Traer de vuelta toda la basura.',
    'En el mirador, mantenerse lejos del acantilado y cuidar a los chicos.',
    'Antes de entrar hay que pagar el ingreso al Parque Municipal Llao Llao (también hay un QR en la entrada): se paga con tarjeta o en efectivo por Rapipago o Pago Fácil. Los residentes de Bariloche, los jubilados y los menores de 12 años no pagan.',
    'Horario de ingreso en verano: de 8 a 22. En invierno, consultar el estado de los senderos y el horario de permanencia.',
    'Los días de viento los senderos permanecen cerrados: consultar el clima.',
    'Está prohibido entrar con bicicleta o con mascotas, acampar, fumar y hacer fuego.',
    'Circular solo por los senderos señalizados y seguir las indicaciones del guardaparque municipal.',
    'No dejar objetos de valor a la vista en el auto estacionado.',
    'En algunos sectores no hay señal de celular.',
  ],
  precauciones_en:          [
    'Depending on fitness or health, the difficulty may be Medium.',
    'Overnight stays are not allowed.',
    'Take all your rubbish back with you.',
    'At the viewpoint, keep away from the cliff and watch children closely.',
    'Before entering you must pay the Llao Llao Municipal Park entry fee (there is also a QR code at the entrance): pay by card or in cash through Rapipago or Pago Fácil. Bariloche residents, retirees and children under 12 do not pay.',
    'Summer entry hours: 8 am to 10 pm. In winter, check trail status and permitted hours.',
    'On windy days the trails stay closed: check the weather.',
    'Bicycles, pets, camping, smoking and fires are prohibited.',
    'Use only the marked trails and follow the municipal ranger\'s instructions.',
    'Do not leave valuables in view in a parked car.',
    'There is no mobile signal in some areas.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio más usado, para quien llega en transporte público, está bien señalizado, a la derecha del Circuito Chico, a poco más de 1 km de la parada de Puerto Pañuelo. En auto se puede dejar el vehículo en el estacionamiento del Sendero Arrayanes (Centro de Informes), cruzar la ruta y caminar unos 300 m hasta el cartel. A los 2 km hay un desvío a la izquierda, bien indicado, que sube a la cima: gana altura con vistas al Nahuel Huapi y, tras una gran antena, se llega a un mirador natural a 1.080 m con vista a la península, al Circuito Chico, al lago Moreno, a los cerros López y Capilla y al Brazo Tristeza. Se baja por el mismo camino, tomando el desvío a la derecha hacia Puerto Pañuelo. Opcionalmente se puede seguir hasta Villa Tacul. Otra opción en auto es entrar desde Villa Tacul, con un acceso más corto (se une a los 1,5 km con el otro sendero).',
  descripcion_en:           'The most used start, for people arriving by public transport, is well signed, on the right of the Circuito Chico, a little over 1 km from the Puerto Pañuelo stop. By car you can leave the vehicle at the Sendero Arrayanes car park (Information Centre), cross the road and walk about 300 m to the sign. At 2 km there is a well-marked fork on the left that climbs to the summit: it gains height with views of Nahuel Huapi and, after a big antenna, reaches a natural viewpoint at 1,080 m with a view of the peninsula, the Circuito Chico, Lake Moreno, cerros López and Capilla and the Brazo Tristeza. You descend the same way, taking the fork on the right toward Puerto Pañuelo. Optionally you can continue to Villa Tacul. Another car option is to enter from Villa Tacul, with a shorter approach (it joins the other trail after 1.5 km).',
},

{
  // identidad
  id:                       'mb3',
  nombre:                   'Lago Escondido (Parque Municipal Llao Llao)',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb3/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'No se puede pasar la noche.',
    'Traer de vuelta toda la basura.',
    'Seguir siempre el sendero y mirar la cartelería.',
    'Antes de entrar hay que pagar el ingreso al Parque Municipal Llao Llao (también hay un QR en la entrada): se paga con tarjeta o en efectivo por Rapipago o Pago Fácil. Los residentes de Bariloche, los jubilados y los menores de 12 años no pagan.',
    'Horario de ingreso en verano: de 8 a 22. En invierno, consultar el estado de los senderos y el horario de permanencia.',
    'Los días de viento los senderos permanecen cerrados: consultar el clima.',
    'Está prohibido entrar con bicicleta o con mascotas, acampar, fumar y hacer fuego.',
    'Circular solo por los senderos señalizados y seguir las indicaciones del guardaparque municipal.',
    'No dejar objetos de valor a la vista en el auto estacionado.',
    'En algunos sectores no hay señal de celular.',
  ],
  precauciones_en:          [
    'Overnight stays are not allowed.',
    'Take all your rubbish back with you.',
    'Always stay on the trail and watch the signs.',
    'Before entering you must pay the Llao Llao Municipal Park entry fee (there is also a QR code at the entrance): pay by card or in cash through Rapipago or Pago Fácil. Bariloche residents, retirees and children under 12 do not pay.',
    'Summer entry hours: 8 am to 10 pm. In winter, check trail status and permitted hours.',
    'On windy days the trails stay closed: check the weather.',
    'Bicycles, pets, camping, smoking and fires are prohibited.',
    'Use only the marked trails and follow the municipal ranger\'s instructions.',
    'Do not leave valuables in view in a parked car.',
    'There is no mobile signal in some areas.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Paseo corto y sin desnivel, bueno para ir con chicos. Sale del estacionamiento frente a la casa del guardaparque municipal; apenas se entra, hay que tomar el desvío a la izquierda. A los 500 m se llega al muelle del lago Escondido y 500 m más adelante está el acceso a la bahía de los Troncos o Playa Palitos. Se vuelve por el mismo camino o por la ruta asfaltada del Circuito Chico, hacia Puerto Pañuelo, hasta el estacionamiento.',
  descripcion_en:           'A short walk with no climbing, good for children. It starts at the car park opposite the municipal ranger house; as soon as you enter, take the left fork. After 500 m you reach the Lago Escondido jetty and 500 m further is the access to Bahía de los Troncos or Playa Palitos. Return the same way or along the paved Circuito Chico road toward Puerto Pañuelo, back to the car park.',
},

{
  // identidad
  id:                       'mb4',
  nombre:                   'Puente Romano y Mirador de Bahía Tacul (Parque Municipal Llao Llao)',
  tramos:                   ['lla-tac'],
  fuente:                   'https://barilochetrekking.com/sendero-mb4/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'No se puede pasar la noche.',
    'Traer de vuelta toda la basura.',
    'Seguir siempre el sendero y mirar la cartelería.',
    'Antes de entrar hay que pagar el ingreso al Parque Municipal Llao Llao (también hay un QR en la entrada): se paga con tarjeta o en efectivo por Rapipago o Pago Fácil. Los residentes de Bariloche, los jubilados y los menores de 12 años no pagan.',
    'Horario de ingreso en verano: de 8 a 22. En invierno, consultar el estado de los senderos y el horario de permanencia.',
    'Los días de viento los senderos permanecen cerrados: consultar el clima.',
    'Está prohibido entrar con bicicleta o con mascotas, acampar, fumar y hacer fuego.',
    'Circular solo por los senderos señalizados y seguir las indicaciones del guardaparque municipal.',
    'No dejar objetos de valor a la vista en el auto estacionado.',
    'En algunos sectores no hay señal de celular.',
  ],
  precauciones_en:          [
    'Overnight stays are not allowed.',
    'Take all your rubbish back with you.',
    'Always stay on the trail and watch the signs.',
    'Before entering you must pay the Llao Llao Municipal Park entry fee (there is also a QR code at the entrance): pay by card or in cash through Rapipago or Pago Fácil. Bariloche residents, retirees and children under 12 do not pay.',
    'Summer entry hours: 8 am to 10 pm. In winter, check trail status and permitted hours.',
    'On windy days the trails stay closed: check the weather.',
    'Bicycles, pets, camping, smoking and fires are prohibited.',
    'Use only the marked trails and follow the municipal ranger\'s instructions.',
    'Do not leave valuables in view in a parked car.',
    'There is no mobile signal in some areas.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Sendero fácil y con muy poco desnivel. Sale del estacionamiento frente a la casa del guardaparque municipal, sobre el Circuito Chico; apenas se entra se toma el desvío a la derecha. Pasa por el Puente Romano y llega al mirador de la bahía Tacul. Desde ahí se puede volver o seguir 1 km más hasta Villa Tacul, con varias playas sobre el Nahuel Huapi. También se puede hacer en sentido inverso, muy recomendable para quien llega en auto a Villa Tacul.',
  descripcion_en:           'An easy trail with very little elevation change. It starts at the car park opposite the municipal ranger house on the Circuito Chico; as soon as you enter take the right fork. It passes the Roman Bridge and reaches the Bahía Tacul viewpoint. From there you can return or continue 1 km to Villa Tacul, with several beaches on Nahuel Huapi. It can also be done in reverse, which is very handy if you drive to Villa Tacul.',
},

{
  // identidad
  id:                       'mb5',
  nombre:                   'Mirador Brazo Tristeza (Parque Municipal Llao Llao)',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb5/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'No se puede pasar la noche.',
    'Traer de vuelta toda la basura.',
    'En el mirador, mantenerse lejos del acantilado y cuidar a los chicos.',
    'Antes de entrar hay que pagar el ingreso al Parque Municipal Llao Llao (también hay un QR en la entrada): se paga con tarjeta o en efectivo por Rapipago o Pago Fácil. Los residentes de Bariloche, los jubilados y los menores de 12 años no pagan.',
    'Horario de ingreso en verano: de 8 a 22. En invierno, consultar el estado de los senderos y el horario de permanencia.',
    'Los días de viento los senderos permanecen cerrados: consultar el clima.',
    'Está prohibido entrar con bicicleta o con mascotas, acampar, fumar y hacer fuego.',
    'Circular solo por los senderos señalizados y seguir las indicaciones del guardaparque municipal.',
    'No dejar objetos de valor a la vista en el auto estacionado.',
    'En algunos sectores no hay señal de celular.',
  ],
  precauciones_en:          [
    'Overnight stays are not allowed.',
    'Take all your rubbish back with you.',
    'At the viewpoint, keep away from the cliff edge and watch children closely.',
    'Before entering you must pay the Llao Llao Municipal Park entry fee (there is also a QR code at the entrance): pay by card or in cash through Rapipago or Pago Fácil. Bariloche residents, retirees and children under 12 do not pay.',
    'Summer entry hours: 8 am to 10 pm. In winter, check trail status and permitted hours.',
    'On windy days the trails stay closed: check the weather.',
    'Bicycles, pets, camping, smoking and fires are prohibited.',
    'Use only the marked trails and follow the municipal ranger\'s instructions.',
    'Do not leave valuables in view in a parked car.',
    'There is no mobile signal in some areas.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Parte del estacionamiento de Bahía López (km 32 del Circuito Chico), junto al hotel Alun Nehuen. Todo el camino va por bosque con poca pendiente. Después de unos 40 minutos se llega a un promontorio natural con vista al Brazo Tristeza del Nahuel Huapi y al cerro Capilla. Se vuelve por el mismo camino.',
  descripcion_en:           'It starts at the Bahía López car park (km 32 of the Circuito Chico), next to the Alun Nehuen hotel. The whole way is through forest on a gentle slope. After about 40 minutes you reach a natural outcrop with a view of the Brazo Tristeza of Nahuel Huapi and Cerro Capilla. Return the same way.',
},

{
  // identidad
  id:                       'mb6',
  nombre:                   'Cerro Campanario (Circuito Chico)',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb6/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'todo el año',
  temporada_en:             'all year',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Según el estado físico o de salud, la dificultad puede ser Media.',
    'Sendero con mucho desnivel: buen calzado y bastón de trekking.',
  ],
  precauciones_en:          [
    'Depending on fitness or health, the difficulty may be Medium.',
    'A trail with a lot of climbing: good footwear and a trekking pole.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'El inicio está a la derecha de la base de la aerosilla. Es un trayecto corto por un camino irregular y bastante empinado, que lleva en unos 45 minutos a la cima del Campanario, a 1.050 m. Arriba hay confitería, sanitarios y un mirador con vista a los lagos Nahuel Huapi y Moreno, la laguna El Trébol, la península San Pedro, la isla Victoria y los cerros Otto, López, Goye, Bella Vista, Catedral y Capilla. Se baja por el mismo camino.',
  descripcion_en:           'The start is to the right of the chairlift base. It is a short trip on an uneven and fairly steep path, which takes about 45 minutes to the top of Campanario, at 1,050 m. At the top there is a café, toilets and a viewpoint over lakes Nahuel Huapi and Moreno, Laguna El Trébol, San Pedro peninsula, Isla Victoria and cerros Otto, López, Goye, Bella Vista, Catedral and Capilla. You descend the same way.',
},

{
  // identidad
  id:                       'mb7',
  nombre:                   'Piedra de Habsburgo (Cerro Otto)',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb7/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Baja',
  temporada:                'verano',
  temporada_en:             'summer',
  dificultad_otra:          '',
  temporada_otra:           '',
  temporada_otra_en:        '',
  registro:                 'no_requiere',

  // lo que hay que saber
  precauciones:             [
    'Cuando hay nieve en el sendero (normalmente de junio a octubre) el acceso queda cerrado: son las pistas del centro de esquí nórdico.',
    'Atención a los desvíos: hay varios cruces de senderos y es fácil perderse.',
    'La entrada al Complejo del Cerro Otto y a su confitería giratoria es solo para quienes usan el teleférico.',
    'En invierno el camino de autos se corta por nieve 1 km antes de la cumbre, y hay días en que son obligatorias las cadenas.',
  ],
  precauciones_en:          [
    'When there is snow on the trail (normally June to October) access is closed: it becomes the Nordic ski centre pistes.',
    'Watch for forks: there are several path junctions and it is easy to get lost.',
    'Entry to the Cerro Otto complex and its revolving café is only for cable-car users.',
    'In winter the car road is closed by snow 1 km below the summit, and some days chains are compulsory.',
  ],
  servicios:                'Teleférico del Cerro Otto (www.telefericobariloche.com.ar): el servicio depende del clima; el ticket incluye el bus desde el centro. Refugio Berghof: cerrado al público por reformas.',
  servicios_en:             'Cerro Otto cable car (www.telefericobariloche.com.ar): service depends on the weather; the ticket includes the bus from downtown. Berghof hut: closed to the public for renovation.',

  // cómo es (texto propio, reescrito)
  descripcion:              'Paseo fácil si se hace desde la cima: es corto y casi sin desnivel (85 m; 350 m si se sube a pie desde la base del km 1). Con el teleférico, se sale de la confitería giratoria hacia el sur y se toma un camino a la izquierda. Para quien llega a pie o en auto, el inicio está en el estacionamiento, junto a la confitería, y de ahí sale el camino al mirador de la Piedra de Habsburgo, a una hora de caminata, con vista panorámica a los lagos Gutiérrez y al cerro Catedral. A mitad de camino hay una tranquera que se puede cruzar, y hay pequeños accesos a dos miradores. Se vuelve a la cumbre por el mismo camino. Si se sube en auto por el camino del km 1, se pasa por el histórico refugio Berghof y el Museo de Otto Meiling.',
  descripcion_en:           'An easy walk if done from the top: it is short with almost no climbing (85 m; 350 m if you walk up from the base at km 1). With the cable car, leave the revolving café heading south and take a path on the left. If you arrive on foot or by car, the start is in the car park, beside the café, and from there the path leaves for the Piedra de Habsburgo viewpoint, an hour\'s walk away, with a panoramic view of Lake Gutiérrez and Cerro Catedral. Halfway there is a gate you may cross, and short side paths to two viewpoints. You return to the summit by the same path. If you drive up the km 1 road, you pass the historic Berghof hut and the Otto Meiling Museum.',
},

{
  // identidad
  id:                       'mb8',
  nombre:                   'Tambo de Báez - Cerro Bella Vista',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb8/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'enero a marzo',
  temporada_en:             'January to March',
  dificultad_otra:          'Alta',
  temporada_otra:           'abril a diciembre',
  temporada_otra_en:        'April to December',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'No hay arroyos para cargar agua: llevar suficiente.',
    'Mucho sol: llevar gorro, anteojos de sol y protector.',
    'Camino muy empinado y con pedrero: buen calzado.',
    'Caminata larga: calcular bien los horarios.',
  ],
  precauciones_en:          [
    'There are no streams to refill from: carry enough water.',
    'Strong sun: bring a hat, sunglasses and sunscreen.',
    'Very steep and rocky path: wear good footwear.',
    'Long walk: plan your timing carefully.',
  ],
  servicios:                'Tambo de Báez: estacionamiento.',
  servicios_en:             'Tambo de Báez: car park.',

  // cómo es (texto propio, reescrito)
  descripcion:              'La entrada al Tambo de Báez está bien señalizada, sobre la Ruta Provincial 79, por un camino de ripio entre el arroyo Casa de Piedra y Colonia Suiza. A 300 m de la ruta, pasando la tranquera, hay un estacionamiento al que se llega en auto. Los primeros 400 m son los mismos que van al refugio San Martín, hasta un cartel que manda a la derecha hacia el cerro Bella Vista. Es un camino señalizado y bastante empinado, sin arroyos en todo el trayecto. Al salir del bosque, a 1.600 m, empieza un sector de piedra suelta hasta el primer filo, con un mirador natural. Un kilómetro más por el filo se llega a la cima, con vista lejana al Tronador. Se vuelve por el mismo camino.',
  descripcion_en:           'The entrance to Tambo de Báez is well signed, on Provincial Route 79, along a gravel road between the Casa de Piedra stream and Colonia Suiza. 300 m from the road, past the gate, there is a car park reachable by car. The first 400 m are the same as for the San Martín hut, up to a sign pointing right toward Cerro Bella Vista. It is a marked and fairly steep path, with no streams along the way. Leaving the forest at 1,600 m, a loose-stone sector begins up to the first ridge, with a natural viewpoint. One more kilometre along the ridge leads to the summit, with a distant view of Tronador. Return the same way.',
},

{
  // identidad
  id:                       'mb9',
  nombre:                   'Colonia Suiza - Cerro Goye',
  tramos:                   [],
  fuente:                   'https://barilochetrekking.com/sendero-mb9/',

  // dificultad y temporada (según el listado de Parques Nacionales)
  dificultad:               'Media',
  temporada:                'enero a marzo',
  temporada_en:             'January to March',
  dificultad_otra:          'Alta',
  temporada_otra:           'abril a diciembre',
  temporada_otra_en:        'April to December',
  registro:                 'obligatorio',

  // lo que hay que saber
  precauciones:             [
    'Se recomienda ir y volver desde la cumbre por el mismo camino.',
    'Llevar suficiente agua.',
    'Mucho sol: gorro, anteojos de sol y protector.',
    'Camino empinado y con pedrero: buen calzado y bastones.',
    'Caminata larga y exigente: calcular bien los horarios.',
  ],
  precauciones_en:          [
    'Going up and returning by the same path is recommended.',
    'Carry enough water.',
    'Strong sun: hat, sunglasses and sunscreen.',
    'Steep, rocky path: good footwear and trekking poles.',
    'Long, demanding walk: plan your timing carefully.',
  ],
  servicios:                '',
  servicios_en:             '',

  // cómo es (texto propio, reescrito)
  descripcion:              'Se recomienda subir a la cumbre y volver por el mismo sendero. Recorre el valle entre los cerros Bella Vista y López por el medio del bosque y sube al cerro Goye. Empieza a pocos metros del centro de Colonia Suiza y los primeros 2 km coinciden con el camino al refugio Manfredo Segre, hasta un cartel que manda a la izquierda hacia el Goye. A las 2 h 30 se llega a la primera cumbre, con una vista panorámica magnífica. Hay una opción mucho más exigente, solo con experiencia de montaña: bajar por la traza del mapa, con mucha más pendiente, mala señalización y piedra suelta, hasta retomar el camino ancho que lleva a la ruta de ripio de Colonia Suiza.',
  descripcion_en:           'Going up to the summit and returning the same way is recommended. It runs along the valley between cerros Bella Vista and López through the forest and climbs Cerro Goye. It starts a few metres from the centre of Colonia Suiza and the first 2 km are shared with the path to the Manfredo Segre hut, up to a sign pointing left to Goye. After 2 h 30 you reach the first summit, with a magnificent panoramic view. There is a much more demanding option, only with mountain experience: descend along the route shown on the map, with a much steeper slope, poor signage and loose stone, until you rejoin the wide path to the Colonia Suiza gravel road.',
},

];
