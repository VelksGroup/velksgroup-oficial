const fs = require('fs');
let code = fs.readFileSync('src/components/AIVisionSection.tsx', 'utf8');

const replacement = `
    let isVisible = false;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;
      time += 0.005;`;

code = code.replace(/    const animate = \(\) => \{\n      time \+= 0\.005;/g, replacement);
code = code.replace(/      animationFrameId = requestAnimationFrame\(animate\);\n    \};/g, '    };'); // Removing the duplicate requestAnimationFrame from the end

fs.writeFileSync('src/components/AIVisionSection.tsx', code);
console.log("Fixed AIVisionSection");
