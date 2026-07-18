const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

code = code.replace(
  `style={{ y: yParallaxSlow }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(14,24,43,0.8) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)'
          }}`,
  `className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen opacity-50"
          style={{
            y: yParallaxSlow,
            background: 'radial-gradient(circle, rgba(14,24,43,0.8) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)'
          }}`
);
fs.writeFileSync('src/components/WidgetSection.tsx', code);
