import React from 'react';
import { User, GraduationCap, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlightPoints = [
    {
      icon: Briefcase,
      title: "Current Engineering",
      subtitle: "Foxfennecs Technologies LLP",
      description: "Developing cross-platform applications with Flutter, Angular, and Spring Boot backend integration.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "B.Tech Electronics & Communication",
      description: "APJ Abdul Kalam Technological University, Kozhikode (2021 – 2024).",
    },
    {
      icon: CheckCircle2,
      title: "MERN Training",
      subtitle: "Techmaghi Internship",
      description: "Intensive training in MongoDB, Express.js, React.js, and Node.js with real-world project builds.",
    },
    {
      icon: MapPin,
      title: "Location & Availability",
      subtitle: "Kozhikode, Kerala, India",
      description: "Open to Flutter, Angular, and Full-Stack development roles.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/80 bg-surface-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-brand-500 rounded-full mt-2" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-5 sm:p-7 md:p-8 rounded-xl bg-surface-900/60 border border-slate-800 space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg break-words">
              <p>
                {personalInfo.aboutNarrative}
              </p>
            </div>

            {/* Core Values / Work Ethic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-surface-900/40 border border-slate-800/80">
                <h4 className="text-sm font-semibold text-slate-200 mb-1">
                  Clean Architecture
                </h4>
                <p className="text-xs text-slate-400">
                  Focus on modular component structure, state management, and reliable REST API contracts.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-900/40 border border-slate-800/80">
                <h4 className="text-sm font-semibold text-slate-200 mb-1">
                  Team Collaboration
                </h4>
                <p className="text-xs text-slate-400">
                  Active communicator leveraging Git/GitHub version control, code reviews, and modern tooling.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlightPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface-900/70 border border-slate-800/90 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </div>
                      <div className="text-sm font-semibold text-slate-200 mt-0.5">
                        {item.subtitle}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
