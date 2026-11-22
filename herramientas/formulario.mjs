/* Lee la ESTRUCTURA del formulario de registro de trekking del Parque (Google Forms):
   el código de cada campo, las opciones de fecha y cantidad, y para cada sendero o travesía
   los valores que hay que precargar (zona, sendero o travesía, nombre en la lista).
   Con eso la página arma el enlace del registro oficial ya completado.
   Son funciones puras (sin leer archivos ni la red): las usa actualizar-estado.mjs y se pueden probar en un navegador.
   `items` es JSON.parse(FB_PUBLIC_LOAD_DATA_)[1][1], la lista de preguntas y secciones del formulario. */

const norm = s => String(s ?? '').replace(/\s+/g, ' ').trim();
const clave = s => norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export function leerEstructura(items, viewUrl) {
  const ent = it => it[4]?.[0]?.[0];
  const opts = it => it[4]?.[0]?.[1] || [];
  const porId = new Map(items.map((it, i) => [it[0], i]));

  // código de cada campo, buscado por el título de la pregunta
  const buscar = (re, tipos = [0, 1, 2]) => {
    const it = items.find(x => tipos.includes(x[3]) && ent(x) != null && re.test(clave(x[1])));
    if (!it) throw new Error('No se encontró la pregunta ' + re);
    return it;
  };
  const q = {
    nombre: buscar(/^nombre y apellido/), dni: buscar(/^dni/), residencia: buscar(/residencia/), telefono: buscar(/^telefono/),
    fechaInicio: buscar(/^fecha de inicio/), fechaRegreso: buscar(/^fecha de regreso/),
    alguienSabe: buscar(/alguien que no viene/), contacto: buscar(/datos de contacto de la persona/),
    vasAcompanado: buscar(/vas con algun acompanante/), mayores: buscar(/cuantos de tus acompanantes son mayores/),
    menores: buscar(/cuantos de tus acompanantes son menores/), acompanantes: buscar(/nombra a todos tus acompanantes/),
    hayObservaciones: buscar(/hay algo que creas necesario/), observaciones: buscar(/^tus observaciones/),
    vehiculoSi: buscar(/vehiculo particular/), vehiculo: buscar(/^datos del vehiculo/),
  };
  const campos = Object.fromEntries(Object.entries(q).map(([k, it]) => [k, ent(it)]));
  campos.masDe10 = items.filter(x => x[3] === 0 && ent(x) != null && /numero preciso de acompanantes/.test(clave(x[1]))).map(ent);
  if (campos.masDe10.length !== 2) throw new Error('No se encontraron las preguntas de «más de 10 acompañantes».');

  // opciones de las preguntas de lista cerrada
  const etiquetas = it => opts(it).map(o => norm(o[0]));
  const opciones = {
    fechaInicio: etiquetas(q.fechaInicio), fechaRegreso: etiquetas(q.fechaRegreso),
    mayores: etiquetas(q.mayores), menores: etiquetas(q.menores),
  };
  // cómo está escrito «sí» y «no» en cada pregunta (a veces «SI», a veces «Si»)
  const sino = {};
  for (const k of ['alguienSabe', 'vasAcompanado', 'hayObservaciones', 'vehiculoSi']) {
    const es = etiquetas(q[k]);
    sino[k] = { si: es.find(e => clave(e) === 'si') || 'Si', no: es.find(e => clave(e) === 'no') || 'No' };
  }

  // recorrido: zona -> (sendero o travesía) -> lista de lugares. Cada lugar guarda lo que se precarga.
  const zonaQ = items.find(x => x[3] === 2 && /en que zona del parque/.test(clave(x[1])) && opts(x).length >= 3);
  if (!zonaQ) throw new Error('No se encontró la pregunta de zona.');
  const preguntaDe = sec => {
    const i = porId.get(sec);
    if (i === undefined) return null;
    for (let j = i + 1; j < items.length && items[j][3] !== 8; j++) if (items[j][3] === 2 && opts(items[j]).length >= 2) return items[j];
    return null;
  };
  const senderos = {};
  const recorrer = (sec, ctx, zona, tipo, prof) => {
    if (prof > 4) return;
    const p = preguntaDe(sec); if (!p) return;
    const os = opts(p), ks = os.map(o => clave(o[0])), t = clave(p[1]);
    if (os.length === 2 && ks.every(k => k === 'sendero' || k === 'travesia')) {
      os.forEach(o => recorrer(o[2], { ...ctx, [ent(p)]: norm(o[0]) }, zona, norm(o[0]), prof + 1));
    } else if (os.length >= 3 && /lugar donde|^travesia$/.test(t)) {
      os.forEach(o => {
        const l = norm(o[0]);
        if (!senderos[l]) senderos[l] = { zona, tipo: tipo || (t === 'travesia' ? 'Travesía' : 'Sendero'), prefill: { ...ctx, [ent(p)]: l } };
      });
    }
  };
  opts(zonaQ).forEach(o => recorrer(o[2], { [ent(zonaQ)]: norm(o[0]) }, norm(o[0]), '', 0));
  if (Object.keys(senderos).length < 20) throw new Error('Se encontraron muy pocos senderos en el formulario.');

  return { viewUrl, campos, opciones, sino, senderos };
}

export const _utiles = { norm, clave };
