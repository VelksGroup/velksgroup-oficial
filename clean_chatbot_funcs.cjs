const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const startStr = "// Chatbot state machine presets";
const endStr = "  // Smooth scroll handler helper";

const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + code.substring(endIndex);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Cleaned chatbot functions.");
} else {
  console.log("Could not find blocks.");
}
