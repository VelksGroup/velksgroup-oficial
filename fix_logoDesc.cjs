const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

content = content.replace(
  'logoDesc: "A VELKS Group ajuda pequenos negócios e empresas locais a dominar as pesquisas no Google, capturar leads qualificadas e automatizar o atendimento sem mensalidades recorrentes."',
  'logoDesc: "Transformamos negócios dependentes do dono em máquinas autónomas de lucro. O seu domínio no Google torna-se absoluto e a nossa IA fecha vendas 24/7. Resultados reais e sem mensalidades recorrentes, para que recupere o seu tempo e a sua liberdade."'
);

content = content.replace(
  'logoDesc: "VELKS Group aiuta le piccole imprese locali a dominare le ricerche su Google, catturare lead qualificate e automatizzare il servizio clienti senza abbonamenti ricorrenti."',
  'logoDesc: "Trasformiamo le imprese dipendenti dal proprietario in macchine da profitto autonome. Il tuo dominio su Google diventa assoluto e la nostra IA chiude le vendite 24/7. Risultati reali e zero abbonamenti ricorrenti, così puoi recuperare il tuo tempo e la tua libertà."'
);

content = content.replace(
  'logoDesc: "VELKS Group helps local businesses and service providers dominate local search, capture high-quality leads, and automate client booking with zero monthly fees."',
  'logoDesc: "We transform owner-dependent businesses into autonomous profit machines. Your Google dominance becomes absolute and our AI closes sales 24/7. Real results and zero monthly fees, so you can reclaim your time and freedom."'
);

content = content.replace(
  'logoDesc: "VELKS Group aide les commerces et prestataires locaux à dominer les recherches sur Google, capturer des leads qualifiés et automatiser les réservations sans abonnements."',
  'logoDesc: "Nous transformons les entreprises dépendantes de leur propriétaire en machines à profit autonomes. Votre domination sur Google devient absolue et notre IA conclut des ventes 24/7. Des résultats réels et sans abonnements récurrents, pour que vous retrouviez votre temps et votre liberté."'
);

content = content.replace(
  'logoDesc: "Die VELKS Group hilft lokalen Unternehmen und Dienstleistern, die lokale Suche zu dominieren, qualifizierte Leads zu erfassen und Kundenanfragen ohne monatliche Gebühren zu automatisieren."',
  'logoDesc: "Wir verwandeln inhaberabhängige Unternehmen in autonome Gewinnmaschinen. Ihre Google-Dominanz wird absolut und unsere KI schließt Verkäufe rund um die Uhr ab. Echte Ergebnisse und keine monatlichen Gebühren, damit Sie Ihre Zeit und Freiheit zurückgewinnen."'
);

content = content.replace(
  'logoDesc: "VELKS Group ayuda a negocios locales y autónomos a dominar las búsquedas de Google, capturar leads calificados y automatizar reservas sin suscripciones."',
  'logoDesc: "Transformamos negocios dependientes del dueño en máquinas autónomas de ganancias. Tu dominio en Google se vuelve absoluto y nuestra IA cierra ventas 24/7. Resultados reales y sin cuotas mensuales recurrentes, para que recuperes tu tiempo y libertad."'
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed logoDesc.');
