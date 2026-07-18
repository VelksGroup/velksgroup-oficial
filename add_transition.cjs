const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `      {/* BLOCO 5 - WIDGET INTELIGENTE (ATENDIMENTO AUTOMÁTICO 24H) */}`;
const replacement = `      {/* TRANSITION 4 -> 5 */}
      <div className="w-full h-32 bg-gradient-to-b from-obsidian to-obsidian relative overflow-hidden flex justify-center items-center">
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: '100%', opacity: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 w-[2px] bg-gradient-to-b from-transparent via-gold to-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]"
        />
        <div className="absolute inset-0 flex justify-center items-center">
           {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ y: -50, x: (Math.random() - 0.5) * 100, opacity: 0 }}
               whileInView={{ y: 50, x: 0, opacity: [0, 1, 0] }}
               transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
               className="w-1 h-1 bg-gold rounded-full absolute"
             />
           ))}
        </div>
      </div>

      {/* BLOCO 5 - WIDGET INTELIGENTE (ATENDIMENTO AUTOMÁTICO 24H) */}`;

code = code.replace(target, replacement);
fs.writeFileSync('src/App.tsx', code);
