"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const BONUSES = [
  {
    num: "BÔNUS 01",
    title: "Cartazes de Libras (Rotina & Combinados)",
    value: "R$ 29,90",
    desc: "Cartazes visuais com sinais de entrada, lanche, higiene, combinados de convivência e frases essenciais para parede.",
    icon: "🖼️",
  },
  {
    num: "BÔNUS 02",
    title: "Desafios de Comunicação em Libras",
    value: "R$ 34,90",
    desc: "Cartões de desafios diários para estimular a memória, expressão facial e rapidez de resposta com a turma.",
    icon: "🎯",
  },
  {
    num: "BÔNUS 03",
    title: "Dinâmicas Inclusivas em Grupo",
    value: "R$ 27,90",
    desc: "Guia com 10 dinâmicas de acolhimento para integrar alunos surdos e ouvintes desde o primeiro dia de aula.",
    icon: "🤝",
  },
  {
    num: "BÔNUS 04",
    title: "Cartazes de Sinais para Imprimir",
    value: "R$ 24,90",
    desc: "Coleção de posters decorativos em alta definição com alfabeto dactilológico e numerais em Libras.",
    icon: "📜",
  },
];

export const BonusSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-10 md:py-16 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Cyan Glow Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Tag */}
        <div className="inline-block text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
          — BÔNUS EXCLUSIVOS —
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 tracking-tight">
          Bônus do Combo Libras na Prática
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-slate-400 max-w-2xl mx-auto mb-8">
          Levando o Kit <strong className="text-amber-400">HOJE</strong>, você desbloqueia 4 materiais extras totalmente sem custo adicional:
        </p>

        {/* Grid 2x2 Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-8">
          {BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-5 sm:p-6 shadow-2xl relative transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-0.5 rounded-full">
                  {bonus.num}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 line-through">
                  Valor individual: {bonus.value}
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-xl flex items-center justify-center shrink-0 border border-slate-700">
                  {bonus.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 mb-1">
                    {bonus.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">
                    {bonus.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> INCLUSO GRATUITAMENTE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="bg-gradient-to-r from-cyan-900/60 to-teal-900/60 border border-cyan-500/30 rounded-2xl p-3.5 max-w-xl mx-auto flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">Economia total de Bônus:</span>
          <span className="font-mono font-bold text-amber-300 text-sm">R$ 117,60 de presente</span>
        </div>
      </div>
    </section>
  );
};