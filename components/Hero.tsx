import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, Play, Smartphone, Star, TrendingUp, Video } from './Icons';
import './Hero.css';

const services = [
  { name: 'Webdesign', icon: Globe, copy: 'Websites, die überzeugen.' },
  { name: 'Social Media', icon: TrendingUp, copy: 'Sichtbarkeit mit Strategie.' },
  { name: 'Content', icon: Video, copy: 'Content mit Wiedererkennungswert.' },
  { name: 'Apps', icon: Smartphone, copy: 'Ideen werden Anwendungen.' },
];

const goToSection = (id: string) => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({
    behavior: reducedMotion ? 'instant' : 'smooth',
    block: 'start',
  });
};

export default function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => {
      setIsPlaying(!motion.matches && !userPausedRef.current);
    };
    syncMotionPreference();
    motion.addEventListener('change', syncMotionPreference);
    return () => motion.removeEventListener('change', syncMotionPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let disposed = false;
    if (isPlaying) {
      const playback = video.play();
      playback?.catch(() => {
        if (!disposed) setIsPlaying(false);
      });
    } else {
      video.pause();
    }
    return () => { disposed = true; };
  }, [isPlaying]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let x = 0;
    let y = 0;
    let listening = false;

    const renderPointer = () => {
      frame = 0;
      root.style.setProperty('--hero-pointer-x', `${x}px`);
      root.style.setProperty('--hero-pointer-y', `${y}px`);
      root.classList.add('hero-pointer-active');
    };
    const movePointer = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      const rect = root.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      if (!frame) frame = requestAnimationFrame(renderPointer);
    };
    const syncPointerPreference = () => {
      if (pointer.matches && !listening) {
        root.addEventListener('pointermove', movePointer, { passive: true });
        listening = true;
      } else if (!pointer.matches && listening) {
        root.removeEventListener('pointermove', movePointer);
        listening = false;
      }
      if (!pointer.matches) {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        root.classList.remove('hero-pointer-active');
      }
    };
    syncPointerPreference();
    pointer.addEventListener('change', syncPointerPreference);
    return () => {
      pointer.removeEventListener('change', syncPointerPreference);
      if (listening) root.removeEventListener('pointermove', movePointer);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove('hero-pointer-active');
    };
  }, []);

  const toggleVideo = () => {
    const next = !isPlaying;
    userPausedRef.current = !next;
    setIsPlaying(next);
  };

  return (
    <section ref={rootRef} className="growlyn-hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true">
        <video ref={videoRef} autoPlay={isPlaying} loop muted playsInline preload="metadata" tabIndex={-1}>
          <source src="/herogrowlyn.mp4" type="video/mp4" />
        </video>
        <div className="hero-atmosphere-shade" />
        <div className="hero-spotlight" />
      </div>

      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-badge hero-enter">
            <span className="hero-status-dot" aria-hidden="true" />
            Alles aus einer Hand
            <ArrowRight className="hero-badge-arrow" aria-hidden="true" />
          </p>

          <h1 id="hero-title" className="hero-title">
            <span className="hero-line">Online <span className="hero-word-emphasis">sichtbar.</span></span>
            <span className="hero-line">Mehr <span className="hero-word-emphasis">Anfragen.</span></span>
            <span className="hero-line">Mehr <span className="hero-word-emphasis">Umsatz.</span></span>
          </h1>

          <div className="hero-actions hero-enter">
            <button className="hero-primary" type="button" onClick={onOpenBooking}>
              <span className="hero-button-label">Analyse starten</span>
              <span className="hero-price">0 €</span>
              <ArrowRight className="hero-primary-arrow" aria-hidden="true" />
            </button>
            <button className="hero-secondary" type="button" onClick={() => goToSection('services')}>
              Leistungen entdecken
              <ArrowRight className="hero-secondary-arrow" aria-hidden="true" />
            </button>
          </div>

          <div className="hero-services hero-enter">
            <nav className="hero-service-list" aria-label="Leistungen im Überblick">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.name}
                    className={`hero-service${activeService === index ? ' is-active' : ''}`}
                    type="button"
                    onPointerEnter={event => {
                      if (event.pointerType !== 'touch') setActiveService(index);
                    }}
                    onFocus={() => setActiveService(index)}
                    onClick={() => {
                      setActiveService(index);
                      goToSection('services');
                    }}
                    aria-label={`${service.name}: ${service.copy} Leistungen ansehen`}
                  >
                    <Icon className="hero-service-icon" aria-hidden="true" />
                    <span className="hero-service-name">{service.name}</span>
                    <span className="hero-service-indicator" aria-hidden="true" />
                  </button>
                );
              })}
            </nav>
            <p className="hero-service-copy" aria-hidden="true">
              <span key={activeService}>{services[activeService].copy}</span>
            </p>
          </div>

          <div className="hero-footer hero-enter">
            <button
              type="button"
              className="hero-rating"
              onClick={() => goToSection('reviews')}
              aria-label="Google-Bewertungen ansehen: 4,9 von 5 Sternen"
            >
              <span className="hero-rating-stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map(star => <Star key={star} />)}
              </span>
              <span className="hero-rating-value">4,9 / 5</span>
              <span className="hero-rating-source">auf Google</span>
              <ArrowRight className="hero-rating-arrow" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hero-video-control"
              onClick={toggleVideo}
              aria-label="Hintergrundvideo"
              aria-pressed={isPlaying}
              title={isPlaying ? 'Hintergrundvideo pausieren' : 'Hintergrundvideo abspielen'}
            >
              {isPlaying ? (
                <svg className="hero-pause-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <rect x="5" y="4" width="3" height="12" rx=".5" />
                  <rect x="12" y="4" width="3" height="12" rx=".5" />
                </svg>
              ) : <Play aria-hidden="true" />}
              <span className="hero-video-label">{isPlaying ? 'Video pausieren' : 'Video abspielen'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
