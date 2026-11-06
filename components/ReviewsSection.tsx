import React, { useState } from 'react';
import { ChevronRight, Star } from './Icons';
import './ReviewsSection.css';

const reviews = [
  { text: 'Die Zusammenarbeit war erstklassig. Das Team hat unsere Erwartungen übertroffen!', stars: 5 },
  { text: 'Endlich eine Agentur, die mitdenkt. Die neue Website ist ein Gamechanger.', stars: 5 },
  { text: 'Schnelle Umsetzung und extrem hochwertiges Ergebnis. Absolut empfehlenswert.', stars: 5 },
  { text: 'Unsere Brand Awareness ist durch die Decke gegangen. Danke an das Team!', stars: 5 },
  { text: 'Die Recruiting-Kampagne hat uns geholfen, top Talente zu finden.', stars: 5 },
  { text: 'Die neue App automatisiert 80% meiner Arbeit. Meine Kunden sind begeistert.', stars: 5 },
  { text: 'Seit dem Google Maps Setup ist unser Laden jeden Abend voll. Unfassbar!', stars: 5 },
  { text: 'Ästhetik auf höchstem Niveau. Genau das, was ich gesucht habe.', stars: 5 },
  { text: 'Der ROI war innerhalb von 2 Wochen positiv. Beste Investition des Jahres.', stars: 5 },
];

function renderReview(review: { text: string; stars: number }) {
  return (
    <li className="reviews-card" key={review.text}>
      <figure>
        <div className="reviews-card-topline">
          <span className="reviews-stars" role="img" aria-label={`${review.stars} von 5 Sternen`}>
            {Array.from({ length: review.stars }, (_, index) => <Star key={index} aria-hidden="true" />)}
          </span>
          <svg className="reviews-quote-mark" viewBox="0 0 28 24" fill="none" aria-hidden="true">
            <path d="M11 3C6.5 5.5 4.5 8.5 4 12H11V21H1V14C1 7.5 4 3.5 9 1L11 3ZM27 3C22.5 5.5 20.5 8.5 20 12H27V21H17V14C17 7.5 20 3.5 25 1L27 3Z" fill="currentColor" />
          </svg>
        </div>
        <blockquote>„{review.text}“</blockquote>
        <span className="reviews-card-rule" aria-hidden="true" />
      </figure>
    </li>
  );
}

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="reviews" className="growlyn-reviews" aria-labelledby="reviews-title">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="reviews-heading">
            <p className="reviews-eyebrow"><span aria-hidden="true" />Bewertungen</p>
            <h2 id="reviews-title">Das sagen<br /><span>unsere Kunden.</span></h2>
          </div>

          <div className="reviews-score" role="img" aria-label="Bewertung auf Google: 4,9 von 5 Sternen">
            <svg className="reviews-google" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="reviews-score-number" aria-hidden="true">4,9<span>/ 5</span></div>
            <div className="reviews-score-caption" aria-hidden="true">
              <span className="reviews-stars">{[0, 1, 2, 3, 4].map(star => <Star key={star} />)}</span>
              <span>auf Google</span>
            </div>
          </div>
        </div>

        <ul className="reviews-grid" aria-label="Kundenbewertungen">
          {reviews.slice(0, 3).map(renderReview)}
        </ul>

        <div className="reviews-disclosure-row">
          <span className="reviews-disclosure-line" aria-hidden="true" />
          <button
            className="reviews-disclosure"
            type="button"
            aria-expanded={expanded}
            aria-controls="reviews-more"
            onClick={() => setExpanded(value => !value)}
          >
            {expanded ? 'Weniger anzeigen' : 'Weitere Bewertungen'}
            <ChevronRight aria-hidden="true" />
          </button>
          <span className="reviews-disclosure-line" aria-hidden="true" />
        </div>

        <div id="reviews-more" className="reviews-more" hidden={!expanded}>
          <ul className="reviews-grid" aria-label="Weitere Kundenbewertungen">
            {reviews.slice(3).map(renderReview)}
          </ul>
        </div>
      </div>
    </section>
  );
}
