const fs = require('fs');
let data = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

// Add caching for static assets
data.headers.push({
  "source": "/(.*)\\.(ico|png|jpg|jpeg|svg|webp|woff2|woff)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
});

fs.writeFileSync('vercel.json', JSON.stringify(data, null, 2));
console.log("Patched vercel.json cache");
