"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const MobileBottomBar = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/30 p-3.5 shadow-[0_-10px_25px_rgba(0,0,0,0.5)] transition-all">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> 71% OFF HOJE
          </div>
          <div className="text-lg font-black text-amber-300 leading-none mt-0.5">
            R$ 27,90
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform flex items-center justify-center gap-1.5 uppercase tracking-wide cursor-pointer"
        >
          <span>QUERO O KIT</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};