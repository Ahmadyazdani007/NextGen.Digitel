import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AboutUs({ onGetInTouch }) {
  const pillars = [
    {
      title: "Our Mission",
      subtitle: "Purposeful Engineering",
      icon: Target,
      desc: "To empower organizations with modern digital systems, scalable software, and high-impact design that transform complex operational friction into streamlined digital growth.",
      accent: "text-cyan",
      bg: "bg-cyan/10 border-cyan/20"
    },
    {
      title: "Our Vision",
      subtitle: "Building Tomorrow. Digitally.",
      icon: Compass,
      desc: "To be a globally trusted technology partner renowned for technical precision, uncompromising transparency, and creating digital products that stand the test of time.",
      accent: "text-electric",
      bg: "bg-electric/10 border-electric/20"
    },
    {
      title: "Our Working Philosophy",
      subtitle: "Honesty & Craft First",
      icon: HeartHandshake,
      desc: "We prioritize durable code over superficial quick fixes, collaborative partnerships over transactional vendor handoffs, and measurable client results over industry buzzwords.",
      accent: "text-violet",
      bg: "bg-violet/10 border-violet/20"
    }
  ];

  const philosophyPoints = [
    "Clean, documented codebases designed for maintainability and transferability",
    "Continuous alignment through weekly sprint reviews and live preview links",
    "Pragmatic technology choices based on business requirements, not hype cycles",
    "Direct communication channels between clients and technical executors"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-950/60">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              About NextGen.Digitel
            </span>
          </div>
          
          {/* Exact Prompt Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Technology With Purpose.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-violet">
              Digital Experiences With Impact.
            </span>
          </h2>

          {/* Exact Prompt Description */}
          <p className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed max-w-2xl">
            NextGen.Digitel brings together technology, design, and digital strategy to help businesses solve problems and create better digital experiences. Our focus is on understanding each client’s goals and delivering practical, scalable solutions that support long-term growth.
          </p>
        </div>

        {/* Mission, Vision, Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group border border-white/10"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${pillar.bg} group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-7 h-7 ${pillar.accent}`} />
                  </div>
                  
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted mb-1">
                    {pillar.subtitle}
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-cyan transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Working Principles Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-bold block mb-2">
                Our Engineering Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
                Built on Rigor, Transparency, and Respect for Your Time
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We believe exceptional digital products are created through disciplined collaboration, open source standards, and meticulous quality assurance.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {philosophyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{point}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
