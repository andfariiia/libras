"use client";

import React, { useState } from "react";
import { Check, Lock, Zap, ArrowRight, X, Clock } from "lucide-react";

export const PricingSection = ({ onSelectPlan }: { onSelectPlan: (planName: string) => void }) => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  // Formata a data atual automaticamente no formato DD/MM/YY (ex: 15/08/26)
  const todayFormatted = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

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
          {/* Top Red Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-full shadow-lg shadow-red-600/30 mb-4 border border-red-400/40">
            <Clock className="w-4 h-4 fill-white/20 text-white shrink-0" />
            <span>OFERTA LIMITADA - Apenas no dia {todayFormatted}</span>
          </div>

          {/* H2 Title */}
          <h2 className="text-3xl sm:text-5xl font-black mt-1 mb-8 tracking-tight text-white">
            Escolha Sua Oferta Especial
          </h2>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto text-left">
            
            {/* Plan 1: Basic Plan (Básico Inclusão) */}
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

            {/* Plan 2: RECOMMENDED FULL KIT (R$ 27,90) */}
            <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-2 border-cyan-400 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl shadow-cyan-500/25">
              {/* Top Badge ★ MAIS VENDIDO */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-black text-xs px-5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider">
                ★ MAIS VENDIDO
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
                    <span className="text-5xl sm:text-6xl font-black text-teal-300">27,90</span>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-6 font-medium">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span className="font-bold text-white">+240 Jogos em Libras Prontos para Imprimir</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Temas organizados por sinal, rotina, emoção e necessidade da criança</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Acesso Permanente e Imediato</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Jogos Visuais e Atividades Inclusivas</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Roteiros Prontos para Aplicar</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Jogos de Comunicação, Rotina e Inclusão</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Guia do Professor & Fichas de Acompanhamento</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-300 stroke-[3]" />
                    </div>
                    <span>Atividades Cooperativas e Inclusivas</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan("R$ 27,90")}
                  className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <span>QUERO O KIT COMPLETO — R$ 27,90</span>
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

      {/* POP-UP MODAL EXATAMENTE IGUAL À IMAGEM ANEXADA */}
      {showUpsellModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-[440px] w-full shadow-2xl relative space-y-5 my-auto text-center border border-slate-100">
            
            {/* Botão Fechar Topo Direito */}
            <button
              onClick={handleDeclineUpsell}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Pill OFERTA PREMIUM */}
            <div className="inline-flex items-center justify-center bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-extrabold uppercase px-4 py-1 rounded-full tracking-wider mx-auto">
              OFERTA PREMIUM
            </div>

            {/* Título Principal */}
            <h3 className="text-2xl sm:text-[28px] font-black text-slate-950 leading-tight tracking-tight max-w-xs mx-auto">
              Leve o Plano Completo por apenas mais R$7
            </h3>

            {/* Caixa Destacada OFERTA ESPECIAL R$17 */}
            <div className="bg-[#eefcfc] border-2 border-cyan-400/80 rounded-2xl p-4 sm:p-5 max-w-[280px] mx-auto shadow-sm">
              <span className="text-[11px] font-extrabold text-cyan-800 uppercase tracking-wider block mb-1">
                OFERTA ESPECIAL
              </span>
              <div className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight leading-none my-1">
                R$17
              </div>
              <span className="text-xs font-semibold text-slate-600 block mt-1.5">
                pagamento único
              </span>
            </div>

            {/* Texto Descritivo */}
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
              Antes de continuar com o plano básico de R$10, aproveite esta condição exclusiva: por apenas mais R$7, você recebe o Plano Completo com todos os bônus e materiais extras.
            </p>

            {/* Lista com ícones circulares verdes idêntica à imagem */}
            <div className="space-y-2.5 text-left text-xs sm:text-[13px] font-bold text-slate-800 max-w-sm mx-auto pt-1">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Comunicação em Libras hoje</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Bônus exclusivos liberados</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Jogos inclusivos e atividades visuais de Libras</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Materiais extras para imprimir</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Acesso imediato e garantia de 7 dias</span>
              </div>
            </div>

            {/* Botão Principal de Ação */}
            <div className="pt-2">
              <button
                onClick={handleAcceptUpsell}
                className="w-full py-4 px-4 rounded-2xl bg-[#009fb2] hover:bg-[#00899a] text-white font-black text-xs sm:text-sm shadow-xl shadow-cyan-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider leading-snug"
              >
                SIM, EU QUERO O PLANO COMPLETO POR R$17
              </button>

              <button
                onClick={handleDeclineUpsell}
                className="text-[11px] text-slate-400 hover:text-slate-700 underline font-medium mt-3 block mx-auto cursor-pointer"
              >
                Não, prefiro continuar com o básico de R$10
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};