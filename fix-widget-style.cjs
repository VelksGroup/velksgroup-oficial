const fs = require('fs');
const file = 'src/components/WidgetSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<motion\.div \n\s+className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-\[800px\] h-\[800px\] rounded-full blur-\[120px\] mix-blend-screen opacity-50"[\s\S]*?\/>/g,
  `<motion.div \n          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen opacity-50"\n          style={{ y: yParallaxSlow, willChange: 'transform', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', background: 'radial-gradient(circle, rgba(14,24,43,0.8) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)' }}\n        />`
);

fs.writeFileSync(file, content);
console.log('Fixed Widget style');
