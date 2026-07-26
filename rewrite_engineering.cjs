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
    // Deep volumetric fog to hide the background and reveal the massive structure slowly
    scene.fog = new THREE.FogExp2(0x050505, 0.006);
    
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const colorGold = 0xD4AF37;
    const colorBlue = 0x4FD1FF;
    const colorBlack = 0x050505;

    // Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(colorBlue, 800, 200);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const topLight = new THREE.DirectionalLight(colorGold, 3);
    topLight.position.set(100, 150, 50);
    scene.add(topLight);

    const fillLight = new THREE.DirectionalLight(colorBlue, 1.5);
    fillLight.position.set(-100, -50, 100);
    scene.add(fillLight);

    const group = new THREE.Group();
    scene.add(group);

    // ==========================================
    // 1. MEGA STRUCTURE: THE QUANTUM CORE
    // ==========================================
    const coreGroup = new THREE.Group();
    group.add(coreGroup);

    // The Main Machine (Giant Torus Knot)
    const knotGeo = new THREE.TorusKnotGeometry(18, 4.5, 200, 32);
    const knotMat = new THREE.MeshStandardMaterial({
      color: colorBlack,
      metalness: 0.9,
      roughness: 0.2,
      flatShading: true,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    coreGroup.add(knot);

    // Golden Inlays/Edges for the Machine
    const knotEdgesGeo = new THREE.EdgesGeometry(knotGeo);
    const knotEdgesMat = new THREE.LineBasicMaterial({
      color: colorGold,
      transparent: true,
      opacity: 0.4
    });
    const knotEdges = new THREE.LineSegments(knotEdgesGeo, knotEdgesMat);
    knot.add(knotEdges);

    // The Inner Energy Sphere (Blue)
    const energyGeo = new THREE.SphereGeometry(9, 32, 32);
    const energyMat = new THREE.MeshBasicMaterial({
      color: colorBlue,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const energy = new THREE.Mesh(energyGeo, energyMat);
    coreGroup.add(energy);

    // Outer Glow for Energy
    const glowGeo = new THREE.SphereGeometry(10, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: colorBlue,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    coreGroup.add(glow);

    // The Core Shaft (Grounding it as an infrastructure facility)
    const shaftGeo = new THREE.CylinderGeometry(15, 15, 200, 32);
    const shaftMat = new THREE.MeshStandardMaterial({
      color: colorBlack,
      metalness: 0.9,
      roughness: 0.2
    });
    const shaft = new THREE.Mesh(shaftGeo, shaftMat);
    shaft.position.set(0, -110, 0);
    coreGroup.add(shaft);

    for(let i=0; i<4; i++) {
       const sRingGeo = new THREE.TorusGeometry(18, 1, 16, 64);
       const sRingMat = new THREE.MeshStandardMaterial({ color: colorBlack, emissive: colorGold, emissiveIntensity: 0.3 });
       const sRing = new THREE.Mesh(sRingGeo, sRingMat);
       sRing.position.set(0, -40 - i*30, 0);
       sRing.rotation.x = Math.PI / 2;
       coreGroup.add(sRing);
    }

    // ==========================================
    // 2. ORBITAL RINGS
    // ==========================================
    const ringsGroup = new THREE.Group();
    coreGroup.add(ringsGroup);

    for (let i = 0; i < 3; i++) {
      const ringRadius = 45 + i * 15;
      const ringGeo = new THREE.TorusGeometry(ringRadius, 1.5, 32, 120);
      const ringMat = new THREE.MeshStandardMaterial({
        color: colorBlack,
        emissive: colorGold,
        emissiveIntensity: 0.1,
        metalness: 1,
        roughness: 0.1
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;

      // Golden light ring embedded inside
      const rEdgeGeo = new THREE.TorusGeometry(ringRadius, 1.6, 16, 100);
      const rEdgeMat = new THREE.MeshBasicMaterial({ 
        color: colorGold, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true,
        blending: THREE.AdditiveBlending
      });
      const rEdge = new THREE.Mesh(rEdgeGeo, rEdgeMat);
      ring.add(rEdge);

      ringsGroup.add(ring);
    }

    // ==========================================
    // 3. THE CORRIDOR (Massive Server Monoliths)
    // ==========================================
    const corridorGroup = new THREE.Group();
    group.add(corridorGroup);

    const monoGeo = new THREE.BoxGeometry(8, 120, 25);
    const monoMat = new THREE.MeshStandardMaterial({
      color: colorBlack,
      metalness: 0.8,
      roughness: 0.3
    });
    const monoEdgeGeo = new THREE.EdgesGeometry(monoGeo);
    const monoEdgeMat = new THREE.LineBasicMaterial({ color: colorGold, transparent: true, opacity: 0.15 });

    for (let i = 0; i < 24; i++) {
      const monolith = new THREE.Mesh(monoGeo, monoMat);
      const mEdge = new THREE.LineSegments(monoEdgeGeo, monoEdgeMat);
      monolith.add(mEdge);

      const z = 50 + i * 15;
      const side = i % 2 === 0 ? 1 : -1;
      const x = side * (45 + Math.random() * 20); // 45 to 65 units to the side
      const y = (Math.random() - 0.5) * 80;

      monolith.position.set(x, y, z);
      monolith.rotation.x = (Math.random() - 0.5) * 0.1;
      monolith.rotation.z = (Math.random() - 0.5) * 0.1;

      corridorGroup.add(monolith);
    }
    
    // Mobile optimization: slightly adjust global scale so it fits without cropping too much
    const updatePosition = () => {
      if (width < 768) {
         group.scale.setScalar(0.7);
      } else {
         group.scale.setScalar(1);
      }
    };
    updatePosition();

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

      time += 0.002;
      scrollProgress += (targetScroll - scrollProgress) * 0.05; // Smooth interpolation

      // ==========================================
      // CINEMATIC CAMERA MOVEMENT
      // ==========================================
      // Start far back in the corridor (z=280)
      // End past the core (z=-40)
      camera.position.z = 280 - (scrollProgress * 320);

      // Camera drift to simulate floating in space
      camera.position.x = Math.sin(time * 0.5) * 6;
      camera.position.y = Math.cos(time * 0.3) * 6;
      
      // Always lock focus on the central core
      camera.lookAt(coreGroup.position);

      // ==========================================
      // SCENE ANIMATIONS
      // ==========================================
      knot.rotation.y = time * 0.15;
      knot.rotation.x = time * 0.1;

      energy.scale.setScalar(1 + Math.sin(time * 4) * 0.04);
      glow.scale.setScalar(1 + Math.sin(time * 4) * 0.06);

      ringsGroup.children.forEach((ring, idx) => {
        ring.rotation.x += 0.001 * (idx % 2 === 0 ? 1 : -1);
        ring.rotation.y += 0.0015 * (idx % 3 === 0 ? 1 : -1);
      });

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
      updatePosition();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      knotGeo.dispose();
      knotMat.dispose();
      knotEdgesGeo.dispose();
      knotEdgesMat.dispose();
      energyGeo.dispose();
      energyMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      shaftGeo.dispose();
      shaftMat.dispose();
      monoGeo.dispose();
      monoMat.dispose();
      monoEdgeGeo.dispose();
      monoEdgeMat.dispose();
      renderer.dispose();
    };
  }, [isRendered]);

  return (
    <section ref={containerRef} className="relative bg-[#050505] text-white pt-24 pb-20 overflow-hidden">
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
            background: rgba(5, 5, 5, 0.4);
            border: 1px solid rgba(212, 175, 55, 0.15);
            backdrop-filter: blur(16px);
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
            background: rgba(212, 175, 55, 0.4);
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

      {/* Background 3D Scene - Pure, no grids or css backgrounds */}
      {isRendered && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />}
      
      {/* Top and Bottom gradient overlays for seamless blending with the rest of the page */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0" />

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
            className="text-sm md:text-lg text-white/70 font-light max-w-2xl leading-relaxed"
          >
            Enquanto o mercado vende templates, nós desenvolvemos sistemas capazes de operar aplicações, automações, agentes inteligentes e infraestruturas digitais preparadas para crescimento real.
          </motion.p>
        </div>

        <div className="mb-16 md:mb-20 max-w-4xl">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-[#D4AF37]/60 uppercase">
              [ OPERATIONAL METRICS ]
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
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

      <div className="relative z-10 w-full overflow-hidden border-y border-[#D4AF37]/20 bg-[#050505]/60 py-3 mb-16 flex items-center shadow-[inset_0_0_30px_rgba(212,175,55,0.05)] backdrop-blur-xl">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        
        <div className="flex items-center pl-6 pr-4 border-r border-[#D4AF37]/20 shrink-0 z-20 bg-[#050505]/50">
          <Terminal size={14} className="text-[#D4AF37] animate-pulse mr-2" />
          <span className="text-[10px] font-mono text-[#D4AF37]/90 tracking-widest font-semibold uppercase">[ ACTIVE STACK ]</span>
        </div>
        
        <div className="flex w-max animate-marquee-slow items-center opacity-80 hover:opacity-100 transition-opacity">
          {[...Array(4)].map((_, i) => (
             <span key={i} className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-[#D4AF37]/60 mx-6 uppercase whitespace-nowrap flex items-center">
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
          
          <h3 className="text-xl md:text-3xl font-display font-light leading-snug text-white/80 mb-10 text-balance max-w-3xl mx-auto">
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
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]/50 uppercase">
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
