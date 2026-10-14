import React from 'react';
import { X, ExternalLink, Check, Code, Layers, ShieldCheck, Terminal, AlertCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose, onStartSimilar }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-navy-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Glow Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric via-cyan to-violet"></div>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-mono text-cyan bg-cyan/10 px-2.5 py-0.5 rounded border border-cyan/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-violet-light bg-violet/10 px-2.5 py-0.5 rounded border border-violet/20 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {project.type}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h2>
            <p className="text-sm text-cyan font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-muted hover:text-white bg-navy-800 border border-white/5 hover:border-white/20 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Transparency Disclaimer Notice */}
          <div className="p-4 rounded-xl bg-navy-950/80 border border-white/10 flex items-start gap-3">
            <Terminal className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
            <div className="text-xs text-muted leading-relaxed">
              <strong className="text-slate-200">Demonstration Architecture Notice: </strong>
              In alignment with our strict commitment to truthfulness and transparency, this project showcases our architectural benchmarks and engineering design standards.
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono text-cyan uppercase tracking-wider mb-2 font-bold">
              Project Architecture & Overview
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-navy-950/60 border border-white/5">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                The Engineering Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-navy-950/60 border border-electric/20">
              <h4 className="text-xs font-mono text-cyan uppercase tracking-wider mb-2 font-bold">
                Our Solution & Execution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div>
            <h3 className="text-xs font-mono text-cyan uppercase tracking-wider mb-3 font-bold">
              Key Technical Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-navy-950/40 border border-white/5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-2 font-bold">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-navy-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted font-mono">
            Want to build a solution with similar architecture?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-navy-800 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartSimilar(project);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-sm transition-all w-full sm:w-auto"
            >
              <span>Discuss Similar Architecture</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
