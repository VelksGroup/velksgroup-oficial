const fs = require('fs');

const data = {
  pt: {
    heroText: 'VERIFICAR VIABILIDADE PARA O MEU NEGÓCIO',
    heroMsg: '[ACESSO VELKS] Olá. Vi a vossa infraestrutura tecnológica no site e gostaria de verificar se a minha empresa se qualifica para implementar o vosso sistema comercial. Podem enviar-me a tabela de preços?',
    planText: 'SOLICITAR INTEGRAÇÃO DESTE PACOTE',
    planMsg: '[INTEGRAÇÃO VELKS] Olá, equipa. Analisei a tabela de preços no site e tenho interesse em avançar com um pacote. Qual é o próximo passo para iniciarmos a integração?',
    customText: 'AGENDAR AUDITORIA PRIVADA',
    customMsg: '[AUDITORIA ELITE] Olá. O meu negócio precisa de uma reestruturação digital profunda. Gostaria de agendar uma auditoria privada com um especialista da VELKS para discutir a solução All-In-One Imperial.',
    footerText: 'BLINDAR O MEU NEGÓCIO AGORA',
    footerMsg: '[URGÊNCIA B2B] Olá. Li toda a vossa página e percebi que estou a perder dinheiro para a concorrência. Quero perceber exatamente como a vossa tecnologia pode blindar o meu negócio de forma imediata.',
  },
  es: {
    heroText: 'VERIFICAR VIABILIDAD PARA MI NEGOCIO',
    heroMsg: '[ACCESO VELKS] Hola. Vi su infraestructura tecnológica en el sitio web y me gustaría comprobar si mi empresa califica para implementar su sistema comercial. ¿Pueden enviarme la tabla de precios?',
    planText: 'SOLICITAR INTEGRACIÓN DE ESTE PAQUETE',
    planMsg: '[INTEGRACIÓN VELKS] Hola, equipo. Analicé la tabla de precios en el sitio y tengo interés en avanzar con un paquete. ¿Cuál es el próximo paso para iniciar la integración?',
    customText: 'AGENDAR AUDITORÍA PRIVADA',
    customMsg: '[AUDITORÍA ELITE] Hola. Mi negocio necesita una reestructuración digital profunda. Me gustaría programar una auditoría privada con un especialista de VELKS para discutir la solución All-In-One Imperial.',
    footerText: 'BLINDAR MI NEGOCIO AHORA',
    footerMsg: '[URGENCIA B2B] Hola. Leí toda su página y me di cuenta de que estoy perdiendo dinero frente a la competencia. Quiero entender exactamente cómo su tecnología puede blindar mi negocio de forma inmediata.',
  },
  en: {
    heroText: 'CHECK FEASIBILITY FOR MY BUSINESS',
    heroMsg: '[VELKS ACCESS] Hello. I saw your technological infrastructure on the website and would like to check if my company qualifies to implement your commercial system. Can you send me the pricing table?',
    planText: 'REQUEST INTEGRATION FOR THIS PACKAGE',
    planMsg: '[VELKS INTEGRATION] Hello team. I reviewed the pricing table on the website and I am interested in moving forward with a package. What is the next step to start the integration?',
    customText: 'SCHEDULE PRIVATE AUDIT',
    customMsg: '[ELITE AUDIT] Hello. My business needs a deep digital restructuring. I would like to schedule a private audit with a VELKS specialist to discuss the All-In-One Imperial solution.',
    footerText: 'BULLETPROOF MY BUSINESS NOW',
    footerMsg: '[B2B URGENCY] Hello. I read your entire page and realized I am losing money to the competition. I want to understand exactly how your technology can bulletproof my business immediately.',
  },
  fr: {
    heroText: 'VÉRIFIER LA FAISABILITÉ POUR MON ENTREPRISE',
    heroMsg: '[ACCÈS VELKS] Bonjour. J\'ai vu votre infrastructure technologique sur le site et j\'aimerais vérifier si mon entreprise est qualifiée pour mettre en œuvre votre système commercial. Pouvez-vous m\'envoyer la grille tarifaire ?',
    planText: 'DEMANDER L\'INTÉGRATION DE CE FORFAIT',
    planMsg: '[INTÉGRATION VELKS] Bonjour l\'équipe. J\'ai analysé la grille tarifaire sur le site et je suis intéressé(e) pour avancer avec un forfait. Quelle est la prochaine étape pour commencer l\'intégration ?',
    customText: 'PLANIFIER UN AUDIT PRIVÉ',
    customMsg: '[AUDIT ÉLITE] Bonjour. Mon entreprise a besoin d\'une restructuration numérique profonde. J\'aimerais planifier un audit privé avec un spécialiste VELKS pour discuter de la solution All-In-One Imperial.',
    footerText: 'BLINDER MON ENTREPRISE MAINTENANT',
    footerMsg: '[URGENCE B2B] Bonjour. J\'ai lu toute votre page et j\'ai réalisé que je perdais de l\'argent au profit de la concurrence. Je veux comprendre exactement comment votre technologie peut blinder mon entreprise immédiatement.',
  },
  it: {
    heroText: 'VERIFICA FATTIBILITÀ PER LA MIA AZIENDA',
    heroMsg: '[ACCESSO VELKS] Ciao. Ho visto la vostra infrastruttura tecnologica sul sito e vorrei verificare se la mia azienda si qualifica per implementare il vostro sistema commerciale. Potete inviarmi il listino prezzi?',
    planText: 'RICHIEDI L\'INTEGRAZIONE DI QUESTO PACCHETTO',
    planMsg: '[INTEGRAZIONE VELKS] Ciao, team. Ho analizzato il listino prezzi sul sito e sono interessato ad andare avanti con un pacchetto. Qual è il prossimo passo per iniziare l\'integrazione?',
    customText: 'PRENOTA AUDIT PRIVATO',
    customMsg: '[AUDIT ELITE] Ciao. La mia attività necessita di una profonda ristrutturazione digitale. Vorrei prenotare un audit privato con uno specialista VELKS per discutere della soluzione All-In-One Imperial.',
    footerText: 'BLINDARE LA MIA AZIENDA ORA',
    footerMsg: '[URGENZA B2B] Ciao. Ho letto tutta la vostra pagina e ho capito che sto perdendo soldi a favore della concorrenza. Voglio capire esattamente come la vostra tecnologia può blindare la mia attività immediatamente.',
  },
  de: {
    heroText: 'MACHBARKEIT FÜR MEIN UNTERNEHMEN PRÜFEN',
    heroMsg: '[VELKS ZUGANG] Hallo. Ich habe Ihre technologische Infrastruktur auf der Website gesehen und möchte prüfen, ob sich mein Unternehmen für die Implementierung Ihres kommerziellen Systems qualifiziert. Können Sie mir die Preistabelle zusenden?',
    planText: 'INTEGRATION DIESES PAKETS ANFORDERN',
    planMsg: '[VELKS INTEGRATION] Hallo Team. Ich habe die Preistabelle auf der Website analysiert und bin daran interessiert, mit einem Paket fortzufahren. Was ist der nächste Schritt, um die Integration zu starten?',
    customText: 'PRIVATES AUDIT VEREINBAREN',
    customMsg: '[ELITE AUDIT] Hallo. Mein Unternehmen benötigt eine tiefgreifende digitale Umstrukturierung. Ich möchte ein privates Audit mit einem VELKS-Spezialisten vereinbaren, um die All-In-One Imperial-Lösung zu besprechen.',
    footerText: 'MEIN UNTERNEHMEN JETZT ABSICHERN',
    footerMsg: '[B2B DRINGLICHKEIT] Hallo. Ich habe Ihre gesamte Seite gelesen und festgestellt, dass ich Geld an die Konkurrenz verliere. Ich möchte genau verstehen, wie Ihre Technologie mein Unternehmen sofort absichern kann.',
  },
};

let content = fs.readFileSync('src/translations.ts', 'utf8');

// Update Schema
content = content.replace(/hero: \{\n    badge: string;/, 'hero: {\n    tracking: string;\n    badge: string;');
content = content.replace(/ctaFinal: \{\n    title: string;/, 'ctaFinal: {\n    tracking: string;\n    title: string;');

// Using RegExp for replacement on each language section
Object.keys(data).forEach(lang => {
  const d = data[lang];
  
  // Find the language start
  const langRegex = new RegExp(`^\\s*${lang}: \\{`, 'm');
  const match = langRegex.exec(content);
  if (!match) return;
  
  const startIdx = match.index;
  // Let's find the next language start or end of object to scope the replacements
  let endIdx = content.indexOf('\n  },', startIdx);
  if (endIdx === -1) endIdx = content.length;
  
  let section = content.substring(startIdx, endIdx);
  
  // 1. Hero
  // Replace ctaPrimary
  section = section.replace(/ctaPrimary: "[^"]*"/, `ctaPrimary: "${d.heroText}"`);
  // Insert tracking in hero
  section = section.replace(/hero: \{\n(\s*)badge: /, `hero: {\n$1tracking: "${d.heroMsg}",\n$1badge: `);
  
  // 2. Plans
  // We need to replace the `cta` and `tracking` for gmaps, website, automacao, ecommerce, custom
  const plans = ['gmaps', 'website', 'automacao', 'ecommerce', 'custom'];
  plans.forEach(plan => {
    const planRegex = new RegExp(`${plan}: \\{[^}]*?(cta: "[^"]*")[^}]*?(tracking: "[^"]*")`, 'g');
    
    // Instead of complex regex, we can match the block of the plan
    const planStart = section.indexOf(`${plan}: {`);
    if (planStart !== -1) {
      const planEnd = section.indexOf('}', planStart);
      let planStr = section.substring(planStart, planEnd);
      
      if (plan === 'custom') {
        planStr = planStr.replace(/cta: "[^"]*"/, `cta: "${d.customText}"`);
        planStr = planStr.replace(/tracking: "[^"]*"/, `tracking: "${d.customMsg}"`);
      } else {
        planStr = planStr.replace(/cta: "[^"]*"/, `cta: "${d.planText}"`);
        planStr = planStr.replace(/tracking: "[^"]*"/, `tracking: "${d.planMsg}"`);
      }
      
      section = section.substring(0, planStart) + planStr + section.substring(planEnd);
    }
  });
  
  // 3. Footer
  section = section.replace(/ctaFinal: \{\n(\s*)title: /, `ctaFinal: {\n$1tracking: "${d.footerMsg}",\n$1title: `);
  section = section.replace(/(ctaFinal: \{[\s\S]*?cta:) "[^"]*"/, `$1 "${d.footerText}"`);
  
  content = content.substring(0, startIdx) + section + content.substring(endIdx);
});

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Updated translations.ts');
