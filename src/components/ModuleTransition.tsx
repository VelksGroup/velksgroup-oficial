import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

export const ModuleTransition = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.7, 0.25]);

  return (
    <div ref={ref} aria-hidden="true" className="relative h-12 md:h-16 overflow-hidden bg-gradient-to-b from-obsidian-light to-obsidian flex items-center justify-center pointer-events-none">
      <motion.div style={reducedMotion ? undefined : { scale, opacity }} className="relative w-full max-w-4xl h-6 flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute w-12 h-5 border-x border-gold/40" />
        <div className="absolute w-1 h-1 rounded-full bg-gold/60" />
      </motion.div>
    </div>
  );
};
