const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

code = code.replace(
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30"',
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30 -translate-y-5"'
);

fs.writeFileSync('src/components/WidgetSection.tsx', code);
console.log("Re-added translate-y-5.");
