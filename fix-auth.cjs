const fs = require('fs');

const file = 'src/components/AuthoritySection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="py-32 px-4 bg-obsidian-light relative overflow-hidden"/,
  'className="pt-16 pb-8 md:pt-24 md:pb-12 px-4 bg-obsidian-light relative overflow-hidden"'
);

fs.writeFileSync(file, content);
console.log('done fixing auth');
