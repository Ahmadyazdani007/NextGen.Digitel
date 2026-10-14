import React, { useState } from 'react';
import { 
  portfolioCategories, 
  portfolioProjects 
} from '../data/portfolioData';
import { ArrowUpRight, Code, Eye, Sparkles, Terminal, Smartphone, Layout, Palette, Bot, TrendingUp } from 'lucide-react';

export default function Portfolio({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter);

  // Helper to render abstract futuristic tech mockups per card
  const renderMockup = (project) => {
    switch (project.mockupType) {
      case 'dashboard':
        return (
          <div className="w-full h-full bg-navy-950 p-4 font-mono text-[10px] text-muted flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-400 ml-2">nexusflow_cluster.ts</span>
              </div>
              <span className="text-cyan">99.98% Healthy</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-navy-900 border border-white/5">
                <div className="text-[9px] text-slate-400">INGESTION</div>
                <div className="text-sm font-bold text-white mt-1">1.8M req/s</div>
              </div>
              <div className="p-2 rounded bg-navy-900 border border-white/5">
                <div className="text-[9px] text-slate-400">LATENCY</div>
                <div className="text-sm font-bold text-cyan mt-1">11.4 ms</div>
              </div>
              <div className="p-2 rounded bg-navy-900 border border-white/5">
                <div className="text-[9px] text-slate-400">ERROR RATE</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">0.001%</div>
              </div>
            </div>
            <div className="h-10 bg-navy-900/60 rounded flex items-end p-1 gap-1">
              {[40, 65, 30, 85, 95, 60, 75, 90, 45, 80, 70, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-electric to-cyan rounded-t" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        );

      case 'mobile':
        return (
          <div className="w-full h-full bg-navy-950 p-4 flex items-center justify-center select-none">
            <div className="w-48 bg-navy-900 rounded-2xl border border-white/10 p-3 shadow-xl">
              <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mb-2"></div>
              <div className="text-[9px] font-mono text-cyan">AuraPay Vault</div>
              <div className="text-base font-bold text-white mt-0.5">$24,850.40</div>
              <div className="flex gap-1 mt-2">
                <div className="flex-1 py-1 rounded bg-electric text-[9px] font-mono text-center text-white">Send</div>
                <div className="flex-1 py-1 rounded bg-navy-800 text-[9px] font-mono text-center text-slate-300">Request</div>
              </div>
              <div className="mt-2 space-y-1">
                <div className="h-4 bg-navy-950 rounded flex items-center px-1 text-[8px] text-slate-400 justify-between">
                  <span>Cloud API sync</span>
                  <span className="text-emerald-400">Done</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'design':
        return (
          <div className="w-full h-full bg-navy-950 p-4 font-mono select-none flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] text-muted border-b border-white/10 pb-2">
              <span className="text-violet-light font-bold">Lumina Token Engine</span>
              <span>140 Components</span>
            </div>
            <div className="grid grid-cols-4 gap-2 my-2">
              <div className="h-10 rounded bg-[#4263FF] flex items-center justify-center text-[9px] text-white font-bold">#4263FF</div>
              <div className="h-10 rounded bg-[#8B5CF6] flex items-center justify-center text-[9px] text-white font-bold">#8B5CF6</div>
              <div className="h-10 rounded bg-[#22D3EE] flex items-center justify-center text-[9px] text-navy-950 font-bold">#22D3EE</div>
              <div className="h-10 rounded bg-[#10172A] border border-white/10 flex items-center justify-center text-[9px] text-slate-300 font-bold">#10172A</div>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Button.Primary</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Input.Glass</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Modal.Base</span>
            </div>
          </div>
        );

      case 'branding':
        return (
          <div className="w-full h-full bg-gradient-to-br from-navy-900 to-navy-950 p-6 flex flex-col items-center justify-center text-center select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
            <div className="w-14 h-14 rounded-2xl bg-navy-800 border-2 border-electric flex items-center justify-center shadow-glow-sm mb-3">
              <span className="text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet">VG</span>
            </div>
            <div className="text-sm font-bold font-display text-white tracking-widest uppercase">VANGUARD</div>
            <div className="text-[9px] font-mono text-cyan tracking-wider mt-0.5">ROBOTICS & AUTONOMOUS SYSTEMS</div>
          </div>
        );

      case 'ai':
        return (
          <div className="w-full h-full bg-navy-950 p-4 font-mono text-[10px] select-none flex flex-col justify-between">
            <div className="flex items-center justify-between text-muted border-b border-white/10 pb-2">
              <span className="text-cyan flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
                Synthex AI Pipeline
              </span>
              <span className="text-slate-400">Vector Cosine: 0.94</span>
            </div>
            <div className="space-y-1.5 my-2">
              <div className="p-1.5 rounded bg-navy-900 text-slate-300 text-[9px]">
                &gt; Query: "Optimize multi-tenant PostgreSQL indices"
              </div>
              <div className="p-1.5 rounded bg-electric/15 border border-electric/30 text-cyan text-[9px]">
                &gt; Embeddings: 4 chunks retrieved (DocID #442)
              </div>
            </div>
            <div className="text-[9px] text-emerald-400 flex items-center gap-1">
              <span>● Response generated in 240ms</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-navy-950 p-4 font-mono select-none flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] text-muted border-b border-white/10 pb-2">
              <span className="text-cyan">Apex Organic Search Cluster</span>
              <span className="text-emerald-400">+142% Target Growth</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2 text-[9px]">
              <div className="p-2 bg-navy-900 rounded">
                <span className="text-muted block">Indexed URLs</span>
                <span className="text-sm font-bold text-white">4,280</span>
              </div>
              <div className="p-2 bg-navy-900 rounded">
                <span className="text-muted block">Core Web Vitals</span>
                <span className="text-sm font-bold text-cyan">98 / 100</span>
              </div>
            </div>
            <div className="text-[9px] text-slate-400">Schema.org JSON-LD Structured Entity Graph</div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Project Showcase & Engineering Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Proof of Craft & Technical Capability
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            Explore our architectural implementations across web platforms, mobile applications, design systems, and intelligent workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-electric text-white shadow-glow-sm border border-electric/50'
                  : 'bg-navy-800/60 text-muted hover:text-white hover:bg-navy-800 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-electric/40 transition-all duration-300"
            >
              {/* Card Visual / Mockup Preview */}
              <div className="relative aspect-[16/10] bg-navy-950 border-b border-white/10 overflow-hidden">
                {renderMockup(project)}
                
                {/* Category & Demo tag floating badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-900/90 text-cyan border border-white/10 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet/20 text-violet-light border border-violet/30 backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1 py-0.5 rounded text-muted">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Project Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-navy-800/80 hover:bg-electric hover:shadow-glow-sm border border-white/10 transition-all duration-200 group/btn"
                  >
                    <span>View Case Study Architecture</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Transparency Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-navy-950/70 border border-white/5 text-center max-w-2xl mx-auto">
          <p className="text-xs text-muted font-mono leading-relaxed">
            <span className="text-cyan font-bold">Authenticity Guarantee: </span>
            All case studies above are designated as concept demonstrations to illustrate architecture patterns. We never publish unauthorized client names, fabricated metrics, or fictitious case studies.
          </p>
        </div>

      </div>
    </section>
  );
}
