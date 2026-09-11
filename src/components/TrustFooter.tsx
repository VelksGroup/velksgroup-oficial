import React, { useState } from 'react';
import { ArrowUpRight, CreditCard } from 'lucide-react';
import type { TranslationSchema } from '../translations';

const aiServices = [
  { name: 'ChatGPT', url: 'https://chatgpt.com/' },
  { name: 'Gemini', url: 'https://gemini.google.com/' },
  { name: 'Grok', url: 'https://grok.com/' },
];

export const TrustFooter: React.FC<{ t: TranslationSchema['footer']['trust'] }> = ({ t }) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  const copyQuestion = async () => {
    try {
      await navigator.clipboard.writeText(t.aiPrompt);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-8">
      <div className="min-w-0 flex flex-col gap-4">
        <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">{t.paymentTitle}</h4>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-gray-200">
          <li className="flex items-center gap-2">
            <CreditCard size={20} className="text-gold shrink-0" aria-hidden="true" />
            {t.cardLabel}
          </li>
          <li><img src="/payment-icons/apple-pay.svg" alt="Apple Pay" className="h-10 w-auto" /></li>
          <li>Link</li>
          <li><img src="/payment-icons/klarna.svg" alt="Klarna" className="h-10 w-auto" /></li>
          <li><img src="/payment-icons/amazon-pay.svg" alt="Amazon Pay" className="h-10 w-auto" /></li>
        </ul>
        <p className="text-xs text-gray-400 font-light leading-relaxed">{t.paymentNote}</p>
      </div>

      <div className="min-w-0 flex flex-col gap-4">
        <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">{t.aiTitle}</h4>
        <p className="text-xs text-gray-400 font-light leading-relaxed">{t.aiDescription}</p>
        <div className="flex flex-wrap gap-3">
          {aiServices.map(service => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={copyQuestion}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-200 hover:text-gold hover:border-gold/30 transition-colors"
            >
              {service.name}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p role="status" aria-live="polite" className="text-xs text-gray-400 font-light leading-relaxed">
          {copyStatus === 'copied' ? t.aiCopied : copyStatus === 'failed' ? t.aiCopyFailed : t.aiHint}
        </p>
        {copyStatus === 'failed' && (
          <textarea
            aria-label={t.aiPromptLabel}
            readOnly
            value={t.aiPrompt}
            onFocus={event => event.currentTarget.select()}
            rows={5}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-gray-200 leading-relaxed"
          />
        )}
      </div>
    </div>
  );
};
