const fs = require('fs');

let file = 'src/components/CTACanvasParticles.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /className="absolute inset-0 w-full h-full pointer-events-none opacity-100 mix-blend-screen"/g,
  `className="absolute inset-0 w-full h-full pointer-events-none opacity-100 mix-blend-screen" style={{ willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}`
);
fs.writeFileSync(file, content);

file = 'src/components/WidgetSection.tsx';
content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-\[800px\] h-\[800px\] rounded-full blur-\[120px\] mix-blend-screen opacity-50"/g,
  `className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen opacity-50"\n            style={{ willChange: "transform", transform: "translateZ(0)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", y: yParallaxSlow, background: 'radial-gradient(circle, rgba(14,24,43,0.8) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)' }}`
);
content = content.replace(/style=\{\{ \\n              willChange: "transform", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", \\n              y: yParallaxSlow,\\n              background: 'radial-gradient\\(circle, rgba\\(14,24,43,0\.8\\) 0%, rgba\\(212,175,55,0\.1\\) 40%, transparent 70%\\)'\}\}/g, '');
fs.writeFileSync(file, content);

file = 'src/components/ProblemSection.tsx';
content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /className="absolute top-0 left-1\/4 w-96 h-96 bg-red-900\/20 rounded-full blur-\[120px\] pointer-events-none mix-blend-screen animate-pulse-slow" \/>/g,
  `className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" style={{ willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} />`
);
fs.writeFileSync(file, content);

file = 'src/App.tsx';
content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /className="absolute inset-0 bg-\[url\('https:\/\/www\.transparenttextures\.com\/patterns\/carbon-fibre\.png'\)\] opacity-10 mix-blend-overlay pointer-events-none" \/>/g,
  `className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} />`
);
fs.writeFileSync(file, content);

console.log('Fixed more GPU');
