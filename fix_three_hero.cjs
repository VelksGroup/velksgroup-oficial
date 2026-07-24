const fs = require('fs');
let code = fs.readFileSync('src/components/ThreeHero.tsx', 'utf8');

const replacement = `
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;
`;

code = code.replace(/    const animate = \(\) => \{\n      animationFrameId = requestAnimationFrame\(animate\);/g, replacement);

const replacementReturn = `    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);`;

code = code.replace(/    return \(\) => \{\n      window\.removeEventListener\('scroll', handleScroll\);/g, replacementReturn);

fs.writeFileSync('src/components/ThreeHero.tsx', code);
console.log("Fixed ThreeHero animation pause when off-screen");
