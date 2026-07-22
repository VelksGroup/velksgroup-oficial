import React, { useEffect, useRef } from 'react';

export const CTACanvasParticles = () => {
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
      const particleCount = width < 768 ? 40 : 120;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0,
          baseVx: (Math.random() - 0.5) * 1.0,
          baseVy: (Math.random() - 0.5) * 1.0,
          radius: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
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
      ctx.globalCompositeOperation = 'screen';

      mouse.vx *= 0.9;
      mouse.vy *= 0.9;
      scrollSpeed *= 0.95;

      particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.vx -= (dx / dist) * force * 1.5 + (mouse.vx * force * 0.05);
          p.vy -= (dy / dist) * force * 1.5 + (mouse.vy * force * 0.05);
          p.alpha = 1; 
          p.radius = Math.min(p.radius + 0.5, 3.5);
        }

        p.vy -= scrollSpeed * 0.01;

        p.vx += (p.baseVx - p.vx) * 0.05;
        p.vy += (p.baseVy - p.vy) * 0.05;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.flashTimer -= 1;
        if (p.flashTimer <= 0) {
          p.alpha = 1;
          p.flashTimer = Math.random() * 200 + 50;
        } else {
          p.alpha += p.flickerRate;
          if (p.alpha > 0.9 || p.alpha < 0.2) p.flickerRate *= -1;
        }
        
        if (p.radius > 2.5) p.radius -= 0.1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        
        
        
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          
          if (dist < 12000) { 
            const opacity = (1 - dist / 12000) * 0.15;
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
