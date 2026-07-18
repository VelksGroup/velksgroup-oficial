const fs = require('fs');
const appFile = fs.readFileSync('src/App.tsx', 'utf8');

const botPresetsStart = appFile.indexOf("const botPresets = {");
// Find the end of botPresets
let bracesCount = 0;
let botPresetsEnd = botPresetsStart;
let started = false;
for (let i = botPresetsStart; i < appFile.length; i++) {
  if (appFile[i] === '{') {
    bracesCount++;
    started = true;
  } else if (appFile[i] === '}') {
    bracesCount--;
  }
  if (started && bracesCount === 0) {
    botPresetsEnd = i + 1;
    break;
  }
}

const botPresetsCode = appFile.substring(botPresetsStart, botPresetsEnd) + ";";

fs.writeFileSync('src/botPresets.ts', "export " + botPresetsCode);
