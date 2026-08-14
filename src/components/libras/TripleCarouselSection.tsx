"use client";

import React from "react";
import { Sparkles, ArrowRight, PackageCheck, Puzzle, Gamepad2 } from "lucide-react";

interface CardItem {
  title: string;
  tag: string;
  image: string;
}

const ROW_1: CardItem[] = [
  {
    title: "Quebra-Cabeça do Alfabeto — Modelo 1",
    tag: "Alfabeto Libras",
    image: "https://i.ibb.co/Hf6Jkyx7/image.png",
  },
  {
    title: "Quebra-Cabeça do Alfabeto — Modelo 2",
    tag: "Alfabeto Libras",
    image: "https://i.ibb.co/XrCQhqTf/image.png",
  },
  {
    title: "Quebra-Cabeça do Alfabeto — Modelo 3",
    tag: "Alfabeto Libras",
    image: "https://i.ibb.co/N20JWvLD/image.png",
  },
  {
    title: "Quebra-Cabeça do Alfabeto — Modelo 4",
    tag: "Alfabeto Libras",
    image: "https://i.ibb.co/ym7fck6V/image.png",
  },
];

const ROW_2: CardItem[] = [
  {
    title: "Encaixa Frutas — Modelo 1",
    tag: "Frutas Libras",
    image: "https://i.ibb.co/6cvZK4fh/image.png",
  },
  {
    title: "Encaixa Frutas — Modelo 2",
    tag: "Frutas Libras",
    image: "https://i.ibb.co/gb4pJzL1/image.png",
  },
  {
    title: "Encaixa Frutas — Modelo 3",
    tag: "Frutas Libras",
    image: "https://i.ibb.co/vCMyBMPt/image.png",
  },
  {
    title: "Encaixa Frutas — Modelo 4",
    tag: "Frutas Libras",
    image: "https://i.ibb.co/3m4dRCqc/image.png",
  },
];

const ROW_3: CardItem[] = [
  {
    title: "Libras STOP — Modelo 1",
    tag: "Libras STOP",
    image: "https://i.ibb.co/39qZzBcZ/image.png",
  },
  {
    title: "Libras STOP — Modelo 2",
    tag: "Libras STOP",
    image: "https://i.ibb.co/8DBcgjZm/image.png",
  },
  {
    title: "Libras STOP — Modelo 3",
    tag: "Libras STOP",
    image: "https://i.ibb.co/Kpv7wfk1/image.png",
  },
  {
    title: "Libras STOP — Modelo 4",
    tag: "Libras STOP",
    image: "https://i.ibb.co/8n1c99zc/image.png",
  },
];

export const TripleCarouselSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-6 sm:py-10 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10 mb-6 sm:mb-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 shadow-lg shadow-cyan-500/10">
          <PackageCheck className="w-4 h-4 text-cyan-400" />
          <span>O QUE VOCÊ VAI RECEBER NO KIT COMPLETO</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2">
          + de 240 Atividades e Jogos em Libras
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-medium">
          Confira abaixo uma prévia dos materiais incríveis e prontos para imprimir que você terá acesso imediato:
        </p>
      </div>

      {/* THREE CAROUSELS CONTAINER */}
      <div className="space-y-6 sm:space-y-8 relative w-full overflow-hidden">
        
        {/* CAROUSEL 1 — MOVING LEFT */}
        <div>
          {/* Subtitle / Header above Carousel 1 */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-2 flex items-center justify-center gap-2">
            <Puzzle className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm sm:text-base font-black text-cyan-300 uppercase tracking-wide">
              Quebra-Cabeça do Alfabeto em Libras
            </h3>
          </div>

          <div className="relative w-full overflow-hidden py-1">
            <div className="animate-marquee-slow flex items-center gap-4 sm:gap-6">
              {[...ROW_1, ...ROW_1, ...ROW_1].map((item, idx) => (
                <div
                  key={idx}
                  className="w-56 sm:w-64 shrink-0 bg-slate-900/90 rounded-2xl p-3 border border-slate-800 text-left flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 shadow-xl group cursor-pointer"
                >
                  <div className="w-full aspect-[4/5] rounded-xl border border-slate-800 overflow-hidden bg-slate-950 mb-2 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs font-black text-white leading-snug truncate">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAROUSEL 2 — MOVING RIGHT (REVERSE) */}
        <div>
          {/* Subtitle / Header above Carousel 2 */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm sm:text-base font-black text-amber-300 uppercase tracking-wide">
              Encaixa Frutas em Libras
            </h3>
          </div>

          <div className="relative w-full overflow-hidden py-1">
            <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6">
              {[...ROW_2, ...ROW_2, ...ROW_2].map((item, idx) => (
                <div
                  key={idx}
                  className="w-56 sm:w-64 shrink-0 bg-slate-900/90 rounded-2xl p-3 border border-slate-800 text-left flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 shadow-xl group cursor-pointer"
                >
                  <div className="w-full aspect-[4/5] rounded-xl border border-slate-800 overflow-hidden bg-slate-950 mb-2 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs font-black text-white leading-snug truncate">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAROUSEL 3 — MOVING LEFT */}
        <div>
          {/* Subtitle / Header above Carousel 3 */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-2 flex items-center justify-center gap-2">
            <Gamepad2 className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm sm:text-base font-black text-emerald-300 uppercase tracking-wide">
              Libras STOP
            </h3>
          </div>

          <div className="relative w-full overflow-hidden py-1">
            <div className="animate-marquee-slow flex items-center gap-4 sm:gap-6">
              {[...ROW_3, ...ROW_3, ...ROW_3].map((item, idx) => (
                <div
                  key={idx}
                  className="w-56 sm:w-64 shrink-0 bg-slate-900/90 rounded-2xl p-3 border border-slate-800 text-left flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300 shadow-xl group cursor-pointer"
                >
                  <div className="w-full aspect-[4/5] rounded-xl border border-slate-800 overflow-hidden bg-slate-950 mb-2 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs font-black text-white leading-snug truncate">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM CTA BUTTON */}
      <div className="mt-8 sm:mt-10 text-center px-4 relative z-10">
        <button
          onClick={onCtaClick}
          className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-black text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 rounded-2xl shadow-2xl shadow-cyan-500/25 hover:scale-105 transition-all cursor-pointer uppercase tracking-wider"
        >
          <span>QUERO GARANTIR O KIT COMPLETO AGORA</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};