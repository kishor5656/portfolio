import React, { useState } from 'react';
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Terminal,
  Circle,
  Code2,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('config');

  const codeSnippet = `// nanda_kishor.config.ts
export const developer = {
  name: "Nanda Kishor V M",
  role: "Flutter & Angular Developer",
  location: "Kozhikode, Kerala",
  currentRole: "Foxfennecs Technologies LLP",
  technologies: [
    "Flutter & Dart",
    "Angular & TypeScript",
    "Spring Boot & Java",
    "MERN Stack (MongoDB, Express, React, Node)"
  ],
  education: "B.Tech Electronics and Communication",
  status: "Open to opportunities in Flutter, Angular & Full-Stack",
  contact: "${personalInfo.email}"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const supportingTech = [
    "Flutter",
    "Angular",
    "Spring Boot",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "JavaScript",
    "Dart",
    "HTML/CSS",
    "Git",
    "GitHub"
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[400px] h-[250px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, CTAs & Socials */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-900 border border-slate-800 text-xs font-mono text-slate-300 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="leading-snug truncate sm:text-clip">Seeking Opportunities in Flutter & Full-Stack</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans break-words">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-brand-400 font-mono tracking-tight break-words">
                {personalInfo.role}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-brand-400 hover:bg-brand-300 shadow-md shadow-brand-500/20 transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Nanda_Kishor_VM_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-surface-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-brand-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Small Social Links */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-surface-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-colors"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Developer-Style Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-800 bg-surface-900/90 shadow-2xl shadow-black/40 overflow-hidden glow-border">
              
              {/* Window Header / Tab Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-surface-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-brand-400" />
                    nanda_kishor.config.ts
                  </span>
                </div>

                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 transition-colors"
                  title="Copy code"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                <div className="text-slate-400 mb-2">// Developer Profile Config</div>
                <div className="text-slate-200">
                  <span className="text-sky-400">export const</span>{' '}
                  <span className="text-indigo-300">developer</span> = &#123;
                </div>
                
                <div className="pl-4 space-y-1 my-1">
                  <div>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">title:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.role}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">workplace:</span>{' '}
                    <span className="text-amber-300">"Foxfennecs Technologies LLP"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">degree:</span>{' '}
                    <span className="text-slate-300">"B.Tech Electronics & Comm."</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">stack:</span> [
                    <div className="pl-4 text-brand-300 space-y-0.5">
                      <div>"Flutter & Dart",</div>
                      <div>"Angular & TypeScript",</div>
                      <div>"Spring Boot",</div>
                      <div>"MERN (MongoDB, Express, React, Node)"</div>
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-slate-300">"Kozhikode, Kerala"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">availableForHire:</span>{' '}
                    <span className="text-purple-400">true</span>
                  </div>
                </div>

                <div className="text-slate-200">&#125;;</div>

                {/* Footer status line inside code window */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Active Developer Environment</span>
                  </span>
                  <span className="text-slate-400">UTF-8 • TypeScript</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Supporting Technologies Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-800/60">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
            Core Technologies & Tooling
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {supportingTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-surface-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-brand-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
