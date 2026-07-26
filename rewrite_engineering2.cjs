const fs = require('fs');

const content = `import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { ChevronRight, Activity, Terminal } from 'lucide-react';

interface EngineeringSectionProps {
  handleWhatsAppClick: (msg: string) => void;
}

export const EngineeringSection: React.FC<EngineeringSectionProps> = ({ handleWhatsAppClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRendered(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isRendered || !canvasRef.current || !containerRef.current) return;
    
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    // Deep black fog for cinematic depth
    scene.fog = new THREE.FogExp2(0x050505, 0.02);
    
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 200);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit DPR for performance

    const group = new THREE.Group();
    scene.add(group);

    const colorGold = 0xD4AF37;
    const colorBlue = 0x4FD1FF;
    const colorBlack = 0x050505;

    // 1. CENA 1: Monumental Golden Polyhedron
    const polyGeom = new THREE.IcosahedronGeometry(40, 2);
    const polyWireframe = new THREE.WireframeGeometry(polyGeom);
    const polyMat = new THREE.LineBasicMaterial({ 
      color: colorGold, 
      transparent: true, 
      opacity: 0.08, 
      blending: THREE.AdditiveBlending 
    });
    const polyhedron = new THREE.LineSegments(polyWireframe, polyMat);
    group.add(polyhedron);

    // 2. CENA 2: Giant Energetic Rings
    const ringsGroup = new THREE.Group();
    const ringMat = new THREE.LineBasicMaterial({ 
      color: colorBlue, 
      transparent: true, 
      opacity: 0.15, 
      blending: THREE.AdditiveBlending 
    });
    for (let i = 0; i < 8; i++) {
      const ringGeom = new THREE.TorusGeometry(22 + i * 2, 0.02, 16, 100);
      const ring = new THREE.LineLoop(ringGeom, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ringsGroup.add(ring);
    }
    group.add(ringsGroup);

    // 3. CENA 3: Fractal/Hexagonal Crystals
    const crystalGroup = new THREE.Group();
    const crystalMat = new THREE.LineBasicMaterial({ 
      color: colorGold, 
      transparent: true, 
      opacity: 0.25, 
      blending: THREE.AdditiveBlending 
    });
    
    // Create a sphere of hexagonal prisms
    const crystalCount = width > 768 ? 20 : 10;
    for (let i = 0; i < crystalCount; i++) {
      const hexGeom = new THREE.CylinderGeometry(2, 2, 10, 6);
      const hexWire = new THREE.WireframeGeometry(hexGeom);
      const crystal = new THREE.LineSegments(hexWire, crystalMat);
      
      const phi = Math.acos(-1 + (2 * i) / crystalCount);
      const theta = Math.sqrt(crystalCount * Math.PI) * phi;
      crystal.position.setFromSphericalCoords(14, phi, theta);
      crystal.lookAt(0, 0, 0);
      
      crystalGroup.add(crystal);
    }
    group.add(crystalGroup);

    // 4. CENA 4: Abstract Digital Core
    const coreGroup = new THREE.Group();
    const coreGeom = new THREE.IcosahedronGeometry(5, 1);
    const coreWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(coreGeom),
      new THREE.LineBasicMaterial({ color: colorBlue, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending })
    );
    coreGroup.add(coreWire);
    
    const coreSolid = new THREE.Mesh(
      coreGeom,
      new THREE.MeshBasicMaterial({ color: colorBlack })
    );
    coreGroup.add(coreSolid);
    group.add(coreGroup);

    // Ambient floating tech dust (NO lines, NO neural nets)
    const pCount = width > 768 ? 400 : 150;
    const pGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 6 + Math.random() * 50;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      pPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i*3+2] = r * Math.cos(phi);
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ 
      color: colorGold, 
      size: 0.1, 
      transparent: true, 
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeom, pMat);
    group.add(particles);
    
    let animationFrameId: number;
    let time = 0;
    let scrollProgress = 0;
    let targetScroll = 0;

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      targetScroll = Math.max(0, Math.min(1, currentScroll / totalScroll));
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let isVisible = false;
    const visibilityObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    visibilityObserver.observe(containerRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      time += 0.001;
      scrollProgress += (targetScroll - scrollProgress) * 0.05;

      // Cinematic Camera Dive (60 down to 8)
      camera.position.z = 60 - (scrollProgress * 52);

      // Slow, monumental rotations
      polyhedron.rotation.y = time * 0.1 + scrollProgress * 0.3;
      polyhedron.rotation.x = time * 0.05;

      ringsGroup.rotation.y = -time * 0.15 + scrollProgress * 0.5;
      ringsGroup.rotation.z = time * 0.05;
      ringsGroup.children.forEach((r, idx) => {
        r.rotation.x += 0.001 * (idx % 2 === 0 ? 1 : -1);
      });

      crystalGroup.rotation.x = time * 0.2 + scrollProgress * 0.2;
      crystalGroup.rotation.y = time * 0.1;

      coreGroup.rotation.y = time * 0.4 + scrollProgress;
      coreGroup.rotation.x = -time * 0.2;
      
      // Core pulses slightly
      const coreScale = 1 + Math.sin(time * 3) * 0.05 + scrollProgress * 0.2;
      coreGroup.scale.setScalar(coreScale);

      // Particles ambient drift
      particles.rotation.y = -time * 0.05;
      particles.rotation.z = time * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      polyGeom.dispose();
      polyWireframe.dispose();
      polyMat.dispose();
      ringMat.dispose();
      crystalMat.dispose();
      coreGeom.dispose();
      pGeom.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, [isRendered]);

  return (
    <section ref={containerRef} className="relative bg-[#050505] text-white pt-24 pb-20 overflow-hidden border-t border-white/5">
      <style>
        {\`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-slow {
            animation: marquee 50s linear infinite;
          }
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
          @keyframes pulse-scale {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
          
          .tech-card {
            background: rgba(5, 5, 5, 0.6);
            border: 1px solid rgba(212, 175, 55, 0.1);
            backdrop-filter: blur(12px);
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          
          .tech-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 50%, rgba(79,209,255,0.03) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          
          .tech-card:hover {
            transform: translateY(-4px);
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: 0 10px 40px -10px rgba(212, 175, 55, 0.15), 
                        inset 0 0 20px rgba(212, 175, 55, 0.02);
          }
          
          .tech-card:hover::before {
            opacity: 1;
          }
          
          .tech-card::after {
            content: '';
            position: absolute;
            top: 0; left: -100%; width: 50%; height: 1px;
            background: linear-gradient(90deg, transparent, #D4AF37, transparent);
            transition: left 0.5s ease;
          }
          .tech-card:hover::after {
            left: 100%;
            transition: left 1s ease infinite;
          }
          
          .corner-dot {
            position: absolute;
            width: 3px; height: 3px;
            background: rgba(212, 175, 55, 0.3);
            transition: background 0.3s ease;
          }
          .tech-card:hover .corner-dot {
            background: #4FD1FF;
            box-shadow: 0 0 8px #4FD1FF;
          }
          .tl { top: 0; left: 0; }
          .tr { top: 0; right: 0; }
          .bl { bottom: 0; left: 0; }
          .br { bottom: 0; right: 0; }
        \`}
      </style>

      {/* Background WebGL */}
      {isRendered && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-90 mix-blend-screen" />}
      
      {/* Válvula de escape visual / subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-14 flex flex-col md:w-3/4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4AF37]/80">
              ANTES DE DECIDIR, VEJA O TIPO DE TECNOLOGIA QUE DESENVOLVEMOS PARA CLIENTES QUE EXIGEM MAIS DO QUE UM SIMPLES WEBSITE.
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1] text-white/90 mb-6"
          >
            NÃO SOMOS WEB DESIGNERS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC] font-bold block mt-1">SOMOS ENGENHEIROS DE PRODUTO.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Enquanto o mercado vende templates, nós desenvolvemos sistemas capazes de operar aplicações, automações, agentes inteligentes e infraestruturas digitais preparadas para crescimento real.
          </motion.p>
        </div>

        <div className="mb-16 md:mb-20 max-w-4xl">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-[#D4AF37]/40 uppercase">
              [ OPERATIONAL METRICS ]
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-3 gap-2 md:gap-8">
            <AnimatedMetric
              targetValue={167}
              duration={1800}
              delay={0}
              label="AUTOMAÇÕES"
              formatValue={(val, completed) => <>{val}<span>+</span></>}
            />
            <AnimatedMetric
              targetValue={42}
              duration={1600}
              delay={100}
              label="PROJETOS IA"
              borderLeft
              formatValue={(val, completed) => <>{val}<span>+</span></>}
            />
            <AnimatedMetric
              targetValue={24}
              duration={1600}
              delay={200}
              label="INFRAESTRUTURA ATIVA"
              borderLeft
              formatValue={(val, completed) => completed ? "24/7" : val}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 relative z-20">
          <EngineeringCard 
             id="SYS_01"
             title="ARQUITETURA DE AGENTES IA" 
             desc="Orquestração multimodelo, memória contextual persistente, processamento de linguagem natural e integração de voz em tempo real para experiências conversacionais avançadas."
             tags="LLM • STT • TTS • MEMORY"
             delay={0.1}
          />
          <EngineeringCard 
             id="SYS_02"
             title="ENGENHARIA VISUAL EM TEMPO REAL" 
             desc="Interfaces de alta performance desenvolvidas com renderização avançada, animações otimizadas e experiências digitais concebidas para retenção máxima."
             tags="WEBGL • THREE.JS • GSAP • SCROLLYTELLING"
             delay={0.2}
          />
          <EngineeringCard 
             id="SYS_03"
             title="INFRAESTRUTURA REATIVA DISTRIBUÍDA" 
             desc="Bases de dados, eventos em tempo real e arquiteturas modernas preparadas para suportar aplicações vivas, automação intensiva e crescimento contínuo."
             tags="SUPABASE • POSTGRESQL • REALTIME • EDGE"
             delay={0.3}
          />
          <EngineeringCard 
             id="SYS_04"
             title="ARQUITETURA SaaS & PAYMENTS" 
             desc="Sistemas de autenticação, subscrição, faturação e proteção de dados preparados para produtos digitais de escala internacional."
             tags="STRIPE • AUTH • RGPD • BILLING"
             delay={0.4}
          />
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden border-y border-[#D4AF37]/10 bg-[#050505]/80 py-3 mb-16 flex items-center shadow-[inset_0_0_30px_rgba(212,175,55,0.03)] backdrop-blur-md">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        
        <div className="flex items-center pl-6 pr-4 border-r border-[#D4AF37]/10 shrink-0 z-20 bg-[#050505]/50">
          <Terminal size={14} className="text-[#D4AF37] animate-pulse mr-2" />
          <span className="text-[10px] font-mono text-[#D4AF37]/80 tracking-widest font-semibold uppercase">[ ACTIVE STACK ]</span>
        </div>
        
        <div className="flex w-max animate-marquee-slow items-center opacity-70 hover:opacity-100 transition-opacity">
          {[...Array(4)].map((_, i) => (
             <span key={i} className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-[#D4AF37]/50 mx-6 uppercase whitespace-nowrap flex items-center">
               LLM <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               WEBGL <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               THREE.JS <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               POSTGRESQL <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               VECTOR SEARCH <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               STRIPE <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               SUPABASE <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               EDGE FUNCTIONS <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               REAL-TIME VOICE <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               AI AGENTS <span className="mx-3 text-[#4FD1FF]/50">•</span> 
               EVENT STREAMING
             </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8" />
          
          <h3 className="text-xl md:text-3xl font-display font-light leading-snug text-white/70 mb-10 text-balance max-w-3xl mx-auto">
            A maioria dos clientes chega até nós à procura de um website.
            <br className="hidden md:block" />
            <span className="text-white font-medium mt-3 block">Muitos descobrem que o que realmente precisam é de uma infraestrutura capaz de acelerar todo o negócio.</span>
          </h3>
          
          <div className="flex flex-col items-center gap-4">
            <button 
               onClick={() => handleWhatsAppClick("Olá, VELKS Team.\\nGostaria de discutir uma arquitetura técnica para um projeto de IA, SaaS ou Web App. Vocês poderiam me ajudar ?")}
               className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC] text-[#050505] font-display font-bold text-xs md:text-sm tracking-[0.15em] uppercase hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 w-full md:w-auto overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_forwards]" />
              <span className="relative z-10 flex items-center gap-3">
                DISCUTIR ARQUITETURA TÉCNICA
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]/40 uppercase">
              IA • SaaS • Web Apps • Arquitetura Digital
            </span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

const AnimatedMetric = ({
  targetValue,
  duration,
  delay,
  label,
  borderLeft,
  formatValue
}: {
  targetValue: number;
  duration: number;
  delay: number;
  label: string;
  borderLeft?: boolean;
  formatValue: (val: number, completed: boolean) => React.ReactNode;
}) => {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState<'idle' | 'counting' | 'completed'>('idle');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setStatus('counting'), delay);
        observer.disconnect();
      }
    }, { rootMargin: '-40% 0px' });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (status !== 'counting') return;
    let startTime: number;
    let animationFrame: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      setValue(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setStatus('completed');
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [status, targetValue, duration]);

  const baseClass = "text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-1 md:mb-2 tracking-tight transition-all duration-300 inline-block origin-left";
  const glowClass = status === 'counting' ? "text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" : "text-[#d4af37]";
  const pulseClass = status === 'completed' ? "animate-[pulse-scale_300ms_ease-out_forwards]" : "";

  return (
    <div 
      ref={ref} 
      className={\`flex flex-col transition-all duration-[600ms] ease-out \${status !== 'idle' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'} \${borderLeft ? 'border-l border-[#D4AF37]/10 pl-4 md:pl-8' : ''}\`}
    >
      <span className={\`\${baseClass} \${glowClass} \${pulseClass}\`}>
        {formatValue(value, status === 'completed')}
      </span>
      <span className="text-[8px] md:text-xs font-mono tracking-[0.2em] text-white/40 uppercase">
        {label}
      </span>
    </div>
  );
};

const EngineeringCard = ({ id, title, desc, tags, delay }: { id: string, title: string, desc: string, tags: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.5 }}
    className="tech-card flex flex-col p-6 md:p-8 rounded-xl group"
  >
    {/* Technical Corners */}
    <div className="corner-dot tl"></div>
    <div className="corner-dot tr"></div>
    <div className="corner-dot bl"></div>
    <div className="corner-dot br"></div>

    <div className="flex items-center justify-between mb-8 relative z-10">
      <div className="flex items-center gap-2">
        <Activity size={12} className="text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors" />
        <span className="text-[10px] font-mono text-white/30 tracking-widest group-hover:text-[#4FD1FF]/80 transition-colors">MODULE</span>
      </div>
      <span className="text-[10px] font-mono text-[#D4AF37]/70 bg-[#D4AF37]/10 px-2 py-0.5 rounded-sm border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/20 transition-all">{id}</span>
    </div>

    <div className="flex-1 mb-10 relative z-10">
      <h4 className="text-base md:text-lg font-display font-medium text-white/90 mb-3 tracking-wide group-hover:text-white transition-colors duration-300">{title}</h4>
      <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors">{desc}</p>
    </div>

    <div className="pt-5 border-t border-[#D4AF37]/10 mt-auto relative z-10 group-hover:border-[#4FD1FF]/30 transition-colors">
      <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-[#4FD1FF]/50 group-hover:text-[#4FD1FF]/90 transition-colors duration-300 block leading-tight">{tags}</span>
    </div>
  </motion.div>
);
`

fs.writeFileSync('src/components/EngineeringSection.tsx', content);
console.log('done');
