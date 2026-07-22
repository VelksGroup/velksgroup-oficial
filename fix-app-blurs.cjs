const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /blur-\[([0-9]+)px\] pointer-events-none"/g,
  'blur-[$1px] pointer-events-none" style={{ willChange: "transform", transform: "translateZ(0)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}'
);

fs.writeFileSync(file, content);
console.log('Fixed App blurs');
