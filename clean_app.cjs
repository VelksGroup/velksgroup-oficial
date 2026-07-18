const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Also remove `import { WidgetSection } from ...` if it's not there, add it
if (!code.includes("import { WidgetSection }")) {
  code = code.replace("import { AuthoritySection } from './components/AuthoritySection';", "import { AuthoritySection } from './components/AuthoritySection';\nimport { WidgetSection } from './components/WidgetSection';");
}

// Remove botPresets block
const botPresetsStart = code.indexOf("const botPresets = {");
if (botPresetsStart !== -1) {
  let bracesCount = 0;
  let botPresetsEnd = botPresetsStart;
  let started = false;
  for (let i = botPresetsStart; i < code.length; i++) {
    if (code[i] === '{') {
      bracesCount++;
      started = true;
    } else if (code[i] === '}') {
      bracesCount--;
    }
    if (started && bracesCount === 0) {
      botPresetsEnd = i + 1;
      break;
    }
  }
  code = code.substring(0, botPresetsStart) + code.substring(botPresetsEnd);
}

fs.writeFileSync('src/App.tsx', code);
console.log("Cleaned up App.tsx");
