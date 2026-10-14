import React, { useState } from 'react';
import { ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import {
  Globe,
  Smartphone,
  Palette,
  Bot,
  Code2,
  TrendingUp,
  Film,
  Cloud,
  CheckCircle2,
  ShoppingCart,
  Headphones
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Palette,
  Sparkles,
  Bot,
  Code2,
  TrendingUp,
  Film,
  Cloud,
  CheckCircle2,
  ShoppingCart,
  Headphones
};

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Engineering', 'Design', 'AI & Data', 'Growth'];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-navy-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Comprehensive Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Tailored Digital & Technology Services
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            From architectural engineering to creative brand execution and intelligent automation, we build full-lifecycle digital solutions designed for performance and scale.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-electric text-white shadow-glow-sm border border-electric/50'
                    : 'bg-navy-800/60 text-muted hover:text-white hover:bg-navy-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm glass-input placeholder:text-muted/60"
            />
          </div>
        </div>

        {/* Services Grid (All 12 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top card accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/10 group-hover:border-electric/50 flex items-center justify-center text-cyan shadow-sm transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Business Value Highlight */}
                  <div className="p-3 rounded-lg bg-navy-950/70 border border-white/5 mb-5">
                    <span className="text-[11px] font-mono text-cyan block mb-0.5 font-semibold">
                      BUSINESS IMPACT
                    </span>
                    <p className="text-xs text-slate-400 leading-snug">
                      {service.businessValue}
                    </p>
                  </div>
                </div>

                {/* Footer of Card: Tech Stack Tags & Learn More Button */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-muted">
                        +{service.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-electric/20 hover:text-white border border-white/10 hover:border-electric/40 transition-all duration-200 group/btn"
                  >
                    <span>Learn More & Scope</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-navy-900/50 rounded-2xl border border-white/5">
            <p className="text-muted text-base">No services match your search keyword.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-mono text-cyan hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
