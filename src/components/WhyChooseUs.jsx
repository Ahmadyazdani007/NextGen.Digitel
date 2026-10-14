import React from 'react';
import { 
  Users, 
  Cpu, 
  MessageSquare, 
  Maximize2, 
  Layers, 
  Target, 
  Handshake, 
  Check, 
  Code2,
  GitBranch
} from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      title: "Client-Focused Solutions",
      desc: "Every architectural choice and design asset is crafted around your real business operational requirements, never force-fit into generic templates.",
      icon: Users,
      badge: "Tailored Focus"
    },
    {
      title: "Modern Technology & Tools",
      desc: "We build with proven modern ecosystems—React, Next.js, Node.js, Python, and cloud-native services that ensure speed, maintainability, and long lifespan.",
      icon: Cpu,
      badge: "Modern Stack"
    },
    {
      title: "Clear Communication",
      desc: "Direct communication with engineers and designers, structured weekly progress updates, transparent deliverables, and zero technical obfuscation.",
      icon: MessageSquare,
      badge: "Transparency"
    },
    {
      title: "Scalable & Maintainable Development",
      desc: "Modular architectures, clean codebases, complete documentation, and automated tests designed so your software stays easy to extend as you scale.",
      icon: Maximize2,
      badge: "Engineered to Last"
    },
    {
      title: "Creative & Technical Expertise",
      desc: "A multidisciplinary team bridging high-end visual design, brand strategy, and resilient backend systems under one cohesive delivery process.",
      icon: Layers,
      badge: "Full Spectrum"
    },
    {
      title: "Focus on Measurable Business Objectives",
      desc: "We measure success by tangible outcomes: conversion improvements, workflow automation hours saved, reliable system uptime, and user adoption.",
      icon: Target,
      badge: "Outcome Driven"
    },
    {
      title: "Collaborative Project Delivery",
      desc: "We work as a transparent extension of your internal team with shared milestone repositories, sprint reviews, and iterative feedback loops.",
      icon: Handshake,
      badge: "True Partnership"
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-navy-950/60">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-electric/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              The NextGen.Digitel Standard
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Your Vision. Our Technology.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-violet">
              One Powerful Partnership.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted mt-5 leading-relaxed">
            We partner with businesses to engineer digital products that combine design precision with resilient software engineering.
          </p>
        </div>

        {/* 7 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            // The 7th item spans across center or highlighted nicely
            const isWide = idx === 6;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden ${
                  isWide ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/90 border-electric/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-cyan shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan uppercase tracking-wider bg-cyan/10 px-2.5 py-1 rounded border border-cyan/20">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-cyan transition-colors">
                    {adv.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                {isWide && (
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-xs text-muted font-mono">
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Check className="w-4 h-4 text-cyan" /> Continuous Integration
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Check className="w-4 h-4 text-electric" /> Sprint Demos
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Check className="w-4 h-4 text-violet" /> Complete Documentation
                      </span>
                    </div>
                    <div className="text-xs font-mono text-cyan">
                      Built for sustainable long-term scale →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
