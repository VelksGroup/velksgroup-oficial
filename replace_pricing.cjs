const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Add import
if (!code.includes('PricingSection')) {
  code = code.replace(
    "import { TestimonialsSection } from './components/TestimonialsSection';",
    "import { TestimonialsSection } from './components/TestimonialsSection';\nimport { PricingSection } from './components/PricingSection';"
  );
}

// Find the pricing section and replace it
const startTag = "{/* BLOCO 7 - PACOTES (PRICING & BUNDLES) */}";
const endTag = "{/* BLOCO 8 - DEMONSTRAÇÕES INTERATIVAS (SHOWCASE) */}";

const startIndex = code.indexOf(startTag);
const endIndex = code.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = `
      {/* BLOCO 7 - PACOTES (PRICING & BUNDLES) */}
      <PricingSection t={t} currentLang={currentLang} handleWhatsAppClick={handleWhatsAppClick} />

      `;
  code = code.substring(0, startIndex) + newSection + code.substring(endIndex);
}

fs.writeFileSync('src/App.tsx', code);
console.log("Pricing section replaced in App.tsx.");
