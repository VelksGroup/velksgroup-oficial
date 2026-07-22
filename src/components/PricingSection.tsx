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


// High-Performance Canvas Particles
const PricingCanvasParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: any[] = [];
    let mouse = { x: width / 2, y: height / 2, vx: 0, vy: 0 };
    let lastMouse = { x: width / 2, y: height / 2 };
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;
    let animationFrameId: number;

    const colors = [
      '212, 175, 55', // Deep Gold
      '255, 215, 0',  // Bright Gold
      '255, 235, 130', // Pale Gold
      '255, 255, 255' // Pure White
    ];

    const createParticles = () => {
      particles = [];
      const particleCount = width < 768 ? 120 : 350; // Increased count
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5, // Faster horizontal
          vy: (Math.random() - 0.5) * 1.5 + 0.5, // Faster vertical drift
          baseVx: (Math.random() - 0.5) * 1.5,
          baseVy: (Math.random() - 0.5) * 1.5 + 0.5,
          radius: Math.random() * 2.5 + 1, // Larger particles
          alpha: Math.random() * 0.8 + 0.2, // Higher base opacity
          flickerRate: Math.random() * 0.05 + 0.01,
          color: colors[Math.floor(Math.random() * colors.length)],
          flashTimer: Math.random() * 100
        });
      }
    };
    createParticles();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      
      mouse.vx = currentX - lastMouse.x;
      mouse.vy = currentY - lastMouse.y;
      
      mouse.x = currentX;
      mouse.y = currentY;
      
      lastMouse.x = currentX;
      lastMouse.y = currentY;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeed = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    const onResize = () => {
      if (Math.abs(width - window.innerWidth) > 10) {
        width = window.innerWidth;
        height = canvas.parentElement?.clientHeight || window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        createParticles();
      }
    };
    window.addEventListener('resize', onResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'screen'; // Add screen blend mode for vibrant glow

      // Dampen mouse velocity and scroll speed
      mouse.vx *= 0.9;
      mouse.vy *= 0.9;
      scrollSpeed *= 0.95;

      particles.forEach(p => {
        // Distance to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse interaction (repel/swirl)
        if (dist < 200) { // Increased interaction radius
          const force = (200 - dist) / 200;
          p.vx -= (dx / dist) * force * 1.5 + (mouse.vx * force * 0.05);
          p.vy -= (dy / dist) * force * 1.5 + (mouse.vy * force * 0.05);
          
          // Flash on hover
          p.alpha = 1; 
          p.radius = Math.min(p.radius + 0.5, 4);
        }

        // Scroll interaction
        p.vy -= scrollSpeed * 0.015; // Increased scroll reactivity

        // Return to base velocity
        p.vx += (p.baseVx - p.vx) * 0.05;
        p.vy += (p.baseVy - p.vy) * 0.05;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Flicker & Flash
        p.flashTimer -= 1;
        if (p.flashTimer <= 0) {
          p.alpha = 1; // Quick flash
          p.flashTimer = Math.random() * 200 + 50;
        } else {
          p.alpha += p.flickerRate;
          if (p.alpha > 0.9 || p.alpha < 0.2) p.flickerRate *= -1;
        }
        
        // Ensure radius recovers
        if (p.radius > 2.5) p.radius -= 0.1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        
        // Intense Glow
        
        
        ctx.fill();
      });

      // Draw subtle connecting lines for nearby particles (optional, makes it look more networked)
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          
          if (dist < 10000) { // approx 100px
            const opacity = (1 - dist / 10000) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-100 " />;
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
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#030305] ">
      
      {/* LAYER 1: Deep Premium Darkness & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f0f15] via-[#030305] to-[#010101] pointer-events-none" />
      
      {/* LAYER 5: Luminous Auroras (Background Lights) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] animate-aurora" />
        <div className="absolute top-[40%] -right-[20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] animate-aurora-slow" />
        <div className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] animate-aurora" />
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
          className="absolute top-1/4 right-[10%] w-[800px] h-[800px] opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'repeating-radial-gradient(circle at center, #D4AF37, transparent 1px, transparent 60px)' }}
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-[5%] w-[1000px] h-[1000px] opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, #D4AF37 0deg 1deg, transparent 1deg 15deg)' }}
        />

        {/* LAYER 6: Cinematic Depth (Subtle Light Beams) */}
        <div className="absolute top-0 left-1/4 w-[100px] h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent blur-3xl animate-light-beam" />
        <div className="absolute top-0 right-1/4 w-[150px] h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent blur-3xl animate-light-beam-delayed" />
      </motion.div>

      {/* LAYER 4: High-Performance Canvas Gold Dust Particles */}
      <PricingCanvasParticles />

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <span className="text-gold font-mono tracking-[0.2em] text-sm uppercase mb-4 block">
              {t.pricing.tag || "Investimento Estratégico"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t.pricing.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Standard Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {standardPlans.map((plan, index) => {
            const isHovered = hoveredCard === index;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative rounded-3xl bg-[#0b0b0d]/80 sm:backdrop-blur-md border border-white/5 hover:border-gold/30 transition-all duration-700 flex flex-col overflow-hidden h-full"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-transparent group-hover:to-gold/5 transition-all duration-700 pointer-events-none" />
                
                <div className="p-8 md:p-10 flex flex-col h-full z-10 relative">
                  <div className="flex-1 flex flex-col gap-8">
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-gray-400 bg-black/40 border border-white/5 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-500 shadow-inner">
                        0{index + 1}. {plan.id.toUpperCase()}
                      </span>
                      <h3 className="text-3xl font-display font-bold text-white mt-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold/80 transition-all duration-500">
                        {plan.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col gap-2 border-b border-white/5 pb-8 relative">
                      <span className="text-xs text-gray-500 font-mono tracking-[0.15em] uppercase">{currentLang === 'pt' ? 'A partir de' : currentLang === 'es' ? 'A partir de' : currentLang === 'it' ? 'A partire da' : currentLang === 'fr' ? 'À partir de' : currentLang === 'de' ? 'Ab' : 'Starting from'}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl lg:text-6xl font-display font-black tracking-tighter text-white group-hover:text-gold transition-colors duration-500 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                          {plan.price.includes('€') ? <AnimatedNumber value={plan.price} /> : plan.price}
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
                      className="w-full py-4 sm:py-5 px-2 rounded-xl font-display font-bold text-[10px] sm:text-xs uppercase tracking-widest sm:tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden bg-black/40 text-gray-300 border border-white/10 group-hover:border-gold/40 group-hover:bg-gradient-to-r group-hover:from-gold/10 group-hover:to-gold/5 group-hover:text-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    >
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                      <MessageSquare size={16} className="group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] flex-shrink-0" />
                      <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] break-words whitespace-normal text-center flex-1">{plan.cta}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Imperial Plan (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative rounded-3xl bg-gradient-to-b from-[#111116] to-[#0a0a0d] border border-gold/30 hover:border-gold/50 transition-all duration-700 overflow-hidden group shadow-[0_0_40px_rgba(212,175,55,0.05)] hover:shadow-[0_0_60px_rgba(212,175,55,0.1)]"
        >
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10  pointer-events-none" />
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start relative z-10">
            {/* Left side: Header & Price */}
            <div className="flex-1 flex flex-col gap-8 w-full">
              <div className="flex justify-between items-start">
                <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-gold bg-gold/10 border border-gold/20 shadow-inner">
                  05. IMPERIAL
                </span>
                <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] px-4 py-1.5 rounded-full text-black bg-gold font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  Ultimate Control
                </span>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold transition-all duration-500">
                  {customPlan.title}
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base">Pack Integrado</p>
              </div>
              
              <div className="flex flex-col gap-4 border-b border-white/5 pb-8 relative">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    {customPlan.price}
                  </span>
                </div>
                <div className="inline-flex">
                  <span className="text-xs text-gold/70 font-mono tracking-[0.2em] uppercase border border-gold/20 px-3 py-1 rounded-sm bg-gold/5">
                    {currentLang === 'pt' ? 'Pagamento Único' : currentLang === 'es' ? 'Pago Único' : currentLang === 'it' ? 'Pagamento Unico' : currentLang === 'fr' ? 'Paiement Unique' : currentLang === 'de' ? 'Einmalige Zahlung' : 'One-Time Payment'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right side: Features & CTA */}
            <div className="flex-[1.5] flex flex-col gap-10 w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {customPlan.features.map((feature: string, i: number) => (
                  <motion.li 
                    key={i} 
                    initial={false}
                    className="flex items-start gap-4 text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors duration-300"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-gold bg-gold/10 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(customPlan.tracking)}
                className="w-full py-5 md:py-6 px-4 rounded-xl font-display font-bold text-xs md:text-sm uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden bg-gradient-to-r from-gold/80 to-gold text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-[1.02]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <MessageSquare size={20} className="flex-shrink-0" />
                <span className="relative z-10 break-words text-center">{customPlan.cta}</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
