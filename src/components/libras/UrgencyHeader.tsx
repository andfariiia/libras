"use client";

import React, { useState, useEffect } from "react";
import { Flame, ShoppingBag, CheckCircle, X } from "lucide-react";

const RECENT_SALES = [
  { name: "Márcia S.", city: "São Paulo - SP", time: "há 2 min" },
  { name: "Patricia K.", city: "Curitiba - PR", time: "há 4 min" },
  { name: "Juliana M.", city: "Belo Horizonte - MG", time: "há 1 min" },
  { name: "Fernanda R.", city: "Salvador - BA", time: "há 6 min" },
  { name: "Camila P.", city: "Campinas - SP", time: "agora mesmo" },
  { name: "Profa. Renata T.", city: "Porto Alegre - RS", time: "há 3 min" },
];

export const UrgencyHeader = ({ onCtaClick }: { onCtaClick: () => void }) => {
  // Countdown state starting at 9 minutes 42 seconds (582 seconds)
  const [timeLeft, setTimeLeft] = useState(582);
  const [currentSaleIndex, setCurrentSaleIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 582));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Cycle purchase notification toast every 8 seconds
  useEffect(() => {
    const toastTimer = setInterval(() => {
      setShowToast(true);
      setCurrentSaleIndex((prev) => (prev + 1) % RECENT_SALES.length);

      // Hide toast after 4.5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4500);
    }, 9000);

    // Initial delay trigger
    const initialTimeout = setTimeout(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4500);
    }, 2000);

    return () => {
      clearInterval(toastTimer);
      clearTimeout(initialTimeout);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const sale = RECENT_SALES[currentSaleIndex];

  return (
    <>
      {/* Sticky Urgency Topbar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white shadow-md py-2.5 px-4 text-xs sm:text-sm font-semibold">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-2 w-full text-center sm:w-auto">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
            <Flame className="w-4 h-4 text-amber-300 animate-bounce hidden xs:inline" />
            <span>OFERTA COM DESCONTO EXPIRA EM:</span>
            <span className="bg-black/30 text-amber-300 font-mono font-bold px-2.5 py-0.5 rounded-md border border-amber-300/30 tracking-wider">
              [{formatTime(timeLeft)}]
            </span>
          </div>

          <button
            onClick={onCtaClick}
            className="hidden md:flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-3.5 py-1 rounded-full text-xs transition-transform hover:scale-105 shadow-sm"
          >
            Aproveitar 71% OFF ➔
          </button>
        </div>
      </header>

      {/* Floating Live Purchase Toast Popup */}
      <div
        className={`fixed bottom-4 right-4 z-50 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
          showToast ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl border border-teal-500/30 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shrink-0 shadow-inner">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs font-bold text-slate-100 truncate">
              {sale.name} <span className="font-normal text-slate-400">({sale.city})</span>
            </p>
            <p className="text-[11px] text-teal-300 flex items-center gap-1 mt-0.5">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              Comprou o Kit Libras na Prática
            </p>
            <span className="text-[10px] text-slate-400 font-mono">{sale.time}</span>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-slate-400 hover:text-slate-200 p-1"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};