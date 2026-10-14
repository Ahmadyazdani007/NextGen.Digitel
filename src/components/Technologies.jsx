import React, { useState } from 'react';
import { Cpu, Terminal, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { techCategories } from '../data/techData';

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="technologies" className="py-24 relative overflow-hidden bg-navy-950/60">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-cyan/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Core Tech Stack & Ecosystems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Technologies We Work With
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            We intentionally specialize in a battle-tested, high-performance modern stack to guarantee dependable speed, security, and long-term maintainability.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {techCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-electric to-violet text-white shadow-glow-sm border border-electric/50'
                  : 'bg-navy-800/60 text-muted hover:text-white hover:bg-navy-800 border border-white/5'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Selected Technology Category Deep-Dive Box */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-cyan uppercase tracking-wider">Domain Stack</span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-mono text-muted">{techCategories[activeTab].skills.length} Supported Technologies</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                {techCategories[activeTab].category} Engineering
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              {techCategories[activeTab].description}
            </p>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techCategories[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-navy-900/60 border border-white/5 hover:border-electric/40 transition-all group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white font-display group-hover:text-cyan transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Fully supported in production deployments</span>
            </div>
            <div className="text-slate-400">
              Need custom integrations? We evaluate architecture compatibility during Discovery.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
