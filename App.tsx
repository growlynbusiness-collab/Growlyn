import React, { useState, useEffect } from 'react';
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
    { name: 'Über uns', target: 'portfolio' },
    { name: 'Projekte', target: 'portfolio' },
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

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const heroTags = [
    { name: 'Online Auftreten', icon: Layout },
    { name: 'Webseiten', icon: Globe },
    { name: 'Marketing', icon: TrendingUp },
    { name: 'Apps', icon: Smartphone }
  ];

  return (
    // Reduced padding-bottom (pb-20) so the content ends closer to the overlapping marquee
    <section className="relative min-h-screen flex flex-col justify-center pt-44 pb-20 overflow-hidden z-10">
      {/* Refined Background with Video */}
      <div className="absolute inset-0 z-0">
        {/* Noise Texture Layer */}
        <div className="absolute inset-0 bg-noise opacity-30 z-[3] mix-blend-overlay pointer-events-none"></div>

        {/* Cinematic Background Video */}
        {/* Cinematic Background Video - Universal */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100 scale-105"
        >
          <source src="/herogrowlyn.mp4" type="video/mp4" />
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="fallback" />
        </video>

        {/* Complex Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background z-[2]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50 z-[2]"></div>

        {/* Ambient Light Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-[1]"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 z-[1]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-4xl">

          {/* Top Pill */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md mb-8 opacity-0 animate-fade-up">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">Alles aus einer Hand</span>
            <ArrowRight className="w-3 h-3 text-accent" />
          </div>

          {/* Main Title */}
          <h1 className="font-display font-light text-5xl md:text-7xl text-white leading-[1.05] tracking-tighter mb-10 opacity-0 animate-fade-up delay-100">
            Online sichtbar.<br />
            Mehr Anfragen.<br />
            <span className="font-serif italic text-accent font-normal">Mehr Umsatz.</span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16 opacity-0 animate-fade-up delay-200">
            <button
              onClick={onOpenBooking}
              className="group relative bg-white text-black px-8 py-5 rounded-2xl text-base font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-gray-200 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2">
                Analyse starten
                <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-md border border-gray-200/50 ml-1">
                  <span className="text-gray-400 line-through text-xs font-medium">300€</span>
                  <span className="text-emerald-600 font-extrabold text-sm">0€</span>
                </div>
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              className="group relative px-10 py-5 rounded-2xl text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 overflow-hidden bg-white/[0.03] border border-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Play className="w-4 h-4 fill-white/50 group-hover:fill-white transition-colors" />
              <span className="relative z-10">Arbeiten ansehen</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-12 opacity-0 animate-fade-up delay-300">
            {heroTags.map((tag, i) => (
              <span key={tag.name} className="group px-4 py-2 rounded-lg bg-surface border border-white/10 hover:border-white/20 text-xs font-medium text-gray-400 hover:text-white transition-all duration-300 cursor-default flex items-center gap-2.5">
                <tag.icon className="w-3.5 h-3.5 text-accent/70 group-hover:text-accent transition-colors" />
                {tag.name}
              </span>
            ))}
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-4 opacity-0 animate-fade-up delay-400">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surfaceHighlight overflow-hidden">
                  <img src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-surfaceHighlight flex items-center justify-center text-[10px] font-bold text-white">
                99+
              </div>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex flex-col justify-center">
              <div className="flex text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white font-bold text-base leading-none">4.9/5</span>
                <span className="text-gray-500 text-xs font-medium">auf Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

const Philosophy = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section className="relative z-20 pb-32 pt-32 bg-background overflow-visible">

      <FloatingMarquee />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* Container widened to max-w-[1400px] to allow content to stretch more to the edges */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        {/* 12-column grid allowing for 7/5 split (approx 58% / 42%) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Video / Image Card - Takes 7 cols (58%) */}
          <div className="relative lg:col-span-7">

            {/* CLEAN SUBTLE GLOW EFFECT */}
            <div className="absolute -inset-4 bg-accent/15 rounded-[2.5rem] blur-3xl -z-10 pointer-events-none opacity-60"></div>

            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video shadow-2xl shadow-black/50 group border border-white/5">
              {/* Image */}
              <img
                src="/founders-wide.jpeg"
                alt="Philosophy Video"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content - Takes 5 cols (42%) - Now significantly wider due to container width */}
          <div className="pt-16 lg:pt-0 lg:col-span-5 lg:pl-6">
            {/* Green Line */}
            <div className="w-12 h-1 bg-accent mb-8"></div>

            <h2 className="font-display font-normal text-4xl md:text-6xl text-white mb-8 leading-[1.1] tracking-tight">
              Skaliere<br />
              <span className="font-serif italic text-accent">sehr günstig</span>
            </h2>

            <ul className="space-y-4 mb-10">
              {[
                "Google Maps Business Profil Setup",
                "Sichtbar für Touristen & Locals",
                "Professioneller Upload deiner Bilder",
                "SEO-optimierte Kurzbeschreibung",
                "Perfekter Auftritt ganz ohne Website"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-accent group-hover:text-black" />
                  </div>
                  <span className="text-gray-300 font-light text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <button
                onClick={onOpenBooking}
                className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-accent hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Analyse starten
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-baseline gap-3">
                <span className="text-gray-500 line-through text-lg font-medium">300€</span>
                <span className="text-accent text-4xl font-display font-bold">0€</span>
                <span className="text-gray-500 text-xs uppercase tracking-wide font-bold">kostenlos</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text, stars, image }: { name: string, role: string, text: string, stars: number, image: string }) => {
  return (
    <div className="bg-[#0F0F0F] border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300">
      <div className="flex text-yellow-500 mb-2">
        {[...Array(stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">"{text}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-bold text-sm">{name}</h4>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials1 = [
    {
      name: "Sarah Müller",
      role: "Marketing Director",
      text: "Die Zusammenarbeit war erstklassig. Das Team hat unsere Erwartungen übertroffen!",
      stars: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Weber",
      role: "CEO, TechStart",
      text: "Endlich eine Agentur, die mitdenkt. Die neue Website ist ein Gamechanger.",
      stars: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Lisa Klein",
      role: "Founder",
      text: "Schnelle Umsetzung und extrem hochwertiges Ergebnis. Absolut empfehlenswert.",
      stars: 5,
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
  ];

  const testimonials2 = [
    {
      name: "Thomas Berg",
      role: "Sales Manager",
      text: "Unsere Brand Awareness ist durch die Decke gegangen. Danke an das Team!",
      stars: 5,
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "Julia Wolf",
      role: "HR Leitung",
      text: "Die Recruiting-Kampagne hat uns geholfen, top Talente zu finden.",
      stars: 5,
      image: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
      name: "Andreas Schwarz",
      role: "Immobilienmakler",
      text: "Die neue App automatisiert 80% meiner Arbeit. Meine Kunden sind begeistert.",
      stars: 5,
      image: "https://randomuser.me/api/portraits/men/6.jpg"
    },
  ];

  const testimonials3 = [
    {
      name: "David Koch",
      role: "Restaurantbesitzer",
      text: "Seit dem Google Maps Setup ist unser Laden jeden Abend voll. Unfassbar!",
      stars: 5,
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      name: "Sophie Neumann",
      role: "Designerin",
      text: "Ästhetik auf höchstem Niveau. Genau das, was ich gesucht habe.",
      stars: 5,
      image: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      name: "Patrick Hoffman",
      role: "E-Commerce",
      text: "Der ROI war innerhalb von 2 Wochen positiv. Beste Investition des Jahres.",
      stars: 5,
      image: "https://randomuser.me/api/portraits/men/9.jpg"
    },
  ];

  // Duplicate lists for seamless scrolling
  const col1 = [...testimonials1, ...testimonials1, ...testimonials1, ...testimonials1];
  const col2 = [...testimonials2, ...testimonials2, ...testimonials2, ...testimonials2];
  const col3 = [...testimonials3, ...testimonials3, ...testimonials3, ...testimonials3];

  return (
    <section className="relative z-20 pb-32 pt-20 bg-background overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* No more heavy full-section gradient overlay here */}

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

        {/* Google Header */}
        <div className="flex flex-col items-center mb-16 relative z-40">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6 shadow-2xl">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl text-white">4.9</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Verifizierte Bewertungen</span>
            </div>
          </div>
        </div>

        {/* Vertical Marquee Grid with Precision Masking */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[700px] overflow-hidden relative"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          {/* Column 1 */}
          <div className="space-y-6 animate-scroll-y">
            {col1.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6 animate-scroll-y hidden md:block" style={{ animationDuration: '70s' }}>
            {col2.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6 animate-scroll-y hidden lg:block" style={{ animationDuration: '65s' }}>
            {col3.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ id }: { id?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesData = [
    {
      title: "Online Auftreten",
      desc: "Ein professioneller erster Eindruck auf Google & Co., der Vertrauen weckt und Besucher in Kunden verwandelt.",
      colorClass: "bg-[#0F0F0F]",
      renderGraphic: (isActive: boolean) => (
        <div className="relative mt-4 w-full h-48 rounded-xl bg-white/5 border border-white/5 overflow-hidden flex items-end justify-center px-4 pb-0">
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-red-500 tracking-widest">REC</span>
          </div>
          <div className="flex items-end gap-2 w-full justify-center">
            <div className={`w-16 h-20 bg-white/10 rounded-t-full transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}></div>
            <div className={`w-20 h-32 bg-white/10 rounded-t-full relative z-10 transition-transform duration-500 delay-75 ${isActive ? 'translate-y-0' : 'translate-y-2 group-hover:translate-y-0'}`}>
              <div className={`absolute -top-8 -right-4 bg-surface border border-white/10 p-1.5 rounded-lg shadow-lg transition-all duration-700 delay-300 ${isActive ? 'opacity-100 -translate-y-2' : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-2'}`}>
                <ThumbsUp className="w-4 h-4 text-accent" />
              </div>
            </div>
            <div className={`w-16 h-24 bg-white/10 rounded-t-full transition-transform duration-500 delay-100 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}></div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
        </div>
      )
    },
    {
      title: "Social Media/Marketing",
      desc: "Datengesteuerte Kampagnen und viraler Content, der Ihre Reichweite explodieren lässt und messbar Umsatz liefert.",
      colorClass: "bg-[#0F0F0F]",
      renderGraphic: (isActive: boolean) => (
        <div className={`relative mt-4 w-full h-48 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 overflow-hidden flex items-center justify-center transition-transform duration-500 ${isActive ? 'scale-[1.02]' : 'group-hover:scale-[1.02]'}`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className={`w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center z-10 transition-all duration-300 ${isActive ? 'scale-110 bg-accent text-black border-accent' : 'group-hover:scale-110 group-hover:bg-accent group-hover:text-black group-hover:border-accent'}`}>
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className={`h-full bg-accent transition-all duration-[2s] ease-in-out ${isActive ? 'w-full' : 'w-1/3 group-hover:w-full'}`}></div>
          </div>
        </div>
      )
    },
    {
      title: "Highend Websites",
      desc: "Maßgeschneidertes Design und blitzschnelle Ladezeiten – digitale Visitenkarten, die zuverlässig verkaufen.",
      colorClass: "bg-[#0F0F0F]",
      renderGraphic: (isActive: boolean) => (
        <div className={`relative mt-4 w-full h-48 rounded-t-xl bg-[#1a1a1a] border border-white/5 p-4 overflow-hidden transition-transform duration-500 ${isActive ? 'translate-y-2' : 'translate-y-4 group-hover:translate-y-2'}`}>
          <div className="flex gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          </div>
          <div className="space-y-3">
            <div className="h-20 bg-white/5 rounded-lg w-full flex items-center justify-center">
              <div className="w-16 h-2 bg-white/10 rounded-full"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 bg-white/5 rounded-lg flex items-end p-2">
                <div className={`w-full bg-accent/20 rounded-sm transition-all duration-500 ${isActive ? 'h-3/4' : 'h-1/2 group-hover:h-3/4'}`}></div>
              </div>
              <div className="h-16 bg-white/5 rounded-lg flex items-end p-2">
                <div className={`w-full bg-accent/20 rounded-sm transition-all duration-500 delay-75 ${isActive ? 'h-2/3' : 'h-1/3 group-hover:h-2/3'}`}></div>
              </div>
              <div className="h-16 bg-white/5 rounded-lg relative overflow-hidden flex flex-col justify-center items-center">
                <span className={`text-[8px] text-accent font-bold transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>$$$</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Handy Apps",
      desc: "Intuitive Mobile-Apps für iOS und Android, die Ihre Kunden binden und Geschäftsprozesse automatisieren.",
      colorClass: "bg-emerald-950/10 hover:bg-emerald-950/20 hover:border-accent/20",
      renderGraphic: (isActive: boolean) => (
        <div className="relative mt-4 w-full h-48 rounded-xl flex items-center justify-center">
          <div className={`absolute w-32 h-32 bg-accent/20 rounded-full blur-3xl transition-colors duration-700 ${isActive ? 'bg-accent/30' : 'group-hover:bg-accent/30'}`}></div>
          <div className={`relative w-24 h-24 bg-gradient-to-tr from-emerald-900 to-accent/40 rounded-[2rem] flex items-center justify-center shadow-lg border border-white/10 transition-transform duration-700 ${isActive ? 'rotate-12' : 'group-hover:rotate-12'}`}>
            <Sparkles className="w-10 h-10 text-white fill-white/20 animate-pulse-slow" />
          </div>
          <div className="absolute top-10 right-10 w-2 h-2 bg-accent rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse"></div>
        </div>
      )
    }
  ];

  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevService = () => {
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section id={id} className="py-20 md:py-32 bg-[#080808] text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-24 flex flex-col items-center">
          <span className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-8 backdrop-blur-sm">
            Was wir machen
          </span>
          <h2 className="font-display font-light text-4xl md:text-7xl text-white tracking-tight">
            Unsere <span className="font-serif italic text-accent">Leistungen</span>
          </h2>
        </div>

        {/* Mobile View: Controlled Carousel */}
        <div className="md:hidden flex flex-col items-center">
          {/* Active Card */}
          <div key={activeIndex} className="w-full animate-fade-in">
            <div className={`group relative ${servicesData[activeIndex].colorClass} border border-white/5 rounded-[2rem] p-6 min-h-[360px] flex flex-col overflow-hidden transition-colors`}>
              <h3 className="font-display text-3xl text-white mb-4">{servicesData[activeIndex].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-auto">{servicesData[activeIndex].desc}</p>

              <div className="flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors cursor-pointer mb-6">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </div>

              {servicesData[activeIndex].renderGraphic(true)}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={prevService}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95 text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white tabular-nums">0{activeIndex + 1}</span>
              <div className="w-12 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-300 ease-out"
                  style={{ width: `${((activeIndex + 1) / servicesData.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-600 tabular-nums">0{servicesData.length}</span>
            </div>

            <button
              onClick={nextService}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95 text-white"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className={`group relative ${service.colorClass} border border-white/5 rounded-[2rem] p-8 h-[420px] flex flex-col overflow-hidden hover:border-white/10 transition-colors`}>
              <h3 className="font-display text-3xl text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-300 group-hover:text-accent transition-colors cursor-pointer mb-auto">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </div>
              {service.renderGraphic(false)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const ChallengeCard = ({ problem, solution, icon: Icon, delay, isActive, onToggle }: { problem: string, solution: string, icon: any, delay: string, isActive: boolean, onToggle: () => void }) => {
  return (
    <div
      className={`relative rounded-3xl border transition-all duration-700 cursor-pointer group overflow-hidden ${isActive ? 'bg-[#0F0F0F] border-accent/30 shadow-[0_0_30px_-10px_rgba(0,230,153,0.3)]' : 'bg-[#0F0F0F] border-white/5 shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)]'} ${delay} opacity-0 animate-fade-up min-h-[140px] flex flex-col justify-center`}
      onClick={onToggle}
    >
      {/* Improved Glow Effect - Natural & Spread Out */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${isActive ? 'bg-accent/[0.02]' : 'bg-red-500/[0.02]'}`}></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full blur-[100px] transition-all duration-1000 opacity-[0.15] pointer-events-none ${isActive ? 'bg-accent' : 'bg-red-500'}`}></div>

      {/* Horizontal Layout Container */}
      <div className="relative z-10 flex items-center gap-6 p-6 sm:p-8">

        {/* Icon Box - Left */}
        <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border border-white/5 ${isActive ? 'bg-accent/20 text-accent' : 'bg-red-500/10 text-red-400'}`}>
          <Icon className="w-8 h-8" />
        </div>

        {/* Content Area - Middle (Flex Grow) */}
        <div className="flex-grow relative h-20 flex flex-col justify-center">
          {/* Problem Text */}
          <div className={`transition-all duration-500 ease-out absolute inset-0 flex flex-col justify-center ${isActive ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1 leading-tight">{problem.split('\n')[0]}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">{problem.split('\n')[1] || "Klicken für die Lösung"}</p>
          </div>

          {/* Solution Text */}
          <div className={`transition-all duration-500 ease-out absolute inset-0 flex flex-col justify-center ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <h3 className="font-display font-bold text-lg sm:text-xl text-accent mb-1 leading-tight">Lösung:</h3>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-medium line-clamp-2">{solution}</p>
          </div>
        </div>

        {/* Toggle Switch - Right */}
        <div className={`shrink-0 w-14 h-8 rounded-full p-1 transition-colors duration-500 relative ${isActive ? 'bg-accent' : 'bg-white/10'}`}>
          <div className={`absolute top-1 bottom-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-500 ease-spring ${isActive ? 'translate-x-6 left-1' : 'translate-x-0 left-1'}`}></div>
        </div>
      </div>
    </div>
  );
};

const Challenges = () => {
  const challenges = [
    {
      icon: Layout,
      problem: "Website bringt keine Kunden?\nSchlechtes Design schreckt potenzielle Käufer ab.",
      solution: "Verkaufspsychologisch optimierte High-End Websites, die Besucher konvertieren."
    },
    {
      icon: TrendingUp,
      problem: "Geldverbrennung bei Ads?\nWerbebudget verpufft ohne messbare Ergebnisse.",
      solution: "Datengestützte Kampagnen mit messbarem ROI und klarem Tracking."
    },
    {
      icon: Smartphone,
      problem: "Ineffiziente Abläufe?\nVeraltete Prozesse kosten Zeit und Nerven.",
      solution: "Individuelle App-Lösungen zur Automatisierung Ihres Business."
    },
    {
      icon: Globe,
      problem: "Unsichtbar im Netz?\nDie Konkurrenz wird gefunden, Sie aber nicht.",
      solution: "Dominante Online-Präsenz auf allen relevanten Kanälen."
    }
  ];

  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setActiveIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const showAllSolutions = () => {
    setActiveIndices(challenges.map((_, i) => i));
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-visible">
      {/* Background Grid - Same as Philosophy */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Herausforderungen
          </span>
          <h2 className="font-display font-light text-4xl md:text-7xl text-white tracking-tight mb-4">
            Ihre <span className="font-serif italic text-accent">Herausforderungen</span>
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mt-4">
            Tippen Sie auf eine Karte, um die Lösung zu sehen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              icon={challenge.icon}
              problem={challenge.problem}
              solution={challenge.solution}
              delay={`delay-${(index + 1) * 100}`}
              isActive={activeIndices.includes(index)}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={showAllSolutions}
            className="text-gray-500 text-sm font-medium hover:text-white transition-all duration-300 border-b border-transparent hover:border-white/20 pb-0.5 hover:tracking-wide"
          >
            Alle Lösungen anzeigen
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  city,
  client,
  tag,
  description,
  stats,
  image
}: {
  city: string,
  client: string,
  tag: string,
  description: string,
  stats: string[],
  image: string
}) => {
  return (
    <div className="w-[280px] h-[400px] md:w-[380px] md:h-[520px] shrink-0 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-2 flex flex-col gap-2 group hover:border-white/10 transition-colors duration-500 overflow-hidden">

      {/* Image Module (Top) */}
      <div className="h-[55%] w-full rounded-[2rem] overflow-hidden relative">
        {/* Dark Overlay that clears on hover */}
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>

        <img
          src={image}
          alt={city}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
          {tag}
        </div>
      </div>

      {/* Info Module (Bottom) - Dashboard Style */}
      <div className="flex-1 bg-[#121212] rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between relative group-hover:bg-[#151515] transition-colors duration-300">
        {/* Subtle decorative glow inside the card */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 blur-[50px] rounded-full pointer-events-none"></div>

        <div>
          <div className="flex flex-col mb-1">
            <h3 className="font-display font-medium text-2xl md:text-3xl text-white tracking-tight">{city}</h3>
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">{client}</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mt-3">{description}</p>
        </div>

        {/* Technical Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4 relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-black/40 border border-white/5 rounded-xl py-2.5 px-3 flex items-center justify-center text-center">
              <span className="text-[10px] font-medium text-gray-300">{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Portfolio = ({ id }: { id?: string }) => {
  const projects = [
    {
      city: "Lapaz",
      client: "Website & Marketing",
      tag: "GASTRO",
      description: "Mexikanisches Feuer entfacht – Reservierungen explodieren.",
      stats: ["30% mehr Kunden", "60% mehr Sichtbarkeit"],
      image: "/LapazBanner.png"
    },
    {
      city: "Meat Kebab",
      client: "Website & Marketing",
      tag: "DÖNER",
      description: "Der Döner-Gigant der Stadt – Digital unübersehbar.",
      stats: ["40% mehr Kunden", "80% mehr Sichtbarkeit"],
      image: "/MeatKebabBanner.png"
    },
    {
      city: "Poppy Burger",
      client: "Website & Cinematic Video",
      tag: "BRANDING",
      description: "Burgerliebe neu inszeniert – Geschmack trifft Design.",
      stats: ["30% mehr Sichtbarkeit", "Stärkeres Branding"],
      image: "/PoppyBurgerBanner.png"
    },
    {
      city: "Zagros Döner",
      client: "Website",
      tag: "WEBSITE",
      description: "Tradition modern verpackt – Dein Döner im Netz.",
      stats: ["50% mehr Online-Bestellungen", "Top Google Ranking"],
      image: "/ZagrosDönerbanner.png"
    },
    {
      city: "Stein & Fuge",
      client: "Design & Website",
      tag: "DESIGN",
      description: "Räume, die wirken – Digital und Real.",
      stats: ["Exklusives Design", "Premium Kunden"],
      image: "/SteinundFuegeBanner.png"
    }
  ];

  // Duplicate projects for seamless loop
  const allProjects = [...projects, ...projects, ...projects];

  return (
    <section id={id} className="py-24 md:py-32 bg-background relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-16 relative z-10 text-center flex flex-col items-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
          Ausgewählte Arbeiten
        </span>
        <h2 className="font-display font-light text-4xl md:text-7xl text-white tracking-tight">
          Unser <span className="font-serif italic text-accent">Portfolio</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden pb-10 group">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-mobile md:animate-scroll gap-4 md:gap-8 w-max shrink-0 group-hover:[animation-play-state:paused] px-4">
            {[...allProjects].map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
          <div className="flex animate-scroll-mobile md:animate-scroll gap-4 md:gap-8 w-max shrink-0 group-hover:[animation-play-state:paused] px-4" aria-hidden="true">
            {[...allProjects].map((project, i) => (
              <ProjectCard key={`dup-${i}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ id, onOpenBooking }: { id?: string, onOpenBooking: () => void }) => {
  return (
    <section id={id} className="py-32 relative bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">

        {/* The Apple-like Box */}
        <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#080808] group shadow-2xl">

          {/* Animated Background Effect - Subtle Moving Glow (Green) */}
          <div className="absolute inset-0 overflow-hidden">
            {/* A large rotating gradient for that "moving light" feel, kept very subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.15] pointer-events-none">
              <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#00E699_100%)] animate-[spin_8s_linear_infinite] rounded-full blur-3xl"></div>
            </div>
            {/* A second counter-rotating one for complexity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.10] pointer-events-none">
              <div className="w-full h-full bg-[conic-gradient(from_270deg_at_50%_50%,#00000000_50%,#00E699_100%)] animate-[spin_12s_linear_infinite_reverse] rounded-full blur-3xl"></div>
            </div>

            {/* Radial vignette to keep corners dark */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_80%)]"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
              <span className="text-gray-300 text-xs font-medium tracking-wide">Jetzt starten</span>
            </div>

            {/* Text */}
            {/* Hero title uses: font-display font-light text-5xl md:text-7xl leading-[1.05] tracking-tighter */}
            <h2 className="font-display font-light text-5xl md:text-7xl text-white tracking-tighter mb-6 max-w-4xl leading-[1.1]">
              Jedes Projekt ist eine<br />
              <span className="font-serif italic text-white">neue Erfolgsgeschichte.</span>
            </h2>

            <p className="text-lg text-gray-400 max-w-xl mb-12 font-light leading-relaxed">
              Bereit, Ihre digitale Präsenz auf das nächste Level zu heben? Sichern Sie sich jetzt Ihr kostenloses Erstgespräch.
            </p>

            {/* The Single Layer Button requested (removed outer border) */}
            <button
              onClick={onOpenBooking}
              className="bg-accent hover:bg-accentDark text-black px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,230,153,0.4)] hover:shadow-[0_0_30px_rgba(0,230,153,0.6)] flex items-center gap-2 transform hover:scale-[1.02]"
            >
              Termin buchen
              <div className="flex items-center gap-1.5 bg-black/10 px-2 py-0.5 rounded ml-1 border border-black/5">
                <span className="text-black/50 line-through text-xs font-medium">350€</span>
                <span className="text-black font-extrabold text-xs">0€</span>
              </div>
            </button>

          </div>

          {/* Noise */}
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-[#050505] border border-white/10 rounded-2xl w-full max-w-sm md:max-w-md p-6 md:p-8 relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>

        <h3 className="text-xl font-display font-medium text-white mb-6">
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
                Telefon: 017655454806<br />
                E-Mail: growlynbusiness@gmail.com

              </p>
              <p className="text-xs pt-2 text-gray-500">
                Hinweis: Wir sind derzeit noch privat tätig, befinden uns aber im Prozess der gewerblichen Anmeldung. Diese erfolgt rückwirkend demnächst.
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

const Footer = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalView, setLegalView] = useState<'impressum' | 'datenschutz'>('impressum');

  const openLegal = (view: 'impressum' | 'datenschutz') => {
    setLegalView(view);
    setLegalOpen(true);
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow - Weaker (opacity reduced or color lighter) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent/[0.02] blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

          {/* Brand & Newsletter (Left) - Spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Logo */}
            <div
              className="flex flex-col group cursor-pointer mb-10"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="font-display text-4xl font-semibold tracking-tight text-white leading-none">Growlyn</span>
              <span className="font-sans text-sm text-gray-500 uppercase tracking-[0.35em] leading-none mt-2">Agency</span>
            </div>

            <p className="text-gray-400 text-base font-light mb-10 max-w-md leading-relaxed">
              Entwickelt mit <span className="text-accent">❤</span> und Leidenschaft.<br />
              Wir transformieren Marken in digitale Erlebnisse.
            </p>

            <button
              onClick={onOpenBooking}
              className="bg-accent hover:bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,230,153,0.3)] hover:shadow-[0_0_30px_rgba(0,230,153,0.5)] transform hover:scale-105"
            >
              Jetzt verbinden
            </button>
          </div>

          {/* Navigation Links (Middle) - Spans 4 columns to give more breathing room */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-white font-bold mb-8 font-display text-base">Menü</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                  { label: 'Leistungen', action: () => scrollToSection('services') },
                  { label: 'Projekte', action: () => scrollToSection('portfolio') },
                  { label: 'Kontakt', action: () => scrollToSection('action') },
                  { label: 'Action', action: () => scrollToSection('action') }
                ].map(item => (
                  <li key={item.label}>
                    <button onClick={item.action} className="text-gray-500 hover:text-white transition-colors text-sm font-medium">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 font-display text-base">Social</h4>
              <ul className="space-y-4">
                {['Instagram', 'LinkedIn', 'YouTube', 'Twitter (X)'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Just the stats now, aligned to end */}
          <div className="lg:col-span-3 flex flex-col lg:items-end justify-start">

            {/* Stat Badge - Slightly larger */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-xl hover:border-accent/20 transition-colors">
              <span className="text-gray-400 text-sm font-medium">Generierter Umsatz</span>
              <div className="h-4 w-px bg-white/10"></div>
              <span className="text-white text-sm font-bold tabular-nums">€ 4,250,000+</span>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">© 2024 Growlyn Agency</p>

          <div className="flex items-center gap-8">
            <button onClick={() => openLegal('impressum')} className="text-gray-500 hover:text-white transition-colors text-xs font-medium uppercase tracking-wide">Impressum</button>
            <button onClick={() => openLegal('datenschutz')} className="text-gray-500 hover:text-white transition-colors text-xs font-medium uppercase tracking-wide">Datenschutz</button>
          </div>

          <div className="bg-white text-black px-4 py-2.5 rounded-xl flex items-center gap-2.5 cursor-pointer hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
            <div className="w-4 h-4 bg-black rounded-md flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">G</span>
            </div>
            <span className="text-xs font-bold">Made by Growlyn</span>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
        view={legalView}
      />
    </footer>
  );
};

const App = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen w-full text-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <Hero onOpenBooking={() => setBookingOpen(true)} />
      <Philosophy onOpenBooking={() => setBookingOpen(true)} />
      <Services id="services" />
      <Challenges />
      <Portfolio id="portfolio" />
      <TestimonialsSection />
      <CTASection id="action" onOpenBooking={() => setBookingOpen(true)} />
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
};

export default App;