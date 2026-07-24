const fs = require('fs');
let text = fs.readFileSync('src/translations.ts', 'utf8');

const pt_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Dono de Restaurante",
          text: "Desde que implementámos o site da VELKS, as reservas aumentaram 40%. A IA responde aos clientes à noite enquanto nós descansamos. Impressionante.",
          rating: 5
        },
        {
          name: "Marta Sousa",
          role: "Gestora Imobiliária",
          text: "O nosso perfil no Google Maps estava invisível. Em 2 semanas fomos para o topo. Hoje recebemos chamadas diárias sem gastar 1 cêntimo em anúncios.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Diretor de Clínica",
          text: "A qualidade do design é fenomenal. Passa exatamente o nível de excelência da nossa clínica. O assistente IA já agendou dezenas de consultas automaticamente.",
          rating: 5
        },
        {
          name: "Carlos Silva",
          role: "Proprietário, Silva & Filhos Construções",
          text: "O pacote de Google Maps e o site mudaram tudo. Antes dependíamos apenas de recomendações, hoje recebemos 3 a 5 chamadas de clientes novos por dia. O investimento pagou-se no primeiro mês.",
          rating: 5
        },
        {
          name: "Ricardo Martins",
          role: "Martins Automóveis",
          text: "Excelente serviço de suporte. Sem mensalidades caras, pagámos uma única vez pelo site e Google Maps e o retorno tem sido constante e fiável. Transparência total.",
          rating: 5
        }
      ]`;

const it_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Titolare di Ristorante",
          text: "Da quando abbiamo implementato il sito VELKS, le prenotazioni sono aumentate del 40%. L'IA risponde ai clienti di notte mentre noi riposiamo. Impressionante.",
          rating: 5
        },
        {
          name: "Marta Sousa",
          role: "Agente Immobiliare",
          text: "Il nostro profilo Google Maps era invisibile. In 2 settimane siamo arrivati in cima. Oggi riceviamo chiamate giornaliere senza spendere 1 centesimo in annunci.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Direttore Sanitario",
          text: "La qualità del design è eccezionale. Trasmette esattamente il livello di eccellenza della nostra clinica. L'assistente IA ha già fissato decine di appuntamenti automaticamente.",
          rating: 5
        },
        {
          name: "Carlo Silva",
          role: "Titolare, Silva & Filhos Costruzioni",
          text: "Il pacchetto Google Maps e il sito hanno cambiato tutto. Prima dipendevamo solo dalle raccomandazioni, oggi riceviamo dalle 3 alle 5 chiamate al giorno da nuovi clienti. L'investimento si è ripagato nel primo mese.",
          rating: 5
        },
        {
          name: "Ricardo Martins",
          role: "Martins Automobili",
          text: "Eccellente servizio di supporto. Senza costosi abbonamenti mensili, abbiamo pagato una sola volta per il sito e Google Maps e il ritorno è stato costante e affidabile. Trasparenza totale.",
          rating: 5
        }
      ]`;

const en_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Restaurant Owner",
          text: "Since we implemented the VELKS website, reservations have increased by 40%. The AI answers customers at night while we rest. Impressive.",
          rating: 5
        },
        {
          name: "Marta Sousa",
          role: "Real Estate Manager",
          text: "Our Google Maps profile was invisible. In 2 weeks we reached the top. Today we receive daily calls without spending a cent on ads.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Clinic Director",
          text: "The design quality is phenomenal. It conveys exactly the level of excellence of our clinic. The AI assistant has already scheduled dozens of appointments automatically.",
          rating: 5
        },
        {
          name: "Carlos Silva",
          role: "Owner, Silva & Sons Construction",
          text: "The Google Maps package and website changed everything. We used to rely entirely on recommendations, today we receive 3 to 5 calls from new clients every day. The investment paid for itself in the first month.",
          rating: 5
        },
        {
          name: "Ricardo Martins",
          role: "Martins Cars Dealership",
          text: "Excellent support service. No expensive monthly fees, we paid once for the website and Google Maps and the return has been constant and reliable. Total transparency.",
          rating: 5
        }
      ]`;

const fr_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Propriétaire de Restaurant",
          text: "Depuis que nous avons mis en place le site VELKS, les réservations ont augmenté de 40 %. L'IA répond aux clients la nuit pendant que nous nous reposons. Impressionnant.",
          rating: 5
        },
        {
          name: "Marta Sousa",
          role: "Gérante Immobilière",
          text: "Notre profil Google Maps était invisible. En 2 semaines, nous avons atteint le sommet. Aujourd'hui, nous recevons des appels quotidiens sans dépenser 1 centime en publicités.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Directeur de Clinique",
          text: "La qualité du design est phénoménale. Elle transmet exactement le niveau d'excellence de notre clinique. L'assistant IA a déjà programmé des dizaines de rendez-vous automatiquement.",
          rating: 5
        },
        {
          name: "Carlos Silva",
          role: "Gérant, Silva & Fils Bâtiment",
          text: "La formule Google Maps et le site ont tout changé. Avant, nous dépendions uniquement des recommandations, aujourd'hui nous recevons 3 à 5 appels de nouveaux clients par jour. L'investissement a été rentabilisé dès le premier mois.",
          rating: 5
        },
        {
          name: "Ricardo Martins",
          role: "Martins Occasions",
          text: "Excellent service de support. Pas d'abonnements mensuels coûteux, nous avons payé une seule fois pour le site et Google Maps et le retour a été constant et fiable. Transparence totale.",
          rating: 5
        }
      ]`;

const de_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Restaurantbesitzer",
          text: "Seitdem wir die VELKS-Website implementiert haben, sind die Reservierungen um 40 % gestiegen. Die KI antwortet den Kunden nachts, während wir uns ausruhen. Beeindruckend.",
          rating: 5
        },
        {
          name: "Marta Sousa",
          role: "Immobilienmaklerin",
          text: "Unser Google Maps-Profil war unsichtbar. In 2 Wochen waren wir an der Spitze. Heute erhalten wir täglich Anrufe, ohne einen Cent für Anzeigen auszugeben.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Klinikleiter",
          text: "Die Designqualität ist phänomenal. Sie vermittelt genau das Exzellenzniveau unserer Klinik. Der KI-Assistent hat bereits Dutzende von Terminen automatisch vereinbart.",
          rating: 5
        },
        {
          name: "Carlos Silva",
          role: "Inhaber, Silva & Söhne Bau",
          text: "Das Google Maps-Paket und die Website haben alles verändert. Früher verließen wir uns nur auf Empfehlungen, heute erhalten wir täglich 3 bis 5 Anrufe von Neukunden. Die Investition hat sich im ersten Monat amortisiert.",
          rating: 5
        },
        {
          name: "Ricardo Martins",
          role: "Martins Automobile",
          text: "Hervorragender Support. Keine teuren monatlichen Gebühren, wir haben einmalig für die Website und Google Maps bezahlt und die Rendite war konstant und zuverlässig. Absolute Transparenz.",
          rating: 5
        }
      ]`;

const es_list = `list: [
        {
          name: "Ricardo Silva",
          role: "Propietario de Restaurante",
          text: "Desde que implementamos el sitio web de VELKS, las reservas han aumentado un 40%. La IA responde a los clientes por la noche mientras descansamos. Impresionante.",
          rating: 5
        },
        {
          name: "Marta Sousa",
          role: "Gestora Inmobiliaria",
          text: "Nuestro perfil de Google Maps era invisible. En 2 semanas llegamos a la cima. Hoy recibimos llamadas diarias sin gastar ni un céntimo en anuncios.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Director de Clínica",
          text: "La calidad del diseño es fenomenal. Transmite exactamente el nivel de excelencia de nuestra clínica. El asistente de IA ya ha programado decenas de citas automáticamente.",
          rating: 5
        },
        {
          name: "Carlos Silva",
          role: "Propietario, Silva & Hijos Construcción",
          text: "El paquete de Google Maps y la web lo cambiaron todo. Antes dependíamos solo de recomendaciones, hoy recibimos de 3 a 5 llamadas de clientes nuevos al día. La inversión se pagó en el primer mes.",
          rating: 5
        },
        {
          name: "Ricardo Martins",
          role: "Martins Automóviles",
          text: "Excelente servicio de soporte. Sin costosas cuotas mensuales, pagamos una sola vez por el sitio y Google Maps y el retorno ha sido constante y fiable. Transparencia total.",
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
  
  // Replace the list array for testimonials
  // Note: we need to replace list: [ ... ] inside testimonials: { ... }
  // We can use a regex that matches list: [ ... ] just inside testimonials.
  
  // Find "testimonials: {" inside this block
  const testIdx = block.indexOf("testimonials: {");
  if(testIdx !== -1) {
    const listStartIdx = block.indexOf("list: [", testIdx);
    if(listStartIdx !== -1) {
      // Find the closing bracket of list: [
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
console.log('Fixed testimonials for all languages.');
