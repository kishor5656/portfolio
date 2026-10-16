import React from 'react';
import { Layout, Smartphone, Database, Wrench, Code2, Server } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return Layout;
      case 'Mobile & Backend':
        return Smartphone;
      case 'Database':
        return Database;
      case 'Tools':
        return Wrench;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/80 bg-surface-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Tooling
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            A breakdown of technologies and tools I utilize for client applications, mobile development, backend architectures, and database persistence.
          </p>
          <div className="w-12 h-1 bg-brand-500 rounded-full mt-2" />
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-surface-900/70 border border-slate-800/90 hover:border-slate-700/90 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-surface-950 border border-slate-800 text-brand-400 group-hover:border-brand-500/30 group-hover:text-brand-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-surface-950/80 border border-slate-800 hover:border-brand-500/40 hover:text-brand-300 transition-all duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400/70" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{group.skills.length} core competencies</span>
                  <span className="text-slate-400 group-hover:text-brand-400 transition-colors">Hands-on application</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
