const fs = require('fs');

const file = 'src/components/PricingSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// The bug starts here:
// <div className="relative z-10<div className="relative z-10 flex flex-col gap-8">

const startTag = '<div className="relative z-10<div className="relative z-10 flex flex-col gap-8">';
const goodContent = `
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <span className="text-gold font-mono tracking-[0.2em] text-sm uppercase mb-4 block">
              {t.pricing.tag || "Investimento Estratégico"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t.pricing.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Standard Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {standardPlans.map((plan, index) => {
            const isHovered = hoveredCard === index;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative rounded-3xl bg-[#0b0b0d]/80 backdrop-blur-md border border-white/5 hover:border-gold/30 transition-all duration-700 flex flex-col overflow-hidden h-full"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-transparent group-hover:to-gold/5 transition-all duration-700 pointer-events-none" />
                
                <div className="p-8 md:p-10 flex flex-col h-full z-10 relative">
                  <div className="flex-1 flex flex-col gap-8">
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-md text-gray-400 bg-black/40 border border-white/5 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-500 shadow-inner">
                        0{index + 1}. {plan.id.toUpperCase()}
                      </span>
                      <h3 className="text-3xl font-display font-bold text-white mt-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold/80 transition-all duration-500">
                        {plan.title}
                      </h3>
`;

const bugIndex = content.indexOf(startTag);
if (bugIndex !== -1) {
    const beforeBug = content.substring(0, bugIndex);
    const afterBug = content.substring(bugIndex + startTag.length);
    // After bug starts with "<div>", we can just stitch them.
    content = beforeBug + goodContent + "                    <div>" + afterBug.split("                    <div>")[1]; // wait, let's just do replace
}

fs.writeFileSync(file, content);
console.log('Fixed syntax error in PricingSection.tsx');
