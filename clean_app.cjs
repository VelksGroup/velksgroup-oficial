const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Remove import
code = code.replace(/import gsap from 'gsap';\n/g, '');

// Remove dead state
code = code.replace(/  const testimonialTrackRef = useRef<HTMLDivElement>\(null\);\n  const \[currentTestimonialIndex, setCurrentTestimonialIndex\] = useState\(0\);\n/g, '');

// Remove dead functions and useEffect
code = code.replace(/  const nextTestimonial = \(\) => \{\n    setCurrentTestimonialIndex\(\(prev\) => \{\n      const max = t\.testimonials\.list\.length - 1;\n      return prev < max \? prev \+ 1 : 0;\n    \}\);\n  \};\n\n  const prevTestimonial = \(\) => \{\n    setCurrentTestimonialIndex\(\(prev\) => \{\n      const max = t\.testimonials\.list\.length - 1;\n      return prev > 0 \? prev - 1 : max;\n    \}\);\n  \};\n\n  useEffect\(\(\) => \{\n    if \(testimonialTrackRef\.current && testimonialTrackRef\.current\.children\.length > 0\) \{\n      const card = testimonialTrackRef\.current\.children\[0\] as HTMLElement;\n      \/\/ offsetWidth \+ gap \(24px for gap-6\)\n      const cardWidth = card\.offsetWidth \+ 24;\n\n      gsap\.to\(testimonialTrackRef\.current, \{\n        x: -currentTestimonialIndex \* cardWidth,\n        duration: 0\.8,\n        ease: "power3\.inOut"\n      \}\);\n    \}\n  \}, \[currentTestimonialIndex, t\.testimonials\.list\.length\]\);\n/g, '');

fs.writeFileSync('src/App.tsx', code);
console.log("Cleaned up App.tsx legacy testimonial state and GSAP");
