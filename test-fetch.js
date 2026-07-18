fetch("https://orion-capture-widget.vercel.app/api/widget-config?tenantId=demo_tenant&publicKey=demo_public_key&domain=test&origin=test")
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
