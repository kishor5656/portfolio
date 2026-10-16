import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-800/80 bg-surface-950 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Internships
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            Professional software development and engineering internships focused on web, mobile, and backend integrations.
          </p>
          <div className="w-12 h-1 bg-brand-500 rounded-full mt-2" />
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-8 before:w-0.5 before:bg-slate-800 before:hidden sm:before:block">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="relative sm:pl-16 group"
            >
              {/* Timeline marker */}
              <div
                className={`hidden sm:flex absolute left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full border-2 items-center justify-center bg-surface-950 ${
                  exp.isCurrent
                    ? 'border-brand-400 text-brand-400'
                    : 'border-slate-700 text-slate-500'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    exp.isCurrent ? 'bg-brand-400 animate-ping' : 'bg-slate-600'
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div
                className={`p-5 sm:p-8 rounded-xl border transition-all duration-200 ${
                  exp.isCurrent
                    ? 'bg-surface-900/80 border-slate-700 shadow-xl shadow-brand-500/5 hover:border-brand-500/40'
                    : 'bg-surface-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Header: Title, Company, Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Current Role
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-800/60 border border-slate-700/60">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-300 mt-1 flex-wrap">
                      <span className="font-semibold text-brand-400">
                        {exp.company}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-slate-300 bg-surface-950 border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">
                    Environment:
                  </span>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-xs font-mono text-slate-300 bg-surface-950 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
