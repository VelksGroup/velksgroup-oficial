const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

// Update Schema
content = content.replace(
  '    logoDesc: string;',
  `    logoDesc: string;
    velksNetworkTitle: string;
    velksNetworkInstitutional: string;
    velksNetworkAIInfrastructure: string;
    velksNetworkCommercialAutomation: string;
    velksNetworkDigitalExperiences: string;`
);

// Update pt
content = content.replace(
  '      logoDesc: "Transformamos',
  `      velksNetworkTitle: "REDE OPERACIONAL VELKS",
      velksNetworkInstitutional: "Institucional",
      velksNetworkAIInfrastructure: "Infraestrutura IA",
      velksNetworkCommercialAutomation: "Automação Comercial",
      velksNetworkDigitalExperiences: "Experiências Digitais",
      logoDesc: "Transformamos`
);

// Update it
content = content.replace(
  '      logoDesc: "Trasformiamo',
  `      velksNetworkTitle: "RETE OPERATIVA VELKS",
      velksNetworkInstitutional: "Istituzionale",
      velksNetworkAIInfrastructure: "Infrastruttura IA",
      velksNetworkCommercialAutomation: "Automazione Commerciale",
      velksNetworkDigitalExperiences: "Esperienze Digitali",
      logoDesc: "Trasformiamo`
);

// Update en
content = content.replace(
  '      logoDesc: "We transform',
  `      velksNetworkTitle: "VELKS OPERATIONAL NETWORK",
      velksNetworkInstitutional: "Institutional",
      velksNetworkAIInfrastructure: "AI Infrastructure",
      velksNetworkCommercialAutomation: "Commercial Automation",
      velksNetworkDigitalExperiences: "Digital Experiences",
      logoDesc: "We transform`
);

// Update fr
content = content.replace(
  '      logoDesc: "Nous transformons',
  `      velksNetworkTitle: "RÉSEAU OPÉRATIONNEL VELKS",
      velksNetworkInstitutional: "Institutionnel",
      velksNetworkAIInfrastructure: "Infrastructure IA",
      velksNetworkCommercialAutomation: "Automatisation Commerciale",
      velksNetworkDigitalExperiences: "Expériences Numériques",
      logoDesc: "Nous transformons`
);

// Update de
content = content.replace(
  '      logoDesc: "Wir verwandeln',
  `      velksNetworkTitle: "VELKS OPERATIVES NETZWERK",
      velksNetworkInstitutional: "Institutionell",
      velksNetworkAIInfrastructure: "KI-Infrastruktur",
      velksNetworkCommercialAutomation: "Kommerzielle Automatisierung",
      velksNetworkDigitalExperiences: "Digitale Erlebnisse",
      logoDesc: "Wir verwandeln`
);

// Update es
content = content.replace(
  '      logoDesc: "Transformamos negocios',
  `      velksNetworkTitle: "RED OPERATIVA VELKS",
      velksNetworkInstitutional: "Institucional",
      velksNetworkAIInfrastructure: "Infraestructura IA",
      velksNetworkCommercialAutomation: "Automatización Comercial",
      velksNetworkDigitalExperiences: "Experiencias Digitales",
      logoDesc: "Transformamos negocios`
);

fs.writeFileSync('src/translations.ts', content);
console.log('Translations patched successfully');
