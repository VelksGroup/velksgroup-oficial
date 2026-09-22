import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Language } from '../translations';
import { MapPin, Globe, Bot, Phone } from 'lucide-react';

interface SolutionSectionProps {
  t: any;
  currentLang: Language;
  solutionRef: React.RefObject<HTMLDivElement>;
}

export const SolutionSection: React.FC<SolutionSectionProps> = React.memo(({ t, solutionRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background transition from Red to Amber to Gold
  const bgOpacityRed = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgOpacityAmber = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const bgOpacityGold = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const cards = [
    { id: "gmaps", ...t.solution.cards.gmaps, icon: MapPin },
    { id: "website", ...t.solution.cards.website, icon: Globe },
    { id: "bot", ...t.solution.cards.bot, icon: Bot },
    { id: "automation", ...t.solution.cards.automation, icon: Phone }
  ];

  return (
    <section ref={(node) => {
      if (typeof solutionRef === 'function') solutionRef(node);
      else if (solutionRef) (solutionRef as any).current = node;
      (containerRef as any).current = node;
    }} className="pt-12 pb-16 md:pt-16 md:pb-24 px-4 bg-obsidian relative overflow-hidden">
      
      {/* --- CINEMATIC BACKGROUND --- */}
      
      {/* 1. Color Transition Layers */}
      <motion.div 
        style={{ opacity: bgOpacityRed }} 
        className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"
      />
      <motion.div 
        style={{ opacity: bgOpacityAmber }} 
        className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent pointer-events-none"
      />
      <motion.div 
        style={{ opacity: bgOpacityGold }} 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none"
      />

      {/* 2. Holographic Gold Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2.5) translateY(-200px) translateZ(-200px)'
        }}
      />

      {/* 3. Soft Diagonal Light Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-gold/5 to-transparent skew-x-[-45deg] blur-[20px]"
        />
        <motion.div 
          animate={{ x: ['-200%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-gold/5 to-transparent skew-x-[-45deg] blur-[30px]"
        />
      </div>

      {/* 4. Slow Moving Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            animate={{
              y: ["110vh", "-10vh"],
              x: [
                `${Math.sin(i) * 15}vw`,
                `${Math.cos(i) * 15}vw`
              ],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-10%`,
              boxShadow: '0 0 10px rgba(212,175,55,0.8)'
            }}
          />
        ))}
      </div>
      
      {/* 5. Neural Network Connection Points (Static decorative) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
        <pattern id="neural" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="2" fill="#d4af37" />
          <circle cx="50" cy="50" r="1.5" fill="#d4af37" />
          <circle cx="90" cy="20" r="2" fill="#d4af37" />
          <path d="M10,10 L50,50 L90,20" stroke="#d4af37" strokeWidth="0.5" fill="none" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#neural)" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- TITLE SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col gap-4 items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[4px] text-gold font-bold px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 sm:backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            {t.solution.eyebrow}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight drop-shadow-lg"
          >
            {t.solution.title}
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent relative" 
          >
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/3 h-full bg-white blur-[1px]"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            {t.solution.subtitle}
          </motion.p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Thin shared path remains behind the existing card surfaces. */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 bottom-0 left-1/2 md:left-1/4 w-px bg-gold/25" />
            <div className="hidden md:block absolute top-0 bottom-0 left-3/4 w-px bg-gold/25" />
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gold/25" />
          </div>

          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={card.id}
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-8 md:p-10 rounded-3xl bg-[#0b0b0d]/80 sm:backdrop-blur-xl border border-gold/15 hover:border-gold/40 active:border-gold/50 transition-all duration-500 flex flex-col gap-6 relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] hover:-translate-y-3 active:-translate-y-3 active:scale-[1.02] cursor-pointer"
              >
                <motion.span
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0.3, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: reduceMotion ? 0 : 0.6 }}
                  className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                />
                {/* Glow effects inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-[40px]" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Micro-shine moving across top edge on hover */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />

                {/* Premium Badge Icon */}
                <div className="w-14 h-14 rounded-2xl bg-black border border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center justify-center text-gold relative group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] group-hover:border-gold/60 transition-all duration-500 group-active:scale-95 group-hover:scale-110 z-10">
                  <div className="absolute inset-0 bg-gold/10 rounded-2xl animate-pulse-slow" />
                  <Icon size={24} className="group-hover:text-gold-light transition-colors relative z-10" />
                </div>
                
                <div className="flex flex-col gap-3 relative z-10">
                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] text-gold uppercase">{card.label}</span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-gold-light transition-colors drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="text-center text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mt-8">
          {t.solution.closing}
        </p>
      </div>
      
      {/* Minimal Premium Transition */}
      <div aria-hidden="true" className="w-full h-8 mt-8 md:mt-10 flex items-center justify-center relative z-10 pointer-events-none">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0.3, scaleX: 0.85, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, scaleX: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border border-gold/40 bg-obsidian z-10 flex items-center justify-center">
            <div className="w-1 h-1 bg-gold rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});
