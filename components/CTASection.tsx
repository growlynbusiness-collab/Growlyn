import React from 'react';
import { ArrowRight } from './Icons';
import './CTASection.css';

export default function CTASection({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="action" className="growlyn-cta" aria-labelledby="cta-title">
      <div className="cta-container">
        <div className="cta-panel">
          <div className="cta-panel-light" aria-hidden="true" />
          <div className="cta-copy">
            <p className="cta-eyebrow"><span aria-hidden="true" />Ihr nächster Schritt</p>
            <h2 id="cta-title">Lassen Sie uns<br /><span>loslegen.</span></h2>
            <p className="cta-description">Wir besprechen Ihre Idee und finden gemeinsam den passenden nächsten Schritt.</p>
            <button type="button" className="cta-button" onClick={onOpenBooking}>
              <span>Kostenloses Erstgespräch</span>
              <span className="cta-button-arrow" aria-hidden="true"><ArrowRight /></span>
            </button>
          </div>

          <div className="cta-next-art" aria-hidden="true">
            <div className="cta-art-surface" />
            <svg className="cta-art-lines" viewBox="0 0 320 320" fill="none">
              <defs>
                <linearGradient id="cta-arrow-gradient" x1="73" y1="247" x2="246" y2="67" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00e699" stopOpacity=".35" />
                  <stop offset=".55" stopColor="#61efb1" />
                  <stop offset="1" stopColor="#c0f8db" />
                </linearGradient>
              </defs>
              <path className="cta-art-corner" d="M48 94V48H94M226 48H272V94M272 226V272H226M94 272H48V226" />
              <path className="cta-art-guide" d="M48 160H272M160 48V272" />
              <path className="cta-art-trail" d="M69 252L229 92M69 92H229V252" />
              <path className="cta-art-arrow" d="M89 232L249 72M89 72H249V232" stroke="url(#cta-arrow-gradient)" />
              <circle className="cta-art-node" cx="48" cy="272" r="3" />
              <circle className="cta-art-node" cx="272" cy="48" r="3" />
            </svg>
            <div className="cta-art-caption"><span>Ihre Idee</span><i /><span>Der Anfang.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
