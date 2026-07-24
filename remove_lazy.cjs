const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/const TestimonialsSection = React\.lazy\(\(\) => import\('\.\/components\/TestimonialsSection'\)\.then\(m => \(\{(?: default: m\.TestimonialsSection | default: m\.default )\}\)\)\);/, "import { TestimonialsSection } from './components/TestimonialsSection';");

code = code.replace(/const PricingSection = React\.lazy\(\(\) => import\('\.\/components\/PricingSection'\)\);/, "import PricingSection from './components/PricingSection';");

code = code.replace(/const TestimonialsSection = React\.lazy\(\(\) => import\('\.\/components\/TestimonialsSection'\)\.then\(m => \(\{ default: m\.TestimonialsSection \}\)\)\);/, "import { TestimonialsSection } from './components/TestimonialsSection';");

// Remove ErrorBoundary and Suspense wrapping around TestimonialsSection and PricingSection
code = code.replace(/<ErrorBoundary[^>]*><React\.Suspense[^>]*>(<TestimonialsSection [^>]*\/>)<\/React\.Suspense><\/ErrorBoundary>/g, "$1");
code = code.replace(/<ErrorBoundary[^>]*><React\.Suspense[^>]*>(<PricingSection [^>]*\/>)<\/React\.Suspense><\/ErrorBoundary>/g, "$1");

fs.writeFileSync('src/App.tsx', code);
console.log("Removed lazy loading for Testimonials and Pricing");
