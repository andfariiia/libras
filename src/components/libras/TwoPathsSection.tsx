"use client";

import React from "react";
import { X, Check } from "lucide-react";

export const TwoPathsSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight uppercase">
          UMA DECISÃO, DOIS CAMINHOS DIFERENTES
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-14">
          A criança surda precisa se comunicar hoje. Você vai facilitar o processo ou continuar improvisando?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {/* Path 1: Without Kit */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-7 relative">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-black text-base mb-5">
              ✕
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              CAMINHO 1: O ciclo do improviso
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Tentando criar materiais sozinho do zero sem suporte estruturado.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Horas perdidas buscando imagens soltas no Google</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Criança isolada ou desinteressada durante as atividades</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Sensação constante de insegurança e falta de preparo</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Materiais feios, despadronizados e confusos</span>
              </li>
            </ul>
          </div>

          {/* Path 2: With Kit (Highlighted) */}
          <div className="bg-gradient-to-br from-teal-950/80 via-slate-900 to-cyan-950/80 border-2 border-cyan-400 rounded-3xl p-7 relative shadow-2xl shadow-cyan-500/20">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              RECOMENDADO
            </div>

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-400 to-cyan-300 text-slate-950 flex items-center justify-center font-black text-base mb-5 shadow-lg shadow-cyan-500/30">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              CAMINHO 2: A liberdade de incluir
            </h3>
            <p className="text-xs text-cyan-300 font-semibold mb-6">
              Com o Kit Libras na Prática completo pronto em mãos.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-100 font-medium">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 font-bold" />
                <span>Materiais em PDF de alta qualidade prontos para imprimir</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 font-bold" />
                <span>Crianças surdas e ouvintes engajadas aprendendo juntas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 font-bold" />
                <span>Segurança total e tranquilidade no planejamento da aula</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 font-bold" />
                <span>Jogos divertidos, testados e aprovados por +2.000 educadoras</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};