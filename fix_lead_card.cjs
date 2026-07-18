const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

const targetCard = `                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[650px] mx-auto mt-4 px-6 pt-6 pb-12 rounded-2xl bg-[#0b0b0d]/60 backdrop-blur-xl border border-green-500/30 relative shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex flex-col gap-4 shrink-0 overflow-visible"
                    >
                      {/* Progress bar at the top */}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500/50 to-green-400 rounded-tl-2xl rounded-tr-2xl"
                      />
                      {/* Green Glow Background */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none" 
                      />
                      
                      <div className="flex items-center gap-5 relative z-10">
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
                    </motion.div>`;

const replacementCard = `                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[650px] mx-auto mt-4 p-8 rounded-2xl bg-gradient-to-b from-[#0b0b0d]/90 to-[#0b0b0d]/60 backdrop-blur-2xl border border-green-500/40 relative shadow-[0_15px_50px_rgba(34,197,94,0.15)] flex flex-col items-center text-center gap-6 shrink-0 overflow-hidden"
                    >
                      {/* Progress bar at the top */}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-green-500 to-green-300"
                      />
                      
                      {/* Background Glow */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent pointer-events-none" 
                      />
                      
                      {/* Center Icon */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                        className="relative z-10 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(34,197,94,0.4)] border border-green-500/40"
                      >
                        <CheckCircle2 size={32} className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                      </motion.div>
                      
                      <div className="flex flex-col gap-3 relative z-10 w-full">
                        <h4 className="text-lg md:text-xl font-display font-bold text-white tracking-widest uppercase">
                          {currentLang === 'pt' ? 'Pedido Entregue' : 'Delivered'}
                        </h4>
                        <div className="h-[1px] w-12 bg-green-500/50 mx-auto" />
                        <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed px-2">
                          {currentLang === 'pt' ? 'A nossa equipa foi notificada e entrará em contacto consigo.' : 
                           'Our team has been notified and will contact you shortly.'}
                        </p>
                        <div className="mt-2 inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mx-auto">
                          <span className="text-green-400 font-mono text-[10px] md:text-xs font-medium uppercase tracking-wider">
                            {currentLang === 'pt' ? '✓ Sistema Sincronizado' : '✓ System Synced'}
                          </span>
                        </div>
                      </div>
                    </motion.div>`;

if (code.includes('flex items-center gap-5 relative z-10')) {
  code = code.replace(targetCard, replacementCard);
  fs.writeFileSync('src/components/WidgetSection.tsx', code);
  console.log("Successfully rebuilt the lead card to be vertical and clean.");
} else {
  console.log("Could not find the target card to replace.");
}
