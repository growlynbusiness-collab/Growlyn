import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ChallengesSection from './components/ChallengesSection';
import CTASection from './components/CTASection';
import SiteFooter from './components/SiteFooter';
import {
  Play,

  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Star,
  Film,
  Globe,
  Cpu,
  MessageSquare,
  Check,
  ChevronRight,
  MonitorPlay,
  Zap,
  Clock,
  Video,
  AlertCircle,
  ThumbsUp,
  Sparkles,
  Layout,
  BarChart3,
  Smartphone,
  Gauge,
  Bell,
  TrendingUp,
  Layers,
  Calendar,
  User,
  ChevronLeft
} from './components/Icons';

// --- Helpers ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Components ---


const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/4917680330366', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#111] md:border border-white/10 rounded-t-[2rem] md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto min-h-[500px] animate-fade-up">

        {/* Left Side: Manager Profile */}
        <div className="w-full h-[420px] md:h-auto md:w-5/12 bg-[#0A0A0A] relative flex flex-col justify-end p-8 border-b md:border-b-0 md:border-r border-white/5">
          {/* Manager Image Background */}
          <div className="absolute inset-0 opacity-60">
            <img
              src="/Manager.jpeg"
              alt="Manager"
              className="w-full h-full object-cover object-center grayscale mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-4 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
              <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Strategy Lead</span>
            </div>
            <h3 className="text-white font-display text-3xl font-medium mb-1">Saber Ibrahimkhel</h3>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide">Growlyn Agency</p>
          </div>
        </div>

        {/* Right Side: Contact Flow */}
        <div className="flex-1 bg-[#111] p-8 md:p-12 relative flex flex-col justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white z-20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6">Persönliches Gespräch</h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
              "Lassen Sie uns gemeinsam herausfinden, wie wir Ihr digitales Potenzial maximal entfalten können."
            </p>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-6 h-6 text-white" />
              Jetzt per WhatsApp anfragen
            </button>
            <p className="text-center text-gray-600 text-xs mt-4 uppercase tracking-wider font-medium">
              +49 176 80330366
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Navbar = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Rotating Text Logic
  const rotatingWords = ["Webdesign", "Handy App", "Marketing", "Umsatz"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 500); // Wait for exit animation
    }, 2500); // Change every 2.5s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Leistungen', target: 'services' },
    { name: 'Über uns', target: 'about' },
    { name: 'Bewertungen', target: 'reviews' },
    { name: 'Action', target: 'action' },
  ];

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-5' : 'py-8'}`}>
        <div className={`mx-auto max-w-7xl px-4 md:px-8 transition-all duration-500`}>
          <div className={`relative flex items-center justify-between rounded-2xl border transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 px-6 py-4 shadow-2xl shadow-black/50' : 'bg-transparent border-transparent px-0 py-3'}`}>

            {/* Left: Logo */}
            <div className="flex items-center gap-8" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex flex-col group cursor-pointer">
                <span className="font-display text-3xl font-semibold tracking-tight text-white leading-none group-hover:text-accent transition-colors duration-300">Growlyn</span>
                <span className="font-sans text-[11px] text-gray-500 uppercase tracking-[0.35em] leading-none mt-1.5 group-hover:text-gray-300 transition-colors">Agency</span>
              </div>
            </div>

            {/* Center: Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.target)}
                  className="relative px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors group overflow-hidden rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right: CTA */}
            <div className="hidden md:flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20">Neu</span>

                {/* Rotating Word Container */}
                <div className="w-[85px] h-[20px] relative overflow-hidden flex items-center">
                  <span
                    key={currentWordIndex}
                    className="text-sm font-medium text-gray-300 absolute inset-0 animate-fade-up"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </div>
              </div>

              <div className="h-5 w-px bg-white/10 hidden xl:block"></div>

              <button
                onClick={onOpenBooking}
                className="relative group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] overflow-hidden shadow-lg shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Projekt starten
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors z-50 relative" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- High-End Sidebar / Drawer Mobile Menu --- */}

      {/* 1. Backdrop (Click to close) */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* 2. Sidebar Panel */}
      <div className={`fixed top-0 right-0 bottom-0 z-[60] w-[85%] max-w-[360px] bg-[#0A0A0A]/80 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Visual Effects inside Sidebar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-l-3xl">
          <div className="absolute inset-0 bg-noise opacity-10"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative h-full flex flex-col p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-white tracking-tight">Growlyn</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.target)}
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 text-left"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-2xl font-display font-light text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-accent -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-auto">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Kontakt</p>
                <a href="mailto:hello@growlyn.com" className="text-lg text-white font-medium hover:text-accent transition-colors">hello@growlyn.com</a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl text-base font-bold hover:bg-accent transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
              >
                Projekt starten
                <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FloatingMarquee = () => {
  const logos = [
    "HOTEL", "GASTRONOMIE", "BAU", "STARTUP", "E-COMMERCE", "IMMOBILIEN", "HANDWERK"
  ];

  return (
    <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-40 w-full pointer-events-none">
      <div
        className="w-full relative"
      >
        <div
          className="w-full bg-black/20 backdrop-blur-xl border-y border-white/5 flex overflow-hidden mask-linear-fade"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-32 items-center min-w-full shrink-0 justify-around py-4 md:py-5">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="font-display text-sm md:text-base font-bold text-white/40 uppercase tracking-[0.2em] transition-all duration-500 cursor-default select-none hover:text-white hover:scale-105">
                {logo}
              </span>
            ))}
          </div>
          <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-32 items-center min-w-full shrink-0 justify-around py-4 md:py-5" aria-hidden="true">
            {[...logos, ...logos].map((logo, i) => (
              <span key={`dup-${i}`} className="font-display text-sm md:text-base font-bold text-white/40 uppercase tracking-[0.2em] transition-all duration-500 cursor-default select-none hover:text-white hover:scale-105">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AgencyNumbers = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section id="about" aria-labelledby="agency-numbers-title" className="relative z-20 py-24 md:py-32 bg-background overflow-visible scroll-mt-28">
      <FloatingMarquee />

      {/* Keep the original square-grid background. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <span aria-hidden="true" className="w-6 h-px bg-accent"></span>
          <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em]">Growlyn in Zahlen</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-end mb-12 md:mb-16">
          <h2 id="agency-numbers-title" className="lg:col-span-7 font-display font-light text-4xl md:text-6xl text-white leading-[1.1] tracking-tight">
            Erfahrung, die<br />
            <span className="font-serif italic text-accent">sichtbar wird.</span>
          </h2>
          <p className="lg:col-span-5 text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-md lg:pb-1">
            Aus Ideen werden digitale Auftritte. Aus Zusammenarbeit wird Vertrauen. Und aus dem nächsten Projekt vielleicht Ihres.
          </p>
        </div>

        <dl className="grid md:grid-cols-2 border-y border-white/10">
          <div className="group relative py-9 md:py-12 md:pr-12 lg:pr-20 border-b md:border-b-0 md:border-r border-white/10">
            <div aria-hidden="true" className="flex items-center justify-between mb-7 md:mb-10">
              <span className="font-display text-xs text-gray-500 tracking-[0.15em]">01 / WEBDESIGN</span>
              <Globe className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors" />
            </div>
            <dt className="sr-only">Gebaute Websites</dt>
            <dd className="font-display font-light text-[100px] sm:text-[128px] lg:text-[160px] leading-none tracking-tighter text-white mb-5">
              <span className="sr-only">Über </span>100<span aria-hidden="true" className="text-accent font-light">+</span>
            </dd>
            <dd>
              <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight mb-3">Websites gebaut.</h3>
              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-sm">
                Über 100 individuelle Websites – von der ersten Idee bis zum letzten Feinschliff. Jede mit eigenem Charakter.
              </p>
            </dd>
          </div>

          <div className="group relative py-9 md:py-12 md:pl-12 lg:pl-20">
            <div aria-hidden="true" className="flex items-center justify-between mb-7 md:mb-10">
              <span className="font-display text-xs text-gray-500 tracking-[0.15em]">02 / SOCIAL MEDIA</span>
              <MessageSquare className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors" />
            </div>
            <dt className="sr-only">Aktuell betreute Social-Media-Kunden</dt>
            <dd className="font-display font-light text-[100px] sm:text-[128px] lg:text-[160px] leading-none tracking-tighter text-white mb-5">
              <span className="sr-only">Über </span>10<span aria-hidden="true" className="text-accent font-light">+</span>
            </dd>
            <dd>
              <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight mb-3">Marken. Jeden Tag im Blick.</h3>
              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-sm">
                Aktuell betreuen wir über 10 Kunden im Social Media. Mit Strategie, kreativem Content und persönlicher Begleitung.
              </p>
              <div className="inline-flex items-center gap-2 mt-5 text-[11px] text-accent font-medium">
                <span aria-hidden="true" className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping"></span>
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent"></span>
                </span>
                Laufende Betreuung
              </div>
            </dd>
          </div>
        </dl>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-7 md:pt-8">
          <p className="text-gray-500 text-sm font-light">Webdesign. Content. Ein Team an Ihrer Seite.</p>
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-3 self-start text-white text-sm font-medium hover:text-accent transition-colors py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Gemeinsam weiterwachsen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const LegalModal = ({
  isOpen,
  onClose,
  view
}: {
  isOpen: boolean;
  onClose: () => void;
  view: 'impressum' | 'datenschutz'
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current as HTMLDivElement | null;
    panel?.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter(element => !element.hasAttribute('disabled') && !element.hidden);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) { event.preventDefault(); panel.focus(); return; }
      if (!panel.contains(document.activeElement) || (event.shiftKey && document.activeElement === first)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-dialog-title"
        tabIndex={-1}
        className="max-h-[85svh] overflow-y-auto bg-[#050505] border border-white/10 rounded-2xl w-full max-w-sm md:max-w-md p-6 md:p-8 relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Rechtliche Informationen schließen"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>

        <h3 id="legal-dialog-title" className="text-xl font-display font-medium text-white mb-6">
          {view === 'impressum' ? 'Impressum' : 'Datenschutz'}
        </h3>

        <div className="space-y-4 text-gray-400 text-sm font-light leading-relaxed">
          {view === 'impressum' ? (
            <>
              <p>
                <strong className="text-white block mb-1">Angaben gemäß § 5 TMG</strong>
                Mirza Mustafa<br />
                Lea Grundig Str. 36<br />
                12679 Berlin<br />
              </p>
              <p>
                <strong className="text-white block mb-1">Kontakt</strong>
                Telefon: +49 176 80330366<br />
                E-Mail: growlynbusiness@gmail.com

              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-white block mb-1">Datenschutz auf einen Blick</strong>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              </p>
              <p>
                Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [legalView, setLegalView] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <main className="bg-black min-h-screen w-full text-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <Hero onOpenBooking={() => setBookingOpen(true)} />
      <AgencyNumbers onOpenBooking={() => setBookingOpen(true)} />
      <ServicesSection onOpenBooking={() => setBookingOpen(true)} />
      <ChallengesSection onOpenBooking={() => setBookingOpen(true)} />
      <ReviewsSection />
      <CTASection onOpenBooking={() => setBookingOpen(true)} />
      <SiteFooter onOpenBooking={() => setBookingOpen(true)} onOpenLegal={setLegalView} />

      <LegalModal
        isOpen={legalView !== null}
        onClose={() => setLegalView(null)}
        view={legalView ?? 'impressum'}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
};

export default App;