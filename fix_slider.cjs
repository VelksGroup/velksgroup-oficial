const fs = require('fs');

const content = `import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight, Zap, Globe, Map, Image as ImageIcon, Shield } from 'lucide-react';

interface BeforeAfterSliderProps {
  currentLang: string;
}

export function BeforeAfterSlider({ currentLang }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
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
      ? 'Agências comuns entregam sites estáticos e vazios. Nós entregamos ecossistemas premium alimentados por IA que dominam e convertem 24/7.' 
      : 'Regular agencies deliver static empty sites. We deliver premium AI-powered ecosystems that dominate and convert 24/7.',
    before: currentLang === 'pt' ? 'ANTES (Obsoleto)' : 'BEFORE (Obsolete)',
    after: currentLang === 'pt' ? 'DEPOIS (Premium IA)' : 'AFTER (Premium AI)',
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#050507]">
      {/* ========================================= */}
      {/* CINEMATIC BACKGROUND */}
      {/* ========================================= */}
      
      {/* 1. Base Dark Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a0f] via-[#050507] to-obsidian pointer-events-none" />
      
      {/* 2. Technological Grid (Subtle Parallax) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: \`linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)\`,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2.5) translateY(-200px) translateZ(-200px)'
        }} />
      </motion.div>

      {/* 3. Radial Gold Glows */}
      <motion.div 
        style={{ opacity: opacityGlow }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" 
      />
      
      {/* 4. Slow Moving Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={\`particle-\${i}\`}
            className="absolute w-1 h-1 bg-gold/60 rounded-full"
            animate={{
              y: ["110vh", "-10vh"],
              x: [\`\${Math.sin(i) * 15}vw\`, \`\${Math.cos(i) * 15}vw\`],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 20 + 25,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15
            }}
            style={{
              left: \`\${Math.random() * 100}%\`,
              bottom: \`-10%\`,
              boxShadow: '0 0 15px rgba(212,175,55,0.6)'
            }}
          />
        ))}
      </div>

      {/* ========================================= */}
      {/* TOP TRANSITION (From Agent Demo) */}
      {/* ========================================= */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-obsidian to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-30">
        
        {/* ========================================= */}
        {/* SECTION HEADER */}
        {/* ========================================= */}
        <div className="text-center mb-24 flex flex-col items-center relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md"
          >
             <Zap size={14} className="text-gold" />
             <span className="text-[10px] sm:text-xs font-mono text-gold uppercase tracking-[0.2em] font-bold">
               {currentLang === 'pt' ? 'Contraste Real' : 'Real Contrast'}
             </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white tracking-tighter mb-8 leading-tight drop-shadow-[0_0_40px_rgba(212,175,55,0.15)]"
          >
            {t.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* ========================================= */}
        {/* MOCKUP CONTAINER */}
        {/* ========================================= */}
        <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto z-40">
          
          {/* Halo Effects Behind Mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[120%] bg-gold/10 blur-[100px] rounded-[100%] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gold/15 blur-[60px] rounded-full pointer-events-none animate-pulse-slow" />
          
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Floating Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative perspective-1000"
            >
              
              {/* Premium Phone Frame */}
              <div className="relative bg-[#050505] rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.9),_0_0_60px_rgba(212,175,55,0.2)] aspect-[9/19] overflow-hidden flex flex-col border-[6px] sm:border-[10px] border-[#16161a] ring-1 ring-white/10 group">
                
                {/* Edge Highlights */}
                <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none z-[110]" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-[110]" />

                {/* Dynamic Island */}
                <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-[100] flex items-center justify-between px-2 shadow-sm border border-white/10 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/40 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                </div>

                {/* Interactive Screen Area */}
                <div 
                  className="flex-1 relative w-full h-full cursor-ew-resize select-none overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black"
                  ref={containerRef}
                  onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
                  onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
                >
                  
                  {/* ========================================= */}
                  {/* BEFORE CONTENT (Left side) */}
                  {/* ========================================= */}
                  <div 
                    className="absolute inset-0 bg-[#e5e5e5] flex flex-col overflow-hidden font-sans text-gray-800 z-0"
                  >
                    {/* Browser Bar (Old) */}
                    <div className="w-full bg-[#d4d4d4] border-b border-gray-400 p-2 sm:p-3 flex items-center justify-center shrink-0 pt-8 sm:pt-10">
                      <div className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-[9px] sm:text-[10px] text-gray-500 flex items-center justify-center font-serif shadow-inner">
                        http://www.mycompany2015.com
                      </div>
                    </div>

                    <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
                      {/* Header */}
                      <div className="p-3 sm:p-4 border-b-4 border-blue-800 bg-gray-50 flex flex-col items-center gap-2">
                        <h1 className="text-lg sm:text-xl font-bold text-blue-900 tracking-tighter font-serif text-center leading-tight">My Company Ltd.</h1>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-[9px] text-blue-700 underline font-bold">
                          <span>Home</span>
                          <span>About</span>
                          <span>Services</span>
                          <span>Contact</span>
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 bg-white overflow-y-auto pb-10">
                        <div className="p-3 border border-gray-300 shadow-sm bg-white">
                          <h2 className="text-sm sm:text-base font-bold mb-2 text-red-600 font-serif leading-tight">Welcome to our website!</h2>
                          <p className="text-[9px] sm:text-[10px] mb-2 leading-relaxed text-gray-700">
                            We have been providing quality services since 1995. Please browse our website to find out more about our company and what we do.
                          </p>
                          <div className="w-full h-20 sm:h-24 bg-gray-200 border border-gray-400 flex items-center justify-center mb-2 sm:mb-3">
                            <ImageIcon size={20} className="text-gray-400" />
                            <span className="text-gray-500 text-[9px] sm:text-[10px] ml-1">Missing Image</span>
                          </div>
                          <p className="text-[9px] sm:text-[10px] font-bold text-red-600 mb-1">NEW: Discounts available!</p>
                          <div className="text-[9px] bg-yellow-200 p-1 border border-yellow-400 text-center font-bold">
                            Call us today: 555-0192
                          </div>
                        </div>

                        <div className="w-full shrink-0 flex flex-col gap-3">
                          {/* Empty Bad Google Profile */}
                          <div className="bg-[#f8f9fa] p-3 border border-[#dadce0] shadow-sm flex flex-col">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#dadce0]">
                              <Globe size={12} className="text-[#4285f4]" />
                              <h3 className="font-bold text-[9px] sm:text-[10px] text-[#202124]">Google Search</h3>
                            </div>
                            <div className="w-full h-16 sm:h-20 bg-[#e5e3df] border border-[#dadce0] flex items-center justify-center mb-2">
                              <Map size={16} className="text-[#9aa0a6]" />
                            </div>
                            <div className="flex gap-2 items-start">
                               <div className="w-8 h-8 bg-[#f1f3f4] flex items-center justify-center border border-[#dadce0] rounded shrink-0">
                                 <ImageIcon size={12} className="text-[#9aa0a6]" />
                               </div>
                               <div>
                                 <p className="text-[9px] sm:text-[10px] font-bold text-[#1a0dab] underline cursor-pointer leading-tight">My Company Ltd</p>
                                 <p className="text-[8px] sm:text-[9px] text-[#70757a] mt-0.5">0 reviews</p>
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Before Tag */}
                    <div className="absolute top-14 sm:top-16 left-3 sm:left-4 z-20 pointer-events-none">
                      <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-white border border-gray-300 text-gray-500 font-mono text-[8px] sm:text-[9px] tracking-widest uppercase font-bold shadow-lg">
                        {t.before}
                      </div>
                    </div>
                  </div>

                  {/* ========================================= */}
                  {/* AFTER CONTENT (Right side) */}
                  {/* ========================================= */}
                  <div 
                    className="absolute inset-0 bg-[#050505] overflow-hidden flex flex-col z-10"
                    style={{ clipPath: \`inset(0 0 0 \${sliderPosition}%)\` }}
                  >
                    {/* Browser Bar (Premium) */}
                    <div className="w-full bg-[#0a0a0a] border-b border-white/5 p-2 sm:p-3 flex items-center justify-center shrink-0 pt-8 sm:pt-10 relative z-20">
                      <div className="w-full bg-[#111] border border-white/5 rounded px-2 py-1.5 text-[9px] sm:text-[10px] text-gray-400 flex items-center justify-center gap-1.5 font-mono shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                        <Shield size={9} className="text-gold" />
                        turnclean.pro
                      </div>
                    </div>

                    <div className="flex-1 relative w-full h-full bg-[#050505] overflow-hidden">
                      <iframe 
                        src="https://www.turnclean.pro/" 
                        className="w-full h-full border-none pointer-events-none" 
                        title="Turnclean Pro Premium Website"
                      />
                    </div>
                    
                    {/* After Tag */}
                    <div className="absolute top-14 sm:top-16 right-3 sm:right-4 z-20 pointer-events-none">
                      <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-gold text-black font-mono text-[8px] sm:text-[9px] tracking-widest uppercase font-black shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                        {t.after}
                      </div>
                    </div>
                  </div>

                  {/* ========================================= */}
                  {/* DIVIDER LINE & HANDLE */}
                  {/* ========================================= */}
                  <div 
                    className="absolute top-0 bottom-0 w-[2px] bg-gold cursor-ew-resize z-30 shadow-[0_0_20px_rgba(212,175,55,1)]"
                    style={{ left: \`calc(\${sliderPosition}% - 1px)\` }}
                  >
                    {/* Draggable Button */}
                    <div 
                      className={\`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-transform duration-300 \${isDragging ? 'scale-90' : 'scale-100 hover:scale-110'}\`}
                    >
                      <ChevronLeft size={16} className="text-[#0a0a0a] -mr-0.5" strokeWidth={3} />
                      <ChevronRight size={16} className="text-[#0a0a0a] -ml-0.5" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM TRANSITION (To Testimonials) */}
      {/* ========================================= */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-obsidian pointer-events-none z-30" />
    </section>
  );
}
`;

fs.writeFileSync('src/components/BeforeAfterSlider.tsx', content, 'utf8');
console.log('Fixed BeforeAfterSlider.tsx');
