"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, Sparkles, CheckCircle2 } from "lucide-react";

export const AudioMessageCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(18); // Simulated progress %

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden my-8 max-w-2xl mx-auto">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-left">
        {/* Avatar with Sound Indicator */}
        <div className="relative shrink-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
            alt="Aline Fernandes"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-cyan-400"
          />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
            </span>
          )}
        </div>

        {/* Info & Simulated Player */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Recado em Áudio da Profa. Aline
            </span>
            <span className="text-[11px] font-mono text-slate-400">0:48s</span>
          </div>

          <p className="text-xs text-slate-300 font-medium mb-3 truncate">
            "Olá! Deixa eu te contar rapidamente por que criei esse kit..."
          </p>

          {/* Audio Wave Bar Controls */}
          <div className="flex items-center gap-3 bg-slate-950/80 p-2.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-300 text-slate-950 flex items-center justify-center font-bold hover:scale-105 transition-transform shrink-0 cursor-pointer shadow-md"
              aria-label={isPlaying ? "Pausar" : "Tocar"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
            </button>

            {/* Sound Wave Bars */}
            <div className="flex-1 flex items-center gap-1 h-6 px-1">
              {[40, 70, 30, 85, 50, 95, 60, 30, 75, 45, 90, 65, 35, 80, 50, 100, 40, 70, 85, 45, 60].map((barHeight, i) => {
                const isActive = (i / 21) * 100 <= progress;
                return (
                  <div
                    key={i}
                    style={{ height: `${barHeight}%` }}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-cyan-400" : "bg-slate-800"
                    } ${isPlaying && isActive ? "animate-pulse" : ""}`}
                  />
                );
              })}
            </div>

            <Volume2 className="w-4 h-4 text-slate-400 shrink-0 hidden xs:block" />
          </div>
        </div>
      </div>
    </div>
  );
};