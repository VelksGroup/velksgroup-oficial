const fs = require('fs');
const file = 'src/components/SolutionSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="py-32 px-4 bg-obsidian relative overflow-hidden"/,
  'className="py-16 md:py-24 px-4 bg-obsidian relative overflow-hidden"'
);

const oldGeometry = `      {/* Cinematic Transition to Block 4 */}
      <div className="w-full h-[80px] mt-8 flex items-center justify-center relative z-10 overflow-hidden">
        {/* Converging Lines based on scroll */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale: useTransform(scrollYProgress, [0.8, 1], [1.5, 1]) }}
        >
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent absolute left-1/2 -translate-x-1/2 rotate-45 transform origin-center" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent absolute left-1/2 -translate-x-1/2 -rotate-45 transform origin-center" />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent absolute top-1/2 -translate-y-1/2" />
        </motion.div>
        
        {/* Portal Core */}
        <motion.div 
          className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center relative"
          style={{ 
            scale: useTransform(scrollYProgress, [0.8, 1], [0.5, 1.2]),
            opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
            rotate: useTransform(scrollYProgress, [0.8, 1], [0, 90])
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gold/5 blur-md" />
          <div className="w-8 h-8 rounded-full border border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
          <div className="w-2 h-2 bg-gold rounded-full absolute shadow-[0_0_10px_rgba(212,175,55,1)]" />
        </motion.div>

        {/* Dynamic Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{
                left: \`\${50 + (Math.random() * 40 - 20)}%\`,
                top: \`\${50 + (Math.random() * 40 - 20)}%\`,
                scale: useTransform(scrollYProgress, [0.8, 1], [0, Math.random() * 1.5 + 0.5])
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>`;

const newGeometry = `      {/* Minimal Premium Transition */}
      <div className="w-full mt-16 md:mt-24 flex items-center justify-center relative z-10">
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border border-gold/40 bg-obsidian z-10 flex items-center justify-center">
            <div className="w-1 h-1 bg-gold rounded-full" />
          </div>
        </div>
      </div>`;

content = content.replace(oldGeometry, newGeometry);

fs.writeFileSync(file, content);
console.log('Done replacing');
