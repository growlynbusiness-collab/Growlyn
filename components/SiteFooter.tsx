import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from './Icons';
import './SiteFooter.css';

type LegalView = 'impressum' | 'datenschutz';
const email = 'growlynbusiness@gmail.com';
const navigation = [
  { label: 'Über uns', id: 'about' },
  { label: 'Leistungen', id: 'services' },
  { label: 'Herausforderungen', id: 'challenges' },
  { label: 'Bewertungen', id: 'reviews' },
];

function scrollTo(id?: string) {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  if (id) document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
  else window.scrollTo({ top: 0, behavior });
}

export default function SiteFooter({ onOpenBooking, onOpenLegal }: { onOpenBooking: () => void; onOpenLegal: (view: LegalView) => void }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

  const copyEmail = async () => {
    if (copyTimer.current) clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
    copyTimer.current = setTimeout(() => setCopyState('idle'), 2500);
  };

  return (
    <footer id="footer" className="growlyn-footer" aria-label="Seitenabschluss">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <button type="button" className="footer-brand" onClick={() => scrollTo()} aria-label="Growlyn Agency – zum Seitenanfang">
              <span>Growlyn</span><span>Agency</span>
            </button>
            <p className="footer-brand-description">Webdesign. Social Media.<br />Digitale Ideen, die weiterbringen.</p>
            <button type="button" className="footer-project-link" onClick={onOpenBooking}>Ihr Projekt beginnt mit einem Gespräch.<ArrowRight aria-hidden="true" /></button>
          </div>

          <nav className="footer-navigation" aria-label="Footer-Navigation">
            <h2>Entdecken</h2>
            <ul>{navigation.map(item => <li key={item.id}><button type="button" onClick={() => scrollTo(item.id)}>{item.label}<ArrowRight aria-hidden="true" /></button></li>)}</ul>
          </nav>

          <div className="footer-contact">
            <h2>Direkter Draht.</h2>
            <div className="footer-email-row">
              <a href={`mailto:${email}`} className="footer-email">{email}</a>
              <button type="button" className={`footer-copy${copyState === 'copied' ? ' is-copied' : ''}`} onClick={copyEmail} aria-label="E-Mail-Adresse kopieren" title="E-Mail-Adresse kopieren">
                {copyState === 'copied' ? <Check aria-hidden="true" /> : <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="7" y="7" width="9" height="10" rx="2" /><path d="M12 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /></svg>}
              </button>
            </div>
            <p className="footer-copy-status" role="status">{copyState === 'copied' ? 'E-Mail-Adresse kopiert.' : copyState === 'error' ? 'Kopieren nicht möglich.' : ''}</p>
            <a className="footer-whatsapp" href="https://wa.me/4917680330366" target="_blank" rel="noopener noreferrer"><span className="footer-contact-dot" aria-hidden="true" />Per WhatsApp schreiben<ArrowRight aria-hidden="true" /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Growlyn Agency</p>
          <div className="footer-legal"><button type="button" onClick={() => onOpenLegal('impressum')}>Impressum</button><button type="button" onClick={() => onOpenLegal('datenschutz')}>Datenschutz</button></div>
          <button className="footer-back-top" type="button" onClick={() => scrollTo()}>Nach oben<span><ArrowRight aria-hidden="true" /></span></button>
        </div>
        <div className="footer-wordmark" aria-hidden="true">growlyn</div>
      </div>
    </footer>
  );
}
