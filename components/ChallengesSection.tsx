import React, { useState } from 'react';
import { ArrowRight, Check, Globe, Layout, Smartphone, TrendingUp } from './Icons';
import './ChallengesSection.css';

const challenges = [
  {
    id: 'website',
    icon: Layout,
    problem: 'Website bringt keine Kunden?',
    description: 'Schlechtes Design schreckt potenzielle Käufer ab.',
    solution: 'Verkaufspsychologisch optimierte Websites, die Besucher gezielt zu einer Anfrage führen.',
  },
  {
    id: 'ads',
    icon: TrendingUp,
    problem: 'Geldverbrennung bei Ads?',
    description: 'Werbebudget verpufft ohne messbare Ergebnisse.',
    solution: 'Datengestützte Kampagnen mit klarem Tracking und messbarem ROI.',
  },
  {
    id: 'workflows',
    icon: Smartphone,
    problem: 'Ineffiziente Abläufe?',
    description: 'Veraltete Prozesse kosten Zeit und Nerven.',
    solution: 'Individuelle Apps, die Abläufe automatisieren und Ihr Team im Alltag entlasten.',
  },
  {
    id: 'visibility',
    icon: Globe,
    problem: 'Unsichtbar im Netz?',
    description: 'Die Konkurrenz wird gefunden, Sie aber nicht.',
    solution: 'Ein abgestimmter Auftritt auf den relevanten Kanälen, damit Ihr Unternehmen besser gefunden wird.',
  },
];

export default function ChallengesSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [openIds, setOpenIds] = useState<string[]>(['website']);
  const allOpen = openIds.length === challenges.length;

  const toggleChallenge = (id: string) => {
    setOpenIds(current => current.includes(id) ? current.filter(openId => openId !== id) : [...current, id]);
  };

  const toggleAll = () => {
    setOpenIds(allOpen ? [] : challenges.map(challenge => challenge.id));
  };

  return (
    <section id="challenges" className="growlyn-challenges" aria-labelledby="challenges-title">
      <div className="challenges-container">
        <div className="challenges-intro">
          <p className="challenges-eyebrow"><span aria-hidden="true" />Vom Problem zum nächsten Schritt</p>
          <h2 id="challenges-title">Herausforderungen.<span>Klare Lösungen.</span></h2>
          <p className="challenges-intro-note">Was bremst Ihr Unternehmen gerade?</p>
          <button className="challenges-contact" type="button" onClick={onOpenBooking}>
            Darüber sprechen
            <span aria-hidden="true"><ArrowRight /></span>
          </button>
        </div>

        <div className="challenges-content">
          <div className="challenges-toolbar">
            <span className="challenges-toolbar-label">Ihr Thema. Unser Ansatz.</span>
            <button
              className="challenges-toggle-all"
              type="button"
              aria-expanded={allOpen}
              aria-controls={challenges.map(challenge => `challenge-solution-${challenge.id}`).join(' ')}
              onClick={toggleAll}
            >
              {allOpen ? 'Alle Lösungen schließen' : 'Alle Lösungen anzeigen'}
              <span className="challenges-toggle-sign" aria-hidden="true" />
            </button>
          </div>

          <div className="challenges-list">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              const isOpen = openIds.includes(challenge.id);
              return (
                <article className={`challenges-item${isOpen ? ' is-open' : ''}`} key={challenge.id}>
                  <h3 className="challenges-item-heading">
                    <button
                      id={`challenge-trigger-${challenge.id}`}
                      className="challenges-trigger"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`challenge-solution-${challenge.id}`}
                      onClick={() => toggleChallenge(challenge.id)}
                    >
                      <span className="challenges-item-icon" aria-hidden="true"><Icon /></span>
                      <span className="challenges-problem">{challenge.problem}</span>
                      <span className="challenges-item-number" aria-hidden="true">0{index + 1}</span>
                      <span className="challenges-trigger-sign" aria-hidden="true" />
                    </button>
                  </h3>
                  <p className="challenges-description">{challenge.description}</p>
                  <div
                    id={`challenge-solution-${challenge.id}`}
                    className="challenges-solution"
                    role="region"
                    aria-labelledby={`challenge-trigger-${challenge.id}`}
                    hidden={!isOpen}
                  >
                    <div className="challenges-solution-label"><Check aria-hidden="true" /><span>Unser Ansatz</span></div>
                    <p>{challenge.solution}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
