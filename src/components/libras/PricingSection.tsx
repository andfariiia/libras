"use client";

import React, { useState } from "react";
import { Check, Lock, Zap, Star, Sparkles, ArrowRight, X, AlertTriangle, ShieldCheck } from "lucide-react";

export const PricingSection = ({ onSelectPlan }: { onSelectPlan: (planName: string) => void }) => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  const handleBasicClick = () => {
    setShowUpsellModal(true);
  };

  const handleAcceptUpsell = () => {
    setShowUpsellModal(false);
    onSelectPlan("Kit Completo Promo R$ 17,90");
  };

  const handleDeclineUpsell = () => {
    setShowUpsellModal(false);
    onSelectPlan("Plano Básico R$ 10,00");
  };

  return (
    <>
      <section id="checkout" className="py-20 md:py-28 bg-slate-950 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Section Header */}
          <span className="text-xs font-black uppercase tracking-widest text-cyan-300 bg-cyan-950 border border-cyan-500/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            OFERTA POR TEMPO LIMITADO
          </span>

          <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-4 tracking-tight">
            Escolha a melhor opção para você
          </h2>

          <p className="text-base text-slate-400 max-w-xl mx-auto mb-14">
            Pagamento único. Sem assinaturas, sem mensalidades ocultas. Acesso imediato no seu e-mail.
          </p>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto text-left">
            {/* Plan 1: Basic Plan */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-200">Plano Básico</h3>
                <p className="text-xs text-slate-400 mt-1 mb-6">Para quem busca apenas o essencial.</p>

                <div className="mb-6">
                  <span className="text-xs text-slate-500">Preço normal: R$ 49,90</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm font-bold text-slate-400">R$</span>
                    <span className="text-4xl font-extrabold text-white">10,00</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Pagamento Único</span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Apenas 100 atividades básicas em PDF</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sem bônus inclusos</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-slate-600 line-through">
                    <span>Sem UNO e Bingo completos</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleBasicClick}
                className="w-full py-4 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold hover:bg-slate-800 transition-colors text-sm text-center cursor-pointer"
              >
                Escolher Plano Básico
              </button>
            </div>

            {/* Plan 2: RECOMMENDED FULL KIT */}
            <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-2 border-cyan-400 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl shadow-cyan-500/25 transform md:-translate-y-2">
              {/* Top Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs px-5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Star className="w-3.5 h-3.5 fill-slate-950" /> MAIS VENDIDO — ACESSO COMPLETO + 4 BÔNUS
              </div>

              <div>
                <div className="mt-3 mb-6">
                  <span className="text-xs text-rose-400 line-through font-semibold">De R$ 97,90</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm font-bold text-cyan-300">Por apenas</span>
                    <span className="text-5xl font-black text-amber-300">R$ 27,90</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold">Pagamento Único • Sem mensalidades</span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200 mb-8">
                  <li className="flex items-center gap-2.5 font-bold text-white">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                    <span>+240 Jogos e Atividades em Libras</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                    <span>UNO de Libras + Bingo Completo (20 cartelas)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                    <span>Jogo da Memória + Cards de Comunicação</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-amber-300 font-bold">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>4 BÔNUS EXCLUSIVOS INCLUSOS</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                    <span>Acesso Vitalício + Atualizações</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 font-bold" />
                    <span>Garantia Incondicional de 7 Dias</span>
                  </li>
                </ul>
              </div>

              {/* Pulsing CTA Button */}
              <div>
                <button
                  onClick={() => onSelectPlan("Kit Completo R$ 27,90")}
                  className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-base sm:text-lg shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <span>QUERO O KIT COMPLETO</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-4 mt-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" /> Checkout Seguro
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Receba em 2 Minutos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPSELL POP-UP MODAL */}
      {showUpsellModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-amber-400 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={handleDeclineUpsell}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Warning Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-950/80 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
              ESPERE! OPORTUNIDADE ÚNICA E EXCLUSIVA
            </div>

            {/* Title & Offer */}
            <div className="text-left space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Leve o <span className="text-amber-300">KIT COMPLETO</span> por apenas <span className="text-emerald-400 underline decoration-emerald-500">R$ 17,90</span>!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Por apenas <strong className="text-white font-bold">R$ 7,90 a mais</strong> que o plano básico, você desbloqueia o kit completo com todos os jogos e 4 bônus exclusivos:
              </p>
            </div>

            {/* Highlights comparison */}
            <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 space-y-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2.5 font-bold text-emerald-400">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 font-bold" />
                <span>+240 Jogos e Atividades Visuais em Libras</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Baralho UNO em Libras + Bingo Completo (20 cartelas)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Jogo da Memória + Cards de Comunicação da Rotina</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>TODOS OS 4 BÔNUS INCLUSOS GRATUITAMENTE</span>
              </div>
            </div>

            {/* Price tag badge */}
            <div className="bg-gradient-to-r from-amber-950/80 to-emerald-950/80 border border-amber-500/40 rounded-2xl p-3 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">De <span className="line-through text-slate-500">R$ 27,90</span> por apenas:</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">R$ 17,90</span>
            </div>

            {/* 2 Decision Buttons */}
            <div className="space-y-3 pt-1">
              {/* Option A: Upgrade Offer */}
              <button
                onClick={handleAcceptUpsell}
                className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>SIM! QUERO O KIT COMPLETO POR R$ 17,90</span>
              </button>

              {/* Option B: Continue Basic Plan */}
              <button
                onClick={handleDeclineUpsell}
                className="w-full py-3 px-4 rounded-2xl border border-slate-700/80 text-slate-400 hover:text-slate-200 font-semibold text-xs transition-colors hover:bg-slate-800/60 cursor-pointer"
              >
                Não obrigado, prefiro continuar com o Plano Básico de R$ 10,00
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garantia de 7 dias mantida para ambas as opções</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};