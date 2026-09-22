import type { Language } from './translations';

export type LegalDocumentType = 'privacy' | 'cookies' | 'terms' | 'compliance' | 'legal' | 'corporate';

export interface LegalLink {
  label: string;
  href: string;
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  entries?: { heading: string; text: string; links?: LegalLink[] }[];
  links?: LegalLink[];
}

export interface LegalDocument {
  title: string;
  closeLabel: string;
  sections: LegalSection[];
}

type DocumentCopy = Omit<LegalDocument, 'closeLabel'>;

function localeDocuments(
  closeLabel: string,
  documents: Record<LegalDocumentType, DocumentCopy>,
): Record<LegalDocumentType, LegalDocument> {
  return {
    privacy: { ...documents.privacy, closeLabel },
    cookies: { ...documents.cookies, closeLabel },
    terms: { ...documents.terms, closeLabel },
    compliance: { ...documents.compliance, closeLabel },
    legal: { ...documents.legal, closeLabel },
    corporate: { ...documents.corporate, closeLabel },
  };
}

function corporateDocument(copy: {
  title: string;
  introduction: string[];
  founders: string;
  presence: string;
  luxembourg: string;
  operation: string;
  channels: string;
  network: string;
  companyLinkedIn: string;
}): DocumentCopy {
  return {
    title: copy.title,
    sections: [
      { heading: 'VELKS Group', paragraphs: copy.introduction },
      {
        heading: copy.founders,
        entries: [
          {
            heading: 'Rosa Sofia Sousa Marques',
            text: 'Founder',
            links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/sofia-marques-1b703426a' }],
          },
          {
            heading: 'Lucca Farias Gagliardi',
            text: 'Co-Founder',
            links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucca-gagliardi-5197592b8' }],
          },
        ],
      },
      {
        heading: copy.presence,
        entries: [
          { heading: copy.luxembourg, text: '57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxembourg' },
          { heading: 'Portugal', text: copy.operation },
        ],
      },
      {
        heading: copy.channels,
        links: [
          { label: 'velksgroup.com', href: 'https://velksgroup.com' },
          { label: 'velksgroup.cloud', href: 'https://velksgroup.cloud' },
          { label: 'velks.space', href: 'https://velks.space' },
          { label: 'vgroup.space', href: 'https://vgroup.space' },
        ],
      },
      {
        heading: copy.network,
        links: [{ label: copy.companyLinkedIn, href: 'https://www.linkedin.com/company/velks-group/' }],
      },
    ],
  };
}

export const legalContent: Record<Language, Record<LegalDocumentType, LegalDocument>> = {
  pt: localeDocuments('FECHAR DOCUMENTO', {
    privacy: {
      title: 'POLÍTICA DE PRIVACIDADE',
      sections: [
        { heading: '1. Âmbito', paragraphs: [
          'A VELKS Group trata dados pessoais apenas quando necessário para operar o site, responder contactos, prestar serviços, processar pedidos ou cumprir obrigações legais e contratuais.',
          'O tratamento é realizado de acordo com os princípios aplicáveis do Regulamento Geral sobre a Proteção de Dados da União Europeia.',
        ] },
        { heading: '2. Dados recolhidos', paragraphs: [
          'Podemos tratar dados fornecidos voluntariamente, como nome, endereço de email, número de telefone, dados de contacto, informações comerciais e conteúdo enviado através de formulários, agentes de IA ou outros canais de contacto.',
        ] },
        { heading: '3. Finalidades', paragraphs: [
          'Os dados podem ser utilizados para responder pedidos, prestar suporte, preparar ou executar serviços, gerir agendamentos, processar pedidos comerciais, operar funcionalidades digitais e cumprir obrigações contratuais ou legais.',
        ] },
        { heading: '4. Prestadores e partilha', paragraphs: [
          'Os dados podem ser processados por prestadores tecnológicos necessários à operação dos serviços, como infraestrutura cloud, pagamentos, bases de dados, telecomunicações, inteligência artificial ou ferramentas de comunicação. A utilização desses prestadores é limitada ao necessário para a operação aplicável.',
        ] },
        { heading: '5. Direitos', paragraphs: [
          'Nos termos aplicáveis, o titular pode solicitar acesso, correção, limitação, oposição ou eliminação dos seus dados, bem como exercer outros direitos previstos pela legislação aplicável.',
        ] },
        { heading: '6. Contacto', paragraphs: [
          'Questões relacionadas com privacidade e dados pessoais podem ser enviadas para velksgroup@gmail.com.',
        ] },
      ],
    },
    cookies: {
      title: 'POLÍTICA DE COOKIES',
      sections: [
        { heading: '1. O que são cookies?', paragraphs: [
          'Cookies e tecnologias locais equivalentes são pequenos mecanismos utilizados pelo navegador para suportar funcionalidades, memorizar preferências e, quando aplicável, ajudar a compreender o desempenho da experiência digital.',
        ] },
        { heading: '2. Cookies essenciais', paragraphs: [
          'Este site pode utilizar cookies essenciais e tecnologias equivalentes necessárias para segurança, funcionamento da interface, preferências de idioma e continuidade de funcionalidades.',
        ] },
        { heading: '3. Preferências e medição', paragraphs: [
          'Quando aplicável, podem ser utilizados mecanismos de preferência ou medição para compreender desempenho e utilização do site. Tecnologias não essenciais devem respeitar as escolhas de consentimento aplicáveis ao utilizador.',
        ] },
        { heading: '4. Gestão', paragraphs: [
          'O utilizador pode gerir cookies através das opções disponibilizadas pelo navegador e, quando aplicável, pelas preferências apresentadas no próprio site.',
        ] },
      ],
    },
    terms: {
      title: 'TERMOS E CONDIÇÕES',
      sections: [
        { heading: '1. Utilização', paragraphs: [
          'O acesso e utilização dos websites, produtos e serviços VELKS estão sujeitos às presentes condições e às condições comerciais específicas de cada solução contratada.',
        ] },
        { heading: '2. Serviços', paragraphs: [
          'A VELKS pode prestar serviços relacionados com Google Business, Website Comercial, ORION AI, E-commerce, Recepcionista IA, automação, desenvolvimento e projetos personalizados.',
        ] },
        { heading: '3. Preços e recorrência', paragraphs: [
          'Cada solução pode incluir pagamento único, implementação inicial, mensalidade de operação gerida ou desenvolvimento personalizado. Os valores e condições aplicáveis são apresentados antes da contratação.',
        ] },
        { heading: '4. Execução', paragraphs: [
          'A execução depende do escopo acordado, pagamento aplicável, entrega de materiais e acessos necessários, e demais dependências definidas para o projeto.',
        ] },
        { heading: '5. Terceiros', paragraphs: [
          'Algumas soluções podem depender de plataformas externas de pagamento, cloud, inteligência artificial, telecomunicações, bases de dados, APIs ou outros serviços necessários à operação.',
        ] },
        { heading: '6. Propriedade e utilização', paragraphs: [
          'A propriedade e os direitos de utilização de código, design, conteúdos, domínios, dados, automações e outros ativos são definidos conforme o serviço contratado e, quando aplicável, a respetiva documentação contratual.',
        ] },
        { heading: '7. Cancelamento e continuidade', paragraphs: [
          'Condições de cancelamento, renovação, manutenção ou continuidade de serviços recorrentes dependem da solução contratada e das respetivas condições comerciais.',
        ] },
      ],
    },
    compliance: {
      title: 'COMPLIANCE EUROPEU',
      sections: [{ heading: 'Conformidade Europeia', paragraphs: [
        'A VELKS desenvolve e opera os seus sistemas considerando os requisitos aplicáveis da União Europeia em matéria de proteção de dados, comércio digital, pagamentos e direitos do consumidor.',
        'A infraestrutura e os processos utilizados são estruturados para suportar operações europeias e transfronteiriças, respeitando as obrigações aplicáveis a cada serviço e mercado.',
      ] }],
    },
    legal: {
      title: 'JURÍDICO',
      sections: [
        { heading: '1. Identificação e responsabilidade', paragraphs: [
          'A VELKS Group opera produtos, serviços e experiências digitais nas áreas de desenvolvimento web, inteligência artificial, automação, infraestrutura digital e crescimento comercial.',
          'A entidade, estrutura contratual, faturação e condições aplicáveis a cada serviço são identificadas na proposta, checkout, contrato ou documentação correspondente à contratação.',
        ] },
        { heading: '2. Contratação de serviços', paragraphs: [
          'A contratação de soluções VELKS pode envolver pagamento único, implementação inicial, operação gerida recorrente ou desenvolvimento personalizado, conforme a solução escolhida.',
          'O âmbito, prazos, responsabilidades, custos recorrentes e dependências técnicas são definidos antes da execução.',
        ] },
        { heading: '3. Propriedade intelectual', paragraphs: [
          'A marca VELKS, identidade visual, código proprietário, interfaces, componentes, automações, agentes de IA, sistemas internos e demais ativos desenvolvidos pela VELKS permanecem protegidos pelos direitos de propriedade intelectual aplicáveis.',
          'A propriedade e os direitos de utilização dos ativos entregues ao cliente são definidos conforme o serviço contratado.',
        ] },
        { heading: '4. Plataformas e terceiros', paragraphs: [
          'Algumas soluções podem utilizar infraestrutura ou serviços tecnológicos de terceiros, incluindo processamento de pagamentos, cloud, bases de dados, inteligência artificial, telecomunicações ou APIs.',
          'Quando aplicável, essas dependências são utilizadas para fornecer e operar a solução contratada.',
        ] },
        { heading: '5. Responsabilidade', paragraphs: [
          'A VELKS compromete-se a executar os serviços contratados de acordo com o âmbito acordado e com práticas técnicas adequadas.',
          'Resultados comerciais, posicionamento em motores de pesquisa, volume de vendas ou retorno financeiro não são garantidos quando dependem de fatores externos à operação técnica da VELKS.',
        ] },
        { heading: '6. Contacto jurídico', paragraphs: [
          'Questões relacionadas com contratos, titularidade, propriedade intelectual, privacidade ou outros assuntos jurídicos podem ser enviadas para velksgroup@gmail.com.',
        ] },
      ],
    },
    corporate: corporateDocument({
      title: 'INFORMAÇÃO CORPORATIVA',
      introduction: [
        'A VELKS Group desenvolve sistemas de inteligência artificial, automação, software e infraestrutura digital orientados para crescimento comercial.',
        'A operação combina estratégia, engenharia, experiência digital e automação para empresas que precisam de sistemas mais eficientes e conectados.',
      ],
      founders: 'Fundadores', presence: 'Presença', luxembourg: 'Luxemburgo',
      operation: 'Operação e desenvolvimento', channels: 'Canais oficiais',
      network: 'Rede profissional', companyLinkedIn: 'VELKS Group no LinkedIn',
    }),
  }),
  es: localeDocuments('CERRAR DOCUMENTO', {
    privacy: {
      title: 'POLÍTICA DE PRIVACIDAD',
      sections: [
        { heading: '1. Ámbito', paragraphs: [
          'VELKS Group trata datos personales solo cuando es necesario para operar el sitio, responder a contactos, prestar servicios, tramitar solicitudes o cumplir obligaciones legales y contractuales.',
          'El tratamiento se realiza de acuerdo con los principios aplicables del Reglamento General de Protección de Datos de la Unión Europea.',
        ] },
        { heading: '2. Datos recogidos', paragraphs: [
          'Podemos tratar datos facilitados voluntariamente, como nombre, dirección de correo electrónico, número de teléfono, datos de contacto, información comercial y contenido enviado a través de formularios, agentes de IA u otros canales de contacto.',
        ] },
        { heading: '3. Finalidades', paragraphs: [
          'Los datos pueden utilizarse para responder a solicitudes, prestar asistencia, preparar o ejecutar servicios, gestionar citas, tramitar solicitudes comerciales, operar funcionalidades digitales y cumplir obligaciones contractuales o legales.',
        ] },
        { heading: '4. Proveedores y comunicación de datos', paragraphs: [
          'Los datos pueden ser tratados por proveedores tecnológicos necesarios para la operación de los servicios, como infraestructura cloud, pagos, bases de datos, telecomunicaciones, inteligencia artificial o herramientas de comunicación. El uso de estos proveedores se limita a lo necesario para la operación correspondiente.',
        ] },
        { heading: '5. Derechos', paragraphs: [
          'En los términos aplicables, el titular puede solicitar el acceso, la rectificación, la limitación, la oposición o la supresión de sus datos, así como ejercer otros derechos previstos en la legislación aplicable.',
        ] },
        { heading: '6. Contacto', paragraphs: [
          'Las consultas relacionadas con la privacidad y los datos personales pueden enviarse a velksgroup@gmail.com.',
        ] },
      ],
    },
    cookies: {
      title: 'POLÍTICA DE COOKIES',
      sections: [
        { heading: '1. ¿Qué son las cookies?', paragraphs: [
          'Las cookies y las tecnologías locales equivalentes son pequeños mecanismos que utiliza el navegador para ofrecer funcionalidades, recordar preferencias y, cuando corresponda, ayudar a comprender el rendimiento de la experiencia digital.',
        ] },
        { heading: '2. Cookies esenciales', paragraphs: [
          'Este sitio puede utilizar cookies esenciales y tecnologías equivalentes necesarias para la seguridad, el funcionamiento de la interfaz, las preferencias de idioma y la continuidad de las funcionalidades.',
        ] },
        { heading: '3. Preferencias y medición', paragraphs: [
          'Cuando corresponda, pueden utilizarse mecanismos de preferencias o medición para comprender el rendimiento y el uso del sitio. Las tecnologías no esenciales deben respetar las decisiones de consentimiento aplicables al usuario.',
        ] },
        { heading: '4. Gestión', paragraphs: [
          'El usuario puede gestionar las cookies mediante las opciones del navegador y, cuando corresponda, las preferencias que se ofrecen en el propio sitio.',
        ] },
      ],
    },
    terms: {
      title: 'TÉRMINOS Y CONDICIONES',
      sections: [
        { heading: '1. Uso', paragraphs: [
          'El acceso y uso de los sitios web, productos y servicios VELKS están sujetos a estas condiciones y a las condiciones comerciales específicas de cada solución contratada.',
        ] },
        { heading: '2. Servicios', paragraphs: [
          'VELKS puede prestar servicios relacionados con Google Business, Web Comercial, ORION AI, E-commerce, Recepcionista IA, automatización, desarrollo y proyectos personalizados.',
        ] },
        { heading: '3. Precios y pagos recurrentes', paragraphs: [
          'Cada solución puede incluir un pago único, una implementación inicial, una cuota mensual de operación gestionada o desarrollo personalizado. Los importes y condiciones aplicables se presentan antes de la contratación.',
        ] },
        { heading: '4. Ejecución', paragraphs: [
          'La ejecución depende del alcance acordado, del pago aplicable, de la entrega de los materiales y accesos necesarios y de las demás dependencias definidas para el proyecto.',
        ] },
        { heading: '5. Terceros', paragraphs: [
          'Algunas soluciones pueden depender de plataformas externas de pagos, cloud, inteligencia artificial, telecomunicaciones, bases de datos, APIs u otros servicios necesarios para su operación.',
        ] },
        { heading: '6. Propiedad y uso', paragraphs: [
          'La propiedad y los derechos de uso del código, diseño, contenidos, dominios, datos, automatizaciones y otros activos se definen según el servicio contratado y, cuando corresponda, la documentación contractual correspondiente.',
        ] },
        { heading: '7. Cancelación y continuidad', paragraphs: [
          'Las condiciones de cancelación, renovación, mantenimiento o continuidad de los servicios recurrentes dependen de la solución contratada y de sus condiciones comerciales.',
        ] },
      ],
    },
    compliance: {
      title: 'CUMPLIMIENTO EUROPEO',
      sections: [{ heading: 'Cumplimiento europeo', paragraphs: [
        'VELKS desarrolla y opera sus sistemas teniendo en cuenta los requisitos aplicables de la Unión Europea en materia de protección de datos, comercio digital, pagos y derechos de los consumidores.',
        'La infraestructura y los procesos utilizados están estructurados para respaldar operaciones europeas y transfronterizas, respetando las obligaciones aplicables a cada servicio y mercado.',
      ] }],
    },
    legal: {
      title: 'INFORMACIÓN JURÍDICA',
      sections: [
        { heading: '1. Identificación y responsabilidad', paragraphs: [
          'VELKS Group opera productos, servicios y experiencias digitales en las áreas de desarrollo web, inteligencia artificial, automatización, infraestructura digital y crecimiento comercial.',
          'La entidad, la estructura contractual, la facturación y las condiciones aplicables a cada servicio se identifican en la propuesta, el checkout, el contrato o la documentación correspondiente a la contratación.',
        ] },
        { heading: '2. Contratación de servicios', paragraphs: [
          'La contratación de soluciones VELKS puede implicar un pago único, una implementación inicial, una operación gestionada recurrente o desarrollo personalizado, según la solución elegida.',
          'El alcance, los plazos, las responsabilidades, los costes recurrentes y las dependencias técnicas se definen antes de la ejecución.',
        ] },
        { heading: '3. Propiedad intelectual', paragraphs: [
          'La marca VELKS, la identidad visual, el código propietario, las interfaces, los componentes, las automatizaciones, los agentes de IA, los sistemas internos y los demás activos desarrollados por VELKS siguen protegidos por los derechos de propiedad intelectual aplicables.',
          'La propiedad y los derechos de uso de los activos entregados al cliente se definen según el servicio contratado.',
        ] },
        { heading: '4. Plataformas y terceros', paragraphs: [
          'Algunas soluciones pueden utilizar infraestructura o servicios tecnológicos de terceros, como procesamiento de pagos, cloud, bases de datos, inteligencia artificial, telecomunicaciones o APIs.',
          'Cuando corresponde, estas dependencias se utilizan para proporcionar y operar la solución contratada.',
        ] },
        { heading: '5. Responsabilidad', paragraphs: [
          'VELKS se compromete a ejecutar los servicios contratados de acuerdo con el alcance acordado y con prácticas técnicas adecuadas.',
          'Los resultados comerciales, el posicionamiento en buscadores, el volumen de ventas o el retorno financiero no se garantizan cuando dependen de factores externos a la operación técnica de VELKS.',
        ] },
        { heading: '6. Contacto jurídico', paragraphs: [
          'Las consultas relacionadas con contratos, titularidad, propiedad intelectual, privacidad u otros asuntos jurídicos pueden enviarse a velksgroup@gmail.com.',
        ] },
      ],
    },
    corporate: corporateDocument({
      title: 'INFORMACIÓN CORPORATIVA',
      introduction: [
        'VELKS Group desarrolla sistemas de inteligencia artificial, automatización, software e infraestructura digital orientados al crecimiento comercial.',
        'La operación combina estrategia, ingeniería, experiencia digital y automatización para empresas que necesitan sistemas más eficientes y conectados.',
      ],
      founders: 'Fundadores', presence: 'Presencia', luxembourg: 'Luxemburgo',
      operation: 'Operación y desarrollo', channels: 'Canales oficiales',
      network: 'Red profesional', companyLinkedIn: 'VELKS Group en LinkedIn',
    }),
  }),
  en: localeDocuments('CLOSE DOCUMENT', {
    privacy: {
      title: 'PRIVACY POLICY',
      sections: [
        { heading: '1. Scope', paragraphs: [
          'VELKS Group processes personal data only when necessary to operate the site, respond to enquiries, provide services, process requests or fulfil legal and contractual obligations.',
          'Processing follows the applicable principles of the European Union General Data Protection Regulation.',
        ] },
        { heading: '2. Data collected', paragraphs: [
          'We may process voluntarily provided data, such as names, email addresses, telephone numbers, contact details, business information and content submitted through forms, AI agents or other contact channels.',
        ] },
        { heading: '3. Purposes', paragraphs: [
          'Data may be used to respond to requests, provide support, prepare or deliver services, manage appointments, process business requests, operate digital features and fulfil contractual or legal obligations.',
        ] },
        { heading: '4. Providers and sharing', paragraphs: [
          'Data may be processed by technology providers needed to operate the services, such as cloud infrastructure, payments, databases, telecommunications, artificial intelligence or communication tools. The use of these providers is limited to what is necessary for the relevant operation.',
        ] },
        { heading: '5. Rights', paragraphs: [
          'Under the applicable conditions, data subjects may request access, rectification, restriction, objection or erasure of their data, and exercise other rights provided by applicable legislation.',
        ] },
        { heading: '6. Contact', paragraphs: [
          'Questions about privacy and personal data can be sent to velksgroup@gmail.com.',
        ] },
      ],
    },
    cookies: {
      title: 'COOKIE POLICY',
      sections: [
        { heading: '1. What are cookies?', paragraphs: [
          'Cookies and equivalent local technologies are small mechanisms used by the browser to support features, remember preferences and, where applicable, help understand the performance of the digital experience.',
        ] },
        { heading: '2. Essential cookies', paragraphs: [
          'This site may use essential cookies and equivalent technologies needed for security, interface functionality, language preferences and continuity of features.',
        ] },
        { heading: '3. Preferences and measurement', paragraphs: [
          'Where applicable, preference or measurement mechanisms may be used to understand site performance and usage. Non-essential technologies must respect the consent choices applicable to the user.',
        ] },
        { heading: '4. Management', paragraphs: [
          'Users can manage cookies through their browser settings and, where applicable, the preferences offered on the site itself.',
        ] },
      ],
    },
    terms: {
      title: 'TERMS AND CONDITIONS',
      sections: [
        { heading: '1. Use', paragraphs: [
          'Access to and use of VELKS websites, products and services are subject to these conditions and the specific commercial terms of each contracted solution.',
        ] },
        { heading: '2. Services', paragraphs: [
          'VELKS may provide services related to Google Business, Business Website, ORION AI, E-commerce, AI Receptionist, automation, development and custom projects.',
        ] },
        { heading: '3. Pricing and recurring charges', paragraphs: [
          'Each solution may include a one-time payment, initial implementation, a monthly managed-operation fee or custom development. Applicable prices and conditions are presented before contracting.',
        ] },
        { heading: '4. Delivery', paragraphs: [
          'Delivery depends on the agreed scope, applicable payment, provision of the necessary materials and access, and other dependencies defined for the project.',
        ] },
        { heading: '5. Third parties', paragraphs: [
          'Some solutions may depend on external platforms for payments, cloud, artificial intelligence, telecommunications, databases, APIs or other services needed for operation.',
        ] },
        { heading: '6. Ownership and use', paragraphs: [
          'Ownership and rights to use code, design, content, domains, data, automations and other assets are defined according to the contracted service and, where applicable, the corresponding contractual documentation.',
        ] },
        { heading: '7. Cancellation and continuity', paragraphs: [
          'Conditions for cancellation, renewal, maintenance or continuity of recurring services depend on the contracted solution and its commercial terms.',
        ] },
      ],
    },
    compliance: {
      title: 'EUROPEAN COMPLIANCE',
      sections: [{ heading: 'European compliance', paragraphs: [
        'VELKS develops and operates its systems with regard to applicable European Union requirements on data protection, digital commerce, payments and consumer rights.',
        'The infrastructure and processes used are structured to support European and cross-border operations, respecting the obligations applicable to each service and market.',
      ] }],
    },
    legal: {
      title: 'LEGAL INFORMATION',
      sections: [
        { heading: '1. Identification and responsibility', paragraphs: [
          'VELKS Group operates digital products, services and experiences in web development, artificial intelligence, automation, digital infrastructure and business growth.',
          'The entity, contractual structure, billing and conditions applicable to each service are identified in the proposal, checkout, contract or corresponding contracting documentation.',
        ] },
        { heading: '2. Contracting services', paragraphs: [
          'Contracting VELKS solutions may involve a one-time payment, initial implementation, recurring managed operation or custom development, depending on the chosen solution.',
          'Scope, timelines, responsibilities, recurring costs and technical dependencies are defined before delivery begins.',
        ] },
        { heading: '3. Intellectual property', paragraphs: [
          'The VELKS brand, visual identity, proprietary code, interfaces, components, automations, AI agents, internal systems and other assets developed by VELKS remain protected by applicable intellectual property rights.',
          'Ownership and rights to use assets delivered to the client are defined according to the contracted service.',
        ] },
        { heading: '4. Platforms and third parties', paragraphs: [
          'Some solutions may use third-party infrastructure or technology services, including payment processing, cloud, databases, artificial intelligence, telecommunications or APIs.',
          'Where applicable, these dependencies are used to provide and operate the contracted solution.',
        ] },
        { heading: '5. Liability', paragraphs: [
          'VELKS undertakes to deliver contracted services in accordance with the agreed scope and appropriate technical practices.',
          'Business results, search engine rankings, sales volume or financial returns are not guaranteed where they depend on factors outside the technical operation of VELKS.',
        ] },
        { heading: '6. Legal contact', paragraphs: [
          'Questions about contracts, ownership, intellectual property, privacy or other legal matters can be sent to velksgroup@gmail.com.',
        ] },
      ],
    },
    corporate: corporateDocument({
      title: 'CORPORATE INFORMATION',
      introduction: [
        'VELKS Group develops artificial intelligence, automation, software and digital infrastructure systems focused on business growth.',
        'The operation combines strategy, engineering, digital experience and automation for businesses that need more efficient, connected systems.',
      ],
      founders: 'Founders', presence: 'Presence', luxembourg: 'Luxembourg',
      operation: 'Operations and development', channels: 'Official channels',
      network: 'Professional network', companyLinkedIn: 'VELKS Group on LinkedIn',
    }),
  }),
  fr: localeDocuments('FERMER LE DOCUMENT', {
    privacy: {
      title: 'POLITIQUE DE CONFIDENTIALITÉ',
      sections: [
        { heading: '1. Champ d’application', paragraphs: [
          'VELKS Group traite des données personnelles uniquement lorsque cela est nécessaire pour exploiter le site, répondre aux prises de contact, fournir des services, traiter des demandes ou respecter des obligations légales et contractuelles.',
          'Le traitement est effectué conformément aux principes applicables du Règlement général sur la protection des données de l’Union européenne.',
        ] },
        { heading: '2. Données collectées', paragraphs: [
          'Nous pouvons traiter les données fournies volontairement, telles que le nom, l’adresse e-mail, le numéro de téléphone, les coordonnées, les informations commerciales et les contenus transmis par des formulaires, des agents IA ou d’autres canaux de contact.',
        ] },
        { heading: '3. Finalités', paragraphs: [
          'Les données peuvent être utilisées pour répondre aux demandes, fournir une assistance, préparer ou exécuter des services, gérer des rendez-vous, traiter des demandes commerciales, assurer le fonctionnement de fonctionnalités numériques et respecter des obligations contractuelles ou légales.',
        ] },
        { heading: '4. Prestataires et partage', paragraphs: [
          'Les données peuvent être traitées par des prestataires technologiques nécessaires au fonctionnement des services, notamment pour l’infrastructure cloud, les paiements, les bases de données, les télécommunications, l’intelligence artificielle ou les outils de communication. Le recours à ces prestataires est limité à ce qui est nécessaire à l’opération concernée.',
        ] },
        { heading: '5. Droits', paragraphs: [
          'Dans les conditions applicables, la personne concernée peut demander l’accès, la rectification, la limitation, l’opposition ou l’effacement de ses données, ainsi qu’exercer les autres droits prévus par la législation applicable.',
        ] },
        { heading: '6. Contact', paragraphs: [
          'Les questions relatives à la confidentialité et aux données personnelles peuvent être adressées à velksgroup@gmail.com.',
        ] },
      ],
    },
    cookies: {
      title: 'POLITIQUE RELATIVE AUX COOKIES',
      sections: [
        { heading: '1. Que sont les cookies ?', paragraphs: [
          'Les cookies et les technologies locales équivalentes sont de petits mécanismes utilisés par le navigateur pour assurer des fonctionnalités, mémoriser des préférences et, le cas échéant, aider à comprendre les performances de l’expérience numérique.',
        ] },
        { heading: '2. Cookies essentiels', paragraphs: [
          'Ce site peut utiliser des cookies essentiels et des technologies équivalentes nécessaires à la sécurité, au fonctionnement de l’interface, aux préférences linguistiques et à la continuité des fonctionnalités.',
        ] },
        { heading: '3. Préférences et mesure', paragraphs: [
          'Le cas échéant, des mécanismes de préférence ou de mesure peuvent être utilisés pour comprendre les performances et l’utilisation du site. Les technologies non essentielles doivent respecter les choix de consentement applicables à l’utilisateur.',
        ] },
        { heading: '4. Gestion', paragraphs: [
          'L’utilisateur peut gérer les cookies au moyen des options de son navigateur et, le cas échéant, des préférences proposées sur le site lui-même.',
        ] },
      ],
    },
    terms: {
      title: 'CONDITIONS GÉNÉRALES',
      sections: [
        { heading: '1. Utilisation', paragraphs: [
          'L’accès aux sites, produits et services VELKS et leur utilisation sont soumis aux présentes conditions ainsi qu’aux conditions commerciales spécifiques de chaque solution souscrite.',
        ] },
        { heading: '2. Services', paragraphs: [
          'VELKS peut fournir des services liés à Google Business, Site Web Commercial, ORION AI, E-commerce, Réceptionniste IA, à l’automatisation, au développement et aux projets sur mesure.',
        ] },
        { heading: '3. Prix et frais récurrents', paragraphs: [
          'Chaque solution peut comprendre un paiement unique, une mise en place initiale, une mensualité d’exploitation gérée ou un développement sur mesure. Les montants et conditions applicables sont présentés avant la souscription.',
        ] },
        { heading: '4. Exécution', paragraphs: [
          'L’exécution dépend du périmètre convenu, du paiement applicable, de la fourniture des éléments et accès nécessaires, ainsi que des autres dépendances définies pour le projet.',
        ] },
        { heading: '5. Tiers', paragraphs: [
          'Certaines solutions peuvent dépendre de plateformes externes de paiement, de cloud, d’intelligence artificielle, de télécommunications, de bases de données, d’API ou d’autres services nécessaires à leur fonctionnement.',
        ] },
        { heading: '6. Propriété et utilisation', paragraphs: [
          'La propriété et les droits d’utilisation du code, du design, des contenus, des domaines, des données, des automatisations et des autres actifs sont définis selon le service souscrit et, le cas échéant, la documentation contractuelle correspondante.',
        ] },
        { heading: '7. Résiliation et continuité', paragraphs: [
          'Les conditions de résiliation, de renouvellement, de maintenance ou de continuité des services récurrents dépendent de la solution souscrite et de ses conditions commerciales.',
        ] },
      ],
    },
    compliance: {
      title: 'CONFORMITÉ EUROPÉENNE',
      sections: [{ heading: 'Conformité européenne', paragraphs: [
        'VELKS développe et exploite ses systèmes en tenant compte des exigences applicables de l’Union européenne en matière de protection des données, de commerce numérique, de paiements et de droits des consommateurs.',
        'L’infrastructure et les processus utilisés sont structurés pour soutenir les opérations européennes et transfrontalières, dans le respect des obligations applicables à chaque service et marché.',
      ] }],
    },
    legal: {
      title: 'INFORMATIONS JURIDIQUES',
      sections: [
        { heading: '1. Identification et responsabilité', paragraphs: [
          'VELKS Group exploite des produits, services et expériences numériques dans les domaines du développement web, de l’intelligence artificielle, de l’automatisation, de l’infrastructure numérique et de la croissance commerciale.',
          'L’entité, la structure contractuelle, la facturation et les conditions applicables à chaque service sont identifiées dans la proposition, le parcours de paiement, le contrat ou la documentation correspondant à la souscription.',
        ] },
        { heading: '2. Souscription de services', paragraphs: [
          'La souscription de solutions VELKS peut impliquer un paiement unique, une mise en place initiale, une exploitation gérée récurrente ou un développement sur mesure, selon la solution choisie.',
          'Le périmètre, les délais, les responsabilités, les coûts récurrents et les dépendances techniques sont définis avant l’exécution.',
        ] },
        { heading: '3. Propriété intellectuelle', paragraphs: [
          'La marque VELKS, l’identité visuelle, le code propriétaire, les interfaces, les composants, les automatisations, les agents IA, les systèmes internes et les autres actifs développés par VELKS restent protégés par les droits de propriété intellectuelle applicables.',
          'La propriété et les droits d’utilisation des actifs livrés au client sont définis selon le service souscrit.',
        ] },
        { heading: '4. Plateformes et tiers', paragraphs: [
          'Certaines solutions peuvent utiliser des infrastructures ou des services technologiques tiers, notamment pour le traitement des paiements, le cloud, les bases de données, l’intelligence artificielle, les télécommunications ou les API.',
          'Le cas échéant, ces dépendances sont utilisées pour fournir et exploiter la solution souscrite.',
        ] },
        { heading: '5. Responsabilité', paragraphs: [
          'VELKS s’engage à exécuter les services souscrits conformément au périmètre convenu et à des pratiques techniques adaptées.',
          'Les résultats commerciaux, le positionnement dans les moteurs de recherche, le volume des ventes ou le rendement financier ne sont pas garantis lorsqu’ils dépendent de facteurs extérieurs à l’exploitation technique de VELKS.',
        ] },
        { heading: '6. Contact juridique', paragraphs: [
          'Les questions relatives aux contrats, à la titularité, à la propriété intellectuelle, à la confidentialité ou à d’autres sujets juridiques peuvent être adressées à velksgroup@gmail.com.',
        ] },
      ],
    },
    corporate: corporateDocument({
      title: 'INFORMATIONS SUR L’ENTREPRISE',
      introduction: [
        'VELKS Group développe des systèmes d’intelligence artificielle, d’automatisation, de logiciels et d’infrastructure numérique orientés vers la croissance commerciale.',
        'L’activité associe stratégie, ingénierie, expérience numérique et automatisation pour les entreprises qui ont besoin de systèmes plus efficaces et connectés.',
      ],
      founders: 'Fondateurs', presence: 'Présence', luxembourg: 'Luxembourg',
      operation: 'Opérations et développement', channels: 'Canaux officiels',
      network: 'Réseau professionnel', companyLinkedIn: 'VELKS Group sur LinkedIn',
    }),
  }),
  it: localeDocuments('CHIUDI DOCUMENTO', {
    privacy: {
      title: 'INFORMATIVA SULLA PRIVACY',
      sections: [
        { heading: '1. Ambito', paragraphs: [
          'VELKS Group tratta dati personali solo quando necessario per gestire il sito, rispondere ai contatti, fornire servizi, elaborare richieste o adempiere a obblighi legali e contrattuali.',
          'Il trattamento avviene in conformità ai principi applicabili del Regolamento generale sulla protezione dei dati dell’Unione europea.',
        ] },
        { heading: '2. Dati raccolti', paragraphs: [
          'Possiamo trattare dati forniti volontariamente, come nome, indirizzo email, numero di telefono, recapiti, informazioni commerciali e contenuti inviati tramite moduli, agenti IA o altri canali di contatto.',
        ] },
        { heading: '3. Finalità', paragraphs: [
          'I dati possono essere utilizzati per rispondere alle richieste, fornire assistenza, preparare o svolgere servizi, gestire appuntamenti, elaborare richieste commerciali, gestire funzionalità digitali e adempiere a obblighi contrattuali o legali.',
        ] },
        { heading: '4. Fornitori e condivisione', paragraphs: [
          'I dati possono essere trattati da fornitori tecnologici necessari al funzionamento dei servizi, come infrastrutture cloud, pagamenti, banche dati, telecomunicazioni, intelligenza artificiale o strumenti di comunicazione. Il ricorso a tali fornitori è limitato a quanto necessario per l’operazione interessata.',
        ] },
        { heading: '5. Diritti', paragraphs: [
          'Alle condizioni applicabili, l’interessato può richiedere l’accesso, la rettifica, la limitazione, l’opposizione o la cancellazione dei propri dati, nonché esercitare gli altri diritti previsti dalla normativa applicabile.',
        ] },
        { heading: '6. Contatti', paragraphs: [
          'Le domande relative alla privacy e ai dati personali possono essere inviate a velksgroup@gmail.com.',
        ] },
      ],
    },
    cookies: {
      title: 'INFORMATIVA SUI COOKIE',
      sections: [
        { heading: '1. Cosa sono i cookie?', paragraphs: [
          'I cookie e le tecnologie locali equivalenti sono piccoli meccanismi utilizzati dal browser per supportare funzionalità, memorizzare preferenze e, ove applicabile, aiutare a comprendere le prestazioni dell’esperienza digitale.',
        ] },
        { heading: '2. Cookie essenziali', paragraphs: [
          'Questo sito può utilizzare cookie essenziali e tecnologie equivalenti necessari per la sicurezza, il funzionamento dell’interfaccia, le preferenze linguistiche e la continuità delle funzionalità.',
        ] },
        { heading: '3. Preferenze e misurazione', paragraphs: [
          'Ove applicabile, possono essere utilizzati meccanismi di preferenza o misurazione per comprendere le prestazioni e l’utilizzo del sito. Le tecnologie non essenziali devono rispettare le scelte di consenso applicabili all’utente.',
        ] },
        { heading: '4. Gestione', paragraphs: [
          'L’utente può gestire i cookie tramite le opzioni del browser e, ove applicabile, le preferenze disponibili sul sito stesso.',
        ] },
      ],
    },
    terms: {
      title: 'TERMINI E CONDIZIONI',
      sections: [
        { heading: '1. Utilizzo', paragraphs: [
          'L’accesso e l’utilizzo dei siti web, dei prodotti e dei servizi VELKS sono soggetti alle presenti condizioni e alle condizioni commerciali specifiche di ciascuna soluzione contrattata.',
        ] },
        { heading: '2. Servizi', paragraphs: [
          'VELKS può fornire servizi relativi a Google Business, Sito Web Commerciale, ORION AI, E-commerce, Receptionist IA, automazione, sviluppo e progetti personalizzati.',
        ] },
        { heading: '3. Prezzi e costi ricorrenti', paragraphs: [
          'Ogni soluzione può includere un pagamento unico, un’implementazione iniziale, un canone mensile per la gestione operativa o uno sviluppo personalizzato. Gli importi e le condizioni applicabili sono presentati prima della stipula.',
        ] },
        { heading: '4. Esecuzione', paragraphs: [
          'L’esecuzione dipende dall’ambito concordato, dal pagamento applicabile, dalla consegna dei materiali e degli accessi necessari e dalle altre dipendenze definite per il progetto.',
        ] },
        { heading: '5. Terzi', paragraphs: [
          'Alcune soluzioni possono dipendere da piattaforme esterne per pagamenti, cloud, intelligenza artificiale, telecomunicazioni, banche dati, API o altri servizi necessari al funzionamento.',
        ] },
        { heading: '6. Proprietà e utilizzo', paragraphs: [
          'La proprietà e i diritti di utilizzo di codice, design, contenuti, domini, dati, automazioni e altri beni sono definiti in base al servizio contrattato e, ove applicabile, alla relativa documentazione contrattuale.',
        ] },
        { heading: '7. Cessazione e continuità', paragraphs: [
          'Le condizioni di cessazione, rinnovo, manutenzione o continuità dei servizi ricorrenti dipendono dalla soluzione contrattata e dalle relative condizioni commerciali.',
        ] },
      ],
    },
    compliance: {
      title: 'CONFORMITÀ EUROPEA',
      sections: [{ heading: 'Conformità europea', paragraphs: [
        'VELKS sviluppa e gestisce i propri sistemi tenendo conto dei requisiti applicabili dell’Unione europea in materia di protezione dei dati, commercio digitale, pagamenti e diritti dei consumatori.',
        'L’infrastruttura e i processi utilizzati sono strutturati per supportare operazioni europee e transfrontaliere, rispettando gli obblighi applicabili a ciascun servizio e mercato.',
      ] }],
    },
    legal: {
      title: 'INFORMAZIONI LEGALI',
      sections: [
        { heading: '1. Identificazione e responsabilità', paragraphs: [
          'VELKS Group gestisce prodotti, servizi ed esperienze digitali nei settori dello sviluppo web, dell’intelligenza artificiale, dell’automazione, dell’infrastruttura digitale e della crescita commerciale.',
          'L’entità, la struttura contrattuale, la fatturazione e le condizioni applicabili a ciascun servizio sono identificate nella proposta, nel checkout, nel contratto o nella documentazione relativa alla stipula.',
        ] },
        { heading: '2. Contrattazione dei servizi', paragraphs: [
          'La contrattazione di soluzioni VELKS può prevedere un pagamento unico, un’implementazione iniziale, una gestione operativa ricorrente o uno sviluppo personalizzato, a seconda della soluzione scelta.',
          'L’ambito, i tempi, le responsabilità, i costi ricorrenti e le dipendenze tecniche sono definiti prima dell’esecuzione.',
        ] },
        { heading: '3. Proprietà intellettuale', paragraphs: [
          'Il marchio VELKS, l’identità visiva, il codice proprietario, le interfacce, i componenti, le automazioni, gli agenti IA, i sistemi interni e gli altri beni sviluppati da VELKS restano protetti dai diritti di proprietà intellettuale applicabili.',
          'La proprietà e i diritti di utilizzo dei beni consegnati al cliente sono definiti in base al servizio contrattato.',
        ] },
        { heading: '4. Piattaforme e terzi', paragraphs: [
          'Alcune soluzioni possono utilizzare infrastrutture o servizi tecnologici di terzi, tra cui elaborazione dei pagamenti, cloud, banche dati, intelligenza artificiale, telecomunicazioni o API.',
          'Ove applicabile, tali dipendenze vengono utilizzate per fornire e gestire la soluzione contrattata.',
        ] },
        { heading: '5. Responsabilità', paragraphs: [
          'VELKS si impegna a eseguire i servizi contrattati in conformità all’ambito concordato e a pratiche tecniche adeguate.',
          'I risultati commerciali, il posizionamento nei motori di ricerca, il volume delle vendite o il ritorno finanziario non sono garantiti quando dipendono da fattori esterni all’operatività tecnica di VELKS.',
        ] },
        { heading: '6. Contatto legale', paragraphs: [
          'Le domande relative a contratti, titolarità, proprietà intellettuale, privacy o altre questioni legali possono essere inviate a velksgroup@gmail.com.',
        ] },
      ],
    },
    corporate: corporateDocument({
      title: 'INFORMAZIONI AZIENDALI',
      introduction: [
        'VELKS Group sviluppa sistemi di intelligenza artificiale, automazione, software e infrastruttura digitale orientati alla crescita commerciale.',
        'L’attività combina strategia, ingegneria, esperienza digitale e automazione per le aziende che hanno bisogno di sistemi più efficienti e connessi.',
      ],
      founders: 'Fondatori', presence: 'Presenza', luxembourg: 'Lussemburgo',
      operation: 'Operatività e sviluppo', channels: 'Canali ufficiali',
      network: 'Rete professionale', companyLinkedIn: 'VELKS Group su LinkedIn',
    }),
  }),
  de: localeDocuments('DOKUMENT SCHLIESSEN', {
    privacy: {
      title: 'DATENSCHUTZERKLÄRUNG',
      sections: [
        { heading: '1. Geltungsbereich', paragraphs: [
          'VELKS Group verarbeitet personenbezogene Daten nur, soweit dies für den Betrieb der Website, die Beantwortung von Kontaktanfragen, die Erbringung von Dienstleistungen, die Bearbeitung von Anfragen oder die Erfüllung gesetzlicher und vertraglicher Pflichten erforderlich ist.',
          'Die Verarbeitung erfolgt nach den anwendbaren Grundsätzen der Datenschutz-Grundverordnung der Europäischen Union.',
        ] },
        { heading: '2. Erhobene Daten', paragraphs: [
          'Wir können freiwillig bereitgestellte Daten verarbeiten, etwa Namen, E-Mail-Adressen, Telefonnummern, Kontaktdaten, geschäftliche Informationen und Inhalte, die über Formulare, KI-Agenten oder andere Kontaktkanäle übermittelt werden.',
        ] },
        { heading: '3. Zwecke', paragraphs: [
          'Die Daten können zur Beantwortung von Anfragen, für Support, zur Vorbereitung oder Erbringung von Dienstleistungen, zur Terminverwaltung, zur Bearbeitung geschäftlicher Anfragen, zum Betrieb digitaler Funktionen und zur Erfüllung vertraglicher oder gesetzlicher Pflichten verwendet werden.',
        ] },
        { heading: '4. Dienstleister und Weitergabe', paragraphs: [
          'Daten können von Technologieanbietern verarbeitet werden, die für den Betrieb der Dienste erforderlich sind, etwa für Cloud-Infrastruktur, Zahlungen, Datenbanken, Telekommunikation, künstliche Intelligenz oder Kommunikationstools. Der Einsatz dieser Anbieter ist auf das für den jeweiligen Betrieb notwendige Maß beschränkt.',
        ] },
        { heading: '5. Rechte', paragraphs: [
          'Unter den jeweils geltenden Voraussetzungen können betroffene Personen Auskunft, Berichtigung, Einschränkung, Widerspruch oder Löschung ihrer Daten verlangen und weitere Rechte nach dem anwendbaren Recht ausüben.',
        ] },
        { heading: '6. Kontakt', paragraphs: [
          'Fragen zum Datenschutz und zu personenbezogenen Daten können an velksgroup@gmail.com gesendet werden.',
        ] },
      ],
    },
    cookies: {
      title: 'COOKIE-RICHTLINIE',
      sections: [
        { heading: '1. Was sind Cookies?', paragraphs: [
          'Cookies und vergleichbare lokale Technologien sind kleine Mechanismen, die der Browser nutzt, um Funktionen bereitzustellen, Einstellungen zu speichern und gegebenenfalls die Leistung des digitalen Angebots besser zu verstehen.',
        ] },
        { heading: '2. Erforderliche Cookies', paragraphs: [
          'Diese Website kann erforderliche Cookies und vergleichbare Technologien einsetzen, die für Sicherheit, Benutzeroberfläche, Spracheinstellungen und die Kontinuität von Funktionen notwendig sind.',
        ] },
        { heading: '3. Einstellungen und Messung', paragraphs: [
          'Gegebenenfalls können Mechanismen für Einstellungen oder Messungen eingesetzt werden, um Leistung und Nutzung der Website zu verstehen. Nicht erforderliche Technologien müssen die für den Nutzer geltenden Einwilligungsentscheidungen beachten.',
        ] },
        { heading: '4. Verwaltung', paragraphs: [
          'Nutzer können Cookies über die Einstellungen ihres Browsers und gegebenenfalls über die auf der Website angebotenen Einstellungen verwalten.',
        ] },
      ],
    },
    terms: {
      title: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
      sections: [
        { heading: '1. Nutzung', paragraphs: [
          'Der Zugang zu und die Nutzung von Websites, Produkten und Dienstleistungen von VELKS unterliegen diesen Bedingungen sowie den besonderen Geschäftsbedingungen der jeweils beauftragten Lösung.',
        ] },
        { heading: '2. Dienstleistungen', paragraphs: [
          'VELKS kann Dienstleistungen in den Bereichen Google Business, Unternehmenswebsite, ORION AI, E-Commerce, KI-Empfang, Automatisierung, Entwicklung und individuelle Projekte erbringen.',
        ] },
        { heading: '3. Preise und wiederkehrende Kosten', paragraphs: [
          'Eine Lösung kann eine Einmalzahlung, eine Erstimplementierung, eine monatliche Gebühr für den betreuten Betrieb oder eine individuelle Entwicklung umfassen. Die geltenden Preise und Bedingungen werden vor Vertragsabschluss mitgeteilt.',
        ] },
        { heading: '4. Ausführung', paragraphs: [
          'Die Ausführung hängt vom vereinbarten Leistungsumfang, der fälligen Zahlung, der Bereitstellung notwendiger Materialien und Zugänge sowie weiteren für das Projekt festgelegten Abhängigkeiten ab.',
        ] },
        { heading: '5. Dritte', paragraphs: [
          'Einige Lösungen können von externen Plattformen für Zahlungen, Cloud, künstliche Intelligenz, Telekommunikation, Datenbanken, APIs oder anderen für den Betrieb notwendigen Diensten abhängen.',
        ] },
        { heading: '6. Eigentum und Nutzung', paragraphs: [
          'Eigentum und Nutzungsrechte an Code, Design, Inhalten, Domains, Daten, Automatisierungen und anderen Vermögenswerten richten sich nach der beauftragten Dienstleistung und gegebenenfalls den entsprechenden Vertragsunterlagen.',
        ] },
        { heading: '7. Kündigung und Fortführung', paragraphs: [
          'Die Bedingungen für Kündigung, Verlängerung, Wartung oder Fortführung wiederkehrender Dienste richten sich nach der beauftragten Lösung und ihren Geschäftsbedingungen.',
        ] },
      ],
    },
    compliance: {
      title: 'EUROPÄISCHE COMPLIANCE',
      sections: [{ heading: 'Europäische Compliance', paragraphs: [
        'VELKS entwickelt und betreibt seine Systeme unter Berücksichtigung der geltenden Anforderungen der Europäischen Union in den Bereichen Datenschutz, digitaler Handel, Zahlungen und Verbraucherrechte.',
        'Die eingesetzte Infrastruktur und die Prozesse sind auf europäische und grenzüberschreitende Tätigkeiten ausgelegt und berücksichtigen die für den jeweiligen Dienst und Markt geltenden Pflichten.',
      ] }],
    },
    legal: {
      title: 'RECHTLICHE INFORMATIONEN',
      sections: [
        { heading: '1. Identifikation und Verantwortlichkeit', paragraphs: [
          'VELKS Group betreibt digitale Produkte, Dienstleistungen und Erlebnisse in den Bereichen Webentwicklung, künstliche Intelligenz, Automatisierung, digitale Infrastruktur und Geschäftswachstum.',
          'Die Vertragspartei, die Vertragsstruktur, die Rechnungsstellung und die für den jeweiligen Dienst geltenden Bedingungen werden im Angebot, im Checkout, im Vertrag oder in den entsprechenden Vertragsunterlagen benannt.',
        ] },
        { heading: '2. Beauftragung von Dienstleistungen', paragraphs: [
          'Die Beauftragung von VELKS-Lösungen kann je nach gewählter Lösung eine Einmalzahlung, eine Erstimplementierung, einen wiederkehrenden betreuten Betrieb oder eine individuelle Entwicklung umfassen.',
          'Leistungsumfang, Fristen, Verantwortlichkeiten, wiederkehrende Kosten und technische Abhängigkeiten werden vor der Ausführung festgelegt.',
        ] },
        { heading: '3. Geistiges Eigentum', paragraphs: [
          'Die Marke VELKS, das visuelle Erscheinungsbild, proprietärer Code, Schnittstellen, Komponenten, Automatisierungen, KI-Agenten, interne Systeme und weitere von VELKS entwickelte Vermögenswerte bleiben durch die anwendbaren Rechte des geistigen Eigentums geschützt.',
          'Eigentum und Nutzungsrechte an den dem Kunden übergebenen Vermögenswerten richten sich nach der beauftragten Dienstleistung.',
        ] },
        { heading: '4. Plattformen und Dritte', paragraphs: [
          'Einige Lösungen können Infrastruktur oder Technologiedienste Dritter nutzen, darunter Zahlungsabwicklung, Cloud, Datenbanken, künstliche Intelligenz, Telekommunikation oder APIs.',
          'Gegebenenfalls werden diese Abhängigkeiten zur Bereitstellung und zum Betrieb der beauftragten Lösung genutzt.',
        ] },
        { heading: '5. Haftung', paragraphs: [
          'VELKS verpflichtet sich, die beauftragten Dienstleistungen gemäß dem vereinbarten Leistungsumfang und mit angemessenen technischen Verfahren auszuführen.',
          'Geschäftsergebnisse, Suchmaschinenpositionen, Verkaufsvolumen oder finanzielle Erträge werden nicht garantiert, wenn sie von Faktoren außerhalb des technischen Betriebs von VELKS abhängen.',
        ] },
        { heading: '6. Rechtlicher Kontakt', paragraphs: [
          'Fragen zu Verträgen, Inhaberschaft, geistigem Eigentum, Datenschutz oder anderen rechtlichen Themen können an velksgroup@gmail.com gesendet werden.',
        ] },
      ],
    },
    corporate: corporateDocument({
      title: 'UNTERNEHMENSINFORMATIONEN',
      introduction: [
        'VELKS Group entwickelt Systeme für künstliche Intelligenz, Automatisierung, Software und digitale Infrastruktur, die auf Geschäftswachstum ausgerichtet sind.',
        'Die Tätigkeit verbindet Strategie, Engineering, digitale Nutzererlebnisse und Automatisierung für Unternehmen, die effizientere und stärker vernetzte Systeme benötigen.',
      ],
      founders: 'Gründer', presence: 'Präsenz', luxembourg: 'Luxemburg',
      operation: 'Betrieb und Entwicklung', channels: 'Offizielle Kanäle',
      network: 'Berufliches Netzwerk', companyLinkedIn: 'VELKS Group auf LinkedIn',
    }),
  }),
};
