const fs = require('fs');
const file = 'src/components/PricingSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldComponentStart = `// High-Performance Canvas Particles
const PricingCanvasParticles = () => {`;
const oldComponentEndRegex = /return <canvas ref=\{canvasRef\}.*?\};\n/s;

const match = content.match(oldComponentEndRegex);
if (!match) {
  console.log('Could not find end of component');
  process.exit(1);
}

const fullOldComponent = content.substring(content.indexOf(oldComponentStart), content.indexOf(match[0]) + match[0].length);

const newComponent = `// High-Performance Canvas Particles
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
        ctx.fillStyle = \`rgba(\${p.color}, \${p.alpha})\`;
        
        // Intense Glow
        ctx.shadowBlur = p.alpha > 0.8 ? 20 : 10;
        ctx.shadowColor = \`rgba(\${p.color}, \${p.alpha * 1.5})\`;
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
            ctx.strokeStyle = \`rgba(212, 175, 55, \${opacity})\`;
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
`;

content = content.replace(fullOldComponent, newComponent);

fs.writeFileSync(file, content);
console.log('done updating particle visibility');
