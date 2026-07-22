import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Language } from '../translations';
import { Globe, ShieldCheck } from 'lucide-react';

interface AuthoritySectionProps {
  t: any;
  currentLang: Language;
}

// Helper to animate numbers
const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({ t, currentLang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="pt-16 pb-0 md:pt-24 md:pb-0 px-4 bg-obsidian-light relative overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      {/* Glow behind */}
      <motion.div 
        style={{ y: yParallaxSlow }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" 
      />

      {/* Translucent Geometric Lines */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          y: yParallaxFast,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          transform: 'perspective(500px) rotateX(45deg) scale(2)'
        }}
      />
      
      {/* Subtle Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/40 rounded-full blur-[1px]"
            animate={{
              y: ["-20vh", "120vh"],
              x: [`${Math.sin(i) * 10}vw`, `${Math.cos(i) * 10}vw`],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left side: Premium Authority Texts */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <span className="text-xs font-mono uppercase tracking-[4px] text-gold font-bold flex items-center gap-3">
                <Globe size={16} className="text-gold animate-spin-slow drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                {currentLang === 'pt' ? 'PRESENÇA INTERNACIONAL REGULADA' : currentLang === 'es' ? 'PRESENCIA INTERNACIONAL REGULADA' : currentLang === 'it' ? 'PRESENZA INTERNAZIONALE REGOLAMENTATA' : currentLang === 'fr' ? 'PRÉSENCE INTERNATIONALE RÉGLEMENTÉE' : currentLang === 'de' ? 'REGULIERTE INTERNATIONALE PRÄSENZ' : 'REGULATED EUROPEAN STATUS'}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1] drop-shadow-lg">
                {t.authority.title}
              </h2>
              <div className="h-[2px] w-16 bg-gradient-to-r from-gold to-transparent" />
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                {t.authority.subtitle}
              </p>
            </motion.div>

            {/* Geographic Pillars detail list */}
            <div className="flex flex-col gap-4 mt-2">
              {[
                { data: t.authority.luxembourg, icon: "🇱🇺", code: "LU" },
                { data: t.authority.portugal, icon: "🇵🇹", code: "PT" },
                { data: t.authority.spain, icon: "🇪🇸", code: "ES" }
              ].map((country, idx) => (
                <motion.div 
                  key={country.code}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.3, ease: "easeOut" }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#16161a]/80 sm:backdrop-blur-md border border-white/5 hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 hover:bg-[#1a1a1f] transition-all duration-300 cursor-default group"
                >
                  <div className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:border-gold/40 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
                    {country.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-white text-lg group-hover:text-gold-light transition-colors">{country.data.name}</h4>
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-white/5 group-hover:bg-gold/10 group-hover:text-gold text-gray-400 px-2 py-1 rounded transition-colors">{country.data.tag}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2 font-light leading-relaxed group-hover:text-gray-300 transition-colors">{country.data.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side: Modern Visual metrics panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 lg:pl-8"
          >
            <div className="glass-premium p-8 md:p-10 rounded-3xl border border-gold/20 relative overflow-hidden flex flex-col gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Shiny gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold-dark" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gold/10 rounded-full blur-[60px]" />
              
              <span className="text-xs md:text-sm font-mono tracking-widest text-gold uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                {currentLang === 'pt' ? 'MÉTRICAS AUDITADAS EM PORTAL CONSOLIDADO' : currentLang === 'es' ? 'MÉTRICAS AUDITADAS EN PORTAL CONSOLIDADO' : currentLang === 'it' ? 'METRICHE CERTIFICATE IN PORTALE CONSOLIDATO' : currentLang === 'fr' ? 'MÉTRIQUES AUDITÉES SUR PORTAIL CONSOLIDÉ' : currentLang === 'de' ? 'GEPRÜFTE METRIKEN IN EINEM KONSOLIDIERTEN PORTAL' : 'AUDITED PERFORMANCE METRICS'}
              </span>
              
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                <div className="p-4 md:p-6 rounded-2xl bg-[#0b0b0d]/60 sm:backdrop-blur-md border border-white/5 hover:border-gold/20 transition-colors flex flex-col gap-2 md:gap-3 group">
                  <span className="text-3xl md:text-4xl font-display font-black text-white glow-text group-hover:scale-105 transition-transform origin-left">
                    <AnimatedCounter to={240} suffix="+" />
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 tracking-tight leading-relaxed">{t.authority.metrics.clients}</span>
                </div>
                <div className="p-4 md:p-6 rounded-2xl bg-[#0b0b0d]/60 sm:backdrop-blur-md border border-white/5 hover:border-gold/20 transition-colors flex flex-col gap-2 md:gap-3 group">
                  <span className="text-3xl md:text-4xl font-display font-black text-white glow-text group-hover:scale-105 transition-transform origin-left">
                    <AnimatedCounter to={350} suffix="+" />
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 tracking-tight leading-relaxed">{t.authority.metrics.delivered}</span>
                </div>
                <div className="p-4 md:p-6 rounded-2xl bg-[#0b0b0d]/60 sm:backdrop-blur-md border border-white/5 hover:border-gold/30 transition-colors flex flex-col gap-2 md:gap-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-3xl md:text-4xl font-display font-black text-gold glow-text group-hover:scale-105 transition-transform origin-left drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">
                    <AnimatedCounter to={320} suffix="%" />
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 tracking-tight leading-relaxed relative z-10">{t.authority.metrics.roi}</span>
                </div>
                <div className="p-4 md:p-6 rounded-2xl bg-[#0b0b0d]/60 sm:backdrop-blur-md border border-white/5 hover:border-gold/20 transition-colors flex flex-col justify-center gap-2 md:gap-3 group">
                  <div className="flex gap-1.5 text-gold text-base md:text-lg drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">
                    ★★★★★
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 tracking-tight leading-relaxed">{t.authority.metrics.support}</span>
                </div>
              </div>

              {/* Micro quote block for authority -> Redesigned as a manifesto block */}
              <div className="relative mt-2 p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-30" />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-gold/20" />
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                      <ShieldCheck className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-[11px] md:text-xs font-mono text-gold tracking-[0.2em] uppercase font-semibold">The VELKS Standard</span>
                  </div>
                  
                  <p className="text-[15px] md:text-[17px] text-gray-300 font-light leading-relaxed md:leading-[1.8]">
                    {currentLang === 'pt' ? 'Aplicamos engenharia europeia para blindar as suas vendas. Intercetamos quem pesquisa no Google, convertemos num site implacável e usamos IA para fechar o negócio 24/7. Clientes fechados de madrugada e aos fins de semana, enquanto descansa com a sua família. Uma solução de ponta a ponta que nenhuma outra agência consegue fazer.' :
                   currentLang === 'en' ? 'We apply European engineering to bulletproof your sales. We intercept Google searchers, convert them with a ruthless website, and use AI to close deals 24/7. Customers closed at dawn and on weekends, while you rest with your family. An end-to-end solution no other agency can match.' :
                   currentLang === 'es' ? 'Aplicamos ingeniería europea para blindar tus ventas. Interceptamos a quienes buscan en Google, los convertimos con un sitio web implacable y usamos IA para cerrar el trato 24/7. Clientes cerrados de madrugada y los fines de semana, mientras descansas con tu familia. Una solución de principio a fin que ninguna otra agencia puede ofrecer.' :
                   currentLang === 'fr' ? 'Nous appliquons l\'ingénierie européenne pour blinder vos ventes. Nous interceptons les recherches Google, les convertissons avec un site web implacable et utilisons l\'IA pour conclure l\'affaire 24/7. Des clients signés à l\'aube et le week-end, pendant que vous vous reposez en famille. Une solution de bout en bout qu\'aucune autre agence ne peut égaler.' :
                   currentLang === 'de' ? 'Wir wenden europäische Ingenieurskunst an, um Ihre Verkäufe abzusichern. Wir fangen Google-Sucher ab, konvertieren sie mit einer kompromisslosen Website und nutzen KI, um den Deal rund um die Uhr abzuschließen. Kunden, die nachts und am Wochenende gewonnen werden, während Sie sich mit Ihrer Familie ausruhen. Eine End-to-End-Lösung, die keine andere Agentur bieten kann.' :
                   'Applichiamo l\'ingegneria europea per blindare le tue vendite. Intercettiamo chi cerca su Google, lo convertiamo con un sito web implacabile e usiamo l\'IA per chiudere l\'affare 24/7. Clienti acquisiti all\'alba e nei fine settimana, mentre riposi con la tua famiglia. Una soluzione end-to-end che nessun\'altra agenzia può eguagliare.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
