const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/const handleAcceptCookies = \(\) => {/g, 'const handleAcceptCookies = React.useCallback(() => {');
code = code.replace(/setCookieConsent\(true\);\n  };/g, 'setCookieConsent(true);\n  }, []);');

code = code.replace(/const handleDeclineCookies = \(\) => {/g, 'const handleDeclineCookies = React.useCallback(() => {');
code = code.replace(/setCookieConsent\(false\);\n  };/g, 'setCookieConsent(false);\n  }, []);');

code = code.replace(/const handleWhatsAppClick = \(customMsg: string\) => {/g, 'const handleWhatsAppClick = React.useCallback((customMsg: string) => {');
code = code.replace(/window\.open\(url, '_blank', 'noopener,noreferrer'\);\n  };/g, "window.open(url, '_blank', 'noopener,noreferrer');\n  }, []);");

fs.writeFileSync('src/App.tsx', code);
console.log("Wrapped App callbacks in useCallback");
