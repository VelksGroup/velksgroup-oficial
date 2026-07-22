const fs = require('fs');

const file = 'src/components/ThreeHero.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /const handleResize = \(\) => \{\n\s+if \(\!canvasRef\.current \|\| \!containerRef\.current\) return;\n\s+const w = containerRef\.current\.clientWidth;\n\s+const h = containerRef\.current\.clientHeight;\n\s+camera\.aspect = w \/ h;\n\s+camera\.updateProjectionMatrix\(\);\n\s+renderer\.setSize\(w, h\);\n\s+\};/g,
  `let lastWidth = containerRef.current?.clientWidth || 0;
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const w = containerRef.current.clientWidth;
      if (Math.abs(lastWidth - w) > 10) {
        lastWidth = w;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };`
);

fs.writeFileSync(file, content);
console.log('Fixed ThreeHero resize');
