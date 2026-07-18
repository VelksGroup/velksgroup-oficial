const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

code = code.replace(
  `left: \`\${Math.random() * 100}%\`,
              top: \`\${Math.random() * 100}%\`,`,
  `left: \`\${(i * 17) % 100}%\`,
              top: \`\${(i * 23) % 100}%\`,`
);
code = code.replace(
  `duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5`,
  `duration: 10 + (i % 5) * 2,
              repeat: Infinity,
              ease: "linear",
              delay: (i % 3) * 1.5`
);

fs.writeFileSync('src/components/WidgetSection.tsx', code);
