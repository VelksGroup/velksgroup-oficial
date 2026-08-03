const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
const lines = content.split('\n');
let i = lines.findIndex(l => l.includes('Legal / Founder Section'));
for (let j = i - 2; j < i + 4; j++) {
  console.log(j + ': ' + lines[j]);
}
