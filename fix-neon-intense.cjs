const fs = require('fs');

const problemFile = 'src/components/ProblemSection.tsx';
let problemContent = fs.readFileSync(problemFile, 'utf8');

// Make the neon even more intense
problemContent = problemContent.replace(
  /bg-gradient-to-b from-transparent via-red-500\/60 to-red-500 relative/g,
  'bg-gradient-to-b from-transparent via-red-500/80 to-red-500 relative shadow-[0_0_20px_rgba(239,68,68,0.5)]'
);

problemContent = problemContent.replace(
  /shadow-\[0_0_15px_rgba\(239,68,68,1\),0_0_30px_rgba\(239,68,68,0\.8\)\]/g,
  'shadow-[0_0_20px_rgba(239,68,68,1),0_0_40px_rgba(239,68,68,1)]'
);

problemContent = problemContent.replace(
  /drop-shadow-\[0_0_10px_rgba\(239,68,68,0\.8\)\]/g,
  'drop-shadow-[0_0_15px_rgba(239,68,68,1)]'
);

// We can also increase spacing even more
problemContent = problemContent.replace(
  /className="pt-12 pb-16 md:pb-24 px-4 bg-obsidian-dark relative overflow-hidden"/g,
  'className="pt-12 pb-24 md:pb-32 px-4 bg-obsidian-dark relative overflow-hidden"'
);

fs.writeFileSync(problemFile, problemContent);

const solutionFile = 'src/components/SolutionSection.tsx';
let solutionContent = fs.readFileSync(solutionFile, 'utf8');

solutionContent = solutionContent.replace(
  /className="pt-16 pb-16 md:pt-24 md:pb-24 px-4 bg-obsidian relative overflow-hidden"/g,
  'className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-obsidian relative overflow-hidden"'
);

fs.writeFileSync(solutionFile, solutionContent);
console.log('done intensifying neon and spacing');
