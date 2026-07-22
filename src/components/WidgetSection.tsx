import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { Language } from '../translations';
import { Send, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { botPresets } from '../botPresets';

// Provide types so TS is happy
type BotPresetKey = 'restaurante' | 'imobiliaria' | 'clinica' | 'servicos';

interface WidgetSectionProps {
  t: any;
  currentLang: Language;
  widgetRef: React.RefObject<HTMLDivElement>;
}

export const WidgetSection: React.FC<WidgetSectionProps> = ({ t, currentLang, widgetRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Background parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // --- BOT LOGIC ---
  const [chatMessages, setChatMessages] = useState<{ sender: 'bot' | 'user'; text: string; time: string }[]>([]);
  const [botIsTyping, setBotIsTyping] = useState(false);
  const [selectedBotPreset, setSelectedBotPreset] = useState<BotPresetKey>('restaurante');
  const [customInput, setCustomInput] = useState('');
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [simulatedLead, setSimulatedLead] = useState<{name: string, phone: string, interest: string} | null>(null);
  
  const resetChatbot = (preset: BotPresetKey, lang: Language) => {
    setSelectedBotPreset(preset);
    setChatMessages([]);
    setLeadCaptured(false);
    setSimulatedLead(null);
    setCustomInput('');
    setChatStep(0);
    setBotIsTyping(true);
    
    // Check if lang exists in preset, fallback to english or first available
    const availableLang = botPresets[preset][lang as keyof typeof botPresets[typeof preset]] ? lang : 'en';
    
    setTimeout(() => {
      setChatMessages([
        { sender: 'bot', text: (botPresets[preset][availableLang as keyof typeof botPresets[typeof preset]] as any).welcome, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setBotIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    resetChatbot(selectedBotPreset, currentLang);
  }, [selectedBotPreset, currentLang]);

  const handleBotOptionClick = (option: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: 'user', text: option, time }]);
    setBotIsTyping(true);
    setChatStep(1);

    const availableLang = botPresets[selectedBotPreset][currentLang as keyof any] ? currentLang : 'en';

    setTimeout(() => {
      const response = (botPresets[selectedBotPreset][availableLang as keyof any] as any).responses[option] || (botPresets[selectedBotPreset][availableLang as keyof any] as any).collecting;
      
      setChatMessages(prev => [...prev, { sender: 'bot', text: response, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setSimulatedLead({ name: '', phone: '', interest: option });
      setBotIsTyping(false);
    }, 1500);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: 'user', text: customInput, time }]);
    
    const submittedInput = customInput;
    setCustomInput('');
    setBotIsTyping(true);

    const availableLang = botPresets[selectedBotPreset][currentLang as keyof any] ? currentLang : 'en';

    setTimeout(() => {
      if (chatStep === 0 || chatStep === 1) {
        setChatMessages(prev => [...prev, { sender: 'bot', text: (botPresets[selectedBotPreset][availableLang as keyof any] as any).collecting, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setChatStep(2);
        setBotIsTyping(false);
      } else if (chatStep === 2) {
        setChatMessages(prev => [...prev, { sender: 'bot', text: currentLang === 'pt' ? 'Excelente. Recebemos os seus dados.' : currentLang === 'es' ? 'Excelente. Recibimos sus datos.' : currentLang === 'it' ? 'Eccellente. Abbiamo ricevuto i tuoi dati.' : currentLang === 'fr' ? 'Excellent. Nous avons reçu vos coordonnées.' : currentLang === 'de' ? 'Ausgezeichnet. Wir haben Ihre Daten erhalten.' : 'Excellent. We received your details.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setBotIsTyping(false);
        setChatStep(3);
        
        setTimeout(() => {
          setSimulatedLead(prev => ({ name: submittedInput.split(' ')[0] || "Visitante", phone: '+351 912 345 678', interest: prev?.interest || selectedBotPreset }));
          setLeadCaptured(true);
        }, 800);
      } else {
        setChatMessages(prev => [...prev, { sender: 'bot', text: currentLang === 'pt' ? 'Obrigado! A nossa equipa já foi notificada.' : currentLang === 'es' ? '¡Gracias! Nuestro equipo ya ha sido notificado.' : currentLang === 'it' ? 'Grazie! Il nostro team è stato avvisato.' : currentLang === 'fr' ? 'Merci ! Notre équipe a été informée.' : currentLang === 'de' ? 'Danke! Unser Team wurde benachrichtigt.' : 'Thank you! Our team has been notified.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setBotIsTyping(false);
      }
    }, 1500);
  };

  const chatContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, botIsTyping, leadCaptured]);

  // View triggering for steps
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-10%" });

  // Floating metrics
  const [metricsVisible, setMetricsVisible] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setMetricsVisible(v => !v);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={(node) => {
      if (typeof widgetRef === 'function') widgetRef(node);
      else if (widgetRef) (widgetRef as any).current = node;
      (containerRef as any).current = node;
    }} id="velks-widget-demo" className="pt-0 pb-16 md:pb-24 px-4 bg-obsidian relative overflow-hidden">
      
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep blue/gold blended core glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]  opacity-50"
          style={{ y: yParallaxSlow, WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', background: 'radial-gradient(circle, rgba(14,24,43,0.8) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)' }}
        />
        
        {/* Soft Golden Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
            
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: ["-10vh", "10vh", "-10vh"],
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 10 + (i % 5) * 2,
              repeat: Infinity,
              ease: "linear",
              delay: (i % 3) * 1.5
            }}
          />
        ))}

        {/* Dynamic Abstract Geometry */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
          
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(75deg) scale(3) translateY(-100px)'
          }}
          animate={{ backgroundPosition: ['0px 0px', '0px 40px'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Gold Downwards Arrow Only */}
        <div className="w-full flex flex-col justify-center items-center relative z-20 mb-4 h-16">
          <motion.div 
            className="w-4 h-4 border-b-2 border-r-2 border-gold rotate-45"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 flex flex-col gap-4 items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[4px] text-gold font-bold px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 sm:backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            {currentLang === 'pt' ? 'PROVA DE AUTOMATIZAÇÃO INTERATIVA' : currentLang === 'es' ? 'PRUEBA DE AUTOMATIZACIÓN INTERACTIVA' : currentLang === 'it' ? 'PROVA DI AUTOMAZIONE INTERATTIVA' : currentLang === 'fr' ? 'PREUVE D\'AUTOMATISATION INTERACTIVE' : currentLang === 'de' ? 'INTERAKTIVE AUTOMATISIERUNGS-DEMO' : 'INTERACTIVE DEMO'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight drop-shadow-lg break-words"
          >
            {t.widget.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[2px] w-16 bg-gold mx-auto" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-xl text-gray-300 font-light leading-relaxed"
          >
            {t.widget.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Flow Explanation (3-second block reader) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8 relative" ref={stepsRef}>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider text-gold-light">
                {t.widget.capabilitiesTitle}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                {currentLang === 'pt' ? 'Veja como guiamos o utilizador desde a descoberta até ao agendamento sem que precise de responder a um único toque.' : 
                 currentLang === 'es' ? 'Vea cómo guiamos al usuario desde el descubrimiento hasta la cita sin que tenga que escribir una sola palabra.' : 
                 currentLang === 'it' ? 'Guarda come guidiamo l\'utente dalla scoperta all\'appuntamento senza che debba rispondere a un solo tocco.' : 
                 currentLang === 'fr' ? 'Voyez comment nous guidons l\'utilisateur de la découverte au rendez-vous sans que vous n\'ayez à taper un seul mot.' : 
                 currentLang === 'de' ? 'Sehen Sie, wie wir den Benutzer von der Entdeckung bis zur Terminbuchung führen, ohne dass Sie ein einziges Wort tippen müssen.' : 
                 currentLang === 'en' ? 'Observe how we guide the user from simple curiosity to a confirmed booking without you typing a single word.' : 
                 'Guarda come guidiamo l\'utente dalla curiosità alla prenotazione finale senza che tu muova un dito.'}
              </p>
            </div>
            
            {/* Step checklist blocks */}
            <div className="flex flex-col gap-4 relative">
              {/* Connecting Pipeline Line */}
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: stepsInView ? "100%" : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-[15px] top-4 w-[2px] bg-gradient-to-b from-gold via-gold/50 to-transparent -z-10"
              />

              {t.widget.steps.slice(0, 5).map((step: string, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -30 }}
                  animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] sm:backdrop-blur-md border border-white/5 hover:border-gold/30 hover:bg-white/[0.05] hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0b0b0d] border border-gold/40 flex items-center justify-center font-mono text-sm text-gold font-bold shrink-0 group-hover:bg-gold group-hover:text-black transition-colors shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                    {idx + 1}
                  </div>
                  <span className="text-sm md:text-base text-gray-300 font-light mt-1 group-hover:text-white transition-colors">{step}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="p-5 rounded-xl border border-gold/40 bg-gold/10 sm:backdrop-blur-md flex gap-4 items-center shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20" />
                <CheckCircle2 size={24} className="text-gold shrink-0 relative z-10" />
              </div>
              <span className="text-sm md:text-base text-gold-light tracking-wide font-mono font-medium">{t.widget.steps[6] || "Modelo de Linguagem altamente treinado."}</span>
            </motion.div>
          </div>

          {/* Right Column: The AI Simulator */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-md h-[600px] flex flex-col bg-[#0b0b0d]/80 sm:backdrop-blur-2xl rounded-[2rem] border border-gold/20 shadow-[0_30px_60px_rgba(0,0,0,0.6),_0_0_40px_rgba(212,175,55,0.1)] overflow-hidden relative group"
            >
              {/* Dynamic glowing edges on desktop (simulated by a gradient border) */}
              <div className="absolute inset-0 rounded-[2rem] border-[1px] border-transparent bg-gradient-to-br from-gold/40 via-transparent to-blue-500/20 [mask-image:linear-gradient(#fff,transparent)] pointer-events-none" />



              {/* Chat Header */}
              <div className="p-5 bg-gradient-to-b from-white/[0.05] to-transparent border-b border-gold/15 flex items-center justify-between shrink-0 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <img loading="lazy" src="/logo-oficial.png" alt="VELKS" className="w-6 h-6 object-contain relative z-10" />
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
                            <span className="text-[9px] text-gray-400 font-mono tracking-wide">{t.widget.responseTime}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <button aria-label="Button" 
                  onClick={() => resetChatbot(selectedBotPreset, currentLang)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all cursor-pointer group"
                  title={t.widget.resetTitle}
                >
                  <RotateCcw size={14} className="group-hover:-rotate-180 transition-transform duration-500" />
                </button>
              </div>

              {/* Preset Selector */}
              <div className="flex bg-[#0b0b0d] border-b border-gold/15 shrink-0 z-10 relative">
                {['restaurante', 'imobiliaria', 'clinica', 'servicos'].map((preset) => {
                  const isActive = selectedBotPreset === preset;
                  const icons = { restaurante: '🍔', imobiliaria: '🏠', clinica: '🩺', servicos: '🔨' };
                  const labels: Record<string, Record<string, string>> = { 
                    pt: { restaurante: 'Restaurante', imobiliaria: 'Imóveis', clinica: 'Clínica', servicos: 'Obras' }, 
                    en: { restaurante: 'Food', imobiliaria: 'Estate', clinica: 'Clinic', servicos: 'Build' },
                    es: { restaurante: 'Restaurante', imobiliaria: 'Inmuebles', clinica: 'Clínica', servicos: 'Obras' },
                    fr: { restaurante: 'Resto', imobiliaria: 'Immo', clinica: 'Clinique', servicos: 'BTP' },
                    de: { restaurante: 'Gastro', imobiliaria: 'Immo', clinica: 'Klinik', servicos: 'Handwerk' },
                    it: { restaurante: 'Ristorante', imobiliaria: 'Immobili', clinica: 'Clinica', servicos: 'Edilizia' }
                  };
                  const label = labels[currentLang]?.[preset] || labels.en[preset];
                  
                  return (
                    <button aria-label="Button" 
                      key={preset}
                      onClick={() => resetChatbot(preset as BotPresetKey, currentLang)}
                      className={`flex-1 py-3 transition-all duration-300 cursor-pointer border-r border-white/5 flex flex-col items-center justify-center gap-1.5 relative overflow-hidden group`}
                    >
                      {isActive && (
                        <motion.div layoutId="activeTab" className="absolute inset-0 bg-gold/10" transition={{ duration: 0.3 }} />
                      )}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
                      )}
                      <span className={`text-xl drop-shadow-md transition-all duration-300 ${isActive ? 'scale-110' : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110'}`}>
                        {(icons as any)[preset]}
                      </span>
                      <span className={`text-[9px] font-mono tracking-wide uppercase transition-colors duration-300 ${isActive ? 'text-gold font-bold' : 'text-gray-500 group-hover:text-gray-300'}`}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Conversation area */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-[#0b0b0d]/50 relative z-10 scroll-smooth">
                <AnimatePresence>
                  {chatMessages.map((msg, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                    >
                      <div className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed shadow-lg sm:backdrop-blur-sm ${
                        msg.sender === 'user' 
                          ? 'bg-gradient-to-br from-gold to-gold-dark text-black rounded-tr-none font-medium' 
                          : 'bg-[#16161a] border border-white/10 text-gray-200 rounded-tl-none font-light'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-gray-500 font-mono mt-1">{msg.time}</span>
                    </motion.div>
                  ))}
                  
                  {botIsTyping && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="self-start flex items-center gap-2 bg-[#16161a] border border-white/10 px-4 py-3.5 rounded-2xl rounded-tl-none max-w-[80%] shadow-lg"
                    >
                      <div className="flex gap-1.5">
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Show direct quick replies if in fresh welcome state */}
                {chatMessages.length === 1 && !botIsTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mt-1 self-start"
                  >
                    {((botPresets[selectedBotPreset] as any)[botPresets[selectedBotPreset].hasOwnProperty(currentLang) ? currentLang : 'en'] as any).options.map((option: string, idx: number) => (
                      <motion.button aria-label="Button"
                        key={idx}
                        whileHover={{ scale: 1.03, backgroundColor: 'rgba(212, 175, 55, 0.25)', borderColor: 'rgba(212, 175, 55, 0.6)' }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleBotOptionClick(option)}
                        className="px-4 py-2.5 rounded-xl bg-gold/10 border border-gold/30 text-gold text-xs font-semibold cursor-pointer transition-all flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                      >
                        {option}
                        <ArrowRight size={12} className="opacity-70" />
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {/* Simulated Lead voucher showcase when captured */}
                <AnimatePresence>
                  {leadCaptured && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[650px] mx-auto mt-4 px-6 pt-6 pb-12 rounded-2xl bg-[#0b0b0d]/60 sm:backdrop-blur-xl border border-green-500/30 relative shadow-[0_10px_40px_rgba(34,197,94,0.15)] flex flex-col gap-4 shrink-0 overflow-visible"
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
                            {currentLang === 'pt' ? 'Pedido Entregue com Sucesso' : currentLang === 'es' ? 'Pedido Entregado con Éxito' : currentLang === 'it' ? 'Richiesta Consegnata con Successo' : currentLang === 'fr' ? 'Demande Livrée avec Succès' : currentLang === 'de' ? 'Anfrage Erfolgreich Zugestellt' : 'Request Delivered Successfully'}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                            {currentLang === 'pt' ? 'A equipa foi notificada e receberá este contacto imediatamente.' : currentLang === 'es' ? 'El equipo ha sido notificado y recibirá este contacto de inmediato.' : currentLang === 'it' ? 'Il team è stato avvisato e riceverà questo contatto immediatamente.' : currentLang === 'fr' ? 'L\'équipe a été informée et recevra ce contact immédiatement.' : currentLang === 'de' ? 'Das Team wurde benachrichtigt und wird diesen Kontakt umgehend erhalten.' : 
                             'The team has been notified and will receive this contact immediately.'}
                            <br />
                            <span className="text-green-400/80 font-mono text-[10px] md:text-xs mt-1 block">
                              {currentLang === 'pt' ? '✓ WhatsApp sincronizado. Lead registado.' : currentLang === 'es' ? '✓ WhatsApp sincronizado. Lead registrado.' : currentLang === 'it' ? '✓ WhatsApp sincronizzato. Lead registrato.' : currentLang === 'fr' ? '✓ WhatsApp synchronisé. Lead enregistré.' : currentLang === 'de' ? '✓ WhatsApp synchronisiert. Lead registriert.' : '✓ WhatsApp synced. Lead registered.'}
                            </span>
                          </p>
                        </div>
                      </div>
                      
                      {/* Golden particles overlay */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-gold rounded-full"
                          initial={{ top: '100%', left: `${15 + i * 20}%`, opacity: 0 }}
                          animate={{ top: '-10%', opacity: [0, 1, 0] }}
                          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input box */}
              <form onSubmit={handleChatSubmit} className="p-4 bg-[#0b0b0d] border-t border-gold/20 flex gap-3 shrink-0 z-10 relative">
                <input 
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder={t.widget.placeholderInput}
                  className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:border-gold/60 focus:bg-[#16161a] text-white font-light placeholder:text-gray-600 transition-all shadow-inner"
                />
                <button aria-label="Button" 
                  type="submit"
                  disabled={botIsTyping}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark hover:brightness-110 flex items-center justify-center text-black shrink-0 transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] active:scale-95 ${botIsTyping ? 'opacity-50 grayscale cursor-not-allowed' : ''}`}
                >
                  <Send size={18} className="ml-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
