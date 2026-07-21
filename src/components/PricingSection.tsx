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
    let height = window.innerHeight * 2.5; // Taller to ensure full coverage
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
      width = window.innerWidth;
      height = window.innerHeight * 2.5;
      canvas.width = width;
      canvas.height = height;
      createParticles();
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
        ctx.shadowBlur = p.alpha > 0.8 ? 20 : 10;
        ctx.shadowColor = `rgba(${p.color}, ${p.alpha * 1.5})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-100 mix-blend-screen" />;
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

      {/* LAYER 4: High-Performance Canvas Gold Dust Particles */}
      <PricingCanvasParticles />

      <div className="relative z-10<div className="relative z-10 flex flex-col gap-8">
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
      </div>
    </section>
  );
}
