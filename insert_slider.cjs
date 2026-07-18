const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Add import
if (!code.includes('BeforeAfterSlider')) {
  code = code.replace(
    "import { TestimonialsSection } from './components/TestimonialsSection';",
    "import { TestimonialsSection } from './components/TestimonialsSection';\nimport { BeforeAfterSlider } from './components/BeforeAfterSlider';"
  );
}

// Add component before TestimonialsSection
if (!code.includes('<BeforeAfterSlider')) {
  code = code.replace(
    "<TestimonialsSection t={t} currentLang={currentLang} />",
    "<BeforeAfterSlider currentLang={currentLang} />\n      <TestimonialsSection t={t} currentLang={currentLang} />"
  );
}

fs.writeFileSync('src/App.tsx', code);
console.log("Slider inserted into App.tsx");
