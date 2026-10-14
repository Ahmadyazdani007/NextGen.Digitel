import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  MessageCircle, 
  Phone, 
  CheckCircle, 
  Copy, 
  Download, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

export default function ContactSection({ initialScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Web Development',
    budget: '$5k - $15k',
    timeline: 'Standard (6 - 8 Weeks)',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // When scope is transferred from estimator or service modal
  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        service: initialScope.services ? initialScope.services[0] : (initialScope.title || prev.service),
        timeline: initialScope.timeline || prev.timeline,
        message: initialScope.stage ? `[Configured Scope: ${initialScope.stage} | Services: ${initialScope.services?.join(', ')}] ` : prev.message
      }));
    }
  }, [initialScope]);

  const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Graphic Design & Branding",
    "AI Solutions & Automation",
    "Custom Software Development",
    "Digital Marketing & SEO",
    "Video Editing & Motion Graphics",
    "DevOps & Cloud Solutions",
    "Quality Assurance & Testing",
    "E-commerce Development",
    "IT Consulting & Technical Support"
  ];

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $35,000",
    "$35,000 - $75,000",
    "$75,000+ Enterprise"
  ];

  const timelineOptions = [
    "Accelerated (3 - 4 Weeks)",
    "Standard (6 - 8 Weeks)",
    "Quarterly Roadmap (3+ Months)",
    "Ongoing Dedicated Team"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopyBrief = () => {
    const briefText = `
--- NEXTGEN.DIGITEL PROJECT INQUIRY ---
Client Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Phone: ${formData.phone || 'Not specified'}
Selected Service: ${formData.service}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
Project Overview: ${formData.message || 'No description provided.'}
Generated at: ${new Date().toLocaleString()}
----------------------------------------
    `.trim();

    navigator.clipboard.writeText(briefText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDownloadBrief = () => {
    const briefText = `
--- NEXTGEN.DIGITEL PROJECT INQUIRY ---
Client Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Phone: ${formData.phone || 'Not specified'}
Selected Service: ${formData.service}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
Project Overview: ${formData.message || 'No description provided.'}
Generated at: ${new Date().toLocaleString()}
----------------------------------------
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([briefText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `NextGen-Digitel-Project-Brief-${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-electric/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-violet/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
              Initiate Collaboration
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Let’s Build Something Powerful Together.
          </h2>
          <p className="text-base sm:text-lg text-muted mt-4 leading-relaxed">
            Have a project in mind, an existing product to scale, or need senior technical guidance? Send us your brief and our technical architects will get back to you within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Connect & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-card rounded-2xl p-7 border border-white/10">
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-muted mb-6">
                Prefer immediate messaging or direct email? Reach our project advisory leads directly.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:contact@nextgen-digitel.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-navy-950/60 border border-white/5 hover:border-electric/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric/15 flex items-center justify-center text-cyan group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">Direct Inquiries</span>
                    <span className="text-sm font-mono font-medium">contact@nextgen-digitel.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/?text=Hello%20NextGen.Digitel,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-navy-950/60 border border-white/5 hover:border-cyan/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/15 flex items-center justify-center text-cyan group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">Instant Messaging</span>
                    <span className="text-sm font-mono font-medium">Chat via WhatsApp</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-navy-950/60 border border-white/5 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-violet/15 flex items-center justify-center text-violet-light">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">Response SLA</span>
                    <span className="text-sm font-mono font-medium">&lt; 24 Business Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Commitment Card */}
            <div className="glass-card rounded-2xl p-7 border border-white/10">
              <div className="flex items-center gap-2 text-cyan font-mono text-xs font-bold uppercase mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Privacy & Project Promise</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
                  Mutual Non-Disclosure Agreement (NDA) signed upon request.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric"></span>
                  Direct consultation with senior architects, not commissioned reps.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet"></span>
                  Transparent milestone estimates with zero hidden fees.
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: "Let's Talk" Comprehensive Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-2xl bg-cyan/15 border border-cyan/40 text-cyan flex items-center justify-center mx-auto shadow-glow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Project Brief Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-cyan">{formData.name}</strong>. We have logged your inquiry regarding <span className="text-white font-medium">{formData.service}</span>. Our lead technical architect will review your parameters and follow up shortly.
                </p>

                {/* Brief Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 bg-navy-800 hover:text-white border border-white/10 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-cyan" />
                    <span>{copied ? "Brief Copied!" : "Copy Project Brief"}</span>
                  </button>

                  <button
                    onClick={handleDownloadBrief}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 bg-navy-800 hover:text-white border border-white/10 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan" />
                    <span>Download TXT Brief</span>
                  </button>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: 'Web Development',
                        budget: '$5k - $15k',
                        timeline: 'Standard (6 - 8 Weeks)',
                        message: ''
                      });
                    }}
                    className="text-xs font-mono text-cyan hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-white font-display">
                    Project Consultation Form
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    Please provide project details to receive an architectural scope outline.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                      Your Full Name <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                      Work Email Address <span className="text-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input"
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Technologies"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                    Primary Service of Interest <span className="text-cyan">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input bg-navy-950 text-white"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-navy-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                      Expected Budget Window
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input bg-navy-950 text-white"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-navy-900 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input bg-navy-950 text-white"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t} value={t} className="bg-navy-900 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-medium">
                    Project Overview & Goals <span className="text-cyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, current systems, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm glass-input resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      title="Copy current brief info"
                      className="p-2.5 rounded-xl bg-navy-800 text-muted hover:text-white border border-white/10 text-xs font-mono flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5 text-cyan" />
                      <span>{copied ? "Copied" : "Copy Brief"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadBrief}
                      title="Download brief text file"
                      className="p-2.5 rounded-xl bg-navy-800 text-muted hover:text-white border border-white/10 text-xs font-mono flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-cyan" />
                      <span>Download</span>
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-electric via-electric to-violet hover:from-electric-light hover:to-violet-light shadow-glow-md hover:shadow-glow-lg transition-all"
                  >
                    <span>{isSubmitting ? "Submitting Brief..." : "Submit Project Inquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
