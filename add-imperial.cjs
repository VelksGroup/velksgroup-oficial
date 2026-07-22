const fs = require('fs');
const file = 'src/components/PricingSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const imperialCard = `
        {/* Imperial Plan (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative rounded-3xl bg-gradient-to-b from-[#111116] to-[#0a0a0d] border border-gold/30 hover:border-gold/50 transition-all duration-700 overflow-hidden group shadow-[0_0_40px_rgba(212,175,55,0.05)] hover:shadow-[0_0_60px_rgba(212,175,55,0.1)]"
        >
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start relative z-10">
            {/* Left side: Header & Price */}
            <div className="flex-1 flex flex-col gap-8 w-full">
              <div className="flex justify-between items-start">
                <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-gold bg-gold/10 border border-gold/20 shadow-inner">
                  05. IMPERIAL
                </span>
                <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] px-4 py-1.5 rounded-full text-black bg-gold font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  Ultimate Control
                </span>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold transition-all duration-500">
                  {customPlan.title}
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base">Pack Integrado</p>
              </div>
              
              <div className="flex flex-col gap-4 border-b border-white/5 pb-8 relative">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    {customPlan.price}
                  </span>
                </div>
                <div className="inline-flex">
                  <span className="text-xs text-gold/70 font-mono tracking-[0.2em] uppercase border border-gold/20 px-3 py-1 rounded-sm bg-gold/5">
                    {currentLang === 'pt' ? 'Pagamento Único' : currentLang === 'es' ? 'Pago Único' : currentLang === 'it' ? 'Pagamento Unico' : currentLang === 'fr' ? 'Paiement Unique' : currentLang === 'de' ? 'Einmalige Zahlung' : 'One-Time Payment'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right side: Features & CTA */}
            <div className="flex-[1.5] flex flex-col gap-10 w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {customPlan.features.map((feature: string, i: number) => (
                  <motion.li 
                    key={i} 
                    initial={false}
                    className="flex items-start gap-4 text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors duration-300"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-gold bg-gold/10 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(customPlan.tracking)}
                className="w-full py-5 md:py-6 px-4 rounded-xl font-display font-bold text-xs md:text-sm uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden bg-gradient-to-r from-gold/80 to-gold text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-[1.02]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <MessageSquare size={20} className="flex-shrink-0" />
                <span className="relative z-10 break-words text-center">{customPlan.cta}</span>
              </button>
            </div>
          </div>
        </motion.div>
`;

content = content.replace('        </div>\n      </div>\n    </section>', '        </div>\n' + imperialCard + '\n      </div>\n    </section>');

fs.writeFileSync(file, content);
console.log('Added Imperial Card back');
