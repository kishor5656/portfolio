import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-800/80 bg-surface-950 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            Undergraduate engineering education grounding software development with analytical and computing fundamentals.
          </p>
          <div className="w-12 h-1 bg-brand-500 rounded-full mt-2" />
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-3xl">
          <div className="p-6 sm:p-8 rounded-xl bg-surface-900/80 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-1">
                  Bachelor of Technology (B.Tech)
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {educationData.degree}
                </h3>
                <div className="text-base font-semibold text-slate-300">
                  {educationData.university}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{educationData.campus}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 bg-surface-950 border border-slate-800 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{educationData.period}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {educationData.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                <span>Key Competencies & Foundation</span>
              </div>
              <ul className="space-y-2">
                {educationData.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
