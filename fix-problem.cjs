const fs = require('fs');
const file = 'src/components/ProblemSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="py-24 px-4 bg-obsidian-dark relative overflow-hidden"/,
  'className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 bg-obsidian-dark relative overflow-hidden"'
);

const oldGeometry = `      {/* Separator to Gold (Next Section Transition) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-obsidian pointer-events-none z-20 flex justify-center items-end pb-8">
        <div className="w-px h-16 bg-gradient-to-b from-red-500/50 to-gold/50 mx-auto" />
      </div>`;

const newGeometry = `      {/* Minimal Premium Transition */}
      <div className="w-full mt-12 md:mt-16 flex items-center justify-center relative z-20">
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border-b border-r border-red-500/50 rotate-45 flex items-center justify-center pointer-events-none bg-obsidian-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] pointer-events-none" />
        </div>
      </div>`;

content = content.replace(oldGeometry, newGeometry);

fs.writeFileSync(file, content);
console.log('Done replacing problem section geometry');
