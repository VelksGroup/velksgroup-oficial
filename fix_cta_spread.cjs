const fs = require('fs');
const file = 'src/components/EngineeringSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetCTA = `<div className="flex flex-col items-center gap-4">
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
            <div className="flex items-center whitespace-nowrap overflow-hidden">
              {['IA', 'SAAS', 'WEB APPS'].map((tag, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="text-[11px] md:text-xs font-mono uppercase tracking-tight md:tracking-[0.25em] font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] whitespace-nowrap block">
                    {tag}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[11px] md:text-xs font-mono font-semibold text-[#00F0FF]/50 mx-[2px] md:mx-2 whitespace-nowrap block">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>`;

const replacementCTA = `<div className="flex flex-col items-center gap-4 w-full max-w-[340px] mx-auto md:max-w-none md:w-auto">
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
            <div className="flex items-center justify-between w-full px-4 md:px-0 md:justify-center md:w-auto whitespace-nowrap">
              {['IA', 'SAAS', 'WEB APPS'].map((tag, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.1em] md:tracking-[0.25em] font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] whitespace-nowrap block">
                    {tag}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[11px] md:text-xs font-mono font-semibold text-[#00F0FF]/50 md:mx-4 whitespace-nowrap block">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>`;

if (content.includes(targetCTA)) {
    content = content.replace(targetCTA, replacementCTA);
    fs.writeFileSync(file, content);
    console.log("Success");
} else {
    console.log("Target not found!");
}
