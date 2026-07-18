const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/onClick=\{\(\) => handleWhatsAppClick\(\`Olá! Gostaria de ver o exemplo de demonstração real para \$\{demo\.title\}\`\)\}/g, "onClick={() => handleWhatsAppClick(t.demos.demoTracking.replace('{demoTitle}', demo.title))}");
fs.writeFileSync('src/App.tsx', content, 'utf8');
