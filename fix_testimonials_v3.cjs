const fs = require('fs');
let text = fs.readFileSync('src/translations.ts', 'utf8');

const pt_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Proprietário de Restaurante",
          text: "Meu restaurante quase não aparecia nas pesquisas locais. Depois da otimização da VELKS, começamos a receber chamadas e reservas diariamente através do Google Maps. Hoje somos encontrados por clientes que antes iam diretamente para a concorrência.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultora Financeira",
          text: "Eu perdia oportunidades porque o meu site não transmitia confiança. A VELKS criou uma presença profissional que aumentou a credibilidade da marca. Os clientes chegam mais preparados e as conversões cresceram significativamente.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Diretor Comercial",
          text: "Perdíamos contactos fora do horário comercial. Com a automação da VELKS, cada mensagem recebe resposta imediata. Hoje captamos oportunidades 24 horas por dia sem aumentar a equipa.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Empreendedora Digital",
          text: "Gerir vendas manualmente consumia demasiado tempo. A VELKS automatizou toda a operação da nossa loja online. As vendas cresceram e conseguimos escalar sem aumentar a carga de trabalho.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Sabíamos que havia potencial de crescimento, mas faltava estratégia. A auditoria da VELKS identificou gargalos invisíveis e criou um plano claro de expansão. Hoje tomamos decisões com muito mais confiança.",
          rating: 5
        }
      ]`;

const it_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Titolare di Ristorante",
          text: "Il mio ristorante era invisibile nelle ricerche locali. Dopo l'ottimizzazione di VELKS, riceviamo chiamate e prenotazioni ogni giorno tramite Google Maps. Oggi ci trovano clienti che prima andavano dalla concorrenza.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consulente Finanziaria",
          text: "Perdevo opportunità perché il mio sito non ispirava fiducia. VELKS ha creato una presenza professionale che ha aumentato la credibilità del brand. I clienti arrivano più preparati e le conversioni sono cresciute.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Direttore Commerciale",
          text: "Perdevamo contatti fuori orario. Con l'automazione di VELKS, ogni messaggio riceve una risposta immediata. Oggi catturiamo opportunità 24 ore su 24 senza aumentare il personale.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Imprenditrice Digitale",
          text: "Gestire le vendite manualmente portava via troppo tempo. VELKS ha automatizzato l'intero negozio online. Le vendite sono aumentate e siamo riusciti a scalare senza accrescere il carico di lavoro.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Sapevamo di avere potenziale di crescita, ma mancava una strategia. L'audit di VELKS ha individuato colli di bottiglia invisibili e creato un piano di espansione chiaro. Oggi prendiamo decisioni con molta più fiducia.",
          rating: 5
        }
      ]`;

const en_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Restaurant Owner",
          text: "My restaurant barely showed up in local searches. After VELKS's optimization, we get daily calls and bookings through Google Maps. Today, customers find us instead of going straight to the competition.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Financial Consultant",
          text: "I was losing opportunities because my website lacked trust. VELKS built a professional presence that boosted brand credibility. Clients arrive better prepared and our conversions have grown significantly.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Commercial Director",
          text: "We were losing leads after business hours. With VELKS's automation, every message gets an instant reply. Today, we capture opportunities 24/7 without growing our team.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Digital Entrepreneur",
          text: "Managing sales manually took too much time. VELKS automated our entire online store operations. Sales increased and we scaled effortlessly without adding to our workload.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "We knew we had growth potential, but lacked a clear strategy. VELKS's audit found invisible bottlenecks and created a clear expansion plan. Today we make decisions with much more confidence.",
          rating: 5
        }
      ]`;

const fr_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Propriétaire de Restaurant",
          text: "Mon restaurant était invisible dans les recherches locales. Grâce à l'optimisation de VELKS, nous recevons des appels et réservations tous les jours via Google Maps. Les clients nous trouvent au lieu d'aller chez la concurrence.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultante Financière",
          text: "Je perdais des opportunités car mon site manquait de confiance. VELKS a créé une présence professionnelle qui a boosté notre crédibilité. Les clients arrivent mieux préparés et nos conversions ont fortement augmenté.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Directeur Commercial",
          text: "Nous perdions des contacts en dehors des heures d'ouverture. Avec l'automatisation de VELKS, chaque message reçoit une réponse immédiate. Aujourd'hui, nous captons des opportunités 24h/24 sans agrandir l'équipe.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Entrepreneuse Digitale",
          text: "Gérer les ventes manuellement prenait trop de temps. VELKS a automatisé toute notre boutique en ligne. Les ventes ont augmenté et nous avons pu évoluer sans alourdir notre charge de travail.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "PDG",
          text: "Nous savions qu'il y avait un potentiel de croissance, mais la stratégie manquait. L'audit de VELKS a identifié les blocages invisibles et créé un plan d'expansion clair. Aujourd'hui, nous décidons avec confiance.",
          rating: 5
        }
      ]`;

const de_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Restaurantbesitzer",
          text: "Mein Restaurant war in lokalen Suchen unsichtbar. Nach der Optimierung durch VELKS erhalten wir täglich Anrufe und Buchungen über Google Maps. Heute finden uns Kunden, die früher direkt zur Konkurrenz gingen.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Finanzberaterin",
          text: "Ich verlor Kunden, weil meine Website nicht vertrauenswürdig wirkte. VELKS schuf eine professionelle Präsenz, die unsere Glaubwürdigkeit steigerte. Kunden sind besser vorbereitet und die Conversions sind deutlich gestiegen.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Verkaufsleiter",
          text: "Wir verloren Leads nach Geschäftsschluss. Mit der Automatisierung von VELKS wird jede Nachricht sofort beantwortet. Heute erfassen wir rund um die Uhr Chancen, ohne unser Team aufzustocken.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Digitale Unternehmerin",
          text: "Verkäufe manuell zu verwalten kostete zu viel Zeit. VELKS hat unseren gesamten Onlineshop automatisiert. Die Verkäufe stiegen und wir konnten wachsen, ohne die Arbeitsbelastung zu erhöhen.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Geschäftsführer",
          text: "Wir wussten, dass wir Wachstumspotenzial hatten, aber es fehlte an Strategie. Das Audit von VELKS fand unsichtbare Engpässe und schuf einen klaren Expansionsplan. Heute treffen wir Entscheidungen mit viel mehr Vertrauen.",
          rating: 5
        }
      ]`;

const es_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Propietario de Restaurante",
          text: "Mi restaurante casi no aparecía en búsquedas locales. Tras la optimización de VELKS, recibimos llamadas y reservas a diario por Google Maps. Hoy nos encuentran clientes que antes iban a la competencia.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultora Financiera",
          text: "Perdía oportunidades porque mi web no transmitía confianza. VELKS creó una presencia profesional que aumentó nuestra credibilidad. Los clientes llegan más preparados y las conversiones crecieron significativamente.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Director Comercial",
          text: "Perdíamos contactos fuera del horario comercial. Con la automatización de VELKS, cada mensaje recibe respuesta inmediata. Hoy captamos oportunidades las 24 horas sin aumentar el equipo.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Emprendedora Digital",
          text: "Gestionar ventas manualmente consumía mucho tiempo. VELKS automatizó toda nuestra tienda online. Las ventas crecieron y logramos escalar sin aumentar nuestra carga de trabajo.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Sabíamos que había potencial de crecimiento, pero faltaba estrategia. La auditoría de VELKS identificó obstáculos invisibles y creó un plan de expansión claro. Hoy tomamos decisiones con más confianza.",
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
for(const l of langs) {
  newText = replaceTestimonialsList(l, newText);
}

fs.writeFileSync('src/translations.ts', newText);
console.log('Fixed testimonials v3 for all languages.');
