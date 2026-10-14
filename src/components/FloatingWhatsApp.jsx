import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = "+968 7620 9365";
  const whatsappUrl = "https://wa.me/96876209365?text=Hello%20NextGen.Digitel,%20I%20would%20like%20to%20discuss%20a%20new%20project.";

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Small popover banner (dismissible or hover) */}
      {showTooltip && (
        <div className="relative glass-panel bg-navy-900/95 border border-emerald-500/30 rounded-2xl p-3.5 shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-muted hover:text-white p-1 rounded-full transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
              Available on WhatsApp
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-snug pr-4">
            Have a project in mind? Chat directly with our engineering team:
          </p>

          <div className="mt-2 text-xs font-mono font-semibold text-white">
            {phoneNumber}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp +968 7620 9365"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10 pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Floating Tooltip for Mobile / hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-navy-900 border border-emerald-500/30 text-xs font-mono font-medium text-white shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          Chat on WhatsApp: {phoneNumber}
        </span>
      </a>
    </aside>
  );
}
