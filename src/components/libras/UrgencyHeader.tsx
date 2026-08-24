"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, CheckCircle, X } from "lucide-react";

const RECENT_SALES = [
  { name: "Márcia S.", city: "São Paulo - SP", time: "há 2 min" },
  { name: "Patricia K.", city: "Curitiba - PR", time: "há 4 min" },
  { name: "Juliana M.", city: "Belo Horizonte - MG", time: "há 1 min" },
  { name: "Fernanda R.", city: "Salvador - BA", time: "há 6 min" },
  { name: "Camila P.", city: "Campinas - SP", time: "agora mesmo" },
  { name: "Profa. Renata T.", city: "Porto Alegre - RS", time: "há 3 min" },
];

export const UrgencyHeader = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const [currentSaleIndex, setCurrentSaleIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [currentDateString, setCurrentDateString] = useState("");

  useEffect(() => {
    // Pega a data exata em tempo real do dispositivo do visitante no momento do acesso
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2);
    
    setCurrentDateString(`${day}/${month}/${year}`);

    const initialTimeout = setTimeout(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 3000);

    const toastTimer = setInterval(() => {
      setCurrentSaleIndex((prev) => (prev + 1) % RECENT_SALES.length);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 40000);

    return () => {
      clearInterval(toastTimer);
      clearTimeout(initialTimeout);
    };
  }, []);

  const sale = RECENT_SALES[currentSaleIndex];

  return (
    <>
      {/* Red Solid Static Header Top Bar */}
      <header
        onClick={onCtaClick}
        className="sticky top-0 z-50 bg-red-600 text-white shadow-md py-2.5 px-4 cursor-pointer text-center select-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="text-xs sm:text-sm md:text-base font-black tracking-wide uppercase">
            🔥 Ofertas válidas somente na data de hoje {currentDateString || "hoje"}!
          </p>
        </div>
      </header>

      {/* Floating Live Purchase Toast Popup - Top Right */}
      <div
        className={`fixed top-16 right-4 sm:right-6 z-50 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
          showToast
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-2xl text-white p-4 rounded-3xl shadow-2xl border border-red-500/40 flex items-center gap-3.5 shadow-red-500/20">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-400 flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30">
            <ShoppingBag className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs sm:text-sm font-bold text-slate-100 truncate">
              {sale.name} <span className="font-normal text-slate-400">({sale.city})</span>
            </p>
            <p className="text-xs text-amber-300 flex items-center gap-1 mt-0.5 font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Comprou o Kit Libras na Prática
            </p>
            <span className="text-[11px] text-slate-400 font-mono">{sale.time}</span>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-slate-400 hover:text-slate-200 p-1.5 rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};