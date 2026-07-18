const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

content = content.replace(
  'Ter o Google Maps otimizado em três línguas (Francês, Alemão e Português) trouxe-nos dezenas de turistas diariamente. A VELKS foi rápida, profissional e focada no nosso retorno.',
  'O trabalho da VELKS no nosso Google Maps criou um monopólio local. Agora, intercetamos dezenas de turistas todos os dias antes sequer de verem a concorrência. Tráfego diário garantido e um retorno brutal na nossa faturação.'
);

content = content.replace(
  'Excelente serviço de suporte. Sem assinaturas mensais caras, pagámos uma vez pelo site e Google Maps e o resultado tem sido consistente. Transparência total.',
  'A loja online que a VELKS construiu transformou o nosso stand numa máquina de faturar. Agora vendemos viaturas para todo o país, 24 horas por dia, sem depender de visitas à porta. Escalaram as nossas vendas ao máximo.'
);

content = content.replace(
  'O pacote Google Maps e o site mudaram o nosso rumo. Antes dependíamos de indicações, hoje recebemos entre 3 a 5 chamadas de novos clientes todos os dias. O investimento pagou-se no primeiro mês.',
  'O ecossistema completo da VELKS eliminou a nossa dependência de indicações. Com a máquina de vendas web, IA e o Google dominado, recebemos chamadas diárias de clientes prontos a fechar obra. O investimento pagou-se em semanas.'
);

fs.writeFileSync('src/translations.ts', content, 'utf8');
console.log('Fixed new testimonials.');
