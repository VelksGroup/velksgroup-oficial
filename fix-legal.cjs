const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// The best way to replace this is to find the whole switch block and replace it.
// The block is from `{modalType === 'privacy' && (` down to `)}` for all modalTypes.

// Let's replace the content dynamically.

const replacement = `                {modalType === 'privacy' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">1. Introdução / Introduction</h4>
                    <p>{currentLang === 'pt' ? 'A VELKS Group compromete-se a proteger a privacidade dos seus utilizadores. Em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia, garantimos que quaisquer dados pessoais recolhidos nas nossas demonstrações ou contactos são tratados de forma confidencial e com a máxima segurança.' : 'VELKS Group is committed to protecting your privacy. In full compliance with the European Union General Data Protection Regulation (GDPR), we ensure that any personal data collected in our demonstrations or contacts is treated confidentially and with maximum security.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">2. Recolha de Dados / Data Collection</h4>
                    <p>{currentLang === 'pt' ? 'Recolhemos apenas os dados fornecidos voluntariamente por si (como Nome, Endereço de Email, e Número de WhatsApp) para fins de comunicação comercial direta, simulação interativa, ou processamento de encomendas dos pacotes especificados.' : 'We only collect data voluntarily provided by you (such as Name, Email Address, and WhatsApp Number) for direct commercial communication, interactive simulation, or order processing.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">3. Retenção de Dados / Data Retention</h4>
                    <p>{currentLang === 'pt' ? 'Os seus dados não serão vendidos ou transferidos a terceiros. Serão apagados definitivamente mediante simples pedido por email enviado a velksgroup@gmail.com.' : 'Your data will not be sold or transferred to third parties. It will be permanently deleted upon simple request by email sent to velksgroup@gmail.com.'}</p>
                  </>
                )}
                {modalType === 'cookies' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">1. O que são Cookies? / What are Cookies?</h4>
                    <p>{currentLang === 'pt' ? 'Cookies são pequenos ficheiros de texto guardados no seu navegador para otimizar a experiência de carregamento do site e nos ajudar a analisar quais as secções que recebem maior tráfego.' : 'Cookies are small text files stored in your browser to optimize the site loading experience and help us analyze which sections receive the most traffic.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">2. Uso de Cookies neste Site / Cookie Usage</h4>
                    <p>{currentLang === 'pt' ? 'Este site utiliza cookies funcionais mínimos e identificadores locais temporários (como localStorage) para persistir o seu idioma escolhido, simular as mensagens do assistente inteligente Concierge IA, e reter o seu próprio consentimento de cookies para que não veja o banner em visitas subsequentes.' : 'This site uses minimal functional cookies and temporary local identifiers (like localStorage) to persist your chosen language, simulate messages from the smart AI Concierge, and retain your cookie consent.'}</p>
                  </>
                )}
                {modalType === 'terms' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">1. Termos de Utilização / Terms of Service</h4>
                    <p>{currentLang === 'pt' ? 'O conteúdo deste site tem fins meramente informativos e demonstrativos. A VELKS Group fornece soluções personalizadas e pacotes fechados de Google Maps e Websites com pagamentos únicos, sem subscrições recorrentes, sujeitos a contrato formal de prestação de serviços assinado bilateralmente antes da execução técnica.' : 'The content of this site is for informational and demonstrative purposes only. VELKS Group provides customized solutions and fixed packages for Google Maps and Websites with single payments, no recurring subscriptions, subject to a formal service contract.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">2. Propriedade Intelectual / Intellectual Property</h4>
                    <p>{currentLang === 'pt' ? 'O design, o motor de simulação de assistente IA 3D e todos os scripts integrados são propriedade intelectual da VELKS Group ou parceiros tecnológicos autorizados.' : 'The design, the 3D AI assistant simulation engine, and all integrated scripts are the intellectual property of VELKS Group or authorized technology partners.'}</p>
                  </>
                )}
                {modalType === 'compliance' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">{t.footer.europeanCompliance}</h4>
                    <p>{currentLang === 'pt' ? 'A VELKS Group opera sob os rigorosos padrões corporativos do Grão-Ducado de Luxemburgo e da União Europeia. Alinhamos todos os nossos processos, servidores, processamento de formulários e integradores de pagamento aos regulamentos da UE aplicáveis ao comércio eletrónico, proteção do consumidor local e concorrência justa.' : 'VELKS Group operates under the strict corporate standards of the Grand Duchy of Luxembourg and the European Union. We align all our processes to applicable EU regulations.'}</p>
                  </>
                )}
                {modalType === 'legal' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">{t.footer.legalDisclaimer}</h4>
                    <p>{currentLang === 'pt' ? 'VELKS Group. Sede Principal em Luxembourg: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxemburgo. Sede secundária em Coimbra, Portugal. Contacto oficial: velksgroup@gmail.com. Telemóvel: +33 761 56 96 86.' : 'VELKS Group. HQ: 57, Avenue de La Gare, L-1611 Luxembourg Gare. Secondary: Coimbra, Portugal. Contact: velksgroup@gmail.com. Phone: +33 761 56 96 86.'}</p>
                  </>
                )}`;

const blockStart = `{modalType === 'privacy' && (`;
const blockEndRegex = /<h4 className="font-bold text-white font-display text-sm">\{t\.footer\.legalDisclaimer\}<\/h4>\s*<p>VELKS Group[^<]*<\/p>\s*<\/>\s*\)}/;

const startIndex = content.indexOf(blockStart);
const endMatch = content.match(blockEndRegex);
const endIndex = endMatch.index + endMatch[0].length;

const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);

fs.writeFileSync(file, newContent);
console.log('done fixing legal');
