const fs = require('fs');
let code = fs.readFileSync('src/components/ThreeHero.tsx', 'utf8');

// Revert the wrong injection in the first useEffect
code = code.replace(/    return \(\) => \{\n      if \(observer\) observer\.disconnect\(\);\n      window\.removeEventListener\('scroll', handleScroll\);/g, `    return () => {\n      window.removeEventListener('scroll', handleScroll);`);

// Inject the observer.disconnect() in the SECOND useEffect
const secondUseEffectCleanup = `    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);`;

code = code.replace(/    return \(\) => \{\n      window\.removeEventListener\('resize', handleResize\);/g, secondUseEffectCleanup);

fs.writeFileSync('src/components/ThreeHero.tsx', code);
console.log("Fixed ThreeHero observer scope");
