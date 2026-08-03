const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
const lines = content.split('\n');
let i = lines.findIndex(l => l.includes('PORTUGAL • LUXEMBURGO'));
for (let j = i - 2; j < i + 10; j++) {
  console.log(j + ': ' + lines[j]);
}
