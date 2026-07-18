const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

const ctasData = {
  pt: {
    gmaps: "DOMINAR TOP 3 LOCAL",
    website: "ATIVAR MÁQUINA DE VENDAS",
    automacao: "BLINDAR ATENDIMENTO 24/7",
    ecommerce: "ESCALAR FATURAÇÃO ONLINE"
  },
  es: {
    gmaps: "DOMINAR EL TOP 3 LOCAL",
    website: "ACTIVAR MÁQUINA DE VENTAS",
    automacao: "BLINDAR ATENCIÓN 24/7",
    ecommerce: "ESCALAR FACTURACIÓN ONLINE"
  },
  en: {
    gmaps: "DOMINATE LOCAL TOP 3",
    website: "ACTIVATE SALES MACHINE",
    automacao: "BULLETPROOF 24/7 SUPPORT",
    ecommerce: "SCALE ONLINE REVENUE"
  },
  fr: {
    gmaps: "DOMINER LE TOP 3 LOCAL",
    website: "ACTIVER LA MACHINE À VENTES",
    automacao: "BLINDER L'ASSISTANCE 24/7",
    ecommerce: "FAIRE ÉVOLUER LE CA EN LIGNE"
  },
  it: {
    gmaps: "DOMINARE LA TOP 3 LOCALE",
    website: "ATTIVARE MACCHINA DELLE VENDITE",
    automacao: "BLINDARE L'ASSISTENZA 24/7",
    ecommerce: "SCALARE IL FATTURATO ONLINE"
  },
  de: {
    gmaps: "LOKALE TOP 3 DOMINIEREN",
    website: "VERKAUFSMASCHINE AKTIVIEREN",
    automacao: "24/7 SUPPORT ABSICHERN",
    ecommerce: "ONLINE-UMSATZ SKALIEREN"
  }
};

const languages = ['pt', 'it', 'en', 'fr', 'de', 'es'];

languages.forEach(lang => {
  const t = ctasData[lang];
  
  const langRegex = new RegExp(`^\\s*${lang}: \\{`, 'm');
  const match = langRegex.exec(content);
  if (!match) return;
  
  const startIdx = match.index;
  let endIdx = content.indexOf('\n  },', startIdx);
  if (endIdx === -1) endIdx = content.length;
  
  let section = content.substring(startIdx, endIdx);
  
  const plans = ['gmaps', 'website', 'automacao', 'ecommerce'];
  plans.forEach(plan => {
    const planStart = section.indexOf(`${plan}: {`);
    if (planStart !== -1) {
      const planEnd = section.indexOf('}', planStart);
      let planStr = section.substring(planStart, planEnd);
      planStr = planStr.replace(/(cta:) "[^"]*"/, `$1 "${t[plan]}"`);
      section = section.substring(0, planStart) + planStr + section.substring(planEnd);
    }
  });

  content = content.substring(0, startIdx) + section + content.substring(endIdx);
});

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed CTAs.');
