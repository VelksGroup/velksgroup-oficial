const fs = require('fs');

const file = 'src/components/CTACanvasParticles.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\\`rgba\\(\\$\\{p\.color\\}, \\$\\{p\.alpha\\}\\)\\`/g, "\`rgba(\${p.color}, \${p.alpha})\`");
content = content.replace(/\\`rgba\\(\\$\\{p\.color\\}, \\$\\{p\.alpha \\* 1\\.5\\}\\)\\`/g, "\`rgba(\${p.color}, \${p.alpha * 1.5})\`");
content = content.replace(/\\`rgba\\(212, 175, 55, \\$\\{opacity\\}\\)\\`/g, "\`rgba(212, 175, 55, \${opacity})\`");


fs.writeFileSync(file, content);
console.log('done fixing template literals');
