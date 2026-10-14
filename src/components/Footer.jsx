import React, { useState } from 'react';
import { Terminal, Send, ArrowUp, Github, Linkedin, Twitter, Dribbble, Check, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenService }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLinks = [
    { name: "Web Development", id: "web-development" },
    { name: "Mobile App Development", id: "mobile-app-development" },
    { name: "AI Solutions & Automation", id: "ai-solutions-automation" },
    { name: "UI/UX Design", id: "ui-ux-design" },
    { name: "Custom Software", id: "custom-software-development" },
    { name: "DevOps & Cloud Solutions", id: "devops-cloud-solutions" }
  ];

  return (
    <footer className="relative bg-navy-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-electric/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-800 border border-electric/40 flex items-center justify-center text-cyan shadow-glow-sm">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold font-display text-white">
                NextGen<span className="text-cyan">.</span><span className="text-electric">Digitel</span>
              </div>
            </div>

            <p className="text-xs font-mono text-cyan tracking-wider uppercase font-semibold">
              “Building Tomorrow. Digitally.”
            </p>

            <p className="text-xs text-muted leading-relaxed max-w-sm">
              A premium technology and digital solutions agency empowering businesses with custom software, AI automation, and high-performance digital presence.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://wa.me/96876209365?text=Hello%20NextGen.Digitel,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                aria-label="Chat on WhatsApp +968 7620 9365"
                title="WhatsApp: +968 7620 9365"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-muted hover:text-cyan transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-muted hover:text-cyan transition-colors">Services</a>
              </li>
              <li>
                <a href="#solutions" className="text-muted hover:text-cyan transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#work" className="text-muted hover:text-cyan transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#process" className="text-muted hover:text-cyan transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#about" className="text-muted hover:text-cyan transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-muted hover:text-cyan transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Links (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-2">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-muted hover:text-cyan transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Tech Dispatch (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-2">
              Technology Dispatch
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Periodic insights on modern web frameworks, AI integration, and cloud architecture patterns.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs glass-input pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-electric hover:bg-electric-light text-white transition-colors"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-cyan" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] font-mono text-cyan">Subscribed to insights!</div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            © {new Date().getFullYear()} NextGen.Digitel. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors">Clean Code Architecture</span>
            <span className="hover:text-slate-300 transition-colors">Privacy First</span>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-navy-900 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
