const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /style=\{\{ willChange: "transform", transform: "translateZ\(0\)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" \}\} style=\{\{ willChange: "transform", transform: "translateZ\(0\)", WebkitBackfaceVisibility: "hidden" \}\}/g,
  'style={{ willChange: "transform", transform: "translateZ(0)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}'
);

fs.writeFileSync(file, content);
console.log('Fixed duplicate style');
