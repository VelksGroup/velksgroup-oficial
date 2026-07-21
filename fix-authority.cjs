const fs = require('fs');

const file = 'src/components/AuthoritySection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /\{currentLang === 'pt' \? 'PRESENÇA INTERNACIONAL REGULADA' : 'REGULATED EUROPEAN STATUS'\}/,
  `{currentLang === 'pt' ? 'PRESENÇA INTERNACIONAL REGULADA' : currentLang === 'es' ? 'PRESENCIA INTERNACIONAL REGULADA' : currentLang === 'it' ? 'PRESENZA INTERNAZIONALE REGOLAMENTATA' : currentLang === 'fr' ? 'PRÉSENCE INTERNATIONALE RÉGLEMENTÉE' : currentLang === 'de' ? 'REGULIERTE INTERNATIONALE PRÄSENZ' : 'REGULATED EUROPEAN STATUS'}`
);

content = content.replace(
  /\{currentLang === 'pt' \? 'MÉTRICAS AUDITADAS EM PORTAL CONSOLIDADO' : 'AUDITED PERFORMANCE METRICS'\}/,
  `{currentLang === 'pt' ? 'MÉTRICAS AUDITADAS EM PORTAL CONSOLIDADO' : currentLang === 'es' ? 'MÉTRICAS AUDITADAS EN PORTAL CONSOLIDADO' : currentLang === 'it' ? 'METRICHE CERTIFICATE IN PORTALE CONSOLIDATO' : currentLang === 'fr' ? 'MÉTRIQUES AUDITÉES SUR PORTAIL CONSOLIDÉ' : currentLang === 'de' ? 'GEPRÜFTE METRIKEN IN EINEM KONSOLIDIERTEN PORTAL' : 'AUDITED PERFORMANCE METRICS'}`
);

fs.writeFileSync(file, content);
console.log('done fixing authority');
