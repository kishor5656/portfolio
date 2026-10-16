import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Maximize2,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectMockup from './ProjectMockup';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80 bg-surface-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Production web applications, cross-platform Flutter mobile systems, and full-stack enterprise solutions.
            </p>
            <div className="w-12 h-1 bg-brand-500 rounded-full mt-2" />
          </div>

          <div className="text-xs font-mono text-slate-400">
            Showing all 6 featured builds
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl bg-surface-900/80 border border-slate-800/90 hover:border-slate-700 overflow-hidden shadow-lg shadow-black/20 hover:shadow-brand-500/5 transition-all duration-300 group"
            >
              {/* Project Preview Screenshot / Mockup */}
              <div className="relative">
                <ProjectMockup theme={project.previewTheme} title={project.title} />

                {/* Inspect Modal Overlay Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-surface-950/80 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  title="Expand project details"
                  aria-label={`Expand details for ${project.title}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                
                {/* Header: Category Badge & Project Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-xs font-mono text-slate-300 bg-surface-950 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60 flex-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Features
                  </div>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-[11px] font-mono text-slate-400 pl-5">
                        + {project.features.length - 3} more architectural capabilities
                      </li>
                    )}
                  </ul>
                </div>

                {/* Card Actions: GitHub, Live Demo & Details */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {/* GitHub Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-surface-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
                      title="GitHub Repository Placeholder"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>Code</span>
                    </a>

                    {/* Live Demo Button where applicable */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-brand-400 hover:bg-brand-300 transition-colors"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 px-2 py-1 bg-surface-950/60 rounded border border-slate-800/60">
                        Demo N/A
                      </span>
                    )}
                  </div>

                  {/* Expand Modal Trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed deep dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
