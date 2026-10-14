import React from 'react';
import { ArrowRight, ChevronRight, Zap, ShieldCheck, TrendingUp, Layers, CheckCircle } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero({ onExploreServices, onStartProject }) {
  const valueProps = [
    {
      title: "Innovation That Delivers",
      desc: "Purposeful technology designed to solve real business challenges, not chase fleeting trends.",
      icon: Zap,
      accent: "text-cyan",
      bg: "bg-cyan/10 border-cyan/20"
    },
    {
      title: "Technology Built Around You",
      desc: "Custom-tailored digital architectures aligned with your specific workflows, team, and goals.",
      icon: Layers,
      accent: "text-electric",
      bg: "bg-electric/10 border-electric/20"
    },
    {
      title: "Solutions Designed to Scale",
      desc: "Engineered from day one for speed, security, and effortless expansion as your business grows.",
      icon: TrendingUp,
      accent: "text-violet",
      bg: "bg-violet/10 border-violet/20"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-electric/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 backdrop-blur-md shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-slate-200">
                Next-Gen Digital & Technology Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 font-display">
              <span className="text-white">We Turn Digital Ideas Into </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-violet">
                Powerful Solutions.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mb-8">
              From intelligent automation and custom software to creative design and digital marketing, we help businesses innovate, grow, and stay ahead in a digital-first world.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-electric via-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-md hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-slate-200 bg-navy-800/80 hover:bg-navy-800 hover:text-white border border-white/10 hover:border-electric/40 transition-all duration-300 backdrop-blur-md shadow-sm"
              >
                <span>Start a Project</span>
                <ChevronRight className="w-4 h-4 text-cyan" />
              </button>
            </div>

            {/* Credibility & Approach notes (Honest & direct, without fake badges) */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan" />
                <span>Modern Cloud Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-electric" />
                <span>Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-violet" />
                <span>Full Source Code Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Abstract Tech Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-electric/30 via-violet/20 to-transparent border border-white/10 shadow-2xl overflow-hidden glass-card">
              <div className="relative rounded-xl overflow-hidden bg-navy-950/80 aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center">
                <HeroCanvas />
              </div>
            </div>
          </div>

        </div>

        {/* Three Value Propositions Grid */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col items-start relative group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${prop.bg}`}>
                  <Icon className={`w-6 h-6 ${prop.accent}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-cyan transition-colors">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
