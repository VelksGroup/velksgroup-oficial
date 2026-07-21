const fs = require('fs');

const fixFile = (file, regex, replacement) => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(file, content);
};

fixFile(
  'src/components/ProblemSection.tsx',
  /\{currentLang === 'pt' \? 'REALIDADE SEM ENROLAÇÃO' : 'CRITICAL REALITY'\}/,
  `{currentLang === 'pt' ? 'REALIDADE SEM ENROLAÇÃO' : currentLang === 'es' ? 'REALIDAD SIN RODEOS' : currentLang === 'it' ? 'REALTÀ SENZA GIRI DI PAROLE' : currentLang === 'fr' ? 'RÉALITÉ SANS DÉTOUR' : currentLang === 'de' ? 'KRITISCHE REALITÄT' : 'CRITICAL REALITY'}`
);

fixFile(
  'src/components/SolutionSection.tsx',
  /\{currentLang === 'pt' \? 'O MAPA DA MINERAÇÃO DE OURO' : 'THE GOLDMINE STRATEGY'\}/,
  `{currentLang === 'pt' ? 'O MAPA DA MINERAÇÃO DE OURO' : currentLang === 'es' ? 'LA ESTRATEGIA DE LA MINA DE ORO' : currentLang === 'it' ? 'LA STRATEGIA DELLA MINIERA D\\'ORO' : currentLang === 'fr' ? 'LA STRATÉGIE DE LA MINE D\\'OR' : currentLang === 'de' ? 'DIE GOLDMINE-STRATEGIE' : 'THE GOLDMINE STRATEGY'}`
);

console.log('done fixing sections');
