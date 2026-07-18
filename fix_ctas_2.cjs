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
  
  const plansIdx = section.indexOf('plans: {');
  if (plansIdx !== -1) {
    const plansEndIdx = section.indexOf('      },', plansIdx + 200); // Hacky way to skip nested objects. Wait.
  }
  
  // A better approach is simply to replace the matching CTAs globally in the section.
  // Wait, there's a risk of replacing other CTAs. Let's do it precisely.
  
  const plans = ['gmaps', 'website', 'automacao', 'ecommerce'];
  plans.forEach(plan => {
    // We look for the plan inside the plans block:
    let planStart = section.indexOf(`${plan}: {`, section.indexOf('plans: {'));
    if (planStart !== -1) {
      // Find the end of this plan block by matching "cta:"
      let ctaIdx = section.indexOf('cta:', planStart);
      if (ctaIdx !== -1) {
        let quoteStart = section.indexOf('"', ctaIdx);
        let quoteEnd = section.indexOf('"', quoteStart + 1);
        let before = section.substring(0, quoteStart + 1);
        let after = section.substring(quoteEnd);
        section = before + t[plan] + after;
      }
    }
  });

  content = content.substring(0, startIdx) + section + content.substring(endIdx);
});

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed CTAs precisely.');
