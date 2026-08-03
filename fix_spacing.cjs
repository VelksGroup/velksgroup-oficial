const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '              {/* Velks Operational Network */}\n              <div className="mt-6 flex flex-col gap-4 text-xs font-light">',
  '              {/* Velks Operational Network */}\n              <div className="mt-10 flex flex-col gap-4 text-xs font-light">'
);

fs.writeFileSync(file, content);
console.log('Update successful');
