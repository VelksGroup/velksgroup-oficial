const fs = require('fs');

const file = 'src/components/TestimonialsSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `              {(currentLang === 'pt' ? 'DEPOIMENTOS VERIFICADOS' : currentLang === 'es' ? 'TESTIMONIOS VERIFICADOS' : currentLang === 'it' ? 'TESTIMONIANZE VERIFICATE' : currentLang === 'fr' ? 'TÉMOIGNAGES VÉRIFIÉS' : currentLang === 'de' ? 'GEPRÜFTE BEWERTUNGEN' : 'INDEPENDENT VERIFICATION').split('').map((char, index) => (`;

const regex = /\{\(currentLang === 'pt' \? 'DEPOIMENTOS VERIFICADOS' : 'INDEPENDENT VERIFICATION'\)\.split\(''\)\.map\(\(char, index\) => \(/;

content = content.replace(regex, replacement);
fs.writeFileSync(file, content);
console.log('done fixing testimonials');
