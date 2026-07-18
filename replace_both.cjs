const fs = require('fs');

const code = fs.readFileSync('src/components/BeforeAfterSlider.tsx', 'utf8');

const startIndex = code.indexOf('{/* ========================================= */}\n              {/* BEFORE CONTENT (Left side / Background) */}');
const endIndex = code.indexOf('{/* ========================================= */}\n              {/* DIVIDER LINE & HANDLE                       */}');

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* ========================================= */}
              {/* BEFORE CONTENT (Left side) */}
              {/* ========================================= */}
              <div 
                className="absolute inset-0 bg-[#e5e5e5] flex flex-col overflow-hidden font-sans text-gray-800"
                style={{ clipPath: \`inset(0 \${100 - sliderPosition}% 0 0)\` }}
              >
                {/* Browser Bar (Old) */}
                <div className="w-full bg-[#d4d4d4] border-b border-gray-400 p-2 flex items-center gap-2 h-8 md:h-10 shrink-0">
                  <div className="flex gap-1.5 ml-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500/50" />
                  </div>
                  <div className="mx-2 md:mx-4 flex-1 bg-white border border-gray-300 rounded px-2 md:px-3 py-0.5 md:py-1 text-[8px] md:text-[10px] text-gray-500 flex items-center font-serif shadow-inner">
                    http://www.mycompany2015.com/index.html
                  </div>
                </div>

                <div className="w-full max-w-[800px] h-full bg-white shadow-lg mx-auto flex flex-col relative mt-4 md:mt-8 scale-90 md:scale-100 origin-top">
                  {/* Header */}
                  <div className="p-4 md:p-6 border-b-4 border-blue-800 bg-gray-50 flex flex-col md:flex-row justify-between md:items-end gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tighter font-serif">My Company Ltd.</h1>
                    <div className="flex gap-4 text-[10px] md:text-xs text-blue-700 underline font-bold">
                      <span>Home page</span>
                      <span>About us</span>
                      <span>Services</span>
                      <span>Contact</span>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 p-4 md:p-6 flex flex-col md:flex-row gap-6 bg-white overflow-hidden">
                    <div className="flex-1 p-4 border border-gray-300 shadow-sm">
                      <h2 className="text-lg md:text-xl font-bold mb-3 text-red-600 font-serif">Welcome to our website!</h2>
                      <p className="text-[10px] md:text-xs mb-3 leading-relaxed text-gray-700">
                        We have been providing quality services since 1995. Please browse our website to find out more about our company and what we do. Our mission is to provide the best customer service in the local area.
                      </p>
                      <div className="w-full h-24 md:h-32 bg-gray-200 border border-gray-400 flex items-center justify-center mb-4">
                        <ImageIcon size={32} className="text-gray-400" />
                        <span className="text-gray-500 text-xs ml-2">Missing Image</span>
                      </div>
                      <p className="text-[10px] md:text-xs font-bold text-red-600 mb-1">NEW: We now offer discounts!</p>
                      <div className="text-[10px] bg-yellow-200 p-1.5 border border-yellow-400 text-center font-bold">
                        Call us today for a free quote: 555-0192
                      </div>
                    </div>

                    <div className="w-full md:w-64 shrink-0 flex flex-col gap-4">
                      {/* Empty Bad Google Profile */}
                      <div className="bg-[#f8f9fa] p-4 border border-[#dadce0] shadow-sm flex flex-col">
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#dadce0]">
                          <Globe size={14} className="text-[#4285f4]" />
                          <h3 className="font-bold text-xs text-[#202124]">Google Search</h3>
                        </div>
                        <div className="w-full h-20 md:h-24 bg-[#e5e3df] border border-[#dadce0] flex items-center justify-center mb-3">
                          <Map size={24} className="text-[#9aa0a6]" />
                        </div>
                        <div className="flex gap-3 items-start">
                           <div className="w-10 h-10 bg-[#f1f3f4] flex items-center justify-center border border-[#dadce0] rounded shrink-0">
                             <ImageIcon size={16} className="text-[#9aa0a6]" />
                           </div>
                           <div>
                             <p className="text-[11px] font-bold text-[#1a0dab] underline cursor-pointer leading-tight">My Company Ltd</p>
                             <p className="text-[10px] text-[#70757a] mt-0.5">0 reviews</p>
                           </div>
                        </div>
                        <button className="mt-4 text-[10px] bg-[#f8f9fa] border border-[#dadce0] py-1.5 hover:bg-[#f1f3f4] w-full text-[#1a0dab] font-medium rounded shadow-sm">
                          Own this business?
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Before Tag */}
                <div className="absolute top-10 md:top-14 left-4 md:left-6 z-20 pointer-events-none">
                  <div className="px-3 md:px-4 py-1.5 md:py-2 rounded bg-white border border-gray-300 text-gray-500 font-mono text-[9px] md:text-[10px] tracking-widest uppercase font-bold shadow-lg">
                    {t.before}
                  </div>
                </div>
              </div>

              {/* ========================================= */}
              {/* AFTER CONTENT (Right side) */}
              {/* ========================================= */}
              <div 
                className="absolute inset-0 bg-[#050505] overflow-hidden flex flex-col"
                style={{ clipPath: \`inset(0 0 0 \${sliderPosition}%)\` }}
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

                <div className="flex-1 relative w-full h-full bg-[#050505] flex flex-col items-center justify-center p-4">
                  
                  {/* Fake Navigation inside mockup */}
                  <div className="absolute top-0 w-full flex justify-between items-center px-4 md:px-8 py-4 z-10 border-b border-white/5 bg-black/20 backdrop-blur-sm">
                     <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-gold flex items-center justify-center">
                         <span className="text-black font-black text-xs">TC</span>
                       </div>
                       <span className="text-white font-bold tracking-widest text-xs md:text-sm">TURNCLEAN</span>
                     </div>
                     <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                       <span className="text-gold">Services</span>
                       <span className="hover:text-white cursor-pointer">About</span>
                       <span className="hover:text-white cursor-pointer">Contact</span>
                     </div>
                     <button className="px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded text-[9px] uppercase tracking-wider font-bold">
                       Book Now
                     </button>
                  </div>

                  {/* Hero Content */}
                  <div className="w-full max-w-3xl text-center z-10 mt-12 md:mt-0">
                    <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold rounded-full text-[8px] md:text-[10px] font-mono tracking-widest uppercase mb-4 md:mb-6">
                      Premium Hospitality
                    </div>
                    
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight font-display">
                      Impeccable Cleaning for <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">Premium Properties</span>
                    </h2>
                    
                    <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm max-w-lg mx-auto mb-6 md:mb-8 leading-relaxed">
                      TurnClean offers specialized holiday rental cleaning, Airbnb turnover, key handover, and guest-ready apartment preparation in Coimbra.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                      <button className="w-full sm:w-auto px-6 py-2.5 md:py-3 bg-gold text-black font-black text-[10px] md:text-xs uppercase tracking-widest rounded shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                        Get a Quote
                      </button>
                      <button className="w-full sm:w-auto px-6 py-2.5 md:py-3 bg-white/5 border border-white/10 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest rounded backdrop-blur-md">
                        Our Services
                      </button>
                    </div>
                  </div>

                  {/* Background Accents */}
                  <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
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
  console.log('Replaced BEFORE and AFTER content successfully.');
} else {
  console.log('Could not find startIndex or endIndex');
}
