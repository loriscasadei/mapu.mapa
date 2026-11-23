#!/usr/bin/env node
/* Pide a Open-Meteo el pronóstico de 7 días para cada zona del parque y escribe
   datos/clima.js, agrupado en franjas de mañana (6 a 12), tarde (12 a 18) y
   noche (18 a 24), en hora de Argentina (UTC-3).

   Zonas: herramientas/zonas-clima.csv (se puede abrir y editar con Excel).
   Modelos: ECMWF, GFS e ICON. Se guarda el valor de cada uno, el promedio y si
   coinciden (alta, media o baja).

   Alturas: Open-Meteo da cada variable en el punto de la zona, a su altura real
   del terreno. Para las alturas fijas (800 a 3300 m) el script calcula:
     · temperatura: entre la del suelo y la que el modelo da a 850 y 700 hPa
       (unos 1500 y 3000 m). Por debajo del punto y por encima de 700 hPa,
       6,5 °C cada 1000 m.
     · viento: igual, entre el de 10 m y el de 850 y 700 hPa (estimado).
     · sensación térmica: la de Open-Meteo en el punto, corregida por el cambio
       de temperatura y de viento.
     · índice UV: el del punto; por encima, +10 % cada 1000 m (estimado).
   Lluvia, ráfagas e isoterma 0° son de la zona (no cambian con la altura).

   Uso:  node herramientas/actualizar-clima.mjs        (necesita Node 18 o más nuevo)
   Si Open-Meteo no responde, no toca datos/clima.js y termina con error. */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const AQUI = dirname(fileURLToPath(import.meta.url));
const SALIDA = join(AQUI, '..', 'datos', 'clima.js');
const TRAMOS = join(AQUI, '..', 'datos', 'tramos.js');
const PLANILLA = join(AQUI, '..', 'datos', 'planilla.js');
const ZONAS_CSV = join(AQUI, 'zonas-clima.csv');
const API = 'https://api.open-meteo.com/v1/forecast';

const MODELOS = { ecmwf: 'ecmwf_ifs025', gfs: 'gfs_seamless', icon: 'icon_seamless' };
const NOMBRE_MODELO = { ecmwf: 'ECMWF IFS (Centro Europeo)', gfs: 'GFS (NOAA, Estados Unidos)', icon: 'ICON (DWD, Alemania)' };
const RAFAGA_COMPARA = ['ecmwf', 'icon'];   // modelos que se comparan para la coincidencia de ráfagas
const ALTURAS = [800, 1300, 1800, 2300, 2800, 3300];
const FRANJAS = [
  { id: 'manana', nombre: 'mañana', desde: 6, hasta: 12 },
  { id: 'tarde', nombre: 'tarde', desde: 12, hasta: 18 },
  { id: 'noche', nombre: 'noche', desde: 18, hasta: 24 },
];
const DIAS = 7;
const UTC_ART = -3;          // hora de Argentina
const GRADIENTE = 6.5;       // °C que baja la temperatura cada 1000 m, donde el modelo no da datos
const UV_POR_1000M = 0.10;   // +10 % de índice UV cada 1000 m por encima del punto
const HORARIAS = [
  'temperature_2m', 'apparent_temperature', 'precipitation',
  'wind_speed_10m', 'wind_gusts_10m',
  'temperature_850hPa', 'temperature_700hPa',
  'geopotential_height_850hPa', 'geopotential_height_700hPa',
  'wind_speed_850hPa', 'wind_speed_700hPa',
  'freezing_level_height', 'uv_index',
];

const norm = s => String(s ?? '').replace(/\s+/g, ' ').trim();
const clave = s => norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[‐-―−]/g, '-').toLowerCase();
const avisos = [];

/* ---------- zonas ---------- */
// Las zonas de los tramos están en la planilla de Google (copia en datos/planilla.js);
// también se miran las que queden escritas en datos/tramos.js.
function zonasDeTramos() {
  const zonas = new Set();
  try {
    const src = readFileSync(PLANILLA, 'utf8');
    const json = src.slice(src.indexOf('{', src.indexOf('PLANILLA')), src.lastIndexOf('}') + 1);
    for (const t of JSON.parse(json).hojas?.tramos || []) if (norm(t.zona)) zonas.add(norm(t.zona));
  } catch { avisos.push('No se pudo leer datos/planilla.js para comparar las zonas.') }
  const src = readFileSync(TRAMOS, 'utf8');
  for (const m of src.matchAll(/^\s*zona:\s*'((?:[^'\\]|\\.)*)'/gm)) if (norm(m[1])) zonas.add(norm(m[1].replace(/\\'/g, "'")));
  return [...zonas];
}

function leerZonas() {
  const buf = readFileSync(ZONAS_CSV);
  let txt;
  try { txt = new TextDecoder('utf-8', { fatal: true }).decode(buf) }
  catch { txt = new TextDecoder('windows-1252').decode(buf) }   // Excel a veces guarda así
  const filas = txt.replace(/^﻿/, '').split(/\r?\n/).filter(l => l.trim());
  const sep = filas[0].includes(';') ? ';' : filas[0].includes('\t') ? '\t' : ',';
  const cab = filas[0].split(sep).map(clave);
  const col = n => { const i = cab.indexOf(n); if (i < 0) throw new Error(`zonas-clima.csv no tiene la columna «${n}».`); return i };
  const [cZ, cLa, cLo] = [col('zona'), col('latitud'), col('longitud')];
  const cCerca = cab.indexOf('cerca_de');
  const num = s => Number(norm(s).replace(',', '.'));
  const deTramos = new Map(zonasDeTramos().map(z => [clave(z), z]));
  const zonas = [];
  filas.slice(1).forEach((f, i) => {
    const c = f.split(sep);
    const nombre = norm(c[cZ]); if (!nombre) return;
    const lat = num(c[cLa]), lon = num(c[cLo]);
    if (!(lat > -42.5 && lat < -39.5 && lon > -73 && lon < -70))
      throw new Error(`zonas-clima.csv, fila ${i + 2} (${nombre}): latitud o longitud fuera del parque (${c[cLa]}; ${c[cLo]}).`);
    const oficial = deTramos.get(clave(nombre));
    if (!oficial) { avisos.push(`La zona «${nombre}» de zonas-clima.csv no es una zona de los tramos (planilla): se pide igual.`) }
    zonas.push({ nombre: oficial || nombre, lat, lon, cerca_de: cCerca >= 0 ? norm(c[cCerca]) : '' });
  });
  const tiene = new Set(zonas.map(z => clave(z.nombre)));
  for (const [k, z] of deTramos) if (!tiene.has(k)) avisos.push(`La zona «${z}» de la planilla no está en zonas-clima.csv: queda sin clima.`);
  if (!zonas.length) throw new Error('zonas-clima.csv no tiene zonas.');
  return zonas;
}

/* ---------- Open-Meteo ---------- */
async function pedir(params, que) {
  const url = API + '?' + new URLSearchParams(params);
  let ultimo;
  for (let intento = 1; intento <= 2; intento++) {
    try {
      const r = await fetch(url, { headers: { 'user-agent': 'mapu-mapa-clima' }, signal: AbortSignal.timeout(90000) });
      const txt = await r.text();
      if (!r.ok) {
        let motivo = txt.slice(0, 200); try { motivo = JSON.parse(txt).reason || motivo } catch {}
        throw new Error(`${que}: Open-Meteo respondió ${r.status} (${motivo})`);
      }
      const j = JSON.parse(txt);
      return Array.isArray(j) ? j : [j];
    } catch (e) {
      ultimo = e;
      if (intento < 2) await new Promise(res => setTimeout(res, 5000));
    }
  }
  throw new Error(ultimo.name === 'TimeoutError' ? `${que}: Open-Meteo no respondió a tiempo.` : ultimo.message);
}

const fechaLocal = ms => new Date(ms + UTC_ART * 3600e3).toISOString().slice(0, 10);
const horaUTC = ms => new Date(ms).toISOString().slice(0, 16);

/* ---------- cuentas ---------- */
const vale = v => v != null && Number.isFinite(v);
const sinNulos = a => a.filter(vale);
const minimo = a => { const b = sinNulos(a); return b.length ? Math.min(...b) : null };
const maximo = a => { const b = sinNulos(a); return b.length ? Math.max(...b) : null };
const promedio = a => { const b = sinNulos(a); return b.length ? b.reduce((x, y) => x + y, 0) / b.length : null };
const suma = a => { const b = sinNulos(a); return b.length * 2 >= a.length ? b.reduce((x, y) => x + y, 0) : null };
const r1 = v => vale(v) ? Math.round(v * 10) / 10 : null;
const r0 = v => vale(v) ? Math.round(v) : null;
const r10 = v => vale(v) ? Math.round(v / 10) * 10 : null;

// nodos [[altura, valor], ...] de abajo hacia arriba: el suelo del punto y los niveles de presión que quedan por encima
function nodos(e0, v0, niveles) {
  const n = [[e0, v0]];
  for (const [z, v] of niveles) if (vale(z) && vale(v) && z > n[n.length - 1][0] + 100) n.push([z, v]);
  return n;
}
function interpolar(n, h, fuera) {
  if (h <= n[0][0]) return fuera(n[0], h);
  for (let k = 0; k < n.length - 1; k++)
    if (h <= n[k + 1][0]) { const [a, va] = n[k], [b, vb] = n[k + 1]; return va + (vb - va) * (h - a) / (b - a) }
  return fuera(n[n.length - 1], h);
}
const tempEn = (n, h) => interpolar(n, h, ([z, v], h) => v - GRADIENTE * (h - z) / 1000);
const vientoEn = (n, h) => interpolar(n, h, ([, v]) => v);

const NIVEL = { alta: 0, media: 1, baja: 2 };
const peor = a => { const b = a.filter(Boolean); return b.length ? b.reduce((x, y) => NIVEL[y] > NIVEL[x] ? y : x) : null };
const porDiferencia = (vals, alta, media) => {
  const b = sinNulos(vals); if (b.length < 2) return null;
  const d = Math.max(...b) - Math.min(...b);
  return d <= alta ? 'alta' : d <= media ? 'media' : 'baja';
};
function coincidenLluvias(vals) {
  const b = sinNulos(vals); if (b.length < 2) return null;
  const secos = b.filter(v => v < 0.5).length;
  if (secos === b.length) return 'alta';
  if (secos > 0) return 'baja';
  return porDiferencia(b, 2, 5);
}

/* ---------- armado ---------- */
function procesarZona(zona, resp, pasado, fechas) {
  const e0 = resp.elevation;
  const ids = Object.keys(MODELOS);
  const serie = (m, v) => resp.hourly[`${v}_${MODELOS[m]}`] || [];
  // por modelo y hora: valores del punto y perfiles para las alturas
  const horas = resp.hourly.time.length;
  const calc = {};
  for (const m of ids) {
    const s = Object.fromEntries(HORARIAS.map(v => [v, serie(m, v)]));
    calc[m] = { s, alt: ALTURAS.map(() => ({ t: [], sens: [], v: [], uv: [] })) };
    for (let i = 0; i < horas; i++) {
      const T0 = s.temperature_2m[i], AT0 = s.apparent_temperature[i], W0 = s.wind_speed_10m[i];
      const nT = vale(T0) ? nodos(e0, T0, [[s.geopotential_height_850hPa[i], s.temperature_850hPa[i]], [s.geopotential_height_700hPa[i], s.temperature_700hPa[i]]]) : null;
      const nW = vale(W0) ? nodos(e0, W0, [[s.geopotential_height_850hPa[i], s.wind_speed_850hPa[i]], [s.geopotential_height_700hPa[i], s.wind_speed_700hPa[i]]]) : null;
      ALTURAS.forEach((h, k) => {
        const a = calc[m].alt[k];
        const T = nT ? tempEn(nT, h) : null, W = nW ? vientoEn(nW, h) : null;
        a.t[i] = T; a.v[i] = W;
        a.sens[i] = vale(T) && vale(AT0) && vale(W) ? T + (AT0 - T0) - 0.70 * (W - W0) / 3.6 : null;
        const uv = s.uv_index[i];
        a.uv[i] = vale(uv) ? uv * (h > e0 ? 1 + UV_POR_1000M * (h - e0) / 1000 : 1) : null;
      });
    }
  }
  const conPromedio = (porModelo, red, entran = ids) => [red(promedio(entran.map(m => porModelo[m]))), ...ids.map(m => red(porModelo[m]))];
  const dias = fechas.map((fecha, d) => ({
    fecha,
    franjas: FRANJAS.map(fr => {
      const ins = a => a.slice(d * 24 + fr.desde, d * 24 + fr.hasta);              // valores del momento
      const acu = a => a.slice(d * 24 + fr.desde + 1, d * 24 + fr.hasta + 1);      // lluvia de la hora que terminó
      const pm = f => Object.fromEntries(ids.map(m => [m, f(calc[m])]));
      const lluvia = pm(c => suma(acu(c.s.precipitation)));
      const rafaga = pm(c => maximo(ins(c.s.wind_gusts_10m)));
      const tmaxPunto = pm(c => maximo(ins(c.s.temperature_2m)));
      const co = {
        temperatura: porDiferencia(ids.map(m => tmaxPunto[m]), 2, 4),
        lluvia: coincidenLluvias(ids.map(m => lluvia[m])),
        // GFS calcula las ráfagas distinto (salen mucho más bajas): se guarda, pero no entra en la comparación
        rafaga: porDiferencia(RAFAGA_COMPARA.map(m => rafaga[m]), 10, 20),
      };
      return {
        coincidencia: { general: peor(Object.values(co)), ...co },
        lluvia: conPromedio(lluvia, r1),
        viento: conPromedio(pm(c => promedio(ins(c.s.wind_speed_10m))), r0),
        rafaga: conPromedio(rafaga, r0, RAFAGA_COMPARA),   // el promedio de ráfagas deja afuera a GFS
        viento_850hPa: conPromedio(pm(c => promedio(ins(c.s.wind_speed_850hPa))), r0),
        viento_700hPa: conPromedio(pm(c => promedio(ins(c.s.wind_speed_700hPa))), r0),
        isoterma_min: conPromedio(pm(c => minimo(ins(c.s.freezing_level_height))), r10),
        alturas: ALTURAS.map((h, k) => {
          return {
            altura: h,
            tmin: conPromedio(pm(c => minimo(ins(c.alt[k].t))), r1),
            tmax: conPromedio(pm(c => maximo(ins(c.alt[k].t))), r1),
            smin: conPromedio(pm(c => minimo(ins(c.alt[k].sens))), r1),
            smax: conPromedio(pm(c => maximo(ins(c.alt[k].sens))), r1),
            viento: conPromedio(pm(c => promedio(ins(c.alt[k].v))), r0),
            uv: conPromedio(pm(c => maximo(ins(c.alt[k].uv))), r1),
            uv_estimado: h > e0,
          };
        }),
      };
    }),
  }));
  // lluvia reciente: días completos antes de hoy
  const pd = pasado.daily.precipitation_sum.slice(0, -1);
  return {
    lat: zona.lat, lon: zona.lon, altura_punto: r0(e0), cerca_de: zona.cerca_de,
    lluvia_7d: r1(suma(pd.slice(-7))), lluvia_30d: r1(suma(pd.slice(-30))),
    dias,
  };
}

function revisar(resp, zonas) {
  if (resp.length !== zonas.length) throw new Error(`Open-Meteo devolvió ${resp.length} puntos y se pidieron ${zonas.length}.`);
  const largo = DIAS * 24 + 1;
  const sinModelo = new Set();
  resp.forEach((r, i) => {
    if (!r.hourly || r.hourly.time?.length !== largo) throw new Error(`Respuesta incompleta para ${zonas[i].nombre}.`);
    if (!vale(r.elevation)) throw new Error(`Open-Meteo no dio la altura del punto de ${zonas[i].nombre}.`);
    const conDato = Object.entries(MODELOS).filter(([, m]) => sinNulos(r.hourly[`temperature_2m_${m}`] || []).length > largo * 0.9);
    if (!conDato.length) throw new Error(`Ningún modelo trajo temperatura para ${zonas[i].nombre}.`);
    for (const [id] of Object.entries(MODELOS)) if (!conDato.some(([k]) => k === id)) sinModelo.add(id);
  });
  for (const id of sinModelo) avisos.push(`El modelo ${NOMBRE_MODELO[id]} vino vacío o incompleto en alguna zona: se usan los otros.`);
}

function escribir(datos) {
  const { zonas, ...cab } = datos;
  const cabeza = JSON.stringify(cab, null, 1).replace(/\n}$/, '');
  const cuerpo = Object.entries(zonas).map(([nombre, z]) => {
    const { dias, ...meta } = z;
    return ` ${JSON.stringify(nombre)}: {${JSON.stringify(meta).slice(1, -1)},"dias":[\n${dias.map(d => '  ' + JSON.stringify(d)).join(',\n')}\n ]}`;
  }).join(',\n');
  writeFileSync(SALIDA,
`/* GENERADO por herramientas/actualizar-clima.mjs: no editar a mano.
   Pronóstico de Open-Meteo (CC BY 4.0) por zona, franja y altura. Qué es cada campo: ver "notas". */
const CLIMA = ${cabeza},
 "zonas": {
${cuerpo}
 }
};
`);
}

try {
  const zonas = leerZonas();
  const ahora = Date.now();
  const hoy = fechaLocal(ahora);
  const inicio = Date.parse(hoy + 'T00:00:00Z') - UTC_ART * 3600e3;      // 0 h de hoy en Argentina, en UTC
  const fin = inicio + DIAS * 24 * 3600e3;
  const fechas = Array.from({ length: DIAS }, (_, d) => fechaLocal(inicio + d * 24 * 3600e3 + 12 * 3600e3));
  const lat = zonas.map(z => z.lat).join(','), lon = zonas.map(z => z.lon).join(',');

  const [pron, pasado] = await Promise.all([
    pedir({ latitude: lat, longitude: lon, hourly: HORARIAS.join(','), models: Object.values(MODELOS).join(','),
            timezone: 'GMT', start_hour: horaUTC(inicio), end_hour: horaUTC(fin), wind_speed_unit: 'kmh' }, 'Pronóstico'),
    pedir({ latitude: lat, longitude: lon, daily: 'precipitation_sum', past_days: 30, forecast_days: 1,
            timezone: 'America/Argentina/Buenos_Aires' }, 'Lluvia de los últimos 30 días'),
  ]);
  revisar(pron, zonas);
  if (pasado.length !== zonas.length || pasado.some(p => p.daily?.precipitation_sum?.length !== 31))
    throw new Error('Lluvia de los últimos 30 días: respuesta incompleta.');

  const salida = {
    actualizado: new Date(ahora).toISOString(),
    fuente: 'Open-Meteo (https://open-meteo.com)',
    licencia: 'CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)',
    zona_horaria: 'UTC-3',
    modelos: NOMBRE_MODELO,
    orden_valores: ['promedio', ...Object.keys(MODELOS)],
    alturas: ALTURAS,
    franjas: FRANJAS,
    dias: fechas,
    unidades: { temperatura: '°C', lluvia: 'mm', viento: 'km/h', isoterma: 'm', uv: 'índice UV' },
    notas: [
      'Cada valor es una lista [promedio, ecmwf, gfs, icon]; null = ese modelo no lo da. En rafaga, el promedio es solo de ECMWF e ICON (GFS da ráfagas mucho más bajas; su valor queda guardado).',
      'Franjas en hora de Argentina: mañana 6 a 12, tarde 12 a 18, noche 18 a 24. tmin/tmax y smin/smax son mínima y máxima de la franja; lluvia es el total; viento es el promedio; rafaga y uv, el máximo; isoterma_min, la más baja de la franja.',
      'lluvia, viento, rafaga, viento_850hPa (unos 1500 m), viento_700hPa (unos 3000 m) e isoterma_min son de la zona. Lo que está en "alturas" se calcula para cada altura fija.',
      'Temperatura en altura: entre la del suelo en el punto (altura_punto) y la del modelo a 850 y 700 hPa; fuera de ese rango, 6,5 °C cada 1000 m. Viento en altura: estimado igual, entre 10 m, 850 y 700 hPa. Sensación térmica: la de Open-Meteo en el punto, corregida por la temperatura y el viento de cada altura.',
      'UV: solo lo da GFS. Por encima de altura_punto se suma 10 % cada 1000 m (uv_estimado: true).',
      'coincidencia: alta, media o baja según cuánto difieren los modelos en temperatura máxima (2 y 4 °C), lluvia (todos secos, o diferencia de 2 y 5 mm; si unos dan lluvia y otros no, baja) y ráfaga máxima (10 y 20 km/h, solo entre ECMWF e ICON: GFS da ráfagas mucho más bajas y no se compara). general es la peor de las tres.',
      'lluvia_7d y lluvia_30d: total de los últimos 7 y 30 días completos (sin hoy), según el modelo de Open-Meteo para la zona, no medido en una estación.',
    ],
    zonas: {},
  };
  zonas.forEach((z, i) => { salida.zonas[z.nombre] = procesarZona(z, pron[i], pasado[i], fechas) });
  escribir(salida);
  console.log(`Clima actualizado: ${zonas.length} zonas, ${DIAS} días desde el ${hoy}, modelos ${Object.keys(MODELOS).join(', ')}.`);
  if (avisos.length) console.log('Avisos:\n  - ' + avisos.join('\n  - '));
} catch (e) {
  console.error('No se pudo actualizar el clima:', e.message);
  process.exit(1);
}
