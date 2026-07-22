const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.{ts,tsx}');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove full style blocks
  content = content.replace(/ style=\{\{ willChange: '[^']+', transform: 'translateZ\(0\)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' \}\}/g, '');
  content = content.replace(/ style=\{\{ willChange: "[^"]+", transform: "translateZ\(0\)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" \}\}/g, '');
  content = content.replace(/ style=\{\{ willChange: "[^"]+", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ\(0\)" \}\}/g, '');
  content = content.replace(/, willChange: 'transform', transform: 'translateZ\(0\)'/g, '');
  content = content.replace(/, willChange: "transform", transform: "translateZ\(0\)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden"/g, '');
  content = content.replace(/style=\{\{ willChange: "transform, opacity", transform: "translateZ\(0\)", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" \}\} /g, '');
  content = content.replace(/style=\{\{ y: bgY, willChange: "transform", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ\(0\)" \}\}/g, 'style={{ y: bgY }}');

  fs.writeFileSync(file, content);
});

console.log('Removed willChange and translateZ(0) from inline styles');
