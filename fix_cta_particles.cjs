const fs = require('fs');
let code = fs.readFileSync('src/components/CTACanvasParticles.tsx', 'utf8');

const replacement = `
    let isVisible = false;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    if (canvasRef.current) observer.observe(canvasRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;
      
      ctx.clearRect(0, 0, width, height);`;

code = code.replace(/    const animate = \(\) => \{\n      ctx\.clearRect\(0, 0, width, height\);/g, replacement);

const replacementReturn = `    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);`;

code = code.replace(/    return \(\) => \{\n      window\.removeEventListener\('mousemove', onMouseMove\);/g, replacementReturn);

fs.writeFileSync('src/components/CTACanvasParticles.tsx', code);
console.log("Fixed CTA particles visibility check again");
