const fs = require('fs');

const code = fs.readFileSync('src/components/BeforeAfterSlider.tsx', 'utf8');

const startIndex = code.indexOf('{/* ========================================= */}\n              {/* AFTER CONTENT (Right side / Foreground) */}');
const endIndex = code.indexOf('{/* ========================================= */}\n              {/* DIVIDER LINE & HANDLE                       */}');

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* ========================================= */}
              {/* AFTER CONTENT (Right side / Foreground) */}
              {/* ========================================= */}
              <div 
                className="absolute inset-0 bg-[#050505] overflow-hidden flex flex-col"
                style={{ clipPath: \`inset(0 \${100 - sliderPosition}% 0 0)\` }}
              >
                {/* Browser Bar (Premium) */}
                <div className="w-full bg-[#0a0a0a] border-b border-white/5 p-2 flex items-center gap-2 h-8 md:h-10 shrink-0 relative z-20">
                  <div className="flex gap-1.5 ml-2 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  </div>
                  <div className="mx-2 md:mx-4 flex-1 bg-[#111] border border-white/5 rounded-md px-2 md:px-3 py-0.5 md:py-1 text-[8px] md:text-[10px] text-gray-400 flex items-center justify-center gap-2 font-mono">
                    <Shield size={10} className="text-gold" />
                    https://www.turnclean.pro/
                  </div>
                </div>

                <div className="flex-1 relative w-full h-full bg-[#050505]">
                  <iframe 
                    src="https://www.turnclean.pro/" 
                    className="w-full h-full border-none pointer-events-none" 
                    title="Turnclean Pro Premium Website"
                  />
                </div>
                
                {/* After Tag */}
                <div className="absolute top-10 md:top-14 right-4 md:right-6 z-20 pointer-events-none">
                  <div className="px-3 md:px-4 py-1.5 md:py-2 rounded bg-gold text-black font-mono text-[9px] md:text-[10px] tracking-widest uppercase font-black shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    {t.after}
                  </div>
                </div>
              </div>

              `;
  const newCode = code.substring(0, startIndex) + replacement + code.substring(endIndex);
  fs.writeFileSync('src/components/BeforeAfterSlider.tsx', newCode);
  console.log('Replaced AFTER CONTENT successfully.');
} else {
  console.log('Could not find startIndex or endIndex');
}
