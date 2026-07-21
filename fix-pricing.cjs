const fs = require('fs');

const file = 'src/components/PricingSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<span className="text-xs text-gray-500 font-mono tracking-\[0\.15em\] uppercase">A partir de<\/span>/,
  `<span className="text-xs text-gray-500 font-mono tracking-[0.15em] uppercase">{currentLang === 'pt' ? 'A partir de' : currentLang === 'es' ? 'A partir de' : currentLang === 'it' ? 'A partire da' : currentLang === 'fr' ? 'À partir de' : currentLang === 'de' ? 'Ab' : 'Starting from'}</span>`
);

content = content.replace(
  /\{plan\.price !== 'Sob Consulta' \? <AnimatedNumber value=\{plan\.price\} \/> : plan\.price\}/,
  `{plan.price.includes('€') ? <AnimatedNumber value={plan.price} /> : plan.price}`
);

fs.writeFileSync(file, content);
console.log('done fixing pricing');
