const fs = require('fs');
let code = fs.readFileSync('src/components/SolutionSection.tsx', 'utf8');

const targetToRemove = `{/* Separator / Footer of the section */}
      <motion.div style={{ y: yLogo }} className="w-full mt-32 flex justify-center opacity-40 hover:opacity-100 transition-opacity duration-700 relative z-10">
        <div className="relative w-16 h-16 flex items-center justify-center drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          <img src="/logo-oficial.png" alt="VELKS Logo" className="w-full h-full object-contain" />
        </div>
      </motion.div>`;

const replacement = `{/* Cinematic Transition to Block 4 */}
      <div className="w-full h-[200px] mt-16 flex items-center justify-center relative z-10 overflow-hidden">
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

code = code.replace(targetToRemove, replacement);
fs.writeFileSync('src/components/SolutionSection.tsx', code);
