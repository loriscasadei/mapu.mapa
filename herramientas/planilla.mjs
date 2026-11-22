/* Lee la planilla de Google «Mapu Mapa - datos para completar» (cada hoja como CSV, igual que la página)
   y arma el archivo datos/planilla.js, que la página usa de respaldo cuando no puede leer la planilla en vivo.
   Son funciones puras (sin leer archivos): las usa copiar-planilla.mjs y se pueden probar en un navegador. */

export const HOJAS = [['tramos', 'Tramos'], ['refugios', 'Refugios'], ['accesos', 'Accesos'], ['puntos', 'Otros puntos'], ['travesias', 'Travesías'], ['sendas', 'Sendas']];

// mismas reglas que csvFilas() de app.js: la primera fila son los títulos y tiene que haber una columna «id»
export function csvFilas(t) {
  const r = []; let f = '', row = [], q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && t[i + 1] === '\n') i++; row.push(f); r.push(row); row = []; f = ''; }
    else f += c;
  }
  if (f !== '' || row.length) { row.push(f); r.push(row); }
  if (!r.length) return [];
  const h = r[0].map(x => x.trim());
  if (!h.includes('id')) throw new Error('sin columna id');
  return r.slice(1).filter(x => x.some(c => c.trim())).map(x => {
    const o = {};
    h.forEach((k, i) => { const v = (x[i] ?? '').trim(); if (v !== '' || k === 'id') o[k] = v; });   // las celdas vacías no se guardan
    return o;
  });
}

export async function leerPlanilla(id, pedir) {
  const hojas = {};
  for (const [k, nombre] of HOJAS) {
    const r = await pedir(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&headers=1&sheet=${encodeURIComponent(nombre)}`);
    if (!r.ok) throw new Error(`La hoja «${nombre}» respondió ${r.status}`);
    hojas[k] = csvFilas(await r.text());
  }
  return hojas;
}

// Si algo viene raro (planilla vacía, hoja borrada) no se pisa la copia buena.
export function validar(hojas) {
  const min = { tramos: 100, refugios: 5, accesos: 50, travesias: 5, sendas: 50 };
  for (const [k, n] of Object.entries(min))
    if (!Array.isArray(hojas[k]) || hojas[k].length < n) throw new Error(`La hoja «${k}» tiene ${hojas[k]?.length ?? 0} filas y se esperaban al menos ${n}. No se actualiza.`);
}

export function armarArchivo(hojas, ahora) {
  const bloque = ([k]) => ` ${JSON.stringify(k)}: [\n${hojas[k].map(f => '  ' + JSON.stringify(f)).join(',\n')}\n ]`;
  return `/* GENERADO por herramientas/copiar-planilla.mjs: no editar a mano.
   Copia diaria de la planilla de Google «Mapu Mapa - datos para completar».
   La página la usa de respaldo si no puede leer la planilla en vivo (sin internet y sin copia guardada). */
const PLANILLA = {
 "actualizado": ${JSON.stringify(ahora)},
 "hojas": {
${HOJAS.map(bloque).join(',\n')}
 }
};
`;
}
