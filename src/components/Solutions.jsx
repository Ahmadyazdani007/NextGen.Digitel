import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';

export default function Solutions({ onSelectSolution }) {
  const [selectedSolution, setSelectedSolution] = useState(solutionsData[0]);

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-violet/30 mb-4 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-violet" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Packaged Delivery Models
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Strategic Solutions Built for Growth
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            Pre-architected delivery models designed to accelerate time-to-value while ensuring high engineering standards and long-term maintainability.
          </p>
        </div>

        {/* Interactive Solutions Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Solution Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {solutionsData.map((sol) => {
              const isSelected = selectedSolution.id === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setSelectedSolution(sol)}
                  className={`text-left p-5 rounded-2xl transition-all duration-200 border relative ${
                    isSelected
                      ? 'bg-navy-800/90 border-electric shadow-glow-sm'
                      : 'bg-navy-900/40 border-white/5 hover:border-white/10 hover:bg-navy-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-cyan uppercase tracking-wider font-semibold">
                      {sol.badge}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
                    )}
                  </div>
                  <h3 className={`text-lg font-bold font-display ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {sol.title}
                  </h3>
                  <p className="text-xs text-muted mt-1 line-clamp-2">
                    {sol.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Solution Deep-Dive Preview Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan bg-cyan/10 border border-cyan/30">
                {selectedSolution.badge}
              </span>
              <span className="text-xs font-mono text-muted">Full Lifecycle Scope</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
              {selectedSolution.title}
            </h3>

            <p className="text-base text-cyan font-mono mb-4">
              {selectedSolution.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedSolution.description}
            </p>

            {/* Scope inclusions */}
            <div className="mb-8">
              <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
                Included Deliverables & Strategy
              </h4>
              <div className="space-y-2.5">
                {selectedSolution.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience note & CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-muted uppercase block">Ideal For:</span>
                <span className="text-xs text-slate-300 font-medium">{selectedSolution.idealFor}</span>
              </div>

              <button
                onClick={() => onSelectSolution(selectedSolution)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-sm transition-all"
              >
                <span>Request Scope Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
