const fs = require('fs');

const translationsData = {
  pt: {
    gmaps: "Olá! Tenho interesse no pacote Google Maps Profissional. Os especialistas da VELKS poderiam ajudar-me?",
    website: "Olá! Tenho interesse no pacote Website Profissional. Qual é o primeiro passo para construirmos a minha nova máquina de vendas?",
    automacao: "Olá, Equipa VELKS. Analisei a tabela de preços no site e tenho interesse em avançar com Atendimento Automático IA. Qual é o próximo passo para iniciarmos a integração?",
    ecommerce: "Olá, Equipa VELKS. Analisei a tabela de preços no site e tenho interesse em avançar com o pacote E-Commerce Completo. Qual é o próximo passo para iniciarmos a integração?",
    custom: "Olá, Equipa VELKS. O meu negócio precisa de uma reestruturação digital profunda. Gostaria de agendar uma auditoria privada com um especialista da VELKS para discutir a solução All-In-One Imperial. Vocês poderiam ajudar-me?",
    ctaFinal: "Olá. Li toda a vossa página e percebi que estou a perder dinheiro para a concorrência. Quero perceber exatamente como a vossa tecnologia pode blindar o meu negócio de forma imediata. Podemos falar?",
    demoTracking: "Olá! Quero testar a demonstração interativa para {demoTitle} e ver na prática como esta tecnologia pode escalar os meus resultados. Podemos iniciar o teste?"
  },
  es: {
    gmaps: "¡Hola! Tengo interés en el paquete Google Maps Profesional. ¿Los especialistas de VELKS podrían ayudarme?",
    website: "¡Hola! Tengo interés en el paquete Sitio Web Profesional. ¿Cuál es el primer paso para construir mi nueva máquina de ventas?",
    automacao: "Hola, Equipo VELKS. Analicé la tabla de precios en el sitio y tengo interés en avanzar con Atención IA Automática. ¿Cuál es el próximo paso para iniciar la integración?",
    ecommerce: "Hola, Equipo VELKS. Analicé la tabla de precios en el sitio y tengo interés en avanzar con el paquete E-Commerce Completo. ¿Cuál es el próximo paso para iniciar la integración?",
    custom: "Hola, Equipo VELKS. Mi negocio necesita una reestructuración digital profunda. Me gustaría programar una auditoría privada con un especialista de VELKS para discutir la solución All-In-One Imperial. ¿Podrían ayudarme?",
    ctaFinal: "Hola. Leí toda su página y me di cuenta de que estoy perdiendo dinero frente a la competencia. Quiero entender exactamente cómo su tecnología puede blindar mi negocio de forma inmediata. ¿Podemos hablar?",
    demoTracking: "¡Hola! Quiero probar la demostración interactiva para {demoTitle} y ver en la práctica cómo esta tecnología puede escalar mis resultados. ¿Podemos iniciar la prueba?"
  },
  en: {
    gmaps: "Hello! I am interested in the Professional Google Maps package. Could VELKS specialists help me?",
    website: "Hello! I am interested in the Professional Website package. What is the first step to building my new sales machine?",
    automacao: "Hello, VELKS Team. I reviewed the pricing table on the website and I am interested in moving forward with AI Automated Support. What is the next step to start the integration?",
    ecommerce: "Hello, VELKS Team. I reviewed the pricing table on the website and I am interested in moving forward with the Complete E-Commerce package. What is the next step to start the integration?",
    custom: "Hello, VELKS Team. My business needs a deep digital restructuring. I would like to schedule a private audit with a VELKS specialist to discuss the All-In-One Imperial solution. Could you help me?",
    ctaFinal: "Hello. I read your entire page and realized I am losing money to the competition. I want to understand exactly how your technology can bulletproof my business immediately. Can we talk?",
    demoTracking: "Hello! I want to test the interactive demo for {demoTitle} and see in practice how this technology can scale my results. Can we start the test?"
  },
  fr: {
    gmaps: "Bonjour ! Je suis intéressé par le forfait Google Maps Professionnel. Les spécialistes de VELKS pourraient-ils m'aider ?",
    website: "Bonjour ! Je suis intéressé par le forfait Site Web Professionnel. Quelle est la première étape pour construire ma nouvelle machine de vente ?",
    automacao: "Bonjour, l'équipe VELKS. J'ai analysé la grille tarifaire sur le site et je suis intéressé pour avancer avec l'Assistance Automatique par IA. Quelle est la prochaine étape pour commencer l'intégration ?",
    ecommerce: "Bonjour, l'équipe VELKS. J'ai analysé la grille tarifaire sur le site et je suis intéressé pour avancer avec le forfait E-Commerce Complet. Quelle est la prochaine étape pour commencer l'intégration ?",
    custom: "Bonjour, l'équipe VELKS. Mon entreprise a besoin d'une restructuration numérique profonde. J'aimerais planifier un audit privé avec un spécialiste VELKS pour discuter de la solution All-In-One Imperial. Pourriez-vous m'aider ?",
    ctaFinal: "Bonjour. J'ai lu toute votre page et j'ai réalisé que je perdais de l'argent au profit de la concurrence. Je veux comprendre exactement comment votre technologie peut blinder mon entreprise immédiatement. Pouvons-nous parler ?",
    demoTracking: "Bonjour ! Je veux tester la démo interactive pour {demoTitle} et voir en pratique comment cette technologie peut développer mes résultats. Pouvons-nous commencer le test ?"
  },
  it: {
    gmaps: "Ciao! Sono interessato al pacchetto Google Maps Professionale. Gli specialisti di VELKS potrebbero aiutarmi?",
    website: "Ciao! Sono interessato al pacchetto Sito Web Professionale. Qual è il primo passo per costruire la mia nuova macchina per le vendite?",
    automacao: "Ciao, Team VELKS. Ho analizzato il listino prezzi sul sito e sono interessato ad andare avanti con l'Assistenza Automatica IA. Qual è il prossimo passo per iniziare l'integrazione?",
    ecommerce: "Ciao, Team VELKS. Ho analizzato il listino prezzi sul sito e sono interessato ad andare avanti con il pacchetto E-Commerce Completo. Qual è il prossimo passo per iniziare l'integrazione?",
    custom: "Ciao, Team VELKS. La mia attività necessita di una profonda ristrutturazione digitale. Vorrei prenotare un audit privato con uno specialista VELKS per discutere della soluzione All-In-One Imperial. Potreste aiutarmi?",
    ctaFinal: "Ciao. Ho letto tutta la vostra pagina e ho capito che sto perdendo soldi a favore della concorrenza. Voglio capire esattamente come la vostra tecnologia può blindare la mia attività immediatamente. Possiamo parlarne?",
    demoTracking: "Ciao! Voglio testare la demo interattiva per {demoTitle} e vedere in pratica come questa tecnologia può far crescere i miei risultati. Possiamo iniziare il test?"
  },
  de: {
    gmaps: "Hallo! Ich interessiere mich für das Google Maps Professionell-Paket. Könnten mir die VELKS-Spezialisten helfen?",
    website: "Hallo! Ich interessiere mich für das Website Professionell-Paket. Was ist der erste Schritt zum Aufbau meiner neuen Verkaufsmaschine?",
    automacao: "Hallo VELKS-Team. Ich habe die Preistabelle auf der Website analysiert und bin daran interessiert, mit dem KI-Automatisierten Support fortzufahren. Was ist der nächste Schritt, um die Integration zu starten?",
    ecommerce: "Hallo VELKS-Team. Ich habe die Preistabelle auf der Website analysiert und bin daran interessiert, mit dem kompletten E-Commerce-Paket fortzufahren. Was ist der nächste Schritt, um die Integration zu starten?",
    custom: "Hallo VELKS-Team. Mein Unternehmen benötigt eine tiefgreifende digitale Umstrukturierung. Ich möchte ein privates Audit mit einem VELKS-Spezialisten vereinbaren, um die All-In-One Imperial-Lösung zu besprechen. Könnten Sie mir helfen?",
    ctaFinal: "Hallo. Ich habe Ihre gesamte Seite gelesen und festgestellt, dass ich Geld an die Konkurrenz verliere. Ich möchte genau verstehen, wie Ihre Technologie mein Unternehmen sofort absichern kann. Können wir sprechen?",
    demoTracking: "Hallo! Ich möchte die interaktive Demo für {demoTitle} testen und in der Praxis sehen, wie diese Technologie meine Ergebnisse skalieren kann. Können wir den Test starten?"
  }
};

let content = fs.readFileSync('src/translations.ts', 'utf8');

const languages = ['pt', 'it', 'en', 'fr', 'de', 'es'];

languages.forEach(lang => {
  const t = translationsData[lang];
  
  const langRegex = new RegExp(`^\\s*${lang}: \\{`, 'm');
  const match = langRegex.exec(content);
  if (!match) return;
  
  const startIdx = match.index;
  let endIdx = content.indexOf('\n  },', startIdx);
  if (endIdx === -1) endIdx = content.length;
  
  let section = content.substring(startIdx, endIdx);
  
  // Plans tracking
  const plans = ['gmaps', 'website', 'automacao', 'ecommerce', 'custom'];
  plans.forEach(plan => {
    const planStart = section.indexOf(`${plan}: {`);
    if (planStart !== -1) {
      const planEnd = section.indexOf('}', planStart);
      let planStr = section.substring(planStart, planEnd);
      planStr = planStr.replace(/(tracking:) "[^"]*"/, `$1 "${t[plan]}"`);
      section = section.substring(0, planStart) + planStr + section.substring(planEnd);
    }
  });

  // ctaFinal tracking
  section = section.replace(/(ctaFinal: \{[\s\S]*?tracking:) "[^"]*"/, `$1 "${t.ctaFinal}"`);
  
  // demos demoTracking
  section = section.replace(/(demos: \{[\s\S]*?demoTracking:) "[^"]*"/, `$1 "${t.demoTracking}"`);
  
  content = content.substring(0, startIdx) + section + content.substring(endIdx);
});

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Finished translation updates.');
