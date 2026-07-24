import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'motion/react';
import { Hexagon, ArrowRight } from 'lucide-react';

export function AIVisionSection({ t }: { t: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0b0d, 0.05);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

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

    const crownGroup = new THREE.Group();
    crownGroup.position.y = 1.3;
    const baseGeom = new THREE.TorusGeometry(0.7, 0.06, 8, 32, Math.PI);
    const baseArc = new THREE.Mesh(baseGeom, copperMaterial);
    baseArc.rotation.x = Math.PI / 2;
    crownGroup.add(baseArc);

    for (let i = 0; i < 5; i++) {
      const angle = (i - 2) * 0.35;
      const coneGeom = new THREE.ConeGeometry(0.12, 0.5, 16);
      const cone = new THREE.Mesh(coneGeom, goldMaterial);
      cone.position.set(Math.sin(angle) * 0.65, Math.cos(angle) * 0.15, -Math.cos(angle) * 0.05);
      cone.rotation.z = -angle * 0.8;
      crownGroup.add(cone);

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

    const orbitalRingGeom = new THREE.TorusGeometry(2.4, 0.04, 12, 64);
    const orbitalRing = new THREE.Mesh(orbitalRingGeom, copperMaterial);
    orbitalRing.rotation.x = Math.PI / 2.3;
    logoGroup.add(orbitalRing);

    const orbitalRingGeom2 = new THREE.TorusGeometry(2.5, 0.015, 8, 64);
    const orbitalRing2 = new THREE.Mesh(orbitalRingGeom2, goldMaterial);
    orbitalRing2.rotation.x = Math.PI / 2.3;
    orbitalRing2.rotation.y = 0.1;
    logoGroup.add(orbitalRing2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xd4af37, 250);
    spotLight.position.set(0, 10, 5);
    spotLight.angle = Math.PI / 4;
    scene.add(spotLight);

    const spotLight2 = new THREE.SpotLight(0xaa7c11, 200);
    spotLight2.position.set(10, -5, -5);
    scene.add(spotLight2);

    // Quantum Floating Geometries
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);
    
    const quantumMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      emissive: 0xd4af37,
      emissiveIntensity: 0.2
    });

    const geometries = [
      new THREE.IcosahedronGeometry(0.3, 0),
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.DodecahedronGeometry(0.3, 0)
    ];

    const floaters = [];
    for (let i = 0; i < 40; i++) {
      const geom = geometries[Math.floor(Math.random() * geometries.length)];
      const mesh = new THREE.Mesh(geom, quantumMaterial.clone());
      
      // Random positions in a sphere around the center
      const radius = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      // Random rotations
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random velocities for quantum float
      const velocity = {
        rx: (Math.random() - 0.5) * 0.02,
        ry: (Math.random() - 0.5) * 0.02,
        rz: (Math.random() - 0.5) * 0.02,
        yOffset: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.02
      };

      floaters.push({ mesh, velocity, baseY: mesh.position.y });
      floatingGroup.add(mesh);
    }
    
    // Core Quantum Sphere
    const coreGeom = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
      emissive: 0xd4af37,
      emissiveIntensity: 0.1
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMaterial);
    logoGroup.add(coreMesh);


    // Initial position for background effect
    logoGroup.position.z = -2;
    logoGroup.rotation.x = 0.2;
    logoGroup.rotation.y = -0.5;
    
    // Wireframe mode to look like neural net / AI
    goldMaterial.wireframe = true;
    goldMaterial.transparent = true;
    goldMaterial.opacity = 0.15;
    copperMaterial.wireframe = true;
    copperMaterial.transparent = true;
    copperMaterial.opacity = 0.1;

    let animationFrameId: number;
    let time = 0;


    let isVisible = false;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;
      time += 0.005;
      
      // Floating animation
      logoGroup.position.y = Math.sin(time) * 0.3;
      logoGroup.rotation.y = -0.5 + Math.sin(time * 0.5) * 0.2;
      
      // Rotate rings
      orbitalRing.rotation.z -= 0.002;
      orbitalRing2.rotation.z += 0.003;

      // Animate floating geometries
      floaters.forEach(floater => {
        floater.mesh.rotation.x += floater.velocity.rx;
        floater.mesh.rotation.y += floater.velocity.ry;
        floater.mesh.rotation.z += floater.velocity.rz;
        
        floater.mesh.position.y = floater.baseY + Math.sin(time * 2 + floater.velocity.yOffset) * 0.2;
        
        // Quantum flicker
        if (Math.random() > 0.98) {
          floater.mesh.material.opacity = 0.5;
          floater.mesh.material.emissiveIntensity = 0.8;
        } else {
          floater.mesh.material.opacity += (0.1 - floater.mesh.material.opacity) * 0.1;
          floater.mesh.material.emissiveIntensity += (0.2 - floater.mesh.material.emissiveIntensity) * 0.1;
        }
      });
      
      coreMesh.rotation.y -= 0.001;
      coreMesh.rotation.x += 0.001;
      coreMesh.scale.setScalar(1 + Math.sin(time * 3) * 0.02);
      floatingGroup.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      if (Math.abs(width - containerRef.current.clientWidth) > 10) {
        width = containerRef.current.clientWidth;
        height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 min-h-[90vh] flex items-center justify-center overflow-hidden bg-obsidian-dark border-y border-white/5">
      {/* Background canvas for 3D V-AI Geometry */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-100"
      />
      
      {/* Cinematic Vignette Overlay to darken the edges and make the text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050507_90%)] pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center"
      >
        {/* Engineering Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-gold/30 sm:backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <Hexagon size={18} className="text-gold animate-pulse-slow" />
          <span className="text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-gold font-semibold text-center leading-tight">
            {t.aivision.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-10 drop-shadow-2xl text-balance">
          {t.aivision.title1}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark animate-pulse-slow inline-block">
            {t.aivision.titleHighlight}
          </span>
          <br className="hidden md:block" />
          {t.aivision.title2}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 font-medium leading-relaxed mb-16 max-w-4xl text-balance drop-shadow-md">
          {t.aivision.subtitle}
        </p>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
          <a
            href="https://velks.space"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-4 px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-display font-bold text-sm sm:text-base md:text-lg uppercase tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] w-full sm:w-auto"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-full"> 
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] group-hover:animate-shine" />
            </div>
            
            <span className="relative z-10 text-center leading-tight break-words whitespace-normal flex-1">{t.aivision.cta}</span>
            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1.5 transition-transform flex-shrink-0" />
          </a>

          {/* Microcopy */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-mono tracking-wide mt-2">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <p className="text-center">{t.aivision.microcopy}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
