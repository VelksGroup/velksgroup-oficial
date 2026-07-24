import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../translations';

interface TestimonialsSectionProps {
  t: Language;
  currentLang: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = React.memo(({ t, currentLang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgScale = useTransform(scrollYProgress, [0.7, 1], [1, 0.8]);
  const particleY = useTransform(scrollYProgress, [0.7, 1], [0, 200]);


  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % t.testimonials.list.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + t.testimonials.list.length) % t.testimonials.list.length);
  };
  
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 60 : -60,
        scale: 0.98,
        opacity: 0,
        filter: "blur(4px)"
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 60 : -60,
        scale: 0.98,
        opacity: 0,
        filter: "blur(4px)"
      };
    }
  };

  // Autoplay functionality (optional, disabled based on requirements but keeping simple)
  // We can just rely on manual navigation for a premium feel.

  return (
    <section ref={containerRef} className="py-32 px-4 relative overflow-hidden bg-[#050505]">
      {/* Cinematic Transition from Block 5 to Block 6 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50" />
      
      {/* Background with golden particles, thin geometric lines, and interconnected nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a0a] via-[#050505] to-black opacity-90" />
        
        {/* Parallax wireframe geometry */}
        <motion.div 
          style={{ scale: bgScale }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)] origin-bottom" 
        />

        {/* Luminous nodes & particles */}
        <motion.div className="absolute inset-0" style={{ y: particleY }}>
          {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full blur-[1px]"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {}
              }}
              className="text-xs font-mono uppercase tracking-[6px] text-gold font-bold inline-block"
            >
                            {(currentLang === 'pt' ? 'DEPOIMENTOS VERIFICADOS' : currentLang === 'es' ? 'TESTIMONIOS VERIFICADOS' : currentLang === 'it' ? 'TESTIMONIANZE VERIFICATE' : currentLang === 'fr' ? 'TÉMOIGNAGES VÉRIFIÉS' : currentLang === 'de' ? 'GEPRÜFTE BEWERTUNGEN' : 'INDEPENDENT VERIFICATION').split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight"
          >
            {t.testimonials.title}
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" 
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl text-gray-400 font-light leading-relaxed"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Premium Testimonial Card Slider */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[500px] md:min-h-[420px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 35 },
                scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.5 },
                filter: { duration: 0.5 }
              }}
              className="absolute inset-0 flex items-center justify-center w-full"
            >
              <div className="w-full bg-[#0d0d0d]/80 sm:backdrop-blur-xl p-10 md:p-12 rounded-3xl border border-gold/20 shadow-[0_30px_60px_rgba(0,0,0,0.8),_inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col justify-between gap-8 relative overflow-hidden group">
                {/* Subtle glass reflection */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="flex flex-col gap-6 relative z-10">
                  {/* Stars with sequential glow */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 shrink-0" width="24px" height="24px">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                      </svg>
                    </div>
                    <div className="flex gap-2 text-gold text-lg">
                      {"★".repeat(t.testimonials.list[currentIndex].rating).split("").map((s, i) => (
                        <motion.span 
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.15, 1] }}
                          transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
                          className="drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-light italic">
                    “{t.testimonials.list[currentIndex].text}”
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-white/10 relative z-10">
                  <div className="flex items-center gap-5">
                    {/* Client Avatar with luminous ring */}
                    <div className="relative">
                      <motion.div 
                        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -inset-1.5 rounded-full border border-gold/30 blur-[2px]"
                      />
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center font-display font-bold text-gold text-xl border border-gold/40 relative z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        {t.testimonials.list[currentIndex].name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-base md:text-lg tracking-wide">{t.testimonials.list[currentIndex].name}</h4>
                      <span className="text-[11px] md:text-xs text-gold/80 font-mono tracking-wider block mt-1 uppercase">{t.testimonials.list[currentIndex].role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Slider Navigation & Premium Counter */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mt-20 md:mt-24 px-2">
          <div className="flex items-center gap-6">
            <motion.button aria-label="Button" 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </motion.button>
            <motion.button aria-label="Button" 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
          
          <div className="flex flex-col items-end overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="text-gold font-mono text-sm tracking-widest font-bold"
              >
                {(currentIndex + 1).toString().padStart(2, '0')} <span className="text-gray-600">/ {t.testimonials.list.length.toString().padStart(2, '0')}</span>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Transition to Block 7 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0d] via-[#050505]/50 to-transparent pointer-events-none z-20" />
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 0.5, height: 128 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent via-gold to-transparent z-20" 
      />
    </section>
  );
});
