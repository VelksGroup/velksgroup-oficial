const fs = require('fs');
const file = 'src/components/WidgetSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<div className="w-full flex flex-col justify-center items-center relative z-20 mb-8 mt-2">/,
  '<div className="w-full flex flex-col justify-center items-center relative z-20 mb-4 mt-0">'
);
content = content.replace(
  /<div className="text-center max-w-3xl mx-auto mb-10 flex flex-col gap-4 items-center">/,
  '<div className="text-center max-w-3xl mx-auto mb-8 flex flex-col gap-4 items-center">'
);

fs.writeFileSync(file, content);
console.log('done fixing margin');
