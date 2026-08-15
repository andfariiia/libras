"use client";

import React, { useState, useEffect } from "react";
import { Flame, ShoppingBag, CheckCircle, X, Sparkles, Clock } from "lucide-react";

const RECENT_SALES = [
  { name: "Márcia S.", city: "São Paulo - SP", time: "há 2 min" },
  { name: "Patricia K.", city: "Curitiba - PR", time: "há 4 min" },
  { name: "Juliana M.", city: "Belo Horizonte - MG", time: "há 1 min" },
  { name: "Fernanda R.", city: "Salvador - BA", time: "há 6 min" },
  { name: "Camila P.", city: "Campinas - SP", time: "agora mesmo" },
  { name: "Profa. Renata T.", city: "Porto Alegre - RS", time: "há 3 min" },
];

const TICKER_ITEMS = [
  "🔥 OFERTA ESPECIAL DE HOJE",
  "⚡ +240 JOGOS EM LIBRAS",
  "🎯 +100 DINÂMICAS EM LIBRAS",
  "🃏 UNO EM LIBRAS",
  "🎲 BINGO EM LIBRAS E MAIS...",
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const sale = RECENT_SALES[currentSaleIndex];

  return (
    <>
      {/* Red Modern High-Impact Sticky Top Bar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-red-950 via-slate-950 to-red-950 backdrop-blur-xl border-b border-red-500/40 shadow-[0_4px_25px_rgba(220,38,38,0.35)] py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          
          {/* Continuous Right-to-Left Ticker Bar */}
          <div className="relative w-full sm:w-auto flex-1 overflow-hidden py-0.5">
            <div className="animate-marquee-slow flex items-center whitespace-nowrap gap-6 text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wide">
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
                <span key={idx} className="flex items-center gap-2 shrink-0">
                  <span className="text-white font-extrabold">{item}</span>
                  <span className="text-red-400 font-bold">•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Timer & Action Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Timer Badge */}
            <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-mono font-black px-3 py-1 rounded-xl border border-red-300/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] tracking-widest text-xs sm:text-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black px-3.5 py-1 rounded-full text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-amber-500/25 cursor-pointer uppercase tracking-wider shrink-0"
            >
              <span>GARANTIR 71% OFF</span>
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>

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