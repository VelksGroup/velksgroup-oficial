const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');
if(content.includes('velksNetworkTitle: "VELKS OPERATIONAL NETWORK"')) {
    console.log("English translation ok");
} else {
    console.log("Error English");
}
