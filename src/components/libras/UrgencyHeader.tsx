"use client";

import React, { useState, useEffect } from "react";
import { Flame, ShoppingBag, CheckCircle, X, Sparkles } from "lucide-react";

const RECENT_SALES = [
  { name: "Márcia S.", city: "São Paulo - SP", time: "há 2 min" },
  { name: "Patricia K.", city: "Curitiba - PR", time: "há 4 min" },
  { name: "Juliana M.", city: "Belo Horizonte - MG", time: "há 1 min" },
  { name: "Fernanda R.", city: "Salvador - BA", time: "há 6 min" },
  { name: "Camila P.", city: "Campinas - SP", time: "agora mesmo" },
  { name: "Profa. Renata T.", city: "Porto Alegre - RS", time: "há 3 min" },
];

export const UrgencyHeader = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(582);
  const [currentSaleIndex, setCurrentSaleIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 582));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Initial popup after 3 seconds
    const initialTimeout = setTimeout(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 3000);

    // Repeat every 40 seconds (40000 ms)
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const sale = RECENT_SALES[currentSaleIndex];

  return (
    <>
      {/* Ultra-Modern Sticky Bar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl py-2.5 px-4 text-xs sm:text-sm font-medium transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center justify-center gap-2.5 w-full sm:w-auto text-center mx-auto sm:mx-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>

            <span className="text-slate-300 font-semibold tracking-wide text-[11px] sm:text-xs uppercase flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              Oferta Especial Expira Em:
            </span>

            <span className="bg-gradient-to-r from-cyan-950 to-teal-950 text-cyan-300 font-mono font-bold px-3 py-1 rounded-full border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)] tracking-widest text-xs">
              {formatTime(timeLeft)}
            </span>
          </div>

          <button
            onClick={onCtaClick}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold px-4 py-1.5 rounded-full text-xs transition-all hover:scale-105 shadow-md shadow-amber-500/20 cursor-pointer"
          >
            <span>71% OFF GARANTIDO</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Floating Live Purchase Toast Popup - Top Right with Right-to-Left Slide */}
      <div
        className={`fixed top-16 right-4 sm:right-6 z-50 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
          showToast
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-2xl text-white p-4 rounded-3xl shadow-2xl border border-cyan-500/40 flex items-center gap-3.5 glow-cyan">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30">
            <ShoppingBag className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs font-bold text-slate-100 truncate">
              {sale.name} <span className="font-normal text-slate-400">({sale.city})</span>
            </p>
            <p className="text-[11px] text-cyan-300 flex items-center gap-1 mt-0.5 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Comprou o Kit Libras na Prática
            </p>
            <span className="text-[10px] text-slate-400 font-mono">{sale.time}</span>
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