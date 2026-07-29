const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/https:\/\/velksgroup\.com/g, 'https://www.velksgroup.com');
html = html.replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />');

if (!html.includes('hreflang="x-default"')) {
    const hreflang = `
    <!-- Hreflang -->
    <link rel="alternate" hreflang="pt" href="https://www.velksgroup.com/" />
    <link rel="alternate" hreflang="es" href="https://www.velksgroup.com/" />
    <link rel="alternate" hreflang="en" href="https://www.velksgroup.com/" />
    <link rel="alternate" hreflang="fr" href="https://www.velksgroup.com/" />
    <link rel="alternate" hreflang="it" href="https://www.velksgroup.com/" />
    <link rel="alternate" hreflang="de" href="https://www.velksgroup.com/" />
    <link rel="alternate" hreflang="x-default" href="https://www.velksgroup.com/" />
    <!-- Open Graph -->`;
    
    html = html.replace('<!-- Open Graph -->', hreflang);
}

fs.writeFileSync('index.html', html);
console.log("Patched index.html");
