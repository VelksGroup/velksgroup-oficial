const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const toRemove = [
  "const [chatMessages, setChatMessages] = useState<{ sender: 'bot' | 'user'; text: string; time: string }[]>([]);",
  "const [botIsTyping, setBotIsTyping] = useState(false);",
  "const [selectedBotPreset, setSelectedBotPreset] = useState<BotPresetKey>('restaurante');",
  "const [customInput, setCustomInput] = useState('');",
  "const [leadCaptured, setLeadCaptured] = useState(false);",
  "const [simulatedLead, setSimulatedLead] = useState<{name: string, phone: string, interest: string} | null>(null);",
  "type BotPresetKey = 'restaurante' | 'imobiliaria' | 'clinica' | 'servicos';"
];

toRemove.forEach(str => {
  code = code.replace(str, "");
});

fs.writeFileSync('src/App.tsx', code);
