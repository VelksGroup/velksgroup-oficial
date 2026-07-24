const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

const preconnect = `    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="/logo-oficial.png" as="image">`;

code = code.replace(/<title>/, preconnect + '\n    <title>');
fs.writeFileSync('index.html', code);
console.log("Added preconnect and preload to HTML");
