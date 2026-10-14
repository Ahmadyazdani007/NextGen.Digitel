import React, { useState } from 'react';
import { Compass, FileCode2, Hammer, Rocket, Check, ArrowRight } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      name: "Discover",
      icon: Compass,
      headline: "Understanding Goals, Audience & Challenges",
      description: "We begin by conducting thorough discovery sessions with your stakeholders to define exact business objectives, customer pain points, competitor landscapes, and technical requirements.",
      deliverables: [
        "Project brief & objective definition",
        "Target audience & user journey mapping",
        "Technical constraints & feasibility review",
        "Core feature priorities matrix"
      ],
      phaseTime: "Week 1 - 2"
    },
    {
      num: "02",
      name: "Strategize",
      icon: FileCode2,
      headline: "Scope, Technology Selection & Architecture",
      description: "We define precise technical specifications, choose the most durable frameworks (React, Next.js, Node.js, Python), architect data models, and set clear milestone roadmaps.",
      deliverables: [
        "Comprehensive architectural blueprint",
        "Interactive wireframes & visual mood boards",
        "Technology stack & infrastructure plan",
        "Sprint schedule & transparent milestone milestones"
      ],
      phaseTime: "Week 2 - 3"
    },
    {
      num: "03",
      name: "Build & Create",
      icon: Hammer,
      headline: "Collaborative Design, Development & Rigorous Testing",
      description: "Our multidisciplinary team crafts pixel-perfect interfaces in Figma while engineers build modular, secure code. We run weekly sprint demos and automated QA testing to ensure zero defects.",
      deliverables: [
        "Production-grade frontend & backend code",
        "Weekly preview deployments for feedback",
        "Automated regression & cross-browser QA tests",
        "Complete API & codebase documentation"
      ],
      phaseTime: "Week 3 - 6"
    },
    {
      num: "04",
      name: "Launch & Improve",
      icon: Rocket,
      headline: "Deployment, Telemetry & Iterative Growth",
      description: "We execute zero-downtime production deployments to cloud infrastructure, configure real-time monitoring, and continuously evaluate performance telemetry to uncover optimization opportunities.",
      deliverables: [
        "Production deployment & SSL/DNS setup",
        "24/7 uptime & error telemetry dashboards",
        "Full source code and credential handover",
        "Post-launch optimization & support roadmap"
      ],
      phaseTime: "Ongoing / Scale"
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Methodology & Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            How We Bring Digital Solutions to Life
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            A structured, collaborative four-step process built to eliminate ambiguity, ship on schedule, and deliver lasting results.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Navigation (hidden on small screens) */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-navy-800 -translate-y-1/2 z-0">
              <div 
                className="h-full bg-gradient-to-r from-electric via-cyan to-violet transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {/* Step Nodes */}
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-200`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-electric text-white shadow-glow-md border-2 border-white scale-110'
                        : isPast
                        ? 'bg-navy-800 text-cyan border border-cyan/40'
                        : 'bg-navy-900 text-muted border border-white/10 group-hover:border-white/30'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-mono font-bold mt-3 uppercase tracking-wider ${isActive ? 'text-cyan' : 'text-muted'}`}>
                    Step {step.num}: {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Card (Desktop) */}
        <div className="hidden lg:block glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            <div className="col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">
                  {steps[activeStep].num}
                </span>
                <span className="text-sm font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-md border border-cyan/20">
                  {steps[activeStep].name} Stage
                </span>
                <span className="text-xs font-mono text-muted ml-auto">
                  Est. Window: {steps[activeStep].phaseTime}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display mb-3">
                {steps[activeStep].headline}
              </h3>

              <p className="text-slate-300 leading-relaxed text-base mb-6">
                {steps[activeStep].description}
              </p>

              <div className="flex items-center gap-4">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-muted hover:text-white bg-navy-800 border border-white/5"
                  >
                    ← Previous Step
                  </button>
                )}
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono text-white bg-electric hover:bg-electric-light shadow-glow-sm flex items-center gap-1.5"
                  >
                    <span>Next: Step {steps[activeStep + 1].num}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="col-span-5 bg-navy-950/70 p-6 rounded-2xl border border-white/5">
              <h4 className="text-xs font-mono text-cyan uppercase tracking-wider mb-4 font-semibold">
                Core Deliverables
              </h4>
              <div className="space-y-3">
                {steps[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-cyan" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Vertical Timeline (visible on mobile/tablet) */}
        <div className="lg:hidden flex flex-col gap-6 relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-navy-800"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-electric/40 flex items-center justify-center text-cyan flex-shrink-0 z-10 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="glass-card rounded-2xl p-6 flex-1 border border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan uppercase font-bold">
                      Step {step.num}: {step.name}
                    </span>
                    <span className="text-[10px] font-mono text-muted">
                      {step.phaseTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {step.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/5">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted">
                        <Check className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
