const fs = require('fs');

const problemFile = 'src/components/ProblemSection.tsx';
let problemContent = fs.readFileSync(problemFile, 'utf8');

// 1. Padding
problemContent = problemContent.replace(
  /className="pt-12 pb-4 px-4 bg-obsidian-dark relative overflow-hidden"/,
  'className="pt-12 pb-16 md:pb-24 px-4 bg-obsidian-dark relative overflow-hidden"'
);

// 2. Geometry
const oldGeom = `      {/* Minimal Premium Transition */}
      <div className="w-full mt-4 flex items-center justify-center relative z-20">
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border-b border-r border-red-500/50 rotate-45 flex items-center justify-center pointer-events-none bg-obsidian-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] pointer-events-none" />
        </div>
      </div>`;

const newGeom = `      {/* Neon Scroll Down Geometry */}
      <div className="w-full mt-16 md:mt-24 mb-4 flex flex-col items-center justify-center relative z-20">
        <div className="h-24 md:h-32 w-[2px] bg-gradient-to-b from-transparent via-red-500/60 to-red-500 relative">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1),0_0_30px_rgba(239,68,68,0.8)]"
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
          />
        </div>
        <motion.div 
          className="w-4 h-4 border-b-[3px] border-r-[3px] border-red-500 rotate-45 -mt-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>`;

problemContent = problemContent.replace(oldGeom, newGeom);

fs.writeFileSync(problemFile, problemContent);

const solutionFile = 'src/components/SolutionSection.tsx';
let solutionContent = fs.readFileSync(solutionFile, 'utf8');

solutionContent = solutionContent.replace(
  /className="pt-4 pb-16 md:pt-8 md:pb-24 px-4 bg-obsidian relative overflow-hidden"/,
  'className="pt-16 pb-16 md:pt-24 md:pb-24 px-4 bg-obsidian relative overflow-hidden"'
);

fs.writeFileSync(solutionFile, solutionContent);

console.log('done fixing problem/solution space');
