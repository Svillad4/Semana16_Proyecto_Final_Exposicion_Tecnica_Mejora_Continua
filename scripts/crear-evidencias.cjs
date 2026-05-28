const fs = require('fs');
const path = require('path');

const folders = [
  'evidencias/proyecto-funcionando',
  'evidencias/consola',
  'evidencias/json-server',
  'evidencias/responsive',
  'evidencias/pruebas',
  'evidencias/exposicion'
];

folders.forEach((folder) => {
  fs.mkdirSync(path.join(__dirname, '..', folder), { recursive: true });
});

console.log('Carpetas de evidencias verificadas o creadas.');
