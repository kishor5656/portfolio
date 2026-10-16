import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-surface-950 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-brand-400">
                / {personalInfo.role}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Built with React, Vite & Tailwind CSS. Hosted for recruiters & engineering teams.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-surface-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface-900 text-slate-400 hover:text-brand-400 hover:bg-slate-800 border border-slate-800 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Calicut & Kozhikode, Kerala, India
          </div>
        </div>

      </div>
    </footer>
  );
}
