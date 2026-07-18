const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

content = content.replace(
  'badge: "★ VELKS GROUP - CRESCIMENTO ACELERADO"',
  'badge: "★ DOMÍNIO ABSOLUTO DO MERCADO"'
);
content = content.replace(
  'badge: "★ VELKS GROUP - CRESCITA ACCELERATA"',
  'badge: "★ DOMINIO ASSOLUTO DEL MERCATO"'
);
content = content.replace(
  'badge: "★ VELKS GROUP - ACCELERATED GROWTH"',
  'badge: "★ ABSOLUTE MARKET DOMINANCE"'
);
content = content.replace(
  'badge: "★ VELKS GROUP - CROISSANCE ACCÉLÉRÉE"',
  'badge: "★ DOMINATION ABSOLUE DU MARCHÉ"'
);
content = content.replace(
  'badge: "★ VELKS GROUP - BESCHLEUNIGTES WACHSTUM"',
  'badge: "★ ABSOLUTE MARKTDOMINANZ"'
);
content = content.replace(
  'badge: "★ VELKS GROUP - CRECIMIENTO ACELERADO"',
  'badge: "★ DOMINIO ABSOLUTO DEL MERCADO"'
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed badges.');
