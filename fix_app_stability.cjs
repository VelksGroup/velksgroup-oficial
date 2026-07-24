const fs = require('fs');

let text = fs.readFileSync('src/App.tsx', 'utf8');

if (!text.includes("ErrorBoundary")) {
  text = text.replace("import { ThreeHero } from './components/ThreeHero';", "import { ThreeHero } from './components/ThreeHero';\nimport { ErrorBoundary } from './ErrorBoundary';");
}

const sectionFallback = `<div className="min-h-[400px] bg-obsidian-dark flex items-center justify-center border border-white/5 rounded-xl m-4"><div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div></div>`;

// We replace the single Suspense with individual Suspenses and Error Boundaries.
// The structure is something like:
/*
      <React.Suspense fallback={<div className="min-h-screen bg-obsidian-dark flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div></div>}>

      {/* BLOCO 2 - PROBLEMA (THE PROBLEM) * /
      <ProblemSection t={t} currentLang={currentLang} problemRef={problemRef} />
      ...
      </React.Suspense>
*/

// It's easier to regex replace each Section instantiation.
const sections = [
  "ProblemSection",
  "SolutionSection",
  "AuthoritySection",
  "WidgetSection",
  "TestimonialsSection",
  "PricingSection",
  "AIVisionSection",
  "CTACanvasParticles"
];

for (const section of sections) {
  // Replace <Section ... /> with <ErrorBoundary><Suspense fallback={...}><Section ... /></Suspense></ErrorBoundary>
  // But wait, there are transitions (divs) between sections.
  const regex = new RegExp(`(<${section}[^>]*\\/>)`, 'g');
  text = text.replace(regex, `<ErrorBoundary fallback={<div className="min-h-[200px] flex items-center justify-center text-gray-500">Failed to load section</div>}><React.Suspense fallback={${sectionFallback}}>$1</React.Suspense></ErrorBoundary>`);
}

// Remove the global Suspense
text = text.replace(/<React\.Suspense fallback=\{<div className="min-h-screen bg-obsidian-dark flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"><\/div><\/div>\}>/g, '');
text = text.replace(/<\/React\.Suspense>\s*{\/\* COOKIES POPUP CONSENT/g, '{/* COOKIES POPUP CONSENT');

fs.writeFileSync('src/App.tsx', text);
console.log("App stability fixed.");
