const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const startStr = "{/* BLOCO 5 - WIDGET INTELIGENTE (ATENDIMENTO AUTOMÁTICO 24H) */}";
const endStr = "</section>\n\n      {/* BLOCO 6 - PROVA SOCIAL (TESTIMONIALS) */}";

const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const target = code.substring(startIndex, endIndex + "</section>".length);
  const replacement = `{/* BLOCO 5 - WIDGET INTELIGENTE (ATENDIMENTO AUTOMÁTICO 24H) */}\n      <WidgetSection t={t} currentLang={currentLang} widgetRef={widgetRef} />`;
  code = code.replace(target, replacement);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Replaced block 5 successfully.");
} else {
  console.log("Could not find block 5.", startIndex, endIndex);
}
