const fs = require('fs');
const file = 'src/components/SolutionSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="py-16 md:py-24 px-4 bg-obsidian relative overflow-hidden"/,
  'className="pt-4 pb-16 md:pt-8 md:pb-24 px-4 bg-obsidian relative overflow-hidden"'
);

content = content.replace(
  /<div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6 items-center">/,
  '<div className="text-center max-w-3xl mx-auto mb-10 flex flex-col gap-4 items-center">'
);

fs.writeFileSync(file, content);
console.log('done fixing solution spacing');
