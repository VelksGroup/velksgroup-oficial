const fs = require('fs');

const file = 'src/components/AIVisionSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldBg = `      {/* Parallax background glows (Cinematic AI Feel) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-spin-slow mix-blend-screen" />
      </motion.div>`;

const newBg = `      {/* V-AI Geometric Parallax Background (Like Hero) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[180px]" />
        
        {/* Giant V Geometry Wireframe */}
        <motion.div 
          className="absolute opacity-10 mix-blend-screen"
          animate={{ rotateZ: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        >
          <svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="600" cy="600" r="400" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 20" />
            <circle cx="600" cy="600" r="550" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5 30" opacity="0.5" />
            <path d="M 200 300 L 600 900 L 1000 300" stroke="#D4AF37" strokeWidth="4" />
            <path d="M 300 400 L 600 850 L 900 400" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />
            <path d="M 600 100 L 600 1100" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 10" />
            <path d="M 100 600 L 1100 600" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 10" />
          </svg>
        </motion.div>

        {/* Counter-rotating Orbital Rings */}
        <motion.div 
          className="absolute opacity-[0.07] mix-blend-screen"
          animate={{ rotateZ: -360, scale: [1, 1.05, 1] }}
          transition={{ rotateZ: { duration: 100, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
        >
          <svg width="1400" height="1400" viewBox="0 0 1400 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="700" cy="700" r="600" stroke="#D4AF37" strokeWidth="3" strokeDasharray="100 50" />
            <circle cx="700" cy="700" r="650" stroke="#D4AF37" strokeWidth="1" strokeDasharray="20 40" />
            <polygon points="700,100 1300,1000 100,1000" stroke="#D4AF37" strokeWidth="2" opacity="0.3" />
          </svg>
        </motion.div>

      </motion.div>`;

content = content.replace(oldBg, newBg);

fs.writeFileSync(file, content);
console.log('done fixing AIVision BG');
