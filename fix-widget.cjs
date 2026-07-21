const fs = require('fs');

const file = 'src/components/WidgetSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /\{ sender: 'bot', text: currentLang === 'pt' \? 'Excelente\. Recebemos os seus dados\.' : 'Excellent\. We received your details\.', time: new Date\(\)\.toLocaleTimeString\(\[\], \{ hour: '2-digit', minute: '2-digit' \}\) \}/g,
  `{ sender: 'bot', text: currentLang === 'pt' ? 'Excelente. Recebemos os seus dados.' : currentLang === 'es' ? 'Excelente. Recibimos sus datos.' : currentLang === 'it' ? 'Eccellente. Abbiamo ricevuto i tuoi dati.' : currentLang === 'fr' ? 'Excellent. Nous avons reçu vos coordonnées.' : currentLang === 'de' ? 'Ausgezeichnet. Wir haben Ihre Daten erhalten.' : 'Excellent. We received your details.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }`
);

content = content.replace(
  /\{ sender: 'bot', text: currentLang === 'pt' \? 'Obrigado! A nossa equipa já foi notificada\.' : 'Thank you! Our team has been notified\.', time: new Date\(\)\.toLocaleTimeString\(\[\], \{ hour: '2-digit', minute: '2-digit' \}\) \}/g,
  `{ sender: 'bot', text: currentLang === 'pt' ? 'Obrigado! A nossa equipa já foi notificada.' : currentLang === 'es' ? '¡Gracias! Nuestro equipo ya ha sido notificado.' : currentLang === 'it' ? 'Grazie! Il nostro team è stato avvisato.' : currentLang === 'fr' ? 'Merci ! Notre équipe a été informée.' : currentLang === 'de' ? 'Danke! Unser Team wurde benachrichtigt.' : 'Thank you! Our team has been notified.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }`
);

content = content.replace(
  /\{currentLang === 'pt' \? 'PROVA DE AUTOMATIZAÇÃO INTERATIVA' : 'INTERACTIVE DEMO'\}/,
  `{currentLang === 'pt' ? 'PROVA DE AUTOMATIZAÇÃO INTERATIVA' : currentLang === 'es' ? 'PRUEBA DE AUTOMATIZACIÓN INTERACTIVA' : currentLang === 'it' ? 'PROVA DI AUTOMAZIONE INTERATTIVA' : currentLang === 'fr' ? 'PREUVE D\\'AUTOMATISATION INTERACTIVE' : currentLang === 'de' ? 'INTERAKTIVE AUTOMATISIERUNGS-DEMO' : 'INTERACTIVE DEMO'}`
);

content = content.replace(
  /currentLang === 'pt' \? 'Veja como guiamos o utilizador desde a descoberta até ao agendamento sem que precise de responder a um único toque\.' : \n                 currentLang === 'en' \? 'Observe how we guide the user from simple curiosity to a confirmed booking without you typing a single word\.' :/,
  `currentLang === 'pt' ? 'Veja como guiamos o utilizador desde a descoberta até ao agendamento sem que precise de responder a um único toque.' : 
                 currentLang === 'es' ? 'Vea cómo guiamos al usuario desde el descubrimiento hasta la cita sin que tenga que escribir una sola palabra.' : 
                 currentLang === 'it' ? 'Guarda come guidiamo l\\'utente dalla scoperta all\\'appuntamento senza che debba rispondere a un solo tocco.' : 
                 currentLang === 'fr' ? 'Voyez comment nous guidons l\\'utilisateur de la découverte au rendez-vous sans que vous n\\'ayez à taper un seul mot.' : 
                 currentLang === 'de' ? 'Sehen Sie, wie wir den Benutzer von der Entdeckung bis zur Terminbuchung führen, ohne dass Sie ein einziges Wort tippen müssen.' : 
                 currentLang === 'en' ? 'Observe how we guide the user from simple curiosity to a confirmed booking without you typing a single word.' :`
);

content = content.replace(
  /\{currentLang === 'pt' \? 'Pedido Entregue com Sucesso' : 'Request Delivered Successfully'\}/g,
  `{currentLang === 'pt' ? 'Pedido Entregue com Sucesso' : currentLang === 'es' ? 'Pedido Entregado con Éxito' : currentLang === 'it' ? 'Richiesta Consegnata con Successo' : currentLang === 'fr' ? 'Demande Livrée avec Succès' : currentLang === 'de' ? 'Anfrage Erfolgreich Zugestellt' : 'Request Delivered Successfully'}`
);

content = content.replace(
  /\{currentLang === 'pt' \? 'A equipa foi notificada e receberá este contacto imediatamente\.' : /g,
  `{currentLang === 'pt' ? 'A equipa foi notificada e receberá este contacto imediatamente.' : currentLang === 'es' ? 'El equipo ha sido notificado y recibirá este contacto de inmediato.' : currentLang === 'it' ? 'Il team è stato avvisato e riceverà questo contatto immediatamente.' : currentLang === 'fr' ? 'L\\'équipe a été informée et recevra ce contact immédiatement.' : currentLang === 'de' ? 'Das Team wurde benachrichtigt und wird diesen Kontakt umgehend erhalten.' : `
);

content = content.replace(
  /\{currentLang === 'pt' \? '✓ WhatsApp sincronizado\. Lead registado\.' : '✓ WhatsApp synced\. Lead registered\.'\}/g,
  `{currentLang === 'pt' ? '✓ WhatsApp sincronizado. Lead registado.' : currentLang === 'es' ? '✓ WhatsApp sincronizado. Lead registrado.' : currentLang === 'it' ? '✓ WhatsApp sincronizzato. Lead registrato.' : currentLang === 'fr' ? '✓ WhatsApp synchronisé. Lead enregistré.' : currentLang === 'de' ? '✓ WhatsApp synchronisiert. Lead registriert.' : '✓ WhatsApp synced. Lead registered.'}`
);

fs.writeFileSync(file, content);
console.log('done fixing widget');
