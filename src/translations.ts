export type Language = 'pt' | 'it' | 'en' | 'fr' | 'de' | 'es';

export interface TranslationSchema {
  nav: {
    hero: string;
    problem: string;
    solution: string;
    authority: string;
    widget: string;
    pricing: string;
    demos: string;
    faq: string;
  };
  hero: {
    tracking: string;
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustPilot: string;
  };
  problem: {
    title: string;
    subtitle: string;
    cards: {
      invisible: { title: string; desc: string };
      reviews: { title: string; desc: string };
      contacts: { title: string; desc: string };
      oldSite: { title: string; desc: string };
      lostClients: { title: string; desc: string };
    };
  };
  solution: {
    title: string;
    subtitle: string;
    cards: {
      gmaps: { title: string; desc: string };
      website: { title: string; desc: string };
      bot: { title: string; desc: string };
      leads: { title: string; desc: string };
      automation: { title: string; desc: string };
    };
  };
  authority: {
    title: string;
    subtitle: string;
    luxembourg: { name: string; tag: string; desc: string };
    portugal: { name: string; tag: string; desc: string };
    spain: { name: string; tag: string; desc: string };
    metrics: {
      clients: string;
      delivered: string;
      roi: string;
      support: string;
    };
  };
  widget: {
    resetTitle: string;
    responseTime: string;
    title: string;
    subtitle: string;
    steps: string[];
    capabilitiesTitle: string;
    capabilities: string[];
    demoTitle: string;
    demoSubtitle: string;
    placeholderInput: string;
    demoPresetRestaurante: string;
    demoPresetImobiliaria: string;
    demoPresetClinica: string;
    demoPresetServicos: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    list: {
      name: string;
      role: string;
      text: string;
      rating: number;
      isGoogle?: boolean;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    singlePayment: string;
    allPlansInclude: string;
    allPlansIncludeDesc: string;
    plans: {
      gmaps: {
        title: string;
        price: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      website: {
        title: string;
        price: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      automacao: {
        title: string;
        price: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      ecommerce: {
        title: string;
        price: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      custom: {
        title: string;
        price: string;
        features: string[];
        cta: string;
        tracking: string;
      };
    };
  };
  demos: {
    demoTracking: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      restaurants: string;
      realestate: string;
      clinics: string;
      localservices: string;
    };
    cta: string;
    clickToSee: string;
  };
  aivision: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    cta: string;
    microcopy: string;
  };
  faq: {
    title: string;
    questions: { q: string; a: string }[];
  };
  ctaFinal: {
    tracking: string;
    title: string;
    subtitle: string;
    cta: string;
    microcopy: string;
  };
  footer: {
    logoDesc: string;
    legalNoticeTitle: string;
    legalNoticeText: string;
    directContacts: string;
    hqLocations: string;
    legalDisclaimer: string;
    europeanCompliance: string;
    hqMain: string;
    hqSec: string;
    policyPrivacy: string;
    policyCookies: string;
    terms: string;
    compliance: string;
    legal: string;
    gdpr: string;
    rights: string;
  };
  cookieConsent: {
    text: string;
    accept: string;
    decline: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      hero: "Início",
      problem: "O Problema",
      solution: "A Solução",
      authority: "Presença",
      widget: "Assistente IA",
      pricing: "Pacotes",
      demos: "Demonstrações",
      faq: "FAQ",
    },
    hero: {
      tracking: "Olá. Vi a vossa infraestrutura tecnológica no site e gostaria de verificar se a minha empresa se qualifica para implementar o vosso sistema comercial. Podem enviar-me a tabela de preços?",
      badge: "★ DOMÍNIO ABSOLUTO DO MERCADO",
      title: "O seu negócio merece aparecer antes dos seus concorrentes.",
      subtitle: "Domine o Google, esmague a concorrência com um site implacável e deixe a nossa IA fechar negócios 24/7. Sem mensalidades recorrentes.",
      ctaPrimary: "ATIVAR MÁQUINA DE VENDAS",
      ctaSecondary: "Ver Pacotes",
      trustPilot: "Excelente 4.9/5 estrelas no Google & Redes de Negócios"
    },
    problem: {
      title: "A Dor de Ser Invisível",
      subtitle: "Se o seu negócio não é o primeiro a ser encontrado, você está a financiar o crescimento dos seus concorrentes. O mercado mudou e o amadorismo custa caro.",
      cards: {
        invisible: {
          title: "Invisível no Google",
          desc: "92% dos clientes escolhem empresas na primeira página. Se você não aparece, você simplesmente não existe para eles."
        },
        reviews: {
          title: "Poucas Avaliações",
          desc: "Negócios sem prova social ativa transmitem desconfiança. Clientes compram de quem os outros recomendam."
        },
        contacts: {
          title: "Falta de Contactos",
          desc: "Depender apenas de recomendações 'boca a boca' é uma roleta russa financeira. O seu negócio precisa de um fluxo constante."
        },
        oldSite: {
          title: "Site Antigo ou Inexistente",
          desc: "Um site lento ou desatualizado afasta clientes premium. A sua presença digital é o espelho do seu profissionalismo."
        },
        lostClients: {
          title: "Clientes Perdidos Fora d'Hora",
          desc: "64% dos clientes chegam à noite ou no fim de semana. Sem atendimento automático imediato, eles vão para a concorrência."
        }
      }
    },
    solution: {
      title: "O Método VELKS para Dominar o Mercado",
      subtitle: "Não vendemos código nem tecnologia. Vendemos agendamentos cheios, clientes qualificados e processos automáticos que faturam por si.",
      cards: {
        gmaps: {
          title: "Otimização Google Maps",
          desc: "Posicionamos o seu negócio no topo das pesquisas locais para que seja a escolha óbvia na sua região."
        },
        website: {
          title: "Websites de Alta Conversão",
          desc: "Páginas desenhadas especificamente para telemóveis, focadas em fazer o visitante clicar e iniciar conversa."
        },
        bot: {
          title: "Assistente IA 24/7",
          desc: "Um assistente inteligente que responde em segundos, tira dúvidas e captura o contacto do cliente automaticamente."
        },
        leads: {
          title: "Captação Ativa de Clientes",
          desc: "Sistemas simples e diretos para recolher dados de contacto de potenciais clientes interessados nos seus serviços."
        },
        automation: {
          title: "Automação Sem Complicações",
          desc: "Sincronização imediata de pedidos para o seu WhatsApp ou Email, sem que precise de gerir painéis complexos."
        }
      }
    },
    authority: {
      title: "Engenharia de Conversão de Elite",
      subtitle: "Aplicamos metodologias e padrões comprovados em mercados europeus altamente competitivos e exigentes para ajudar pequenos negócios a crescer de forma sólida.",
      luxembourg: {
        name: "Luxemburgo",
        tag: "Sede Principal",
        desc: "Onde gerimos a estratégia financeira, normas europeias de compliance e arquitetura de dados do grupo VELKS."
      },
      portugal: {
        name: "Portugal",
        tag: "Centro de Desenvolvimento",
        desc: "A nossa equipa de design e desenvolvimento focada em converter visitantes em clientes premium."
      },
      spain: {
        name: "Espanha",
        tag: "Expansão Comercial",
        desc: "Operações dedicadas ao mercado ibérico de alta densidade e comércio local dinâmico."
      },
      metrics: {
        clients: "+240 Clientes Locais Atendidos",
        delivered: "+350 Projetos Premium Entregues",
        roi: "+320% ROI Médio Estimado",
        support: "Suporte Total Sem Dor de Cabeça"
      }
    },
    widget: {
      resetTitle: "Reiniciar",
      responseTime: "Resposta em 1.2s",
      title: "Teste a nossa IA Agora",
      subtitle: "Interaja com o Concierge IA abaixo. Escolha um cenário e veja como ele qualifica clientes e fecha vendas por si, a qualquer hora.",
      steps: [
        "1. Escolha o tipo de negócio",
        "2. Interaja como se fosse um cliente",
        "3. Imagine isto no seu próprio site"
      ],
      capabilitiesTitle: "O que o Concierge IA faz?",
      capabilities: [
        "Responde a perguntas complexas sobre os seus serviços em segundos",
        "Qualifica clientes e recolhe contactos (Nome, Email, Telemóvel)",
        "Agenda serviços e integra diretamente com o seu calendário",
        "Fala múltiplos idiomas simultaneamente sem tradutores"
      ],
      demoTitle: "Simulador ao Vivo",
      demoSubtitle: "Clique num dos perfis abaixo",
      placeholderInput: "Escreva a sua mensagem aqui...",
      demoPresetRestaurante: "Restaurante",
      demoPresetImobiliaria: "Imobiliária",
      demoPresetClinica: "Clínica",
      demoPresetServicos: "Serviços"
    },
    testimonials: {
      title: "O Que Dizem os Nossos Clientes",
      subtitle: "Donos de negócios reais que transformaram a sua presença digital e dominaram o mercado local com a infraestrutura VELKS.",
      list: [
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
      ]
    },
    pricing: {
      title: "Soluções Transparentes. Pagamento Único.",
      subtitle: "Esqueça mensalidades abusivas e plataformas que bloqueiam o seu acesso. Na VELKS paga apenas uma vez e a infraestrutura é 100% sua. Sem surpresas.",
      singlePayment: "PAGAMENTO ÚNICO",
      allPlansInclude: "Todos os pacotes incluem:",
      allPlansIncludeDesc: "Suporte premium, total conformidade com o RGPD, design focado em telemóveis e otimização de velocidade máxima.",
      plans: {
        gmaps: {
          title: "Google Maps Profissional",
          price: "90€",
          features: [
            "Configuração e Reivindicação Completa",
            "Otimização SEO Local Avançada",
            "Carregamento de Fotos Profissionais",
            "Inserção de Produtos e Serviços",
            "Link Direto para Avaliações",
            "Estratégia de Posicionamento Local",
            "Ativação de Mensagens Diretas"
          ],
          cta: "DOMINAR O TOP 3 LOCAL",
          tracking: "Olá! Tenho interesse no pacote Google Maps Profissional. Os especialistas da VELKS podiam ajudar-me?"
        },
        website: {
          title: "Site Profissional Premium",
          price: "190€",
          features: [
            "Landing Page Ultra Rápida",
            "Design Mobile-First Exclusivo",
            "Otimização SEO para o Google",
            "Integração Direta com WhatsApp",
            "Configuração do Domínio Pessoal",
            "30 Dias de Suporte Gratuito",
            "Conformidade RGPD & Segurança SSL"
          ],
          cta: "ATIVAR MÁQUINA DE VENDAS",
          tracking: "Olá! Tenho interesse no pacote Site Profissional. Qual é o primeiro passo para construirmos a minha nova máquina de vendas?"
        },
        automacao: {
          title: "Automação de Atendimento",
          price: "250€",
          features: [
            "Triagem automática e qualificação de clientes.",
            "Integração direta com WhatsApp ou Instagram.",
            "Menu estratégico de respostas imediatas (24/7).",
            "Configuração de fluxos em 2 idiomas.",
            "Captura e reencaminhamento de orçamentos.",
            "Zero consumo de API e zero mensalidades."
          ],
          cta: "BLINDAR O ATENDIMENTO 24/7",
          tracking: "Olá, Equipa VELKS. Analisei a tabela de preços no site e tenho interesse em avançar com a Assistência Automática de IA. Qual é o próximo passo?"
        },
        ecommerce: {
          title: "E-Commerce Completo",
          price: "300€",
          features: [
            "Criação & Personalização de Loja",
            "Pronto para Print on Demand / Dropshipping",
            "Ideal para Negócios Locais, Digitais ou Híbridos",
            "Mapa dos Melhores Fornecedores do Mercado",
            "Integração de Pagamentos Seguros",
            "Configuração de Envios e Stock",
            "Painel de Controlo Super Simples"
          ],
          cta: "ESCALAR A FATURAÇÃO ONLINE",
          tracking: "Olá, Equipa VELKS. Analisei a tabela de preços no site e tenho interesse em avançar com o pacote E-Commerce Completo. Qual é o próximo passo?"
        },
        custom: {
          title: "Pack Imperial B2B",
          price: "Sob Consulta",
          features: [
            "Google Maps + Website Premium + Automação de Atendimento.",
            "Copywriting agressivo focado exclusivamente em ROI.",
            "Suporte técnico e estratégico prioritário.",
            "Otimização avançada de SEO Multi-idioma.",
            "Posicionamento de Autoridade (Domínio de Nicho).",
            "Consultoria estratégica de conversão."
          ],
          cta: "AGENDAR AUDITORIA PRIVADA",
          tracking: "Olá, Equipa VELKS. O meu negócio precisa de uma reestruturação digital profunda. Gostaria de agendar uma auditoria privada com um especialista da VELKS para discutir a solução All-In-One Imperial. Podem ajudar-me?"
        }
      }
    },
    demos: {
      demoTracking: "Olá! Quero testar a demonstração interativa para {demoTitle} e ver na prática como esta tecnologia pode escalar os meus resultados. Podemos iniciar o teste?",
      title: "Demonstrações Interativas",
      subtitle: "Explore exemplos reais de como transformamos a presença online de negócios locais.",
      categories: {
        all: "Todos",
        restaurants: "Restaurantes",
        realestate: "Imobiliárias",
        clinics: "Clínicas Médicas",
        localservices: "Serviços Locais",
      },
      cta: "Falar com Consultor",
      clickToSee: "Ver Demonstração Interativa"
    },
    aivision: {
      badge: "Desenvolvida pela equipa de Engenharia de IA da VELKS",
      title1: "A sua empresa ",
      titleHighlight: "não devia parar",
      title2: " quando você para.",
      subtitle: "A maioria dos empresários nunca a constrói. Por isso continuam presos ao telefone, às mensagens e aos mesmos problemas todos os dias.",
      cta: "VER O QUE ESTÁ A PERDER",
      microcopy: "Descubra em menos de 60 segundos porque algumas empresas crescem mais rápido do que outras."
    },
    faq: {
      title: "Perguntas Frequentes",
      questions: [
        {
          q: "Quanto tempo demora a entrega?",
          a: "Otimizações de Google Maps demoram tipicamente entre 3 a 5 dias úteis. Websites profissionais premium e assistentes virtuais de atendimento automático são entregues e testados em 7 a 14 dias úteis."
        },
        {
          q: "O site funciona bem em telemóvel?",
          a: "Sim, absolutamente. Desenvolvemos com foco total em Mobile-First, porque mais de 85% dos contactos locais são feitos através de smartphones. O seu site será extremamente rápido e intuitivo em qualquer ecrã."
        },
        {
          q: "Posso usar o meu domínio atual?",
          a: "Sim. Se já tem um domínio registado (ex: www.seunegocio.com), vamos configurar tudo para apontar para o novo site premium sem custos adicionais. Se não tem, ajudamos a escolher e a registar."
        },
        {
          q: "A VELKS possui outros websites oficiais?",
          a: "Sim.\nAlém do website institucional da VELKS Group, desenvolvemos produtos e soluções em domínios próprios para oferecer uma experiência mais focada e especializada.\nProjetos oficiais atualmente operados pela VELKS:\n• velks.space — Plataforma oficial da ORION AI e soluções de atendimento inteligente.\n• vgroup.space — Portfólio digital, demonstrações, estudos de caso e projetos desenvolvidos pela equipa VELKS.\nTodos os websites acima pertencem à VELKS Group e são mantidos pela nossa equipa de engenharia e desenvolvimento.\nPode navegar com total confiança."
        },
        {
          q: "Como descubro quanto custaria implementar a ORION na minha empresa?",
          a: "A forma mais rápida é falar diretamente com a ORION.\nO assistente consegue analisar o seu negócio, esclarecer dúvidas, apresentar funcionalidades e indicar a solução mais adequada para o seu caso.\nClique no ícone de conversa no canto inferior direito e receba orientação imediata."
        },
        {
          q: "O que acontece se eu não responder aos meus clientes imediatamente?",
          a: "Na maioria dos casos, eles entram em contacto com outra empresa.\nHoje a velocidade de resposta influencia diretamente a decisão de compra.\nA ORION ajuda a garantir que cada visitante recebe atenção imediata, mesmo quando a sua equipa está ocupada, fora do escritório ou a dormir."
        }
      ]
    },
    ctaFinal: {
      tracking: "Olá. Li a vossa página toda e percebi que estou a perder dinheiro para a concorrência. Quero entender exatamente como a vossa tecnologia pode blindar o meu negócio imediatamente. Podemos falar?",
      title: "Pare de perder clientes para quem oferece menos que você.",
      subtitle: "Enquanto lê isto, o seu concorrente está a receber chamadas. Vamos mudar isso hoje?",
      cta: "BLINDAR O MEU NEGÓCIO AGORA",
      microcopy: "Sem compromisso • Resposta imediata • Orçamento gratuito"
    },
    footer: {
      legalNoticeTitle: "AVISO JURÍDICO & TITULARIDADE",
      legalNoticeText: "A marca VELKS Group e todas as suas operações digitais são fundadas, detidas e geridas legalmente por Rosa Sofia Sousa Marques (Founder) e Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTACTOS DIRETOS",
      hqLocations: "ESCRITÓRIOS CENTRAIS",
      legalDisclaimer: "Avisos Legais",
      europeanCompliance: "Conformidade Europeia",
      logoDesc: "Transformamos negócios dependentes do dono em máquinas autónomas de lucro. O seu domínio no Google torna-se absoluto e a nossa IA fecha vendas 24/7. Resultados reais e sem mensalidades recorrentes, para que recupere o seu tempo e a sua liberdade.",
      hqMain: "Sede Principal: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxemburgo",
      hqSec: "Sede Secundária: Coimbra, Portugal",
      policyPrivacy: "Política de Privacidade",
      policyCookies: "Política de Cookies",
      terms: "Termos e Condições",
      compliance: "Compliance Europeu",
      legal: "Avisos Legais",
      gdpr: "Conformidade RGPD UE",
      rights: "© 2026 VELKS Group. Todos os direitos reservados."
    },
    cookieConsent: {
      text: "Utilizamos cookies e tecnologias semelhantes para garantir a melhor experiência de navegação e analisar o tráfego do nosso site, em total conformidade com o RGPD da UE.",
      accept: "Aceitar Todos",
      decline: "Recusar"
    }
  },
  it: {
    nav: {
      hero: "Inizio",
      problem: "Il Problema",
      solution: "La Soluzione",
      authority: "Presenza",
      widget: "Assistente IA",
      pricing: "Pacchetti",
      demos: "Dimostrazioni",
      faq: "FAQ",
    },
    hero: {
      tracking: "Ciao. Ho visto la vostra infrastruttura tecnologica sul sito e vorrei verificare se la mia azienda si qualifica per implementare il vostro sistema commerciale. Potete inviarmi il listino prezzi?",
      badge: "★ DOMINIO ASSOLUTO DEL MERCATO",
      title: "La tua attività merita di apparire prima dei tuoi concorrenti.",
      subtitle: "Creiamo siti web premium, profili Google Maps professionali e sistemi di risposta automatica per aiutarti a generare più contatti e chiudere più clienti ogni giorno. Senza abbonamenti mensili.",
      ctaPrimary: "ATTIVARE MACCHINA DELLE VENDITE",
      ctaSecondary: "Vedi Pacchetti",
      trustPilot: "Eccellente 4.9/5 stelle su Google & Business Networks"
    },
    problem: {
      title: "Il Dolore di Essere Invisibili",
      subtitle: "Se la tua attività non viene trovata per prima, stai finanziando la crescita dei tuoi concorrenti. Il mercato è cambiato e l'improvvisazione costa cara.",
      cards: {
        invisible: {
          title: "Invisibile su Google",
          desc: "Il 92% dei clienti sceglie attività sulla prima pagina. Se non appari, semplicemente non esisti per loro."
        },
        reviews: {
          title: "Poche Recensioni",
          desc: "Le attività senza una prova sociale attiva trasmettono diffidenza. I clienti acquistano da chi viene raccomandato dagli altri."
        },
        contacts: {
          title: "Mancanza di Contatti",
          desc: "Affidarsi solo al passaparola è una roulette russa finanziaria. La tua attività ha bisogno di un flusso costante."
        },
        oldSite: {
          title: "Sito Vecchio o Inesistente",
          desc: "Un sito lento o brutto allontana i clienti premium. La tua presenza digitale è lo specchio della tua professionalità."
        },
        lostClients: {
          title: "Clienti Persi Fuori Orario",
          desc: "Il 64% dei clienti arriva di sera o nel weekend. Senza una risposta automatica immediata, si rivolgono alla concorrenza."
        }
      }
    },
    solution: {
      title: "Il Metodo VELKS per Dominare il Mercato",
      subtitle: "Non vendiamo codice o tecnologia. Vendiamo appuntamenti, clienti qualificati e processi automatici che fatturano per te.",
      cards: {
        gmaps: {
          title: "Ottimizzazione Google Maps",
          desc: "Posizioniamo la tua attività in cima alle ricerche locali in modo che sia la scelta ovvia nella tua zona."
        },
        website: {
          title: "Siti Web ad Alta Conversione",
          desc: "Pagine progettate specificamente per smartphone, focalizzate sul far cliccare il visitatore per avviare una chat."
        },
        bot: {
          title: "Assistente IA 24/7",
          desc: "Un assistente intelligente che risponde in pochi secondi, risolve dubbi e cattura i dati del cliente automaticamente."
        },
        leads: {
          title: "Generazione Attiva di Clienti",
          desc: "Sistemi semplici e diretti per raccogliere i dati di contatto dei potenziali clienti interessati ai tuoi servizi."
        },
        automation: {
          title: "Automazione Semplice",
          desc: "Sincronizzazione immediata delle richieste sulla tua email o WhatsApp, senza dover gestire pannelli complessi."
        }
      }
    },
    authority: {
      title: "Operiamo tra Portogallo, Spagna e Lussemburgo",
      subtitle: "Applichiamo metodi e standard utilizzati nei mercati europei altamente competitivi ed esigenti per aiutare le piccole imprese a crescere online in modo solido.",
      luxembourg: {
        name: "Lussemburgo",
        tag: "Sede Principale",
        desc: "Dove gestiamo la strategia finanziaria, gli standard europei di conformità e l'ingegneria dei dati di VELKS Group."
      },
      portugal: {
        name: "Portogallo",
        tag: "Centro di Sviluppo",
        desc: "Team di design e sviluppo focalizzato sulla conversione dei visitatori in clienti premium."
      },
      spain: {
        name: "Spagna",
        tag: "Espansione di Mercato",
        desc: "Operazioni dedicate al mercato iberico ad alta densità e al dinamico commercio locale."
      },
      metrics: {
        clients: "+240 Clienti Serviti",
        delivered: "+350 Progetti Consegnati",
        roi: "+320% ROI Medio Stimato",
        support: "Supporto Totale Senza Complicazioni"
      }
    },
    widget: {
      resetTitle: "Riavvia Demo",
      responseTime: "Risposta in 1.2s",
      title: "Risposta automatica 24 ore su 24",
      subtitle: "Il tuo nuovo assistente commerciale lavora mentre dormi, assicurandoti che nessun cliente potenziale venga ignorato.",
      steps: [
        "Il visitatore entra nel tuo sito web.",
        "L'assistente risponde automaticamente in meno di 2 secondi.",
        "Risolve istantaneamente i dubbi più comuni.",
        "Raccoglie dati come Nome, Telefono, Email e Interesse.",
        "Fissa appuntamenti o inoltra i dati consolidati.",
        "Invia un riepilogo completo direttamente sulla tua email o WhatsApp.",
        "Modello di linguaggio altamente addestrato per suonare naturale e umano."
      ],
      capabilitiesTitle: "Cosa può fare l'assistente per te:",
      capabilities: [
        "Rispondere alle domande frequenti",
        "Mostrare prezzi e pacchetti di servizi",
        "Catturare lead qualificate in tempo reale",
        "Fissare appuntamenti di consulenza",
        "Inoltrare richieste urgenti al WhatsApp del tuo team",
        "Inviare riepiloghi delle chat direttamente alla tua Email"
      ],
      demoTitle: "Simulatore di Assistente Virtuale VELKS",
      demoSubtitle: "Seleziona un settore qui sotto e testa in tempo reale il potere della conversione automatica:",
      placeholderInput: "Scrivi il tuo messaggio qui...",
      demoPresetRestaurante: "Simulatore Ristorante 🍔",
      demoPresetImobiliaria: "Simulatore Immobiliare 🏠",
      demoPresetClinica: "Simulatore Clinica Medica 🩺",
      demoPresetServicos: "Simulatore Costruzioni/Servizi 🔨"
    },
    testimonials: {
      title: "Chi si fida di VELKS Group",
      subtitle: "Storie reali di imprenditori locali usciti dall'invisibilità che oggi dominano le ricerche nella loro zona.",
      list: [
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
      ]
    },
    pricing: {
      title: "Pacchetti Trasparenti Senza Sorprese",
      subtitle: "Pagamento unico. Nessun abbonamento obbligatorio, nessuna tassa nascosta. Puro investimento sulla tua crescita.",
      singlePayment: "PAGAMENTO UNICO",
      allPlansInclude: "Tutti i pacchetti includono:",
      allPlansIncludeDesc: "Supporto premium, conformità totale GDPR, design mobile-first e ottimizzazione per la massima velocità di caricamento.",
      plans: {
        gmaps: {
          title: "Google Maps Professionale",
          price: "90€",
          features: [
            "Configurazione & Rivendicazione Completa",
            "Ottimizzazione SEO Locale Avanzata",
            "Caricamento di Foto Professionali",
            "Inserimento di Servizi & Prodotti",
            "Creazione Link Diretto per Recensioni",
            "Strategia di Posizionamento Locale",
            "Attivazione dei Messaggi Diretti"
          ],
          cta: "DOMINARE LA TOP 3 LOCALE",
          tracking: "Ciao! Sono interessato al pacchetto Google Maps Professionale. Gli specialisti di VELKS potrebbero aiutarmi?"
        },
        website: {
          title: "Sito Web Professionale Premium",
          price: "190€",
          features: [
            "Landing Page Ultra Veloce",
            "Design Mobile-First Esclusivo",
            "Ottimizzazione SEO per Google",
            "Integrazione Diretta con WhatsApp",
            "Configurazione del Dominio Personale",
            "30 Giorni di Supporto Gratuito",
            "Conformità GDPR & Sicurezza SSL"
          ],
          cta: "ATTIVARE MACCHINA DELLE VENDITE",
          tracking: "Ciao! Sono interessato al pacchetto Sito Web Professionale. Qual è il primo passo per costruire la mia nuova macchina per le vendite?"
        },
        automacao: {
          title: "Automazione dell'Assistenza",
          price: "250€",
          features: [
            "Triage automatico e qualificazione dei clienti.",
            "Integrazione diretta con WhatsApp o Instagram.",
            "Menu strategico di risposte immediate (24/7).",
            "Configurazione dei flussi in 2 lingue.",
            "Acquisizione e inoltro di preventivi.",
            "Zero consumo API e zero canoni mensili."
          ],
          cta: "BLINDARE L'ASSISTENZA 24/7",
          tracking: "Ciao, Team VELKS. Ho analizzato il listino prezzi sul sito e sono interessato ad andare avanti con l'Assistenza Automatica IA. Qual è il prossimo passo per iniziare l'integrazione?"
        },
        ecommerce: {
          title: "E-commerce Completo",
          price: "300€",
          features: [
            "Creazione & Personalizzazione Negozio Online",
            "Pronto per Print on Demand / Dropshipping",
            "Ideale per Attività Locale, Digitale o Ibrida",
            "Mappa dei Migliori Fornitori sul Mercato",
            "Integrazione di Pagamenti Sicuri",
            "Configurazione Spedizioni e Stock",
            "Pannello di Controllo Super Semplice"
          ],
          cta: "SCALARE IL FATTURATO ONLINE",
          tracking: "Ciao, Team VELKS. Ho analizzato il listino prezzi sul sito e sono interessato ad andare avanti con il pacchetto E-Commerce Completo. Qual è il prossimo passo per iniziare l'integrazione?"
        },
        custom: {
          title: "Pack Imperial B2B",
          price: "Su Richiesta",
          features: [
            "Google Maps + Sito Web Premium + Automazione dell'Assistenza.",
            "Copywriting aggressivo focalizzato esclusivamente sul ROI.",
            "Supporto tecnico e strategico prioritario.",
            "Ottimizzazione SEO multilingua avanzata.",
            "Posizionamento di Autorità (Dominio di Nicchia).",
            "Consulenza strategica di conversione."
          ],
          cta: "PRENOTA AUDIT PRIVATO",
          tracking: "Ciao, Team VELKS. La mia attività necessita di una profonda ristrutturazione digitale. Vorrei prenotare un audit privato con uno specialista VELKS per discutere della soluzione All-In-One Imperial. Potreste aiutarmi?"
        }
      }
    },
    demos: {
      demoTracking: "Ciao! Voglio testare la demo interattiva per {demoTitle} e vedere in pratica come questa tecnologia può far crescere i miei risultati. Possiamo iniziare il test?",
      title: "Dimostrazioni Interattive",
      subtitle: "Esplora esempi reali di come trasformiamo la presenza online delle attività locali.",
      categories: {
        all: "Tutti",
        restaurants: "Ristoranti",
        realestate: "Immobiliari",
        clinics: "Cliniche Mediche",
        localservices: "Servizi Locali",
      },
      cta: "Parla con un Consulente",
      clickToSee: "Vedi Demo Interattiva"
    },
        aivision: {
      badge: "Sviluppato dal team di Ingegneria IA di VELKS",
      title1: "La tua azienda ",
      titleHighlight: "non dovrebbe fermarsi",
      title2: " quando ti fermi tu.",
      subtitle: "La maggior parte degli imprenditori non la costruisce mai. Per questo rimangono bloccati al telefono, ai messaggi e agli stessi problemi ogni giorno.",
      cta: "SCOPRI COSA TI STAI PERDENDO",
      microcopy: "Scopri in meno di 60 secondi perché alcune aziende crescono più velocemente di altre."
    },
    faq: {
      title: "Domande Frequenti",
      questions: [
        {
          q: "Quanto tempo richiede la consegna?",
          a: "L'ottimizzazione di Google Maps richiede solitamente da 3 a 5 giorni lavorativi. I siti web premium e gli assistenti virtuali automatici vengono consegnati e testati in 7-14 giorni lavorativi."
        },
        {
          q: "Il sito funziona bene da cellulare?",
          a: "Sì, assolutamente. Sviluppiamo con focus totale sul Mobile-First, poiché oltre l'85% delle ricerche locali avviene tramite smartphone. Il tuo sito sarà velocissimo e reattivo su ogni schermo."
        },
        {
          q: "Posso usare il mio dominio attuale?",
          a: "Sì. Se hai già un dominio registrato (es: www.tuattivita.com), configureremo tutto per puntare al nuovo sito premium senza costi aggiuntivi. Se non ne hai uno, ti aiuteremo a sceglierlo e registrarlo."
        },
        {
          q: "VELKS ha altri siti web ufficiali?",
          a: "Sì.\nOltre al sito istituzionale di VELKS Group, sviluppiamo prodotti e soluzioni su domini propri per offrire un'esperienza più mirata e specializzata.\nProgetti ufficiali attualmente operati da VELKS:\n• velks.space — Piattaforma ufficiale di ORION AI e soluzioni di assistenza intelligente.\n• vgroup.space — Portfolio digitale, demo, case study e progetti sviluppati dal team VELKS.\nTutti i siti web sopra citati appartengono a VELKS Group e sono gestiti dal nostro team di ingegneria e sviluppo.\nPuoi navigare in totale sicurezza."
        },
        {
          q: "Come scopro quanto costerebbe implementare ORION nella mia azienda?",
          a: "Il modo più veloce è parlare direttamente con ORION.\nL'assistente è in grado di analizzare la tua attività, chiarire dubbi, presentare le funzionalità e indicare la soluzione più adatta al tuo caso.\nClicca sull'icona della chat nell'angolo in basso a destra e ricevi assistenza immediata."
        },
        {
          q: "Cosa succede se non rispondo immediatamente ai miei clienti?",
          a: "Nella maggior parte dei casi, contattano un'altra azienda.\nOggi la velocità di risposta influenza direttamente la decisione di acquisto.\nORION ti aiuta a garantire che ogni visitatore riceva attenzione immediata, anche quando il tuo team è occupato, fuori ufficio o dorme."
        }
      ]
    },
    ctaFinal: {
      tracking: "Ciao. Ho letto tutta la vostra pagina e ho capito che sto perdendo soldi a favore della concorrenza. Voglio capire esattamente come la vostra tecnologia può blindare la mia attività immediatamente. Possiamo parlarne?",
      title: "Smetti di perdere clienti a favore di chi offre meno di te.",
      subtitle: "Mentre leggi questo, il tuo concorrente sta ricevendo chiamate. Cambiamo la situazione oggi?",
      cta: "BLINDARE L'AZIENDA ORA",
      microcopy: "Nessun impegno • Risposta immediata • Preventivo gratuito"
    },
    footer: {
      legalNoticeTitle: "AVVISO LEGALE & PROPRIETÀ",
      legalNoticeText: "Il marchio VELKS Group e tutte le sue operazioni digitali sono fondate, possedute e gestite legalmente da Rosa Sofia Sousa Marques (Founder) e Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTATTI DIRETTI",
      hqLocations: "SEDI CENTRALI",
      legalDisclaimer: "Note Legali",
      europeanCompliance: "Conformità Europea",
      logoDesc: "Trasformiamo le imprese dipendenti dal proprietario in macchine da profitto autonome. Il tuo dominio su Google diventa assoluto e la nostra IA chiude le vendite 24/7. Risultati reali e zero abbonamenti ricorrenti, così puoi recuperare il tuo tempo e la tua libertà.",
      hqMain: "Sede Principale: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Lussemburgo",
      hqSec: "Sede Secondaria: Coimbra, Portogallo",
      policyPrivacy: "Informativa sulla Privacy",
      policyCookies: "Informativa sui Cookie",
      terms: "Termini e Condizioni",
      compliance: "Conformità Europea",
      legal: "Note Legali",
      gdpr: "Conformità GDPR UE",
      rights: "© 2026 VELKS Group. Tutti i diritti riservati."
    },
    cookieConsent: {
      text: "Utilizziamo cookie e tecnologie simili per garantire la migliore esperienza di navigazione e analizzare il traffico del nostro sito, in totale conformità con il GDPR dell'UE.",
      accept: "Accetta Tutti",
      decline: "Rifiuta"
    }
  },
  en: {
    nav: {
      hero: "Home",
      problem: "The Problem",
      solution: "The Solution",
      authority: "Presence",
      widget: "AI Assistant",
      pricing: "Packages",
      demos: "Demos",
      faq: "FAQ",
    },
    hero: {
      tracking: "Hello. I saw your technological infrastructure on the website and would like to check if my company qualifies to implement your commercial system. Can you send me the pricing table?",
      badge: "★ ABSOLUTE MARKET DOMINANCE",
      title: "Your business deserves to appear before your competitors.",
      subtitle: "We create premium websites, professional Google Maps profiles, and automated customer response systems to help you generate more leads and close more sales daily. No monthly subscriptions.",
      ctaPrimary: "ACTIVATE SALES MACHINE",
      ctaSecondary: "View Packages",
      trustPilot: "Excellent 4.9/5 stars on Google & Business Networks"
    },
    problem: {
      title: "The Cost of Being Invisible",
      subtitle: "If your business isn't the first to be found, you are financing your competitors' growth. The market has changed and amateur digital presence is expensive.",
      cards: {
        invisible: {
          title: "Invisible on Google",
          desc: "92% of customers choose businesses on the first page. If you don't appear, you simply do not exist to them."
        },
        reviews: {
          title: "Few Reviews",
          desc: "Businesses with no active social proof trigger distrust. Customers buy from whoever is recommended by others."
        },
        contacts: {
          title: "Lack of Leads",
          desc: "Relying purely on 'word of mouth' is a financial Russian roulette. Your business needs a consistent, predictable stream of inquiries."
        },
        oldSite: {
          title: "Old or Non-Existent Site",
          desc: "A slow or outdated website drives premium customers away. Your digital presence reflects your professionalism."
        },
        lostClients: {
          title: "Clients Lost After-Hours",
          desc: "64% of customers arrive in the evening or on weekends. Without an instant automated response, they go to your competition."
        }
      }
    },
    solution: {
      title: "The VELKS Framework for Market Dominance",
      subtitle: "We do not sell code or tech. We deliver fully booked calendars, qualified customers, and automated processes that generate revenue for you.",
      cards: {
        gmaps: {
          title: "Google Maps Optimization",
          desc: "We position your business at the very top of local search results to make you the obvious choice in your region."
        },
        website: {
          title: "High-Converting Websites",
          desc: "Pages designed specifically for smartphones, fully optimized to make visitors click and start a chat instantly."
        },
        bot: {
          title: "24/7 AI Assistant",
          desc: "An intelligent web assistant that replies within seconds, answers common questions, and captures customer info."
        },
        leads: {
          title: "Active Customer Capture",
          desc: "Simple, highly focused systems to gather contact details of potential buyers actively seeking your services."
        },
        automation: {
          title: "Frictionless Automation",
          desc: "Immediate synchronization of inquiries directly to your WhatsApp or Email, without needing to manage complex software."
        }
      }
    },
    authority: {
      title: "Operating across Portugal, Spain, and Luxembourg",
      subtitle: "We apply methodologies and standards proven in highly demanding European markets to help local businesses scale online reliably.",
      luxembourg: {
        name: "Luxembourg",
        tag: "Global Headquarters",
        desc: "Where we manage financial strategy, European compliance standards, and core data systems for the VELKS Group."
      },
      portugal: {
        name: "Portugal",
        tag: "Development Center",
        desc: "Our design and engineering hub focused entirely on converting web visitors into premium customers."
      },
      spain: {
        name: "Spain",
        tag: "Market Expansion",
        desc: "Operations dedicated to the high-density Iberian market and dynamic local commerce."
      },
      metrics: {
        clients: "+240 Local Clients Served",
        delivered: "+350 Premium Projects",
        roi: "+320% Average Estimated ROI",
        support: "Total Support With Zero Headaches"
      }
    },
    widget: {
      resetTitle: "Restart Demo",
      responseTime: "Response in 1.2s",
      title: "Automated Customer Response 24/7",
      subtitle: "Your new digital sales assistant works while you sleep, ensuring no potential client is ever left waiting.",
      steps: [
        "A visitor lands on your website.",
        "The AI assistant responds automatically in under 2 seconds.",
        "It answers common questions and overcomes objections instantly.",
        "It collects details: Name, Phone, Email, and what they need.",
        "It books meetings or schedules consultations.",
        "It forwards a polished summary directly to your Email or WhatsApp.",
        "Language model highly trained to speak naturally and feel human."
      ],
      capabilitiesTitle: "What the assistant can do for you:",
      capabilities: [
        "Answer frequently asked questions instantly",
        "Present pricing sheets and service packages",
        "Capture qualified sales leads in real time",
        "Book consultation appointments on your calendar",
        "Forward urgent requests to your team's WhatsApp",
        "Send conversation summaries directly to your Email inbox"
      ],
      demoTitle: "VELKS Virtual Assistant Simulator",
      demoSubtitle: "Select a local industry below and test the power of automated lead generation in real time:",
      placeholderInput: "Type your message here...",
      demoPresetRestaurante: "Restaurant Simulator 🍔",
      demoPresetImobiliaria: "Real Estate Simulator 🏠",
      demoPresetClinica: "Medical Clinic Simulator 🩺",
      demoPresetServicos: "Contractor/Services Simulator 🔨"
    },
    testimonials: {
      title: "Trusted by Local Business Owners",
      subtitle: "Real stories from local entrepreneurs who left digital invisibility to dominate search results in their areas.",
      list: [
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
      ]
    },
    pricing: {
      title: "No Monthly Fees. Zero Surprises. Just Results.",
      subtitle: "We don't sell websites. We build digital machines engineered to generate real results.",
      singlePayment: "ONE-TIME PAYMENT",
      allPlansInclude: "All packages include:",
      allPlansIncludeDesc: "Premium support, full EU GDPR compliance, mobile-first design, and optimization for blazing fast load speeds.",
      plans: {
        gmaps: {
          title: "Professional Google Maps",
          price: "90€",
          features: [
            "Full Setup & Ownership Claiming",
            "Advanced Local SEO Optimization",
            "Professional Photo & Logo Upload",
            "Services & Products Showcase Setup",
            "Direct Review-Generator Link",
            "Local Authority Position Strategy",
            "Direct Messaging Activation"
          ],
          cta: "DOMINATE LOCAL TOP 3",
          tracking: "Hello! I am interested in the Professional Google Maps package. Could VELKS specialists help me?"
        },
        website: {
          title: "Premium Professional Website",
          price: "190€",
          features: [
            "Blazing Fast Premium Landing Page",
            "Exclusive Mobile-First Design",
            "Google SEO Structure & Keyword Ready",
            "Direct WhatsApp Button Integration",
            "Custom Domain Configuration",
            "30 Days of Free Dedicated Support",
            "GDPR compliant & Secure SSL Setup"
          ],
          cta: "ACTIVATE SALES MACHINE",
          tracking: "Hello! I am interested in the Professional Website package. What is the first step to building my new sales machine?"
        },
        automacao: {
          title: "Customer Support Automation",
          price: "250€",
          features: [
            "Automatic triage and customer qualification.",
            "Direct integration with WhatsApp or Instagram.",
            "Strategic menu of immediate responses (24/7).",
            "Flow configuration in 2 languages.",
            "Capture and forwarding of quotes.",
            "Zero API consumption and zero monthly fees."
          ],
          cta: "BULLETPROOF 24/7 SUPPORT",
          tracking: "Hello, VELKS Team. I reviewed the pricing table on the website and I am interested in moving forward with AI Automated Support. What is the next step to start the integration?"
        },
        ecommerce: {
          title: "Complete E-commerce Suite",
          price: "300€",
          features: [
            "Full Custom Online Store Creation",
            "Print on Demand / Dropshipping Setup",
            "Perfect for Local, Digital, or Hybrid Shops",
            "Market-Leading Supplier Sourcing",
            "Secure Payments Integration",
            "Shipping Rules & Inventory Config",
            "Blazing Simple Client Management Desk"
          ],
          cta: "SCALE ONLINE REVENUE",
          tracking: "Hello, VELKS Team. I reviewed the pricing table on the website and I am interested in moving forward with the Complete E-Commerce package. What is the next step to start the integration?"
        },
        custom: {
          title: "Pack Imperial B2B",
          price: "Custom",
          features: [
            "Google Maps + Premium Website + Customer Support Automation.",
            "Aggressive copywriting focused exclusively on ROI.",
            "Priority technical and strategic support.",
            "Advanced multi-language SEO optimization.",
            "Authority Positioning (Niche Domain).",
            "Strategic conversion consulting."
          ],
          cta: "SCHEDULE PRIVATE AUDIT",
          tracking: "Hello, VELKS Team. My business needs a deep digital restructuring. I would like to schedule a private audit with a VELKS specialist to discuss the All-In-One Imperial solution. Could you help me?"
        }
      }
    },
    demos: {
      demoTracking: "Hello! I want to test the interactive demo for {demoTitle} and see in practice how this technology can scale my results. Can we start the test?",
      title: "Interactive Demonstrations",
      subtitle: "Explore live examples of how we revolutionize the digital presence of local shops.",
      categories: {
        all: "All",
        restaurants: "Restaurants",
        realestate: "Real Estate",
        clinics: "Medical Clinics",
        localservices: "Local Services",
      },
      cta: "Talk to a Consultant",
      clickToSee: "Launch Interactive Preview"
    },
        aivision: {
      badge: "Developed by the VELKS AI Engineering team",
      title1: "Your company ",
      titleHighlight: "shouldn't stop",
      title2: " when you do.",
      subtitle: "Most business owners never build it. That's why they stay glued to the phone, messages, and the same problems every day.",
      cta: "SEE WHAT YOU'RE MISSING",
      microcopy: "Discover in less than 60 seconds why some companies grow faster than others."
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Google Maps optimization typically takes 3 to 5 business days. Premium professional websites and automated virtual assistants are delivered and tested in 7 to 14 business days."
        },
        {
          q: "Does the website work well on mobile?",
          a: "Yes, absolutely. We develop with a total focus on Mobile-First, because over 85% of local searches are done via smartphones. Your site will be lightning-fast and highly responsive on any screen."
        },
        {
          q: "Can I use my current domain?",
          a: "Yes. If you already have a registered domain (e.g., www.yourbusiness.com), we will configure everything to point to the new premium site at no extra cost. If you don't have one, we will help you choose and register it."
        },
        {
          q: "Does VELKS have other official websites?",
          a: "Yes.\nIn addition to the VELKS Group institutional website, we develop products and solutions on their own domains to offer a more focused and specialized experience.\nOfficial projects currently operated by VELKS:\n• velks.space — Official platform for ORION AI and intelligent customer service solutions.\n• vgroup.space — Digital portfolio, demos, case studies, and projects developed by the VELKS team.\nAll of the websites above belong to VELKS Group and are maintained by our engineering and development team.\nYou can browse with total confidence."
        },
        {
          q: "How do I find out how much it would cost to implement ORION in my company?",
          a: "The fastest way is to talk directly with ORION.\nThe assistant can analyze your business, answer questions, present features, and recommend the most suitable solution for your case.\nClick on the chat icon in the bottom right corner to receive immediate guidance."
        },
        {
          q: "What happens if I don't respond to my customers immediately?",
          a: "In most cases, they will contact another company.\nToday, response speed directly influences the purchasing decision.\nORION helps ensure that every visitor receives immediate attention, even when your team is busy, out of the office, or sleeping."
        }
      ]
    },
    ctaFinal: {
      tracking: "Hello. I read your entire page and realized I am losing money to the competition. I want to understand exactly how your technology can bulletproof my business immediately. Can we talk?",
      title: "Stop losing customers to competitors who do less.",
      subtitle: "While you read this, your rival is answering a prospect's call. Shall we shift the odds today?",
      cta: "BULLETPROOF MY BUSINESS NOW",
      microcopy: "No commitment • Instant reply • Free quote"
    },
    footer: {
      legalNoticeTitle: "LEGAL NOTICE & OWNERSHIP",
      legalNoticeText: "The VELKS Group brand and all its digital operations are founded, owned, and legally managed by Rosa Sofia Sousa Marques (Founder) and Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "DIRECT CONTACTS",
      hqLocations: "HQ LOCATIONS",
      legalDisclaimer: "Legal Disclaimer",
      europeanCompliance: "European Compliance",
      logoDesc: "We transform owner-dependent businesses into autonomous profit machines. Your Google dominance becomes absolute and our AI closes sales 24/7. Real results and zero monthly fees, so you can reclaim your time and freedom.",
      hqMain: "Main Headquarters: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxembourg",
      hqSec: "Secondary Office: Coimbra, Portugal",
      policyPrivacy: "Privacy Policy",
      policyCookies: "Cookies Policy",
      terms: "Terms and Conditions",
      compliance: "European Compliance",
      legal: "Legal Notices",
      gdpr: "EU GDPR Compliant",
      rights: "© 2026 VELKS Group. All rights reserved."
    },
    cookieConsent: {
      text: "We use cookies and similar technologies to ensure the best browsing experience and analyze site traffic in strict compliance with the EU GDPR.",
      accept: "Accept All",
      decline: "Decline"
    }
  },
  fr: {
    nav: {
      hero: "Accueil",
      problem: "Le Problème",
      solution: "La Solution",
      authority: "Présence",
      widget: "Assistant IA",
      pricing: "Tarifs",
      demos: "Démos",
      faq: "FAQ",
    },
    hero: {
      tracking: "Bonjour. J'ai vu votre infrastructure technologique sur le site et j'aimerais vérifier si mon entreprise est qualifiée pour mettre en œuvre votre système commercial. Pouvez-vous m'envoyer la grille tarifaire ?",
      badge: "★ DOMINATION ABSOLUE DU MARCHÉ",
      title: "Votre entreprise mérite d'apparaître avant vos concurrents.",
      subtitle: "Nous créons des sites web premium, des fiches Google Maps professionnelles et des systèmes de réponse client automatisés pour vous aider à générer plus de leads et fermer plus de ventes au quotidien. Sans abonnements.",
      ctaPrimary: "ACTIVER LA MACHINE DE VENTE",
      ctaSecondary: "Voir Forfaits",
      trustPilot: "Excellent 4.9/5 étoiles sur Google & Réseaux Professionnels"
    },
    problem: {
      title: "La Douleur d'Être Invisible",
      subtitle: "Si votre entreprise n'est pas trouvée en premier, vous financez la croissance de vos concurrents. Le marché a changé, l'amateurisme digital coûte cher.",
      cards: {
        invisible: {
          title: "Invisible sur Google",
          desc: "92% des clients choisissent une entreprise sur la première page. Si vous n'apparaissez pas, vous n'existez tout simplement pas."
        },
        reviews: {
          title: "Peu d'Avis Clients",
          desc: "Les entreprises sans avis actifs inspirent la méfiance. Les clients achètent à ceux qui sont recommandés."
        },
        contacts: {
          title: "Manque de Contacts",
          desc: "Se fier uniquement au 'bouche-à-oreille' est une roulette russe financière. Votre activité a besoin d'un flux régulier de demandes."
        },
        oldSite: {
          title: "Site Ancien ou Inexistant",
          desc: "Un site web lent ou dépassé repousse les clients premium. Votre présence digitale est le miroir de votre professionnalisme."
        },
        lostClients: {
          title: "Prospects Perdus Hors-Horaires",
          desc: "64% des clients arrivent en soirée ou le week-end. Sans réponse automatisée instantanée, ils se tournent vers vos concurrents."
        }
      }
    },
    solution: {
      title: "La Méthode VELKS pour Dominer le Marché",
      subtitle: "Nous ne vendons pas de code ou de technologie. Nous vendons des rendez-vous qualifiés, des clients qualifiés et des processus automatiques qui génèrent du chiffre d'affaires.",
      cards: {
        gmaps: {
          title: "Optimisation Google Maps",
          desc: "Nous positionnons votre fiche au sommet des recherches locales pour devenir le choix évident dans votre région."
        },
        website: {
          title: "Sites Web Haute Conversion",
          desc: "Des pages conçues spécifiquement pour mobiles, optimisées pour inciter immédiatement le visiteur à cliquer et lancer un chat."
        },
        bot: {
          title: "Assistant IA 24h/24",
          desc: "Un assistant web intelligent qui répond en quelques secondes, répond aux questions courantes et capture les coordonnées."
        },
        leads: {
          title: "Capture Active de Clients",
          desc: "Des systèmes simples et directs pour collecter les données des clients intéressés par vos services."
        },
        automation: {
          title: "Automatisations Fluides",
          desc: "Synchronisation immédiate des demandes vers votre WhatsApp ou Email, sans devoir gérer de logiciels complexes."
        }
      }
    },
    authority: {
      title: "Présents au Portugal, en Espagne et au Luxembourg",
      subtitle: "Nous appliquons des méthodes et des standards éprouvés sur les marchés européens les plus exigeants pour propulser les entreprises locales en ligne.",
      luxembourg: {
        name: "Luxembourg",
        tag: "Siège Social",
        desc: "Où nous gérons la stratégie financière, les normes de conformité européennes et l'ingénierie des données du groupe VELKS."
      },
      portugal: {
        name: "Portugal",
        tag: "Centre de Développement",
        desc: "Notre pôle de design et développement entièrement axé sur la conversion des visiteurs en clients premium."
      },
      spain: {
        name: "Espagne",
        tag: "Expansion Commerciale",
        desc: "Opérations dédiées au marché ibérique à forte densité et au commerce local dynamique."
      },
      metrics: {
        clients: "+240 Clients Locaux Accompagnés",
        delivered: "+350 Projets Premium Livrés",
        roi: "+320% ROI Moyen Estimé",
        support: "Support Complet Sans Aucun Casse-Tête"
      }
    },
    widget: {
      resetTitle: "Redémarrer la Démo",
      responseTime: "Réponse en 1.2s",
      title: "Accueil Client Automatique 24h/24",
      subtitle: "Votre nouvel assistant commercial digital travaille pendant votre sommeil, garantissant qu'aucun client potentiel ne soit ignoré.",
      steps: [
        "Un visiteur arrive sur votre site.",
        "L'assistant IA répond automatiquement en moins de 2 secondes.",
        "Il répond instantanément aux questions fréquentes.",
        "Il collecte les coordonnées : Nom, Téléphone, Email et besoin.",
        "Il propose des créneaux de rendez-vous.",
        "Il vous envoie un résumé propre directement par Email ou WhatsApp.",
        "Modèle de langage entraîné pour parler naturellement et paraître humain."
      ],
      capabilitiesTitle: "Ce que l'assistant peut faire pour vous :",
      capabilities: [
        "Répondre instantanément aux questions fréquentes",
        "Présenter vos tarifs et fiches de services",
        "Capturer des leads qualifiés en temps réel",
        "Réserver des rendez-vous de consultation sur votre agenda",
        "Transférer les demandes urgentes sur le WhatsApp de votre équipe",
        "Envoyer des résumés de chat directement dans votre boîte Email"
      ],
      demoTitle: "Simulateur d'Assistant Virtuel VELKS",
      demoSubtitle: "Sélectionnez un secteur d'activité ci-dessous et testez la puissance de la conversion automatique :",
      placeholderInput: "Écrivez votre message ici...",
      demoPresetRestaurante: "Simulateur Restaurant 🍔",
      demoPresetImobiliaria: "Simulateur Immobilier 🏠",
      demoPresetClinica: "Simulateur Cabinet Médical 🩺",
      demoPresetServicos: "Simulateur Artisans/BTP 🔨"
    },
    testimonials: {
      title: "Ils font confiance à VELKS Group",
      subtitle: "Histoires réelles d'entrepreneurs locaux qui sont sortis de l'invisibilité pour dominer les recherches de leur région.",
      list: [
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
      ]
    },
    pricing: {
      title: "Tarifs Transparents. Zéro Surprise.",
      subtitle: "Paiement unique. Pas d'abonnements forcés, pas de frais cachés. Un investissement net pour votre croissance.",
      singlePayment: "PAIEMENT UNIQUE",
      allPlansInclude: "Toutes nos formules incluent :",
      allPlansIncludeDesc: "Support premium, conformité totale RGPD UE, design mobile-first et optimisation pour une vitesse de chargement maximale.",
      plans: {
        gmaps: {
          title: "Google Maps Professionnel",
          price: "90€",
          features: [
            "Configuration & Récupération Complète",
            "Optimisation SEO Locale Avancée",
            "Mise en ligne de Photos Professionnelles",
            "Ajout des Services & Produits",
            "Génération d'un lien Direct d'Avis",
            "Stratégie de Positionnement d'Autorité",
            "Activation de la Messagerie Directe"
          ],
          cta: "DOMINER LE TOP 3 LOCAL",
          tracking: "Bonjour ! Je suis intéressé par le forfait Google Maps Professionnel. Les spécialistes de VELKS pourraient-ils m'aider ?"
        },
        website: {
          title: "Site Web Professionnel Premium",
          price: "190€",
          features: [
            "Landing Page Ultra Rapide",
            "Design Mobile-First Exclusif",
            "Structure SEO Google & Mots-clés",
            "Bouton WhatsApp Direct Intégré",
            "Configuration du Domaine Propre",
            "30 Jours de Support Dédié Offert",
            "Conformité RGPD & Protocole SSL Sécurisé"
          ],
          cta: "ACTIVER LA MACHINE À VENTES",
          tracking: "Bonjour ! Je suis intéressé par le forfait Site Web Professionnel. Quelle est la première étape pour construire ma nouvelle machine de vente ?"
        },
        automacao: {
          title: "Automatisation du Support",
          price: "250€",
          features: [
            "Triage automatique et qualification des clients.",
            "Intégration directe avec WhatsApp ou Instagram.",
            "Menu stratégique de réponses immédiates (24/7).",
            "Configuration des flux en 2 langues.",
            "Capture et transfert des devis.",
            "Zéro consommation d'API et zéro frais mensuels."
          ],
          cta: "BLINDER L'ASSISTANCE 24/7",
          tracking: "Bonjour, l'équipe VELKS. J'ai analysé la grille tarifaire sur le site et je suis intéressé pour avancer avec l'Assistance Automatique par IA. Quelle est la prochaine étape pour commencer l'intégration ?"
        },
        ecommerce: {
          title: "Suite E-commerce Complète",
          price: "300€",
          features: [
            "Création & Personnalisation de Boutique",
            "Prêt pour Print on Demand / Dropshipping",
            "Idéal pour Commerces Locaux, Digitaus ou Hybrides",
            "Sourcing Fournisseurs aux Meilleurs Prix",
            "Intégration de Paiements Sécurisés",
            "Règles d'Expédition & Gestion de Stock",
            "Panneau de Gestion Simple et Ergonomique"
          ],
          cta: "FAIRE ÉVOLUER LE CA EN LIGNE",
          tracking: "Bonjour, l'équipe VELKS. J'ai analysé la grille tarifaire sur le site et je suis intéressé pour avancer avec le forfait E-Commerce Complet. Quelle est la prochaine étape pour commencer l'intégration ?"
        },
        custom: {
          title: "Pack Imperial B2B",
          price: "Sur Demande",
          features: [
            "Google Maps + Site Web Premium + Automatisation du Support.",
            "Copywriting agressif axé exclusivement sur le ROI.",
            "Support technique et stratégique prioritaire.",
            "Optimisation SEO multilingue avancée.",
            "Positionnement d'Autorité (Domaine de Niche).",
            "Conseil stratégique en conversion."
          ],
          cta: "PLANIFIER UN AUDIT PRIVÉ",
          tracking: "Bonjour, l'équipe VELKS. Mon entreprise a besoin d'une restructuration numérique profonde. J'aimerais planifier un audit privé avec un spécialiste VELKS pour discuter de la solution All-In-One Imperial. Pourriez-vous m'aider ?"
        }
      }
    },
    demos: {
      demoTracking: "Bonjour ! Je veux tester la démo interactive pour {demoTitle} et voir en pratique comment cette technologie peut développer mes résultats. Pouvons-nous commencer le test ?",
      title: "Démonstrations Interactives",
      subtitle: "Explorez des exemples réels de la façon dont nous révolutionnons la présence en ligne des commerces locaux.",
      categories: {
        all: "Tous",
        restaurants: "Restaurants",
        realestate: "Immobilier",
        clinics: "Cabinets Médicaux",
        localservices: "Services Locaux",
      },
      cta: "Parler à un Conseiller",
      clickToSee: "Lancer la Démo Interactive"
    },
        aivision: {
      badge: "Développé par l'équipe d'Ingénierie IA de VELKS",
      title1: "Votre entreprise ",
      titleHighlight: "ne devrait pas s'arrêter",
      title2: " quand vous vous arrêtez.",
      subtitle: "La plupart des entrepreneurs ne la construisent jamais. C'est pourquoi ils restent bloqués sur leur téléphone, leurs messages et les mêmes problèmes tous les jours.",
      cta: "VOIR CE QUE VOUS MANQUEZ",
      microcopy: "Découvrez en moins de 60 secondes pourquoi certaines entreprises se développent plus vite que d'autres."
    },
    faq: {
      title: "Questions Fréquentes",
      questions: [
        {
          q: "Combien de temps prend la livraison ?",
          a: "L'optimisation de Google Maps prend généralement 3 à 5 jours ouvrables. Les sites web professionnels premium et les assistants virtuels automatisés sont livrés et testés en 7 à 14 jours ouvrables."
        },
        {
          q: "Le site fonctionne-t-il bien sur mobile ?",
          a: "Oui, absolument. Nous développons avec une approche Mobile-First, car plus de 85 % des recherches locales sont effectuées via des smartphones. Votre site sera extrêmement rapide et réactif sur n'importe quel écran."
        },
        {
          q: "Puis-je utiliser mon domaine actuel ?",
          a: "Oui. Si vous avez déjà un domaine enregistré (ex. : www.votreentreprise.com), nous configurerons tout pour pointer vers le nouveau site premium sans frais supplémentaires. Si vous n'en avez pas, nous vous aiderons à le choisir et à l'enregistrer."
        },
        {
          q: "VELKS possède-t-il d'autres sites web officiels ?",
          a: "Oui.\nOutre le site institutionnel de VELKS Group, nous développons des produits et des solutions sur leurs propres domaines pour offrir une expérience plus ciblée et spécialisée.\nProjets officiels actuellement exploités par VELKS :\n• velks.space — Plateforme officielle pour ORION AI et solutions d'assistance intelligente.\n• vgroup.space — Portfolio numérique, démos, études de cas et projets développés par l'équipe VELKS.\nTous les sites web ci-dessus appartiennent à VELKS Group et sont gérés par notre équipe d'ingénierie et de développement.\nVous pouvez naviguer en toute confiance."
        },
        {
          q: "Comment puis-je savoir combien coûterait la mise en œuvre d'ORION dans mon entreprise ?",
          a: "Le moyen le plus rapide est de parler directement avec ORION.\nL'assistant peut analyser votre activité, clarifier vos doutes, présenter les fonctionnalités et indiquer la solution la plus adaptée à votre cas.\nCliquez sur l'icône de chat dans le coin inférieur droit et recevez des conseils immédiats."
        },
        {
          q: "Que se passe-t-il si je ne réponds pas immédiatement à mes clients ?",
          a: "Dans la plupart des cas, ils contactent une autre entreprise.\nAujourd'hui, la rapidité de réponse influence directement la décision d'achat.\nORION vous aide à garantir que chaque visiteur reçoive une attention immédiate, même lorsque votre équipe est occupée, hors du bureau ou en train de dormir."
        }
      ]
    },
    ctaFinal: {
      tracking: "Bonjour. J'ai lu toute votre page et j'ai réalisé que je perdais de l'argent au profit de la concurrence. Je veux comprendre exactement comment votre technologie peut blinder mon entreprise immédiatement. Pouvons-nous parler ?",
      title: "Arrêtez de perdre des clients au profit de concurrents qui en font moins.",
      subtitle: "Pendant que vous lisez ces lignes, votre rival répond à un prospect. On inverse la tendance aujourd'hui ?",
      cta: "BLINDER MON ENTREPRISE MAINTENANT",
      microcopy: "Sans engagement • Réponse immédiate • Devis gratuit"
    },
    footer: {
      legalNoticeTitle: "AVIS LÉGAL & PROPRIÉTÉ",
      legalNoticeText: "La marque VELKS Group et toutes ses opérations numériques sont fondées, détenues et gérées légalement par Rosa Sofia Sousa Marques (Founder) et Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTACTS DIRECTS",
      hqLocations: "SIÈGES SOCIAUX",
      legalDisclaimer: "Mentions Légales",
      europeanCompliance: "Conformité Européenne",
      logoDesc: "Nous transformons les entreprises dépendantes de leur propriétaire en machines à profit autonomes. Votre domination sur Google devient absolue et notre IA conclut des ventes 24/7. Des résultats réels et sans abonnements récurrents, pour que vous retrouviez votre temps et votre liberté.",
      hqMain: "Siège Social : 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxembourg",
      hqSec: "Bureau Secondaire : Coimbra, Portugal",
      policyPrivacy: "Politique de Confidentialité",
      policyCookies: "Politique de Cookies",
      terms: "Conditions Générales",
      compliance: "Conformité Européenne",
      legal: "Mentions Légales",
      gdpr: "Conforme RGPD UE",
      rights: "© 2026 VELKS Group. Tous droits réservés."
    },
    cookieConsent: {
      text: "Nous utilisons des cookies pour vous offrir la meilleure expérience utilisateur et analyser le trafic, en stricte conformité avec le RGPD de l'UE.",
      accept: "Tout Accepter",
      decline: "Refuser"
    }
  },
  de: {
    nav: {
      hero: "Start",
      problem: "Das Problem",
      solution: "Die Lösung",
      authority: "Präsenz",
      widget: "KI-Assistent",
      pricing: "Pakete",
      demos: "Demos",
      faq: "FAQ",
    },
    hero: {
      tracking: "Hallo. Ich habe Ihre technologische Infrastruktur auf der Website gesehen und möchte prüfen, ob sich mein Unternehmen für die Implementierung Ihres kommerziellen Systems qualifiziert. Können Sie mir die Preistabelle zusenden?",
      badge: "★ ABSOLUTE MARKTDOMINANZ",
      title: "Ihr Unternehmen verdient es, vor Ihren Konkurrenten zu erscheinen.",
      subtitle: "Wir erstellen Premium-Websites, professionelle Google Maps-Einträge und automatische Kundensupport-Systeme, damit Sie täglich mehr Anfragen generieren und mehr Abschlüsse erzielen. Ohne monatliche Abos.",
      ctaPrimary: "UMSATZ STEIGERN",
      ctaSecondary: "Pakete ansehen",
      trustPilot: "Hervorragend 4.9/5 Sterne bei Google & Business Networks"
    },
    problem: {
      title: "Der Schmerz, unsichtbar zu sein",
      subtitle: "Wenn Ihr Unternehmen nicht als erstes gefunden wird, finanzieren Sie das Wachstum Ihrer Konkurrenten. Der Markt hat sich verändert, und digitale Amateurschaft ist teuer.",
      cards: {
        invisible: {
          title: "Unsichtbar bei Google",
          desc: "92 % der Kunden wählen Unternehmen auf der ersten Seite. Wenn Sie dort nicht erscheinen, existieren Sie für sie einfach nicht."
        },
        reviews: {
          title: "Zu wenige Bewertungen",
          desc: "Unternehmen ohne aktiven sozialen Nachweis erwecken Misstrauen. Kunden kaufen dort, wo andere eine Empfehlung aussprechen."
        },
        contacts: {
          title: "Mangel an Kontakten",
          desc: "Sich nur auf Mundpropaganda zu verlassen, ist ein finanzielles russisches Roulette. Ihr Unternehmen braucht einen stetigen Fluss an Anfragen."
        },
        oldSite: {
          title: "Alte oder nicht vorhandene Website",
          desc: "Eine langsame oder veraltete Website vertreibt Premium-Kunden. Ihre digitale Präsenz ist der Spiegel Ihrer Professionalität."
        },
        lostClients: {
          title: "Verlorene Kunden außerhalb der Geschäftszeiten",
          desc: "64 % der Kunden treffen abends oder am Wochenende ein. Ohne sofortige automatische Beantwortung gehen sie zur Konkurrenz."
        }
      }
    },
    solution: {
      title: "Das VELKS-System für Marktbeherrschung",
      subtitle: "Wir verkaufen keinen Code oder Technologie. Wir verkaufen ausgebuchte Kalender, qualifizierte Kunden und automatische Prozesse, die für Sie Umsatz generieren.",
      cards: {
        gmaps: {
          title: "Google Maps-Optimierung",
          desc: "Wir positionieren Ihr Unternehmen ganz oben in den lokalen Suchergebnissen, damit Sie die logische Wahl in Ihrer Region sind."
        },
        website: {
          title: "Konversionsstarke Websites",
          desc: "Speziell für Mobilgeräte optimierte Seiten, die darauf ausgelegt sind, den Besucher sofort zum Klicken und Chatten zu animieren."
        },
        bot: {
          title: "24/7 KI-Assistent",
          desc: "Ein intelligenter Web-Assistent, der in Sekundenschnelle antwortet, häufige Fragen klärt und Kontaktdaten automatisch erfasst."
        },
        leads: {
          title: "Aktive Kundenerfassung",
          desc: "Einfache und direkte Systeme zur Erfassung der Kontaktdaten von potenziellen Kunden, die an Ihren Dienstleistungen interessiert sind."
        },
        automation: {
          title: "Reibungslose Automatisierung",
          desc: "Sofortige Weiterleitung von Anfragen direkt an Ihr WhatsApp oder Ihre E-Mail, ohne dass Sie komplexe Software bedienen müssen."
        }
      }
    },
    authority: {
      title: "Tätig in Portugal, Spanien und Luxemburg",
      subtitle: "Wir wenden Methoden und Standards an, die in anspruchsvollen europäischen Märkten erprobt sind, um lokalen Unternehmen ein solides Online-Wachstum zu ermöglichen.",
      luxembourg: {
        name: "Luxemburg",
        tag: "Hauptsitz",
        desc: "Hier verwalten wir die Finanzstrategie, europäische Compliance-Standards und die Kern-Datenarchitektur der VELKS Group."
      },
      portugal: {
        name: "Portugal",
        tag: "Entwicklungszentrum",
        desc: "Unser Design- und Entwicklungsteam konzentriert sich voll und ganz darauf, Website-Besucher in Premium-Kunden zu verwandeln."
      },
      spain: {
        name: "Spanien",
        tag: "Marktexpansion",
        desc: "Dienstleistungen für den dicht besiedelten iberischen Markt und den dynamischen lokalen Handel."
      },
      metrics: {
        clients: "+240 Betreute lokale Kunden",
        delivered: "+350 Gelieferte Premium-Projekte",
        roi: "+320% Durchschnittlicher geschätzter ROI",
        support: "Vollständiger Support ohne Kopfschmerzen"
      }
    },
    widget: {
      resetTitle: "Demo Neustarten",
      responseTime: "Antwort in 1.2s",
      title: "Automatischer Kundenservice rund um die Uhr",
      subtitle: "Ihr neuer digitaler Vertriebsassistent arbeitet, während Sie schlafen, und sorgt dafür, dass kein potenzieller Kunde warten muss.",
      steps: [
        "Ein Besucher landet auf Ihrer Website.",
        "Der KI-Assistent antwortet automatisch in weniger als 2 Sekunden.",
        "Er beantwortet häufig gestellte Fragen und räumt Zweifel sofort aus.",
        "Er erfasst Daten wie Name, Telefonnummer, E-Mail und Anliegen.",
        "Er vereinbart Termine oder Beratungen.",
        "Er leitet eine übersichtliche Zusammenfassung direkt an Ihre E-Mail oder WhatsApp weiter.",
        "Sprachmodell darauf trainiert, vollkommen natürlich und menschlich zu klingen."
      ],
      capabilitiesTitle: "Was der Assistent für Sie tun kann:",
      capabilities: [
        "Häufig gestellte Fragen sofort beantworten",
        "Preise und Leistungspakete präsentieren",
        "Qualifizierte Sales-Leads in Echtzeit erfassen",
        "Beratungstermine in Ihrem Kalender buchen",
        "Dringende Anfragen an das WhatsApp Ihres Teams weiterleiten",
        "Gesprächszusammenfassungen direkt an Ihr E-Mail-Postfach senden"
      ],
      demoTitle: "VELKS Virtueller Assistent-Simulator",
      demoSubtitle: "Wählen Sie unten eine Branche aus und testen Sie die Power der automatischen Konversion in Echtzeit:",
      placeholderInput: "Schreiben Sie Ihre Nachricht hier...",
      demoPresetRestaurante: "Restaurant-Simulator 🍔",
      demoPresetImobiliaria: "Immobilien-Simulator 🏠",
      demoPresetClinica: "Praxis-Simulator 🩺",
      demoPresetServicos: "Handwerker/Dienstleistungs-Simulator 🔨"
    },
    testimonials: {
      title: "Wer der VELKS Group vertraut",
      subtitle: "Echte Geschichten von lokalen Unternehmern, die aus der digitalen Unsichtbarkeit traten, um die Suche in ihrer Region zu dominieren.",
      list: [
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
      ]
    },
    pricing: {
      title: "Transparente Preise. Keine bösen Überraschungen.",
      subtitle: "Einmalzahlung. Keine verpflichtenden Abonnements, keine versteckten Kosten. Reine Investition in Ihr Wachstum.",
      singlePayment: "EINMALIGE ZAHLUNG",
      allPlansInclude: "Alle Pakete beinhalten:",
      allPlansIncludeDesc: "Premium-Support, vollständige EU-DSGVO-Konformität, Mobile-First-Design und Optimierung für maximale Ladegeschwindigkeiten.",
      plans: {
        gmaps: {
          title: "Google Maps Professionell",
          price: "90€",
          features: [
            "Vollständige Einrichtung & Inhaberschaftsanspruch",
            "Erweiterte lokale SEO-Optimierung",
            "Professioneller Foto- & Logo-Upload",
            "Präsentation von Dienstleistungen & Produkten",
            "Direkter Bewertungs-Generator-Link",
            "Lokale Positionierungsstrategie",
            "Direktnachrichten-Aktivierung"
          ],
          cta: "TOP 3 DOMINIEREN",
          tracking: "Hallo! Ich interessiere mich für das Google Maps Professionell-Paket. Könnten mir die VELKS-Spezialisten helfen?"
        },
        website: {
          title: "Premium Website Professionell",
          price: "190€",
          features: [
            "Extrem schnelle Landing Page",
            "Exklusives Mobile-First-Design",
            "Google SEO-Struktur & Keyword-optimiert",
            "Direkte WhatsApp-Button-Integration",
            "Einrichtung der eigenen Domain",
            "30 Tage kostenloser Premium-Support",
            "DSGVO-konform & Sicheres SSL-Zertifikat"
          ],
          cta: "JETZT STARTEN",
          tracking: "Hallo! Ich interessiere mich für das Website Professionell-Paket. Was ist der erste Schritt zum Aufbau meiner neuen Verkaufsmaschine?"
        },
        automacao: {
          title: "Support-Automatisierung",
          price: "250€",
          features: [
            "Automatische Triage und Kundenqualifizierung.",
            "Direkte Integration mit WhatsApp oder Instagram.",
            "Strategisches Menü für sofortige Antworten (24/7).",
            "Flow-Konfiguration in 2 Sprachen.",
            "Erfassung und Weiterleitung von Angeboten.",
            "Null API-Verbrauch und null monatliche Gebühren."
          ],
          cta: "SUPPORT ABSICHERN",
          tracking: "Hallo VELKS-Team. Ich habe die Preistabelle auf der Website analysiert und bin daran interessiert, mit dem KI-Automatisierten Support fortzufahren. Was ist der nächste Schritt, um die Integration zu starten?"
        },
        ecommerce: {
          title: "Komplettes E-Commerce-System",
          price: "300€",
          features: [
            "Vollständige Erstellung & Anpassung des Onlineshops",
            "Bereit für Print on Demand / Dropshipping",
            "Ideal für lokale, digitale oder hybride Geschäfte",
            "Marktführende Lieferantensuche",
            "Sichere Zahlungsintegration",
            "Versandregeln & Lagerbestandsverwaltung",
            "Sehr einfache Verwaltungszentrale"
          ],
          cta: "UMSATZ SKALIEREN",
          tracking: "Hallo VELKS-Team. Ich habe die Preistabelle auf der Website analysiert und bin daran interessiert, mit dem kompletten E-Commerce-Paket fortzufahren. Was ist der nächste Schritt, um die Integration zu starten?"
        },
        custom: {
          title: "Pack Imperial B2B",
          price: "Auf Anfrage",
          features: [
            "Google Maps + Premium-Website + Support-Automatisierung.",
            "Aggressives Copywriting mit exklusivem Fokus auf ROI.",
            "Prioritärer technischer und strategischer Support.",
            "Erweiterte mehrsprachige SEO-Optimierung.",
            "Autoritätspositionierung (Nischen-Domain).",
            "Strategische Conversion-Beratung."
          ],
          cta: "AUDIT VEREINBAREN",
          tracking: "Hallo VELKS-Team. Mein Unternehmen benötigt eine tiefgreifende digitale Umstrukturierung. Ich möchte ein privates Audit mit einem VELKS-Spezialisten vereinbaren, um die All-In-One Imperial-Lösung zu besprechen. Könnten Sie mir helfen?"
        }
      }
    },
    demos: {
      demoTracking: "Hallo! Ich möchte die interaktive Demo für {demoTitle} testen und in der Praxis sehen, wie diese Technologie meine Ergebnisse skalieren kann. Können wir den Test starten?",
      title: "Interaktive Demonstrationen",
      subtitle: "Erkunden Sie echte Beispiele dafür, wie wir die digitale Präsenz lokaler Geschäfte revolutionieren.",
      categories: {
        all: "Alle",
        restaurants: "Restaurants",
        realestate: "Immobilien",
        clinics: "Praxen",
        localservices: "Lokale Dienste",
      },
      cta: "Mit Berater sprechen",
      clickToSee: "Interaktive Vorschau starten"
    },
        aivision: {
      badge: "Entwickelt vom VELKS KI-Engineering-Team",
      title1: "Ihr Unternehmen ",
      titleHighlight: "sollte nicht stehen bleiben",
      title2: ", wenn Sie es tun.",
      subtitle: "Die meisten Unternehmer bauen sie nie. Deshalb hängen sie jeden Tag am Telefon, an Nachrichten und bei denselben Problemen fest.",
      cta: "MEHR ERFAHREN",
      microcopy: "Entdecken Sie in unter 60 Sekunden, warum einige Unternehmen schneller wachsen als andere."
    },
    faq: {
      title: "Häufig gestellte Fragen",
      questions: [
        {
          q: "Wie lange dauert die Lieferung?",
          a: "Die Optimierung von Google Maps dauert in der Regel 3 bis 5 Werktage. Premium-Websites und automatisierte virtuelle Assistenten werden in 7 bis 14 Werktagen geliefert und getestet."
        },
        {
          q: "Funktioniert die Website gut auf dem Handy?",
          a: "Ja, absolut. Wir entwickeln mit vollem Fokus auf Mobile-First, da über 85 % der lokalen Suchanfragen über Smartphones erfolgen. Ihre Website wird auf jedem Bildschirm extrem schnell und reaktionsschnell sein."
        },
        {
          q: "Kann ich meine aktuelle Domain nutzen?",
          a: "Ja. Wenn Sie bereits eine registrierte Domain haben (z. B. www.ihrunternehmen.com), konfigurieren wir alles ohne zusätzliche Kosten so, dass es auf die neue Premium-Website verweist. Wenn Sie noch keine haben, helfen wir Ihnen bei der Auswahl und Registrierung."
        },
        {
          q: "Hat VELKS noch andere offizielle Websites?",
          a: "Ja.\nNeben der Unternehmenswebsite der VELKS Group entwickeln wir Produkte und Lösungen auf eigenen Domains, um ein gezielteres und spezialisierteres Erlebnis zu bieten.\nOffizielle Projekte, die derzeit von VELKS betrieben werden:\n• velks.space — Offizielle Plattform für ORION AI und intelligente Kundendienstlösungen.\n• vgroup.space — Digitales Portfolio, Demos, Fallstudien und von VELKS-Team entwickelte Projekte.\nAlle oben genannten Websites gehören zur VELKS Group und werden von unserem Engineering- und Entwicklungsteam gepflegt.\nSie können mit vollem Vertrauen browsen."
        },
        {
          q: "Wie finde ich heraus, wie viel die Implementierung von ORION in meinem Unternehmen kosten würde?",
          a: "Der schnellste Weg ist, direkt mit ORION zu sprechen.\nDer Assistent kann Ihr Unternehmen analysieren, Fragen beantworten, Funktionen präsentieren und die für Sie am besten geeignete Lösung aufzeigen.\nKlicken Sie auf das Chat-Symbol unten rechts, um sofortige Beratung zu erhalten."
        },
        {
          q: "Was passiert, wenn ich meinen Kunden nicht sofort antworte?",
          a: "In den meisten Fällen kontaktieren sie ein anderes Unternehmen.\nHeute beeinflusst die Reaktionsgeschwindigkeit direkt die Kaufentscheidung.\nORION hilft dabei sicherzustellen, dass jeder Besucher sofortige Aufmerksamkeit erhält, auch wenn Ihr Team beschäftigt, nicht im Büro ist oder schläft."
        }
      ]
    },
    ctaFinal: {
      tracking: "Hallo. Ich habe Ihre gesamte Seite gelesen und festgestellt, dass ich Geld an die Konkurrenz verliere. Ich möchte genau verstehen, wie Ihre Technologie mein Unternehmen sofort absichern kann. Können wir sprechen?",
      title: "Hören Sie auf, Kunden an Konkurrenten zu verlieren, die weniger bieten als Sie.",
      subtitle: "Während Sie dies lesen, nimmt Ihr Mitbewerber den Anruf eines potenziellen Kunden entgegen. Sollen wir das heute ändern?",
      cta: "JETZT ABSICHERN",
      microcopy: "Unverbindlich • Sofortige Antwort • Kostenloses Angebot"
    },
    footer: {
      legalNoticeTitle: "RECHTLICHER HINWEIS & EIGENTUM",
      legalNoticeText: "Die Marke VELKS Group und all ihre digitalen Aktivitäten werden legal von Rosa Sofia Sousa Marques (Founder) und Lucca Farias Gagliardi (Co-Founder) gegründet, besessen und verwaltet.",
      directContacts: "DIREKTE KONTAKTE",
      hqLocations: "HAUPTSITZE",
      legalDisclaimer: "Rechtliche Hinweise",
      europeanCompliance: "Europäische Konformität",
      logoDesc: "Wir verwandeln inhaberabhängige Unternehmen in autonome Gewinnmaschinen. Ihre Google-Dominanz wird absolut und unsere KI schließt Verkäufe rund um die Uhr ab. Echte Ergebnisse und keine monatlichen Gebühren, damit Sie Ihre Zeit und Freiheit zurückgewinnen.",
      hqMain: "Hauptsitz: 57, Avenue de La Gare, L-1611 Luxemburg Gare, Luxemburg",
      hqSec: "Zweiter Standort: Coimbra, Portugal",
      policyPrivacy: "Datenschutzerklärung",
      policyCookies: "Cookie-Richtlinie",
      terms: "Allgemeine Geschäftsbedingungen",
      compliance: "Europäische Compliance",
      legal: "Rechtliche Hinweise",
      gdpr: "EU-DSGVO-konform",
      rights: "© 2026 VELKS Group. Alle Rechte vorbehalten."
    },
    cookieConsent: {
      text: "Wir verwenden Cookies und ähnliche Technologien, um Ihnen das beste Web-Erlebnis zu bieten und den Datenverkehr in Übereinstimmung mit der EU-DSGVO zu analysieren.",
      accept: "Alle akzeptieren",
      decline: "Ablehnen"
    }
  },
  es: {
    nav: {
      hero: "Inicio",
      problem: "El Problema",
      solution: "La Solución",
      authority: "Presencia",
      widget: "Asistente IA",
      pricing: "Paquetes",
      demos: "Demostraciones",
      faq: "FAQ",
    },
    hero: {
      tracking: "Hola. Vi su infraestructura tecnológica en el sitio web y me gustaría comprobar si mi empresa califica para implementar su sistema comercial. ¿Pueden enviarme la tabla de precios?",
      badge: "★ DOMINIO ABSOLUTO DEL MERCADO",
      title: "Tu negocio merece aparecer antes que tus competidores.",
      subtitle: "Creamos sitios web premium, perfiles profesionales de Google Maps y sistemas automáticos de atención al cliente para ayudarte a generar más contactos y cerrar más clientes a diario. Sin cuotas mensuales.",
      ctaPrimary: "ACTIVAR MÁQUINA DE VENTAS",
      ctaSecondary: "Ver Paquetes",
      trustPilot: "Excelente 4.9/5 estrellas en Google & Redes de Negocio"
    },
    problem: {
      title: "El Dolor de Ser Invisible",
      subtitle: "Si tu negocio no es el primero en ser encontrado, estás financiando el crecimiento de tus competidores. El mercado ha cambiado y la informalidad digital sale cara.",
      cards: {
        invisible: {
          title: "Invisible en Google",
          desc: "El 92% de los clientes eligen negocios de la primera página. Si no apareces, simplemente no existes para ellos."
        },
        reviews: {
          title: "Pocas Reseñas",
          desc: "Los negocios sin prueba social activa generan desconfianza. Los clientes compran a quienes recomiendan los demás."
        },
        contacts: {
          title: "Falta de Contactos",
          desc: "Depender únicamente del 'boca a boca' es una ruleta rusa financiera. Tu negocio necesita un flujo continuo y predecible."
        },
        oldSite: {
          title: "Sitio Web Antiguo o Inexistente",
          desc: "Un sitio web lento o desactualizado ahuyenta a los clientes premium. Tu presencia digital refleja tu profesionalismo."
        },
        lostClients: {
          title: "Clientes Perdidos Fuera de Horario",
          desc: "El 64% de los clientes llegan por la noche o en el fin de semana. Sin una respuesta automática inmediata, se van a la competencia."
        }
      }
    },
    solution: {
      title: "El Método VELKS para Dominar el Mercado",
      subtitle: "No vendemos código ni tecnología. Te entregamos agendas llenas, clientes calificados y procesos automáticos que facturan por ti.",
      cards: {
        gmaps: {
          title: "Optimización de Google Maps",
          desc: "Posicionamos tu ficha en lo más alto de las búsquedas locales para ser la opción obvia en tu área."
        },
        website: {
          title: "Sitios Web de Alta Conversión",
          desc: "Páginas diseñadas específicamente para móviles, enfocadas en hacer que el visitante haga clic e inicie un chat."
        },
        bot: {
          title: "Asistente IA 24/7",
          desc: "Un asistente inteligente que responde en segundos, resuelve dudas comunes y captura los datos del cliente de forma automática."
        },
        leads: {
          title: "Captura Activa de Clientes",
          desc: "Sistemas simples y directos para recopilar los datos de los clientes interesados en tus servicios."
        },
        automation: {
          title: "Automatización sin Complicaciones",
          desc: "Sincronización instantánea de solicitudes directamente en tu WhatsApp o Email, sin necesidad de gestionar paneles complejos."
        }
      }
    },
    authority: {
      title: "Operamos en Portugal, España y Luxemburgo",
      subtitle: "Aplicamos metodologías y estándares probados en mercados europeos altamente competitivos y exigentes para ayudar a pequeños negocios a crecer de forma sólida.",
      luxembourg: {
        name: "Luxemburgo",
        tag: "Sede Principal",
        desc: "Donde gestionamos la estrategia financiera, las normas europeas de cumplimiento y la arquitectura de datos del grupo VELKS."
      },
      portugal: {
        name: "Portugal",
        tag: "Centro de Desarrollo",
        desc: "Nuestro equipo de diseño y desarrollo enfocado en convertir visitantes en clientes premium."
      },
      spain: {
        name: "España",
        tag: "Expansión Comercial",
        desc: "Operaciones dedicadas al mercado ibérico de alta densidad y al comercio local dinámico."
      },
      metrics: {
        clients: "+240 Clientes Locales Atendidos",
        delivered: "+350 Proyectos Premium Entregados",
        roi: "+320% ROI Medio Estimado",
        support: "Soporte Completo Sin Dolor de Cabeza"
      }
    },
    widget: {
      resetTitle: "Reiniciar Demo",
      responseTime: "Respuesta en 1.2s",
      title: "Atención al Cliente Automática las 24 Horas",
      subtitle: "Tu nuevo asistente comercial digital trabaja mientras duermes, asegurando que ningún cliente potencial quede esperando.",
      steps: [
        "Un visitante llega a tu sitio web.",
        "El asistente de IA responde automáticamente en menos de 2 segundos.",
        "Resuelve al instante las dudas frecuentes y supera objeciones.",
        "Recopila datos de contacto: Nombre, Teléfono, Email y su interés.",
        "Reserva citas de diagnóstico o consultas en tu calendario.",
        "Envía un resumen completo directamente a tu Email o WhatsApp.",
        "Modelo de lenguaje altamente entrenado para sonar natural y humano."
      ],
      capabilitiesTitle: "Lo que el asistente puede hacer por ti:",
      capabilities: [
        "Responder preguntas frecuentes al instante",
        "Presentar tarifas y hojas de servicios",
        "Capturar leads calificados en tiempo real",
        "Reservar citas de asesoría directamente en tu agenda",
        "Derivar solicitudes urgentes al WhatsApp de tu equipo",
        "Enviar resúmenes de chats directamente a tu Email"
      ],
      demoTitle: "Simulador de Asistente Virtual VELKS",
      demoSubtitle: "Selecciona un sector local a continuación y prueba el poder de la conversión automatizada en tiempo real:",
      placeholderInput: "Escribe tu mensaje aquí...",
      demoPresetRestaurante: "Simulador Restaurante 🍔",
      demoPresetImobiliaria: "Simulador Inmobiliario 🏠",
      demoPresetClinica: "Simulador Clínica Médica 🩺",
      demoPresetServicos: "Simulador Contratista/Servicios 🔨"
    },
    testimonials: {
      title: "Ellos confían en VELKS Group",
      subtitle: "Historias reales de empresarios locales que salieron de la invisibilidad digital para dominar las búsquedas en su zona.",
      list: [
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
      ]
    },
    pricing: {
      title: "Precios Transparentes. Cero Sorpresas.",
      subtitle: "Pago único. Sin suscripciones obligatorias, sin cargos ocultos. Inversión pura en tu crecimiento.",
      singlePayment: "PAGO ÚNICO",
      allPlansInclude: "Todos los paquetes incluyen:",
      allPlansIncludeDesc: "Soporte premium, conformidad total con el RGPD de la UE, diseño mobile-first y optimización para la máxima velocidad de carga.",
      plans: {
        gmaps: {
          title: "Google Maps Profesional",
          price: "90€",
          features: [
            "Configuración y Reclamación Completa",
            "Optimización Avanzada de SEO Local",
            "Carga de Fotos y Logotipo de Calidad",
            "Showcase Completo de Productos y Servicios",
            "Crecimiento Orgánico con Enlace de Reseñas",
            "Estrategia de Posicionamiento de Autoridad",
            "Activación del Canal de Mensajería"
          ],
          cta: "DOMINAR EL TOP 3 LOCAL",
          tracking: "¡Hola! Estoy interesado en el paquete Google Maps Profesional. ¿Los especialistas de VELKS podrían ayudarme?"
        },
        website: {
          title: "Sitio Web Profesional Premium",
          price: "190€",
          features: [
            "Landing Page de Carga Ultra Rápida",
            "Diseño Mobile-First Exclusivo",
            "SEO en Google y Keyword Structure",
            "Botón de WhatsApp Directo Integrado",
            "Configuración de Dominio Propio",
            "30 Días de Soporte Dedicado Gratuito",
            "Conforme a RGPD y Seguridad SSL"
          ],
          cta: "ACTIVAR MÁQUINA DE VENTAS",
          tracking: "¡Hola! Estoy interesado en el paquete de Sitio Web Profesional. ¿Cuál es el primer paso para construir mi nueva máquina de ventas?"
        },
        automacao: {
          title: "Automatización de Soporte",
          price: "250€",
          features: [
            "Triaje automático y calificación de clientes.",
            "Integración directa con WhatsApp o Instagram.",
            "Menú estratégico de respuestas inmediatas (24/7).",
            "Configuración de flujos en 2 idiomas.",
            "Captura y reenvío de presupuestos.",
            "Cero consumo de API y cero cuotas mensuales."
          ],
          cta: "BLINDAR ATENCIÓN 24/7",
          tracking: "Hola, Equipo VELKS. Analicé la tabla de precios en el sitio y tengo interés en avanzar con Atención IA Automática. ¿Cuál es el próximo paso para iniciar la integración?"
        },
        ecommerce: {
          title: "E-commerce Completo",
          price: "300€",
          features: [
            "Creación y Personalización de Tienda Online",
            "Listo para Print on Demand / Dropshipping",
            "Ideal para Negocio Local, Digital o Híbrido",
            "Mapeo de los Mejores Proveedores",
            "Integración de Pasarelas de Pago Seguras",
            "Configuración de Envíos e Inventario",
            "Consola de Administración Ultra Sencilla"
          ],
          cta: "ESCALAR FACTURACIÓN ONLINE",
          tracking: "Hola, Equipo VELKS. Analicé la tabla de precios en el sitio y tengo interés en avanzar con el paquete E-Commerce Completo. ¿Cuál es el próximo paso para iniciar la integración?"
        },
        custom: {
          title: "Pack Imperial B2B",
          price: "Bajo Consulta",
          features: [
            "Google Maps + Sitio Web Premium + Automatización de Soporte.",
            "Copywriting agresivo enfocado exclusivamente en ROI.",
            "Soporte técnico y estratégico prioritario.",
            "Optimización SEO multilingüe avanzada.",
            "Posicionamiento de Autoridad (Dominio de Nicho).",
            "Consultoría estratégica de conversión."
          ],
          cta: "AGENDAR AUDITORÍA PRIVADA",
          tracking: "Hola, Equipo VELKS. Mi negocio necesita una reestructuración digital profunda. Me gustaría programar una auditoría privada con un especialista de VELKS para discutir la solución All-In-One Imperial. ¿Podrían ayudarme?"
        }
      }
    },
    demos: {
      demoTracking: "¡Hola! Quiero probar la demostración interactiva para {demoTitle} y ver en la práctica cómo esta tecnología puede escalar mis resultados. ¿Podemos iniciar la prueba?",
      title: "Demostraciones Interactivas",
      subtitle: "Explora ejemplos en vivo de cómo revolucionamos la presencia digital de los comercios de barrio.",
      categories: {
        all: "Todos",
        restaurants: "Restaurantes",
        realestate: "Inmobiliarias",
        clinics: "Clínicas Médicas",
        localservices: "Servicios Locales",
      },
      cta: "Hablar con un Asesor",
      clickToSee: "Ver Demostración Interactiva"
    },
        aivision: {
      badge: "Desarrollado por el equipo de Ingeniería de IA de VELKS",
      title1: "Tu empresa ",
      titleHighlight: "no debería detenerse",
      title2: " cuando tú lo haces.",
      subtitle: "La mayoría de los empresarios nunca la construyen. Por eso siguen atados al teléfono, a los mensajes y a los mismos problemas todos los días.",
      cta: "VER LO QUE TE PIERDES",
      microcopy: "Descubre en menos de 60 segundos por qué algunas empresas crecen más rápido que otras."
    },
    faq: {
      title: "Preguntas Frecuentes",
      questions: [
        {
          q: "¿Cuánto tiempo tarda la entrega?",
          a: "La optimización de Google Maps suele tardar entre 3 y 5 días hábiles. Los sitios web profesionales premium y los asistentes virtuales automatizados se entregan y prueban en 7 a 14 días hábiles."
        },
        {
          q: "¿El sitio funciona bien en el móvil?",
          a: "Sí, absolutamente. Desarrollamos con un enfoque total en Mobile-First, ya que más del 85% de las búsquedas locales se realizan a través de teléfonos inteligentes. Su sitio será extremadamente rápido e intuitivo en cualquier pantalla."
        },
        {
          q: "¿Puedo usar mi dominio actual?",
          a: "Sí. Si ya tiene un dominio registrado (por ejemplo, www.suempresa.com), configuraremos todo para apuntar al nuevo sitio premium sin costos adicionales. Si no tiene uno, le ayudaremos a elegirlo y registrarlo."
        },
        {
          q: "¿VELKS tiene otros sitios web oficiales?",
          a: "Sí.\nAdemás del sitio web institucional de VELKS Group, desarrollamos productos y soluciones en dominios propios para ofrecer una experiencia más enfocada y especializada.\nProyectos oficiales operados actualmente por VELKS:\n• velks.space — Plataforma oficial de ORION AI y soluciones de atención inteligente.\n• vgroup.space — Portafolio digital, demostraciones, casos de estudio y proyectos desarrollados por el equipo VELKS.\nTodos los sitios web anteriores pertenecen a VELKS Group y son mantenidos por nuestro equipo de ingeniería y desarrollo.\nPuede navegar con total confianza."
        },
        {
          q: "¿Cómo descubro cuánto costaría implementar ORION en mi empresa?",
          a: "La forma más rápida es hablar directamente con ORION.\nEl asistente puede analizar su negocio, aclarar dudas, presentar características e indicar la solución más adecuada para su caso.\nHaga clic en el icono de chat en la esquina inferior derecha y reciba orientación inmediata."
        },
        {
          q: "¿Qué pasa si no respondo a mis clientes de inmediato?",
          a: "En la mayoría de los casos, se ponen en contacto con otra empresa.\nHoy en día, la velocidad de respuesta influye directamente en la decisión de compra.\nORION ayuda a garantizar que cada visitante reciba atención inmediata, incluso cuando su equipo está ocupado, fuera de la oficina o durmiendo."
        }
      ]
    },
    ctaFinal: {
      tracking: "Hola. Leí toda su página y me di cuenta de que estoy perdiendo dinero frente a la competencia. Quiero entender exactamente cómo su tecnología puede blindar mi negocio de forma inmediata. ¿Podemos hablar?",
      title: "Deja de perder clientes frente a competidores que ofrecen menos que tú.",
      subtitle: "Mientras lees esto, tu rival está atendiendo una llamada de venta. ¿Cambiamos la balanza hoy?",
      cta: "BLINDAR MI NEGOCIO AHORA",
      microcopy: "Sin compromisos • Respuesta inmediata • Presupuesto gratis"
    },
    footer: {
      legalNoticeTitle: "AVISO LEGAL & PROPIEDAD",
      legalNoticeText: "La marca VELKS Group y todas sus operaciones digitales son fundadas, propiedad y administradas legalmente por Rosa Sofia Sousa Marques (Founder) y Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTACTOS DIRECTOS",
      hqLocations: "SEDES CENTRALES",
      legalDisclaimer: "Avisos Legales",
      europeanCompliance: "Cumplimiento Europeo",
      logoDesc: "Transformamos negocios dependientes del dueño en máquinas autónomas de ganancias. Tu dominio en Google se vuelve absoluto y nuestra IA cierra ventas 24/7. Resultados reales y sin cuotas mensuales recurrentes, para que recuperes tu tiempo y libertad.",
      hqMain: "Sede Principal: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxemburgo",
      hqSec: "Sede Secundaria: Coimbra, Portugal",
      policyPrivacy: "Política de Privacidad",
      policyCookies: "Política de Cookies",
      terms: "Términos y Condiciones",
      compliance: "Cumplimiento Europeo",
      legal: "Avisos Legales",
      gdpr: "Conforme a RGPD de la UE",
      rights: "© 2026 VELKS Group. Todos los derechos reservados."
    },
    cookieConsent: {
      text: "Utilizamos cookies y tecnologías similares para garantizar la mejor experiencia de usuario y analizar el tráfico en conformidad estricta con el RGPD de la UE.",
      accept: "Aceptar Todo",
      decline: "Rechazar"
    }
  }
};
