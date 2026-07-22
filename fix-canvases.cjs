const fs = require('fs');

function fixCanvas(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /const onResize = \(\) => \{\n\s+width = window\.innerWidth;\n\s+height = (.*?);\n\s+canvas\.width = width;\n\s+canvas\.height = height;\n\s+createParticles\(\);\n\s+\};/g,
    `const onResize = () => {
      if (Math.abs(width - window.innerWidth) > 10) {
        width = window.innerWidth;
        height = $1;
        canvas.width = width;
        canvas.height = height;
        createParticles();
      }
    };`
  );
  fs.writeFileSync(file, content);
}

fixCanvas('src/components/PricingSection.tsx');
fixCanvas('src/components/CTACanvasParticles.tsx');
console.log('Fixed canvases');
