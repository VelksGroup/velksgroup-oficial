const fs = require('fs');

const file = 'src/components/WidgetSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldGeom = `        {/* Gold Downwards Scroll Geometry */}
        <div className="w-full flex flex-col justify-center items-center relative z-20 mb-4 mt-0">
          <div className="h-16 w-[2px] bg-gradient-to-b from-transparent via-gold/40 to-gold relative">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
            />
          </div>
          <motion.div 
            className="w-3 h-3 border-b-2 border-r-2 border-gold rotate-45 -mt-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>`;

const newGeom = `        {/* Gold Downwards Arrow Only */}
        <div className="w-full flex flex-col justify-center items-center relative z-20 mb-4 h-16">
          <motion.div 
            className="w-4 h-4 border-b-2 border-r-2 border-gold rotate-45"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>`;

content = content.replace(oldGeom, newGeom);

fs.writeFileSync(file, content);
console.log('done fixing arrow');
