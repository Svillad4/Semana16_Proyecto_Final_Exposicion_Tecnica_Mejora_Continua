import fs from 'node:fs';
import path from 'node:path';

const requiredPaths = [
  'README.md',
  'README_ENTREGA.md',
  'package.json',
  'db.json',
  'index.html',
  'src/js/app.js',
  'src/js/api.js',
  'src/js/validaciones.js',
  'src/css/styles.css',
  'docs/01-guion-exposicion.md',
  'docs/02-decisiones-tecnicas.md',
  'docs/03-plan-mejora-continua.md',
  'docs/04-checklist-final.md',
  'docs/05-informe-ajustes-finales.md',
  'docs/06-guia-evidencias.md',
  'docs/07-preguntas-defensa-proyecto.md',
  'docs/08-rubrica.md',
  'docs/09-glosario-tecnico.md',
  'evidencias/proyecto-funcionando',
  'evidencias/consola',
  'evidencias/json-server',
  'evidencias/responsive',
  'evidencias/pruebas',
  'evidencias/exposicion'
];

let hasError = false;
console.log('\nRevision del proyecto Semana 16\n');

for (const item of requiredPaths) {
  const exists = fs.existsSync(path.resolve(item));
  console.log(`${exists ? 'OK   ' : 'FALTA'} ${item}`);
  if (!exists) hasError = true;
}

console.log('\nRecuerda: este script revisa estructura minima. Tambien debes probar el proyecto en navegador y tomar evidencias.\n');

if (hasError) process.exit(1);
