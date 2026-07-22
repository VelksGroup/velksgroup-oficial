import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { 
  translations, 
  Language, 
  TranslationSchema 
} from './translations';
import { ThreeHero } from './components/ThreeHero';
const ProblemSection = React.lazy(() => import('./components/ProblemSection').then(m => ({ default: m.ProblemSection })));
const SolutionSection = React.lazy(() => import('./components/SolutionSection').then(m => ({ default: m.SolutionSection })));
const AuthoritySection = React.lazy(() => import('./components/AuthoritySection').then(m => ({ default: m.AuthoritySection })));
const WidgetSection = React.lazy(() => import('./components/WidgetSection').then(m => ({ default: m.WidgetSection })));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const PricingSection = React.lazy(() => import('./components/PricingSection'));
const AIVisionSection = React.lazy(() => import('./components/AIVisionSection').then(m => ({ default: m.AIVisionSection })));
const CTACanvasParticles = React.lazy(() => import('./components/CTACanvasParticles').then(m => ({ default: m.CTACanvasParticles })));
import { 
  Building2, 
  MapPin, 
  Smartphone, 
  Clock, 
  AlertTriangle, 
  Search, 
  ThumbsUp, 
  Activity, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Globe, 
  Mail, 
  Phone, 
  Check, 
  Send,
  ExternalLink,
  Shield,
  FileText,
  Lock,
  X
} from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [t, setT] = useState<TranslationSchema>(translations.pt);
  
  // States for interactive FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // States for cookie consent
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  // States for Policy Modals
  const [modalType, setModalType] = useState<'privacy' | 'cookies' | 'terms' | 'compliance' | 'legal' | null>(null);

  // States & Refs for Testimonial Slider
  const testimonialTrackRef = useRef<HTMLDivElement>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => {
      const max = t.testimonials.list.length - 1;
      return prev < max ? prev + 1 : 0;
    });
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => {
      const max = t.testimonials.list.length - 1;
      return prev > 0 ? prev - 1 : max;
    });
  };

  useEffect(() => {
    if (testimonialTrackRef.current && testimonialTrackRef.current.children.length > 0) {
      const card = testimonialTrackRef.current.children[0] as HTMLElement;
      // offsetWidth + gap (24px for gap-6)
      const cardWidth = card.offsetWidth + 24;
      gsap.to(testimonialTrackRef.current, {
        x: -currentTestimonialIndex * cardWidth,
        duration: 0.8,
        ease: "power3.inOut"
      });
    }
  }, [currentTestimonialIndex, t.testimonials.list.length]);

  // References to scroll targets
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Handle language switch
  useEffect(() => {
    setT(translations[currentLang]);
    // Restart chatbot with corresponding language whenever language changes
  }, [currentLang]);

  // Handle Cookie consent from localStorage
  useEffect(() => {
    const savedConsent = localStorage.getItem('velks-cookie-consent');
    if (savedConsent) {
      setCookieConsent(savedConsent === 'accepted');
    }
  }, []);

  // Inject SEO metadata dynamically for crawlers (hreglangs, description, OpenGraph)
  useEffect(() => {
    document.title = `${t.hero.title} | VELKS Group Europe`;
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.hero.subtitle);

    // OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', `${t.hero.title} | VELKS Group`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', t.hero.subtitle);

    // Inject JSON-LD Schema
    const existingSchema = document.getElementById('velks-schema-org');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const schemaScript = document.createElement('script');
    schemaScript.id = 'velks-schema-org';
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.velksgroup.com/#organization",
          "name": "VELKS Group",
          "url": "https://www.velksgroup.com/",
          "logo": "https://www.velksgroup.com/logo-gold.png",
          "email": "velksgroup@gmail.com",
          "telephone": "+33761569686",
          "sameAs": [
            "https://www.facebook.com/velksgroup",
            "https://www.instagram.com/velksgroup"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "57, Avenue de La Gare",
            "addressLocality": "Luxembourg",
            "postalCode": "L-1611",
            "addressCountry": "LU"
          }
        },
        {
          "@type": "LocalBusiness",
          "name": "VELKS Group Europe",
          "image": "https://www.velksgroup.com/logo-gold.png",
          "@id": "https://www.velksgroup.com/#localbusiness",
          "url": "https://www.velksgroup.com/",
          "telephone": "+33761569686",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "57, Avenue de La Gare",
            "addressLocality": "Luxembourg",
            "postalCode": "L-1611",
            "addressCountry": "LU"
          }
        }
      ]
    });
    document.head.appendChild(schemaScript);

  }, [t, currentLang]);

  // Cookie Consent Handlers
  const handleAcceptCookies = () => {
    localStorage.setItem('velks-cookie-consent', 'accepted');
    setCookieConsent(true);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('velks-cookie-consent', 'declined');
    setCookieConsent(false);
  };

  // WhatsApp click triggers tracking & opens link with customized messages
  const handleWhatsAppClick = (customMsg: string) => {
    const encodedMsg = encodeURIComponent(customMsg);
    const phoneNumber = "33761569686"; // Formatted for WhatsApp API
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

    // Smooth scroll handler helper
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-gray-100 selection:bg-gold selection:text-black antialiased overflow-x-hidden font-sans">
      
      {/* HEADER / TOP NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 glass-premium border-b border-gold/10 sm:backdrop-blur-md px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo brand */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="w-10 h-10 rounded flex items-center justify-center bg-transparent relative">
                <img loading="lazy" src="/logo-oficial.png" alt="VELKS Logo" className="w-full h-full object-contain z-10" />
              </div>
              <span className="absolute -top-1.5 -right-0.5 text-[10px] text-gold animate-bounce drop-shadow-[0_0_5px_rgba(212,175,55,0.8)] z-20">👑</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-widest text-white text-base leading-none group-hover:text-gold-light transition-colors">VELKS</span>
              <span className="text-[9px] font-mono tracking-[4px] text-gold uppercase leading-none mt-1">GROUP</span>
            </div>
          </div>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase font-mono tracking-widest text-gray-300">
            <button aria-label="Button" onClick={() => scrollTo(problemRef)} className="hover:text-gold transition-colors cursor-pointer">{t.nav.problem}</button>
            <button aria-label="Button" onClick={() => scrollTo(solutionRef)} className="hover:text-gold transition-colors cursor-pointer">{t.nav.solution}</button>
            <button aria-label="Button" onClick={() => scrollTo(widgetRef)} className="hover:text-gold transition-colors cursor-pointer">{t.nav.widget}</button>
            <button aria-label="Button" onClick={() => scrollTo(pricingRef)} className="hover:text-gold transition-colors cursor-pointer">{t.nav.pricing}</button>
            <button aria-label="Button" onClick={() => scrollTo(faqRef)} className="hover:text-gold transition-colors cursor-pointer">{t.nav.faq}</button>
          </nav>

          {/* Languages - Emoji Flags direct toggle */}
          <div className="flex items-center gap-1.5 md:gap-2.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 z-50 shadow-inner">
            <button aria-label="Button" 
              onClick={() => setCurrentLang('pt')} 
              className={`text-sm md:text-base hover:scale-125 hover:rotate-6 transition-all cursor-pointer ${currentLang === 'pt' ? 'scale-125 filter drop-shadow-[0_0_4px_#d4af37]' : 'opacity-40 grayscale-[40%]'}`}
              title="Português"
            >
              🇵🇹
            </button>
            <button aria-label="Button" 
              onClick={() => setCurrentLang('es')} 
              className={`text-sm md:text-base hover:scale-125 hover:rotate-6 transition-all cursor-pointer ${currentLang === 'es' ? 'scale-125 filter drop-shadow-[0_0_4px_#d4af37]' : 'opacity-40 grayscale-[40%]'}`}
              title="Español"
            >
              🇪🇸
            </button>
            <button aria-label="Button" 
              onClick={() => setCurrentLang('en')} 
              className={`text-sm md:text-base hover:scale-125 hover:rotate-6 transition-all cursor-pointer ${currentLang === 'en' ? 'scale-125 filter drop-shadow-[0_0_4px_#d4af37]' : 'opacity-40 grayscale-[40%]'}`}
              title="English"
            >
              🇬🇧
            </button>
            <button aria-label="Button" 
              onClick={() => setCurrentLang('fr')} 
              className={`text-sm md:text-base hover:scale-125 hover:rotate-6 transition-all cursor-pointer ${currentLang === 'fr' ? 'scale-125 filter drop-shadow-[0_0_4px_#d4af37]' : 'opacity-40 grayscale-[40%]'}`}
              title="Français"
            >
              🇫🇷
            </button>
            <button aria-label="Button" 
              onClick={() => setCurrentLang('it')} 
              className={`text-sm md:text-base hover:scale-125 hover:rotate-6 transition-all cursor-pointer ${currentLang === 'it' ? 'scale-125 filter drop-shadow-[0_0_4px_#d4af37]' : 'opacity-40 grayscale-[40%]'}`}
              title="Italiano"
            >
              🇮🇹
            </button>
            <button aria-label="Button" 
              onClick={() => setCurrentLang('de')} 
              className={`text-sm md:text-base hover:scale-125 hover:rotate-6 transition-all cursor-pointer ${currentLang === 'de' ? 'scale-125 filter drop-shadow-[0_0_4px_#d4af37]' : 'opacity-40 grayscale-[40%]'}`}
              title="Deutsch"
            >
              🇩🇪
            </button>
          </div>
        </div>
      </header>

      {/* THREE.JS CINEMATIC HERO */}
      <ThreeHero 
        currentLang={currentLang} 
        t={t} 
        onCtaClick={handleWhatsAppClick} 
        onScrollToDemos={() => scrollTo(pricingRef)} 
      />
      <React.Suspense fallback={<div className="min-h-screen bg-obsidian-dark flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div></div>}>

      

      {/* BLOCO 2 - PROBLEMA (THE PROBLEM) */}
      <ProblemSection t={t} currentLang={currentLang} problemRef={problemRef} />

      {/* BLOCO 3 - SOLUÇÃO (THE SOLUTION) */}
      <SolutionSection t={t} currentLang={currentLang} solutionRef={solutionRef} />

      {/* BLOCO 4 - AUTORIDADE LUXEMBURGO, ESPANHA, PORTUGAL */}
      <AuthoritySection t={t} currentLang={currentLang} />

      {/* TRANSITION 4 -> 5 */}
      <div className="w-full h-32 bg-gradient-to-b from-obsidian-light to-obsidian relative overflow-hidden flex justify-center items-center">
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: '100%', opacity: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 w-[2px] bg-gradient-to-b from-transparent via-gold to-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]"
        />
        <div className="absolute inset-0 flex justify-center items-center">
           {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ y: -50, x: (i - 2.5) * 20, opacity: 0 }}
               whileInView={{ y: 50, x: 0, opacity: [0, 1, 0] }}
               transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
               className="w-1 h-1 bg-gold rounded-full absolute"
             />
           ))}
        </div>
      </div>

      {/* BLOCO 5 - WIDGET INTELIGENTE (ATENDIMENTO AUTOMÁTICO 24H) */}
      <WidgetSection t={t} currentLang={currentLang} widgetRef={widgetRef} />

      {/* BLOCO 5.5 - AI VISION (CINEMATIC ENGINEERING) */}
      <AIVisionSection t={t} />

      {/* BLOCO 6 - PROVA SOCIAL (TESTIMONIALS) */}
      <TestimonialsSection t={t} currentLang={currentLang} />

      {/* BLOCO 7 - PACOTES (PRICING & BUNDLES) */}
      <section ref={pricingRef} className="py-24 px-4 bg-obsidian relative overflow-hidden">
        {/* Shiny graphical accents */}
        <div className="absolute top-12 left-12 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-[4px] text-gold font-bold">{t.pricing.singlePayment}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              {t.pricing.title}
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto" />
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* GMaps Plan */}
            <div className="glass-premium p-8 rounded-3xl border border-gold/10 flex flex-col justify-between gap-8 relative hover:border-gold/30 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded">01. GOOGLE</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-4">{t.pricing.plans.gmaps.title}</h3>
                </div>
                <div className="flex flex-wrap items-baseline gap-y-2 gap-x-2 border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-400 font-mono">{currentLang === 'pt' ? 'A partir de' : currentLang === 'es' ? 'A partir de' : currentLang === 'it' ? 'A partire da' : currentLang === 'fr' ? 'À partir de' : currentLang === 'de' ? 'Ab' : 'Starting from'}</span>
                  <span className="text-4xl font-display font-black text-white">{t.pricing.plans.gmaps.price}</span>
                  <span className="text-[10px] text-gold uppercase font-mono tracking-widest bg-gold/5 px-2 py-0.5 rounded border border-gold/10 whitespace-nowrap">{t.pricing.singlePayment}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {t.pricing.plans.gmaps.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-snug">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(t.pricing.plans.gmaps.tracking)}
                className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-gold hover:text-black border border-gold/20 hover:border-gold font-display font-bold text-xs uppercase tracking-widest text-gold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                {t.pricing.plans.gmaps.cta}
              </button>
            </div>

            {/* Website Plan */}
            <div className="glass-premium p-8 rounded-3xl border border-gold/30 flex flex-col justify-between gap-8 relative shadow-2xl hover:border-gold transition-all duration-300">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-gold to-gold-dark text-black text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
                BEST SELLER
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded">02. WEBSITES</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-4">{t.pricing.plans.website.title}</h3>
                </div>
                <div className="flex flex-wrap items-baseline gap-y-2 gap-x-2 border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-400 font-mono">{currentLang === 'pt' ? 'A partir de' : currentLang === 'es' ? 'A partir de' : currentLang === 'it' ? 'A partire da' : currentLang === 'fr' ? 'À partir de' : currentLang === 'de' ? 'Ab' : 'Starting from'}</span>
                  <span className="text-4xl font-display font-black text-white">{t.pricing.plans.website.price}</span>
                  <span className="text-[10px] text-gold uppercase font-mono tracking-widest bg-gold/5 px-2 py-0.5 rounded border border-gold/10 whitespace-nowrap">{t.pricing.singlePayment}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {t.pricing.plans.website.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-snug">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(t.pricing.plans.website.tracking)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-black font-display font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:opacity-90 shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
              >
                <MessageSquare size={14} />
                {t.pricing.plans.website.cta}
              </button>
            </div>

            {/* AI Assistant Plan */}
            <div className="glass-premium p-8 rounded-3xl border border-gold/10 flex flex-col justify-between gap-8 relative hover:border-gold/30 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded">03. IA VELKS</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-4">{t.pricing.plans.automacao.title}</h3>
                </div>
                <div className="flex flex-wrap items-baseline gap-y-2 gap-x-2 border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-400 font-mono">{currentLang === 'pt' ? 'A partir de' : currentLang === 'es' ? 'A partir de' : currentLang === 'it' ? 'A partire da' : currentLang === 'fr' ? 'À partir de' : currentLang === 'de' ? 'Ab' : 'Starting from'}</span>
                  <span className="text-4xl font-display font-black text-white">{t.pricing.plans.automacao.price}</span>
                  <span className="text-[10px] text-gold uppercase font-mono tracking-widest bg-gold/5 px-2 py-0.5 rounded border border-gold/10 whitespace-nowrap">{t.pricing.singlePayment}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {t.pricing.plans.automacao.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-snug">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(t.pricing.plans.automacao.tracking)}
                className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-gold hover:text-black border border-gold/20 hover:border-gold font-display font-bold text-xs uppercase tracking-widest text-gold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                {t.pricing.plans.automacao.cta}
              </button>
            </div>

            {/* E-commerce Plan */}
            <div className="glass-premium p-8 rounded-3xl border border-gold/10 flex flex-col justify-between gap-8 relative hover:border-gold/30 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded">04. E-COMMERCE</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-4">{t.pricing.plans.ecommerce.title}</h3>
                </div>
                <div className="flex flex-wrap items-baseline gap-y-2 gap-x-2 border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-400 font-mono">{currentLang === 'pt' ? 'A partir de' : currentLang === 'es' ? 'A partir de' : currentLang === 'it' ? 'A partire da' : currentLang === 'fr' ? 'À partir de' : currentLang === 'de' ? 'Ab' : 'Starting from'}</span>
                  <span className="text-4xl font-display font-black text-white">{t.pricing.plans.ecommerce.price}</span>
                  <span className="text-[10px] text-gold uppercase font-mono tracking-widest bg-gold/5 px-2 py-0.5 rounded border border-gold/10 whitespace-nowrap">{t.pricing.singlePayment}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {t.pricing.plans.ecommerce.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-snug">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(t.pricing.plans.ecommerce.tracking)}
                className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-gold hover:text-black border border-gold/20 hover:border-gold font-display font-bold text-xs uppercase tracking-widest text-gold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                {t.pricing.plans.ecommerce.cta}
              </button>
            </div>

            {/* Imperial All-In-One Custom */}
            <div className="glass-premium p-8 rounded-3xl border border-gold/10 flex flex-col justify-between gap-8 relative md:col-span-2 lg:col-span-2 hover:border-gold/30 transition-all duration-300">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                ULTIMATE CONTROL
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded">05. IMPERIAL</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-4">{t.pricing.plans.custom.title}</h3>
                </div>
                <div className="flex flex-wrap items-baseline gap-y-2 gap-x-2 border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-400 font-mono">{currentLang === 'pt' ? 'Pack Integrado' : currentLang === 'es' ? 'Paquete Integrado' : currentLang === 'it' ? 'Pacchetto Integrato' : currentLang === 'fr' ? 'Package Intégré' : currentLang === 'de' ? 'Integriertes Paket' : 'Integrated Package'}</span>
                  <span className="text-4xl font-display font-black text-gold glow-text">{t.pricing.plans.custom.price}</span>
                  <span className="text-[10px] text-gold uppercase font-mono tracking-widest bg-gold/5 px-2 py-0.5 rounded border border-gold/10 whitespace-nowrap">{t.pricing.singlePayment}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {t.pricing.plans.custom.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-snug">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <button aria-label="Button" 
                onClick={() => handleWhatsAppClick(t.pricing.plans.custom.tracking)}
                className="w-full py-3.5 rounded-xl bg-gold text-black hover:opacity-90 font-display font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare size={14} />
                {t.pricing.plans.custom.cta}
              </button>
            </div>

          </div>

          {/* Unified Pack declaration banner */}
          <div className="mt-16 p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">{t.pricing.allPlansInclude}</h4>
                <p className="text-xs text-gray-400 font-light leading-normal mt-0.5">{t.pricing.allPlansIncludeDesc}</p>
              </div>
            </div>
            <div className="text-xs font-mono bg-gold/5 text-gold border border-gold/20 px-4 py-2 rounded uppercase tracking-widest font-semibold shrink-0">
              {currentLang === 'pt' ? 'PAGAMENTO ÚNICO • SEM CONTRATOS RECORRENTES' : currentLang === 'es' ? 'PAGO ÚNICO • SIN CONTRATOS RECURRENTES' : currentLang === 'it' ? 'PAGAMENTO UNICO • NESSUN CONTRATTO RICORRENTE' : currentLang === 'fr' ? 'PAIEMENT UNIQUE • SANS CONTRATS RÉCURRENTS' : currentLang === 'de' ? 'EINMALIGE ZAHLUNG • KEINE WIEDERKEHRENDEN VERTRÄGE' : 'SINGLE PAYMENT • NO HIDDEN CONTRACTS'}
            </div>
          </div>

        </div>
      </section>

      {/* BLOCO 9 - FAQ (ACCORDION OPTIMIZED FOR COGNITIVE RETRIEVAL) */}
      <section ref={faqRef} className="py-24 px-4 bg-[#030304] relative overflow-hidden border-t border-white/5">
        {/* Cinematic Software Engineering Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-[#030304]/95 to-[#030304] pointer-events-none" />
        
        {/* Animated Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        
        {/* Deep blue engineering core glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-[100%] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10  pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">

          <div className="text-center mb-16 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-[4px] text-gold font-bold">{currentLang === 'pt' ? 'CONTRADIÇÕES E RESPOSTAS TRANSPARENTES' : currentLang === 'es' ? 'CONTRADICCIONES Y RESPUESTAS TRANSPARENTES' : currentLang === 'it' ? 'CONTRADDIZIONI E RISPOSTE TRASPARENTI' : currentLang === 'fr' ? 'CONTRADICTIONS ET RÉPONSES TRANSPARENTES' : currentLang === 'de' ? 'WIDERSPRÜCHE UND TRANSPARENTE ANTWORTEN' : 'FACT-BASED RETRIEVAL'}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              {t.faq.title}
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto" />
          </div>

          {/* Interactive Accordion list */}
          <div className="flex flex-col gap-4">
            {t.faq.questions.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] overflow-hidden transition-all duration-300"
                >
                  <button aria-label="Button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-semibold text-white text-base md:text-lg leading-tight">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-gold/15' : ''}`}>
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-sm text-gray-300 font-light leading-relaxed border-t border-white/5 bg-black/20 whitespace-pre-line">
                          {faq.a.split(/(velks\.space|vgroup\.space)/g).map((part, i) => {
                            if (part === 'velks.space') {
                              return <a key={i} href="https://velks.space" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{part}</a>;
                            }
                            if (part === 'vgroup.space') {
                              return <a key={i} href="https://vgroup.space" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{part}</a>;
                            }
                            return <span key={i}>{part}</span>;
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BLOCO 10 - CTA FINAL (EMOTIONAL CONVERSION BLOCK WITH ZERO FORMS) */}
      <section className="py-24 px-4 bg-gradient-to-b from-obsidian-dark to-obsidian relative overflow-hidden">
        {/* High-Performance Canvas Particles (Neural Net / Gold Dust) */}
        <CTACanvasParticles />
        
        {/* Abstract volumetric glowing rays background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center gap-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-20 h-20 flex items-center justify-center bg-transparent drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            <img loading="lazy" src="/logo-oficial.png" alt="VELKS Logo" className="w-full h-full object-contain z-10" />
            <span className="absolute -top-3 -right-2 text-xl text-gold animate-bounce drop-shadow-[0_0_8px_rgba(212,175,55,1)] z-20">👑</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight max-w-4xl">
            {t.ctaFinal.title}
          </h2>

          <p className="text-base md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            {t.ctaFinal.subtitle}
          </p>

          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            
            <button aria-label="Button"
              onClick={() => handleWhatsAppClick(t.ctaFinal.tracking)}
              className="px-4 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-gold via-gold-light to-gold-dark text-black font-display font-black text-sm sm:text-base tracking-wide sm:tracking-widest uppercase hover:opacity-95 hover:scale-103 transition-all cursor-pointer shadow-[0_5px_30px_rgba(212,175,55,0.45)] flex items-center justify-center gap-2 sm:gap-3 w-full"
            >
              <MessageSquare size={20} className="text-black flex-shrink-0" />
              <span className="break-words whitespace-normal text-center flex-1">{t.ctaFinal.cta}</span>
            </button>

            {/* Microcopy */}
            <span className="text-xs text-gold font-mono tracking-widest uppercase">
              {t.ctaFinal.microcopy}
            </span>

          </div>

        </div>
      </section>

      {/* RODAPÉ MINIMALISTA (COMPLIANT FOOTER) */}
      <footer className="bg-obsidian-dark text-gray-400 py-16 px-4 md:px-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Logo brand */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 flex items-center justify-center bg-transparent">
                  <img loading="lazy" src="/logo-oficial.png" alt="VELKS Logo" className="w-full h-full object-contain z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold tracking-widest text-white text-sm leading-none">VELKS</span>
                  <span className="text-[8px] font-mono tracking-[4px] text-gold uppercase leading-none mt-0.5">GROUP</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
                {t.footer.logoDesc}
              </p>
              <div className="flex items-center gap-2 text-xs mt-2">
                <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gold text-[13px] tracking-widest leading-none mt-[-2px]">★★★★★</span>
                <span className="text-gray-400 font-medium">Excelência Europeia</span>
              </div>
            </div>

            {/* Address Columns */}
            <div className="md:col-span-4 flex flex-col gap-3 text-xs font-light">
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">{currentLang === 'pt' ? 'ESCRITÓRIOS CENTRAIS' : currentLang === 'es' ? 'OFICINAS CENTRALES' : currentLang === 'it' ? 'UFFICI CENTRALI' : currentLang === 'fr' ? 'BUREAUX CENTRAUX' : currentLang === 'de' ? 'ZENTRALBÜROS' : 'HQ LOCATIONS'}</h4>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>{t.footer.hqMain}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-gray-500 shrink-0 mt-0.5" />
                <span>{t.footer.hqSec}</span>
              </p>
            </div>

            {/* Contacts Column */}
            <div className="md:col-span-3 flex flex-col gap-3 text-xs font-light">
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">{t.footer.directContacts}</h4>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:velksgroup@gmail.com" className="hover:text-gold transition-colors">velksgroup@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a href="tel:+33761569686" className="hover:text-gold transition-colors">+33 761 56 96 86</a>
              </p>
              <div className="flex gap-3 mt-2 text-[10px] font-mono text-gold font-semibold uppercase">
                <span>PORTUGAL • LUXEMBURGO</span>
              </div>
            </div>

          </div>

          {/* Legal / Founder Section for AI Indexing */}
          <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3 text-xs text-gray-400 font-light leading-relaxed">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <Shield size={14} className="text-gold" />
              {t.footer.legalNoticeTitle}
            </h4>
            <p>
              {t.footer.legalNoticeText}
            </p>
          </div>

          {/* Legal Compliance Footer Line */}
          <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-light text-gray-500">
            <p className="text-center sm:text-left">{t.footer.rights}</p>
            
            {/* Quick legal anchors opening Modals */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400 font-mono text-[10px] uppercase tracking-wider">
              <button aria-label="Button" onClick={() => setModalType('privacy')} className="hover:text-gold transition-colors cursor-pointer">{t.footer.policyPrivacy}</button>
              <button aria-label="Button" onClick={() => setModalType('cookies')} className="hover:text-gold transition-colors cursor-pointer">{t.footer.policyCookies}</button>
              <button aria-label="Button" onClick={() => setModalType('terms')} className="hover:text-gold transition-colors cursor-pointer">{t.footer.terms}</button>
              <button aria-label="Button" onClick={() => setModalType('compliance')} className="hover:text-gold transition-colors cursor-pointer">{t.footer.compliance}</button>
              <button aria-label="Button" onClick={() => setModalType('legal')} className="hover:text-gold transition-colors cursor-pointer">{t.footer.legal}</button>
            </div>
          </div>

          {/* RGPD declaration stamp */}
          <div className="flex justify-center md:justify-end gap-2 items-center text-[9px] font-mono text-gray-600 tracking-widest uppercase">
            <Lock size={10} />
            <span>{t.footer.gdpr}</span>
          </div>

        </div>
      </footer>

      </React.Suspense>
      {/* COOKIES POPUP CONSENT (EU COMPLIANT BANNER) */}
      <AnimatePresence>
        {cookieConsent === null && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto glass-premium border border-gold/30 p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
              {/* Backlight flare inside banner */}
              <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
              
              <div className="flex gap-4 items-start relative z-10">
                <Shield size={24} className="text-gold shrink-0 mt-0.5" />
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {t.cookieConsent.text}
                </p>
              </div>

              <div className="flex gap-3 shrink-0 relative z-10 w-full sm:w-auto justify-end">
                <button aria-label="Button" 
                  onClick={handleDeclineCookies}
                  className="px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {t.cookieConsent.decline}
                </button>
                <button aria-label="Button" 
                  onClick={handleAcceptCookies}
                  className="px-5 py-2.5 rounded-lg bg-gold text-black text-[10px] font-mono uppercase tracking-widest font-black hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                >
                  {t.cookieConsent.accept}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POLICY & LEGAL TERMS DIALOG MODALS */}
      <AnimatePresence>
        {modalType !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 sm:backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-premium max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl border border-gold/30 p-6 md:p-8 flex flex-col gap-6 relative"
            >
              
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-gold" size={18} />
                  <span className="font-display font-bold text-white uppercase text-sm tracking-widest">
                    {modalType === 'privacy' ? t.footer.policyPrivacy :
                     modalType === 'cookies' ? t.footer.policyCookies :
                     modalType === 'terms' ? t.footer.terms :
                     modalType === 'compliance' ? t.footer.compliance :
                     t.footer.legal}
                  </span>
                </div>
                <button aria-label="Button" 
                  onClick={() => setModalType(null)} 
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal copy */}
              <div className="text-xs text-gray-300 font-light leading-relaxed flex flex-col gap-4 font-sans">
                
                                {modalType === 'privacy' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">1. Introdução / Introduction</h4>
                    <p>{currentLang === 'pt' ? 'A VELKS Group compromete-se a proteger a privacidade dos seus utilizadores. Em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia, garantimos que quaisquer dados pessoais recolhidos nas nossas demonstrações ou contactos são tratados de forma confidencial e com a máxima segurança.' : 'VELKS Group is committed to protecting your privacy. In full compliance with the European Union General Data Protection Regulation (GDPR), we ensure that any personal data collected in our demonstrations or contacts is treated confidentially and with maximum security.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">2. Recolha de Dados / Data Collection</h4>
                    <p>{currentLang === 'pt' ? 'Recolhemos apenas os dados fornecidos voluntariamente por si (como Nome, Endereço de Email, e Número de WhatsApp) para fins de comunicação comercial direta, simulação interativa, ou processamento de encomendas dos pacotes especificados.' : 'We only collect data voluntarily provided by you (such as Name, Email Address, and WhatsApp Number) for direct commercial communication, interactive simulation, or order processing.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">3. Retenção de Dados / Data Retention</h4>
                    <p>{currentLang === 'pt' ? 'Os seus dados não serão vendidos ou transferidos a terceiros. Serão apagados definitivamente mediante simples pedido por email enviado a velksgroup@gmail.com.' : 'Your data will not be sold or transferred to third parties. It will be permanently deleted upon simple request by email sent to velksgroup@gmail.com.'}</p>
                  </>
                )}
                {modalType === 'cookies' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">1. O que são Cookies? / What are Cookies?</h4>
                    <p>{currentLang === 'pt' ? 'Cookies são pequenos ficheiros de texto guardados no seu navegador para otimizar a experiência de carregamento do site e nos ajudar a analisar quais as secções que recebem maior tráfego.' : 'Cookies are small text files stored in your browser to optimize the site loading experience and help us analyze which sections receive the most traffic.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">2. Uso de Cookies neste Site / Cookie Usage</h4>
                    <p>{currentLang === 'pt' ? 'Este site utiliza cookies funcionais mínimos e identificadores locais temporários (como localStorage) para persistir o seu idioma escolhido, simular as mensagens do assistente inteligente Concierge IA, e reter o seu próprio consentimento de cookies para que não veja o banner em visitas subsequentes.' : 'This site uses minimal functional cookies and temporary local identifiers (like localStorage) to persist your chosen language, simulate messages from the smart AI Concierge, and retain your cookie consent.'}</p>
                  </>
                )}
                {modalType === 'terms' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">1. Termos de Utilização / Terms of Service</h4>
                    <p>{currentLang === 'pt' ? 'O conteúdo deste site tem fins meramente informativos e demonstrativos. A VELKS Group fornece soluções personalizadas e pacotes fechados de Google Maps e Websites com pagamentos únicos, sem subscrições recorrentes, sujeitos a contrato formal de prestação de serviços assinado bilateralmente antes da execução técnica.' : 'The content of this site is for informational and demonstrative purposes only. VELKS Group provides customized solutions and fixed packages for Google Maps and Websites with single payments, no recurring subscriptions, subject to a formal service contract.'}</p>
                    <h4 className="font-bold text-white font-display text-sm">2. Propriedade Intelectual / Intellectual Property</h4>
                    <p>{currentLang === 'pt' ? 'O design, o motor de simulação de assistente IA 3D e todos os scripts integrados são propriedade intelectual da VELKS Group ou parceiros tecnológicos autorizados.' : 'The design, the 3D AI assistant simulation engine, and all integrated scripts are the intellectual property of VELKS Group or authorized technology partners.'}</p>
                  </>
                )}
                {modalType === 'compliance' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">{t.footer.europeanCompliance}</h4>
                    <p>{currentLang === 'pt' ? 'A VELKS Group opera sob os rigorosos padrões corporativos do Grão-Ducado de Luxemburgo e da União Europeia. Alinhamos todos os nossos processos, servidores, processamento de formulários e integradores de pagamento aos regulamentos da UE aplicáveis ao comércio eletrónico, proteção do consumidor local e concorrência justa.' : 'VELKS Group operates under the strict corporate standards of the Grand Duchy of Luxembourg and the European Union. We align all our processes to applicable EU regulations.'}</p>
                  </>
                )}
                {modalType === 'legal' && (
                  <>
                    <h4 className="font-bold text-white font-display text-sm">{t.footer.legalDisclaimer}</h4>
                    <p>{currentLang === 'pt' ? 'VELKS Group. Sede Principal em Luxembourg: 57, Avenue de La Gare, L-1611 Luxembourg Gare, Luxemburgo. Sede secundária em Coimbra, Portugal. Contacto oficial: velksgroup@gmail.com. Telemóvel: +33 761 56 96 86.' : 'VELKS Group. HQ: 57, Avenue de La Gare, L-1611 Luxembourg Gare. Secondary: Coimbra, Portugal. Contact: velksgroup@gmail.com. Phone: +33 761 56 96 86.'}</p>
                  </>
                )}

              </div>

              {/* Close button inside modal */}
              <button aria-label="Button" 
                onClick={() => setModalType(null)}
                className="w-full mt-2 py-3 bg-gold hover:opacity-90 transition-opacity text-black font-display font-bold text-xs uppercase tracking-widest rounded-xl cursor-pointer"
              >
                {currentLang === 'pt' ? 'Fechar Documento' : currentLang === 'es' ? 'Cerrar Documento' : currentLang === 'it' ? 'Chiudi Documento' : currentLang === 'fr' ? 'Fermer le Document' : currentLang === 'de' ? 'Dokument Schließen' : 'Close Document'}
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
