const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const sections = [
  'ProblemSection',
  'SolutionSection',
  'AuthoritySection',
  'WidgetSection',
  'AIVisionSection'
];

for (const section of sections) {
  const regex = new RegExp(`const ${section} = React\\.lazy\\(\\(\\) => import\\('\\.\\/components\\/${section}'\\)\\.then\\(m => \\(\\{ default: m\\.${section} \\}\\)\\)\\);`, 'g');
  code = code.replace(regex, `import { ${section} } from './components/${section}';`);
  
  // Remove ErrorBoundary and Suspense wrapping around this section
  const tagRegex = new RegExp(`<ErrorBoundary[^>]*><React\\.Suspense[^>]*>(<${section} [^>]*\\/>)<\\/React\\.Suspense><\\/ErrorBoundary>`, 'g');
  code = code.replace(tagRegex, `$1`);
}

// For CTACanvasParticles, it's a heavy canvas, we might want to keep it lazy, but let's just make it static too to prevent ANY issues during scroll. Or keep it lazy?
// Let's make it static too.
code = code.replace(/const CTACanvasParticles = React\.lazy\(\(\) => import\('\.\/components\/CTACanvasParticles'\)\.then\(m => \(\{ default: m\.CTACanvasParticles \}\)\)\);/g, `import { CTACanvasParticles } from './components/CTACanvasParticles';`);
code = code.replace(/<ErrorBoundary[^>]*><React\.Suspense[^>]*>(<CTACanvasParticles [^>]*\/>)<\/React\.Suspense><\/ErrorBoundary>/g, `<CTACanvasParticles />`);

fs.writeFileSync('src/App.tsx', code);
console.log("Replaced lazy with static imports for all sections.");
