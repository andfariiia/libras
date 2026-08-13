"use client";

import React from "react";
import { Puzzle, Printer, BookOpen, Users, CheckCircle } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Highlight Card Solution Header */}
        <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 border border-teal-200/80 rounded-3xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto mb-14">
          <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
            <Puzzle className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">MÉTODO EXCLUSIVO</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
            A solução precisa ser prática, visual e possível hoje
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Não adianta tentar memorizar dicionários gigantes de Libras. As crianças aprendem através do estímulo visual, da repetição lúdica e do jogo em grupo.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Pillar 1 */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-2xl font-bold mb-6">
              🖨️
            </div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">PILAR 1</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
              PRONTO PARA IMPRIMIR E USAR
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Baixe, imprima e aplique. Tudo pensado para facilitar a comunicação em sala, em casa e nas atividades sem exigir preparação complexa.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center text-2xl font-bold mb-6">
              📋
            </div>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">PILAR 2</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
              LIBRAS NA PRÁTICA
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cada jogo trabalha sinais, comunicação, atenção visual e inclusão de forma simples, contextualizada e divertida para fixa de verdade.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl font-bold mb-6">
              👥
            </div>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">PILAR 3</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
              VISUAL, LÚDICO E INCLUSIVO
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Atividades feitas para envolver crianças ouvintes e surdas lado a lado, promovendo empatia, participação ativa e acolhimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};