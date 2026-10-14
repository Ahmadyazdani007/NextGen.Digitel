import React, { useState } from 'react';
import { 
  Rocket, 
  ShoppingBag, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Utensils, 
  Building2, 
  Store,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { industriesData } from '../data/industriesData';

const industryIcons = {
  Rocket,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Utensils,
  Building2,
  Store
};

export default function Industries({ onInquireIndustry }) {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-violet/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Specialized Domain Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            Every sector has unique customer expectations and regulatory boundaries. We reject one-size-fits-all templates and tailor our architecture to your specific industry realities.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {industriesData.map((ind) => {
            const Icon = industryIcons[ind.icon] || Briefcase;
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`text-left p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between border relative group ${
                  isSelected
                    ? 'bg-navy-800/90 border-cyan shadow-glow-sm scale-[1.02]'
                    : 'bg-navy-900/40 border-white/5 hover:border-white/20 hover:bg-navy-800/50'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected ? 'bg-cyan/20 text-cyan border border-cyan/40' : 'bg-white/5 text-muted group-hover:text-white'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-cyan transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2">
                    {ind.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan">
                  <span>Explore Approach</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Tailored Approach Spotlight Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-electric/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-cyan uppercase tracking-wider font-bold">
                  Tailored Methodology Spotlight
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-mono text-muted">{selectedIndustry.name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                {selectedIndustry.tagline}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {selectedIndustry.description}
              </p>

              <div className="p-4 rounded-xl bg-navy-950/80 border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-cyan block font-mono text-xs uppercase mb-0.5">
                    Our Tailored Approach for {selectedIndustry.name}:
                  </strong>
                  {selectedIndustry.tailoredApproach}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-navy-950/60 rounded-2xl border border-white/5 text-center">
              <div className="text-sm font-semibold text-white mb-2 font-display">
                Operating in the {selectedIndustry.name} space?
              </div>
              <p className="text-xs text-muted mb-5">
                Let's discuss your regulatory needs, tech dependencies, and growth objectives.
              </p>
              <button
                onClick={() => onInquireIndustry(selectedIndustry)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-sm transition-all"
              >
                <span>Discuss {selectedIndustry.name} Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
