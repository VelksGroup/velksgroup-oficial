import React, { useEffect, useRef, useState } from 'react';
import { CreditCard } from 'lucide-react';
import type { TranslationSchema } from '../translations';

const aiServices = [
  { name: 'ChatGPT', url: 'https://chatgpt.com/', icon: '/ai-icons/chatgpt.svg' },
  { name: 'Gemini', url: 'https://gemini.google.com/', icon: '/ai-icons/gemini.svg' },
  { name: 'Grok', url: 'https://grok.com/', icon: '/ai-icons/grok.svg' },
];

export const TrustFooter: React.FC<{ t: TranslationSchema['footer']['trust'] }> = ({ t }) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stripeName = 'Stripe';
  const stripeIndex = t.paymentNote.lastIndexOf(stripeName);

  useEffect(() => () => {
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
  }, []);

  const showFeedback = (status: 'copied' | 'failed') => {
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    setCopyStatus(status);
    feedbackTimer.current = setTimeout(() => setCopyStatus('idle'), status === 'copied' ? 4000 : 12000);
  };

  const copyQuestion = async () => {
    try {
      await navigator.clipboard.writeText(t.aiPrompt);
      showFeedback('copied');
    } catch {
      showFeedback('failed');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 border-t border-white/5 pt-8">
      <div className="min-w-0 flex flex-col gap-4">
        <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">{t.paymentTitle}</h4>
        <ul className="grid grid-cols-6 items-center gap-x-3 gap-y-4 text-sm text-gray-200 md:flex md:flex-nowrap md:gap-x-6">
          <li className="col-span-2 flex items-center gap-2 justify-self-start">
            <CreditCard size={20} className="text-gold shrink-0" aria-hidden="true" />
            {t.cardLabel}
          </li>
          <li className="col-span-2 justify-self-center"><img src="/payment-icons/apple-pay.svg" alt="Apple Pay" className="h-10 w-auto" /></li>
          <li className="col-span-2 justify-self-end"><img src="/payment-icons/link.svg" alt="Link" className="h-7 w-auto" /></li>
          <li className="col-span-3 justify-self-center"><img src="/payment-icons/klarna.svg" alt="Klarna" className="h-10 w-auto" /></li>
          <li className="col-span-3 justify-self-center"><img src="/payment-icons/amazon-pay.svg" alt="Amazon Pay" className="h-8 w-auto" /></li>
        </ul>
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          {stripeIndex >= 0 ? (
            <>
              {t.paymentNote.slice(0, stripeIndex)}
              <img
                src="/payment-icons/stripe-wordmark-white.svg"
                alt="Stripe"
                className="mx-0.5 inline-block h-3 w-auto align-[-0.15em]"
              />
              {t.paymentNote.slice(stripeIndex + stripeName.length)}
            </>
          ) : t.paymentNote}
        </p>
      </div>

      <div className="min-w-0 flex flex-col gap-4 border-t border-gold/20 pt-8">
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
              <img src={service.icon} alt="" aria-hidden="true" width={14} height={14} className="h-3.5 w-3.5 shrink-0 object-contain" />
              {service.name}
            </a>
          ))}
        </div>
        <p role="status" aria-live="polite" className="min-h-4 text-xs text-gray-400 font-light leading-relaxed">
          {copyStatus === 'copied' ? t.aiCopied : copyStatus === 'failed' ? t.aiCopyFailed : ''}
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
