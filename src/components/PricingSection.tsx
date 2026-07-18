import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, animate } from 'motion/react';
import { Check, MessageSquare, Zap, Shield, Rocket, Sparkles, Crown, ArrowRight, Activity } from 'lucide-react';

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
      const numMatch = value.match(/\d+/);
      if (numMatch) {
        const num = parseInt(numMatch[0]);
        animate(0, num, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => {
            if (ref.current) {
              ref.current.textContent = value.includes('€') && value.endsWith('€') ? `${Math.floor(latest)}€` : `€${Math.floor(latest)}`;
            }
          }
        });
      }
    }
  }, [value, isInView]);

  return <span ref={ref}>{value}</span>;
};

export default function PricingSection({ t, currentLang, handleWhatsAppClick }: PricingSectionProps) {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  if (!t?.pricing?.plans) {
    return null; // Safety check
  }

  const standardPlans = [
    { id: 'google', ...t.pricing.plans.gmaps },
    { id: 'website', ...t.pricing.plans.website },
    { id: 'ia velks', ...t.pricing.plans.automacao },
    { id: 'ecommerce', ...t.pricing.plans.ecommerce }
  ];

  const customPlan = { id: 'custom', ...t.pricing.plans.custom };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#030305] perspective-1000">
      
      {/* LAYER 1: Deep Premium Darkness & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f0f15] via-[#030305] to-[#010101] pointer-events-none" />
      
      {/* LAYER 5: Luminous Auroras (Background Lights) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none mix-blend-screen opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gold/10 blur-[120px] animate-aurora" />
        <div className="absolute top-[40%] -right-[20%] w-[50vw] h-[50vw] rounded-full bg-[#d4af37]/5 blur-[100px] animate-aurora-slow" />
        <div className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[40vw] rounded-full bg-gold/5 blur-[150px] animate-aurora" />
      </div>

      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* LAYER 2: Tech Grid */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(70deg) scale(2.5) translateY(-200px)'
        }} />
        
        {/* LAYER 3: Animated Geometry */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[10%] w-[800px] h-[800px] opacity-[0.02] pointer-events-none mix-blend-screen"
          style={{ backgroundImage: 'repeating-radial-gradient(circle at center, #D4AF37, transparent 1px, transparent 60px)' }}
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-[5%] w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none mix-blend-screen"
          style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, #D4AF37 0deg 1deg, transparent 1deg 15deg)' }}
        />

        {/* LAYER 6: Cinematic Depth (Subtle Light Beams) */}
        <div className="absolute top-0 left-1/4 w-[100px] h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent blur-3xl animate-light-beam" />
        <div className="absolute top-0 right-1/4 w-[150px] h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent blur-3xl animate-light-beam-delayed" />
      </motion.div>

      {/* LAYER 4: Golden Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * 2000,
              opacity: Math.random() * 0.5 + 0.1,
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              backgroundColor: i % 3 === 0 ? '#fff' : '#D4AF37',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(212,175,55,0.8)`
            }}
            animate={{ 
              y: [null, Math.random() * -500 - 100],
              opacity: [null, Math.random() * 0.8 + 0.2, 0],
              x: [null, `+=${Math.random() * 100 - 50}`]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="max-w-4xl mx-auto text-center mb-24 relative">
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
              visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-black/40 border border-gold/30 mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.15)] relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
             <Activity className="w-4 h-4 text-gold animate-pulse" />
             <span className="text-xs sm:text-sm font-mono text-gold font-bold uppercase tracking-[0.2em] relative z-10">
               {t.pricing.singlePayment}
             </span>
          </motion.div>
          
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(15px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-5xl md:text-6xl lg:text-8xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 leading-[1.1] mb-6 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            {t.pricing.title}
          </motion.h2>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        {/* FLAGSHIP PLAN: ALL-IN-ONE IMPERIAL */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="mb-16 md:mb-24 relative group"
        >
          {/* Animated Quantum Glow Border */}
          <div className="absolute -inset-[2px] rounded-[2rem] sm:rounded-[2.5rem] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D4AF37_360deg)] animate-[spin_6s_linear_infinite] opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[4px]" />
          <div className="absolute -inset-[2px] rounded-[2rem] sm:rounded-[2.5rem] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D4AF37_360deg)] animate-[spin_6s_linear_infinite]" />
          
          {/* Premium Solution Panel */}
          <div className="relative bg-[#060608]/90 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-14 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_40px_rgba(212,175,55,0.05)] group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(212,175,55,0.3),inset_0_0_80px_rgba(212,175,55,0.15)] transition-all duration-700 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 z-10">
            
            {/* Dynamic Internal Lighting */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
            <div className="absolute -top-1/2 -right-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_50%)] animate-[spin_20s_linear_infinite] pointer-events-none" />
            
            <div className="flex-1 flex flex-col gap-8 relative z-10 w-full">
              {/* Responsive Tags Container */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] px-4 py-2 rounded-md bg-gradient-to-r from-gold to-[#ffd700] text-black font-black flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.6)] shrink-0 min-w-0">
                  <Crown size={14} className="shrink-0" />
                  <span className="truncate">FLAGSHIP</span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gold bg-black/50 px-4 py-2 rounded-md border border-gold/30 shrink-0 shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] min-w-0">
                  <span className="truncate">ALL-IN-ONE</span>
                </span>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] leading-[1.1]">
                  {customPlan.title}
                </h3>
                
                <p className="text-gray-300 font-light text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                  O ecossistema digital absoluto. Uma infraestrutura completa desenhada para dominar o seu mercado local, unindo presença premium e inteligência artificial.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-2">
                {customPlan.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200 font-light bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg shadow-lg backdrop-blur-md group-hover:border-gold/20 group-hover:bg-gold/5 transition-colors duration-500">
                    <Sparkles size={14} className="text-gold shadow-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center lg:items-end gap-8 relative z-10 mt-4 lg:mt-0 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0">
              <div className="flex flex-col items-center lg:items-end gap-2">
                <span className="text-xs text-gold/80 font-mono tracking-[0.2em] uppercase">Investimento Total</span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-white drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  {customPlan.price}
                </span>
              </div>
              
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(customPlan.tracking)}
                className="w-full lg:w-auto px-8 sm:px-10 py-5 sm:py-6 rounded-xl bg-gradient-to-r from-gold via-[#ffe55c] to-gold bg-[length:200%_auto] animate-[glowing-border_3s_linear_infinite] text-black font-display font-black text-sm sm:text-base uppercase tracking-[0.2em] transition-transform duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] relative overflow-hidden group/btn"
              >
                {/* Active Light Sweep */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover/btn:animate-[shimmer_1s_infinite]" />
                <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                  {customPlan.cta}
                  <ArrowRight size={20} />
                </span>
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
                initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, delay: 0.5 + (0.1 * index), ease: [0.16, 1, 0.3, 1] } }
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1]"
                style={{
                  transform: isHovered ? 'translateY(-16px)' : 'none'
                }}
              >
                {/* Volumetric Glowing Border specific to hovered card */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-30'}`} style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.8) 0%, rgba(255,255,255,0.1) 50%, rgba(212,175,55,0.4) 100%)' }} />
                
                {/* Glass Panel */}
                <div className="relative h-full flex flex-col justify-between p-8 rounded-[2rem] glass-panel-premium transition-all duration-700 bg-[#060608]/90">
                  
                  {/* Internal Luminous Halo */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-8">
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-gray-400 bg-black/40 border border-white/5 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-500 shadow-inner">
                        0{index + 1}. {plan.id.toUpperCase()}
                      </span>
                      <h3 className="text-3xl font-display font-bold text-white mt-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold/80 transition-all duration-500">
                        {plan.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col gap-2 border-b border-white/5 pb-8 relative">
                      <span className="text-xs text-gray-500 font-mono tracking-[0.15em] uppercase">A partir de</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl lg:text-6xl font-display font-black tracking-tighter text-white group-hover:text-gold transition-colors duration-500 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                          {plan.price !== 'Sob Consulta' ? <AnimatedNumber value={plan.price} /> : plan.price}
                        </span>
                      </div>
                      {/* Sub-border glow line */}
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                    </div>
                    
                    <ul className="flex flex-col gap-4">
                      {plan.features.map((feature: string, i: number) => (
                        <motion.li 
                          key={i} 
                          initial={false}
                          animate={{ x: isHovered ? 8 : 0 }}
                          transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                          className="flex items-start gap-4 text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                        >
                          <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white/5 text-gray-600 group-hover:text-gold group-hover:bg-gold/15 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500 border border-transparent group-hover:border-gold/20">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="relative z-10 mt-10">
                    <button aria-label="Button" 
                      onClick={() => handleWhatsAppClick(plan.tracking)}
                      className="w-full py-5 rounded-xl font-display font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden bg-black/40 text-gray-300 border border-white/10 group-hover:border-gold/40 group-hover:bg-gradient-to-r group-hover:from-gold/10 group-hover:to-gold/5 group-hover:text-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    >
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                      <MessageSquare size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                      <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">{plan.cta}</span>
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
