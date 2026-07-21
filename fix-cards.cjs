const fs = require('fs');

const file = 'src/components/ThreeHero.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `              <div className="grid grid-cols-2 gap-3 w-full md:w-[320px] shrink-0">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">
                    01. GOOGLE
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {currentLang === 'pt' ? 'Monopólio Local' : currentLang === 'es' ? 'Monopolio Local' : currentLang === 'it' ? 'Monopolio Locale' : currentLang === 'fr' ? 'Monopole Local' : currentLang === 'de' ? 'Lokales Monopol' : 'Local Monopoly'}
                  </span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">
                    {currentLang === 'pt' ? '02. WEBSITES' : currentLang === 'es' ? '02. WEBSITES' : currentLang === 'it' ? '02. SITI WEB' : currentLang === 'fr' ? '02. SITES WEB' : currentLang === 'de' ? '02. WEBSITES' : '02. WEBSITES'}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {currentLang === 'pt' ? 'Máquina de Vendas' : currentLang === 'es' ? 'Máquina de Ventas' : currentLang === 'it' ? 'Macchina Vendite' : currentLang === 'fr' ? 'Machine de Vente' : currentLang === 'de' ? 'Verkaufsmaschine' : 'Sales Machine'}
                  </span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">03. IA VELKS</span>
                  <span className="text-xs font-semibold text-white">
                    {currentLang === 'pt' ? 'Vendedor 24/7' : currentLang === 'es' ? 'Vendedor 24/7' : currentLang === 'it' ? 'Venditore 24/7' : currentLang === 'fr' ? 'Vendeur 24/7' : currentLang === 'de' ? 'Verkäufer 24/7' : '24/7 Salesman'}
                  </span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">
                    {currentLang === 'pt' ? '04. CLIENTES' : currentLang === 'es' ? '04. CLIENTES' : currentLang === 'it' ? '04. CLIENTI' : currentLang === 'fr' ? '04. CLIENTS' : currentLang === 'de' ? '04. KUNDEN' : '04. CLIENTS'}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {currentLang === 'pt' ? 'Prontos a Comprar' : currentLang === 'es' ? 'Listos para Comprar' : currentLang === 'it' ? 'Pronti a Comprare' : currentLang === 'fr' ? 'Prêts à Acheter' : currentLang === 'de' ? 'Kaufbereit' : 'Ready to Buy'}
                  </span>
                </div>
              </div>`;

const regex = /<div className="grid grid-cols-2 gap-3 w-full md:w-\[320px\] shrink-0">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/motion\.div>/;

const newBlock = replacement + `\n            </div>\n          </motion.div>\n`;

content = content.replace(regex, newBlock);
fs.writeFileSync(file, content);
console.log('done fixing cards');
