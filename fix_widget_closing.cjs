const fs = require('fs');
let code = fs.readFileSync('src/components/WidgetSection.tsx', 'utf8');

code = code.replace(
  `                </AnimatePresence>
              </div>
              </div>
              {/* Input box */}`,
  `                </AnimatePresence>
              </div>
              {/* Input box */}`
);

fs.writeFileSync('src/components/WidgetSection.tsx', code);
