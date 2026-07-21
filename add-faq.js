const fs = require('fs');

const file = 'src/translations.ts';
let content = fs.readFileSync(file, 'utf8');

const newPt = `,
        {
          q: "A VELKS possui outros websites oficiais?",
          a: "Sim.\\nAlém do website institucional da VELKS Group, desenvolvemos produtos e soluções em domínios próprios para oferecer uma experiência mais focada e especializada.\\nProjetos oficiais atualmente operados pela VELKS:\\n• velks.space — Plataforma oficial da ORION AI e soluções de atendimento inteligente.\\n• vgroup.space — Portfólio digital, demonstrações, estudos de caso e projetos desenvolvidos pela equipa VELKS.\\nTodos os websites acima pertencem à VELKS Group e são mantidos pela nossa equipa de engenharia e desenvolvimento.\\nPode navegar com total confiança."
        },
        {
          q: "Como descubro quanto custaria implementar a ORION na minha empresa?",
          a: "A forma mais rápida é falar diretamente com a ORION.\\nO assistente consegue analisar o seu negócio, esclarecer dúvidas, apresentar funcionalidades e indicar a solução mais adequada para o seu caso.\\nClique no ícone de conversa no canto inferior direito e receba orientação imediata."
        },
        {
          q: "O que acontece se eu não responder aos meus clientes imediatamente?",
          a: "Na maioria dos casos, eles entram em contacto com outra empresa.\\nHoje a velocidade de resposta influencia diretamente a decisão de compra.\\nA ORION ajuda a garantir que cada visitante recebe atenção imediata, mesmo quando a sua equipa está ocupada, fora do escritório ou a dormir."
        }
      ]`;

const newIt = `,
        {
          q: "VELKS ha altri siti web ufficiali?",
          a: "Sì.\\nOltre al sito web istituzionale di VELKS Group, sviluppiamo prodotti e soluzioni su domini propri per offrire un'esperienza più mirata e specializzata.\\nProgetti ufficiali attualmente operati da VELKS:\\n• velks.space — Piattaforma ufficiale di ORION AI e soluzioni di assistenza clienti intelligente.\\n• vgroup.space — Portfolio digitale, dimostrazioni, casi studio e progetti sviluppati dal team VELKS.\\nTutti i siti web sopra citati appartengono a VELKS Group e sono mantenuti dal nostro team di ingegneria e sviluppo.\\nPuoi navigare in totale sicurezza."
        },
        {
          q: "Come posso scoprire quanto costerebbe implementare ORION nella mia azienda?",
          a: "Il modo più veloce è parlare direttamente con ORION.\\nL'assistente è in grado di analizzare la tua attività, chiarire i dubbi, presentare le funzionalità e indicare la soluzione più adatta al tuo caso.\\nFai clic sull'icona della chat in basso a destra e ricevi orientamento immediato."
        },
        {
          q: "Cosa succede se non rispondo immediatamente ai miei clienti?",
          a: "Nella maggior parte dei casi, contattano un'altra azienda.\\nOggi la velocità di risposta influenza direttamente la decisione di acquisto.\\nORION aiuta a garantire che ogni visitatore riceva attenzione immediata, anche quando il tuo team è impegnato, fuori ufficio o dorme."
        }
      ]`;

const newEn = `,
        {
          q: "Does VELKS have other official websites?",
          a: "Yes.\\nBesides the VELKS Group institutional website, we develop products and solutions on their own domains to offer a more focused and specialized experience.\\nOfficial projects currently operated by VELKS:\\n• velks.space — Official platform for ORION AI and intelligent customer service solutions.\\n• vgroup.space — Digital portfolio, demonstrations, case studies, and projects developed by the VELKS team.\\nAll the websites above belong to the VELKS Group and are maintained by our engineering and development team.\\nYou can browse with total confidence."
        },
        {
          q: "How do I find out how much it would cost to implement ORION in my company?",
          a: "The fastest way is to talk directly with ORION.\\nThe assistant can analyze your business, answer questions, present features, and indicate the most suitable solution for your case.\\nClick the chat icon in the bottom right corner and get immediate guidance."
        },
        {
          q: "What happens if I don't respond to my customers immediately?",
          a: "In most cases, they contact another company.\\nToday, response speed directly influences the purchasing decision.\\nORION helps ensure that every visitor receives immediate attention, even when your team is busy, out of the office, or asleep."
        }
      ]`;

const newFr = `,
        {
          q: "VELKS possède-t-il d'autres sites web officiels ?",
          a: "Oui.\\nOutre le site web institutionnel de VELKS Group, nous développons des produits et des solutions sur des domaines propres pour offrir une expérience plus ciblée et spécialisée.\\nProjets officiels actuellement exploités par VELKS :\\n• velks.space — Plateforme officielle pour ORION AI et les solutions de service client intelligent.\\n• vgroup.space — Portfolio numérique, démonstrations, études de cas et projets développés par l'équipe VELKS.\\nTous les sites web ci-dessus appartiennent à VELKS Group et sont gérés par notre équipe d'ingénierie et de développement.\\nVous pouvez naviguer en toute confiance."
        },
        {
          q: "Comment puis-je savoir combien coûterait la mise en œuvre d'ORION dans mon entreprise ?",
          a: "Le moyen le plus rapide est de parler directement avec ORION.\\nL'assistant peut analyser votre activité, répondre à vos questions, présenter les fonctionnalités et indiquer la solution la plus adaptée à votre cas.\\nCliquez sur l'icône de chat dans le coin inférieur droit et obtenez des conseils immédiats."
        },
        {
          q: "Que se passe-t-il si je ne réponds pas immédiatement à mes clients ?",
          a: "Dans la plupart des cas, ils contactent une autre entreprise.\\nAujourd'hui, la vitesse de réponse influence directement la décision d'achat.\\nORION aide à s'assurer que chaque visiteur reçoit une attention immédiate, même lorsque votre équipe est occupée, en dehors du bureau ou endormie."
        }
      ]`;

const newDe = `,
        {
          q: "Hat VELKS noch andere offizielle Websites?",
          a: "Ja.\\nNeben der institutionellen Website der VELKS Group entwickeln wir Produkte und Lösungen auf eigenen Domains, um ein fokussierteres und spezialisierteres Erlebnis zu bieten.\\nOffizielle Projekte, die derzeit von VELKS betrieben werden:\\n• velks.space — Offizielle Plattform für ORION AI und intelligente Kundenservice-Lösungen.\\n• vgroup.space — Digitales Portfolio, Demonstrationen, Fallstudien und vom VELKS-Team entwickelte Projekte.\\nAlle oben genannten Websites gehören zur VELKS Group und werden von unserem Entwicklungs- und Engineering-Team gewartet.\\nSie können mit vollem Vertrauen auf unseren Seiten surfen."
        },
        {
          q: "Wie finde ich heraus, wie viel es kosten würde, ORION in meinem Unternehmen zu implementieren?",
          a: "Der schnellste Weg ist, direkt mit ORION zu sprechen.\\nDer Assistent kann Ihr Geschäft analysieren, Fragen beantworten, Funktionen präsentieren und die für Sie am besten geeignete Lösung aufzeigen.\\nKlicken Sie auf das Chat-Symbol unten rechts und erhalten Sie sofortige Beratung."
        },
        {
          q: "Was passiert, wenn ich meinen Kunden nicht sofort antworte?",
          a: "In den meisten Fällen kontaktieren sie ein anderes Unternehmen.\\nHeute beeinflusst die Reaktionsgeschwindigkeit direkt die Kaufentscheidung.\\nORION hilft dabei sicherzustellen, dass jeder Besucher sofortige Aufmerksamkeit erhält, selbst wenn Ihr Team beschäftigt ist, nicht im Büro oder schläft."
        }
      ]`;

const newEs = `,
        {
          q: "¿VELKS tiene otros sitios web oficiales?",
          a: "Sí.\\nAdemás del sitio web institucional de VELKS Group, desarrollamos productos y soluciones en dominios propios para ofrecer una experiencia más enfocada y especializada.\\nProyectos oficiales operados actualmente por VELKS:\\n• velks.space — Plataforma oficial de ORION AI y soluciones de atención al cliente inteligente.\\n• vgroup.space — Portafolio digital, demostraciones, estudios de caso y proyectos desarrollados por el equipo de VELKS.\\nTodos los sitios web anteriores pertenecen a VELKS Group y son mantenidos por nuestro equipo de ingeniería y desarrollo.\\nPuede navegar con total confianza."
        },
        {
          q: "¿Cómo descubro cuánto costaría implementar ORION en mi empresa?",
          a: "La forma más rápida es hablar directamente con ORION.\\nEl asistente puede analizar su negocio, aclarar dudas, presentar características e indicar la solución más adecuada para su caso.\\nHaga clic en el ícono de chat en la esquina inferior derecha y reciba orientación inmediata."
        },
        {
          q: "¿Qué pasa si no respondo a mis clientes inmediatamente?",
          a: "En la mayoría de los casos, se ponen en contacto con otra empresa.\\nHoy en día, la velocidad de respuesta influye directamente en la decisión de compra.\\nORION ayuda a garantizar que cada visitante reciba atención inmediata, incluso cuando su equipo esté ocupado, fuera de la oficina o durmiendo."
        }
      ]`;

content = content.replace(/\\n\\s*\\}\\s*\]\\s*\\},\\s*ctaFinal:\\s*\\{/g, (match, offset, str) => {
  // Let's identify which language block it is.
  // There are 6 instances.
  return match;
});

// A better way is replacing the end of each FAQ array directly:

content = content.replace(/q: "Trabalham em Portugal, Espanha e Luxemburgo\?",[\s\S]*?\}\s*\]/g, (match) => {
  return match.replace(/}\s*\]/, '}' + newPt);
});
content = content.replace(/q: "Lavorate in Italia, Spagna e Portogallo\?",[\s\S]*?\}\s*\]/g, (match) => {
  return match.replace(/}\s*\]/, '}' + newIt);
});
content = content.replace(/q: "Do you work across Europe\?",[\s\S]*?\}\s*\]/g, (match) => {
  return match.replace(/}\s*\]/, '}' + newEn);
});
content = content.replace(/q: "Travaillez-vous en France, en Suisse et en Belgique\?",[\s\S]*?\}\s*\]/g, (match) => {
  return match.replace(/}\s*\]/, '}' + newFr);
});
content = content.replace(/q: "Arbeiten Sie in Deutschland, Österreich und der Schweiz\?",[\s\S]*?\}\s*\]/g, (match) => {
  return match.replace(/}\s*\]/, '}' + newDe);
});
content = content.replace(/q: "¿Trabajan en Portugal, España y Luxemburgo\?",[\s\S]*?\}\s*\]/g, (match) => {
  return match.replace(/}\s*\]/, '}' + newEs);
});

fs.writeFileSync(file, content);
console.log('updated');
