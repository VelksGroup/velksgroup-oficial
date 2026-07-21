const fs = require('fs');

// 1. Fix AuthoritySection padding
const authFile = 'src/components/AuthoritySection.tsx';
let authContent = fs.readFileSync(authFile, 'utf8');
authContent = authContent.replace(
  /className="pt-16 pb-8 md:pt-24 md:pb-12 px-4 bg-obsidian-light relative overflow-hidden"/,
  'className="pt-16 pb-2 md:pt-24 md:pb-4 px-4 bg-obsidian-light relative overflow-hidden"'
);
fs.writeFileSync(authFile, authContent);

// 2. Fix WidgetSection
const widgetFile = 'src/components/WidgetSection.tsx';
let widgetContent = fs.readFileSync(widgetFile, 'utf8');

// Padding
widgetContent = widgetContent.replace(
  /className="pt-2 pb-16 md:pb-24 px-4 bg-obsidian relative overflow-hidden"/,
  'className="pt-0 pb-16 md:pb-24 px-4 bg-obsidian relative overflow-hidden"'
);

// Geometry
const oldGeometry = `        {/* Minimal Scroll indicator geometry */}
        <div className="w-full flex justify-center items-center relative z-20 mb-6">
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent relative">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,1)]"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>`;

const newGeometry = `        {/* Red Downwards Scroll Geometry */}
        <div className="w-full flex flex-col justify-center items-center relative z-20 mb-8 mt-2">
          <div className="h-16 w-[2px] bg-gradient-to-b from-transparent via-red-500/40 to-red-500 relative">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,1)]"
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
            />
          </div>
          <motion.div 
            className="w-3 h-3 border-b-2 border-r-2 border-red-500 rotate-45 -mt-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>`;

widgetContent = widgetContent.replace(oldGeometry, newGeometry);

// I will also change the badge color from gold to red to match the geometry seamlessly
widgetContent = widgetContent.replace(
  /className="text-\[10px\] sm:text-xs font-mono uppercase tracking-\[4px\] text-gold font-bold px-4 py-1.5 rounded-full border border-gold\/20 bg-gold\/5 backdrop-blur-md shadow-\[0_0_15px_rgba\(212,175,55,0.15\)\]"/,
  'className="text-[10px] sm:text-xs font-mono uppercase tracking-[4px] text-red-500 font-bold px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]"'
);

fs.writeFileSync(widgetFile, widgetContent);
console.log('done fixing widget scroll and badge');
