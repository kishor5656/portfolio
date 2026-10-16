import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 20);

      // Top of page check
      if (scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Bottom of page check (ensures Contact activates when user reaches footer)
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Viewport-based section spy
      const sections = navItems.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-slate-100 hover:text-brand-400 transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-surface-900 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-brand-400 group-hover:border-brand-500/60 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all">
              NK
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight leading-none text-slate-200">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 leading-tight">
                {personalInfo.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-900/60 p-1.5 rounded-full border border-slate-800/80">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-500/15 text-brand-400 border border-brand-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download CV CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nanda_Kishor_VM_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-surface-900 hover:bg-slate-800 border border-slate-700 hover:border-brand-500/40 hover:text-brand-400 transition-all duration-200"
              aria-label="Download Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-brand-400" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 focus:outline-none border border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-5 mt-3 space-y-1 shadow-2xl animate-fade-in">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-400 border-b border-slate-800/80 mb-2">
            <Code2 className="w-3.5 h-3.5 text-brand-400" />
            <span>Navigation Menu</span>
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-500/15 text-brand-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800/80 mt-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nanda_Kishor_VM_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-slate-100 bg-surface-900 border border-slate-700 hover:border-brand-500/50 hover:text-brand-300 transition-colors"
            >
              <FileDown className="w-4 h-4 text-brand-400" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
