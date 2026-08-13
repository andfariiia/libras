"use client";

import React from "react";
import { Puzzle } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-10 md:py-16 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Solution Header Card */}
        <div className="bg-gradient-to-br from-teal-950/60 via-slate-950 to-cyan-950/60 border border-teal-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto mb-10 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/30">
            <Puzzle className="w-7 h-7 font-black" />
          </div>
          <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">MÉTODO EXCLUSIVO</span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1 mb-3 tracking-tight">
            A solução precisa ser prática, visual e possível hoje
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Não adianta tentar memorizar dicionários gigantes de Libras. As crianças aprendem através do estímulo visual, da repetição lúdica e do jogo em grupo.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Pillar 1 */}
          <div className="group bg-slate-950/80 rounded-3xl p-6 border border-slate-800 shadow-xl hover:border-teal-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-teal-950 border border-teal-500/30 text-teal-400 flex items-center justify-center text-2xl font-bold mb-4">
              🖨️
            </div>
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">PILAR 1</span>
            <h3 className="text-lg font-extrabold text-white mt-0.5 mb-2">
              PRONTO PARA IMPRIMIR E USAR
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Baixe, imprima e aplique. Tudo pensado para facilitar a comunicação em sala, em casa e nas atividades sem exigir preparação complexa.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group bg-slate-950/80 rounded-3xl p-6 border border-slate-800 shadow-xl hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-2xl font-bold mb-4">
              📋
            </div>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">PILAR 2</span>
            <h3 className="text-lg font-extrabold text-white mt-0.5 mb-2">
              LIBRAS NA PRÁTICA
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cada jogo trabalha sinais, comunicação, atenção visual e inclusão de forma simples, contextualizada e divertida para fixar de verdade.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group bg-slate-950/80 rounded-3xl p-6 border border-slate-800 shadow-xl hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-indigo-950 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-2xl font-bold mb-4">
              👥
            </div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">PILAR 3</span>
            <h3 className="text-lg font-extrabold text-white mt-0.5 mb-2">
              VISUAL, LÚDICO E INCLUSIVO
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atividades feitas para envolver crianças ouvintes e surdas lado a lado, promovendo empatia, participação ativa e acolhimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};