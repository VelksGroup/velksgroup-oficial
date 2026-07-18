const fs = require('fs');
const code = fs.readFileSync('src/components/BeforeAfterSlider.tsx', 'utf8');

const containerStartIndex = code.indexOf('        {/* Sleek Floating Window Mockup Container */}');
const containerEndIndex = code.indexOf('          </div>\n        </motion.div>');

const replacement = `        {/* Sleek Floating Window Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.2, ease: "easeOut" } }
          }}
          className="w-full max-w-[320px] sm:max-w-[360px] mx-auto relative perspective-1000"
        >
          {/* Sleek Phone Frame */}
          <div className="relative bg-[#050505] rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.8),_0_0_40px_rgba(212,175,55,0.15)] aspect-[9/19] overflow-hidden flex flex-col border-[6px] sm:border-[10px] border-[#1a1a1a] ring-1 ring-white/10">
            
            {/* Dynamic Island */}
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-[100] flex items-center justify-between px-2 shadow-sm border border-white/5">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/10"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/20"></div>
            </div>

            {/* Interactive Screen Area */}
            <div 
              className="flex-1 relative w-full h-full cursor-ew-resize select-none overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black"
              ref={containerRef}
              onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
              onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            >
              
              {/* ========================================= */}
              {/* BEFORE CONTENT (Left side) */}
              {/* ========================================= */}
              <div 
                className="absolute inset-0 bg-[#e5e5e5] flex flex-col overflow-hidden font-sans text-gray-800 z-0"
              >
                {/* Browser Bar (Old) */}
                <div className="w-full bg-[#d4d4d4] border-b border-gray-400 p-2 sm:p-3 flex items-center justify-center shrink-0 pt-8 sm:pt-10">
                  <div className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-[9px] sm:text-[10px] text-gray-500 flex items-center justify-center font-serif shadow-inner">
                    http://www.mycompany2015.com
                  </div>
                </div>

                <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
                  {/* Header */}
                  <div className="p-3 sm:p-4 border-b-4 border-blue-800 bg-gray-50 flex flex-col items-center gap-2">
                    <h1 className="text-lg sm:text-xl font-bold text-blue-900 tracking-tighter font-serif text-center leading-tight">My Company Ltd.</h1>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-[9px] text-blue-700 underline font-bold">
                      <span>Home</span>
                      <span>About</span>
                      <span>Services</span>
                      <span>Contact</span>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 bg-white overflow-y-auto pb-10">
                    <div className="p-3 border border-gray-300 shadow-sm bg-white">
                      <h2 className="text-sm sm:text-base font-bold mb-2 text-red-600 font-serif leading-tight">Welcome to our website!</h2>
                      <p className="text-[9px] sm:text-[10px] mb-2 leading-relaxed text-gray-700">
                        We have been providing quality services since 1995. Please browse our website to find out more about our company and what we do.
                      </p>
                      <div className="w-full h-20 sm:h-24 bg-gray-200 border border-gray-400 flex items-center justify-center mb-2 sm:mb-3">
                        <ImageIcon size={20} className="text-gray-400" />
                        <span className="text-gray-500 text-[9px] sm:text-[10px] ml-1">Missing Image</span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] font-bold text-red-600 mb-1">NEW: Discounts available!</p>
                      <div className="text-[9px] bg-yellow-200 p-1 border border-yellow-400 text-center font-bold">
                        Call us today: 555-0192
                      </div>
                    </div>

                    <div className="w-full shrink-0 flex flex-col gap-3">
                      {/* Empty Bad Google Profile */}
                      <div className="bg-[#f8f9fa] p-3 border border-[#dadce0] shadow-sm flex flex-col">
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#dadce0]">
                          <Globe size={12} className="text-[#4285f4]" />
                          <h3 className="font-bold text-[9px] sm:text-[10px] text-[#202124]">Google Search</h3>
                        </div>
                        <div className="w-full h-16 sm:h-20 bg-[#e5e3df] border border-[#dadce0] flex items-center justify-center mb-2">
                          <Map size={16} className="text-[#9aa0a6]" />
                        </div>
                        <div className="flex gap-2 items-start">
                           <div className="w-8 h-8 bg-[#f1f3f4] flex items-center justify-center border border-[#dadce0] rounded shrink-0">
                             <ImageIcon size={12} className="text-[#9aa0a6]" />
                           </div>
                           <div>
                             <p className="text-[9px] sm:text-[10px] font-bold text-[#1a0dab] underline cursor-pointer leading-tight">My Company Ltd</p>
                             <p className="text-[8px] sm:text-[9px] text-[#70757a] mt-0.5">0 reviews</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Before Tag */}
                <div className="absolute top-14 sm:top-16 left-3 sm:left-4 z-20 pointer-events-none">
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-white border border-gray-300 text-gray-500 font-mono text-[8px] sm:text-[9px] tracking-widest uppercase font-bold shadow-lg">
                    {t.before}
                  </div>
                </div>
              </div>

              {/* ========================================= */}
              {/* AFTER CONTENT (Right side) */}
              {/* ========================================= */}
              <div 
                className="absolute inset-0 bg-[#050505] overflow-hidden flex flex-col z-10"
                style={{ clipPath: \`inset(0 0 0 \${sliderPosition}%)\` }}
              >
                {/* Browser Bar (Premium) */}
                <div className="w-full bg-[#0a0a0a] border-b border-white/5 p-2 sm:p-3 flex items-center justify-center shrink-0 pt-8 sm:pt-10 relative z-20">
                  <div className="w-full bg-[#111] border border-white/5 rounded px-2 py-1.5 text-[9px] sm:text-[10px] text-gray-400 flex items-center justify-center gap-1.5 font-mono shadow-inner">
                    <Shield size={9} className="text-gold" />
                    turnclean.pro
                  </div>
                </div>

                <div className="flex-1 relative w-full h-full bg-[#050505] overflow-hidden">
                  <iframe 
                    src="https://www.turnclean.pro/" 
                    className="w-full h-full border-none pointer-events-none" 
                    title="Turnclean Pro Premium Website"
                  />
                </div>
                
                {/* After Tag */}
                <div className="absolute top-14 sm:top-16 right-3 sm:right-4 z-20 pointer-events-none">
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-gold text-black font-mono text-[8px] sm:text-[9px] tracking-widest uppercase font-black shadow-[0_0_20px_rgba(212,175,55,0.4)]">
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
                  className={\`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold border-[3px] border-[#111] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-transform duration-200 \${isDragging ? 'scale-90' : 'scale-100 hover:scale-110'}\`}
                >
                  <ChevronLeft size={14} className="text-[#111] -mr-0.5" strokeWidth={3} />
                  <ChevronRight size={14} className="text-[#111] -ml-0.5" strokeWidth={3} />
                </div>
              </div>
            </div>`;

fs.writeFileSync('src/components/BeforeAfterSlider.tsx', code.substring(0, containerStartIndex) + replacement + code.substring(containerEndIndex));
