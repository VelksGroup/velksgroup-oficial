const fs = require('fs');

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /\{currentLang === 'pt' \? 'PAGAMENTO ÚNICO • SEM CONTRATOS RECORRENTES' : 'SINGLE PAYMENT • NO HIDDEN CONTRACTS'\}/,
  `{currentLang === 'pt' ? 'PAGAMENTO ÚNICO • SEM CONTRATOS RECORRENTES' : currentLang === 'es' ? 'PAGO ÚNICO • SIN CONTRATOS RECURRENTES' : currentLang === 'it' ? 'PAGAMENTO UNICO • NESSUN CONTRATTO RICORRENTE' : currentLang === 'fr' ? 'PAIEMENT UNIQUE • SANS CONTRATS RÉCURRENTS' : currentLang === 'de' ? 'EINMALIGE ZAHLUNG • KEINE WIEDERKEHRENDEN VERTRÄGE' : 'SINGLE PAYMENT • NO HIDDEN CONTRACTS'}`
);

content = content.replace(
  /\{currentLang === 'pt' \? 'CONTRADIÇÕES E RESPOSTAS TRANSPARENTES' : 'FACT-BASED RETRIEVAL'\}/,
  `{currentLang === 'pt' ? 'CONTRADIÇÕES E RESPOSTAS TRANSPARENTES' : currentLang === 'es' ? 'CONTRADICCIONES Y RESPUESTAS TRANSPARENTES' : currentLang === 'it' ? 'CONTRADDIZIONI E RISPOSTE TRASPARENTI' : currentLang === 'fr' ? 'CONTRADICTIONS ET RÉPONSES TRANSPARENTES' : currentLang === 'de' ? 'WIDERSPRÜCHE UND TRANSPARENTE ANTWORTEN' : 'FACT-BASED RETRIEVAL'}`
);

content = content.replace(
  /\{currentLang === 'pt' \? 'ESCRITÓRIOS CENTRAIS' : 'HQ LOCATIONS'\}/,
  `{currentLang === 'pt' ? 'ESCRITÓRIOS CENTRAIS' : currentLang === 'es' ? 'OFICINAS CENTRALES' : currentLang === 'it' ? 'UFFICI CENTRALI' : currentLang === 'fr' ? 'BUREAUX CENTRAUX' : currentLang === 'de' ? 'ZENTRALBÜROS' : 'HQ LOCATIONS'}`
);

content = content.replace(
  /\{currentLang === 'pt' \? 'Fechar Documento' : 'Close Document'\}/,
  `{currentLang === 'pt' ? 'Fechar Documento' : currentLang === 'es' ? 'Cerrar Documento' : currentLang === 'it' ? 'Chiudi Documento' : currentLang === 'fr' ? 'Fermer le Document' : currentLang === 'de' ? 'Dokument Schließen' : 'Close Document'}`
);

fs.writeFileSync(file, content);
console.log('done fixing app');
