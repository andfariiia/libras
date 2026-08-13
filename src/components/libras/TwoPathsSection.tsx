"use client";

import React from "react";
import { X, Check, ArrowRight } from "lucide-react";

export const TwoPathsSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
          UMA DECISÃO, DOIS CAMINHOS DIFERENTES
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          A criança surda precisa se comunicar hoje. Você vai facilitar o processo ou continuar improvisando?
        </p>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {/* Path 1: Without Kit */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 relative">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg mb-4">
              ✕
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              CAMINHO 1: O ciclo do improviso
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Tentando criar materiais sozinho do zero sem suporte estruturado.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Horas perdidas buscando imagens soltas no Google</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Criança isolada ou desinteressada durante as atividades</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Sensação constante de insegurança e falta de preparo</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Materiais feios, despadronizados e confusos</span>
              </li>
            </ul>
          </div>

          {/* Path 2: With Kit (Highlighted) */}
          <div className="bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-emerald-500/10 border-2 border-teal-500 rounded-3xl p-6 sm:p-8 relative shadow-xl">
            <div className="absolute -top-3 right-6 bg-teal-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider shadow-sm">
              RECOMENDADO
            </div>

            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
              ✓
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              CAMINHO 2: A liberdade de incluir
            </h3>
            <p className="text-xs text-teal-800 font-semibold mb-6">
              Com o Kit Libras na Prática completo pronto em mãos.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 font-bold" />
                <span>Materiais em PDF de alta qualidade prontos para imprimir</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 font-bold" />
                <span>Crianças surdas e ouvintes engajadas aprendendo juntas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 font-bold" />
                <span>Segurança total e tranquilidade no planejamento da aula</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 font-bold" />
                <span>Jogos divertidos, testados e aprovados por +2.000 educadoras</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};