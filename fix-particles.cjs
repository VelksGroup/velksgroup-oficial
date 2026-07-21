const fs = require('fs');
const file = 'src/components/AIVisionSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldParticle = `    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 0.5;
      }
      update() {
        // Move towards center slowly to simulate converging to a core (parallax/flow)
        const dx = width / 2 - this.x;
        const dy = height / 2 - this.y;
        this.x += this.vx + dx * 0.00003;
        this.y += this.vy + dy * 0.00003;

        // Bounce off walls if they go out of bounds, though drift to center keeps them in
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.85)';
        ctx.fill();
        
        // Add tiny glow
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.9)';
      }
    }`;

const newParticle = `    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      angle: number;
      speed: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2.5; // Fast velocity
        this.vy = (Math.random() - 0.5) * 2.5;
        this.radius = Math.random() * 2 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.1 + 0.05;
      }
      update() {
        // Quantum jitter & orbital wave
        this.angle += this.speed;
        
        // Core pull
        const dx = width / 2 - this.x;
        const dy = height / 2 - this.y;
        
        // High speed + chaotic sine wave
        this.x += this.vx + Math.sin(this.angle) * 2.5 + dx * 0.0002;
        this.y += this.vy + Math.cos(this.angle) * 2.5 + dy * 0.0002;

        if (this.x < 0 || this.x > width) { this.vx *= -1; this.x = Math.max(0, Math.min(this.x, width)); }
        if (this.y < 0 || this.y > height) { this.vy *= -1; this.y = Math.max(0, Math.min(this.y, height)); }
        
        // Occasional quantum jump (teleport)
        if(Math.random() < 0.002) {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Make them randomly flash brighter
        const alpha = Math.random() > 0.95 ? 1 : 0.6;
        ctx.fillStyle = \`rgba(212, 175, 55, \${alpha})\`;
        ctx.fill();
        
        // Intense glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(212, 175, 55, 1)';
      }
    }`;

content = content.replace(oldParticle, newParticle);

const oldDrawLines = `          if (distance < 180) {
            ctx.beginPath();
            ctx.strokeStyle = \`rgba(212, 175, 55, \${0.18 - distance / 180 * 0.18})\`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }`;

const newDrawLines = `          if (distance < 220) {
            ctx.beginPath();
            // Quantum flash for connections
            const baseAlpha = 0.25 - distance / 220 * 0.25;
            const flash = Math.random() > 0.95 ? 3 : 1; 
            ctx.strokeStyle = \`rgba(212, 175, 55, \${baseAlpha * flash})\`;
            ctx.lineWidth = Math.random() > 0.98 ? 2 : 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }`;

content = content.replace(oldDrawLines, newDrawLines);

fs.writeFileSync(file, content);
console.log('done fixing particles');
