import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, MessageSquare, Play } from 'lucide-react';
import { Language, TranslationSchema } from '../translations';

interface ThreeHeroProps {
  currentLang: Language;
  t: TranslationSchema;
  onCtaClick: (trackingMsg: string) => void;
  onScrollToDemos: () => void;
}

export const ThreeHero: React.FC<ThreeHeroProps> = ({
  currentLang,
  t,
  onCtaClick,
  onScrollToDemos,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showModule, setShowModule] = useState(false);

  // Smooth scroll tracking using LERP
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Fix: Base progress off of window scroll and a shorter height to finish animation faster
      // and reduce the total dead space height of the section.
      const height = window.innerHeight * 0.6;
      const progress = height > 0 ? Math.min(Math.max(window.scrollY / height, 0), 1) : 0;
      targetScroll.current = progress || 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to +1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0b0d, 0.05);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Group for entire logo
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // 5. Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.1,
      bumpScale: 0.05,
    });

    const copperMaterial = new THREE.MeshStandardMaterial({
      color: 0xaa7c11,
      metalness: 0.85,
      roughness: 0.2,
    });

    // 6. Build the Letter 'V'
    const leftLegGeom = new THREE.CylinderGeometry(0.2, 0.2, 3, 16);
    leftLegGeom.rotateZ(-0.25);
    leftLegGeom.translate(-0.4, 0, 0);

    const rightLegGeom = new THREE.CylinderGeometry(0.2, 0.2, 3, 16);
    rightLegGeom.rotateZ(0.25);
    rightLegGeom.translate(0.4, 0, 0);

    const leftLeg = new THREE.Mesh(leftLegGeom, goldMaterial);
    const rightLeg = new THREE.Mesh(rightLegGeom, goldMaterial);
    
    const vGroup = new THREE.Group();
    vGroup.add(leftLeg);
    vGroup.add(rightLeg);
    logoGroup.add(vGroup);

    // 7. Build the Crown points (above the V)
    const crownGroup = new THREE.Group();
    crownGroup.position.y = 1.3;

    // Crown base arc
    const baseGeom = new THREE.TorusGeometry(0.7, 0.06, 8, 32, Math.PI);
    const baseArc = new THREE.Mesh(baseGeom, copperMaterial);
    baseArc.rotation.x = Math.PI / 2;
    crownGroup.add(baseArc);

    // 5 Crown Cones
    const cones: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i - 2) * 0.35; // centered
      const coneGeom = new THREE.ConeGeometry(0.12, 0.5, 16);
      const cone = new THREE.Mesh(coneGeom, goldMaterial);
      cone.position.set(Math.sin(angle) * 0.65, Math.cos(angle) * 0.15, -Math.cos(angle) * 0.05);
      cone.rotation.z = -angle * 0.8;
      cones.push(cone);
      crownGroup.add(cone);

      // Spheres on top of cones
      const sphereGeom = new THREE.SphereGeometry(0.06, 16, 16);
      const sphere = new THREE.Mesh(sphereGeom, goldMaterial);
      sphere.position.set(
        cone.position.x + Math.sin(angle) * 0.28,
        cone.position.y + Math.cos(angle) * 0.28,
        cone.position.z
      );
      crownGroup.add(sphere);
    }
    logoGroup.add(crownGroup);

    // 8. Build the Orbital Ring (Torus)
    const orbitalRingGeom = new THREE.TorusGeometry(2.4, 0.04, 12, 64);
    const orbitalRing = new THREE.Mesh(orbitalRingGeom, copperMaterial);
    orbitalRing.rotation.x = Math.PI / 2.3;
    logoGroup.add(orbitalRing);

    // Secondary orbital ring for depth
    const orbitalRingGeom2 = new THREE.TorusGeometry(2.5, 0.015, 8, 64);
    const orbitalRing2 = new THREE.Mesh(orbitalRingGeom2, goldMaterial);
    orbitalRing2.rotation.x = Math.PI / 2.3;
    orbitalRing2.rotation.y = 0.1;
    logoGroup.add(orbitalRing2);

    // 9. Floating Golden Dust (Particles)
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const randomSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical or spherical coordinates centered around logo
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 8;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 12;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      randomSpeeds[i] = 0.2 + Math.random() * 0.8;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom glowing particle texture (circular gradient)
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(212, 175, 55, 1)');
      grad.addColorStop(0.3, 'rgba(212, 175, 55, 0.8)');
      grad.addColorStop(1, 'rgba(11, 11, 13, 0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 10. Lighting
    const ambientLight = new THREE.AmbientLight(0x0b0b0d, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4af37, 4);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xaa7c11, 2);
    dirLight2.position.set(-5, 3, 2);
    scene.add(dirLight2);

    // Volumetric glow light following the mouse
    const mouseLight = new THREE.PointLight(0xd4af37, 8, 12);
    scene.add(mouseLight);

    // Backlight to create silhouette
    const backLight = new THREE.PointLight(0xaa7c11, 5, 10);
    backLight.position.set(0, 0, -2);
    scene.add(backLight);

    // 11. Animation & Responsive Handling
    let animationFrameId: number;
    let localMouse = { x: 0, y: 0 };
    const startTime = Date.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = (Date.now() - startTime) * 0.001;

      // Smooth scroll progress using Lerp
      currentScroll.current += (targetScroll.current - currentScroll.current) * 0.08;
      const progress = currentScroll.current;
      setScrollProgress(progress);

      // Smooth mouse lerp
      localMouse.x += (mousePos.x - localMouse.x) * 0.05;
      localMouse.y += (mousePos.y - localMouse.y) * 0.05;

      // Auto movement for mobile and extra life
      const autoRotateX = Math.sin(time * 0.5) * 0.05;
      const autoRotateY = Math.cos(time * 0.3) * 0.05;
      const breathingScale = 1 + Math.sin(time * 1.5) * 0.02;

      // Mouse interactive light
      mouseLight.position.x = localMouse.x * 5;
      mouseLight.position.y = localMouse.y * 5;
      mouseLight.position.z = 3;

      // Cinemagraphic Camera Path (Z-Axis travel & rotation)
      // Standard zoom in: position goes from 8 down to -3
      const baseZ = 8;
      const targetZ = baseZ - progress * 13; // zoom past the logo
      camera.position.z = targetZ;
      camera.position.x = localMouse.x * 0.6;
      camera.position.y = localMouse.y * 0.6;

      // Add a cinematic spline curve movement as progress goes
      if (progress > 0.01) {
        camera.position.x += Math.sin(progress * Math.PI) * 1.5;
        camera.position.y += Math.cos(progress * Math.PI) * 0.5;
      }

      // Rotate logo group
      logoGroup.rotation.y = localMouse.x * 0.15 + autoRotateY + (progress * 1.5);
      logoGroup.rotation.x = localMouse.y * 0.1 + autoRotateX + (progress * 0.5);

      // Animate particles
      const positionsArr = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Particles rotate and drift
        const idx = i * 3;
        
        // Speed multiplier (slightly faster for more life)
        const speed = randomSpeeds[i] * 0.02;
        
        // Circular rotation
        const posX = positionsArr[idx];
        const posZ = positionsArr[idx + 2];
        const angle = Math.atan2(posZ, posX) + speed;
        const radius = Math.sqrt(posX * posX + posZ * posZ);
        
        positionsArr[idx] = Math.cos(angle) * radius;
        positionsArr[idx + 2] = Math.sin(angle) * radius;

        // Drift towards camera on scroll
        if (progress > 0.15) {
          positionsArr[idx + 2] += progress * speed * 20;
          if (positionsArr[idx + 2] > 8) {
            positionsArr[idx + 2] = -8;
          }
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Dissolve logo as camera gets extremely close
      const opacityThreshold = 0.55;
      if (progress > opacityThreshold) {
        const logoScale = Math.max(1 - (progress - opacityThreshold) * 3, 0) * breathingScale;
        logoGroup.scale.set(logoScale, logoScale, logoScale);
        setShowModule(true);
      } else {
        logoGroup.scale.set(breathingScale, breathingScale, breathingScale);
        setShowModule(false);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [mousePos]);

  // Translate words for orbital wheel
  const getOrbitalWords = () => {
    switch (currentLang) {
      case 'pt': return 'CRESCIMENTO • VISIBILIDADE • AUTOMATIZAÇÃO • TRÁFEGO • SUCESSO';
      case 'es': return 'CRECIMIENTO • VISIBILIDAD • AUTOMATIZACIÓN • TRÁFICO • ÉXITO';
      case 'it': return 'CRESCITA • VISIBILITÀ • AUTOMAZIONE • TRAFFICO • SUCCESSO';
      case 'fr': return 'CROISSANCE • VISIBILITÉ • AUTOMATISATION • TRAFIC • SUCCÈS';
      case 'de': return 'WACHSTUM • SICHTBARKEIT • AUTOMATISIERUNG • ERFOLG';
      default: return 'GROWTH • VISIBILITY • AUTOMATION • LEADS • SUCCESS';
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[120vh] bg-obsidian text-white flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Three.js Canvas Container - Sticky to occupy screen while scrolling */}
      <div className="sticky top-0 left-0 w-full h-screen z-10 pointer-events-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Subtle radial flashlight gradient behind */}
        <div 
          className="absolute inset-0 bg-radial pointer-events-none mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 450px at ${(mousePos.x + 1) * 50}% ${(-mousePos.y + 1) * 50}%, rgba(212, 175, 55, 0.12), transparent 70%)`
          }}
        />
      </div>

      {/* 2D Razor-Sharp Responsive Text Ring Overlay (Synchronized Rotation) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[460px] md:h-[460px] pointer-events-none z-10 select-none flex items-center justify-center transition-all duration-500"
        style={{
          transform: `translate(-150%, -50%) translate3d(${mousePos.x * 20}px, ${-mousePos.y * 20}px, 0) scale(${Math.max(1 - scrollProgress * 1.8, 0)})`,
          opacity: Math.max(1 - scrollProgress * 2.2, 0)
        }}
      >
        {/* Curved Text Path using SVG */}
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin-slow">
          <path id="textPath" d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" fill="transparent" />
          <text className="font-serif text-[10px] md:text-[11.5px] uppercase tracking-[13px] fill-gold-light/65 font-semibold glow-text">
            <textPath href="#textPath" startOffset="0%">{getOrbitalWords()}</textPath>
          </text>
        </svg>
      </div>

      {/* Screen 1 CONTENT (Initial Hero Section) */}
      <div 
        className="absolute top-0 left-0 w-full h-screen z-20 flex flex-col justify-between items-center px-4 py-24 pointer-events-auto"
        style={{
          opacity: Math.max(1 - scrollProgress * 2.5, 0),
          transform: `translateY(${-scrollProgress * 100}px)`,
          visibility: scrollProgress > 0.4 ? 'hidden' : 'visible'
        }}
      >
        {/* Premium Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-4 py-1.5 rounded-full glass-premium border border-gold/30 flex items-center gap-2 text-xs text-gold-light tracking-widest font-display font-medium glow-gold"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          {t.hero.badge}
        </motion.div>

        {/* Copywriter Aggressive Headline */}
        <div className="max-w-4xl text-center flex flex-col gap-6 mt-12 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.05]"
          >
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase().includes('concorrentes') || word.toLowerCase().includes('competitors') || word.toLowerCase().includes('concurrents') || word.toLowerCase().includes('concorrenti') ? "text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark font-serif italic drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] font-bold" : ""}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-white max-w-2xl mx-auto font-sans font-medium leading-relaxed drop-shadow-sm"
          >
            {t.hero.subtitle.lastIndexOf('. ') !== -1 ? (
              <>
                {t.hero.subtitle.substring(0, t.hero.subtitle.lastIndexOf('. ') + 2)}
                <span className="font-bold text-gold">{t.hero.subtitle.substring(t.hero.subtitle.lastIndexOf('. ') + 2)}</span>
              </>
            ) : (
              t.hero.subtitle
            )}
          </motion.p>
          
          {/* Authority Badges (Acima da Dobra) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-3 mt-2 md:mt-4 mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2 text-[10px] md:text-xs font-mono tracking-[0.2em] text-gold-light/80 uppercase">
              <span>Portugal</span> <span className="opacity-50">•</span> 
              <span>Espanha</span> <span className="opacity-50">•</span> 
              <span>Itália</span> <span className="opacity-50">•</span> 
              <span>Luxemburgo</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-sans font-medium text-white/90">
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">Websites Premium</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">Google Maps</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">Atendimento IA 24/7</span>
            </div>
          </motion.div>
        </div>

        {/* Action Call Controls */}
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <motion.button aria-label="Button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCtaClick(t.hero.tracking)}
              className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold-dark text-black font-display font-bold text-sm sm:text-base tracking-wider whitespace-nowrap hover:opacity-100 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] animate-pulse flex items-center justify-center cursor-pointer group"
            >
              {t.hero.ctaPrimary}
            </motion.button>

            <motion.button aria-label="Button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onScrollToDemos}
              className="px-8 py-4 rounded-xl bg-black/40 border border-gold/30 hover:border-gold text-white font-display font-semibold hover:bg-black/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Play size={16} className="text-gold group-hover:text-gold-light group-hover:scale-110 transition-transform" />
              {t.hero.ctaSecondary}
            </motion.button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-400 font-mono tracking-widest text-center px-4">{t.hero.trustPilot}</p>
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex gap-1 text-gold">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Smooth Scroll Prompt */}
          <div className="flex flex-col items-center gap-1 animate-bounce mt-4 opacity-75">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold">SCROLL TO EXPERIENCE</span>
            <ArrowDown size={14} className="text-gold" />
          </div>
        </div>
      </div>

      {/* Screen 2 CONTENT (Revealed Cinematic floating Glassmorphism Operational Module) */}
      <AnimatePresence>
        {showModule && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20"
          >
            <div className="glass-premium p-6 md:p-8 rounded-3xl border border-gold/30 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
              {/* Backlight effect inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-[60px]" />
              
              <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">VELKS GROUP CORE</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white leading-tight">
                  {currentLang === 'pt' ? 'Não Vendemos Tecnologia. Vendemos Resultados Reais.' :
                   currentLang === 'es' ? 'No Vendemos Tecnología. Vendemos Resultados Reales.' :
                   currentLang === 'it' ? 'Non Vendiamo Tecnologia. Vendiamo Risultati Reali.' :
                   currentLang === 'fr' ? 'Nous ne vendons pas de technologie. Nous vendons du résultat.' :
                   currentLang === 'de' ? 'Wir verkaufen keine Technologie. Wir verkaufen Ergebnisse.' :
                   'We Do Not Sell Technology. We Deliver Scalable Growth.'}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {currentLang === 'pt' ? 'O nosso método foi desenhado para negócios locais dominarem a sua região. Criamos uma barreira intransponível entre si e os concorrentes, focando estritamente em atrair contactos diretos para fechar negócio rápido.' :
                   currentLang === 'es' ? 'Nuestro método fue diseñado para que negocios locales dominen su región. Creamos una barrera intransferible entre usted y sus competidores, enfocándonos estrictamente en atraer contactos directos para cerrar.' :
                   currentLang === 'it' ? 'Il nostro metodo è progettato per far dominare ai business locali la propria zona. Creiamo una barriera insormontabile tra te e i concorrenti, focalizzandoci sulla cattura di contatti pronti ad acquistare.' :
                   currentLang === 'fr' ? 'Notre méthode est conçue pour permettre aux commerces locaux de dominer leur secteur. Nous créons une barrière infranchissable entre vous et vos concurrents, en nous concentrant sur les leads chauds.' :
                   currentLang === 'de' ? 'Unsere Methode wurde entwickelt, damit lokale Unternehmen ihre Region dominieren. Wir schaffen eine unüberwindbare Barriere zwischen Ihnen und Ihren Konkurrenten und fokussieren uns auf direkte Anfragen.' :
                   'Our framework is engineered to empower local service providers. We establish a massive competitive barrier, focusing aggressively on generating high-intent inquiries directly to your sales channel.'}
                </p>
              </div>

              {/* Quick pillars showcase with micro badges */}
              <div className="grid grid-cols-2 gap-3 w-full md:w-[320px] shrink-0">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">01. GOOGLE</span>
                  <span className="text-xs font-semibold text-white">Monopólio Local</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">02. WEBSITES</span>
                  <span className="text-xs font-semibold text-white">Máquina de Vendas</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">03. IA VELKS</span>
                  <span className="text-xs font-semibold text-white">Vendedor 24/7</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest">04. CLIENTES</span>
                  <span className="text-xs font-semibold text-white">Prontos a Comprar</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
