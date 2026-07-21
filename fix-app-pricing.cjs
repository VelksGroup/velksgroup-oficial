const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<span className="text-xs text-gray-400 font-mono">A partir de<\/span>/g,
  `<span className="text-xs text-gray-400 font-mono">{currentLang === 'pt' ? 'A partir de' : currentLang === 'es' ? 'A partir de' : currentLang === 'it' ? 'A partire da' : currentLang === 'fr' ? 'À partir de' : currentLang === 'de' ? 'Ab' : 'Starting from'}</span>`
);

content = content.replace(
  /<span className="text-xs text-gray-400 font-mono">Pack Integrado<\/span>/g,
  `<span className="text-xs text-gray-400 font-mono">{currentLang === 'pt' ? 'Pack Integrado' : currentLang === 'es' ? 'Paquete Integrado' : currentLang === 'it' ? 'Pacchetto Integrato' : currentLang === 'fr' ? 'Package Intégré' : currentLang === 'de' ? 'Integriertes Paket' : 'Integrated Package'}</span>`
);

fs.writeFileSync(file, content);
console.log('done fixing app pricing');
