const fs = require('fs');

const file = 'src/components/PricingSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\/\* LAYER 4: Golden Particles \*\/\}[\s\S]*?(?=\{\/\* Header \*\/\}|<div className="relative z-10)/;

const canvasCode = `{/* LAYER 4: High-Performance Canvas Gold Dust Particles */}
      <PricingCanvasParticles />

      <div className="relative z-10`;

content = content.replace(regex, canvasCode);

const canvasComponent = `
// High-Performance Canvas Particles
const PricingCanvasParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight * 2; // Approximate height of pricing section
    canvas.width = width;
    canvas.height = height;

    let particles: any[] = [];
    let mouse = { x: width / 2, y: height / 2, vx: 0, vy: 0 };
    let lastMouse = { x: width / 2, y: height / 2 };
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;
    let animationFrameId: number;

    const createParticles = () => {
      particles = [];
      const particleCount = width < 768 ? 80 : 250;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5 + 0.2, // slight drift down
          baseVx: (Math.random() - 0.5) * 0.5,
          baseVy: (Math.random() - 0.5) * 0.5 + 0.2,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
          flickerRate: Math.random() * 0.05 + 0.01
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
      // Height remains large enough to cover section
      canvas.width = width;
      createParticles();
    };
    window.addEventListener('resize', onResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

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
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx -= (dx / dist) * force * 0.5 + (mouse.vx * force * 0.02);
          p.vy -= (dy / dist) * force * 0.5 + (mouse.vy * force * 0.02);
        }

        // Scroll interaction
        p.vy += scrollSpeed * 0.005;

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

        // Flicker
        p.alpha += p.flickerRate;
        if (p.alpha > 0.8 || p.alpha < 0.1) p.flickerRate *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = \`rgba(212, 175, 55, \${p.alpha})\`;
        ctx.fill();
        
        // Glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
      });

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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />;
};
`;

content = content.replace("export default function PricingSection", canvasComponent + "\nexport default function PricingSection");

fs.writeFileSync(file, content);
console.log('done replacing with Canvas');
