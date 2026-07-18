const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

// Replace PT
content = content.replace(
  /tracking: "Olá! Tenho interesse no pacote Google Maps Profissional\."/,
  'tracking: "Olá! Tenho interesse no pacote Google Maps Profissional. Os especialistas da VELKS poderiam me ajudar?"'
);
content = content.replace(
  /tracking: "Olá! Tenho interesse no pacote Website Profissional\."/,
  'tracking: "Olá! Tenho interesse no pacote Website Profissional. Qual é o primeiro passo para construirmos a minha nova máquina de vendas?"'
);

// Replace ES
content = content.replace(
  /tracking: "¡Hola! Estoy interesado en el paquete Google Maps Profesional\."/,
  'tracking: "¡Hola! Estoy interesado en el paquete Google Maps Profesional. ¿Los especialistas de VELKS podrían ayudarme?"'
);
content = content.replace(
  /tracking: "¡Hola! Estoy interesado en el paquete de Sitio Web Profesional\."/,
  'tracking: "¡Hola! Estoy interesado en el paquete de Sitio Web Profesional. ¿Cuál es el primer paso para construir mi nueva máquina de ventas?"'
);

// Replace EN
content = content.replace(
  /tracking: "Hello! I am interested in the Professional Google Maps package\."/,
  'tracking: "Hello! I am interested in the Professional Google Maps package. Could VELKS specialists help me?"'
);
content = content.replace(
  /tracking: "Hello! I am interested in the Professional Website package\."/,
  'tracking: "Hello! I am interested in the Professional Website package. What is the first step to building my new sales machine?"'
);

// Replace FR
content = content.replace(
  /tracking: "Bonjour! Je suis intéressé par le forfait Google Maps Professionnel\."/,
  'tracking: "Bonjour ! Je suis intéressé par le forfait Google Maps Professionnel. Les spécialistes de VELKS pourraient-ils m\'aider ?"'
);
content = content.replace(
  /tracking: "Bonjour! Je suis intéressé par le forfait Site Web Professionnel\."/,
  'tracking: "Bonjour ! Je suis intéressé par le forfait Site Web Professionnel. Quelle est la première étape pour construire ma nouvelle machine de vente ?"'
);

// Replace IT
content = content.replace(
  /tracking: "Ciao! Sono interessato al pacchetto Google Maps Professionale\."/,
  'tracking: "Ciao! Sono interessato al pacchetto Google Maps Professionale. Gli specialisti di VELKS potrebbero aiutarmi?"'
);
content = content.replace(
  /tracking: "Ciao! Sono interessato al pacchetto Sito Web Professionale\."/,
  'tracking: "Ciao! Sono interessato al pacchetto Sito Web Professionale. Qual è il primo passo per costruire la mia nuova macchina per le vendite?"'
);

// Replace DE
content = content.replace(
  /tracking: "Hallo! Ich interessiere mich für das Google Maps Professionell-Paket\."/,
  'tracking: "Hallo! Ich interessiere mich für das Google Maps Professionell-Paket. Könnten mir die VELKS-Spezialisten helfen?"'
);
content = content.replace(
  /tracking: "Hallo! Ich interessiere mich für das Website Professionell-Paket\."/,
  'tracking: "Hallo! Ich interessiere mich für das Website Professionell-Paket. Was ist der erste Schritt zum Aufbau meiner neuen Verkaufsmaschine?"'
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed short trackings.');
