const fs = require('fs');
let code = fs.readFileSync('src/components/TestimonialsSection.tsx', 'utf8');

// Add useScroll
const scrollHooks = `
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgScale = useTransform(scrollYProgress, [0.7, 1], [1, 0.8]);
  const particleY = useTransform(scrollYProgress, [0.7, 1], [0, 200]);
`;

code = code.replace(
  "const [direction, setDirection] = useState(0);",
  "const [direction, setDirection] = useState(0);\n" + scrollHooks
);

// Apply bgScale to wireframe
code = code.replace(
  `        {/* Parallax wireframe geometry */}
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]" 
        />`,
  `        {/* Parallax wireframe geometry */}
        <motion.div 
          style={{ scale: bgScale }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)] origin-bottom" 
        />`
);

// Apply particleY to particles container
code = code.replace(
  `        {/* Luminous nodes & particles */}
        {[...Array(20)].map((_, i) => (`,
  `        {/* Luminous nodes & particles */}
        <motion.div className="absolute inset-0" style={{ y: particleY }}>
          {[...Array(20)].map((_, i) => (`
);

code = code.replace(
  `            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>`,
  `            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
        </motion.div>
      </div>`
);

fs.writeFileSync('src/components/TestimonialsSection.tsx', code);
console.log("Successfully added scroll parallax to Testimonials.");
