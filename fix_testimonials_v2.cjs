const fs = require('fs');
let text = fs.readFileSync('src/translations.ts', 'utf8');

const pt_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Proprietário de Restaurante",
          text: "Meu restaurante era praticamente invisível no Google. Os clientes passavam na frente, mas encontravam os concorrentes primeiro. Depois que a VELKS otimizou nosso Google Maps, começamos a aparecer nas pesquisas locais todos os dias. As chamadas aumentaram, os pedidos aumentaram e finalmente passamos a receber clientes sem depender apenas de publicidade paga.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultora Financeira",
          text: "Eu tinha credibilidade, mas meu site transmitia amadorismo. Muitas pessoas visitavam minhas redes sociais, porém não confiavam o suficiente para contratar. A VELKS criou um site profissional que transmite autoridade imediatamente. Hoje os clientes chegam muito mais preparados e a taxa de conversão praticamente dobrou.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Diretor Comercial",
          text: "Perdíamos clientes todos os dias porque ninguém respondia mensagens fora do horário comercial. Quando percebíamos, o cliente já tinha comprado da concorrência. A automação da VELKS começou a responder instantaneamente, qualificando os contatos e agendando reuniões automaticamente. Hoje captamos oportunidades até enquanto dormimos.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Empreendedora Digital",
          text: "Eu vendia apenas pelas redes sociais e tudo era manual. Pagamentos, pedidos e acompanhamento consumiam horas do meu dia. Depois da loja criada pela VELKS, todo o processo ficou automatizado. As vendas aumentaram, os clientes compram com mais confiança e finalmente consigo escalar sem aumentar a carga de trabalho.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Já tínhamos presença digital, mas faltava uma estratégia completa para crescer de forma consistente. A VELKS analisou toda a operação, identificou gargalos invisíveis e implementou melhorias que impactaram diretamente a geração de oportunidades. Foi a primeira vez que tivemos uma visão clara do que realmente travava o crescimento da empresa.",
          rating: 5
        }
      ]`;

const it_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Titolare di Ristorante",
          text: "Il mio ristorante era praticamente invisibile su Google. I clienti passavano davanti, ma trovavano prima la concorrenza. Dopo che VELKS ha ottimizzato il nostro Google Maps, abbiamo iniziato ad apparire nelle ricerche locali tutti i giorni. Le chiamate sono aumentate, gli ordini sono cresciuti e finalmente riceviamo clienti senza dipendere solo dalla pubblicità a pagamento.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consulente Finanziaria",
          text: "Avevo credibilità, ma il mio sito trasmetteva dilettantismo. Molte persone visitavano i miei social, ma non si fidavano abbastanza per assumermi. VELKS ha creato un sito professionale che trasmette immediatamente autorità. Oggi i clienti arrivano molto più preparati e il tasso di conversione è praticamente raddoppiato.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Direttore Commerciale",
          text: "Perdevamo clienti ogni giorno perché nessuno rispondeva ai messaggi fuori orario di lavoro. Quando ce ne accorgevamo, il cliente aveva già comprato dalla concorrenza. L'automazione di VELKS ha iniziato a rispondere all'istante, qualificando i contatti e fissando riunioni automaticamente. Oggi catturiamo opportunità anche mentre dormiamo.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Imprenditrice Digitale",
          text: "Vendevo solo tramite i social network e tutto era manuale. Pagamenti, ordini e tracciamento consumavano ore della mia giornata. Dopo il negozio creato da VELKS, l'intero processo è stato automatizzato. Le vendite sono aumentate, i clienti acquistano con più fiducia e finalmente riesco a scalare senza aumentare il carico di lavoro.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Avevamo già una presenza digitale, ma mancava una strategia completa per crescere in modo coerente. VELKS ha analizzato l'intera operazione, individuato colli di bottiglia invisibili e implementato miglioramenti che hanno impattato direttamente sulla generazione di opportunità. È stata la prima volta che abbiamo avuto una visione chiara di cosa frenasse realmente la crescita dell'azienda.",
          rating: 5
        }
      ]`;

const en_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Restaurant Owner",
          text: "My restaurant was virtually invisible on Google. Customers walked right past us, finding our competitors first. After VELKS optimized our Google Maps, we started appearing in local searches every single day. Calls went up, orders increased, and we finally started getting customers without relying solely on paid ads.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Financial Consultant",
          text: "I had credibility, but my website looked amateurish. Many people visited my social media, yet they didn't trust me enough to hire me. VELKS built a professional website that immediately conveys authority. Today, clients arrive much more prepared, and my conversion rate has practically doubled.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Commercial Director",
          text: "We were losing clients daily because no one answered messages after hours. By the time we noticed, the customer had already bought from the competition. VELKS's automation started replying instantly, qualifying leads, and scheduling meetings automatically. Today, we capture opportunities even while we sleep.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Digital Entrepreneur",
          text: "I used to sell only on social media and everything was manual. Payments, orders, and follow-ups consumed hours of my day. After VELKS created my store, the entire process became automated. Sales increased, customers buy with more confidence, and I can finally scale without increasing my workload.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "We already had a digital presence, but we lacked a comprehensive strategy to grow consistently. VELKS analyzed our entire operation, identified invisible bottlenecks, and implemented improvements that directly impacted lead generation. It was the first time we had a clear view of what was truly holding back our company's growth.",
          rating: 5
        }
      ]`;

const fr_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Propriétaire de Restaurant",
          text: "Mon restaurant était pratiquement invisible sur Google. Les clients passaient devant, mais trouvaient nos concurrents en premier. Depuis que VELKS a optimisé notre Google Maps, nous apparaissons tous les jours dans les recherches locales. Les appels ont augmenté, les commandes ont grimpé, et nous recevons enfin des clients sans dépendre uniquement de la publicité payante.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultante Financière",
          text: "J'avais de la crédibilité, mais mon site web faisait amateur. Beaucoup de gens visitaient mes réseaux sociaux, mais n'avaient pas assez confiance pour m'engager. VELKS a créé un site professionnel qui transmet immédiatement de l'autorité. Aujourd'hui, les clients arrivent beaucoup mieux préparés et mon taux de conversion a pratiquement doublé.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Directeur Commercial",
          text: "Nous perdions des clients tous les jours parce que personne ne répondait aux messages en dehors des heures de bureau. Quand nous nous en rendions compte, le client avait déjà acheté chez la concurrence. L'automatisation de VELKS a commencé à répondre instantanément, à qualifier les contacts et à planifier des réunions automatiquement. Aujourd'hui, nous saisissons des opportunités même en dormant.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Entrepreneuse Digitale",
          text: "Je vendais uniquement sur les réseaux sociaux et tout était manuel. Les paiements, les commandes et le suivi me prenaient des heures chaque jour. Après la création de ma boutique par VELKS, tout le processus a été automatisé. Les ventes ont augmenté, les clients achètent avec plus de confiance, et je peux enfin développer mon activité sans augmenter ma charge de travail.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "PDG",
          text: "Nous avions déjà une présence numérique, mais il nous manquait une stratégie globale pour croître de manière constante. VELKS a analysé toute notre opération, identifié les goulots d'étranglement invisibles et mis en œuvre des améliorations qui ont directement impacté la génération d'opportunités. C'était la première fois que nous avions une vision claire de ce qui freinait réellement la croissance de l'entreprise.",
          rating: 5
        }
      ]`;

const de_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Restaurantbesitzer",
          text: "Mein Restaurant war auf Google praktisch unsichtbar. Die Kunden liefen vorbei, fanden aber zuerst unsere Konkurrenten. Nachdem VELKS unser Google Maps optimiert hatte, tauchten wir jeden Tag in den lokalen Suchanfragen auf. Die Anrufe nahmen zu, die Bestellungen stiegen, und wir bekamen endlich Kunden, ohne uns nur auf bezahlte Werbung verlassen zu müssen.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Finanzberaterin",
          text: "Ich hatte Glaubwürdigkeit, aber meine Website wirkte unprofessionell. Viele Leute besuchten meine Social-Media-Kanäle, hatten aber nicht genug Vertrauen, um mich zu beauftragen. VELKS hat eine professionelle Website erstellt, die sofort Autorität ausstrahlt. Heute kommen die Kunden viel besser vorbereitet, und meine Conversion-Rate hat sich praktisch verdoppelt.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Verkaufsleiter",
          text: "Wir haben jeden Tag Kunden verloren, weil außerhalb der Geschäftszeiten niemand auf Nachrichten geantwortet hat. Bis wir es merkten, hatte der Kunde bereits bei der Konkurrenz gekauft. Die Automatisierung von VELKS begann sofort zu antworten, qualifizierte Kontakte und vereinbarte automatisch Termine. Heute nutzen wir Chancen, selbst während wir schlafen.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Digitale Unternehmerin",
          text: "Ich habe nur über soziale Netzwerke verkauft und alles war manuell. Zahlungen, Bestellungen und Nachverfolgungen verschlangen Stunden meines Tages. Nachdem VELKS meinen Shop erstellt hatte, wurde der gesamte Prozess automatisiert. Die Verkäufe stiegen, die Kunden kaufen mit mehr Vertrauen, und ich kann endlich skalieren, ohne meine Arbeitsbelastung zu erhöhen.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Geschäftsführer",
          text: "Wir hatten bereits eine digitale Präsenz, aber uns fehlte eine umfassende Strategie, um beständig zu wachsen. VELKS analysierte unseren gesamten Betrieb, identifizierte unsichtbare Engpässe und implementierte Verbesserungen, die sich direkt auf die Lead-Generierung auswirkten. Es war das erste Mal, dass wir eine klare Sicht darauf hatten, was das Wachstum des Unternehmens wirklich bremste.",
          rating: 5
        }
      ]`;

const es_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Propietario de Restaurante",
          text: "Mi restaurante era prácticamente invisible en Google. Los clientes pasaban por delante, pero encontraban primero a nuestros competidores. Después de que VELKS optimizara nuestro Google Maps, empezamos a aparecer en las búsquedas locales todos los días. Las llamadas aumentaron, los pedidos subieron, y finalmente empezamos a recibir clientes sin depender únicamente de la publicidad pagada.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultora Financiera",
          text: "Tenía credibilidad, pero mi sitio web transmitía amateurismo. Muchas personas visitaban mis redes sociales, pero no confiaban lo suficiente como para contratarme. VELKS creó un sitio web profesional que transmite autoridad de inmediato. Hoy los clientes llegan mucho más preparados y la tasa de conversión prácticamente se ha duplicado.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Director Comercial",
          text: "Perdíamos clientes todos los días porque nadie respondía a los mensajes fuera del horario laboral. Cuando nos dábamos cuenta, el cliente ya había comprado a la competencia. La automatización de VELKS empezó a responder al instante, calificando contactos y programando reuniones automáticamente. Hoy captamos oportunidades incluso mientras dormimos.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Emprendedora Digital",
          text: "Vendía solo por redes sociales y todo era manual. Pagos, pedidos y seguimientos consumían horas de mi día. Después de la tienda creada por VELKS, todo el proceso se automatizó. Las ventas aumentaron, los clientes compran con más confianza y finalmente puedo escalar sin aumentar mi carga de trabajo.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Ya teníamos presencia digital, pero nos faltaba una estrategia completa para crecer de forma constante. VELKS analizó toda la operación, identificó cuellos de botella invisibles e implementó mejoras que impactaron directamente en la generación de oportunidades. Fue la primera vez que tuvimos una visión clara de lo que realmente frenaba el crecimiento de la empresa.",
          rating: 5
        }
      ]`;

const map = {
  pt: pt_list,
  it: it_list,
  en: en_list,
  fr: fr_list,
  de: de_list,
  es: es_list
};

const langs = ['pt', 'it', 'en', 'fr', 'de', 'es'];

function replaceTestimonialsList(lang, fullText) {
  const startRegex = new RegExp("^  " + lang + ": \\{", "m");
  const startMatch = fullText.match(startRegex);
  if(!startMatch) return fullText;
  
  const startIndex = startMatch.index;
  let endIndex = startIndex;
  
  const nextLangIndex = langs.indexOf(lang) + 1;
  if(nextLangIndex < langs.length) {
    const nextLang = langs[nextLangIndex];
    const endRegex = new RegExp("^  " + nextLang + ": \\{", "m");
    const endMatch = fullText.match(endRegex);
    endIndex = endMatch ? endMatch.index : fullText.length;
  } else {
    endIndex = fullText.length;
  }
  
  let block = fullText.substring(startIndex, endIndex);
  
  const testIdx = block.indexOf("testimonials: {");
  if(testIdx !== -1) {
    const listStartIdx = block.indexOf("list: [", testIdx);
    if(listStartIdx !== -1) {
      let bracketCount = 0;
      let listEndIdx = -1;
      for(let i = listStartIdx + 6; i < block.length; i++) {
        if(block[i] === '[') bracketCount++;
        else if(block[i] === ']') {
          bracketCount--;
          if(bracketCount === 0) {
            listEndIdx = i;
            break;
          }
        }
      }
      
      if(listEndIdx !== -1) {
        block = block.substring(0, listStartIdx) + map[lang] + block.substring(listEndIdx + 1);
      }
    }
  }

  return fullText.substring(0, startIndex) + block + fullText.substring(endIndex);
}

let newText = text;

// We also need to add isGoogle?: boolean to the type definition.
const typeIdx = newText.indexOf("testimonials: {");
if (typeIdx !== -1) {
  const listDefIdx = newText.indexOf("list: {", typeIdx);
  if (listDefIdx !== -1) {
      newText = newText.replace(
        "      text: string;\n      rating: number;\n    }[];", 
        "      text: string;\n      rating: number;\n      isGoogle?: boolean;\n    }[];"
      );
  }
}

for(const l of langs) {
  newText = replaceTestimonialsList(l, newText);
}

fs.writeFileSync('src/translations.ts', newText);
console.log('Fixed testimonials v2 for all languages.');
