const fs = require('fs');

const file = 'src/components/AIVisionSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /const handleResize = \(\) => \{\n\s+if \(\!containerRef\.current\) return;\n\s+width = containerRef\.current\.clientWidth;\n\s+height = containerRef\.current\.clientHeight;\n\s+camera\.aspect = width \/ height;\n\s+camera\.updateProjectionMatrix\(\);\n\s+renderer\.setSize\(width, height\);\n\s+\};/g,
  `const handleResize = () => {
      if (!containerRef.current) return;
      if (Math.abs(width - containerRef.current.clientWidth) > 10) {
        width = containerRef.current.clientWidth;
        height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };`
);

fs.writeFileSync(file, content);
console.log('Fixed AIVision resize');
