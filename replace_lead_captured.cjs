const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

const target = `                {/* Simulated Lead voucher showcase when captured */}
                <AnimatePresence>
                  {leadCaptured && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0, y: 15 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 mt-3 flex items-start gap-4 relative overflow-hidden shadow-[0_8px_30px_rgba(34,197,94,0.12)]"
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                        <CheckCircle2 size={20} className="text-green-400" />
                      </div>
                      
                      <div className="flex flex-col gap-1 relative z-10">
                        <h4 className="text-sm font-display font-semibold text-white tracking-wide">
                          {currentLang === 'pt' ? 'Pedido Entregue à Equipa' : 'Request Sent to Team'}
                        </h4>
                        <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                          {currentLang === 'pt' ? 'O seu contacto foi encaminhado com sucesso e o WhatsApp sincronizado. Falarão consigo brevemente.' : 
                           'Your contact was successfully forwarded and WhatsApp synchronized. They will reach out shortly.'}
                        </p>
                      </div>
                      
                      {/* Golden particles overlay */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-gold rounded-full"
                          initial={{ top: '100%', left: \`\${20 + i * 30}%\`, opacity: 0 }}
                          animate={{ top: '-10%', opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5 + i * 0.5, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>`;

const replacement = `                {/* Simulated Lead voucher showcase when captured */}
                <AnimatePresence>
                  {leadCaptured && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[650px] mx-auto mt-4 p-6 rounded-2xl bg-[#0b0b0d]/60 backdrop-blur-xl border border-green-500/30 relative overflow-hidden shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex flex-col gap-4"
                    >
                      {/* Progress bar at the top */}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500/50 to-green-400"
                      />

                      {/* Green Glow Background */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none" 
                      />
                      
                      <div className="flex items-start gap-5 relative z-10">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                          className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30"
                        >
                          <CheckCircle2 size={24} className="text-green-400" />
                        </motion.div>
                        
                        <div className="flex flex-col gap-2">
                          <h4 className="text-base md:text-lg font-display font-bold text-white tracking-wide uppercase">
                            {currentLang === 'pt' ? 'Pedido Entregue com Sucesso' : 'Request Delivered Successfully'}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                            {currentLang === 'pt' ? 'A equipa foi notificada e receberá este contacto imediatamente.' : 
                             'The team has been notified and will receive this contact immediately.'}
                            <br />
                            <span className="text-green-400/80 font-mono text-[10px] md:text-xs mt-1 block">
                              {currentLang === 'pt' ? '✓ WhatsApp sincronizado. Lead registado.' : '✓ WhatsApp synced. Lead registered.'}
                            </span>
                          </p>
                        </div>
                      </div>
                      
                      {/* Golden particles overlay */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-gold rounded-full"
                          initial={{ top: '100%', left: \`\${15 + i * 20}%\`, opacity: 0 }}
                          animate={{ top: '-10%', opacity: [0, 1, 0] }}
                          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>`;

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('src/components/WidgetSection.tsx', code);
  console.log("Successfully replaced Lead voucher showcase.");
} else {
  console.log("Could not find the target string.");
}
