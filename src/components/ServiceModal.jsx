import React from 'react';
import { X, Check, ArrowRight, Sparkles, Layers, ShieldCheck, Terminal } from 'lucide-react';
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

export default function ServiceModal({ service, onClose, onInquire }) {
  if (!service) return null;

  const Icon = iconMap[service.icon] || Code2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl bg-navy-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Header Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric via-cyan to-violet"></div>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-cyan shadow-glow-sm flex-shrink-0">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-cyan uppercase tracking-wider bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                  {service.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {service.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                {service.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-muted hover:text-white bg-navy-800 border border-white/5 hover:border-white/20 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Executive Overview */}
          <div>
            <h3 className="text-sm font-mono text-cyan uppercase tracking-wider mb-2">Service Overview</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {service.description}
            </p>
          </div>

          {/* Business Value */}
          <div className="p-4 rounded-xl bg-navy-800/80 border border-electric/20 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-cyan font-bold uppercase tracking-wider">Business Impact & ROI</div>
              <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                {service.businessValue}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Scope */}
          <div>
            <h3 className="text-sm font-mono text-cyan uppercase tracking-wider mb-3">Key Capabilities & Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-navy-950/60 border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-electric/20 border border-electric/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">Deliverables</h3>
              <p className="text-xs text-slate-300 bg-navy-950/60 p-3 rounded-lg border border-white/5 leading-relaxed">
                {service.deliverables}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-navy-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted font-mono text-center sm:text-left">
            Need this service customized for your company roadmap?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-navy-800 hover:bg-navy-700 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(service);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-sm transition-all w-full sm:w-auto"
            >
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
