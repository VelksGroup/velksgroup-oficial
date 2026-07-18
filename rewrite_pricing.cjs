const fs = require('fs');

const code = `import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, animate } from 'framer-motion';
import { Check, MessageSquare, Zap, Shield, Rocket, Sparkles, Crown, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  t: any;
  currentLang: string;
  handleWhatsAppClick: (message: string) => void;
}

// Number Counter Component
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      const numMatch = value.match(/\\d+/);
      if (numMatch) {
        const num = parseInt(numMatch[0]);
        animate(0, num, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => {
            if (ref.current) {
              ref.current.textContent = value.includes('€') && value.endsWith('€') ? \`\${Math.floor(latest)}€\` : \`€\${Math.floor(latest)}\`;
            }
          }
        });
      }
    }
  }, [isInView, value]);

  return <span ref={ref}>{value}</span>;
};

export function PricingSection({ t, currentLang, handleWhatsAppClick }: PricingSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const controls = useAnimation();
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const valueIndicators = [
    { icon: <Zap size={14} />, text: currentLang === 'pt' ? 'Entrega rápida' : 'Fast delivery' },
    { icon: <Shield size={14} />, text: currentLang === 'pt' ? 'Sem mensalidade' : 'No monthly fees' },
    { icon: <MessageSquare size={14} />, text: currentLang === 'pt' ? 'Suporte humano' : 'Human support' },
    { icon: <Rocket size={14} />, text: currentLang === 'pt' ? 'Implementação simples' : 'Easy setup' },
  ];

  const standardPlans = [
    { id: 'gmaps', ...t.pricing.plans.gmaps },
    { id: 'website', ...t.pricing.plans.website },
    { id: 'automacao', ...t.pricing.plans.automacao },
    { id: 'ecommerce', ...t.pricing.plans.ecommerce }
  ];

  const customPlan = { id: 'custom', ...t.pricing.plans.custom };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#020202] perspective-1000">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Animated Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 animate-[pulse_4s_ease-in-out_infinite]" />
        
        {/* Deep Perspective Glow */}
        <motion.div 
          style={{ opacity: glowOpacity, scale: glowScale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[150px] mix-blend-screen"
        />

        {/* Floating Wireframe Geometries */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'repeating-radial-gradient(circle at center, #D4AF37, transparent 2px, transparent 40px)' }}
        />

        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37, transparent 2px, transparent 40px)' }}
        />
        
        {/* Luminous Connected Points */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.path
            d="M-100,300 C200,400 400,100 800,200 S1200,500 1600,400"
            fill="none"
            stroke="url(#goldGradient1)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,800 C400,700 800,900 1200,700 S1600,800 2000,600"
            fill="none"
            stroke="url(#goldGradient2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: 0,
                scale: 0
              }}
              animate={isInView ? {
                y: [null, Math.random() * -300],
                x: [null, Math.random() * 100 - 50],
                opacity: [0, Math.random() * 0.8 + 0.2, 0],
                scale: [0, Math.random() * 2 + 1, 0]
              } : {}}
              transition={{
                duration: Math.random() * 6 + 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
          }}
          className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center"
        >
          {/* Tag "PAGAMENTO ÚNICO" -> Mobile-first fix */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 w-auto max-w-[90vw]"
          >
             <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
             <span className="text-[10px] sm:text-xs font-mono text-gold font-bold uppercase tracking-widest text-center">
               {t.pricing.singlePayment}
             </span>
             <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
          </motion.div>
          
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-white leading-[1.1] mb-6"
          >
            {t.pricing.title}
          </motion.h2>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl"
          >
            {t.pricing.subtitle}
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10"
          >
            {valueIndicators.map((indicator, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-mono tracking-wide">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold/10 text-gold border border-gold/20">
                  {indicator.icon}
                </span>
                {indicator.text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* FLAGSHIP PLAN: ALL-IN-ONE IMPERIAL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
          }}
          className="relative w-full mb-12 group cursor-pointer"
          onMouseEnter={() => setHoveredCard(99)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Animated Glowing Border using conic-gradient */}
          <div className="absolute -inset-[2px] rounded-[2rem] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D4AF37_360deg)] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
          <div className="absolute -inset-[2px] rounded-[2rem] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D4AF37_360deg)] animate-[spin_4s_linear_infinite]" />
          
          {/* Core Card Background */}
          <div className="relative bg-gradient-to-br from-[#151515] to-[#050505] rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_80px_rgba(212,175,55,0.3)] transition-all duration-700 flex flex-col lg:flex-row items-center gap-12 z-10">
            
            {/* Inner Glow & Glass Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-gold/20 transition-colors duration-700" />
            
            <div className="flex-1 flex flex-col gap-6 relative z-10 w-full">
              <div className="flex items-center gap-4">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded bg-gold text-black font-black flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                  <Crown size={14} />
                  FLAGSHIP
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1.5 rounded border border-gold/20">
                  ALL-IN-ONE
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {customPlan.title}
              </h3>
              
              <p className="text-gray-400 font-light text-sm md:text-base max-w-xl">
                O ecossistema digital absoluto. Uma infraestrutura completa desenhada para dominar o seu mercado local, unindo presença premium e inteligência artificial.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-2">
                {customPlan.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gold font-light bg-gold/5 border border-gold/10 px-3 py-2 rounded-lg">
                    <Sparkles size={12} className="text-gold" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center lg:items-end gap-6 relative z-10">
              <div className="flex flex-col items-center lg:items-end gap-1">
                <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Investimento Total</span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                  {customPlan.price}
                </span>
              </div>
              <button 
                onClick={() => handleWhatsAppClick(customPlan.tracking)}
                className="w-full lg:w-auto px-8 py-5 rounded-xl bg-gold text-black font-display font-black text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-[#ffd700] hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                {customPlan.cta}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* STANDARD PRICING GRID (4 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
          {standardPlans.map((plan, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 60 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 + (0.1 * index) } }
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500 ease-out"
                style={{
                  transform: isHovered ? 'translateY(-10px)' : 'none'
                }}
              >
                {/* Border Glow specific to hovered card */}
                <div className={\`absolute inset-0 transition-opacity duration-500 \${isHovered ? 'opacity-100' : 'opacity-30'}\`} style={{ background: 'linear-gradient(to bottom right, rgba(212,175,55,0.4), rgba(255,255,255,0.05), rgba(212,175,55,0.1))' }} />
                
                <div className="relative h-full flex flex-col justify-between p-8 rounded-[2rem] bg-[#0a0a0a]/90 backdrop-blur-3xl transition-colors duration-500 group-hover:bg-[#111111]/95">
                  
                  {/* Inner Glass Shine */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded text-gray-400 bg-white/5 border border-white/10 group-hover:text-gold group-hover:border-gold/30 transition-colors duration-300">
                        0{index + 1}. {plan.id.toUpperCase()}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mt-5">
                        {plan.title}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-1 border-b border-white/10 pb-6">
                      <span className="text-xs text-gray-500 font-mono tracking-wider">A partir de</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-display font-black tracking-tighter text-white group-hover:text-gold transition-colors duration-300">
                          {plan.price !== 'Sob Consulta' ? <AnimatedNumber value={plan.price} /> : plan.price}
                        </span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-4">
                      {plan.features.map((feature: string, i: number) => (
                        <motion.li 
                          key={i} 
                          initial={false}
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-3 text-sm text-gray-400 font-light leading-snug group-hover:text-gray-200 transition-colors"
                        >
                          <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-white/5 text-gray-500 group-hover:text-gold group-hover:bg-gold/10 transition-colors">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 mt-8">
                    <button 
                      onClick={() => handleWhatsAppClick(plan.tracking)}
                      className="w-full py-4 rounded-xl font-display font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden bg-white/5 text-white border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:text-gold"
                    >
                      <MessageSquare size={16} />
                      {plan.cta}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/PricingSection.tsx', code);
console.log("PricingSection rewritten for premium UI.");
