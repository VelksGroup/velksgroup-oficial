const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

// The line we want to replace:
// <div className="flex items-start gap-5 relative z-10">
// and
// className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30"

code = code.replace(
  '<div className="flex items-start gap-5 relative z-10">',
  '<div className="flex items-center gap-5 relative z-10">'
);

code = code.replace(
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30"',
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30 -translate-y-5"'
);

fs.writeFileSync('src/components/WidgetSection.tsx', code);
console.log("Successfully adjusted the success icon.");
