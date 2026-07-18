const fs = require('fs');
let code = fs.readFileSync('src/components/PricingSection.tsx', 'utf8');

const targetSpan = `<span className="text-[10px] sm:text-xs font-mono text-gold font-bold uppercase tracking-widest text-center">`;
const newSpan = `<span className="text-[clamp(8px,2.5vw,12px)] font-mono text-gold font-bold uppercase tracking-widest sm:tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis text-center">`;

code = code.replace(targetSpan, newSpan);

fs.writeFileSync('src/components/PricingSection.tsx', code);
console.log("Pill text fixed.");
