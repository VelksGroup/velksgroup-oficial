const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "initial={{ y: -50, x: (Math.random() - 0.5) * 100, opacity: 0 }}",
  "initial={{ y: -50, x: (i - 2.5) * 20, opacity: 0 }}"
);

fs.writeFileSync('src/App.tsx', code);
