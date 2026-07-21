const fs = require('fs');

const file = 'src/components/ThreeHero.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `            <div className="flex flex-wrap justify-center gap-2 text-[10px] md:text-xs font-mono tracking-[0.2em] text-gold-light/80 uppercase">
              <span>{currentLang === 'pt' ? 'Portugal' : currentLang === 'es' ? 'Portugal' : currentLang === 'it' ? 'Portogallo' : currentLang === 'fr' ? 'Portugal' : currentLang === 'de' ? 'Portugal' : 'Portugal'}</span> <span className="opacity-50">•</span> 
              <span>{currentLang === 'pt' ? 'Espanha' : currentLang === 'es' ? 'España' : currentLang === 'it' ? 'Spagna' : currentLang === 'fr' ? 'Espagne' : currentLang === 'de' ? 'Spanien' : 'Spain'}</span> <span className="opacity-50">•</span> 
              <span>{currentLang === 'pt' ? 'Itália' : currentLang === 'es' ? 'Italia' : currentLang === 'it' ? 'Italia' : currentLang === 'fr' ? 'Italie' : currentLang === 'de' ? 'Italien' : 'Italy'}</span> <span className="opacity-50">•</span> 
              <span>{currentLang === 'pt' ? 'Luxemburgo' : currentLang === 'es' ? 'Luxemburgo' : currentLang === 'it' ? 'Lussemburgo' : currentLang === 'fr' ? 'Luxembourg' : currentLang === 'de' ? 'Luxemburg' : 'Luxembourg'}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-sans font-medium text-white/90">
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">{currentLang === 'pt' ? 'Websites Premium' : currentLang === 'es' ? 'Sitios Web Premium' : currentLang === 'it' ? 'Siti Web Premium' : currentLang === 'fr' ? 'Sites Web Premium' : currentLang === 'de' ? 'Premium-Websites' : 'Premium Websites'}</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">Google Maps</span>
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">{currentLang === 'pt' ? 'Atendimento IA 24/7' : currentLang === 'es' ? 'Atención IA 24/7' : currentLang === 'it' ? 'Assistenza IA 24/7' : currentLang === 'fr' ? 'Support IA 24/7' : currentLang === 'de' ? '24/7 KI-Support' : '24/7 AI Support'}</span>
            </div>`;

const regex = /<div className="flex flex-wrap justify-center gap-2 text-\[10px\] md:text-xs font-mono tracking-\[0\.2em\] text-gold-light\/80 uppercase">[\s\S]*?<div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-sans font-medium text-white\/90">[\s\S]*?<\/div>/;

content = content.replace(regex, replacement);
fs.writeFileSync(file, content);
console.log('done fixing hero pills');
