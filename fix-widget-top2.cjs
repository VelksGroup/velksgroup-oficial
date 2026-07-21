const fs = require('fs');

const file = 'src/components/WidgetSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldGeometry = `        {/* Scroll indicator geometry */}
        <div className="w-full flex justify-center items-center relative z-20 mb-8 md:mb-12">
          <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent relative">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,1)]"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-6 items-center">`;

const newGeometry = `        {/* Minimal Scroll indicator geometry */}
        <div className="w-full flex justify-center items-center relative z-20 mb-6">
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent relative">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,1)]"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col gap-4 items-center">`;

content = content.replace(oldGeometry, newGeometry);

fs.writeFileSync(file, content);
console.log('done fixing widget top2');
