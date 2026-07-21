const fs = require('fs');

const problemFile = 'src/components/ProblemSection.tsx';
let problemContent = fs.readFileSync(problemFile, 'utf8');

// Reduce bottom padding
problemContent = problemContent.replace(
  /className="pt-12 pb-24 md:pb-32 px-4 bg-obsidian-dark relative overflow-hidden"/g,
  'className="pt-12 pb-12 md:pb-16 px-4 bg-obsidian-dark relative overflow-hidden"'
);

// Reduce margin top for geometry
problemContent = problemContent.replace(
  /<div className="w-full mt-16 md:mt-24 mb-4 flex flex-col items-center justify-center relative z-20">/g,
  '<div className="w-full mt-10 md:mt-14 mb-0 flex flex-col items-center justify-center relative z-20">'
);

fs.writeFileSync(problemFile, problemContent);

const solutionFile = 'src/components/SolutionSection.tsx';
let solutionContent = fs.readFileSync(solutionFile, 'utf8');

// Reduce top padding
solutionContent = solutionContent.replace(
  /className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-obsidian relative overflow-hidden"/g,
  'className="pt-12 pb-16 md:pt-16 md:pb-24 px-4 bg-obsidian relative overflow-hidden"'
);

fs.writeFileSync(solutionFile, solutionContent);
console.log('done fixing proportional spacing');
