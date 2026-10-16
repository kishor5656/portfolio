import React, { useEffect } from 'react';
import { X, Printer, Download, FileText, CheckCircle2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, experienceData, skillsData, projectsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono font-semibold text-slate-200">
              Curriculum Vitae — {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-surface-900 border border-slate-700 hover:border-slate-500 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Friendly Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 print:p-0 print:m-0 selection:bg-slate-200 selection:text-slate-900">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-800 pb-5 mb-5">
            <h1 id="resume-title" className="text-3xl font-extrabold tracking-tight text-slate-950">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-sky-800 mt-0.5">
              {personalInfo.role}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 mt-3 font-sans">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.phoneFormatted}
              </span>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sky-700 hover:underline"
              >
                <span>linkedin.com/in/nandakishorvm</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personalInfo.shortIntro}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {skillsData.map((group, idx) => (
                <div key={idx}>
                  <strong className="text-slate-900">{group.category}:</strong>{' '}
                  {group.skills.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3 font-mono">
              Work Experience & Internships
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{exp.role}</span>
                      <span className="text-slate-700"> — {exp.company}, {exp.location}</span>
                    </div>
                    <span className="font-mono text-slate-600 font-medium">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3 font-mono">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 4).map((proj) => (
                <div key={proj.id} className="text-xs text-slate-700 space-y-0.5">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="font-mono font-normal text-slate-500">{proj.techStack.join(' • ')}</span>
                  </div>
                  <p className="text-slate-600">{proj.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-700">
              <div>
                <span className="font-bold text-slate-900">{educationData.degree}</span>
                <div>{educationData.university}, {educationData.campus}</div>
              </div>
              <span className="font-mono text-slate-600 font-medium">{educationData.period}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Recruiter-ready ATS resume view</span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors"
          >
            Save as PDF / Print
          </button>
        </div>

      </div>
    </div>
  );
}
