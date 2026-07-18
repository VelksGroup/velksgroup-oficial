const fs = require('fs');
let code = fs.readFileSync('src/components/TestimonialsSection.tsx', 'utf8');

code = code.replace(
  "(currentLang === 'pt' ? 'DEPOIMENTOS REAIS VERIFICADOS' : 'REAL INDEPENDENT VERIFICATION')",
  "(currentLang === 'pt' ? 'DEPOIMENTOS VERIFICADOS' : 'INDEPENDENT VERIFICATION')"
);

fs.writeFileSync('src/components/TestimonialsSection.tsx', code);
console.log("Fixed testimonials text 2.");
