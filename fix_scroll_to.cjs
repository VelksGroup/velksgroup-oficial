const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/const scrollTo = \(ref: React\.RefObject<HTMLDivElement \| null>\) => {/g, 'const scrollTo = React.useCallback((ref: React.RefObject<HTMLDivElement | null>) => {');
code = code.replace(/ref\.current\.scrollIntoView\(\{ behavior: 'smooth' \}\);\n    }\n  };/g, "ref.current.scrollIntoView({ behavior: 'smooth' });\n    }\n  }, []);");

fs.writeFileSync('src/App.tsx', code);
console.log("Wrapped scrollTo in useCallback");
