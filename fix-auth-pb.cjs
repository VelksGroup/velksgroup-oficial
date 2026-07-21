const fs = require('fs');

const authFile = 'src/components/AuthoritySection.tsx';
let authContent = fs.readFileSync(authFile, 'utf8');
authContent = authContent.replace(
  /className="pt-16 pb-2 md:pt-24 md:pb-4 px-4 bg-obsidian-light relative overflow-hidden"/,
  'className="pt-16 pb-0 md:pt-24 md:pb-0 px-4 bg-obsidian-light relative overflow-hidden"'
);
fs.writeFileSync(authFile, authContent);
console.log('done padding');
