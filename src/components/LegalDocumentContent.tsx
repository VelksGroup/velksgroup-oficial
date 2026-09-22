import { Fragment } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { legalContent, type LegalDocumentType, type LegalLink } from '../legalContent';
import type { Language } from '../translations';

function DocumentLinks({ links }: { links: LegalLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gold hover:text-white transition-colors break-words"
        >
          {link.label}
          <ArrowUpRight size={12} className="shrink-0" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export function LegalDocumentContent({ language, type }: { language: Language; type: LegalDocumentType }) {
  const document = legalContent[language][type];

  return (
    <div className="text-xs text-gray-300 font-light leading-relaxed flex flex-col gap-4 font-sans break-words">
      {document.sections.map((section) => (
        <Fragment key={section.heading}>
          <h4 className="font-bold text-white font-display text-sm">{section.heading}</h4>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.entries?.map((entry) => (
            <div key={entry.heading} className="flex flex-col gap-1">
              <h5 className="font-bold text-white">{entry.heading}</h5>
              <p>{entry.text}</p>
              {entry.links && <DocumentLinks links={entry.links} />}
            </div>
          ))}
          {section.links && <DocumentLinks links={section.links} />}
        </Fragment>
      ))}
    </div>
  );
}
