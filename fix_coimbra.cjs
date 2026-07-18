const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

content = content.replace(
  'Equipa de design e desenvolvimento focada em converter visitantes em clientes em Coimbra.',
  'Equipa de design e desenvolvimento focada em converter visitantes em clientes premium.'
);

content = content.replace(
  'Team di design e sviluppo focalizzato sulla conversione dei visitatori in clienti a Coimbra.',
  'Team di design e sviluppo focalizzato sulla conversione dei visitatori in clienti premium.'
);

content = content.replace(
  'Our design and engineering hub based in Coimbra, focused entirely on converting web visitors into paying customers.',
  'Our design and engineering hub focused entirely on converting web visitors into premium customers.'
);

content = content.replace(
  'Notre pôle de design et développement basé à Coimbra, entièrement axé sur la conversion des visiteurs en clients payants.',
  'Notre pôle de design et développement entièrement axé sur la conversion des visiteurs en clients premium.'
);

content = content.replace(
  'Unser Design- und Entwicklungsteam in Coimbra konzentriert sich voll und ganz darauf, Website-Besucher in zahlende Kunden zu verwandeln.',
  'Unser Design- und Entwicklungsteam konzentriert sich voll und ganz darauf, Website-Besucher in Premium-Kunden zu verwandeln.'
);

content = content.replace(
  'Nuestro equipo de diseño y desarrollo enfocado en convertir visitantes en clientes de pago en Coimbra.',
  'Nuestro equipo de diseño y desarrollo enfocado en convertir visitantes en clientes premium.'
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed Coimbra -> premium.');
