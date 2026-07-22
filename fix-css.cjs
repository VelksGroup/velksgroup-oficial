const fs = require('fs');

const file = 'src/index.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /\.animate-aurora \{/g,
  ".animate-aurora {\n  will-change: transform;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;"
);

content = content.replace(
  /\.animate-aurora-slow \{/g,
  ".animate-aurora-slow {\n  will-change: transform;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;"
);

content = content.replace(
  /\.animate-light-beam \{/g,
  ".animate-light-beam {\n  will-change: transform;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;"
);

content = content.replace(
  /\.animate-light-beam-delayed \{/g,
  ".animate-light-beam-delayed {\n  will-change: transform;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;"
);

fs.writeFileSync(file, content);
console.log('Fixed CSS hardware acceleration');
