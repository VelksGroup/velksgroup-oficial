const fs = require('fs');

const file = 'src/components/PricingSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="absolute inset-0 w-full h-full pointer-events-none opacity-100 mix-blend-screen"/g,
  `className="absolute inset-0 w-full h-full pointer-events-none opacity-100 mix-blend-screen" style={{ willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}`
);

content = content.replace(
  /className="absolute inset-0 bg-\[url\('https:\/\/www\.transparenttextures\.com\/patterns\/stardust\.png'\)\] opacity-10 mix-blend-overlay pointer-events-none" \/>/g,
  `className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} />`
);

content = content.replace(
  /className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none mix-blend-screen opacity-40">/g,
  `className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none mix-blend-screen opacity-40" style={{ willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}>`
);

fs.writeFileSync(file, content);
console.log('Fixed Pricing GPU');
