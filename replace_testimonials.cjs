const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Update imports
code = code.replace(
  "import { WidgetSection } from './components/WidgetSection';",
  "import { WidgetSection } from './components/WidgetSection';\nimport { TestimonialsSection } from './components/TestimonialsSection';"
);

// Replace the block
const targetRegex = /\{\/\* BLOCO 6 - PROVA SOCIAL \(TESTIMONIALS\) \*\/\}([\s\S]*?)<\/section>/;
const replacement = `{/* BLOCO 6 - PROVA SOCIAL (TESTIMONIALS) */}
      <TestimonialsSection t={t} currentLang={currentLang} />`;

code = code.replace(targetRegex, replacement);

fs.writeFileSync('src/App.tsx', code);
console.log("Successfully replaced Testimonials block.");
