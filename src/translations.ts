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
    reinforcement: string;
    pills: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    trustPilot: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: {
      invisible: { title: string; desc: string };
      contacts: { title: string; desc: string };
      oldSite: { title: string; desc: string };
      lostClients: { title: string; desc: string };
    };
  };
  solution: {
    eyebrow: string;
    closing: string;
    title: string;
    subtitle: string;
    cards: {
      gmaps: { label: string; title: string; desc: string };
      website: { label: string; title: string; desc: string };
      bot: { label: string; title: string; desc: string };
      automation: { label: string; title: string; desc: string };
    };
  };
  authority: {
    eyebrow: string;
    metricsLabel: string;
    standard: string[];
    title: string;
    subtitle: string;
    luxembourg: { name: string; desc: string };
    portugal: { name: string; desc: string };
    spain: { name: string; desc: string };
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
    eyebrow: string;
    title: string;
    subtitle: string;
    singlePayment: string;
    allPlansInclude: string;
    allPlansIncludeDesc: string;
    plans: {
      gmaps: {
        title: string;
        price: string;
        eyebrow: string;
        priceLabel: string;
        badge: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      website: {
        title: string;
        price: string;
        eyebrow: string;
        priceLabel: string;
        badge: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      automacao: {
        title: string;
        price: string;
        eyebrow: string;
        priceLabel: string;
        badge: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      ecommerce: {
        title: string;
        price: string;
        eyebrow: string;
        priceLabel: string;
        badge: string;
        features: string[];
        cta: string;
        tracking: string;
      };
      custom: {
        title: string;
        price: string;
        eyebrow: string;
        priceLabel: string;
        badge: string;
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
    trust: {
      paymentTitle: string;
      cardLabel: string;
      paymentNote: string;
      aiTitle: string;
      aiDescription: string;
      aiPrompt: string;
      aiCopied: string;
      aiCopyFailed: string;
      aiPromptLabel: string;
    };
    logoDesc: string;
    velksNetworkTitle: string;
    velksNetworkInstitutional: string;
    velksNetworkAIInfrastructure: string;
    velksNetworkCommercialAutomation: string;
    velksNetworkDigitalExperiences: string;
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
    followLinkedIn: string;
    corporate: string;
    closeDocument: string;
    legal: string;
    gdpr: string;
    rights: string;
  };
    engineering: {
    label: string;
    title1: string;
    title2: string;
    desc: string;
    metricsLabel: string;
    metrics: {
      automations: string;
      aiProjects: string;
      activeInfra: string;
    };
    cards: {
      sys01: { title: string; desc: string; tags: string };
      sys02: { title: string; desc: string; tags: string };
      sys03: { title: string; desc: string; tags: string };
      sys04: { title: string; desc: string; tags: string };
    };
    bottomHero: {
      title1: string;
      title2: string;
      cta: string;
      ctaTags: string[];
      whatsappMsg: string;
    };
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
      pills: [
        "Google Maps",
        "Sites & Lojas",
        "IA 24/7"
      ],
      reinforcement: "Custos claros desde o início.",
      tracking: "Olá. Vi a vossa infraestrutura tecnológica no site e gostaria de verificar se a minha empresa se qualifica para implementar o vosso sistema comercial. Podem enviar-me a tabela de preços?",
      badge: "★ SER ENCONTRADO É SÓ O PRIMEIRO PASSO",
      title: "O seu negócio precisa aparecer antes dos seus concorrentes.",
      subtitle: "Apareça no Google, transforme visitas em pedidos e responda clientes mesmo quando ninguém da sua equipa está disponível.",
      ctaPrimary: "VER SOLUÇÕES E PREÇOS",
      ctaSecondary: "Ver Pacotes",
      trustPilot: "5,0/5 no Google · 2 avaliações"
    },
    problem: {
      eyebrow: "REALIDADE SEM ENROLAÇÃO",
      title: "Onde o seu negócio perde clientes sem perceber.",
      subtitle: "O problema nem sempre é falta de procura. Muitas vezes o cliente encontra outra empresa, desiste no site, fica sem resposta ou liga quando ninguém atende.",
      cards: {
        invisible: {
          title: "Não aparece quando procuram",
          desc: "Quando alguém procura exatamente o que vende e a sua empresa não aparece, outra empresa recebe essa oportunidade."
        },
        oldSite: {
          title: "O site não transforma visitas em pedidos",
          desc: "O cliente entra, mas não percebe rapidamente por que deve escolher a sua empresa ou qual é o próximo passo."
        },
        contacts: {
          title: "Mensagens ficam sem resposta",
          desc: "Pedidos chegam, dúvidas aparecem e oportunidades perdem força quando ninguém consegue responder a tempo."
        },
        lostClients: {
          title: "Chamadas ficam por atender",
          desc: "O cliente liga à noite, ao fim de semana ou quando a equipa está ocupada. Se ninguém atende, muitas vezes procura outra opção."
        }
      }
    },
    solution: {
      eyebrow: "DA PROCURA AO CONTACTO",
      title: "Quatro pontos. Um único sistema.",
      subtitle: "Cada solução resolve um ponto diferente do caminho do cliente. Juntas, ajudam a transformar procura em pedidos sem deixar oportunidades pelo caminho.",
      cards: {
        gmaps: {
          label: "GOOGLE BUSINESS",
          title: "Seja encontrado quando o cliente já está à procura.",
          desc: "Organizamos e otimizamos a presença da sua empresa no Google para melhorar informação, relevância local e capacidade de descoberta."
        },
        website: {
          label: "WEBSITE & E-COMMERCE",
          title: "Transforme visitas em pedidos e vendas.",
          desc: "Sites e lojas online rápidos, claros e pensados para levar o visitante ao próximo passo."
        },
        bot: {
          label: "ORION AI CAPTURE",
          title: "Responda mesmo quando ninguém está disponível.",
          desc: "ORION conversa por texto e voz, tira dúvidas, percebe o que o cliente precisa, recolhe contactos e entrega o contexto à sua equipa."
        },
        automation: {
          label: "RECEPCIONISTA IA",
          title: "Não deixe chamadas importantes sem resposta.",
          desc: "A IA atende, compreende o pedido, recolhe informações, qualifica a chamada e encaminha quando é necessário falar com uma pessoa."
        }
      },
      closing: "Quando estes quatro pontos trabalham juntos, menos oportunidades se perdem entre pesquisa, visita, mensagem e chamada."
    },
    authority: {
      eyebrow: "PRESENÇA INTERNACIONAL",
      title: "Engenharia comercial para mercados europeus.",
      subtitle: "Criamos sistemas digitais para empresas que precisam de ser encontradas, gerar confiança e responder clientes sem depender de processos manuais.",
      metricsLabel: "CAPACIDADE OPERACIONAL",
      metrics: {
        clients: "IDIOMAS",
        delivered: "MERCADOS EUROPEUS",
        roi: "SOLUÇÕES COMERCIAIS",
        support: "CAPACIDADE IA"
      },
      standard: [
        "O cliente não espera por segunda-feira.",
        "Se procura a sua empresa, faz uma pergunta ou liga à noite, ao fim de semana ou enquanto você está com a família, a oportunidade continua a existir.",
        "A VELKS cria a estrutura para responder, captar e encaminhar esse interesse sem o obrigar a estar sempre ao telefone.",
        "O seu negócio continua a trabalhar mesmo quando você não está."
      ],
      luxembourg: {
        name: "Luxemburgo",
        desc: "Estrutura empresarial e contexto transfronteiriço."
      },
      portugal: {
        name: "Portugal",
        desc: "Desenvolvimento, implementação e operação digital."
      },
      spain: {
        name: "Espanha",
        desc: "Expansão comercial e contexto ibérico."
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
          text: "O meu restaurante quase não aparecia nas pesquisas locais. Depois da otimização da VELKS, começámos a receber mais chamadas e reservas pelo Google Maps. Hoje somos encontrados por clientes que antes acabavam na concorrência.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultora Financeira",
          text: "O meu site não transmitia confiança. A VELKS criou uma presença muito mais profissional e os contactos começaram a chegar mais preparados. A credibilidade aumentou e as conversões cresceram.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Diretor Comercial",
          text: "Perdíamos contactos fora do horário. Com a automação da VELKS, as mensagens recebem resposta e as oportunidades ficam registadas. Hoje conseguimos captar procura 24/7 sem aumentar a equipa.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Empreendedora Digital",
          text: "Gerir as vendas manualmente consumia demasiado tempo. A VELKS automatizou a operação da nossa loja online. Conseguimos vender mais sem aumentar a carga de trabalho.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Sabíamos que havia potencial, mas faltava direção. A auditoria da VELKS identificou os gargalos e definiu prioridades claras. Hoje tomamos decisões com muito mais confiança.",
          rating: 5
        }
      ]
    },
    pricing: {
      eyebrow: "ESCOLHA O QUE O SEU NEGÓCIO PRECISA",
      title: "Comece agora, sem pedir orçamento primeiro.",
      subtitle: "Veja os preços, escolha o que o seu negócio precisa e ative antes que o próximo cliente escolha a concorrência.",
      singlePayment: "PREÇOS CLAROS · OPERAÇÃO GERIDA",
      allPlansInclude: "Todos os pacotes incluem:",
      allPlansIncludeDesc: "Suporte premium, total conformidade com o RGPD, design focado em telemóveis e otimização de velocidade máxima.",
      plans: {
        gmaps: {
          title: "Google Maps Profissional",
          price: "90€",
          eyebrow: "01. GOOGLE BUSINESS",
          priceLabel: "Preço",
          badge: "PAGAMENTO ÚNICO",
          features: [
            "Configuração e Reivindicação Completa",
            "SEO Local e Categorias Estratégicas",
            "Descrição, Serviços e Produtos Otimizados",
            "Otimização de Fotos e Dados Comerciais",
            "Estrutura Direta para Captação de Avaliações",
            "Otimização para Chamadas, Rotas e Contactos",
            "Posicionamento para Pesquisa Local"
          ],
          cta: "OTIMIZAR PRESENÇA LOCAL",
          tracking: "Olá! Tenho interesse no pacote Google Maps Profissional. Os especialistas da VELKS podiam ajudar-me?"
        },
        website: {
          title: "Website Comercial",
          price: "19€/mês",
          eyebrow: "02. WEBSITES",
          priceLabel: "Preço",
          badge: "SETUP 300€",
          features: [
            "Website Personalizado Mobile-First",
            "Estrutura Comercial Adaptada ao Negócio",
            "Captação Estruturada de Pedidos e Orçamentos",
            "Recolha de Contacto, Necessidade e Observações",
            "Envio Direto do Pedido para a Empresa",
            "SEO Técnico + Google e Bing Search Console",
            "Integração de Domínio, DNS e SSL",
            "Infraestrutura, Deploy e Manutenção Geridos"
          ],
          cta: "ATIVAR WEBSITE COMERCIAL",
          tracking: "Olá! Tenho interesse no pacote Site Profissional. Qual é o primeiro passo para construirmos a minha nova máquina de vendas?"
        },
        automacao: {
          title: "ORION AI Capture",
          price: "29€/mês",
          eyebrow: "03. ORION AI",
          priceLabel: "Preço",
          badge: "SETUP 297€",
          features: [
            "Widget de IA Proativo Integrado no Website",
            "Conversação por Texto + Voz Natural com Azure AI",
            "Identidade, Avatar, Cores e Mensagens Personalizadas",
            "Conhecimento Configurado para o Seu Negócio",
            "Qualificação Inteligente de Necessidade e Intenção",
            "Captura de Nome, Contacto e Dados Comerciais",
            "Registo Estruturado de Leads e Conversas",
            "Relatório Automático por Email",
            "Resumo e Transcrição da Conversa"
          ],
          cta: "ATIVAR ORION AI",
          tracking: "Olá, Equipa VELKS. Analisei a tabela de preços no site e tenho interesse em avançar com a Assistência Automática de IA. Qual é o próximo passo?"
        },
        ecommerce: {
          title: "E-Commerce Completo",
          price: "39€/mês",
          eyebrow: "04. E-COMMERCE",
          priceLabel: "Preço",
          badge: "SETUP 450€",
          features: [
            "Loja Online Personalizada e Mobile-First",
            "Catálogo de Produtos e Estrutura Comercial",
            "Checkout e Pagamentos Seguros com Stripe",
            "Configuração de Envios e Stock",
            "Gestão Estruturada de Encomendas",
            "Painel de Administração Simplificado",
            "SEO Técnico para Produtos e Pesquisa",
            "Base de Dados e Operação Integradas",
            "Hosting, SSL, Deploy e Manutenção Geridos"
          ],
          cta: "ATIVAR E-COMMERCE",
          tracking: "Olá, Equipa VELKS. Analisei a tabela de preços no site e tenho interesse em avançar com o pacote E-Commerce Completo. Qual é o próximo passo?"
        },
        custom: {
          title: "Recepcionista IA",
          price: "99€/mês",
          eyebrow: "05. AI RECEPTION",
          priceLabel: "Preço",
          badge: "SETUP 499€",
          features: [
            "Atendimento Telefónico Inteligente 24/7",
            "Voz Natural e Conversação Contextual",
            "Conhecimento Configurado para o Seu Negócio",
            "Fluxos Inteligentes para Cada Tipo de Chamada",
            "Qualificação Automática de Clientes e Pedidos",
            "Captura de Leads Durante a Chamada",
            "Encaminhamento e Escalação de Chamadas",
            "Resumo Estruturado de Cada Conversa",
            "Notificações Automáticas para a Sua Equipa",
            "Operação, Monitorização e Manutenção Geridas"
          ],
          cta: "ATIVAR RECEPCIONISTA IA",
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
          q: "Quanto tempo demora a implementação?",
          a: "Depende da solução e do material disponível. Antes de começarmos, recebe um prazo definido para o seu projeto. Google Business tende a ser mais rápido; websites, ORION, e-commerce e telefonia IA precisam de configuração e testes."
        },
        {
          q: "O domínio, site e dados ficam meus?",
          a: "O domínio, conteúdos e dados da empresa permanecem sob controlo do cliente conforme o serviço contratado. Antes da implementação explicamos claramente o que pertence ao cliente e o que depende da infraestrutura gerida pela VELKS."
        },
        {
          q: "O que está incluído na mensalidade?",
          a: "A mensalidade corresponde a operação contínua real: infraestrutura, hosting/deploy quando aplicável, monitorização, manutenção e operação técnica da solução contratada."
        },
        {
          q: "Já tenho website. Preciso fazer outro?",
          a: "Não necessariamente. Podemos implementar Google Business, ORION, integrações, e-commerce ou melhorias sobre uma estrutura existente quando tecnicamente adequado."
        },
        {
          q: "O que exatamente faz o ORION?",
          a: "ORION conversa por texto e voz, utiliza as informações da sua empresa, responde dúvidas, percebe intenção, qualifica oportunidades, recolhe dados e entrega contexto estruturado à equipa."
        },
        {
          q: "Como funciona a Recepcionista IA?",
          a: "A IA atende chamadas, compreende o pedido, recolhe informação, qualifica e encaminha ou escala a chamada de acordo com as regras definidas para a empresa."
        },
        {
          q: "O que está incluído no E-commerce?",
          a: "A implementação pode incluir estrutura da loja, catálogo, checkout, pagamentos, gestão de encomendas e as integrações previstas no escopo. Stock, transportadoras ou sistemas externos são definidos antes do início."
        },
        {
          q: "Conseguem colocar a minha empresa em primeiro no Google?",
          a: "Não prometemos posições que ninguém controla. Trabalhamos estrutura técnica, Google Business Profile, relevância, indexabilidade e otimização para melhorar a capacidade de descoberta."
        },
        {
          q: "Trabalham em vários idiomas?",
          a: "Sim. Websites, interfaces e agentes podem ser implementados em vários idiomas de acordo com o projeto."
        },
        {
          q: "Quais são os domínios oficiais da VELKS?",
          a: "Está em velksgroup.com, o website institucional. Também operamos velks.space, velksgroup.cloud e vgroup.space."
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
      closeDocument: "FECHAR DOCUMENTO",
      corporate: "Informação Corporativa",
      followLinkedIn: "Seguir a VELKS Group",
      trust: {
        paymentTitle: "PAGAMENTO SEGURO",
        cardLabel: "Cartão",
        paymentNote: "Pagamentos processados de forma segura pela Stripe.",
        aiTitle: "PERGUNTE À IA SOBRE A VELKS",
        aiDescription: "Verifique quem somos, o que fazemos e como a VELKS trabalha.",
        aiPrompt: "Analise a VELKS Group com base em fontes públicas e nos seus domínios oficiais. Explique o que é a empresa, que soluções oferece, que tecnologias utiliza e qual é a sua presença digital. Priorize velksgroup.com, velks.space e velksgroup.cloud e diferencie claramente informação verificada de inferências.",
        aiCopied: "PERGUNTA COPIADA · COLE NO CHAT",
        aiCopyFailed: "Não foi possível copiar automaticamente. Copie a pergunta abaixo e cole na IA.",
        aiPromptLabel: "Pergunta sobre a VELKS para copiar",
      },
      legalNoticeTitle: "AVISO JURÍDICO & TITULARIDADE",
      legalNoticeText: "A marca VELKS Group e todas as suas operações digitais são fundadas, detidas e geridas legalmente por Rosa Sofia Sousa Marques (Founder) e Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTACTOS DIRETOS",
      hqLocations: "ESCRITÓRIOS CENTRAIS",
      legalDisclaimer: "Avisos Legais",
      europeanCompliance: "Conformidade Europeia",
      velksNetworkTitle: "REDE OPERACIONAL VELKS",
      velksNetworkInstitutional: "Institucional",
      velksNetworkAIInfrastructure: "Infraestrutura IA",
      velksNetworkCommercialAutomation: "Automação Comercial",
      velksNetworkDigitalExperiences: "Experiências Digitais",
      logoDesc: "Transformamos negócios dependentes do dono em máquinas autónomas de lucro. O seu domínio no Google torna-se absoluto e a nossa IA fecha vendas 24/7. Resultados reais e custos claros desde o início, para que recupere o seu tempo e a sua liberdade.",
      hqMain: "Sede Principal: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxemburgo",
      hqSec: "Sede Secundária: Coimbra, Portugal",
      policyPrivacy: "Política de Privacidade",
      policyCookies: "Política de Cookies",
      terms: "Termos e Condições",
      compliance: "Compliance Europeu",
      legal: "Jurídico",
      gdpr: "CONFORMIDADE RGPD · UE",
      rights: "© 2026 VELKS Group. Todos os direitos reservados."
    },
  engineering: {
      label: "ANTES DE DECIDIR, VEJA O TIPO DE TECNOLOGIA QUE DESENVOLVEMOS PARA CLIENTES QUE EXIGEM MAIS DO QUE UM SIMPLES WEBSITE.",
      title1: "NÃO SOMOS APENAS WEB DESIGNERS.",
      title2: "SOMOS ENGENHEIROS DE PRODUTO.",
      desc: "Enquanto o mercado vende templates, nós desenvolvemos sistemas capazes de operar aplicações, automações, agentes inteligentes e infraestruturas digitais preparadas para crescimento real.",
      metricsLabel: "[ OPERATIONAL METRICS ]",
      metrics: {
        automations: "AUTOMAÇÕES",
        aiProjects: "PROJETOS IA",
        activeInfra: "INFRAESTRUTURA ATIVA"
      },
      cards: {
        sys01: {
          title: "ARQUITETURA DE AGENTES IA",
          desc: "Orquestração multimodelo, memória contextual persistente, processamento de linguagem natural e integração de voz em tempo real para experiências conversacionais avançadas.",
          tags: "LLM • STT • TTS • MEMORY"
        },
        sys02: {
          title: "ENGENHARIA VISUAL EM TEMPO REAL",
          desc: "Interfaces de alta performance desenvolvidas com renderização avançada, animações otimizadas e experiências digitais concebidas para retenção máxima.",
          tags: "WEBGL • THREE.JS • GSAP • SCROLLYTELLING"
        },
        sys03: {
          title: "INFRAESTRUTURA REATIVA DISTRIBUÍDA",
          desc: "Bases de dados, eventos em tempo real e arquiteturas modernas preparadas para suportar aplicações vivas, automação intensiva e crescimento contínuo.",
          tags: "SUPABASE • POSTGRESQL • REALTIME • EDGE"
        },
        sys04: {
          title: "ARQUITETURA SaaS & PAYMENTS",
          desc: "Sistemas de autenticação, subscrição, faturação e proteção de dados preparados para produtos digitais de escala internacional.",
          tags: "STRIPE • AUTH • RGPD • BILLING"
        }
      },
      bottomHero: {
        title1: "A maioria dos clientes chega até nós à procura de um website.",
        title2: "Muitos descobrem que o que realmente precisam é de uma infraestrutura capaz de acelerar todo o negócio.",
        cta: "DISCUTIR ARQUITETURA TÉCNICA",
        ctaTags: ["IA", "SAAS", "WEB APPS"],
        whatsappMsg: "Olá, VELKS Team.\nGostaria de discutir uma arquitetura técnica para um projeto de IA, SaaS ou Web App. Vocês poderiam me ajudar ?"
      }
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
      pills: [
        "Google Maps",
        "Siti & negozi",
        "IA 24/7"
      ],
      reinforcement: "Costi chiari fin dall’inizio.",
      tracking: "Ciao. Ho visto la vostra infrastruttura tecnologica sul sito e vorrei verificare se la mia azienda si qualifica per implementare il vostro sistema commerciale. Potete inviarmi il listino prezzi?",
      badge: "★ FARSI TROVARE È SOLO IL PRIMO PASSO",
      title: "La tua azienda deve comparire prima dei concorrenti.",
      subtitle: "Fatti trovare su Google, trasforma le visite in richieste e rispondi ai clienti anche quando il team non è disponibile.",
      ctaPrimary: "VEDI SOLUZIONI E PREZZI",
      ctaSecondary: "Vedi Pacchetti",
      trustPilot: "5,0/5 su Google · 2 recensioni"
    },
    problem: {
      eyebrow: "LA REALTÀ, SENZA GIRI DI PAROLE",
      title: "Dove la tua azienda perde clienti senza accorgersene.",
      subtitle: "Il problema non è sempre la mancanza di domanda. Spesso il cliente trova un’altra azienda, abbandona il sito, non riceve risposta o chiama quando nessuno risponde.",
      cards: {
        invisible: {
          title: "Non compari quando i clienti cercano",
          desc: "Quando qualcuno cerca esattamente ciò che vendi e la tua azienda non compare, un’altra azienda riceve quell’opportunità."
        },
        oldSite: {
          title: "Il sito non trasforma le visite in richieste",
          desc: "Il cliente entra, ma non capisce subito perché dovrebbe scegliere la tua azienda o quale sia il passo successivo."
        },
        contacts: {
          title: "I messaggi restano senza risposta",
          desc: "Arrivano richieste, emergono dubbi e le opportunità perdono forza quando nessuno riesce a rispondere in tempo."
        },
        lostClients: {
          title: "Le chiamate restano senza risposta",
          desc: "Il cliente chiama di sera, nel fine settimana o quando il team è occupato. Se nessuno risponde, spesso cerca un’alternativa."
        }
      }
    },
    solution: {
      eyebrow: "DALLA RICERCA AL CONTATTO",
      title: "Quattro punti. Un unico sistema.",
      subtitle: "Ogni soluzione interviene su un punto diverso del percorso del cliente. Insieme, aiutano a trasformare la domanda in richieste senza perdere opportunità lungo il cammino.",
      cards: {
        gmaps: {
          label: "GOOGLE BUSINESS",
          title: "Fatti trovare quando il cliente sta già cercando.",
          desc: "Organizziamo e ottimizziamo la presenza della tua azienda su Google per migliorare le informazioni, la rilevanza locale e la possibilità di essere trovata."
        },
        website: {
          label: "SITI WEB & E-COMMERCE",
          title: "Trasforma le visite in richieste e vendite.",
          desc: "Siti e negozi online veloci, chiari e pensati per guidare il visitatore al passo successivo."
        },
        bot: {
          label: "ORION AI CAPTURE",
          title: "Rispondi anche quando nessuno è disponibile.",
          desc: "ORION conversa via testo e voce, chiarisce i dubbi, comprende le esigenze del cliente, raccoglie i contatti e trasmette il contesto al tuo team."
        },
        automation: {
          label: "RECEPTIONIST IA",
          title: "Non lasciare senza risposta le chiamate importanti.",
          desc: "L’IA risponde, comprende la richiesta, raccoglie le informazioni, qualifica la chiamata e la inoltra quando è necessario parlare con una persona."
        }
      },
      closing: "Quando questi quattro punti lavorano insieme, si perdono meno opportunità tra ricerca, visita, messaggio e chiamata."
    },
    authority: {
      eyebrow: "PRESENZA INTERNAZIONALE",
      title: "Ingegneria commerciale per i mercati europei.",
      subtitle: "Creiamo sistemi digitali per aziende che devono farsi trovare, generare fiducia e rispondere ai clienti senza dipendere da processi manuali.",
      metricsLabel: "CAPACITÀ OPERATIVA",
      metrics: {
        clients: "LINGUE",
        delivered: "MERCATI EUROPEI",
        roi: "SOLUZIONI COMMERCIALI",
        support: "CAPACITÀ IA"
      },
      standard: [
        "Il cliente non aspetta lunedì.",
        "Se cerca la tua azienda, fa una domanda o chiama di sera, nel fine settimana o mentre sei con la famiglia, l’opportunità continua a esistere.",
        "VELKS crea la struttura per rispondere, raccogliere e indirizzare questo interesse senza costringerti a stare sempre al telefono.",
        "La tua attività continua a lavorare anche quando tu non ci sei."
      ],
      luxembourg: {
        name: "Lussemburgo",
        desc: "Struttura aziendale e contesto transfrontaliero."
      },
      portugal: {
        name: "Portogallo",
        desc: "Sviluppo, implementazione e operatività digitale."
      },
      spain: {
        name: "Spagna",
        desc: "Espansione commerciale e contesto iberico."
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
          text: "Il mio ristorante compariva a malapena nelle ricerche locali. Dopo l’ottimizzazione di VELKS, abbiamo iniziato a ricevere più chiamate e prenotazioni tramite Google Maps. Oggi ci trovano clienti che prima finivano dalla concorrenza.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consulente Finanziaria",
          text: "Il mio sito non trasmetteva fiducia. VELKS ha creato una presenza molto più professionale e i contatti hanno iniziato ad arrivare più preparati. La credibilità è aumentata e le conversioni sono cresciute.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Direttore Commerciale",
          text: "Perdevamo contatti fuori orario. Con l’automazione di VELKS, i messaggi ricevono risposta e le opportunità vengono registrate. Oggi possiamo intercettare la domanda 24/7 senza ampliare il team.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Imprenditrice Digitale",
          text: "Gestire le vendite manualmente richiedeva troppo tempo. VELKS ha automatizzato l’operatività del nostro negozio online. Siamo riusciti a vendere di più senza aumentare il carico di lavoro.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Sapevamo che c’era potenziale, ma mancava una direzione. L’audit di VELKS ha individuato i colli di bottiglia e definito priorità chiare. Oggi prendiamo decisioni con molta più fiducia.",
          rating: 5
        }
      ]
    },
    pricing: {
      eyebrow: "SCEGLI CIÒ CHE SERVE ALLA TUA AZIENDA",
      title: "Inizia ora, senza dover chiedere prima un preventivo.",
      subtitle: "Consulta i prezzi, scegli ciò che serve alla tua azienda e attivalo prima che il prossimo cliente scelga un concorrente.",
      singlePayment: "PREZZI CHIARI · GESTIONE CONTINUATIVA",
      allPlansInclude: "Tutti i pacchetti includono:",
      allPlansIncludeDesc: "Supporto premium, conformità totale GDPR, design mobile-first e ottimizzazione per la massima velocità di caricamento.",
      plans: {
        gmaps: {
          title: "Google Maps Professionale",
          price: "90€",
          eyebrow: "01. GOOGLE BUSINESS",
          priceLabel: "Prezzo",
          badge: "PAGAMENTO UNICO",
          features: [
            "Configurazione e Rivendicazione Completa del Profilo",
            "SEO Locale e Categorie Strategiche",
            "Descrizione, Servizi e Prodotti Ottimizzati",
            "Ottimizzazione di Foto e Informazioni Aziendali",
            "Sistema Diretto per Raccogliere Recensioni",
            "Ottimizzazione di Chiamate, Indicazioni Stradali e Contatti",
            "Posizionamento nelle Ricerche Locali"
          ],
          cta: "OTTIMIZZA LA PRESENZA LOCALE",
          tracking: "Ciao! Sono interessato al pacchetto Google Maps Professionale. Gli specialisti di VELKS potrebbero aiutarmi?"
        },
        website: {
          title: "Sito Web Commerciale",
          price: "19€/mese",
          eyebrow: "02. WEBSITES",
          priceLabel: "Prezzo",
          badge: "CONFIGURAZIONE INIZIALE 300€",
          features: [
            "Sito Web su Misura con Approccio Mobile-First",
            "Struttura Commerciale Adattata alla Tua Attività",
            "Raccolta Strutturata di Richieste e Preventivi",
            "Acquisizione di Contatti, Esigenze e Note",
            "Invio Diretto delle Richieste alla Tua Azienda",
            "SEO Tecnica + Google e Bing Search Console",
            "Integrazione di Dominio, DNS e SSL",
            "Infrastruttura, Pubblicazione e Manutenzione Gestite"
          ],
          cta: "ATTIVA IL SITO COMMERCIALE",
          tracking: "Ciao! Sono interessato al pacchetto Sito Web Professionale. Qual è il primo passo per costruire la mia nuova macchina per le vendite?"
        },
        automacao: {
          title: "ORION AI Capture",
          price: "29€/mese",
          eyebrow: "03. ORION AI",
          priceLabel: "Prezzo",
          badge: "CONFIGURAZIONE INIZIALE 297€",
          features: [
            "Widget IA Proattivo Integrato nel Sito Web",
            "Conversazioni Testuali e Voce Naturale con Azure AI",
            "Identità, Avatar, Colori e Messaggi Personalizzati",
            "Conoscenze Configurate per la Tua Attività",
            "Qualificazione Intelligente di Esigenze e Intenzioni",
            "Acquisizione di Nome, Contatti e Dati Commerciali",
            "Registrazione Strutturata di Lead e Conversazioni",
            "Report Automatico via Email",
            "Riepilogo e Trascrizione della Conversazione"
          ],
          cta: "ATTIVA ORION AI",
          tracking: "Ciao, Team VELKS. Ho analizzato il listino prezzi sul sito e sono interessato ad andare avanti con l'Assistenza Automatica IA. Qual è il prossimo passo per iniziare l'integrazione?"
        },
        ecommerce: {
          title: "E-Commerce Completo",
          price: "39€/mese",
          eyebrow: "04. E-COMMERCE",
          priceLabel: "Prezzo",
          badge: "CONFIGURAZIONE INIZIALE 450€",
          features: [
            "Negozio Online su Misura con Approccio Mobile-First",
            "Catalogo Prodotti e Struttura Commerciale",
            "Checkout e Pagamenti Sicuri con Stripe",
            "Configurazione di Spedizioni e Scorte",
            "Gestione Strutturata degli Ordini",
            "Pannello di Amministrazione Semplificato",
            "SEO Tecnica per Prodotti e Ricerca",
            "Database e Operatività Integrati",
            "Hosting, SSL, Pubblicazione e Manutenzione Gestiti"
          ],
          cta: "ATTIVA E-COMMERCE",
          tracking: "Ciao, Team VELKS. Ho analizzato il listino prezzi sul sito e sono interessato ad andare avanti con il pacchetto E-Commerce Completo. Qual è il prossimo passo per iniziare l'integrazione?"
        },
        custom: {
          title: "Receptionist IA",
          price: "99€/mese",
          eyebrow: "05. AI RECEPTION",
          priceLabel: "Prezzo",
          badge: "CONFIGURAZIONE INIZIALE 499€",
          features: [
            "Assistenza Telefonica Intelligente 24/7",
            "Voce Naturale e Conversazioni Contestuali",
            "Conoscenze Configurate per la Tua Attività",
            "Flussi Intelligenti per Ogni Tipo di Chiamata",
            "Qualificazione Automatica di Clienti e Richieste",
            "Acquisizione di Lead Durante le Chiamate",
            "Inoltro delle Chiamate e Passaggio al Team",
            "Riepilogo Strutturato di Ogni Conversazione",
            "Notifiche Automatiche per il Tuo Team",
            "Operatività, Monitoraggio e Manutenzione Gestiti"
          ],
          cta: "ATTIVA RECEPTIONIST IA",
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
          q: "Quanto tempo richiede l’implementazione?",
          a: "Dipende dalla soluzione e dal materiale disponibile. Prima di iniziare, ricevi una tempistica definita per il progetto. Google Business tende a essere più rapido; siti web, ORION, e-commerce e telefonia IA richiedono configurazione e test."
        },
        {
          q: "Il dominio, il sito e i dati restano miei?",
          a: "Il dominio, i contenuti e i dati aziendali restano sotto il controllo del cliente secondo il servizio acquistato. Prima dell’implementazione spieghiamo chiaramente ciò che appartiene al cliente e ciò che dipende dall’infrastruttura gestita da VELKS."
        },
        {
          q: "Cosa comprende il canone mensile?",
          a: "Il canone corrisponde a un’operatività continuativa reale: infrastruttura, hosting e deploy ove applicabili, monitoraggio, manutenzione e gestione tecnica della soluzione acquistata."
        },
        {
          q: "Ho già un sito. Devo crearne un altro?",
          a: "Non necessariamente. Possiamo implementare Google Business, ORION, integrazioni, e-commerce o miglioramenti su una struttura esistente quando tecnicamente adeguato."
        },
        {
          q: "Cosa fa esattamente ORION?",
          a: "ORION conversa via testo e voce, utilizza le informazioni aziendali, risponde ai dubbi, comprende le intenzioni, qualifica le opportunità, raccoglie dati e trasmette un contesto strutturato al team."
        },
        {
          q: "Come funziona la Receptionist IA?",
          a: "L’IA risponde alle chiamate, comprende la richiesta, raccoglie informazioni, qualifica e inoltra la chiamata o la passa a un livello superiore secondo le regole definite per l’azienda."
        },
        {
          q: "Cosa comprende l’E-commerce?",
          a: "L’implementazione può includere struttura del negozio, catalogo, checkout, pagamenti, gestione degli ordini e integrazioni previste nell’ambito concordato. Stock, corrieri e sistemi esterni vengono definiti prima dell’inizio."
        },
        {
          q: "Potete portare la mia azienda al primo posto su Google?",
          a: "Non promettiamo posizioni che nessuno controlla. Lavoriamo su struttura tecnica, Google Business Profile, rilevanza, indicizzabilità e ottimizzazione per migliorare la possibilità di essere trovati."
        },
        {
          q: "Lavorate in più lingue?",
          a: "Sì. Siti web, interfacce e agenti possono essere implementati in più lingue a seconda del progetto."
        },
        {
          q: "Quali sono i domini ufficiali di VELKS?",
          a: "Ti trovi su velksgroup.com, il sito istituzionale. Gestiamo anche velks.space, velksgroup.cloud e vgroup.space."
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
      closeDocument: "CHIUDI DOCUMENTO",
      corporate: "Informazioni Aziendali",
      followLinkedIn: "Segui VELKS Group",
      trust: {
        paymentTitle: "PAGAMENTO SICURO",
        cardLabel: "Carta",
        paymentNote: "Pagamenti elaborati in modo sicuro da Stripe.",
        aiTitle: "CHIEDI ALL’IA INFORMAZIONI SU VELKS",
        aiDescription: "Scopri chi siamo, cosa facciamo e come lavora VELKS.",
        aiPrompt: "Analizza VELKS Group sulla base di fonti pubbliche e dei suoi domini ufficiali. Spiega che cos’è l’azienda, quali soluzioni offre, quali tecnologie utilizza e qual è la sua presenza digitale. Dai priorità a velksgroup.com, velks.space e velksgroup.cloud e distingui chiaramente le informazioni verificate dalle deduzioni.",
        aiCopied: "DOMANDA COPIATA · INCOLLALA NELLA CHAT",
        aiCopyFailed: "Copia automatica non riuscita. Copia la domanda qui sotto e incollala nell’IA.",
        aiPromptLabel: "Domanda su VELKS da copiare",
      },
      legalNoticeTitle: "AVVISO LEGALE & PROPRIETÀ",
      legalNoticeText: "Il marchio VELKS Group e tutte le sue operazioni digitali sono fondate, possedute e gestite legalmente da Rosa Sofia Sousa Marques (Founder) e Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTATTI DIRETTI",
      hqLocations: "SEDI CENTRALI",
      legalDisclaimer: "Note Legali",
      europeanCompliance: "Conformità Europea",
      velksNetworkTitle: "RETE OPERATIVA VELKS",
      velksNetworkInstitutional: "Istituzionale",
      velksNetworkAIInfrastructure: "Infrastruttura IA",
      velksNetworkCommercialAutomation: "Automazione Commerciale",
      velksNetworkDigitalExperiences: "Esperienze Digitali",
      logoDesc: "Trasformiamo le imprese dipendenti dal proprietario in macchine da profitto autonome. Il tuo dominio su Google diventa assoluto e la nostra IA chiude le vendite 24/7. Risultati reali e costi chiari fin dall’inizio, così puoi recuperare il tuo tempo e la tua libertà.",
      hqMain: "Sede Principale: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Lussemburgo",
      hqSec: "Sede Secondaria: Coimbra, Portogallo",
      policyPrivacy: "Informativa sulla Privacy",
      policyCookies: "Informativa sui Cookie",
      terms: "Termini e Condizioni",
      compliance: "Conformità Europea",
      legal: "Informazioni Legali",
      gdpr: "CONFORMITÀ GDPR · UE",
      rights: "© 2026 VELKS Group. Tutti i diritti riservati."
    },
  engineering: {
      label: "PRIMA DI DECIDERE, SCOPRI IL TIPO DI TECNOLOGIA CHE SVILUPPIAMO PER I CLIENTI CHE ESIGONO PIÙ DI UN SEMPLICE SITO WEB.",
      title1: "NON SIAMO SOLO WEB DESIGNER.",
      title2: "SIAMO INGEGNERI DI PRODOTTO.",
      desc: "Mentre il mercato vende modelli, noi sviluppiamo sistemi in grado di far funzionare applicazioni, automazioni, agenti intelligenti e infrastrutture digitali progettate per una crescita reale.",
      metricsLabel: "[ METRICHE OPERATIVE ]",
      metrics: {
        automations: "AUTOMAZIONI",
        aiProjects: "PROGETTI IA",
        activeInfra: "INFRASTRUTTURA ATTIVA"
      },
      cards: {
        sys01: {
          title: "ARCHITETTURA DI AGENTI IA",
          desc: "Orchestrazione multimodello, memoria contestuale persistente, elaborazione del linguaggio naturale e integrazione vocale in tempo reale per esperienze conversazionali avanzate.",
          tags: "LLM • STT • TTS • MEMORY"
        },
        sys02: {
          title: "INGEGNERIA VISIVA IN TEMPO REALE",
          desc: "Interfacce ad alte prestazioni sviluppate con rendering avanzato, animazioni ottimizzate ed esperienze digitali progettate per la massima fidelizzazione.",
          tags: "WEBGL • THREE.JS • GSAP • SCROLLYTELLING"
        },
        sys03: {
          title: "INFRASTRUTTURA REATTIVA DISTRIBUITA",
          desc: "Database, eventi in tempo reale e architetture moderne preparate per supportare applicazioni dal vivo, automazione intensiva e crescita continua.",
          tags: "SUPABASE • POSTGRESQL • REALTIME • EDGE"
        },
        sys04: {
          title: "ARCHITETTURA SaaS E PAGAMENTI",
          desc: "Sistemi di autenticazione, abbonamento, fatturazione e protezione dei dati preparati per prodotti digitali su scala internazionale.",
          tags: "STRIPE • AUTH • GDPR • BILLING"
        }
      },
      bottomHero: {
        title1: "La maggior parte dei clienti si rivolge a noi in cerca di un sito web.",
        title2: "Molti scoprono che ciò di cui hanno realmente bisogno è un'infrastruttura in grado di accelerare l'intero business.",
        cta: "DISCUTERE DI ARCHITETTURA TECNICA",
        ctaTags: ["IA", "SAAS", "WEB APPS"],
        whatsappMsg: "Ciao, VELKS Team.\nVorrei discutere un'architettura tecnica per un progetto IA, SaaS o Web App. Potreste aiutarmi?"
      }
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
      pills: [
        "Google Maps",
        "Sites & Shops",
        "AI 24/7"
      ],
      reinforcement: "Clear costs from the start.",
      tracking: "Hello. I saw your technological infrastructure on the website and would like to check if my company qualifies to implement your commercial system. Can you send me the pricing table?",
      badge: "★ BEING FOUND IS ONLY THE FIRST STEP",
      title: "Your business needs to show up before your competitors.",
      subtitle: "Show up on Google, turn visits into enquiries and answer customers even when no one on your team is available.",
      ctaPrimary: "SEE SOLUTIONS & PRICING",
      ctaSecondary: "View Packages",
      trustPilot: "5.0/5 on Google · 2 reviews"
    },
    problem: {
      eyebrow: "NO-NONSENSE REALITY",
      title: "Where your business loses customers without noticing.",
      subtitle: "The problem is not always a lack of demand. Often, customers find another business, leave the website, get no reply or call when no one can answer.",
      cards: {
        invisible: {
          title: "You do not appear when customers search",
          desc: "When someone searches for exactly what you sell and your business does not appear, another business gets that opportunity."
        },
        oldSite: {
          title: "Your website does not turn visits into enquiries",
          desc: "Customers arrive, but do not quickly understand why they should choose your business or what to do next."
        },
        contacts: {
          title: "Messages go unanswered",
          desc: "Enquiries come in, questions arise and opportunities lose momentum when no one can reply in time."
        },
        lostClients: {
          title: "Calls go unanswered",
          desc: "Customers call at night, at the weekend or when your team is busy. If no one answers, they often look elsewhere."
        }
      }
    },
    solution: {
      eyebrow: "FROM SEARCH TO CONTACT",
      title: "Four touchpoints. One system.",
      subtitle: "Each solution addresses a different point in the customer journey. Together, they help turn demand into enquiries without losing opportunities along the way.",
      cards: {
        gmaps: {
          label: "GOOGLE BUSINESS",
          title: "Be found when customers are already searching.",
          desc: "We organise and optimise your business presence on Google to improve its information, local relevance and discoverability."
        },
        website: {
          label: "WEBSITES & E-COMMERCE",
          title: "Turn visits into enquiries and sales.",
          desc: "Fast, clear websites and online shops designed to guide visitors to the next step."
        },
        bot: {
          label: "ORION AI CAPTURE",
          title: "Respond even when no one is available.",
          desc: "ORION talks by text and voice, answers questions, understands what customers need, captures contact details and passes the context to your team."
        },
        automation: {
          label: "AI RECEPTIONIST",
          title: "Do not leave important calls unanswered.",
          desc: "AI answers, understands the request, collects information, qualifies the call and transfers it when a person needs to step in."
        }
      },
      closing: "When these four touchpoints work together, fewer opportunities are lost between search, visit, message and call."
    },
    authority: {
      eyebrow: "INTERNATIONAL PRESENCE",
      title: "Commercial engineering for European markets.",
      subtitle: "We create digital systems for businesses that need to be found, build trust and respond to customers without relying on manual processes.",
      metricsLabel: "OPERATIONAL CAPACITY",
      metrics: {
        clients: "LANGUAGES",
        delivered: "EUROPEAN MARKETS",
        roi: "COMMERCIAL SOLUTIONS",
        support: "AI CAPABILITY"
      },
      standard: [
        "Customers do not wait until Monday.",
        "When they search for your business, ask a question or call at night, at the weekend or while you are with your family, the opportunity still exists.",
        "VELKS builds the structure to respond to, capture and direct that interest without requiring you to be on the phone all the time.",
        "Your business keeps working even when you are not there."
      ],
      luxembourg: {
        name: "Luxembourg",
        desc: "Business structure and cross-border context."
      },
      portugal: {
        name: "Portugal",
        desc: "Development, implementation and digital operations."
      },
      spain: {
        name: "Spain",
        desc: "Commercial expansion and Iberian market context."
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
          text: "My restaurant barely appeared in local searches. After VELKS optimised our presence, we started receiving more calls and bookings through Google Maps. Today, customers find us who used to go to competitors.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Financial Consultant",
          text: "My website did not inspire confidence. VELKS created a much more professional presence, and enquiries started coming from better-prepared prospects. Our credibility improved and conversions grew.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Commercial Director",
          text: "We were losing contacts outside business hours. With VELKS automation, messages get answered and opportunities are recorded. Today, we can capture demand 24/7 without growing our team.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Digital Entrepreneur",
          text: "Managing sales manually took too much time. VELKS automated our online shop operations. We managed to sell more without increasing our workload.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "We knew there was potential, but lacked direction. The VELKS audit identified bottlenecks and set clear priorities. Today, we make decisions with much more confidence.",
          rating: 5
        }
      ]
    },
    pricing: {
      eyebrow: "CHOOSE WHAT YOUR BUSINESS NEEDS",
      title: "Start now, without asking for a quote first.",
      subtitle: "See the prices, choose what your business needs and activate it before the next customer chooses a competitor.",
      singlePayment: "CLEAR PRICING · MANAGED OPERATIONS",
      allPlansInclude: "All packages include:",
      allPlansIncludeDesc: "Premium support, full EU GDPR compliance, mobile-first design, and optimization for blazing fast load speeds.",
      plans: {
        gmaps: {
          title: "Professional Google Maps",
          price: "90€",
          eyebrow: "01. GOOGLE BUSINESS",
          priceLabel: "Price",
          badge: "ONE-TIME PAYMENT",
          features: [
            "Complete Profile Setup and Claiming",
            "Local SEO and Strategic Categories",
            "Optimized Description, Services and Products",
            "Photo and Business Information Optimization",
            "Direct Review Collection System",
            "Optimization for Calls, Directions and Enquiries",
            "Local Search Positioning"
          ],
          cta: "OPTIMIZE LOCAL PRESENCE",
          tracking: "Hello! I am interested in the Professional Google Maps package. Could VELKS specialists help me?"
        },
        website: {
          title: "Business Website",
          price: "19€/month",
          eyebrow: "02. WEBSITES",
          priceLabel: "Price",
          badge: "SETUP 300€",
          features: [
            "Custom Mobile-First Website",
            "Sales-Focused Structure Tailored to Your Business",
            "Structured Enquiry and Quote Request Capture",
            "Collection of Contact Details, Requirements and Notes",
            "Requests Sent Directly to Your Business",
            "Technical SEO + Google and Bing Search Console",
            "Domain, DNS and SSL Integration",
            "Managed Infrastructure, Deployment and Maintenance"
          ],
          cta: "ACTIVATE BUSINESS WEBSITE",
          tracking: "Hello! I am interested in the Professional Website package. What is the first step to building my new sales machine?"
        },
        automacao: {
          title: "ORION AI Capture",
          price: "29€/month",
          eyebrow: "03. ORION AI",
          priceLabel: "Price",
          badge: "SETUP 297€",
          features: [
            "Proactive AI Widget Integrated into Your Website",
            "Text and Natural Voice Conversations with Azure AI",
            "Custom Identity, Avatar, Colors and Messages",
            "Knowledge Configured for Your Business",
            "Intelligent Qualification of Needs and Intent",
            "Name, Contact and Business Data Capture",
            "Structured Lead and Conversation Records",
            "Automated Email Report",
            "Conversation Summary and Transcript"
          ],
          cta: "ACTIVATE ORION AI",
          tracking: "Hello, VELKS Team. I reviewed the pricing table on the website and I am interested in moving forward with AI Automated Support. What is the next step to start the integration?"
        },
        ecommerce: {
          title: "Complete E-Commerce",
          price: "39€/month",
          eyebrow: "04. E-COMMERCE",
          priceLabel: "Price",
          badge: "SETUP 450€",
          features: [
            "Custom Mobile-First Online Store",
            "Product Catalogue and Sales Structure",
            "Secure Checkout and Payments with Stripe",
            "Shipping and Stock Configuration",
            "Structured Order Management",
            "Simplified Administration Panel",
            "Technical SEO for Products and Search",
            "Integrated Database and Operations",
            "Managed Hosting, SSL, Deployment and Maintenance"
          ],
          cta: "ACTIVATE E-COMMERCE",
          tracking: "Hello, VELKS Team. I reviewed the pricing table on the website and I am interested in moving forward with the Complete E-Commerce package. What is the next step to start the integration?"
        },
        custom: {
          title: "AI Receptionist",
          price: "99€/month",
          eyebrow: "05. AI RECEPTION",
          priceLabel: "Price",
          badge: "SETUP 499€",
          features: [
            "Intelligent 24/7 Call Handling",
            "Natural Voice and Context-Aware Conversations",
            "Knowledge Configured for Your Business",
            "Intelligent Workflows for Every Call Type",
            "Automatic Qualification of Customers and Requests",
            "Lead Capture During Calls",
            "Call Routing and Escalation",
            "Structured Summary of Every Conversation",
            "Automatic Notifications for Your Team",
            "Managed Operations, Monitoring and Maintenance"
          ],
          cta: "ACTIVATE AI RECEPTIONIST",
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
          q: "How long does implementation take?",
          a: "It depends on the solution and the materials available. Before we start, you receive a defined timeline for your project. Google Business tends to be quicker; websites, ORION, e-commerce and AI telephony require configuration and testing."
        },
        {
          q: "Do I own the domain, website and data?",
          a: "The domain, content and business data remain under the client’s control according to the service contracted. Before implementation, we clearly explain what belongs to the client and what depends on infrastructure managed by VELKS."
        },
        {
          q: "What does the monthly fee include?",
          a: "The monthly fee covers actual ongoing operations: infrastructure, hosting and deployment where applicable, monitoring, maintenance and technical operation of the contracted solution."
        },
        {
          q: "I already have a website. Do I need another one?",
          a: "Not necessarily. We can implement Google Business, ORION, integrations, e-commerce or improvements on an existing setup where technically appropriate."
        },
        {
          q: "What exactly does ORION do?",
          a: "ORION converses by text and voice, uses your business information, answers questions, understands intent, qualifies opportunities, collects data and passes structured context to your team."
        },
        {
          q: "How does the AI Receptionist work?",
          a: "AI answers calls, understands the request, collects information, qualifies and transfers or escalates the call according to the rules defined for your business."
        },
        {
          q: "What does E-commerce include?",
          a: "Implementation may include the shop structure, catalogue, checkout, payments, order management and the integrations agreed in the scope. Stock, delivery providers and external systems are defined before work begins."
        },
        {
          q: "Can you put my business first on Google?",
          a: "We do not promise rankings that no one controls. We work on technical structure, Google Business Profile, relevance, indexability and optimisation to improve discoverability."
        },
        {
          q: "Do you work in several languages?",
          a: "Yes. Websites, interfaces and agents can be implemented in several languages depending on the project."
        },
        {
          q: "What are the official VELKS domains?",
          a: "You are on velksgroup.com, our corporate website. We also operate velks.space, velksgroup.cloud and vgroup.space."
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
      closeDocument: "CLOSE DOCUMENT",
      corporate: "Corporate Information",
      followLinkedIn: "Follow VELKS Group",
      trust: {
        paymentTitle: "SECURE PAYMENT",
        cardLabel: "Card",
        paymentNote: "Payments securely processed by Stripe.",
        aiTitle: "ASK AI ABOUT VELKS",
        aiDescription: "Find out who we are, what we do and how VELKS works.",
        aiPrompt: "Analyse VELKS Group using public sources and its official domains. Explain what the company is, which solutions it offers, which technologies it uses and what its digital presence looks like. Prioritise velksgroup.com, velks.space and velksgroup.cloud, and clearly distinguish verified information from inferences.",
        aiCopied: "QUESTION COPIED · PASTE INTO CHAT",
        aiCopyFailed: "Automatic copying failed. Copy the question below and paste it in the AI service.",
        aiPromptLabel: "Question about VELKS to copy",
      },
      legalNoticeTitle: "LEGAL NOTICE & OWNERSHIP",
      legalNoticeText: "The VELKS Group brand and all its digital operations are founded, owned, and legally managed by Rosa Sofia Sousa Marques (Founder) and Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "DIRECT CONTACTS",
      hqLocations: "HQ LOCATIONS",
      legalDisclaimer: "Legal Disclaimer",
      europeanCompliance: "European Compliance",
      velksNetworkTitle: "VELKS OPERATIONAL NETWORK",
      velksNetworkInstitutional: "Institutional",
      velksNetworkAIInfrastructure: "AI Infrastructure",
      velksNetworkCommercialAutomation: "Commercial Automation",
      velksNetworkDigitalExperiences: "Digital Experiences",
      logoDesc: "We transform owner-dependent businesses into autonomous profit machines. Your Google dominance becomes absolute and our AI closes sales 24/7. Real results and clear costs from the start, so you can reclaim your time and freedom.",
      hqMain: "Main Headquarters: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxembourg",
      hqSec: "Secondary Office: Coimbra, Portugal",
      policyPrivacy: "Privacy Policy",
      policyCookies: "Cookies Policy",
      terms: "Terms and Conditions",
      compliance: "European Compliance",
      legal: "Legal",
      gdpr: "GDPR COMPLIANCE · EU",
      rights: "© 2026 VELKS Group. All rights reserved."
    },
  engineering: {
      label: "BEFORE DECIDING, SEE THE TYPE OF TECHNOLOGY WE DEVELOP FOR CLIENTS WHO DEMAND MORE THAN JUST A SIMPLE WEBSITE.",
      title1: "WE ARE NOT JUST WEB DESIGNERS.",
      title2: "WE ARE PRODUCT ENGINEERS.",
      desc: "While the market sells templates, we develop systems capable of operating applications, automations, intelligent agents, and digital infrastructures built for real growth.",
      metricsLabel: "[ OPERATIONAL METRICS ]",
      metrics: {
        automations: "AUTOMATIONS",
        aiProjects: "AI PROJECTS",
        activeInfra: "ACTIVE INFRASTRUCTURE"
      },
      cards: {
        sys01: {
          title: "AI AGENTS ARCHITECTURE",
          desc: "Multi-model orchestration, persistent contextual memory, natural language processing, and real-time voice integration for advanced conversational experiences.",
          tags: "LLM • STT • TTS • MEMORY"
        },
        sys02: {
          title: "REAL-TIME VISUAL ENGINEERING",
          desc: "High-performance interfaces built with advanced rendering, optimized animations, and digital experiences designed for maximum retention.",
          tags: "WEBGL • THREE.JS • GSAP • SCROLLYTELLING"
        },
        sys03: {
          title: "DISTRIBUTED REACTIVE INFRASTRUCTURE",
          desc: "Databases, real-time events, and modern architectures prepared to support live applications, intensive automation, and continuous growth.",
          tags: "SUPABASE • POSTGRESQL • REALTIME • EDGE"
        },
        sys04: {
          title: "SaaS & PAYMENTS ARCHITECTURE",
          desc: "Authentication, subscription, billing, and data protection systems prepared for international-scale digital products.",
          tags: "STRIPE • AUTH • GDPR • BILLING"
        }
      },
      bottomHero: {
        title1: "Most clients come to us looking for a website.",
        title2: "Many discover that what they really need is an infrastructure capable of accelerating their entire business.",
        cta: "DISCUSS TECHNICAL ARCHITECTURE",
        ctaTags: ["AI", "SAAS", "WEB APPS"],
        whatsappMsg: "Hello, VELKS Team.\nI would like to discuss a technical architecture for an AI, SaaS, or Web App project. Could you help me?"
      }
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
      pills: [
        "Google Maps",
        "Sites & boutiques",
        "IA 24/7"
      ],
      reinforcement: "Des coûts clairs dès le départ.",
      tracking: "Bonjour. J'ai vu votre infrastructure technologique sur le site et j'aimerais vérifier si mon entreprise est qualifiée pour mettre en œuvre votre système commercial. Pouvez-vous m'envoyer la grille tarifaire ?",
      badge: "★ ÊTRE TROUVÉ N’EST QUE LA PREMIÈRE ÉTAPE",
      title: "Votre entreprise doit apparaître avant vos concurrents.",
      subtitle: "Soyez visible sur Google, transformez les visites en demandes et répondez aux clients même lorsque votre équipe n’est pas disponible.",
      ctaPrimary: "VOIR LES SOLUTIONS ET TARIFS",
      ctaSecondary: "Voir Forfaits",
      trustPilot: "5,0/5 sur Google · 2 avis"
    },
    problem: {
      eyebrow: "LA RÉALITÉ, SANS DÉTOUR",
      title: "Là où votre entreprise perd des clients sans s’en rendre compte.",
      subtitle: "Le problème n’est pas toujours un manque de demande. Souvent, le client trouve une autre entreprise, quitte le site, reste sans réponse ou appelle quand personne ne décroche.",
      cards: {
        invisible: {
          title: "Vous n’apparaissez pas quand les clients cherchent",
          desc: "Lorsqu’une personne cherche exactement ce que vous vendez et que votre entreprise n’apparaît pas, une autre entreprise saisit cette opportunité."
        },
        oldSite: {
          title: "Le site ne transforme pas les visites en demandes",
          desc: "Le client arrive, mais ne comprend pas rapidement pourquoi choisir votre entreprise ni quelle est la prochaine étape."
        },
        contacts: {
          title: "Les messages restent sans réponse",
          desc: "Des demandes arrivent, des questions se posent et les opportunités s’essoufflent lorsque personne ne peut répondre à temps."
        },
        lostClients: {
          title: "Les appels restent sans réponse",
          desc: "Le client appelle le soir, le week-end ou lorsque l’équipe est occupée. Si personne ne décroche, il cherche souvent une autre solution."
        }
      }
    },
    solution: {
      eyebrow: "DE LA RECHERCHE AU CONTACT",
      title: "Quatre points. Un seul système.",
      subtitle: "Chaque solution répond à un point différent du parcours client. Ensemble, elles aident à transformer la demande en prises de contact sans laisser filer les opportunités.",
      cards: {
        gmaps: {
          label: "GOOGLE BUSINESS",
          title: "Soyez trouvé lorsque le client est déjà en recherche.",
          desc: "Nous organisons et optimisons la présence de votre entreprise sur Google pour améliorer ses informations, sa pertinence locale et sa visibilité dans les recherches."
        },
        website: {
          label: "SITES WEB & E-COMMERCE",
          title: "Transformez les visites en demandes et en ventes.",
          desc: "Des sites et boutiques en ligne rapides, clairs et conçus pour guider le visiteur vers l’étape suivante."
        },
        bot: {
          label: "ORION AI CAPTURE",
          title: "Répondez même lorsque personne n’est disponible.",
          desc: "ORION échange par texte et par voix, répond aux questions, comprend les besoins du client, recueille ses coordonnées et transmet le contexte à votre équipe."
        },
        automation: {
          label: "RÉCEPTIONNISTE IA",
          title: "Ne laissez pas les appels importants sans réponse.",
          desc: "L’IA répond, comprend la demande, recueille les informations, qualifie l’appel et le transfère lorsqu’une personne doit prendre le relais."
        }
      },
      closing: "Lorsque ces quatre points fonctionnent ensemble, moins d’opportunités se perdent entre recherche, visite, message et appel."
    },
    authority: {
      eyebrow: "PRÉSENCE INTERNATIONALE",
      title: "Ingénierie commerciale pour les marchés européens.",
      subtitle: "Nous créons des systèmes numériques pour les entreprises qui ont besoin d’être trouvées, d’inspirer confiance et de répondre aux clients sans dépendre de processus manuels.",
      metricsLabel: "CAPACITÉ OPÉRATIONNELLE",
      metrics: {
        clients: "LANGUES",
        delivered: "MARCHÉS EUROPÉENS",
        roi: "SOLUTIONS COMMERCIALES",
        support: "CAPACITÉ IA"
      },
      standard: [
        "Le client n’attend pas le lundi.",
        "Qu’il cherche votre entreprise, pose une question ou appelle le soir, le week-end ou pendant que vous êtes en famille, l’opportunité existe toujours.",
        "VELKS crée la structure pour répondre, recueillir et orienter cet intérêt sans vous obliger à rester constamment au téléphone.",
        "Votre entreprise continue de travailler même lorsque vous n’êtes pas là."
      ],
      luxembourg: {
        name: "Luxembourg",
        desc: "Structure d’entreprise et contexte transfrontalier."
      },
      portugal: {
        name: "Portugal",
        desc: "Développement, mise en œuvre et exploitation numérique."
      },
      spain: {
        name: "Espagne",
        desc: "Expansion commerciale et contexte ibérique."
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
          text: "Mon restaurant apparaissait à peine dans les recherches locales. Après l’optimisation de VELKS, nous avons commencé à recevoir davantage d’appels et de réservations via Google Maps. Aujourd’hui, des clients qui allaient chez la concurrence nous trouvent.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultante Financière",
          text: "Mon site n’inspirait pas confiance. VELKS a créé une présence bien plus professionnelle et les prospects ont commencé à arriver mieux préparés. Notre crédibilité s’est renforcée et les conversions ont augmenté.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Directeur Commercial",
          text: "Nous perdions des contacts en dehors des horaires d’ouverture. Avec l’automatisation de VELKS, les messages reçoivent une réponse et les opportunités sont enregistrées. Aujourd’hui, nous captons la demande 24/7 sans agrandir l’équipe.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Entrepreneuse Digitale",
          text: "Gérer les ventes manuellement prenait trop de temps. VELKS a automatisé le fonctionnement de notre boutique en ligne. Nous avons pu vendre davantage sans alourdir notre charge de travail.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "PDG",
          text: "Nous savions qu’il y avait du potentiel, mais il manquait une direction. L’audit de VELKS a identifié les blocages et défini des priorités claires. Aujourd’hui, nous prenons nos décisions avec bien plus de confiance.",
          rating: 5
        }
      ]
    },
    pricing: {
      eyebrow: "CHOISISSEZ CE DONT VOTRE ENTREPRISE A BESOIN",
      title: "Commencez maintenant, sans demander de devis au préalable.",
      subtitle: "Consultez les prix, choisissez ce dont votre entreprise a besoin et activez-le avant que le prochain client ne choisisse un concurrent.",
      singlePayment: "TARIFS CLAIRS · EXPLOITATION GÉRÉE",
      allPlansInclude: "Toutes nos formules incluent :",
      allPlansIncludeDesc: "Support premium, conformité totale RGPD UE, design mobile-first et optimisation pour une vitesse de chargement maximale.",
      plans: {
        gmaps: {
          title: "Google Maps Professionnel",
          price: "90€",
          eyebrow: "01. GOOGLE BUSINESS",
          priceLabel: "Prix",
          badge: "PAIEMENT UNIQUE",
          features: [
            "Configuration et Revendication Complètes de la Fiche",
            "SEO Local et Catégories Stratégiques",
            "Description, Services et Produits Optimisés",
            "Optimisation des Photos et des Informations Commerciales",
            "Dispositif Direct de Collecte des Avis",
            "Optimisation des Appels, Itinéraires et Prises de Contact",
            "Positionnement dans les Recherches Locales"
          ],
          cta: "OPTIMISER MA PRÉSENCE LOCALE",
          tracking: "Bonjour ! Je suis intéressé par le forfait Google Maps Professionnel. Les spécialistes de VELKS pourraient-ils m'aider ?"
        },
        website: {
          title: "Site Web Commercial",
          price: "19€/mois",
          eyebrow: "02. WEBSITES",
          priceLabel: "Prix",
          badge: "MISE EN PLACE 300€",
          features: [
            "Site Web sur Mesure, Pensé pour le Mobile",
            "Structure Commerciale Adaptée à Votre Activité",
            "Collecte Structurée des Demandes et Devis",
            "Recueil des Coordonnées, Besoins et Commentaires",
            "Envoi Direct des Demandes à Votre Entreprise",
            "SEO Technique + Google et Bing Search Console",
            "Intégration du Domaine, DNS et SSL",
            "Infrastructure, Déploiement et Maintenance Gérés"
          ],
          cta: "ACTIVER MON SITE COMMERCIAL",
          tracking: "Bonjour ! Je suis intéressé par le forfait Site Web Professionnel. Quelle est la première étape pour construire ma nouvelle machine de vente ?"
        },
        automacao: {
          title: "ORION AI Capture",
          price: "29€/mois",
          eyebrow: "03. ORION AI",
          priceLabel: "Prix",
          badge: "MISE EN PLACE 297€",
          features: [
            "Widget IA Proactif Intégré à Votre Site Web",
            "Conversations par Texte et Voix Naturelle avec Azure AI",
            "Identité, Avatar, Couleurs et Messages Personnalisés",
            "Connaissances Configurées pour Votre Activité",
            "Qualification Intelligente des Besoins et Intentions",
            "Collecte du Nom, des Coordonnées et des Données Commerciales",
            "Enregistrement Structuré des Prospects et Conversations",
            "Rapport Automatique par Email",
            "Résumé et Transcription de la Conversation"
          ],
          cta: "ACTIVER ORION AI",
          tracking: "Bonjour, l'équipe VELKS. J'ai analysé la grille tarifaire sur le site et je suis intéressé pour avancer avec l'Assistance Automatique par IA. Quelle est la prochaine étape pour commencer l'intégration ?"
        },
        ecommerce: {
          title: "E-Commerce Complet",
          price: "39€/mois",
          eyebrow: "04. E-COMMERCE",
          priceLabel: "Prix",
          badge: "MISE EN PLACE 450€",
          features: [
            "Boutique en Ligne sur Mesure, Pensée pour le Mobile",
            "Catalogue Produits et Structure Commerciale",
            "Parcours de Commande et Paiements Sécurisés avec Stripe",
            "Configuration des Livraisons et des Stocks",
            "Gestion Structurée des Commandes",
            "Interface d’Administration Simplifiée",
            "SEO Technique pour les Produits et la Recherche",
            "Base de Données et Exploitation Intégrées",
            "Hébergement, SSL, Déploiement et Maintenance Gérés"
          ],
          cta: "ACTIVER MON E-COMMERCE",
          tracking: "Bonjour, l'équipe VELKS. J'ai analysé la grille tarifaire sur le site et je suis intéressé pour avancer avec le forfait E-Commerce Complet. Quelle est la prochaine étape pour commencer l'intégration ?"
        },
        custom: {
          title: "Réceptionniste IA",
          price: "99€/mois",
          eyebrow: "05. AI RECEPTION",
          priceLabel: "Prix",
          badge: "MISE EN PLACE 499€",
          features: [
            "Accueil Téléphonique Intelligent 24h/24 et 7j/7",
            "Voix Naturelle et Conversations Contextuelles",
            "Connaissances Configurées pour Votre Activité",
            "Parcours Intelligents pour Chaque Type d’Appel",
            "Qualification Automatique des Clients et Demandes",
            "Collecte de Prospects Pendant les Appels",
            "Transfert des Appels et Escalade vers Votre Équipe",
            "Résumé Structuré de Chaque Conversation",
            "Notifications Automatiques pour Votre Équipe",
            "Exploitation, Supervision et Maintenance Gérées"
          ],
          cta: "ACTIVER MON RÉCEPTIONNISTE IA",
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
          q: "Combien de temps prend la mise en œuvre ?",
          a: "Cela dépend de la solution et des éléments disponibles. Avant de commencer, vous recevez un délai défini pour votre projet. Google Business est généralement plus rapide ; les sites, ORION, l’e-commerce et la téléphonie IA nécessitent une configuration et des tests."
        },
        {
          q: "Le domaine, le site et les données m’appartiennent-ils ?",
          a: "Le domaine, les contenus et les données de l’entreprise restent sous le contrôle du client selon le service souscrit. Avant la mise en œuvre, nous expliquons clairement ce qui appartient au client et ce qui dépend de l’infrastructure gérée par VELKS."
        },
        {
          q: "Que comprend la mensualité ?",
          a: "La mensualité correspond à une exploitation continue réelle : infrastructure, hébergement et déploiement le cas échéant, surveillance, maintenance et fonctionnement technique de la solution souscrite."
        },
        {
          q: "J’ai déjà un site. Dois-je en créer un autre ?",
          a: "Pas nécessairement. Nous pouvons mettre en place Google Business, ORION, des intégrations, de l’e-commerce ou des améliorations sur une structure existante lorsque cela est techniquement adapté."
        },
        {
          q: "Que fait exactement ORION ?",
          a: "ORION échange par texte et par voix, utilise les informations de votre entreprise, répond aux questions, comprend les intentions, qualifie les opportunités, recueille les données et transmet un contexte structuré à l’équipe."
        },
        {
          q: "Comment fonctionne la Réceptionniste IA ?",
          a: "L’IA répond aux appels, comprend la demande, recueille les informations, qualifie l’appel et le transfère ou le fait remonter selon les règles définies pour l’entreprise."
        },
        {
          q: "Que comprend l’E-commerce ?",
          a: "La mise en œuvre peut inclure la structure de la boutique, le catalogue, le checkout, les paiements, la gestion des commandes et les intégrations prévues dans le périmètre convenu. Les stocks, transporteurs et systèmes externes sont définis avant le démarrage."
        },
        {
          q: "Pouvez-vous placer mon entreprise en première position sur Google ?",
          a: "Nous ne promettons pas des positions que personne ne contrôle. Nous travaillons sur la structure technique, Google Business Profile, la pertinence, l’indexabilité et l’optimisation pour faciliter la découverte de votre entreprise."
        },
        {
          q: "Travaillez-vous dans plusieurs langues ?",
          a: "Oui. Les sites, interfaces et agents peuvent être déployés dans plusieurs langues selon le projet."
        },
        {
          q: "Quels sont les domaines officiels de VELKS ?",
          a: "Vous êtes sur velksgroup.com, le site institutionnel. Nous exploitons également velks.space, velksgroup.cloud et vgroup.space."
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
      closeDocument: "FERMER LE DOCUMENT",
      corporate: "Informations sur l’Entreprise",
      followLinkedIn: "Suivre VELKS Group",
      trust: {
        paymentTitle: "PAIEMENT SÉCURISÉ",
        cardLabel: "Carte",
        paymentNote: "Paiements traités de manière sécurisée par Stripe.",
        aiTitle: "INTERROGEZ L’IA SUR VELKS",
        aiDescription: "Découvrez qui nous sommes, ce que nous faisons et comment VELKS travaille.",
        aiPrompt: "Analyse VELKS Group à partir de sources publiques et de ses domaines officiels. Explique ce qu’est l’entreprise, les solutions qu’elle propose, les technologies qu’elle utilise et sa présence numérique. Privilégie velksgroup.com, velks.space et velksgroup.cloud, et distingue clairement les informations vérifiées des déductions.",
        aiCopied: "QUESTION COPIÉE · COLLEZ-LA DANS LE CHAT",
        aiCopyFailed: "La copie automatique a échoué. Copiez la question ci-dessous et collez-la dans l’IA.",
        aiPromptLabel: "Question sur VELKS à copier",
      },
      legalNoticeTitle: "AVIS LÉGAL & PROPRIÉTÉ",
      legalNoticeText: "La marque VELKS Group et toutes ses opérations numériques sont fondées, détenues et gérées légalement par Rosa Sofia Sousa Marques (Founder) et Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTACTS DIRECTS",
      hqLocations: "SIÈGES SOCIAUX",
      legalDisclaimer: "Mentions Légales",
      europeanCompliance: "Conformité Européenne",
      velksNetworkTitle: "RÉSEAU OPÉRATIONNEL VELKS",
      velksNetworkInstitutional: "Institutionnel",
      velksNetworkAIInfrastructure: "Infrastructure IA",
      velksNetworkCommercialAutomation: "Automatisation Commerciale",
      velksNetworkDigitalExperiences: "Expériences Numériques",
      logoDesc: "Nous transformons les entreprises dépendantes de leur propriétaire en machines à profit autonomes. Votre domination sur Google devient absolue et notre IA conclut des ventes 24/7. Des résultats réels et des coûts clairs dès le départ, pour que vous retrouviez votre temps et votre liberté.",
      hqMain: "Siège Social : 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxembourg",
      hqSec: "Bureau Secondaire : Coimbra, Portugal",
      policyPrivacy: "Politique de Confidentialité",
      policyCookies: "Politique de Cookies",
      terms: "Conditions Générales",
      compliance: "Conformité Européenne",
      legal: "Informations Juridiques",
      gdpr: "CONFORMITÉ RGPD · UE",
      rights: "© 2026 VELKS Group. Tous droits réservés."
    },
  engineering: {
      label: "AVANT DE DÉCIDER, DÉCOUVREZ LE TYPE DE TECHNOLOGIE QUE NOUS DÉVELOPPONS POUR LES CLIENTS QUI EXIGENT PLUS QU'UN SIMPLE SITE WEB.",
      title1: "NOUS NE SOMMES PAS SEULEMENT DES WEB DESIGNERS.",
      title2: "NOUS SOMMES DES INGÉNIEURS PRODUIT.",
      desc: "Pendant que le marché vend des modèles, nous développons des systèmes capables de faire fonctionner des applications, des automatisations, des agents intelligents et des infrastructures numériques conçues pour une croissance réelle.",
      metricsLabel: "[ MÉTRIQUES OPÉRATIONNELLES ]",
      metrics: {
        automations: "AUTOMATISATIONS",
        aiProjects: "PROJETS IA",
        activeInfra: "INFRASTRUCTURE ACTIVE"
      },
      cards: {
        sys01: {
          title: "ARCHITECTURE D'AGENTS IA",
          desc: "Orchestration multi-modèles, mémoire contextuelle persistente, traitement du langage naturel et intégration vocale en temps réel pour des expériences conversationnelles avancées.",
          tags: "LLM • STT • TTS • MEMORY"
        },
        sys02: {
          title: "INGÉNIERIE VISUELLE EN TEMPS RÉEL",
          desc: "Interfaces hautes performances développées avec un rendu avancé, des animations optimisées et des expériences numériques conçues pour une rétention maximale.",
          tags: "WEBGL • THREE.JS • GSAP • SCROLLYTELLING"
        },
        sys03: {
          title: "INFRASTRUCTURE RÉACTIVE DISTRIBUÉE",
          desc: "Bases de données, événements en temps réel et architectures modernes préparées pour prendre en charge des applications en direct, une automatisation intensive et une croissance continue.",
          tags: "SUPABASE • POSTGRESQL • REALTIME • EDGE"
        },
        sys04: {
          title: "ARCHITECTURE SaaS & PAIEMENTS",
          desc: "Systèmes d'authentification, d'abonnement, de facturation et de protection des données préparés pour des produits numériques à l'échelle internationale.",
          tags: "STRIPE • AUTH • RGPD • BILLING"
        }
      },
      bottomHero: {
        title1: "La plupart des clients viennent à nous à la recherche d'un site web.",
        title2: "Beaucoup découvrent que ce dont ils ont réellement besoin est d'une infrastructure capable d'accélérer toute leur entreprise.",
        cta: "DISCUTER D'ARCHITECTURE TECHNIQUE",
        ctaTags: ["IA", "SAAS", "WEB APPS"],
        whatsappMsg: "Bonjour l'équipe VELKS.\nJe souhaite discuter d'une architecture technique pour un projet IA, SaaS ou Web App. Pourriez-vous m'aider ?"
      }
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
      pills: [
        "Google Maps",
        "Websites & Shops",
        "KI 24/7"
      ],
      reinforcement: "Klare Kosten von Anfang an.",
      tracking: "Hallo. Ich habe Ihre technologische Infrastruktur auf der Website gesehen und möchte prüfen, ob sich mein Unternehmen für die Implementierung Ihres kommerziellen Systems qualifiziert. Können Sie mir die Preistabelle zusenden?",
      badge: "★ GEFUNDEN ZU WERDEN IST NUR DER ERSTE SCHRITT",
      title: "Ihr Unternehmen muss vor Ihren Wettbewerbern sichtbar sein.",
      subtitle: "Werden Sie bei Google gefunden, machen Sie aus Besuchen Anfragen und antworten Sie Kunden auch dann, wenn Ihr Team nicht verfügbar ist.",
      ctaPrimary: "LÖSUNGEN & PREISE ANSEHEN",
      ctaSecondary: "Pakete ansehen",
      trustPilot: "5,0/5 bei Google · 2 Bewertungen"
    },
    problem: {
      eyebrow: "KLARTEXT",
      title: "Wo Ihr Unternehmen Kunden verliert, ohne es zu merken.",
      subtitle: "Das Problem ist nicht immer fehlende Nachfrage. Oft findet der Kunde ein anderes Unternehmen, verlässt die Website, erhält keine Antwort oder ruft an, wenn niemand erreichbar ist.",
      cards: {
        invisible: {
          title: "Sie erscheinen nicht, wenn Kunden suchen",
          desc: "Wenn jemand genau das sucht, was Sie anbieten, und Ihr Unternehmen nicht erscheint, erhält ein anderes Unternehmen diese Chance."
        },
        oldSite: {
          title: "Die Website macht aus Besuchen keine Anfragen",
          desc: "Der Kunde besucht Ihre Seite, erkennt aber nicht schnell, warum er Ihr Unternehmen wählen sollte oder was der nächste Schritt ist."
        },
        contacts: {
          title: "Nachrichten bleiben unbeantwortet",
          desc: "Anfragen gehen ein, Fragen entstehen und Chancen verlieren an Wirkung, wenn niemand rechtzeitig antworten kann."
        },
        lostClients: {
          title: "Anrufe bleiben unbeantwortet",
          desc: "Der Kunde ruft abends, am Wochenende oder bei ausgelastetem Team an. Wenn niemand abnimmt, sucht er oft nach einer anderen Möglichkeit."
        }
      }
    },
    solution: {
      eyebrow: "VON DER SUCHE ZUM KONTAKT",
      title: "Vier Kontaktpunkte. Ein System.",
      subtitle: "Jede Lösung greift an einem anderen Punkt des Kundenwegs ein. Gemeinsam helfen sie, aus Nachfrage Anfragen zu machen, ohne unterwegs Chancen zu verlieren.",
      cards: {
        gmaps: {
          label: "GOOGLE BUSINESS",
          title: "Werden Sie gefunden, wenn der Kunde bereits sucht.",
          desc: "Wir strukturieren und optimieren die Google-Präsenz Ihres Unternehmens, um Informationen, lokale Relevanz und Auffindbarkeit zu verbessern."
        },
        website: {
          label: "WEBSITES & E-COMMERCE",
          title: "Machen Sie aus Besuchen Anfragen und Verkäufe.",
          desc: "Schnelle, klare Websites und Onlineshops, die Besucher zum nächsten Schritt führen."
        },
        bot: {
          label: "ORION AI CAPTURE",
          title: "Antworten Sie auch dann, wenn niemand verfügbar ist.",
          desc: "ORION kommuniziert per Text und Sprache, beantwortet Fragen, versteht Kundenbedürfnisse, erfasst Kontaktdaten und übergibt Ihrem Team den Kontext."
        },
        automation: {
          label: "KI-EMPFANG",
          title: "Lassen Sie wichtige Anrufe nicht unbeantwortet.",
          desc: "Die KI nimmt Anrufe an, versteht das Anliegen, erfasst Informationen, qualifiziert den Anruf und leitet ihn weiter, wenn ein persönliches Gespräch erforderlich ist."
        }
      },
      closing: "Wenn diese vier Kontaktpunkte zusammenarbeiten, gehen zwischen Suche, Besuch, Nachricht und Anruf weniger Chancen verloren."
    },
    authority: {
      eyebrow: "INTERNATIONALE PRÄSENZ",
      title: "Engineering für den Vertrieb in europäischen Märkten.",
      subtitle: "Wir entwickeln digitale Systeme für Unternehmen, die gefunden werden, Vertrauen schaffen und Kunden antworten müssen, ohne von manuellen Abläufen abhängig zu sein.",
      metricsLabel: "BETRIEBLICHE KAPAZITÄT",
      metrics: {
        clients: "SPRACHEN",
        delivered: "EUROPÄISCHE MÄRKTE",
        roi: "KOMMERZIELLE LÖSUNGEN",
        support: "KI-KAPAZITÄT"
      },
      standard: [
        "Der Kunde wartet nicht bis Montag.",
        "Wenn er nach Ihrem Unternehmen sucht, eine Frage stellt oder abends, am Wochenende oder während Ihrer Familienzeit anruft, besteht die Chance weiterhin.",
        "VELKS schafft die Struktur, um auf dieses Interesse zu reagieren, es zu erfassen und weiterzuleiten, ohne dass Sie ständig am Telefon sein müssen.",
        "Ihr Unternehmen arbeitet weiter, auch wenn Sie nicht da sind."
      ],
      luxembourg: {
        name: "Luxemburg",
        desc: "Unternehmensstruktur und grenzüberschreitender Kontext."
      },
      portugal: {
        name: "Portugal",
        desc: "Entwicklung, Implementierung und digitaler Betrieb."
      },
      spain: {
        name: "Spanien",
        desc: "Geschäftliche Expansion und iberischer Marktkontext."
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
          text: "Mein Restaurant erschien kaum in lokalen Suchergebnissen. Nach der Optimierung durch VELKS erhielten wir mehr Anrufe und Reservierungen über Google Maps. Heute finden uns Kunden, die früher bei der Konkurrenz landeten.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Finanzberaterin",
          text: "Meine Website vermittelte kein Vertrauen. VELKS schuf einen deutlich professionelleren Auftritt, und Interessenten kamen besser vorbereitet auf uns zu. Die Glaubwürdigkeit stieg und die Konversionen nahmen zu.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Verkaufsleiter",
          text: "Außerhalb der Öffnungszeiten verloren wir Kontakte. Mit der Automatisierung von VELKS werden Nachrichten beantwortet und Chancen erfasst. Heute können wir Nachfrage rund um die Uhr aufnehmen, ohne das Team zu vergrößern.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Digitale Unternehmerin",
          text: "Die manuelle Verkaufsverwaltung kostete zu viel Zeit. VELKS automatisierte den Betrieb unseres Onlineshops. Wir konnten mehr verkaufen, ohne unseren Arbeitsaufwand zu erhöhen.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "Geschäftsführer",
          text: "Wir wussten, dass Potenzial vorhanden war, aber die Richtung fehlte. Die VELKS-Analyse zeigte Engpässe auf und setzte klare Prioritäten. Heute treffen wir Entscheidungen mit deutlich mehr Vertrauen.",
          rating: 5
        }
      ]
    },
    pricing: {
      eyebrow: "WÄHLEN SIE, WAS IHR UNTERNEHMEN BRAUCHT",
      title: "Starten Sie jetzt, ohne zuerst ein Angebot anzufordern.",
      subtitle: "Sehen Sie die Preise, wählen Sie, was Ihr Unternehmen braucht, und aktivieren Sie es, bevor sich der nächste Kunde für einen Wettbewerber entscheidet.",
      singlePayment: "KLARE PREISE · BETREUTER BETRIEB",
      allPlansInclude: "Alle Pakete beinhalten:",
      allPlansIncludeDesc: "Premium-Support, vollständige EU-DSGVO-Konformität, Mobile-First-Design und Optimierung für maximale Ladegeschwindigkeiten.",
      plans: {
        gmaps: {
          title: "Google Maps Professional",
          price: "90€",
          eyebrow: "01. GOOGLE BUSINESS",
          priceLabel: "Preis",
          badge: "EINMALZAHLUNG",
          features: [
            "Vollständige Einrichtung und Inhaberschaftsbestätigung",
            "Lokale SEO und Strategische Kategorien",
            "Optimierte Beschreibung, Leistungen und Produkte",
            "Optimierung von Fotos und Unternehmensdaten",
            "Direktes System zum Sammeln von Bewertungen",
            "Optimierung für Anrufe, Routen und Kontaktanfragen",
            "Positionierung in der Lokalen Suche"
          ],
          cta: "LOKALE PRÄSENZ OPTIMIEREN",
          tracking: "Hallo! Ich interessiere mich für das Google Maps Professionell-Paket. Könnten mir die VELKS-Spezialisten helfen?"
        },
        website: {
          title: "Business-Website",
          price: "19€/Monat",
          eyebrow: "02. WEBSITES",
          priceLabel: "Preis",
          badge: "EINRICHTUNG 300€",
          features: [
            "Individuelle Website mit Mobile-First-Ansatz",
            "Vertriebsstruktur Passend zu Ihrem Unternehmen",
            "Strukturierte Erfassung von Anfragen und Angebotswünschen",
            "Erfassung von Kontaktdaten, Bedarf und Anmerkungen",
            "Direkte Übermittlung der Anfrage an Ihr Unternehmen",
            "Technische SEO + Google und Bing Search Console",
            "Integration von Domain, DNS und SSL",
            "Verwaltete Infrastruktur, Bereitstellung und Wartung"
          ],
          cta: "BUSINESS-WEBSITE AKTIVIEREN",
          tracking: "Hallo! Ich interessiere mich für das Website Professionell-Paket. Was ist der erste Schritt zum Aufbau meiner neuen Verkaufsmaschine?"
        },
        automacao: {
          title: "ORION AI Capture",
          price: "29€/Monat",
          eyebrow: "03. ORION AI",
          priceLabel: "Preis",
          badge: "EINRICHTUNG 297€",
          features: [
            "Proaktives KI-Widget für Ihre Website",
            "Textgespräche und Natürliche Stimme mit Azure AI",
            "Individuelle Identität, Avatar, Farben und Nachrichten",
            "Auf Ihr Unternehmen Abgestimmte Wissensbasis",
            "Intelligente Qualifizierung von Bedarf und Absicht",
            "Erfassung von Namen, Kontaktdaten und Geschäftsinformationen",
            "Strukturierte Erfassung von Leads und Gesprächen",
            "Automatischer Bericht per E-Mail",
            "Gesprächszusammenfassung und Transkript"
          ],
          cta: "ORION AI AKTIVIEREN",
          tracking: "Hallo VELKS-Team. Ich habe die Preistabelle auf der Website analysiert und bin daran interessiert, mit dem KI-Automatisierten Support fortzufahren. Was ist der nächste Schritt, um die Integration zu starten?"
        },
        ecommerce: {
          title: "E-Commerce Komplett",
          price: "39€/Monat",
          eyebrow: "04. E-COMMERCE",
          priceLabel: "Preis",
          badge: "EINRICHTUNG 450€",
          features: [
            "Individueller Onlineshop mit Mobile-First-Ansatz",
            "Produktkatalog und Vertriebsstruktur",
            "Sicherer Checkout und Zahlungen mit Stripe",
            "Einrichtung von Versand und Lagerbestand",
            "Strukturierte Bestellverwaltung",
            "Einfaches Administrationspanel",
            "Technische SEO für Produkte und Suche",
            "Integrierte Datenbank und Betriebsabläufe",
            "Verwaltetes Hosting, SSL, Bereitstellung und Wartung"
          ],
          cta: "E-COMMERCE AKTIVIEREN",
          tracking: "Hallo VELKS-Team. Ich habe die Preistabelle auf der Website analysiert und bin daran interessiert, mit dem kompletten E-Commerce-Paket fortzufahren. Was ist der nächste Schritt, um die Integration zu starten?"
        },
        custom: {
          title: "KI-Rezeptionist",
          price: "99€/Monat",
          eyebrow: "05. AI RECEPTION",
          priceLabel: "Preis",
          badge: "EINRICHTUNG 499€",
          features: [
            "Intelligente Anrufannahme Rund um die Uhr",
            "Natürliche Stimme und Kontextbezogene Gespräche",
            "Auf Ihr Unternehmen Abgestimmte Wissensbasis",
            "Intelligente Abläufe für Jeden Anruftyp",
            "Automatische Qualifizierung von Kunden und Anfragen",
            "Lead-Erfassung Während des Anrufs",
            "Anrufweiterleitung und Eskalation",
            "Strukturierte Zusammenfassung Jedes Gesprächs",
            "Automatische Benachrichtigungen für Ihr Team",
            "Verwalteter Betrieb, Überwachung und Wartung"
          ],
          cta: "KI-REZEPTIONIST AKTIVIEREN",
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
          q: "Wie lange dauert die Implementierung?",
          a: "Das hängt von der Lösung und den verfügbaren Materialien ab. Vor Beginn erhalten Sie einen festgelegten Zeitplan für Ihr Projekt. Google Business geht meist schneller; Websites, ORION, E-Commerce und KI-Telefonie benötigen Konfiguration und Tests."
        },
        {
          q: "Gehören Domain, Website und Daten mir?",
          a: "Domain, Inhalte und Unternehmensdaten bleiben gemäß der beauftragten Dienstleistung unter der Kontrolle des Kunden. Vor der Implementierung erklären wir klar, was dem Kunden gehört und was von der durch VELKS betreuten Infrastruktur abhängt."
        },
        {
          q: "Was ist in der monatlichen Gebühr enthalten?",
          a: "Die monatliche Gebühr deckt den tatsächlichen laufenden Betrieb ab: Infrastruktur, gegebenenfalls Hosting und Deployment, Überwachung, Wartung und technischen Betrieb der beauftragten Lösung."
        },
        {
          q: "Ich habe bereits eine Website. Brauche ich eine neue?",
          a: "Nicht unbedingt. Wir können Google Business, ORION, Integrationen, E-Commerce oder Verbesserungen auf einer bestehenden Struktur umsetzen, sofern dies technisch sinnvoll ist."
        },
        {
          q: "Was genau macht ORION?",
          a: "ORION kommuniziert per Text und Sprache, nutzt Ihre Unternehmensinformationen, beantwortet Fragen, erkennt Absichten, qualifiziert Chancen, erfasst Daten und übergibt dem Team strukturierten Kontext."
        },
        {
          q: "Wie funktioniert der KI-Empfang?",
          a: "Die KI nimmt Anrufe an, versteht das Anliegen, erfasst Informationen, qualifiziert den Anruf und leitet ihn gemäß den für das Unternehmen festgelegten Regeln weiter oder eskaliert ihn."
        },
        {
          q: "Was ist im E-Commerce enthalten?",
          a: "Die Implementierung kann Shopstruktur, Katalog, Checkout, Zahlungen, Bestellverwaltung und die vereinbarten Integrationen umfassen. Lagerbestand, Versanddienstleister und externe Systeme werden vor Beginn festgelegt."
        },
        {
          q: "Können Sie mein Unternehmen bei Google auf Platz eins bringen?",
          a: "Wir versprechen keine Positionen, die niemand kontrollieren kann. Wir arbeiten an technischer Struktur, Google Business Profile, Relevanz, Indexierbarkeit und Optimierung, um die Auffindbarkeit zu verbessern."
        },
        {
          q: "Arbeiten Sie in mehreren Sprachen?",
          a: "Ja. Websites, Benutzeroberflächen und Agenten können je nach Projekt in mehreren Sprachen umgesetzt werden."
        },
        {
          q: "Welche Domains gehören offiziell zu VELKS?",
          a: "Sie befinden sich auf velksgroup.com, der Unternehmenswebsite. Wir betreiben außerdem velks.space, velksgroup.cloud und vgroup.space."
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
      closeDocument: "DOKUMENT SCHLIESSEN",
      corporate: "Unternehmensinformationen",
      followLinkedIn: "VELKS Group folgen",
      trust: {
        paymentTitle: "SICHERE ZAHLUNG",
        cardLabel: "Karte",
        paymentNote: "Zahlungen werden sicher über Stripe abgewickelt.",
        aiTitle: "FRAGEN SIE DIE KI NACH VELKS",
        aiDescription: "Erfahren Sie, wer wir sind, was wir tun und wie VELKS arbeitet.",
        aiPrompt: "Analysiere VELKS Group anhand öffentlicher Quellen und der offiziellen Domains. Erkläre, was das Unternehmen ist, welche Lösungen es anbietet, welche Technologien es nutzt und wie seine digitale Präsenz aussieht. Bevorzuge velksgroup.com, velks.space und velksgroup.cloud und unterscheide klar zwischen überprüften Informationen und Schlussfolgerungen.",
        aiCopied: "FRAGE KOPIERT · IM CHAT EINFÜGEN",
        aiCopyFailed: "Automatisches Kopieren fehlgeschlagen. Kopieren Sie die Frage unten und fügen Sie sie in die KI ein.",
        aiPromptLabel: "Frage über VELKS zum Kopieren",
      },
      legalNoticeTitle: "RECHTLICHER HINWEIS & EIGENTUM",
      legalNoticeText: "Die Marke VELKS Group und all ihre digitalen Aktivitäten werden legal von Rosa Sofia Sousa Marques (Founder) und Lucca Farias Gagliardi (Co-Founder) gegründet, besessen und verwaltet.",
      directContacts: "DIREKTE KONTAKTE",
      hqLocations: "HAUPTSITZE",
      legalDisclaimer: "Rechtliche Hinweise",
      europeanCompliance: "Europäische Konformität",
      velksNetworkTitle: "VELKS OPERATIVES NETZWERK",
      velksNetworkInstitutional: "Institutionell",
      velksNetworkAIInfrastructure: "KI-Infrastruktur",
      velksNetworkCommercialAutomation: "Kommerzielle Automatisierung",
      velksNetworkDigitalExperiences: "Digitale Erlebnisse",
      logoDesc: "Wir verwandeln inhaberabhängige Unternehmen in autonome Gewinnmaschinen. Ihre Google-Dominanz wird absolut und unsere KI schließt Verkäufe rund um die Uhr ab. Echte Ergebnisse und klare Kosten von Anfang an, damit Sie Ihre Zeit und Freiheit zurückgewinnen.",
      hqMain: "Hauptsitz: 57, Avenue de La Gare, L-1611 Luxemburg Gare, Luxemburg",
      hqSec: "Zweiter Standort: Coimbra, Portugal",
      policyPrivacy: "Datenschutzerklärung",
      policyCookies: "Cookie-Richtlinie",
      terms: "Allgemeine Geschäftsbedingungen",
      compliance: "Europäische Compliance",
      legal: "Rechtliche Informationen",
      gdpr: "DSGVO-KONFORMITÄT · EU",
      rights: "© 2026 VELKS Group. Alle Rechte vorbehalten."
    },
  engineering: {
      label: "BEVOR SIE SICH ENTSCHEIDEN, SEHEN SIE SICH DIE ART DER TECHNOLOGIE AN, DIE WIR FÜR KUNDEN ENTWICKELN, DIE MEHR ALS NUR EINE EINFACHE WEBSITE VERLANGEN.",
      title1: "WIR SIND NICHT NUR WEBDESIGNER.",
      title2: "WIR SIND PRODUKTINGENIEURE.",
      desc: "Während der Markt Vorlagen verkauft, entwickeln wir Systeme, die in der Lage sind, Anwendungen, Automatisierungen, intelligente Agenten und digitale Infrastrukturen zu betreiben, die für echtes Wachstum ausgelegt sind.",
      metricsLabel: "[ OPERATIVE METRIKEN ]",
      metrics: {
        automations: "AUTOMATISIERUNGEN",
        aiProjects: "KI-PROJEKTE",
        activeInfra: "AKTIVE INFRASTRUKTUR"
      },
      cards: {
        sys01: {
          title: "KI-AGENTEN ARCHITEKTUR",
          desc: "Multimodell-Orchestrierung, persistenter Kontextspeicher, Verarbeitung natürlicher Sprache und Echtzeit-Sprachintegration für fortgeschrittene konversationelle Erlebnisse.",
          tags: "LLM • STT • TTS • MEMORY"
        },
        sys02: {
          title: "VISUELLE ECHTZEIT-ENTWICKLUNG",
          desc: "Hochleistungsschnittstellen, entwickelt mit fortschrittlichem Rendering, optimierten Animationen und digitalen Erlebnissen, die für maximale Kundenbindung konzipiert sind.",
          tags: "WEBGL • THREE.JS • GSAP • SCROLLYTELLING"
        },
        sys03: {
          title: "VERTEILTE REAKTIVE INFRASTRUKTUR",
          desc: "Datenbanken, Echtzeit-Events und moderne Architekturen, die darauf vorbereitet sind, Live-Anwendungen, intensive Automatisierung und kontinuierliches Wachstum zu unterstützen.",
          tags: "SUPABASE • POSTGRESQL • REALTIME • EDGE"
        },
        sys04: {
          title: "SaaS & ZAHLUNGEN ARCHITEKTUR",
          desc: "Authentifizierungs-, Abonnement-, Abrechnungs- und Datenschutzsysteme, die für digitale Produkte im internationalen Maßstab vorbereitet sind.",
          tags: "STRIPE • AUTH • DSGVO • BILLING"
        }
      },
      bottomHero: {
        title1: "Die meisten Kunden kommen auf der Suche nach einer Website zu uns.",
        title2: "Viele stellen fest, dass das, was sie wirklich brauchen, eine Infrastruktur ist, die ihr gesamtes Geschäft beschleunigen kann.",
        cta: "TECHNISCHE ARCHITEKTUR BESPRECHEN",
        ctaTags: ["KI", "SAAS", "WEB APPS"],
        whatsappMsg: "Hallo, VELKS Team.\nIch würde gerne eine technische Architektur für ein KI-, SaaS- oder Web App-Projekt besprechen. Können Sie mir helfen?"
      }
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
      pills: [
        "Google Maps",
        "Webs y tiendas",
        "IA 24/7"
      ],
      reinforcement: "Costes claros desde el principio.",
      tracking: "Hola. Vi su infraestructura tecnológica en el sitio web y me gustaría comprobar si mi empresa califica para implementar su sistema comercial. ¿Pueden enviarme la tabla de precios?",
      badge: "★ QUE TE ENCUENTREN ES SOLO EL PRIMER PASO",
      title: "Tu negocio necesita aparecer antes que tus competidores.",
      subtitle: "Aparece en Google, convierte visitas en solicitudes y responde a clientes incluso cuando nadie de tu equipo está disponible.",
      ctaPrimary: "VER SOLUCIONES Y PRECIOS",
      ctaSecondary: "Ver Paquetes",
      trustPilot: "5,0/5 en Google · 2 reseñas"
    },
    problem: {
      eyebrow: "REALIDAD SIN RODEOS",
      title: "Dónde pierde clientes tu negocio sin darse cuenta.",
      subtitle: "El problema no siempre es la falta de demanda. Muchas veces el cliente encuentra otra empresa, abandona la web, se queda sin respuesta o llama cuando nadie atiende.",
      cards: {
        invisible: {
          title: "No apareces cuando te buscan",
          desc: "Cuando alguien busca exactamente lo que vendes y tu empresa no aparece, otra empresa recibe esa oportunidad."
        },
        oldSite: {
          title: "La web no convierte visitas en solicitudes",
          desc: "El cliente entra, pero no entiende rápidamente por qué elegir tu empresa ni cuál es el siguiente paso."
        },
        contacts: {
          title: "Los mensajes se quedan sin respuesta",
          desc: "Llegan solicitudes, surgen dudas y las oportunidades pierden fuerza cuando nadie puede responder a tiempo."
        },
        lostClients: {
          title: "Las llamadas se quedan sin atender",
          desc: "El cliente llama por la noche, el fin de semana o cuando el equipo está ocupado. Si nadie atiende, a menudo busca otra opción."
        }
      }
    },
    solution: {
      eyebrow: "DE LA BÚSQUEDA AL CONTACTO",
      title: "Cuatro puntos. Un solo sistema.",
      subtitle: "Cada solución resuelve un punto distinto del recorrido del cliente. Juntas, ayudan a convertir búsquedas en solicitudes sin dejar oportunidades por el camino.",
      cards: {
        gmaps: {
          label: "GOOGLE BUSINESS",
          title: "Que te encuentren cuando el cliente ya está buscando.",
          desc: "Organizamos y optimizamos la presencia de tu empresa en Google para mejorar la información, la relevancia local y la facilidad para encontrarte."
        },
        website: {
          label: "WEB Y E-COMMERCE",
          title: "Convierte visitas en solicitudes y ventas.",
          desc: "Webs y tiendas online rápidas, claras y pensadas para llevar al visitante al siguiente paso."
        },
        bot: {
          label: "ORION AI CAPTURE",
          title: "Responde incluso cuando nadie está disponible.",
          desc: "ORION conversa por texto y voz, resuelve dudas, entiende lo que necesita el cliente, recoge sus datos de contacto y entrega el contexto a tu equipo."
        },
        automation: {
          label: "RECEPCIONISTA IA",
          title: "No dejes llamadas importantes sin respuesta.",
          desc: "La IA atiende, comprende la solicitud, recoge información, cualifica la llamada y la deriva cuando es necesario hablar con una persona."
        }
      },
      closing: "Cuando estos cuatro puntos trabajan juntos, se pierden menos oportunidades entre búsqueda, visita, mensaje y llamada."
    },
    authority: {
      eyebrow: "PRESENCIA INTERNACIONAL",
      title: "Ingeniería comercial para mercados europeos.",
      subtitle: "Creamos sistemas digitales para empresas que necesitan ser encontradas, generar confianza y responder a sus clientes sin depender de procesos manuales.",
      metricsLabel: "CAPACIDAD OPERATIVA",
      metrics: {
        clients: "IDIOMAS",
        delivered: "MERCADOS EUROPEOS",
        roi: "SOLUCIONES COMERCIALES",
        support: "CAPACIDAD IA"
      },
      standard: [
        "El cliente no espera al lunes.",
        "Si busca tu empresa, hace una pregunta o llama por la noche, el fin de semana o mientras estás con tu familia, la oportunidad sigue existiendo.",
        "VELKS crea la estructura para responder, captar y canalizar ese interés sin obligarte a estar siempre al teléfono.",
        "Tu negocio sigue trabajando incluso cuando tú no estás."
      ],
      luxembourg: {
        name: "Luxemburgo",
        desc: "Estructura empresarial y contexto transfronterizo."
      },
      portugal: {
        name: "Portugal",
        desc: "Desarrollo, implementación y operación digital."
      },
      spain: {
        name: "España",
        desc: "Expansión comercial y contexto ibérico."
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
          text: "Mi restaurante casi no aparecía en las búsquedas locales. Tras la optimización de VELKS, empezamos a recibir más llamadas y reservas por Google Maps. Hoy nos encuentran clientes que antes acababan en la competencia.",
          rating: 5,
          isGoogle: true
        },
        {
          name: "Maria Costa",
          role: "Consultora Financiera",
          text: "Mi web no transmitía confianza. VELKS creó una presencia mucho más profesional y los contactos empezaron a llegar mejor preparados. La credibilidad aumentó y las conversiones crecieron.",
          rating: 5
        },
        {
          name: "Carlos Mendes",
          role: "Director Comercial",
          text: "Perdíamos contactos fuera de horario. Con la automatización de VELKS, los mensajes reciben respuesta y las oportunidades quedan registradas. Hoy podemos captar demanda 24/7 sin ampliar el equipo.",
          rating: 5
        },
        {
          name: "Ana Rodrigues",
          role: "Emprendedora Digital",
          text: "Gestionar las ventas manualmente consumía demasiado tiempo. VELKS automatizó la operación de nuestra tienda online. Conseguimos vender más sin aumentar la carga de trabajo.",
          rating: 5
        },
        {
          name: "João Ferreira",
          role: "CEO",
          text: "Sabíamos que había potencial, pero faltaba dirección. La auditoría de VELKS identificó los obstáculos y definió prioridades claras. Hoy tomamos decisiones con mucha más confianza.",
          rating: 5
        }
      ]
    },
    pricing: {
      eyebrow: "ELIGE LO QUE NECESITA TU NEGOCIO",
      title: "Empieza ahora, sin pedir presupuesto primero.",
      subtitle: "Mira los precios, elige lo que necesita tu negocio y actívalo antes de que el próximo cliente elija a la competencia.",
      singlePayment: "PRECIOS CLAROS · OPERACIÓN GESTIONADA",
      allPlansInclude: "Todos los paquetes incluyen:",
      allPlansIncludeDesc: "Soporte premium, conformidad total con el RGPD de la UE, diseño mobile-first y optimización para la máxima velocidad de carga.",
      plans: {
        gmaps: {
          title: "Google Maps Profesional",
          price: "90€",
          eyebrow: "01. GOOGLE BUSINESS",
          priceLabel: "Precio",
          badge: "PAGO ÚNICO",
          features: [
            "Configuración y Reclamación Completa del Perfil",
            "SEO Local y Categorías Estratégicas",
            "Descripción, Servicios y Productos Optimizados",
            "Optimización de Fotos y Datos del Negocio",
            "Sistema Directo para Conseguir Reseñas",
            "Optimización de Llamadas, Rutas y Contactos",
            "Posicionamiento en Búsquedas Locales"
          ],
          cta: "OPTIMIZAR PRESENCIA LOCAL",
          tracking: "¡Hola! Estoy interesado en el paquete Google Maps Profesional. ¿Los especialistas de VELKS podrían ayudarme?"
        },
        website: {
          title: "Web Comercial",
          price: "19€/mes",
          eyebrow: "02. WEBSITES",
          priceLabel: "Precio",
          badge: "CONFIGURACIÓN INICIAL 300€",
          features: [
            "Web a Medida con Enfoque Mobile-First",
            "Estructura Comercial Adaptada a su Negocio",
            "Captación Organizada de Solicitudes y Presupuestos",
            "Recogida de Datos de Contacto, Necesidades y Observaciones",
            "Envío Directo de Solicitudes a su Empresa",
            "SEO Técnico + Google y Bing Search Console",
            "Integración de Dominio, DNS y SSL",
            "Infraestructura, Despliegue y Mantenimiento Gestionados"
          ],
          cta: "ACTIVAR WEB COMERCIAL",
          tracking: "¡Hola! Estoy interesado en el paquete de Sitio Web Profesional. ¿Cuál es el primer paso para construir mi nueva máquina de ventas?"
        },
        automacao: {
          title: "ORION AI Capture",
          price: "29€/mes",
          eyebrow: "03. ORION AI",
          priceLabel: "Precio",
          badge: "CONFIGURACIÓN INICIAL 297€",
          features: [
            "Widget de IA Proactivo Integrado en su Web",
            "Conversación por Texto y Voz Natural con Azure AI",
            "Identidad, Avatar, Colores y Mensajes Personalizados",
            "Conocimiento Configurado para su Negocio",
            "Identificación Inteligente de Necesidades e Intención",
            "Captura de Nombre, Contacto y Datos Comerciales",
            "Registro Estructurado de Leads y Conversaciones",
            "Informe Automático por Email",
            "Resumen y Transcripción de la Conversación"
          ],
          cta: "ACTIVAR ORION AI",
          tracking: "Hola, Equipo VELKS. Analicé la tabla de precios en el sitio y tengo interés en avanzar con Atención IA Automática. ¿Cuál es el próximo paso para iniciar la integración?"
        },
        ecommerce: {
          title: "E-Commerce Completo",
          price: "39€/mes",
          eyebrow: "04. E-COMMERCE",
          priceLabel: "Precio",
          badge: "CONFIGURACIÓN INICIAL 450€",
          features: [
            "Tienda Online a Medida con Enfoque Mobile-First",
            "Catálogo de Productos y Estructura Comercial",
            "Checkout y Pagos Seguros con Stripe",
            "Configuración de Envíos e Inventario",
            "Gestión Organizada de Pedidos",
            "Panel de Administración Simplificado",
            "SEO Técnico para Productos y Búsquedas",
            "Base de Datos y Operación Integradas",
            "Alojamiento, SSL, Despliegue y Mantenimiento Gestionados"
          ],
          cta: "ACTIVAR E-COMMERCE",
          tracking: "Hola, Equipo VELKS. Analicé la tabla de precios en el sitio y tengo interés en avanzar con el paquete E-Commerce Completo. ¿Cuál es el próximo paso para iniciar la integración?"
        },
        custom: {
          title: "Recepcionista IA",
          price: "99€/mes",
          eyebrow: "05. AI RECEPTION",
          priceLabel: "Precio",
          badge: "CONFIGURACIÓN INICIAL 499€",
          features: [
            "Atención Telefónica Inteligente 24/7",
            "Voz Natural y Conversación Contextual",
            "Conocimiento Configurado para su Negocio",
            "Flujos Inteligentes para Cada Tipo de Llamada",
            "Calificación Automática de Clientes y Solicitudes",
            "Captura de Leads Durante la Llamada",
            "Transferencia y Escalado de Llamadas",
            "Resumen Estructurado de Cada Conversación",
            "Notificaciones Automáticas para su Equipo",
            "Operación, Supervisión y Mantenimiento Gestionados"
          ],
          cta: "ACTIVAR RECEPCIONISTA IA",
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
          q: "¿Cuánto tarda la implementación?",
          a: "Depende de la solución y del material disponible. Antes de empezar, recibirás un plazo definido para tu proyecto. Google Business suele ser más rápido; las webs, ORION, el e-commerce y la telefonía IA requieren configuración y pruebas."
        },
        {
          q: "¿El dominio, la web y los datos son míos?",
          a: "El dominio, los contenidos y los datos de la empresa permanecen bajo el control del cliente según el servicio contratado. Antes de la implementación explicamos claramente qué pertenece al cliente y qué depende de la infraestructura gestionada por VELKS."
        },
        {
          q: "¿Qué incluye la mensualidad?",
          a: "La mensualidad corresponde a una operación continua real: infraestructura, alojamiento y despliegue cuando proceda, monitorización, mantenimiento y operación técnica de la solución contratada."
        },
        {
          q: "Ya tengo una web. ¿Necesito otra?",
          a: "No necesariamente. Podemos implementar Google Business, ORION, integraciones, e-commerce o mejoras sobre una estructura existente cuando sea técnicamente adecuado."
        },
        {
          q: "¿Qué hace exactamente ORION?",
          a: "ORION conversa por texto y voz, utiliza la información de tu empresa, resuelve dudas, entiende la intención, cualifica oportunidades, recoge datos y entrega un contexto estructurado al equipo."
        },
        {
          q: "¿Cómo funciona la Recepcionista IA?",
          a: "La IA atiende llamadas, comprende la solicitud, recoge información, cualifica y deriva o escala la llamada según las reglas definidas para la empresa."
        },
        {
          q: "¿Qué incluye el E-commerce?",
          a: "La implementación puede incluir la estructura de la tienda, el catálogo, el checkout, los pagos, la gestión de pedidos y las integraciones previstas en el alcance. El stock, las empresas de transporte y los sistemas externos se definen antes del inicio."
        },
        {
          q: "¿Podéis poner mi empresa en primer lugar en Google?",
          a: "No prometemos posiciones que nadie controla. Trabajamos la estructura técnica, Google Business Profile, la relevancia, la indexabilidad y la optimización para mejorar la facilidad para encontrar tu empresa."
        },
        {
          q: "¿Trabajáis en varios idiomas?",
          a: "Sí. Las webs, las interfaces y los agentes pueden implementarse en varios idiomas según el proyecto."
        },
        {
          q: "¿Cuáles son los dominios oficiales de VELKS?",
          a: "Estás en velksgroup.com, la web institucional. También operamos velks.space, velksgroup.cloud y vgroup.space."
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
      closeDocument: "CERRAR DOCUMENTO",
      corporate: "Información Corporativa",
      followLinkedIn: "Seguir a VELKS Group",
      trust: {
        paymentTitle: "PAGO SEGURO",
        cardLabel: "Tarjeta",
        paymentNote: "Pagos procesados de forma segura por Stripe.",
        aiTitle: "PREGUNTE A LA IA SOBRE VELKS",
        aiDescription: "Compruebe quiénes somos, qué hacemos y cómo trabaja VELKS.",
        aiPrompt: "Analiza VELKS Group a partir de fuentes públicas y sus dominios oficiales. Explica qué es la empresa, qué soluciones ofrece, qué tecnologías utiliza y cuál es su presencia digital. Prioriza velksgroup.com, velks.space y velksgroup.cloud y distingue claramente la información verificada de las inferencias.",
        aiCopied: "PREGUNTA COPIADA · PÉGALA EN EL CHAT",
        aiCopyFailed: "No se pudo copiar automáticamente. Copie la pregunta de abajo y péguela en la IA.",
        aiPromptLabel: "Pregunta sobre VELKS para copiar",
      },
      legalNoticeTitle: "AVISO LEGAL & PROPIEDAD",
      legalNoticeText: "La marca VELKS Group y todas sus operaciones digitales son fundadas, propiedad y administradas legalmente por Rosa Sofia Sousa Marques (Founder) y Lucca Farias Gagliardi (Co-Founder).",
      directContacts: "CONTACTOS DIRECTOS",
      hqLocations: "SEDES CENTRALES",
      legalDisclaimer: "Avisos Legales",
      europeanCompliance: "Cumplimiento Europeo",
      velksNetworkTitle: "RED OPERATIVA VELKS",
      velksNetworkInstitutional: "Institucional",
      velksNetworkAIInfrastructure: "Infraestructura IA",
      velksNetworkCommercialAutomation: "Automatización Comercial",
      velksNetworkDigitalExperiences: "Experiencias Digitales",
      logoDesc: "Transformamos negocios dependientes del dueño en máquinas autónomas de ganancias. Tu dominio en Google se vuelve absoluto y nuestra IA cierra ventas 24/7. Resultados reales y costes claros desde el principio, para que recuperes tu tiempo y libertad.",
      hqMain: "Sede Principal: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxemburgo",
      hqSec: "Sede Secundaria: Coimbra, Portugal",
      policyPrivacy: "Política de Privacidad",
      policyCookies: "Política de Cookies",
      terms: "Términos y Condiciones",
      compliance: "Cumplimiento Europeo",
      legal: "Jurídico",
      gdpr: "CUMPLIMIENTO RGPD · UE",
      rights: "© 2026 VELKS Group. Todos los derechos reservados."
    },
  engineering: {
      label: "ANTES DE DECIDIR, VEA EL TIPO DE TECNOLOGÍA QUE DESARROLLAMOS PARA CLIENTES QUE EXIGEN MÁS QUE UN SIMPLE SITIO WEB.",
      title1: "NO SOMOS SOLO DISEÑADORES WEB.",
      title2: "SOMOS INGENIEROS DE PRODUCTO.",
      desc: "Mientras el mercado vende plantillas, nosotros desarrollamos sistemas capaces de operar aplicaciones, automatizaciones, agentes inteligentes e infraestructuras digitales preparadas para el crecimiento real.",
      metricsLabel: "[ MÉTRICAS OPERATIVAS ]",
      metrics: {
        automations: "AUTOMATIZACIONES",
        aiProjects: "PROYECTOS IA",
        activeInfra: "INFRAESTRUCTURA ACTIVA"
      },
      cards: {
        sys01: {
          title: "ARQUITECTURA DE AGENTES IA",
          desc: "Orquestación multimodelo, memoria contextual persistente, procesamiento de lenguaje natural e integración de voz en tiempo real para experiencias conversacionales avanzadas.",
          tags: "LLM • STT • TTS • MEMORY"
        },
        sys02: {
          title: "INGENIERÍA VISUAL EN TIEMPO REAL",
          desc: "Interfaces de alto rendimiento desarrolladas con renderizado avanzado, animaciones optimizadas y experiencias digitales diseñadas para la máxima retención.",
          tags: "WEBGL • THREE.JS • GSAP • SCROLLYTELLING"
        },
        sys03: {
          title: "INFRAESTRUCTURA REACTIVA DISTRIBUIDA",
          desc: "Bases de datos, eventos en tiempo real y arquitecturas modernas preparadas para soportar aplicaciones en vivo, automatización intensiva y crecimiento continuo.",
          tags: "SUPABASE • POSTGRESQL • REALTIME • EDGE"
        },
        sys04: {
          title: "ARQUITECTURA SaaS Y PAGOS",
          desc: "Sistemas de autenticación, suscripción, facturación y protección de datos preparados para productos digitales a escala internacional.",
          tags: "STRIPE • AUTH • RGPD • BILLING"
        }
      },
      bottomHero: {
        title1: "La mayoría de los clientes llegan a nosotros buscando un sitio web.",
        title2: "Muchos descubren que lo que realmente necesitan es una infraestructura capaz de acelerar todo el negocio.",
        cta: "DISCUTIR ARQUITECTURA TÉCNICA",
        ctaTags: ["IA", "SAAS", "WEB APPS"],
        whatsappMsg: "Hola, VELKS Team.\nMe gustaría discutir una arquitectura técnica para un proyecto de IA, SaaS o Web App. ¿Podrían ayudarme?"
      }
    },
    cookieConsent: {
      text: "Utilizamos cookies y tecnologías similares para garantizar la mejor experiencia de usuario y analizar el tráfico en conformidad estricta con el RGPD de la UE.",
      accept: "Aceptar Todo",
      decline: "Rechazar"
    }
  }
};
