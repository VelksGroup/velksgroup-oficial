const fs = require('fs');

const code = fs.readFileSync('src/components/BeforeAfterSlider.tsx', 'utf8');

const startIndex = code.indexOf('{/* 3D Monitor Mockup Container */}');
const endIndex = code.lastIndexOf('</motion.div>') + '</motion.div>'.length;

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* Sleek Floating Window Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.2, ease: "easeOut" } }
          }}
          className="w-full max-w-[1000px] mx-auto relative perspective-1000"
        >
          {/* Sleek Window Frame */}
          <div className="relative bg-[#111] rounded-2xl md:rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.8),_0_0_40px_rgba(212,175,55,0.1)] aspect-[4/3] lg:aspect-[16/10] overflow-hidden flex flex-col ring-1 ring-white/10">
            
            {/* Interactive Screen Area */}
            <div 
              className="flex-1 relative w-full h-full cursor-ew-resize select-none overflow-hidden"
              ref={containerRef}
              onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
              onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            >
              
              {/* ========================================= */}
              {/* BEFORE CONTENT (Left side / Background) */}
              {/* ========================================= */}
              <div className="absolute inset-0 bg-[#e5e5e5] flex flex-col overflow-hidden font-sans text-gray-800">
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

              {/* ========================================= */}
              {/* DIVIDER LINE & HANDLE                       */}
              {/* ========================================= */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-gold cursor-ew-resize z-30 shadow-[0_0_15px_rgba(212,175,55,1)]"
                style={{ left: \`calc(\${sliderPosition}% - 1px)\` }}
              >
                {/* Draggable Button */}
                <div 
                  className={\`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold border-[3px] md:border-4 border-[#111] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-transform duration-200 \${isDragging ? 'scale-90' : 'scale-100 hover:scale-110'}\`}
                >
                  <ChevronLeft size={16} className="text-[#111] -mr-1" strokeWidth={3} />
                  <ChevronRight size={16} className="text-[#111] -ml-1" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>`;
  
  const newCode = code.substring(0, startIndex) + replacement + code.substring(endIndex);
  fs.writeFileSync('src/components/BeforeAfterSlider.tsx', newCode);
  console.log('Replaced container mockup successfully.');
} else {
  console.log('Could not find startIndex or endIndex');
}
