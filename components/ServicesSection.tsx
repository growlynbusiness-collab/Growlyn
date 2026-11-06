import React, { useState } from 'react';
import { ArrowRight, Check, Globe, Layout, Play, Smartphone, TrendingUp } from './Icons';
import './ServicesSection.css';

const services = [
  {
    id: 'webdesign', title: 'Webdesign', label: 'Der erste Eindruck zählt.', icon: Layout,
    description: 'Individuelle Websites, die auf jedem Bildschirm überzeugen und aus Besuchern Anfragen machen.',
    features: ['Individuelles Design', 'Für Smartphone & Desktop', 'Klare Nutzerführung'],
  },
  {
    id: 'social', title: 'Social Media', label: 'Im Kopf bleiben.', icon: TrendingUp,
    description: 'Kreativer Content und durchdachte Kampagnen, die Ihre Marke sichtbar machen.',
    features: ['Content & Kampagnen', 'Planung & Veröffentlichung', 'Auswertung & Optimierung'],
  },
  {
    id: 'presence', title: 'Online-Auftritt', label: 'Suchen. Finden. Überzeugen.', icon: Globe,
    description: 'Ein stimmiger Auftritt auf Google und im Netz. Damit Interessenten Ihr Unternehmen finden.',
    features: ['Google-Unternehmensprofil', 'Bilder & Informationen', 'Lokale Auffindbarkeit'],
  },
  {
    id: 'apps', title: 'Apps', label: 'Weniger Aufwand. Mehr Möglichkeiten.', icon: Smartphone,
    description: 'Individuelle Apps, die Abläufe vereinfachen und Ihre Ideen auf den Bildschirm bringen.',
    features: ['iOS & Android', 'Digitale Abläufe', 'Individuelle Funktionen'],
  },
];

function ServicePreview({ kind }: { kind: string }) {
  return (
    <div className={`services-preview services-preview-${kind}`} aria-hidden="true">
      {kind === 'webdesign' && (
        <div className="services-browser">
          <div className="services-browser-toolbar"><i /><i /><i /><span /></div>
          <div className="services-browser-page">
            <span className="services-browser-kicker">IHRE MARKE.</span>
            <span className="services-browser-title">Ein guter<br /><b>Auftritt.</b></span>
            <span className="services-browser-button"><ArrowRight /></span>
            <div className="services-browser-bottom"><i /><i /><i /></div>
          </div>
          <span className="services-browser-cursor"><svg viewBox="0 0 20 24"><path d="M3 2L16 13L10 14L7 21L3 2Z" fill="currentColor" stroke="#0c2117" strokeWidth="2" /></svg></span>
        </div>
      )}
      {kind === 'social' && (
        <div className="services-post-stack">
          <div className="services-post services-post-back"><span /><i /><i /><i /></div>
          <div className="services-post services-post-front">
            <div className="services-post-head"><i /><span /><i /></div>
            <div className="services-post-content"><span>Content,<br />der <b>bleibt.</b></span><span className="services-post-play"><Play /></span></div>
            <div className="services-post-foot"><i /><i /><span /></div>
          </div>
        </div>
      )}
      {kind === 'presence' && (
        <div className="services-search">
          <div className="services-search-field"><svg viewBox="0 0 20 20"><circle cx="8" cy="8" r="5" /><path d="M12 12L17 17" /></svg><span>Ihr Unternehmen</span></div>
          <div className="services-map">
            <div className="services-map-road services-map-road-one" /><div className="services-map-road services-map-road-two" />
            <span className="services-map-pin"><svg viewBox="0 0 32 40"><path d="M16 2C8 2 3 8 3 15C3 24 16 37 16 37S29 24 29 15C29 8 24 2 16 2Z" fill="currentColor" /><circle cx="16" cy="15" r="5" fill="#0b1d13" /></svg></span>
          </div>
          <div className="services-search-result"><span className="services-result-check"><Check /></span><span>Hier sind Sie richtig.</span></div>
        </div>
      )}
      {kind === 'apps' && (
        <div className="services-phone">
          <div className="services-phone-notch" />
          <div className="services-phone-header"><span>Alles im Blick.</span><i /></div>
          <div className="services-phone-tile"><span /><span /><span /></div>
          <div className="services-phone-task services-phone-task-one"><span><Check /></span><i /><i /></div>
          <div className="services-phone-task services-phone-task-two"><span><Check /></span><i /><i /></div>
          <div className="services-phone-dock"><i /><i /><i /></div>
        </div>
      )}
    </div>
  );
}

export default function ServicesSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="growlyn-services" aria-labelledby="services-title">
      <div className="services-container">
        <div className="services-heading">
          <div><p className="services-eyebrow"><span />Was wir machen</p><h2 id="services-title">Unsere <span>Leistungen.</span></h2></div>
          <p className="services-heading-note">Vier Bereiche.<br /><span>Ein Team für Ihren Auftritt.</span></p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = expanded === service.id;
            return (
              <article key={service.id} className={`services-card${isOpen ? ' is-expanded' : ''}`}>
                <div className="services-card-top"><span className="services-card-number">0{index + 1}</span><span className="services-card-icon"><Icon /></span></div>
                <div className="services-card-main">
                  <div className="services-card-copy"><h3>{service.title}</h3><p className="services-card-label">{service.label}</p><p className="services-card-description">{service.description}</p></div>
                  <ServicePreview kind={service.id} />
                </div>
                <div className="services-card-actions">
                  <button type="button" className="services-details-toggle" aria-expanded={isOpen} aria-controls={`service-details-${service.id}`} onClick={() => setExpanded(isOpen ? null : service.id)}>
                    <span>{isOpen ? 'Details schließen' : 'Was steckt drin?'}</span><span className="services-details-sign" aria-hidden="true" />
                  </button>
                  <button type="button" className="services-contact" onClick={onOpenBooking} aria-label={`${service.title} besprechen`} title={`${service.title} besprechen`}><ArrowRight aria-hidden="true" /></button>
                </div>
                <div id={`service-details-${service.id}`} className="services-details" hidden={!isOpen}>
                  <ul>{service.features.map(feature => <li key={feature}><Check aria-hidden="true" /><span>{feature}</span></li>)}</ul>
                  <button type="button" onClick={onOpenBooking} className="services-detail-cta">{service.title} besprechen<ArrowRight aria-hidden="true" /></button>
                </div>
              </article>
            );
          })}
        </div>
        <div className="services-bottom"><span>Sie müssen noch nicht wissen, was Sie brauchen.</span><button type="button" onClick={onOpenBooking}>Finden wir es gemeinsam heraus.<ArrowRight aria-hidden="true" /></button></div>
      </div>
    </section>
  );
}
