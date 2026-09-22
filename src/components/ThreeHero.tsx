import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Language, TranslationSchema } from '../translations';

interface ThreeHeroProps {
  currentLang: Language;
  t: TranslationSchema;
  onScrollToPricing: () => void;
}

export const ThreeHero: React.FC<ThreeHeroProps> = React.memo(({
  currentLang,
  t,
  onScrollToPricing,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  
  const reducedMotion = useReducedMotion();
  const orbitalRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

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
      mouseRef.current = { x, y };
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


    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      
      // Smooth scroll progress using Lerp
      currentScroll.current += (targetScroll.current - currentScroll.current) * 0.08;
      const progress = reducedMotion ? 0 : currentScroll.current;
      
      // Disable invisible processing to save battery and performance when off-screen
      if (progress > 1.05) return;
      
      const time = reducedMotion ? 0 : (Date.now() - startTime) * 0.001;

      // Update DOM directly to avoid React state re-renders
      if (orbitalRef.current) {
        orbitalRef.current.style.transform = `translate(-150%, -50%) translate3d(${mouseRef.current.x * 20}px, ${-mouseRef.current.y * 20}px, 0) scale(${Math.max(1 - progress * 1.8, 0)})`;
        orbitalRef.current.style.opacity = Math.max(1 - progress * 2.2, 0).toString();
      }
      // Smooth mouse lerp
      localMouse.x += (mouseRef.current.x - localMouse.x) * 0.05;
      localMouse.y += (mouseRef.current.y - localMouse.y) * 0.05;

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
        const speed = reducedMotion ? 0 : randomSpeeds[i] * 0.02;
        
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
      } else {
        logoGroup.scale.set(breathingScale, breathingScale, breathingScale);
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

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [reducedMotion]);

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
      className="relative w-full min-h-screen bg-obsidian text-white flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Existing 3D scene follows the natural hero scroll. */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Subtle radial flashlight gradient behind */}
        <div 
          className="absolute inset-0 bg-radial pointer-events-none  transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 450px at ${(mouseRef.current.x + 1) * 50}% ${(-mouseRef.current.y + 1) * 50}%, rgba(212, 175, 55, 0.12), transparent 70%)`
          }}
        />
      </div>

      {/* 2D Razor-Sharp Responsive Text Ring Overlay (Synchronized Rotation) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[460px] md:h-[460px] pointer-events-none z-10 select-none flex items-center justify-center transition-all duration-500"
        ref={orbitalRef} style={{ transform: "translate(-150%, -50%) scale(1)", opacity: 1 }}
      >
        {/* Curved Text Path using SVG */}
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin-slow motion-reduce:animate-none">
          <path id="textPath" d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" fill="transparent" />
          <text className="font-serif text-[10px] md:text-[11.5px] uppercase tracking-[13px] fill-gold-light/65 font-semibold glow-text">
            <textPath href="#textPath" startOffset="0%">{getOrbitalWords()}</textPath>
          </text>
        </svg>
      </div>

      {/* Screen 1 CONTENT (Initial Hero Section) */}
      <div 
        className="relative w-full min-h-screen z-20 flex flex-col justify-between items-center gap-8 px-4 pt-28 pb-10 pointer-events-auto"
      >
        {/* Premium Top Badge */}
        <motion.div 
          initial={reducedMotion ? false : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-4 py-1.5 text-center rounded-full glass-premium border border-gold/30 flex items-center gap-2 text-[10px] sm:text-xs text-gold-light tracking-widest font-display font-medium glow-gold"
        >
          <span className="w-2 h-2 shrink-0 rounded-full bg-gold animate-ping motion-reduce:animate-none" />
          {t.hero.badge}
        </motion.div>

        {/* Copywriter Aggressive Headline */}
        <div className="max-w-4xl text-center flex flex-col gap-6 mt-4 md:mt-0">
          <motion.h1 
            initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.05]"
          >
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase().includes('concorrentes') || word.toLowerCase().includes('competitors') || word.toLowerCase().includes('concurrents') || word.toLowerCase().includes('concorrenti') || word.toLowerCase().includes('competidores') || word.toLowerCase().includes('wettbewerbern') ? "text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark font-serif italic drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] font-bold" : ""}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-white max-w-2xl mx-auto font-sans font-medium leading-relaxed drop-shadow-sm"
          >
            {t.hero.subtitle}
            <span className="block mt-3 font-bold text-gold">{t.hero.reinforcement}</span>
          </motion.p>
          
          {/* Authority Badges (Acima da Dobra) */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-3 mt-2 md:mt-4 mb-8"
          >
            <div className="flex flex-nowrap justify-center gap-1.5 sm:gap-2 md:gap-4 text-[10px] sm:text-xs md:text-sm font-sans font-medium text-white/90">
              {t.hero.pills.map(pill => (
                <span key={pill} className="whitespace-nowrap bg-white/5 px-2 sm:px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">{pill}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Action Call Controls */}
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <motion.button
              aria-label={t.hero.ctaPrimary}
              whileHover={reducedMotion ? undefined : { scale: 1.05 }}
              whileTap={reducedMotion ? undefined : { scale: 0.95 }}
              onClick={onScrollToPricing}
              className="px-4 py-3 w-full rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold-dark text-black font-display font-bold text-xs sm:text-sm md:text-base tracking-wider hover:opacity-100 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] animate-pulse motion-reduce:animate-none flex items-center justify-center text-center cursor-pointer group break-words whitespace-normal"
            >
              {t.hero.ctaPrimary}
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
          <div className="flex flex-col items-center gap-1 animate-bounce motion-reduce:animate-none mt-4 opacity-75">
            <ArrowDown size={14} className="text-gold" />
          </div>
        </div>
      </div>

    </section>
  );
});
