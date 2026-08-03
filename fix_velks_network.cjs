const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `              {/* Velks Operational Network */}
              <div className="mt-6 flex flex-col gap-3 text-xs font-light border-t border-white/5 pt-6">
                <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
                  REDE OPERACIONAL VELKS
                </h4>
              
                <p className="text-white/60 text-[11px] leading-relaxed">
                  Quatro domínios. Uma única inteligência operacional.
                </p>
              
                <div className="flex flex-col gap-3 mt-2">
              
                  <a
                    href="https://velksgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5 relative"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      Institucional
                    </span>
              
                    <span className="velks-domain-link font-semibold flex items-center gap-1.5">
                      VELKSGROUP.COM
                      <ArrowUpRight
                        size={14}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
              
                  <a
                    href="https://velksgroup.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5 relative"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      Infraestrutura IA
                    </span>
              
                    <span className="velks-domain-link font-semibold flex items-center gap-1.5">
                      VELKSGROUP.CLOUD
                      <ArrowUpRight
                        size={14}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
              
                  <a
                    href="https://velks.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5 relative"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      Automação Comercial
                    </span>
              
                    <span className="velks-domain-link font-semibold flex items-center gap-1.5">
                      VELKS.SPACE
                      <ArrowUpRight
                        size={14}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
              
                  <a
                    href="https://vgroup.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5 relative"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      Experiências Digitais
                    </span>
              
                    <span className="velks-domain-link font-semibold flex items-center gap-1.5">
                      VGROUP.SPACE
                      <ArrowUpRight
                        size={14}
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
              
                </div>
              </div>`;

const replacement = `              {/* Velks Operational Network */}
              <div className="mt-8 flex flex-col gap-4 text-xs font-light">
                <h4 className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                  REDE OPERACIONAL VELKS
                </h4>
              
                <div className="flex flex-col gap-3">
              
                  <a
                    href="https://velksgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative"
                  >
                    <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                      Institucional
                    </span>
              
                    <span className="text-blue-400 font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VELKSGROUP.COM
                      <ArrowUpRight
                        size={12}
                        strokeWidth={2.5}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300"
                      />
                    </span>
                  </a>
              
                  <a
                    href="https://velksgroup.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative"
                  >
                    <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                      Infraestrutura IA
                    </span>
              
                    <span className="text-blue-400 font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VELKSGROUP.CLOUD
                      <ArrowUpRight
                        size={12}
                        strokeWidth={2.5}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300"
                      />
                    </span>
                  </a>
              
                  <a
                    href="https://velks.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative"
                  >
                    <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                      Automação Comercial
                    </span>
              
                    <span className="text-blue-400 font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VELKS.SPACE
                      <ArrowUpRight
                        size={12}
                        strokeWidth={2.5}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300"
                      />
                    </span>
                  </a>
              
                  <a
                    href="https://vgroup.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative"
                  >
                    <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                      Experiências Digitais
                    </span>
              
                    <span className="text-blue-400 font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VGROUP.SPACE
                      <ArrowUpRight
                        size={12}
                        strokeWidth={2.5}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300"
                      />
                    </span>
                  </a>
              
                </div>
              </div>`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Replaced successfully');
} else {
  console.log('Target not found');
}
