#!/usr/bin/env node
/* Lee el formulario de registro de trekking del Parque Nacional Nahuel Huapi y
   escribe datos/estado.js con el estado de cada sendero y travesía.

   Cómo decide el estado: en el formulario, cada opción de sendero "salta" a una
   sección. Si salta a una sección cuyo título dice CERRADO, está cerrado; si dice
   SÓLO CON GUÍA, está habilitado pero se anota la aclaración; si sigue al formulario normal, está habilitado.

   Uso:  node herramientas/actualizar-estado.mjs        (necesita Node 18 o más nuevo)
   Si no se puede leer el formulario, no toca datos/estado.js y termina con error. */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { leerEstructura } from './formulario.mjs';

const FORM = 'https://forms.gle/sGNVrn7DmpEjfmNf9';   // enlace del registro en la web del parque
const AQUI = dirname(fileURLToPath(import.meta.url));
const SALIDA = join(AQUI, '..', 'datos', 'estado.js');
const TRAMOS = join(AQUI, '..', 'datos', 'tramos.js');

const norm = s => String(s ?? '').replace(/\s+/g, ' ').trim();
const clave = s => norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

async function leerFormulario() {
  const r = await fetch(FORM, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (estado-senderos)' } });
  if (!r.ok) throw new Error('El formulario respondió ' + r.status);
  const html = await r.text();
  const m = html.match(/FB_PUBLIC_LOAD_DATA_ = (.*?);<\/script>/s);
  if (!m) throw new Error('No se encontró el contenido del formulario: Google pudo haber cambiado el formato.');
  const v = html.match(/https:\/\/docs\.google\.com\/forms\/d\/e\/[^/"\\]+\/viewform/);
  return { items: JSON.parse(m[1])[1][1], viewUrl: v ? v[0] : '' };
}

function estadoDeSeccion(sec) {
  const t = clave(sec.titulo);
  if (/cerrado/.test(t)) return 'cerrado';
  return 'habilitado';
}

function analizar(items) {
  const secciones = {};            // id de sección -> {titulo, texto}
  items.forEach((it, i) => {
    if (it[3] === 8) {
      const texto = [it[2], ...items.slice(i + 1).filter((x, j) => j < 2 && x[3] === 11).map(x => x[2])].filter(Boolean).join(' ');
      secciones[it[0]] = { titulo: norm(it[1]), texto: norm(texto) };
    }
  });
  const res = {};                  // etiqueta -> {estado, motivo}
  const compuertas = {};           // "zona|tipo" -> estado, si toda una categoría está cerrada
  let secActual = '';
  const zonaDe = t => (t.match(/centro|sur|lacustre|norte/i) || [''])[0].toLowerCase();
  items.forEach(it => {
    if (it[3] === 8) { secActual = norm(it[1]); return }
    if (it[3] !== 2 || !it[4]?.[0]?.[1]) return;
    const opciones = it[4][0][1];
    const titulo = norm(it[1]);
    // pregunta "¿sendero o travesía?": si una opción lleva directo a una sección cerrada, toda esa categoría está cerrada
    if (opciones.length === 2 && opciones.every(o => ['sendero', 'travesia'].includes(clave(o[0])))) {
      opciones.forEach(o => { const s = secciones[o[2]]; if (s && estadoDeSeccion(s) !== 'habilitado') compuertas[zonaDe(secActual) + '|' + clave(o[0])] = estadoDeSeccion(s) });
      return;
    }
    // lista de senderos: se reconoce porque las opciones saltan a secciones y hay varias
    if (!/lugar donde|^travesia$/i.test(clave(titulo)) || opciones.length < 3) return;
    const esTravesia = /travesia/i.test(clave(secActual)) || clave(titulo) === 'travesia';
    const zona = zonaDe(secActual);
    const gate = compuertas[zona + '|' + (esTravesia ? 'travesia' : 'sendero')];
    opciones.forEach(o => {
      const sec = secciones[o[2]] || { titulo: '', texto: '' };
      let estado = gate || estadoDeSeccion(sec);
      const conGuia = clave(sec.titulo).includes('solo con guia');   // habilitado, pero solo con guía
      const motivo = gate ? 'Toda la categoría está cerrada' : (estado === 'cerrado' || conGuia) ? sec.titulo : '';
      const k = norm(o[0]);
      const prev = res[k];
      const orden = { habilitado: 0, cerrado: 1 };
      if (!prev || orden[estado] < orden[prev.estado]) res[k] = { estado, motivo };
    });
  });
  return res;
}

function etiquetasUsadas() {
  const src = readFileSync(TRAMOS, 'utf8');
  const out = new Set();
  for (const m of src.matchAll(/nombres_en_registro:\s*\[(.*?)\]\s*,/gs))
    for (const s of m[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)) out.add(norm(s[1].replace(/\\'/g, "'")));
  return out;
}

try {
  const { items, viewUrl } = await leerFormulario();
  const entradas = analizar(items);
  const n = Object.keys(entradas).length;
  if (n < 20) throw new Error(`Solo se leyeron ${n} senderos; parece un error de lectura. No se actualiza.`);
  const usadas = etiquetasUsadas();
  const ks = new Map(Object.keys(entradas).map(k => [clave(k), k]));
  const faltan = [...usadas].filter(u => !ks.has(clave(u)));
  const salida = {};
  for (const k of Object.keys(entradas).sort((a, b) => a.localeCompare(b, 'es'))) salida[k] = entradas[k];
  const cont = c => Object.values(entradas).filter(e => e.estado === c).length;
  // estructura del formulario (códigos de campos y valores a precargar). Si falla, el estado se actualiza igual
  // y la página vuelve a mostrar solo el enlace al registro oficial.
  let formulario = null;
  try { formulario = leerEstructura(items, viewUrl); }
  catch (e) { console.error('No se pudo leer la estructura del formulario (el estado sí se actualiza):', e.message); }
  writeFileSync(SALIDA,
`/* GENERADO por herramientas/actualizar-estado.mjs: no editar a mano.
   Estado de cada sendero según el formulario de registro de trekking del Parque,
   y la estructura del formulario para abrirlo ya completado (FORMULARIO). */
const ESTADO = ${JSON.stringify({ actualizado: new Date().toISOString(), fuente: FORM, entradas: salida }, null, 1)};
const FORMULARIO = ${JSON.stringify(formulario)};
`);
  console.log(`Estado actualizado: ${n} entradas (${cont('habilitado')} habilitadas, ${cont('cerrado')} cerradas).`);
  if (faltan.length) console.log('Nombres de datos/tramos.js que ya no están en el formulario (esos tramos quedan «No verificado»):\n  - ' + faltan.join('\n  - '));
} catch (e) {
  console.error('No se pudo actualizar el estado:', e.message);
  process.exit(1);
}
