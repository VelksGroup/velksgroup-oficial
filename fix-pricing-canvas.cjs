const fs = require('fs');
const file = 'src/components/PricingSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /let height = window\.innerHeight \* 2\.5; \/\/ Taller to ensure full coverage\n\s+canvas\.width = width;\n\s+canvas\.height = height;/g,
  `let height = canvas.parentElement?.clientHeight || window.innerHeight;\n    canvas.width = width;\n    canvas.height = height;`
);

content = content.replace(
  /const onResize = \(\) => \{\n\s+if \(Math\.abs\(width - window\.innerWidth\) > 10\) \{\n\s+width = window\.innerWidth;\n\s+height = window\.innerHeight \* 2\.5;\n\s+canvas\.width = width;\n\s+canvas\.height = height;\n\s+createParticles\(\);\n\s+\}\n\s+\};/g,
  `const onResize = () => {\n      if (Math.abs(width - window.innerWidth) > 10) {\n        width = window.innerWidth;\n        height = canvas.parentElement?.clientHeight || window.innerHeight;\n        canvas.width = width;\n        canvas.height = height;\n        createParticles();\n      }\n    };`
);

fs.writeFileSync(file, content);
console.log('Fixed PricingCanvas height');
