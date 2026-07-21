import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AlertTriangle, Search, ThumbsUp, Phone, Smartphone, Clock } from 'lucide-react';
import { Language } from '../translations';

interface ProblemSectionProps {
  t: any;
  currentLang: Language;
  problemRef: React.RefObject<HTMLDivElement>;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ t, currentLang, problemRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yFog = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const yLines = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cards = [
    { num: "01", icon: Search, title: t.problem.cards.invisible.title, desc: t.problem.cards.invisible.desc, col: "col-span-1" },
    { num: "02", icon: ThumbsUp, title: t.problem.cards.reviews.title, desc: t.problem.cards.reviews.desc, col: "col-span-1", iconProps: { className: "rotate-180" } },
    { num: "03", icon: Phone, title: t.problem.cards.contacts.title, desc: t.problem.cards.contacts.desc, col: "col-span-1" },
    { num: "04", icon: Smartphone, title: t.problem.cards.oldSite.title, desc: t.problem.cards.oldSite.desc, col: "lg:col-span-1" },
    { num: "05", icon: Clock, title: t.problem.cards.lostClients.title, desc: t.problem.cards.lostClients.desc, col: "md:col-span-2 lg:col-span-2" }
  ];

  return (
    <section ref={(node) => {
      // Connect both refs
      if (typeof problemRef === 'function') problemRef(node);
      else if (problemRef) (problemRef as any).current = node;
      (containerRef as any).current = node;
    }} className="pt-12 pb-12 md:pb-16 px-4 bg-obsidian-dark relative overflow-hidden">
      
      {/* Background Ambience (Quantum Red Obsidian) */}
      <motion.div 
        style={{ y: yBg, opacity: opacityFade }} 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-obsidian-dark to-obsidian-dark pointer-events-none"
      />
      
      <motion.div 
        style={{ y: yFog, opacity: opacityFade }}
        className="absolute top-1/4 left-0 w-full h-[80%] bg-gradient-to-b from-red-900/5 via-red-900/10 to-transparent blur-[120px] pointer-events-none"
      />

      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          y: yLines, 
          opacity: opacityFade,
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(-100px)'
        }}
      />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full blur-[1px]"
            animate={{
              y: ["-10vh", "110vh"],
              x: [
                `${Math.sin(i) * 10}vw`,
                `${Math.cos(i) * 10}vw`
              ],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
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
        
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[4px] text-red-500 font-bold flex items-center justify-center gap-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          >
            <AlertTriangle size={16} className="text-red-500 animate-pulse" />
            {currentLang === 'pt' ? 'REALIDADE SEM ENROLAÇÃO' : currentLang === 'es' ? 'REALIDAD SIN RODEOS' : currentLang === 'it' ? 'REALTÀ SENZA GIRI DI PAROLE' : currentLang === 'fr' ? 'RÉALITÉ SANS DÉTOUR' : currentLang === 'de' ? 'KRITISCHE REALITÄT' : 'CRITICAL REALITY'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight drop-shadow-xl"
          >
            {t.problem.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[2px] w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-gray-300 font-light leading-relaxed"
          >
            {t.problem.subtitle}
          </motion.p>
        </div>

        {/* Grid of pain points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 md:p-8 rounded-2xl bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/5 hover:border-red-500/50 active:border-red-500/60 transition-all duration-500 flex flex-col gap-4 relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)] hover:-translate-y-3 active:-translate-y-3 active:scale-[1.03] cursor-pointer ${card.col}`}
              >
                {/* Mobile specific active state simulation via active/focus ring */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 via-red-500/5 to-red-500/10 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -inset-px bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 opacity-0 group-hover:opacity-100 group-active:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" />

                <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-bl-3xl flex items-center justify-center font-mono text-lg text-red-500 font-bold group-hover:bg-red-500/20 group-active:bg-red-500/30 group-hover:text-red-400 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-500">
                  {card.num}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-950 to-red-900/40 flex items-center justify-center text-red-500 border border-red-500/20 group-hover:border-red-500/60 group-active:border-red-500/80 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] group-hover:text-red-400 group-active:text-red-300 transition-all duration-500">
                  <Icon size={24} {...(card.iconProps || {})} />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors drop-shadow-md z-10 relative">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light z-10 relative group-hover:text-gray-300 transition-colors">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Neon Scroll Down Geometry */}
      <div className="w-full mt-10 md:mt-14 mb-0 flex flex-col items-center justify-center relative z-20">
        <div className="h-24 md:h-32 w-[2px] bg-gradient-to-b from-transparent via-red-500/80 to-red-500 relative shadow-[0_0_20px_rgba(239,68,68,0.5)]">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,1),0_0_40px_rgba(239,68,68,1)]"
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
          />
        </div>
        <motion.div 
          className="w-4 h-4 border-b-[3px] border-r-[3px] border-red-500 rotate-45 -mt-2 drop-shadow-[0_0_15px_rgba(239,68,68,1)]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};
