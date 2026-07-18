const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

// Replace overflow-hidden on the main card with increased padding
code = code.replace(
  'className="w-full max-w-[650px] mx-auto mt-4 p-6 rounded-2xl bg-[#0b0b0d]/60 backdrop-blur-xl border border-green-500/30 relative overflow-hidden shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex flex-col gap-4"',
  'className="w-full max-w-[650px] mx-auto mt-4 px-6 pt-6 pb-10 rounded-2xl bg-[#0b0b0d]/60 backdrop-blur-xl border border-green-500/30 relative shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex flex-col gap-4"'
);

// Add overflow-hidden and rounded-2xl to the progress bar so it respects borders
code = code.replace(
  'className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500/50 to-green-400"',
  'className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500/50 to-green-400 rounded-tl-2xl rounded-tr-2xl"'
);

// Remove the negative translation and just keep it items-center
code = code.replace(
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30 -translate-y-4"',
  'className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30"'
);

fs.writeFileSync('src/components/WidgetSection.tsx', code);
console.log("Fixed card padding and overflow.");
