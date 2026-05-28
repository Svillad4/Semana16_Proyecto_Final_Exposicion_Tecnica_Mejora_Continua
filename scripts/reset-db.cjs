const fs = require('fs');
const path = require('path');

const seed = path.join(__dirname, 'db.seed.json');
const target = path.join(__dirname, '..', 'db.json');

fs.copyFileSync(seed, target);
console.log('Base de datos restaurada desde scripts/db.seed.json');
