const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// The block to replace
const targetNetwork = `              {/* Velks Operational Network */}
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

const replacementNetwork = `              {/* Velks Operational Network */}
              <div className="mt-6 flex flex-col gap-4 text-xs font-light">
                <h4 className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                  {t.footer.velksNetworkTitle}
                </h4>
              
                <div className="flex flex-col gap-3">
              
                  <a
                    href="https://velksgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative"
                  >
                    <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                      {t.footer.velksNetworkInstitutional}
                    </span>
              
                    <span className="text-[#3b82f6] font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VELKSGROUP.COM
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300 -ml-0.5"
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
                      {t.footer.velksNetworkAIInfrastructure}
                    </span>
              
                    <span className="text-[#3b82f6] font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VELKSGROUP.CLOUD
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300 -ml-0.5"
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
                      {t.footer.velksNetworkCommercialAutomation}
                    </span>
              
                    <span className="text-[#3b82f6] font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VELKS.SPACE
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300 -ml-0.5"
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
                      {t.footer.velksNetworkDigitalExperiences}
                    </span>
              
                    <span className="text-[#3b82f6] font-semibold flex items-center gap-1.5 tracking-wider mt-0.5 text-[11px]">
                      VGROUP.SPACE
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="opacity-80 group-hover:opacity-100 transition-all duration-300 -ml-0.5"
                      />
                    </span>
                  </a>
              
                </div>
              </div>`;

if (content.includes(targetNetwork)) {
  content = content.replace(targetNetwork, replacementNetwork);
  
  // also reduce space before legal section
  content = content.replace(
    '          {/* Legal / Founder Section for AI Indexing */}\n          <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5',
    '          {/* Legal / Founder Section for AI Indexing */}\n          <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5'
  );
  
  fs.writeFileSync(file, content);
  console.log('Update successful');
} else {
  console.log('Target network not found');
}
