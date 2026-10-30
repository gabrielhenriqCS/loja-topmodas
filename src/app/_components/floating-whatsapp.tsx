"use client";

import { useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { X } from "lucide-react";

const WHATSAPP_URL = "https://wa.link/qwls2e";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Balão de Notificação / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 rounded-2xl bg-white p-3 pr-2 text-xs shadow-2xl border border-rose-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <p className="font-bold text-gray-900">Precisa de ajuda com algum look?</p>
            <p className="text-gray-500 text-[11px]">Fale agora com a nossa equipe!</p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-1"
            aria-label="Fechar balão"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Botão Flutuante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar conosco no WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition-transform duration-300 hover:scale-110 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Ping Pulsante */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

        <WhatsappLogo size={32} weight="fill" className="relative z-10" />
      </a>
    </div>
  );
}
