const fs = require('fs');
const file = 'src/components/WidgetSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Red Scroll Geometry to Gold
content = content.replace(
  /\{\/\* Red Downwards Scroll Geometry \*\/\}/g,
  '{/* Gold Downwards Scroll Geometry */}'
);
content = content.replace(
  /via-red-500\/40 to-red-500/g,
  'via-gold/40 to-gold'
);
content = content.replace(
  /bg-red-500 rounded-full shadow-\[0_0_10px_rgba\(239,68,68,1\)\]/g,
  'bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]'
);
content = content.replace(
  /border-red-500 rotate-45/g,
  'border-gold rotate-45'
);

// Replace Badge back to Gold
content = content.replace(
  /text-red-500 font-bold px-4 py-1\.5 rounded-full border border-red-500\/20 bg-red-500\/5 backdrop-blur-md shadow-\[0_0_15px_rgba\(239,68,68,0\.2\)\]/g,
  'text-gold font-bold px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]'
);

fs.writeFileSync(file, content);
console.log('done fixing gold');
