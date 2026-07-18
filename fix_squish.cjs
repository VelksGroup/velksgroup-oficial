const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

// Add shrink-0 and increase bottom padding
code = code.replace(
  'className="w-full max-w-[650px] mx-auto mt-4 px-6 pt-6 pb-10 rounded-2xl bg-[#0b0b0d]/60 backdrop-blur-xl border border-green-500/30 relative shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex flex-col gap-4"',
  'className="w-full max-w-[650px] mx-auto mt-4 px-6 pt-6 pb-12 rounded-2xl bg-[#0b0b0d]/60 backdrop-blur-xl border border-green-500/30 relative shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex flex-col gap-4 shrink-0 overflow-visible"'
);

// Remove the -translate-y-5 as it's a hack for the squish issue
code = code.replace(
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30 -translate-y-5"',
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30"'
);

fs.writeFileSync('src/components/WidgetSection.tsx', code);
console.log("Fixed flex squish and padding");
