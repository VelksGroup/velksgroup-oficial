const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

// 1. Add chatStep state and RotateCcw icon
code = code.replace(
  "import { Send, CheckCircle2, ArrowRight } from 'lucide-react';",
  "import { Send, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';"
);

code = code.replace(
  "const [leadCaptured, setLeadCaptured] = useState(false);",
  "const [leadCaptured, setLeadCaptured] = useState(false);\n  const [chatStep, setChatStep] = useState(0);"
);

// 2. Update resetChatbot
code = code.replace(
  "setCustomInput('');\n    setBotIsTyping(true);",
  "setCustomInput('');\n    setChatStep(0);\n    setBotIsTyping(true);"
);

// 3. Update handleBotOptionClick
code = code.replace(
  /const handleBotOptionClick = \(option: string\) => {([\s\S]*?)    }, 1500\);\n  };/,
  `const handleBotOptionClick = (option: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: 'user', text: option, time }]);
    setBotIsTyping(true);
    setChatStep(1);

    const availableLang = botPresets[selectedBotPreset][currentLang as keyof typeof botPresets[typeof selectedBotPreset]] ? currentLang : 'en';

    setTimeout(() => {
      const response = (botPresets[selectedBotPreset][availableLang as keyof typeof botPresets[typeof selectedBotPreset]] as any).responses[option] || (botPresets[selectedBotPreset][availableLang as keyof typeof botPresets[typeof selectedBotPreset]] as any).collecting;
      
      setChatMessages(prev => [...prev, { sender: 'bot', text: response, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setSimulatedLead({ name: '', phone: '', interest: option });
      setBotIsTyping(false);
    }, 1500);
  };`
);

// 4. Update handleChatSubmit
code = code.replace(
  /const handleChatSubmit = \(e: React\.FormEvent\) => {([\s\S]*?)  };\n\n  const chatContainerRef/m,
  `const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: 'user', text: customInput, time }]);
    
    const submittedInput = customInput;
    setCustomInput('');
    setBotIsTyping(true);

    const availableLang = botPresets[selectedBotPreset][currentLang as keyof typeof botPresets[typeof selectedBotPreset]] ? currentLang : 'en';

    setTimeout(() => {
      if (chatStep === 0 || chatStep === 1) {
        setChatMessages(prev => [...prev, { sender: 'bot', text: (botPresets[selectedBotPreset][availableLang as keyof typeof botPresets[typeof selectedBotPreset]] as any).collecting, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setChatStep(2);
        setBotIsTyping(false);
      } else if (chatStep === 2) {
        setChatMessages(prev => [...prev, { sender: 'bot', text: currentLang === 'pt' ? 'Excelente. Recebemos os seus dados.' : 'Excellent. We received your details.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setBotIsTyping(false);
        setChatStep(3);
        
        setTimeout(() => {
          setSimulatedLead(prev => ({ name: submittedInput.split(' ')[0] || "Visitante", phone: '+351 912 345 678', interest: prev?.interest || selectedBotPreset }));
          setLeadCaptured(true);
        }, 800);
      } else {
        setChatMessages(prev => [...prev, { sender: 'bot', text: currentLang === 'pt' ? 'Obrigado! A nossa equipa já foi notificada.' : 'Thank you! Our team has been notified.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setBotIsTyping(false);
      }
    }, 1500);
  };

  const chatContainerRef`
);

// 5. Update Real-time floating metrics overlay removal from outside and moving to header
code = code.replace(
  `              {/* Real-time floating metrics overlay */}
              <AnimatePresence>
                {metricsVisible && !leadCaptured && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-20 right-[-10px] bg-black/60 backdrop-blur-md border border-gold/20 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-50 pointer-events-none"
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white font-mono">{currentLang === 'pt' ? 'Resposta em 1.2s' : 'Response in 1.2s'}</span>
                  </motion.div>
                )}
              </AnimatePresence>`,
  ``
);

code = code.replace(
  /                  <div className="w-10 h-10 rounded-xl bg-gold\/10 border border-gold\/30 flex items-center justify-center relative shadow-\[0_0_15px_rgba\(212,175,55,0\.2\)\]\">\n                    <div className="absolute inset-0 bg-gold rounded-xl animate-pulse opacity-20" \/>\n                    <img src="\/logo-oficial\.png" alt="VELKS" className="w-6 h-6 object-contain relative z-10" \/>\n                  <\/div>\n                  <div className="flex flex-col">\n                    <h4 className="font-display font-bold text-white text-sm md:text-base leading-tight">VELKS AI Concierge<\/h4>\n                    <div className="flex items-center gap-1\.5 mt-0\.5">\n                      <div className="relative flex h-2 w-2">\n                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"><\/span>\n                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"><\/span>\n                      <\/div>\n                      <span className="text-\[10px\] text-green-400 font-mono tracking-wider font-semibold">AGENT LIVE<\/span>\n                    <\/div>\n                  <\/div>/m,
  `                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <img src="/logo-oficial.png" alt="VELKS" className="w-6 h-6 object-contain relative z-10" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-display font-bold text-white text-sm md:text-base leading-tight">VELKS AI Concierge</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex items-center gap-1.5">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span className="text-[10px] text-green-400 font-mono tracking-wider font-semibold">AGENT LIVE</span>
                      </div>
                      
                      <AnimatePresence>
                        {metricsVisible && !leadCaptured && (
                          <motion.div 
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -5 }}
                            className="flex items-center gap-1.5 border-l border-white/10 pl-2"
                          >
                            <span className="text-[9px] text-gray-400 font-mono tracking-wide">{currentLang === 'pt' ? 'Resposta em 1.2s' : 'Response in 1.2s'}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>`
);

code = code.replace(
  `                <div className="flex items-center gap-3">`,
  `                <div className="flex items-center gap-3">`
);

code = code.replace(
  `              <div className="p-5 bg-gradient-to-b from-white/[0.05] to-transparent border-b border-gold/15 flex items-center justify-between shrink-0 relative z-10">`,
  `              <div className="p-5 bg-gradient-to-b from-white/[0.05] to-transparent border-b border-gold/15 flex items-center justify-between shrink-0 relative z-10">`
);
// Insert reset button inside the header
const headerEnd = `                  </div>\n                </div>\n              </div>`;
const newHeaderEnd = `                  </div>\n                </div>\n                <button \n                  onClick={() => resetChatbot(selectedBotPreset, currentLang)}\n                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all cursor-pointer group"\n                  title="Reiniciar Demonstração"\n                >\n                  <RotateCcw size={14} className="group-hover:-rotate-180 transition-transform duration-500" />\n                </button>\n              </div>`;
code = code.replace(headerEnd, newHeaderEnd);


// 6. Update preset selector
code = code.replace(
  /              \{\/\* Preset Selector \*\/\}[\s\S]*?              \{\/\* Conversation area \*\/\}/m,
  `              {/* Preset Selector */}
              <div className="flex bg-[#0b0b0d] border-b border-gold/15 shrink-0 z-10 relative">
                {['restaurante', 'imobiliaria', 'clinica', 'servicos'].map((preset) => {
                  const isActive = selectedBotPreset === preset;
                  const icons = { restaurante: '🍔', imobiliaria: '🏠', clinica: '🩺', servicos: '🔨' };
                  const labels = { pt: { restaurante: 'Restaurante', imobiliaria: 'Imóveis', clinica: 'Clínica', servicos: 'Obras' }, en: { restaurante: 'Food', imobiliaria: 'Estate', clinica: 'Clinic', servicos: 'Build' }};
                  
                  return (
                    <button 
                      key={preset}
                      onClick={() => resetChatbot(preset as BotPresetKey, currentLang)}
                      className={\`flex-1 py-3 transition-all duration-300 cursor-pointer border-r border-white/5 flex flex-col items-center justify-center gap-1.5 relative overflow-hidden group\`}
                    >
                      {isActive && (
                        <motion.div layoutId="activeTab" className="absolute inset-0 bg-gold/10" transition={{ duration: 0.3 }} />
                      )}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
                      )}
                      <span className={\`text-xl drop-shadow-md transition-all duration-300 \${isActive ? 'scale-110' : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110'}\`}>
                        {(icons as any)[preset]}
                      </span>
                      <span className={\`text-[9px] font-mono tracking-wide uppercase transition-colors duration-300 \${isActive ? 'text-gold font-bold' : 'text-gray-500 group-hover:text-gray-300'}\`}>
                        {currentLang === 'pt' ? (labels.pt as any)[preset] : (labels.en as any)[preset]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Conversation area */}`
);

// 7. Simulated lead voucher showcase replacement
code = code.replace(
  /                \{\/\* Simulated Lead voucher showcase when captured \*\/\}[\s\S]*?              <\/div>/m,
  `                {/* Simulated Lead voucher showcase when captured */}
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
                </AnimatePresence>
              </div>`
);

fs.writeFileSync('src/components/WidgetSection.tsx', code);
