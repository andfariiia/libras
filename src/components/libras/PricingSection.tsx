"use client";

import React from "react";
import { Check, ShieldCheck, Zap, Lock, Sparkles, Star } from "lucide-react";

export const PricingSection = ({ onSelectPlan }: { onSelectPlan: (planName: string) => void }) => {
  return (
    <section id="checkout" className="py-16 md:py-24 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
          OFERTA POR TEMPO LIMITADO
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-4 tracking-tight">
          Escolha a melhor opção para você
        </h2>

        <p className="text-base text-slate-400 max-w-xl mx-auto mb-12">
          Pagamento único. Sem assinaturas, sem mensalidades ocultas. Acesso imediato no seu e-mail.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto text-left">
          {/* Plan 1: Basic Plan */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-200">Plano Básico</h3>
              <p className="text-xs text-slate-400 mt-1 mb-6">Para quem busca apenas o essencial.</p>

              <div className="mb-6">
                <span className="text-xs text-slate-400">Preço normal: R$ 49,90</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-sm font-bold text-slate-300">R$</span>
                  <span className="text-4xl font-extrabold text-white">10,00</span>
                </div>
                <span className="text-[11px] text-slate-400">Pagamento Único</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Apenas 100 atividades básicas em PDF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem bônus inclusos</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500 line-through">
                  <span>Sem UNO e Bingo completos</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan("Plano Básico")}
              className="w-full py-3.5 px-4 rounded-xl border border-slate-600 text-slate-200 font-bold hover:bg-slate-700 transition-colors text-sm text-center cursor-pointer"
            >
              Escolher Plano Básico
            </button>
          </div>

          {/* Plan 2: RECOMMENDED FULL KIT */}
          <div className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-cyan-400 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-cyan-500/20 transform md:-translate-y-2">
            {/* Top Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs px-4 py-1 rounded-full shadow-md flex items-center gap-1 shrink-0 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-slate-950" /> MAIS VENDEDO - ACESSO COMPLETO + 4 BÔNUS
            </div>

            <div>
              <div className="mt-2 mb-6">
                <span className="text-xs text-rose-400 line-through font-semibold">De R$ 97,90</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-sm font-bold text-cyan-300">Por apenas</span>
                  <span className="text-5xl font-extrabold text-amber-300">R$ 27,90</span>
                </div>
                <span className="text-xs text-emerald-400 font-bold">Pagamento Único • Sem mensalidades</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-8">
                <li className="flex items-center gap-2 font-semibold text-white">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                  <span><strong>+240 Jogos e Atividades em Libras</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                  <span>UNO de Libras + Bingo Completo (20 cartelas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                  <span>Jogo da Memória + Cards de Comunicação</span>
                </li>
                <li className="flex items-center gap-2 text-amber-300 font-medium">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>4 BÔNUS EXCLUSIVOS INCLUSOS</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                  <span>Acesso Vitalício + Atualizações</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                  <span>Garantia Incondicional de 7 Dias</span>
                </li>
              </ul>
            </div>

            {/* Pulsing CTA Button */}
            <div>
              <button
                onClick={() => onSelectPlan("Kit Completo Libras na Prática")}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-600 text-white font-extrabold text-base sm:text-lg shadow-xl hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer animate-pulse"
              >
                QUERO O KIT COMPLETO DE LIBRAS ➔
              </button>

              <div className="flex items-center justify-center gap-3 mt-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" /> Checkout Seguro
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" /> Receba em 2 Minutos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};