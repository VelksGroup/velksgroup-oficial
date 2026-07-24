const fs = require('fs');

const components = [
  "AIVisionSection",
  "AuthoritySection",
  "PricingSection",
  "ProblemSection",
  "SolutionSection",
  "TestimonialsSection",
  "WidgetSection",
  "ThreeHero"
];

for (const comp of components) {
  const path = `src/components/${comp}.tsx`;
  let code = fs.readFileSync(path, 'utf8');
  
  // Find the export const or export function
  if (code.includes(`export const ${comp}`)) {
    code = code.replace(`export const ${comp}: React.FC<${comp}Props> = (`, `export const ${comp}: React.FC<${comp}Props> = React.memo((`);
    // Need to find the closing bracket of the component to add )
    // A quick hack for these files: usually ends with `};` or `});`
    // Let's replace the last `};` with `});`
    code = code.replace(/};\s*$/g, '});\n');
  } else if (code.includes(`export default function ${comp}`)) {
    // For PricingSection
    code = code.replace(`export default function ${comp}({`, `const ${comp} = ({`);
    code += `\nexport default React.memo(${comp});\n`;
  } else if (code.includes(`export const ${comp} = (`)) {
    code = code.replace(`export const ${comp} = (`, `export const ${comp} = React.memo((`);
    code = code.replace(/};\s*$/g, '});\n');
  }
  
  fs.writeFileSync(path, code);
}
console.log("Applied React.memo to all major components");
