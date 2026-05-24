import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Infinity as InfinityIcon, 
  Menu, 
  X, 
  Cpu, 
  Layers, 
  Settings, 
  Sparkles, 
  Check, 
  RotateCcw,
  Code,
  Zap,
  Workflow,
  Palette,
  Activity,
  Heart,
  Target,
  Shield,
  ArrowRight,
  Send,
  User,
  Mail,
  MessageSquare
} from 'lucide-react';

const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4';

interface NavLink {
  label: string;
  sectionId: string;
  active?: boolean;
  dropdown?: boolean;
}

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Preset {
  id: 'wellness' | 'agency' | 'studio';
  name: string;
  logoText: string;
  logoIcon: React.ReactNode;
  navLinks: NavLink[];
  headline: string;
  description: string;
  loginCta: string;
  primaryCta: string;
  secondaryCta: string;
  signupCta: string;
  glowClass: string;
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceCard[];
  contactTitle: string;
  contactSubtitle: string;
  contactBtn: string;
}

export default function App() {
  // Preset definitions
  const PRESETS: Record<string, Preset> = {
    wellness: {
      id: 'wellness',
      name: 'Wellness Presets',
      logoText: 'Equilibrium',
      logoIcon: <InfinityIcon size={22} strokeWidth={1.5} />,
      navLinks: [
        { label: 'Home', sectionId: 'home', active: true },
        { label: 'Wellness', sectionId: 'services', dropdown: true },
        { label: 'Routine', sectionId: 'sandbox' },
        { label: 'Our Team', sectionId: 'contact' }
      ],
      headline: 'Live Better, Feel Whole Every Day',
      description: 'Take charge of how you feel with a companion built for your journey—build routines, follow your growth, and unlock tailored insights for a steadier, more vibrant life each day.',
      loginCta: 'Log in',
      primaryCta: 'Start Today',
      secondaryCta: 'Discover How',
      signupCta: 'Begin Now',
      glowClass: '',
      servicesTitle: 'Pathways to Balance',
      servicesSubtitle: 'Unlocking a calmer mind and structured rhythm through bespoke interactive routines.',
      services: [
        {
          title: 'Mindfulness Space',
          description: 'A quiet pocket of calm built to ground your thoughts, track daily moods, and foster breathing micro-habits.',
          icon: <Heart size={20} className="text-rose-400" />
        },
        {
          title: 'Growth Vectors',
          description: 'Visualize your steady progress over time with premium interactive graphs charting sleep quality and wellness consistency.',
          icon: <Activity size={20} className="text-teal-400" />
        },
        {
          title: 'Sovereign Routines',
          description: 'Structure custom morning and evening templates tailored perfectly to your individual lifestyle and constraints.',
          icon: <Shield size={20} className="text-sky-400" />
        }
      ],
      contactTitle: 'Commence Your Journey',
      contactSubtitle: 'Connect with our wellness curators and craft a personalized system built exclusively around you.',
      contactBtn: 'Begin Now'
    },
    agency: {
      id: 'agency',
      name: 'Digital Agency',
      logoText: 'Aether Devs',
      logoIcon: <Cpu size={22} strokeWidth={1.5} />,
      navLinks: [
        { label: 'Home', sectionId: 'home', active: true },
        { label: 'Solutions', sectionId: 'services', dropdown: true },
        { label: 'Portfolio', sectionId: 'sandbox' },
        { label: 'Hire Us', sectionId: 'contact' }
      ],
      headline: 'Code the Future, Design the Present',
      description: 'We craft bespoke digital architectures with hyper-fluid visual identities, blazing performance, and liquid aesthetic controls. Let us scale your digital vision into reality.',
      loginCta: 'Get Quote',
      primaryCta: 'Launch Project',
      secondaryCta: 'View Showcase',
      signupCta: 'Hire Team',
      glowClass: 'theme-overlay-blue',
      servicesTitle: 'Technical Offerings',
      servicesSubtitle: 'Engineering gorgeous custom web applications optimized for speed, interactions, and design depth.',
      services: [
        {
          title: 'Fluid Interfaces',
          description: 'Premium frontends coded using highly interactive liquid-glass frames, smooth scroll steps, and pixel-precise states.',
          icon: <Palette size={20} className="text-indigo-400" />
        },
        {
          title: 'Hyper-Performance',
          description: 'Blazing fast load times with Vite compiler optimization, robust state trees, and semantic HTML components.',
          icon: <Zap size={20} className="text-amber-400" />
        },
        {
          title: 'Creative Systems',
          description: 'End-to-end automation blueprints integrating headless CMS architectures with custom logic for fluid business growth.',
          icon: <Workflow size={20} className="text-emerald-400" />
        }
      ],
      contactTitle: 'Launch Your Project',
      contactSubtitle: 'Ready to build high-end interactive interfaces? Get in touch with our freelance team and request a quote.',
      contactBtn: 'Hire Aether Devs'
    },
    studio: {
      id: 'studio',
      name: 'Creative Studio',
      logoText: 'Vivid Studio',
      logoIcon: <Layers size={22} strokeWidth={1.5} />,
      navLinks: [
        { label: 'Works', sectionId: 'home', active: true },
        { label: 'Services', sectionId: 'services', dropdown: true },
        { label: 'Exhibits', sectionId: 'sandbox' },
        { label: 'Journal', sectionId: 'contact' }
      ],
      headline: 'Where Code Meets Pure Visual Artistry',
      description: 'A premium freelance collective crafting high-fidelity interactive products. We blur the lines between technical precision, liquid aesthetics, and emotional resonance.',
      loginCta: 'Inquire',
      primaryCta: 'See Portfolio',
      secondaryCta: 'Start Brief',
      signupCta: 'Contact',
      glowClass: 'theme-overlay-purple',
      servicesTitle: 'Creative Disciplines',
      servicesSubtitle: 'Sculpting unique digital narratives combining high-fidelity aesthetics with complex responsive logic.',
      services: [
        {
          title: 'Spatial Experience',
          description: 'Custom WebGL structures, immersive canvas animations, and interactive three-dimensional layouts that evoke emotion.',
          icon: <Layers size={20} className="text-purple-400" />
        },
        {
          title: 'Identity Architecture',
          description: 'Crafting premium, recognizable brands, custom font choices, and cohesive visual identities for digital giants.',
          icon: <Target size={20} className="text-pink-400" />
        },
        {
          title: 'Frontend Artistry',
          description: 'Bringing mockups to life with absolute detail, smooth animation cascades, and state-of-the-art interactive systems.',
          icon: <Sparkles size={20} className="text-yellow-400" />
        }
      ],
      contactTitle: 'Inquire About Work',
      contactSubtitle: 'Bespoke design briefs, global inquiries, or editorial commissions—reach out and start a visual dialogue.',
      contactBtn: 'Commence Design Brief'
    }
  };

  // State Management
  const [activePresetId, setActivePresetId] = useState<'wellness' | 'agency' | 'studio'>('wellness');
  const [customHeadline, setCustomHeadline] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const [glowOverride, setGlowOverride] = useState<string | null>(null);
  const [blurIntensity, setBlurIntensity] = useState<string>('blur-[4px]');
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  // Track scrolling to apply dynamic styles to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resolved dynamic values
  const activePreset = PRESETS[activePresetId];
  const headlineText = customHeadline || activePreset.headline;
  const descriptionText = customDescription || activePreset.description;
  const navLinks = activePreset.navLinks;
  const activeGlow = glowOverride !== null ? glowOverride : activePreset.glowClass;

  // Handler to change presets
  const handlePresetChange = (presetId: 'wellness' | 'agency' | 'studio') => {
    setActivePresetId(presetId);
    setCustomHeadline('');
    setCustomDescription('');
    setGlowOverride(null);
  };

  const handleReset = () => {
    setActivePresetId('wellness');
    setCustomHeadline('');
    setCustomDescription('');
    setGlowOverride(null);
    setBlurIntensity('blur-[4px]');
    setShowCode(false);
    setFormStatus('idle');
    setFormName('');
    setFormEmail('');
    setFormMsg('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="relative w-full min-h-screen select-none bg-black text-white scroll-smooth overflow-x-hidden">
      {/* Background Video */}
      <video 
        className="fixed inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0 pointer-events-none"
        autoPlay 
        muted 
        loop 
        playsInline 
        src={BG_VIDEO}
      />

      {/* Dynamic Colored Glow Underlay */}
      {activeGlow && (
        <div className={`fixed inset-0 z-1 transition-all duration-1000 pointer-events-none ${activeGlow}`} />
      )}

      {/* Soft Ambient Vignette Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85 z-1 pointer-events-none" />

      {/* Navbar Container */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-8 py-4 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-black/40 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo (left) */}
        <div className="flex items-center gap-2 text-white font-medium text-base z-40">
          <div className="text-white/95 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            {activePreset.logoIcon}
          </div>
          <span className="tracking-tight text-white/95 font-semibold">{activePreset.logoText}</span>
        </div>

        {/* Nav Pill (center, hidden md:flex) */}
        <div className="hidden md:flex liquid-glass items-center gap-1 rounded-xl px-2 py-1.5 select-none shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.sectionId}`}
              className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors duration-300 font-medium ${
                link.active 
                  ? 'bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              {link.dropdown && <ChevronDown size={13} className="mt-px opacity-85" />}
            </a>
          ))}
        </div>

        {/* CTAs (right, hidden md:flex) */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors text-center duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
            {activePreset.loginCta}
          </a>
          <a href="#contact" className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all text-center duration-300 font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
            {activePreset.signupCta}
          </a>
        </div>

        {/* Mobile Toggle (md:hidden) */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden liquid-glass text-white p-2 rounded-lg z-40 cursor-pointer hover:bg-white/5 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed top-[72px] left-4 right-4 z-40 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1 shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-white/5"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.sectionId}`}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-colors duration-300 ${
                link.active 
                  ? 'bg-white/10 text-white font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              {link.dropdown && <ChevronDown size={13} className="opacity-80" />}
            </a>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
            <a 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
              className="flex-1 liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors text-center duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            >
              {activePreset.loginCta}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
              className="flex-1 bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 active:scale-95 transition-all text-center font-semibold shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
            >
              {activePreset.signupCta}
            </a>
          </div>
        </div>
      )}

      {/* SECTION 1: HERO ENTRY SECTION */}
      <section 
        id="home" 
        className="relative w-full h-screen flex flex-col justify-center px-6 sm:px-12 z-10 pt-20"
      >
        <div className="max-w-2xl text-left select-text">
          <div className="flex items-center gap-2 mb-4 bg-white/5 border border-white/10 w-fit px-3 py-1 rounded-full text-xs text-white/90 uppercase tracking-widest font-semibold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <Sparkles size={11} className="text-yellow-400 animate-pulse" />
            <span>Premium Liquid-Glass Showcase</span>
          </div>

          <h1 
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-500"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          >
            {headlineText}
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] transition-all duration-500 font-medium">
            {descriptionText}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#services" className="bg-white text-black text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-[0_4px_25px_rgba(255,255,255,0.25)]">
              {activePreset.primaryCta}
            </a>
            <a href="#sandbox" className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              {activePreset.secondaryCta}
            </a>
          </div>
        </div>

        {/* Scroll down bouncy indicator */}
        <a 
          href="#services" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold text-white/50">Explore Services</span>
          <ChevronDown size={14} className="text-white" />
        </a>
      </section>

      {/* SECTION 2: SERVICE & CAPABILITY CARDS */}
      <section 
        id="services" 
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-12 py-24 sm:py-32 z-10 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto w-full select-text text-center md:text-left">
          {/* Header */}
          <div className="mb-14 sm:mb-16 max-w-2xl">
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              {activePreset.servicesTitle}
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              {activePreset.servicesSubtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full select-none">
            {activePreset.services.map((svc, idx) => (
              <div
                key={idx}
                className="liquid-glass p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 transition-all duration-500 hover:scale-[1.03] group cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.2)] border border-white/5 hover:border-white/10"
              >
                {/* Icon wrapper */}
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl transition-all duration-500 group-hover:bg-white/10 group-hover:scale-105 group-hover:border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  {svc.icon}
                </div>
                <h3 className="text-white text-lg font-semibold tracking-tight mt-2">{svc.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed text-left">
                  {svc.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-white/40 group-hover:text-white/80 transition-all font-semibold mt-auto pt-4 duration-300">
                  <span>Learn details</span>
                  <ArrowRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll down bouncy indicator */}
        <a 
          href="#sandbox" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold text-white/50">Interactive Sandbox</span>
          <ChevronDown size={14} className="text-white" />
        </a>
      </section>

      {/* SECTION 3: LIVE SANDBOX PORTAL */}
      <section 
        id="sandbox" 
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-12 py-24 sm:py-32 z-10 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto w-full select-text">
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Interactive Dev Sandbox
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl">
              Play with real-time liquid-glass presets, modify layouts, adjust parameters, and preview the code variables instantaneously.
            </p>
          </div>

          {/* Sandbox Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch select-none">
            {/* Live Preview Column (Left) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="text-xs text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Sparkles size={11} className="text-yellow-400" />
                <span>Live Active Mockup</span>
              </div>
              <div 
                className="liquid-glass rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between min-h-[320px] shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-white/10"
                style={{
                  backdropFilter: blurIntensity === 'blur-[4px]' ? 'blur(4px)' : blurIntensity === 'blur-[8px]' ? 'blur(8px)' : blurIntensity === 'blur-[12px]' ? 'blur(12px)' : 'blur(16px)',
                  WebkitBackdropFilter: blurIntensity === 'blur-[4px]' ? 'blur(4px)' : blurIntensity === 'blur-[8px]' ? 'blur(8px)' : blurIntensity === 'blur-[12px]' ? 'blur(12px)' : 'blur(16px)'
                }}
              >
                {/* Navbar demo mockup */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="opacity-90">{activePreset.logoIcon}</span>
                    <span className="text-sm font-semibold tracking-tight">{activePreset.logoText}</span>
                  </div>
                  <span className="text-[10px] bg-white/10 text-white/80 rounded-full px-2 py-0.5 font-semibold">Mock-Header</span>
                </div>

                {/* Hero text mockup */}
                <div className="my-8 text-left space-y-3">
                  <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug drop-shadow-md">
                    {headlineText}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-md">
                    {descriptionText}
                  </p>
                </div>

                {/* Buttons mockup */}
                <div className="flex items-center gap-2.5 pt-6 border-t border-white/5 mt-auto">
                  <button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full cursor-default">
                    {activePreset.primaryCta}
                  </button>
                  <button className="bg-white/10 border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full cursor-default">
                    {activePreset.secondaryCta}
                  </button>
                </div>
              </div>
            </div>

            {/* Config Sandbox Controls (Right) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="text-xs text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Settings size={12} className="animate-spin-[spin_3s_linear_infinite]" style={{ animation: 'spin 12s linear infinite' }} />
                <span>Control Module</span>
              </div>
              <div className="liquid-glass rounded-2xl p-6 flex flex-col justify-between gap-5 border border-white/5 bg-black/10 shadow-[0_15px_30px_rgba(0,0,0,0.25)]">
                {/* Presets */}
                <div className="space-y-2">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider font-bold">1. Preset Theme</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(Object.keys(PRESETS) as Array<'wellness' | 'agency' | 'studio'>).map((id) => (
                      <button
                        key={id}
                        onClick={() => handlePresetChange(id)}
                        className={`py-2 px-1 text-center rounded-lg text-[10px] font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          activePresetId === id
                            ? 'bg-white/15 text-white border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                            : 'bg-white/5 text-white/60 hover:text-white border border-transparent hover:bg-white/10'
                        }`}
                      >
                        {id === 'wellness' && <InfinityIcon size={12} />}
                        {id === 'agency' && <Cpu size={12} />}
                        {id === 'studio' && <Layers size={12} />}
                        <span>{id === 'wellness' ? 'Wellness' : id === 'agency' ? 'Agency' : 'Studio'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text customization */}
                <div className="space-y-3 pt-3 border-t border-white/5">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider font-bold">2. Custom Copy</span>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder={activePreset.headline}
                      value={customHeadline}
                      onChange={(e) => setCustomHeadline(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 focus:outline-none rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 transition-all font-medium"
                    />
                    <textarea
                      rows={2}
                      placeholder={activePreset.description}
                      value={customDescription}
                      onChange={(e) => setCustomDescription(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 focus:outline-none rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 transition-all font-medium resize-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Blur controller */}
                <div className="space-y-2 pt-3 border-t border-white/5">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider font-bold">3. Glass Blur Strength</span>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { name: '4px', value: 'blur-[4px]' },
                      { name: '8px', value: 'blur-[8px]' },
                      { name: '12px', value: 'blur-[12px]' },
                      { name: '16px', value: 'blur-[16px]' }
                    ].map((b) => (
                      <button
                        key={b.value}
                        onClick={() => setBlurIntensity(b.value)}
                        className={`py-1.5 rounded-md text-[10px] font-bold cursor-pointer transition-all ${
                          blurIntensity === b.value
                            ? 'bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/15'
                            : 'bg-white/5 text-white/65 hover:text-white hover:bg-white/10 border border-transparent'
                        }`}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resets */}
                <div className="flex gap-2 pt-3 border-t border-white/5">
                  <button 
                    onClick={handleReset}
                    className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-[10px] font-bold text-white/60 hover:text-white hover:bg-white/5 border border-white/10 transition-all cursor-pointer flex-1"
                  >
                    <RotateCcw size={10} />
                    <span>Reset Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down bouncy indicator */}
        <a 
          href="#contact" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300 animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold text-white/50">Book Consultation</span>
          <ChevronDown size={14} className="text-white" />
        </a>
      </section>

      {/* SECTION 4: GORGEOUS LIQUID GLASS CONTACT FORM */}
      <section 
        id="contact" 
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-12 py-24 sm:py-32 z-10 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto w-full select-text">
          {/* Layout Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Info Side */}
            <div className="md:col-span-5 text-center md:text-left">
              <div className="flex items-center gap-2 mb-3 bg-white/5 border border-white/10 w-fit px-3 py-1 rounded-full text-xs text-white/90 uppercase tracking-widest font-semibold backdrop-blur-md mx-auto md:mx-0">
                <Sparkles size={11} className="text-yellow-400" />
                <span>Get Started</span>
              </div>
              <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
                {activePreset.contactTitle}
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {activePreset.contactSubtitle}
              </p>
              
              {/* Features list */}
              <div className="mt-8 space-y-3.5 select-none hidden md:block">
                {[
                  'Bespoke liquid-glass design systems',
                  'Vite + React highly optimized static architecture',
                  'Custom-tailored interactive layout engineering'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white/70">
                    <div className="bg-white/10 p-1 rounded-full border border-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <Check size={10} />
                    </div>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Form Side */}
            <div className="md:col-span-7 select-none">
              <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/5 bg-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                {formStatus === 'success' ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                      <Check size={28} />
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-bold">Inquiry Dispatched!</h3>
                    <p className="text-white/65 text-xs sm:text-sm max-w-xs leading-relaxed font-semibold">
                      Our curators have received your details and will get in touch with you shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-4 text-xs text-white/50 hover:text-white underline cursor-pointer font-bold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 select-text">
                    <div className="space-y-1">
                      <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Your Identifier / Name</label>
                      <div className="relative flex items-center">
                        <User size={14} className="absolute left-3.5 text-white/40" />
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 focus:outline-none rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 transition-all font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Electronic Mail / Address</label>
                      <div className="relative flex items-center">
                        <Mail size={14} className="absolute left-3.5 text-white/40" />
                        <input
                          type="email"
                          required
                          placeholder="jane@example.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 focus:outline-none rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 transition-all font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Message Details</label>
                      <div className="relative flex">
                        <MessageSquare size={14} className="absolute left-3.5 top-3.5 text-white/40" />
                        <textarea
                          rows={4}
                          placeholder="Briefly describe what you would like us to build..."
                          value={formMsg}
                          onChange={(e) => setFormMsg(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 focus:outline-none rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 transition-all font-semibold resize-none leading-relaxed shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full bg-white text-black font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl hover:bg-white/95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.15)] disabled:opacity-50"
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Routing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>{activePreset.contactBtn}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <footer className="relative w-full z-10 py-8 px-6 text-center border-t border-white/5 select-text">
        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} {activePreset.logoText} Group. Engineered with Liquid-Glass Aesthetics.
        </p>
      </footer>

      {/* Floating Gear Button (Show/Hide Global Customizer Drawer) */}
      <button 
        onClick={() => setCustomizerOpen(!customizerOpen)}
        className="fixed bottom-6 right-6 z-40 liquid-glass text-white/90 p-3 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.35)] border border-white/20 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-md cursor-pointer"
        title="Customize Layout"
      >
        {customizerOpen ? <X size={20} /> : <Settings size={20} style={{ animation: 'spin 12s linear infinite' }} />}
      </button>

      {/* Liquid Glass Design Customizer Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[380px] max-w-[90vw] z-40 border-l border-white/10 flex flex-col justify-between transition-all duration-500 ${
          customizerOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{
          background: 'rgba(5, 5, 5, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '-10px 0 35px rgba(0, 0, 0, 0.45)'
        }}
      >
        {/* Customizer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-white/90">
              <Sparkles size={16} className="text-yellow-400 animate-spin-[spin_3s_linear_infinite]" />
              <h3 className="font-bold text-base tracking-tight text-white">Global Customizer</h3>
            </div>
            <p className="text-xs text-white/50 mt-1">Configure preset layouts across all sections</p>
          </div>
          <button 
            onClick={() => setCustomizerOpen(false)}
            className="text-white/60 hover:text-white cursor-pointer hover:bg-white/5 p-1.5 rounded-lg transition-all duration-300"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable controls */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {/* Preset templates selector */}
          <div className="space-y-2">
            <label className="text-xs text-white/50 uppercase tracking-widest font-bold">1. Select Preset Theme</label>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(PRESETS) as Array<'wellness' | 'agency' | 'studio'>).map((id) => (
                <button
                  key={id}
                  onClick={() => handlePresetChange(id)}
                  className={`py-2 px-1 text-center rounded-lg text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    activePresetId === id
                      ? 'bg-white/15 text-white border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                      : 'bg-white/5 text-white/60 hover:text-white border border-transparent hover:bg-white/10'
                  }`}
                >
                  <span className="scale-90 opacity-90">
                    {id === 'wellness' && <InfinityIcon size={14} />}
                    {id === 'agency' && <Cpu size={14} />}
                    {id === 'studio' && <Layers size={14} />}
                  </span>
                  <span>{id === 'wellness' ? 'Wellness' : id === 'agency' ? 'Agency' : 'Studio'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Headline & Description Inputs */}
          <div className="space-y-4 pt-1 border-t border-white/5">
            <label className="text-xs text-white/50 uppercase tracking-widest font-bold">2. Edit Copy (Real-Time)</label>
            
            <div className="space-y-1">
              <span className="text-[11px] text-white/60 font-semibold">Hero Title Text</span>
              <input
                type="text"
                placeholder={activePreset.headline}
                value={customHeadline}
                onChange={(e) => setCustomHeadline(e.target.value)}
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/40 focus:outline-none rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 transition-all font-medium"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-white/60 font-semibold">Hero Description</span>
              <textarea
                rows={3}
                placeholder={activePreset.description}
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/40 focus:outline-none rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 transition-all font-medium resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* Backdrop Blur Intensity */}
          <div className="space-y-2 pt-1 border-t border-white/5">
            <label className="text-xs text-white/50 uppercase tracking-widest font-bold">3. Glass Blur Intensity</label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { name: '4px', value: 'blur-[4px]' },
                { name: '8px', value: 'blur-[8px]' },
                { name: '12px', value: 'blur-[12px]' },
                { name: '16px', value: 'blur-[16px]' }
              ].map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBlurIntensity(b.value)}
                  className={`py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                    blurIntensity === b.value
                      ? 'bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/15'
                      : 'bg-white/5 text-white/65 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Color filter overlays */}
          <div className="space-y-2 pt-1 border-t border-white/5">
            <label className="text-xs text-white/50 uppercase tracking-widest font-bold">4. Ambient Glow Overlays</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Default (Muted)', value: '' },
                { label: 'Deep Indigo', value: 'theme-overlay-blue' },
                { label: 'Purple Nebula', value: 'theme-overlay-purple' },
                { label: 'Aurora Emerald', value: 'theme-overlay-emerald' },
                { label: 'Liquid Gold', value: 'theme-overlay-gold' }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setGlowOverride(opt.value)}
                  className={`py-2 px-2 text-[11px] text-left rounded-lg transition-all font-semibold flex items-center justify-between cursor-pointer ${
                    activeGlow === opt.value
                      ? 'bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/15'
                      : 'bg-white/5 text-white/65 hover:text-white border border-transparent hover:bg-white/10'
                  }`}
                >
                  <span>{opt.label}</span>
                  {activeGlow === opt.value && <Check size={11} className="text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Code Inspector */}
          <div className="pt-2 border-t border-white/5 space-y-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center justify-between w-full text-xs text-white/60 hover:text-white py-1 transition-all cursor-pointer font-semibold"
            >
              <div className="flex items-center gap-1.5">
                <Code size={13} />
                <span>Liquid Glass CSS Rules</span>
              </div>
              <ChevronDown size={13} className={`transition-transform duration-300 ${showCode ? 'rotate-180' : ''}`} />
            </button>

            {showCode && (
              <div className="bg-black/40 border border-white/5 rounded-lg p-3 text-[10px] font-mono text-white/80 overflow-x-auto max-h-[160px] leading-normal select-all">
                <pre>{`/* Copy these classes directly into your project */
.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px); /* Adjustable */
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content:'';
  position:absolute;
  inset:0;
  border-radius:inherit;
  padding:1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events:none;
}`}</pre>
              </div>
            )}
          </div>
        </div>

        {/* Customizer footer with resets */}
        <div className="p-6 border-t border-white/10 bg-black/10 flex gap-2">
          <button 
            onClick={handleReset}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 border border-white/10 transition-all cursor-pointer flex-1 duration-300"
          >
            <RotateCcw size={12} />
            <span>Reset Demo</span>
          </button>
          <button 
            onClick={() => setCustomizerOpen(false)}
            className="flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-white text-black hover:bg-white/90 active:scale-95 transition-all cursor-pointer flex-1 duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
          >
            Apply & Close
          </button>
        </div>
      </div>

      {/* Direct inline styling to dynamically override blur depth if slider is active */}
      <style>{`
        .liquid-glass {
          backdrop-filter: ${blurIntensity === 'blur-[4px]' ? 'blur(4px)' : blurIntensity === 'blur-[8px]' ? 'blur(8px)' : blurIntensity === 'blur-[12px]' ? 'blur(12px)' : 'blur(16px)'};
          -webkit-backdrop-filter: ${blurIntensity === 'blur-[4px]' ? 'blur(4px)' : blurIntensity === 'blur-[8px]' ? 'blur(8px)' : blurIntensity === 'blur-[12px]' ? 'blur(12px)' : 'blur(16px)'};
        }
      `}</style>
    </div>
  );
}
