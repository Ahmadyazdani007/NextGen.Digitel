import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, Sliders, Layers } from 'lucide-react';

export default function ProjectEstimator({ onTransferToContact }) {
  const [selectedServices, setSelectedServices] = useState(['Web Development']);
  const [projectStage, setProjectStage] = useState('mvp');
  const [timeline, setTimeline] = useState('standard');

  const availableServices = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "AI Solutions & Automation",
    "Custom Software",
    "DevOps & Cloud",
    "Branding & Graphics",
    "E-commerce",
    "SEO & Marketing",
    "QA & Testing"
  ];

  const stages = [
    { id: 'mvp', title: 'Prototype / MVP', desc: 'Core feature validation, rapid deployment' },
    { id: 'growth', title: 'Product Scale / Redesign', desc: 'Enhanced architecture, new feature sets' },
    { id: 'enterprise', title: 'Full Enterprise System', desc: 'High concurrency, multi-service, 99.9% uptime' }
  ];

  const timelines = [
    { id: 'rush', label: 'Accelerated (3 - 4 Weeks)', desc: 'Fast-track engineering delivery' },
    { id: 'standard', label: 'Standard (6 - 8 Weeks)', desc: 'Balanced discovery & sprint cycle' },
    { id: 'flexible', label: 'Quarterly Roadmap (3+ Months)', desc: 'Phased multi-milestone release' }
  ];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleApplyToForm = () => {
    const brief = {
      services: selectedServices,
      stage: stages.find((s) => s.id === projectStage)?.title || 'MVP',
      timeline: timelines.find((t) => t.id === timeline)?.label || 'Standard'
    };
    onTransferToContact(brief);
  };

  return (
    <section id="estimator" className="py-20 relative overflow-hidden bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-cyan/30 mb-4 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Interactive Project Scope Planner
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Plan Your Digital Scope & Timeline
          </h2>
          <p className="text-base text-muted mt-3 leading-relaxed">
            Configure your technical requirements to generate an instant scope blueprint and transfer it directly to our engineering team.
          </p>
        </div>

        {/* Estimator Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step 1 & 2 Config */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Step 1: Services */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider font-bold">
                    Step 1: Select Required Services ({selectedServices.length} Selected)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableServices.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`p-3 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between border ${
                          isSelected
                            ? 'bg-electric/20 border-electric text-white shadow-sm'
                            : 'bg-navy-900/50 border-white/5 text-slate-400 hover:text-white hover:bg-navy-900'
                        }`}
                      >
                        <span className="truncate">{srv}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-cyan flex-shrink-0 ml-1.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Project Stage */}
              <div>
                <span className="text-xs font-mono text-cyan uppercase tracking-wider font-bold block mb-3">
                  Step 2: Project Maturity & Scale
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {stages.map((stg) => {
                    const isSelected = projectStage === stg.id;
                    return (
                      <button
                        key={stg.id}
                        onClick={() => setProjectStage(stg.id)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          isSelected
                            ? 'bg-navy-800 border-cyan shadow-sm text-white'
                            : 'bg-navy-900/50 border-white/5 text-slate-400 hover:border-white/10'
                        }`}
                      >
                        <div className="text-xs font-bold font-display text-white mb-1">
                          {stg.title}
                        </div>
                        <p className="text-[11px] text-muted leading-tight">
                          {stg.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Delivery Timeline */}
              <div>
                <span className="text-xs font-mono text-cyan uppercase tracking-wider font-bold block mb-3">
                  Step 3: Target Launch Window
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timelines.map((tml) => {
                    const isSelected = timeline === tml.id;
                    return (
                      <button
                        key={tml.id}
                        onClick={() => setTimeline(tml.id)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          isSelected
                            ? 'bg-navy-800 border-violet text-white shadow-sm'
                            : 'bg-navy-900/50 border-white/5 text-slate-400 hover:border-white/10'
                        }`}
                      >
                        <div className="text-xs font-bold font-display text-white mb-1">
                          {tml.label}
                        </div>
                        <p className="text-[11px] text-muted leading-tight">
                          {tml.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Live Summary Sidebar */}
            <div className="lg:col-span-4 bg-navy-950/80 p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                  <Sparkles className="w-4 h-4 text-cyan" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Project Scope Blueprint
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-muted block text-[11px]">Selected Capabilities:</span>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {selectedServices.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-electric/20 text-slate-200 text-[10px] border border-electric/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-muted block text-[11px]">Project Phase:</span>
                    <span className="text-cyan font-bold block mt-0.5">
                      {stages.find((s) => s.id === projectStage)?.title}
                    </span>
                  </div>

                  <div>
                    <span className="text-muted block text-[11px]">Timeline Model:</span>
                    <span className="text-violet-light font-bold block mt-0.5">
                      {timelines.find((t) => t.id === timeline)?.label}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 font-sans leading-relaxed">
                    Includes dedicated tech lead, weekly demo sprints, CI/CD setup, and complete source code repository handover.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={handleApplyToForm}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-sm transition-all"
                >
                  <span>Apply Scope to Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
