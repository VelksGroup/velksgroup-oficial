const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

// Replace solution.subtitle
content = content.replace(
  'subtitle: "Não vendemos código nem tecnologia. Vendemos agendamentos cheios, leads qualificadas e processos automáticos que faturam por si."',
  'subtitle: "Não vendemos código nem tecnologia. Vendemos agendamentos cheios, clientes qualificados e processos automáticos que faturam por si."'
);
content = content.replace(
  'subtitle: "Non vendiamo codice o tecnologia. Vendiamo appuntamenti, lead qualificate e processi automatici che fatturano per te."',
  'subtitle: "Non vendiamo codice o tecnologia. Vendiamo appuntamenti, clienti qualificati e processi automatici che fatturano per te."'
);
content = content.replace(
  'subtitle: "We do not sell code or tech. We deliver fully booked calendars, qualified leads, and automated processes that generate revenue for you."',
  'subtitle: "We do not sell code or tech. We deliver fully booked calendars, qualified customers, and automated processes that generate revenue for you."'
);
content = content.replace(
  'subtitle: "Nous ne vendons pas de code ou de technologie. Nous vendons des rendez-vous qualifiés, des leads chauds et des processus automatiques qui génèrent du chiffre d\'affaires."',
  'subtitle: "Nous ne vendons pas de code ou de technologie. Nous vendons des rendez-vous qualifiés, des clients qualifiés et des processus automatiques qui génèrent du chiffre d\'affaires."'
);
content = content.replace(
  'subtitle: "Wir verkaufen keinen Code oder Technologie. Wir verkaufen ausgebuchte Kalender, qualifizierte Leads und automatische Prozesse, die für Sie Umsatz generieren."',
  'subtitle: "Wir verkaufen keinen Code oder Technologie. Wir verkaufen ausgebuchte Kalender, qualifizierte Kunden und automatische Prozesse, die für Sie Umsatz generieren."'
);
content = content.replace(
  'subtitle: "No vendemos código ni tecnología. Te entregamos agendas llenas, leads calificados y procesos automáticos que facturan por ti."',
  'subtitle: "No vendemos código ni tecnología. Te entregamos agendas llenas, clientes calificados y procesos automáticos que facturan por ti."'
);

// Replace solution.cards.leads.title
content = content.replace(
  'title: "Captação Ativa de Leads"',
  'title: "Captação Ativa de Clientes"'
);
content = content.replace(
  'title: "Generazione Attiva di Lead"',
  'title: "Generazione Attiva di Clienti"'
);
content = content.replace(
  'title: "Active Lead Capture"',
  'title: "Active Customer Capture"'
);
content = content.replace(
  'title: "Capture Active de Leads"',
  'title: "Capture Active de Clients"'
);
content = content.replace(
  'title: "Aktive Lead-Erfassung"',
  'title: "Aktive Kundenerfassung"'
);
content = content.replace(
  'title: "Captura Activa de Leads"',
  'title: "Captura Activa de Clientes"'
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed leads -> clients.');
