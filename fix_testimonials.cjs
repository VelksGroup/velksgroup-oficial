const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

// Cópia 1 (Dr.ª Mariana Costa)
content = content.replace(
  'O assistente automático no site é fantástico. Os clientes entram à noite para tirar dúvidas sobre marcações, o bot recolhe o contacto e no dia seguinte a nossa secretária só tem de confirmar. Excelente!',
  'A Inteligência Artificial da VELKS no site é fantástica. Os clientes entram à noite para tirar dúvidas sobre marcações, a IA recolhe o contacto e no dia seguinte a nossa secretária só tem de confirmar. Excelente!'
);

// Cópia 2 (Isabel Mendes) - Only for the Portuguese block (first match should be the Portuguese one if we just replace it globally but it only exists exactly as that in the Portuguese block anyway). Wait, let's verify if "leads qualificadas" is in other blocks or if it was exact.
// The exact string is 'Os nossos consultores agora recebem leads qualificadas prontas a falar. O sistema filtra quem realmente quer comprar ou vender e envia tudo direto para o WhatsApp. Recomendo a 100%.'
content = content.replace(
  'Os nossos consultores agora recebem leads qualificadas prontas a falar. O sistema filtra quem realmente quer comprar ou vender e envia tudo direto para o WhatsApp. Recomendo a 100%.',
  'Os nossos consultores agora recebem clientes qualificados prontos a falar. O sistema filtra quem realmente quer comprar ou vender e envia tudo direto para o WhatsApp. Recomendo a 100%.'
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed testimonials.');
