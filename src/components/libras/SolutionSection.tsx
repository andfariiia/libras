"use client";

import React from "react";
import { Puzzle, Printer, BookOpen, Users } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Solution Header Card */}
        <div className="bg-gradient-to-br from-teal-950/60 via-slate-950 to-cyan-950/60 border border-teal-500/30 rounded-4xl p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto mb-16 relative overflow-hidden">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-cyan-500/30">
            <Puzzle className="w-8 h-8 font-black" />
          </div>
          <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">MÉTODO EXCLUSIVO</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-4 tracking-tight">
            A solução precisa ser prática, visual e possível hoje
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Não adianta tentar memorizar dicionários gigantes de Libras. As crianças aprendem através do estímulo visual, da repetição lúdica e do jogo em grupo.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Pillar 1 */}
          <div className="group bg-slate-950/80 rounded-3xl p-8 border border-slate-800 shadow-xl hover:border-teal-500/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-teal-950 border border-teal-500/30 text-teal-400 flex items-center justify-center text-3xl font-bold mb-6">
              🖨️
            </div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">PILAR 1</span>
            <h3 className="text-xl font-extrabold text-white mt-1 mb-3">
              PRONTO PARA IMPRIMIR E USAR
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Baixe, imprima e aplique. Tudo pensado para facilitar a comunicação em sala, em casa e nas atividades sem exigir preparação complexa.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group bg-slate-950/80 rounded-3xl p-8 border border-slate-800 shadow-xl hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-3xl font-bold mb-6">
              📋
            </div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">PILAR 2</span>
            <h3 className="text-xl font-extrabold text-white mt-1 mb-3">
              LIBRAS NA PRÁTICA
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cada jogo trabalha sinais, comunicação, atenção visual e inclusão de forma simples, contextualizada e divertida para fixar de verdade.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group bg-slate-950/80 rounded-3xl p-8 border border-slate-800 shadow-xl hover:border-indigo-500/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-indigo-950 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-3xl font-bold mb-6">
              👥
            </div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">PILAR 3</span>
            <h3 className="text-xl font-extrabold text-white mt-1 mb-3">
              VISUAL, LÚDICO E INCLUSIVO
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Atividades feitas para envolver crianças ouvintes e surdas lado a lado, promovendo empatia, participação ativa e acolhimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};