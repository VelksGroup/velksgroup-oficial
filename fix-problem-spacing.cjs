const fs = require('fs');
const file = 'src/components/ProblemSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 bg-obsidian-dark relative overflow-hidden"/,
  'className="pt-12 pb-4 px-4 bg-obsidian-dark relative overflow-hidden"'
);

content = content.replace(
  /<div className="w-full mt-12 md:mt-16 flex items-center justify-center relative z-20">/,
  '<div className="w-full mt-4 flex items-center justify-center relative z-20">'
);

fs.writeFileSync(file, content);
console.log('done fixing problem spacing');
