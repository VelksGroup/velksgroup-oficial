const fs = require('fs');
let code = fs.readFileSync('src/translations.ts', 'utf8');

code = code.replace(
  'title: "Transparent Pricing. Zero Surprises."',
  'title: "No Monthly Fees. Zero Surprises. Just Results."'
);

code = code.replace(
  'subtitle: "One-time payment. No forced monthly fees, no hidden charges. Pure return on investment."',
  'subtitle: "We don\'t sell websites. We build digital machines engineered to generate real results."'
);

fs.writeFileSync('src/translations.ts', code);
console.log("English translations updated.");
