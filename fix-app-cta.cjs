const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Insert import
content = content.replace(
  "import { AIVisionSection } from './components/AIVisionSection';",
  "import { AIVisionSection } from './components/AIVisionSection';\nimport { CTACanvasParticles } from './components/CTACanvasParticles';"
);

// Insert component
const oldBlock = `{/* Abstract volumetric glowing rays background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />`;

const newBlock = `{/* High-Performance Canvas Particles (Neural Net / Gold Dust) */}
        <CTACanvasParticles />
        
        {/* Abstract volumetric glowing rays background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />`;

content = content.replace(oldBlock, newBlock);

fs.writeFileSync(file, content);
console.log('done updating App.tsx with CTACanvasParticles');
