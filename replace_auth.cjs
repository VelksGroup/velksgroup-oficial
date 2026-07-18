const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const startStr = "{/* BLOCO 4 - AUTORIDADE LUXEMBURGO, ESPANHA, PORTUGAL */}";
const endStr = "</section>\n\n      {/* BLOCO 5 - WIDGET INTELIGENTE (ATENDIMENTO AUTOMÁTICO 24H) */}";

const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const target = code.substring(startIndex, endIndex + "</section>".length);
  const replacement = `{/* BLOCO 4 - AUTORIDADE LUXEMBURGO, ESPANHA, PORTUGAL */}\n      <AuthoritySection t={t} currentLang={currentLang} />`;
  code = code.replace(target, replacement);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Replaced block 4 successfully.");
} else {
  console.log("Could not find block 4.", startIndex, endIndex);
}
