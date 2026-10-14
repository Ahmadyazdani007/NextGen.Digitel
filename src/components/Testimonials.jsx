import React, { useState } from 'react';
import { MessageSquare, Shield, Star, Users, CheckCircle, ArrowRight, HeartHandshake } from 'lucide-react';

export default function Testimonials({ onClientFeedbackClick }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', role: '', feedback: '', rating: 5 });

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeedbackOpen(false);
      setFormData({ name: '', company: '', role: '', feedback: '', rating: 5 });
    }, 2500);
  };

  const satisfactionStandards = [
    {
      title: "Weekly Sprint Demos",
      desc: "Live interactive walkthroughs at every development milestone so you never wait until launch to see progress."
    },
    {
      title: "Direct Code Access",
      desc: "Full transparency with direct repository access, automated CI/CD builds, and test coverage reports."
    },
    {
      title: "Milestone-Based Acceptance",
      desc: "Work is reviewed and signed off against predefined acceptance criteria before invoicing."
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-electric/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Client Collaboration & Trust
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Built on Authenticity & Accountability
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            We value genuine relationships and verified feedback. In accordance with our code of ethics, all reviews published on our platform are verified from real client engagements.
          </p>
        </div>

        {/* Client Trust Architecture Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-cyan" />
                <span className="text-xs font-mono text-cyan uppercase tracking-wider font-bold">
                  Authenticity Pledge
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
                No Fabricated Testimonials. No Invented Logos.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Many agencies showcase fabricated ratings or anonymous quotes. NextGen.Digitel stands for transparency: we maintain strict client privacy agreements and only publish verified, signed reviews once client engagements achieve production milestones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {satisfactionStandards.map((std, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-navy-950/60 border border-white/5">
                    <div className="text-xs font-mono text-cyan font-bold mb-1">{std.title}</div>
                    <p className="text-[11px] text-muted leading-relaxed">{std.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-navy-950/80 rounded-2xl border border-white/10 text-center">
              <HeartHandshake className="w-12 h-12 text-cyan mb-4" />
              <h4 className="text-lg font-bold text-white font-display mb-2">
                Are You an Active Client?
              </h4>
              <p className="text-xs text-muted mb-6 leading-relaxed">
                We invite all partnering founders and teams to share their honest project review and milestone assessment.
              </p>
              
              <button
                onClick={() => setFeedbackOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-sm transition-all"
              >
                <span>Submit Client Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="text-[10px] font-mono text-muted mt-3">
                Verified reviews appear on completion of project milestones
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Verified Review Submission Modal */}
      {feedbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Client Feedback Submission
            </h3>
            <p className="text-xs text-muted mb-5">
              Submit your project evaluation. All reviews undergo verification against our active client registry.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-cyan/10 border border-cyan/30 text-center">
                <CheckCircle className="w-10 h-10 text-cyan mx-auto mb-2" />
                <h4 className="text-base font-bold text-white">Review Received!</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Thank you for your feedback. Our team will verify and connect regarding your review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-muted block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs glass-input"
                    placeholder="e.g. Sarah Jenkins"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-muted block mb-1">Company / Project</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs glass-input"
                      placeholder="e.g. Nexus Dynamics"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted block mb-1">Your Role</label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs glass-input"
                      placeholder="e.g. Founder & CTO"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-muted block mb-1">Experience & Feedback</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs glass-input resize-none"
                    placeholder="Describe the collaboration, code quality, communication, and business results..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setFeedbackOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-navy-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-electric hover:bg-electric-light shadow-glow-sm"
                  >
                    Submit for Verification
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
