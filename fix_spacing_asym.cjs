const fs = require('fs');
const file = 'src/components/EngineeringSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetCard = `<div className="pt-5 border-t border-[#D4AF37]/10 mt-auto relative z-10 group-hover:border-[#00F0FF]/30 transition-colors flex items-center whitespace-nowrap overflow-hidden">
        {tags.split(' • ').map((tag, idx, arr) => (
          <React.Fragment key={idx}>
            <span className={\`text-[11px] md:text-xs font-mono uppercase \${isLong ? 'tracking-tighter' : 'tracking-tight'} md:tracking-[0.25em] font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 whitespace-nowrap block\`}>{tag}</span>
            {idx < arr.length - 1 && (
              <span className="text-[11px] md:text-xs font-mono font-semibold text-[#00F0FF]/50 mx-[1px] md:mx-2 whitespace-nowrap block">•</span>
            )}
          </React.Fragment>
        ))}
      </div>`;

const replacementCard = `<div className={\`pt-5 border-t border-[#D4AF37]/10 mt-auto relative z-10 group-hover:border-[#00F0FF]/30 transition-colors flex items-center whitespace-nowrap overflow-hidden \${!isLong ? 'justify-between w-full' : ''}\`}>
        {tags.split(' • ').map((tag, idx, arr) => (
          <React.Fragment key={idx}>
            <span className={\`text-[11px] md:text-xs font-mono uppercase \${isLong ? 'tracking-tighter md:tracking-[0.25em]' : 'tracking-normal md:tracking-[0.25em]'} font-semibold text-[#00F0FF] [text-shadow:0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 whitespace-nowrap block\`}>{tag}</span>
            {idx < arr.length - 1 && (
              <span className={\`text-[11px] md:text-xs font-mono font-semibold text-[#00F0FF]/50 \${isLong ? 'mx-[1px] md:mx-2' : ''} whitespace-nowrap block\`}>•</span>
            )}
          </React.Fragment>
        ))}
      </div>`;

if (content.includes(targetCard)) {
    content = content.replace(targetCard, replacementCard);
    fs.writeFileSync(file, content);
    console.log("Success");
} else {
    console.log("Target not found!");
}
