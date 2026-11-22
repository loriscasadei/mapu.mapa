#!/usr/bin/env node
/* Guarda en datos/planilla.js una copia de la planilla de Google «Mapu Mapa - datos para completar».
   La página la usa de respaldo cuando no puede leer la planilla en vivo.
   La planilla tiene que estar compartida como «Cualquier persona con el enlace: Lector».

   Uso:  node herramientas/copiar-planilla.mjs        (necesita Node 18 o más nuevo)
   Si la planilla no se puede leer o viene rara, no toca datos/planilla.js y termina con error. */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { leerPlanilla, validar, armarArchivo } from './planilla.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const CONFIG = join(AQUI, '..', 'mapa-config.js');
const SALIDA = join(AQUI, '..', 'datos', 'planilla.js');

try {
  const m = readFileSync(CONFIG, 'utf8').match(/HOJA_GOOGLE_ID\s*=\s*'([^']+)'/);
  if (!m) throw new Error('No se encontró HOJA_GOOGLE_ID en mapa-config.js.');
  const hojas = await leerPlanilla(m[1], fetch);
  validar(hojas);
  writeFileSync(SALIDA, armarArchivo(hojas, new Date().toISOString()));
  console.log('Copia de la planilla: ' + Object.entries(hojas).map(([k, v]) => `${k} ${v.length}`).join(', ') + '.');
} catch (e) {
  console.error('No se pudo copiar la planilla:', e.message);
  process.exit(1);
}
