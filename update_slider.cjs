const fs = require('fs');
let code = fs.readFileSync('src/components/BeforeAfterSlider.tsx', 'utf8');

const newCode = `import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

interface BeforeAfterSliderProps {
  currentLang: string;
}

const mockups = [
  {
    id: 1,
    title: {
      pt: "Website Corporativo",
      en: "Corporate Website"
    },
    beforeImg: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 2,
    title: {
      pt: "Plataforma E-commerce",
      en: "E-commerce Platform"
    },
    beforeImg: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

export function BeforeAfterSlider({ currentLang }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const t = {
    title: currentLang === 'pt' ? 'TRANSFORMAÇÃO DIGITAL' : 'DIGITAL TRANSFORMATION',
    subtitle: currentLang === 'pt' 
      ? 'Agências comuns entregam sites estáticos. Nós entregamos um ecossistema com IA que converte 24/7.' 
      : 'Regular agencies deliver static sites. We deliver an AI ecosystem that converts 24/7.',
    before: currentLang === 'pt' ? 'ANTES' : 'BEFORE',
    after: currentLang === 'pt' ? 'DEPOIS' : 'AFTER',
  };

  const activeMockup = mockups[activeMockupIndex];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
             <Zap size={14} className="text-green-400" />
             <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest font-bold">
               {currentLang === 'pt' ? 'Resultados com IA' : 'AI Results'}
             </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
            {t.title}
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }
          }}
          className="flex justify-center gap-4 mb-8"
        >
          {mockups.map((mockup, index) => (
            <button
              key={mockup.id}
              onClick={() => {
                setActiveMockupIndex(index);
                setSliderPosition(50);
              }}
              className={\`px-6 py-2.5 rounded-full text-xs font-display tracking-widest uppercase transition-all duration-300 \${
                activeMockupIndex === index 
                  ? 'bg-green-500 text-black font-black shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }\`}
            >
              {currentLang === 'pt' ? mockup.title.pt : mockup.title.en}
            </button>
          ))}
        </motion.div>

        {/* Slider Component */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
          }}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 select-none group bg-black"
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeMockup.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Before Image (Background) */}
              <div className="absolute inset-0 w-full h-full">
                 <img 
                   src={activeMockup.beforeImg}
                   alt="Before digital presence" 
                   className="w-full h-full object-cover object-center filter grayscale-[30%] opacity-70"
                   draggable="false"
                 />
                 <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* After Image (Foreground, clipped) */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: \`inset(0 \${100 - sliderPosition}% 0 0)\` }}
              >
                 <img 
                   src={activeMockup.afterImg}
                   alt="After digital presence" 
                   className="w-full h-full object-cover object-center"
                   draggable="false"
                 />
                 <div className="absolute inset-0 bg-green-900/10 mix-blend-overlay" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Labels */}
          <div className="absolute top-6 left-6 z-20 pointer-events-none">
            <div className="px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] md:text-xs tracking-widest uppercase font-bold shadow-xl">
              {t.before}
            </div>
          </div>
          
          <div className="absolute top-6 right-6 z-20 pointer-events-none">
            <div className="px-4 py-2 rounded-lg bg-green-500/90 backdrop-blur-md border border-green-400 text-black font-mono text-[10px] md:text-xs tracking-widest uppercase font-black shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              {t.after}
            </div>
          </div>

          {/* Divider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-green-400 cursor-ew-resize z-30 shadow-[0_0_15px_rgba(34,197,94,0.8)] transition-all duration-75"
            style={{ left: \`calc(\${sliderPosition}% - 2px)\` }}
          >
            {/* Draggable Button */}
            <div 
              className={\`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-green-500 border-4 border-white flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-transform duration-200 \${isDragging ? 'scale-90' : 'scale-100 group-hover:scale-110'}\`}
            >
              <ChevronLeft size={16} className="text-white -mr-1" />
              <ChevronRight size={16} className="text-white -ml-1" />
            </div>
          </div>
          
        </motion.div>
        
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/BeforeAfterSlider.tsx', newCode);
console.log("Slider updated to support multiple mockups with tabs.");
