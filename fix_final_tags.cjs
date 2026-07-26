const fs = require('fs');
const file = 'src/components/EngineeringSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetCTA = `<div className="flex items-center whitespace-nowrap overflow-hidden">
              {['IA', 'SAAS', 'WEB APPS'].map((tag, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.05em] md:tracking-[0.25em] font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] whitespace-nowrap block">
                    {tag}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[9px] md:text-[10px] font-mono font-semibold text-[#00F0FF]/50 mx-1 md:mx-2 whitespace-nowrap block">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>`;

const replacementCTA = `<div className="flex items-center whitespace-nowrap overflow-hidden">
              {['IA', 'SAAS', 'WEB APPS'].map((tag, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-normal md:tracking-[0.25em] font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] whitespace-nowrap block">
                    {tag}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[9px] md:text-[10px] font-mono font-semibold text-[#00F0FF]/50 mx-[2px] md:mx-2 whitespace-nowrap block">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>`;

const targetCard = `const EngineeringCard = ({ id, title, desc, tags, delay }: { id: string, title: string, desc: string, tags: string, delay: number }) => (
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
        <span className="text-[10px] font-mono text-white/30 tracking-widest group-hover:text-[#00F0FF]/80 transition-colors">MODULE</span>
      </div>
      <span className="text-[10px] font-mono text-[#D4AF37]/70 bg-[#D4AF37]/10 px-2 py-0.5 rounded-sm border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/20 transition-all">{id}</span>
    </div>

    <div className="flex-1 mb-10 relative z-10">
      <h4 className="text-base md:text-lg font-display font-medium text-white/90 mb-3 tracking-wide group-hover:text-white transition-colors duration-300">{title}</h4>
      <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors">{desc}</p>
    </div>

    <div className="pt-5 border-t border-[#D4AF37]/10 mt-auto relative z-10 group-hover:border-[#00F0FF]/30 transition-colors flex items-center whitespace-nowrap overflow-hidden">
      {tags.split(' • ').map((tag, idx, arr) => (
        <React.Fragment key={idx}>
          <span className="text-[8.5px] md:text-[10px] font-mono uppercase tracking-[0.02em] md:tracking-[0.25em] font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 whitespace-nowrap block">{tag}</span>
          {idx < arr.length - 1 && (
            <span className="text-[8.5px] md:text-[10px] font-mono font-semibold text-[#00F0FF]/50 mx-[2px] md:mx-2 whitespace-nowrap block">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </motion.div>
);`;

const replacementCard = `const EngineeringCard = ({ id, title, desc, tags, delay }: { id: string, title: string, desc: string, tags: string, delay: number }) => {
  const isLong = tags.length > 30;
  return (
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
          <span className="text-[10px] font-mono text-white/30 tracking-widest group-hover:text-[#00F0FF]/80 transition-colors">MODULE</span>
        </div>
        <span className="text-[10px] font-mono text-[#D4AF37]/70 bg-[#D4AF37]/10 px-2 py-0.5 rounded-sm border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/20 transition-all">{id}</span>
      </div>

      <div className="flex-1 mb-10 relative z-10">
        <h4 className="text-base md:text-lg font-display font-medium text-white/90 mb-3 tracking-wide group-hover:text-white transition-colors duration-300">{title}</h4>
        <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors">{desc}</p>
      </div>

      <div className="pt-5 border-t border-[#D4AF37]/10 mt-auto relative z-10 group-hover:border-[#00F0FF]/30 transition-colors flex items-center whitespace-nowrap overflow-hidden">
        {tags.split(' • ').map((tag, idx, arr) => (
          <React.Fragment key={idx}>
            <span className={\`text-[9px] md:text-[10px] font-mono uppercase \${isLong ? 'tracking-tighter' : 'tracking-normal'} md:tracking-[0.25em] font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 whitespace-nowrap block\`}>{tag}</span>
            {idx < arr.length - 1 && (
              <span className="text-[9px] md:text-[10px] font-mono font-semibold text-[#00F0FF]/50 mx-[1px] md:mx-2 whitespace-nowrap block">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};`;

if (content.includes(targetCTA) && content.includes(targetCard)) {
    content = content.replace(targetCTA, replacementCTA).replace(targetCard, replacementCard);
    fs.writeFileSync(file, content);
    console.log("Success");
} else {
    console.log("Target not found!");
    if (!content.includes(targetCTA)) console.log("CTA not found");
    if (!content.includes(targetCard)) console.log("Card not found");
}
