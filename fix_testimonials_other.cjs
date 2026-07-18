const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

content = content.replace(
  "I nostri agenti ora ricevono lead qualificate pronte per l'acquisto.",
  "I nostri agenti ora ricevono clienti qualificati pronti per l'acquisto."
);

content = content.replace(
  "Our agents now receive highly qualified, pre-filtered leads.",
  "Our agents now receive highly qualified, pre-filtered customers."
);

content = content.replace(
  "Nos agents reçoivent enfin des prospects qualifiés et pré-filtrés.",
  "Nos agents reçoivent enfin des clients qualifiés et pré-filtrés."
);

content = content.replace(
  "Unsere Makler erhalten jetzt hochqualifizierte, vorselektierte Leads.",
  "Unsere Makler erhalten jetzt hochqualifizierte, vorselektierte Kunden."
);

content = content.replace(
  "Nuestros agentes por fin reciben leads calificados listos para conversar.",
  "Nuestros agentes por fin reciben clientes calificados listos para conversar."
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed other testimonials.');
