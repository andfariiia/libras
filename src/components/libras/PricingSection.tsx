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
    onSelectPlan("R$ 17,90");
  };

  const handleDeclineUpsell = () => {
    setShowUpsellModal(false);
    onSelectPlan("R$ 10,00");
  };

  return (
    <>
      <section id="checkout" className="py-8 md:py-14 bg-slate-950 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Section Header */}
          <span className="text-xs font-black uppercase tracking-widest text-cyan-300 bg-cyan-950 border border-cyan-500/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            OFERTA POR TEMPO LIMITADO
          </span>

          <h2 className="text-3xl sm:text-5xl font-black mt-3 mb-2 tracking-tight">
            Escolha a melhor opção para você
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-8">
            Pagamento único. Sem assinaturas, sem mensalidades ocultas. Acesso imediato no seu e-mail.
          </p>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto text-left">
            
            {/* Plan 1: Basic Plan (Básico Inclusão - Exact layout from image) */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl text-center sm:text-center">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                  PLANO INDIVIDUAL
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  Básico Inclusão
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xs mx-auto leading-relaxed mb-6">
                  Para quem precisa começar com sinais e atividades práticas agora.
                </p>

                <div className="mb-6">
                  <span className="text-xs text-slate-500 line-through font-mono block mb-1">
                    R$ 47,00
                  </span>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-white">R$</span>
                    <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">10,00</span>
                  </div>
                </div>

                {/* Checklist idêntica à imagem fornecida */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200 mb-8 font-medium text-left max-w-xs mx-auto">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                    </div>
                    <span>100 Atividades Básicas de Libras</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                    </div>
                    <span>Atividades organizadas por tema</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                    </div>
                    <span>Acesso Vitalício</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={handleBasicClick}
                  className="w-full py-4 px-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm sm:text-base border-2 border-slate-900 shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <span>QUERO COMEÇAR COM LIBRAS</span>
                </button>

                <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-400">
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

            {/* Plan 2: RECOMMENDED FULL KIT (R$ 27,00) */}
            <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-2 border-cyan-400 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl shadow-cyan-500/25">
              {/* Top Badge ★ RECOMENDADO em azul */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-black text-xs px-5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider">
                ★ RECOMENDADO
              </div>

              <div>
                {/* Header info */}
                <div className="text-center pt-2 mb-5">
                  <span className="text-[11px] font-black uppercase tracking-widest text-cyan-400 block mb-1">
                    ACESSO COMPLETO + BÔNUS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Kit Libras na Prática
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    O método definitivo para{" "}
                    <span className="text-teal-300 font-bold">
                      comunicação mais clara e inclusiva
                    </span>
                  </p>
                </div>

                {/* Quadro "VALOR INDIVIDUAL DOS MATERIAIS:" */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-5 text-xs text-left shadow-inner">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2.5">
                    VALOR INDIVIDUAL DOS MATERIAIS:
                  </span>
                  <div className="space-y-2 font-medium text-slate-300">
                    <div className="flex justify-between items-center">
                      <span>Atividades de Sinais Básicos</span>
                      <span className="line-through text-slate-500 font-mono">R$ 24,90</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cartazes de Libras</span>
                      <span className="line-through text-slate-500 font-mono">R$ 24,90</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dinâmicas Inclusivas em Grupo</span>
                      <span className="line-through text-slate-500 font-mono">R$ 24,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dinâmicas Inclusivas</span>
                      <span className="line-through text-slate-500 font-mono">R$ 24,10</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-800 my-3" />
                  <div className="flex justify-between items-center font-black">
                    <span className="text-white uppercase tracking-wider">VALOR TOTAL:</span>
                    <span className="text-blue-400 text-sm font-mono font-bold">R$ 97,90</span>
                  </div>
                </div>

                {/* Bloco HOJE POR APENAS */}
                <div className="text-center mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-cyan-400 block mb-1">
                    HOJE POR APENAS:
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-teal-300">R$</span>
                    <span className="text-5xl sm:text-6xl font-black text-teal-300">27,00</span>
                  </div>
                </div>

                {/* Checklist idêntica à foto */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-6 font-medium">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span className="font-bold text-white">+240 Jogos em Libras Prontos para Imprimir</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Temas organizados por sinal, rotina, emoção e necessidade da criança</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Acesso Permanente e Imediato</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Jogos Visuais e Atividades Inclusivas</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Roteiros Prontos para Aplicar</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Jogos de Comunicação, Rotina e Inclusão</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Guia do Professor & Fichas de Acompanhamento</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Atividades Cooperativas e Inclusivas</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan("R$ 27,00")}
                  className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <span>QUERO O KIT COMPLETO — R$ 27,00</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-400">
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

      {/* UPSELL POP-UP MODAL (R$ 17,90) */}
      {showUpsellModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-amber-400 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-5 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={handleDeclineUpsell}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 bg-amber-950/80 border border-amber-500/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
              ESPERE! OPORTUNIDADE ÚNICA E EXCLUSIVA
            </div>

            <div className="text-left space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Leve o <span className="text-amber-300">KIT COMPLETO</span> por apenas <span className="text-emerald-400 underline decoration-emerald-500">R$ 17,90</span>!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Por apenas <strong className="text-white font-bold">R$ 7,90 a mais</strong> que o plano básico, você desbloqueia o kit completo com todos os jogos e 4 bônus exclusivos:
              </p>
            </div>

            <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 space-y-2 text-xs text-slate-200">
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

            <div className="bg-gradient-to-r from-amber-950/80 to-emerald-950/80 border border-amber-500/40 rounded-2xl p-3 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">De <span className="line-through text-slate-500">R$ 27,00</span> por apenas:</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">R$ 17,90</span>
            </div>

            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleAcceptUpsell}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>SIM! QUERO O KIT COMPLETO POR R$ 17,90</span>
              </button>

              <button
                onClick={handleDeclineUpsell}
                className="w-full py-2.5 px-4 rounded-2xl border border-slate-700/80 text-slate-400 hover:text-slate-200 font-semibold text-xs transition-colors hover:bg-slate-800/60 cursor-pointer"
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