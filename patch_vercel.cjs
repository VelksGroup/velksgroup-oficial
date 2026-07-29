const fs = require('fs');
let data = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

data.redirects = [
  {
    "source": "/(.*)",
    "has": [
      {
        "type": "host",
        "value": "velksgroup.com"
      }
    ],
    "destination": "https://www.velksgroup.com/$1",
    "permanent": true
  }
];

fs.writeFileSync('vercel.json', JSON.stringify(data, null, 2));
console.log("Patched vercel.json");
