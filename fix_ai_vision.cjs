const fs = require('fs');
let code = fs.readFileSync('src/components/AIVisionSection.tsx', 'utf8');

const replacement = `
    let isVisible = false;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    if (canvasRef.current) observer.observe(canvasRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;
`;

code = code.replace(/    const animate = \(\) => \{\n      const time = Date\.now\(\) \* 0\.001;/g, replacement + '      const time = Date.now() * 0.001;');

const replacementReturn = `    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);`;

code = code.replace(/    return \(\) => \{\n      window\.removeEventListener\('resize', handleResize\);/g, replacementReturn);

fs.writeFileSync('src/components/AIVisionSection.tsx', code);
console.log("Fixed AIVisionSection animation pause when off-screen");
