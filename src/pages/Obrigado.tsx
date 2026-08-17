"use client";

import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Lock,
  Zap,
  Clock,
  ArrowRight,
  ShieldCheck,
  Flame,
  PlayCircle,
  Gift,
} from "lucide-react";
import { showSuccess } from "@/utils/toast";

const UPSERT_ACERVO = [
  {
    icon: "🤟",
    highlight: "+400",
    title: "Dinâmicas de Libras",
    desc: "Prontas para aplicar em sala",
  },
  {
    icon: "🖨️",
    highlight: "+500",
    title: "Atividades para imprimir",
    desc: "Materiais para diferentes níveis",
  },
  {
    icon: "🃏",
    highlight: "250+",
    title: "Flashcards de sinais",
    desc: "Recursos visuais e didáticos",
  },
  {
    icon: "🎥",
    highlight: "",
    title: "Slides didáticos",
    desc: "Aulas mais visuais e práticas",
  },
  {
    icon: "🎯",
    highlight: "",
    title: "Kit Libras Interativo",
    desc: "Aprendizado mais envolvente",
  },
  {
    icon: "📚",
    highlight: "",
    title: "Planejamentos + aulas de emergência",
    desc: "BNCC + Lei 10.436/2002",
  },
];

const PACK_SUMMARY = [
  {
    icon: "🤟",
    title: "+400 Dinâmicas de Libras",
    desc: "Ideias prontas para tornar as aulas mais práticas e participativas.",
  },
  {
    icon: "🖨️",
    title: "+500 Atividades para Imprimir",
    desc: "Exercícios e materiais para Educação Infantil e Fundamental.",
  },
  {
    icon: "🃏",
    title: "250+ Flashcards de Sinais",
    desc: "Recursos visuais para ensinar e revisar vocabulário.",
  },
  {
    icon: "📚",
    title: "Slides + Planejamentos + Extras",
    desc: "Materiais para ganhar tempo e ter sempre uma aula preparada.",
  },
];

export const Obrigado = () => {
  const todayFormatted = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const handleAcceptUpsell = () => {
    showSuccess("Redirecionando para adicionar ao seu pedido...");
    setTimeout(() => {
      window.location.href = "https://pay.kiwify.com.br/o8QVrMK";
    }, 600);
  };

  const handleDecline = () => {
    window.location.href = "/membros";
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. TOP BAR: AVISO DE PEDIDO CONFIRMADO */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 py-3.5 px-4 text-center shadow-lg relative z-20">
        <div className="max-w-4xl mx-auto space-y-1">
          <div className="flex items-center justify-center gap-2 font-black text-sm sm:text-base uppercase tracking-wide text-slate-950">
            <span>Obrigado pela sua compra!</span>
            <span className="text-xl">🎉</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
            Seu pedido principal foi aprovado e o acesso está a caminho do seu e-mail. <br className="hidden sm:inline" />
            <strong className="underline font-bold">NÃO FECHE ESTA PÁGINA AINDA:</strong> separamos uma oportunidade única antes de você acessar seus materiais.
          </p>
        </div>
      </div>

      {/* Barra de Progresso do Pedido */}
      <div className="bg-slate-900 border-b border-slate-800 py-2.5 px-3">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-2 text-[11px] sm:text-xs font-bold">
          <span className="text-emerald-400 flex items-center gap-1 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" /> 1. Pedido Pago
          </span>
          <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden relative mx-1">
            <div className="w-[85%] h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse" />
          </div>
          <span className="text-amber-400 flex items-center gap-1 shrink-0">
            <Clock className="w-3.5 h-3.5" /> 2. Oferta Especial
          </span>
        </div>
      </div>

      {/* 2. HERO PRINCIPAL DO UPSELL */}
      <section className="pt-6 sm:pt-10 pb-8 px-3 sm:px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-amber-950/90 border border-amber-500/40 text-amber-300 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-md">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-bounce" />
            <span>OPORTUNIDADE ÚNICA • ADICIONE COM 1 CLIQUE</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] max-w-3xl mx-auto px-1">
            Leve também{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              mais de 400 Dinâmicas de Libras prontas
            </span>{" "}
            e economize horas preparando suas aulas.
          </h1>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed px-2">
            Tenha dinâmicas, atividades, flashcards, slides e recursos prontos para aplicar da <strong>Educação Infantil ao 5º ano</strong>.
          </p>

          {/* VÍDEO NO FORMATO STORY (9:16 VERTICAL) */}
          <div className="pt-2 pb-2 w-full flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-3 text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 py-1.5 px-4 rounded-full shadow-md">
              <PlayCircle className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Assista ao vídeo explicativo</span>
            </div>

            <div className="w-full max-w-[320px] sm:max-w-[360px] rounded-3xl overflow-hidden border-2 sm:border-[3px] border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.3)] bg-slate-950">
              <div className="relative w-full" style={{ paddingBottom: "177.77%" }}>
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/1216733174?h=e41970d37f&title=0&byline=0&portrait=0&badge=0"
                  className="w-full h-full border-0 absolute top-0 left-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO: UM ACERVO COMPLETO PARA SUAS AULAS DE LIBRAS */}
      <section className="py-8 sm:py-12 px-3 sm:px-6 bg-[#0a1526] border-y border-slate-800/80 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white mb-2 tracking-tight leading-tight">
            Um acervo completo para suas aulas de Libras
          </h2>
          <p className="text-xs sm:text-base text-slate-300 mb-6 sm:mb-8 font-medium">
            Tudo organizado para você planejar menos e aplicar mais.
          </p>

          {/* Grid em 2 colunas mesmo no mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left max-w-3xl mx-auto">
            {UPSERT_ACERVO.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f0f7ff] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-lg border border-white/60 flex flex-col justify-start hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                  <span className="text-lg sm:text-2xl">{item.icon}</span>
                  {item.highlight && (
                    <span className="text-base sm:text-2xl font-black text-[#0284c7] tracking-tight">
                      {item.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-xs sm:text-base font-black text-[#0f284e] leading-snug mb-1">
                  {item.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-[#527092] leading-snug font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO: VEJA MAIS DO MATERIAL POR DENTRO */}
      <section className="py-10 px-3 sm:px-6 bg-slate-950 text-white relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRÉVIA EXCLUSIVA</span>
          </div>

          <h2 className="text-xl sm:text-4xl font-black tracking-tight">
            Veja mais do material por dentro
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Recursos ilustrados com alfabeto manual, dinâmicas interativas, dominó de sinais e folhas estruturadas prontas para impressão.
          </p>

          <div className="flex justify-center pt-2">
            <div className="w-full max-w-[320px] sm:max-w-[360px] bg-slate-900/90 rounded-3xl p-3 sm:p-4 border-2 border-cyan-500/40 shadow-2xl flex flex-col justify-between group">
              <div className="w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                <div className="relative w-full" style={{ paddingBottom: "177.77%" }}>
                  <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/1216733322?h=8dd53c15c2&title=0&byline=0&portrait=0&badge=0"
                    className="w-full h-full border-0 absolute top-0 left-0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-cyan-300 mt-3 text-center">
                Demonstração em Vídeo do Material
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO: QUER ECONOMIZAR HORAS DE PLANEJAMENTO? + CHECKOUT CARD */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-t border-slate-800 relative z-10 overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          {/* Header da Seção */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Quer economizar horas de planejamento?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-medium">
              Adicione agora o pacote completo de Libras à sua compra e tenha centenas de materiais prontos para usar.
            </p>

            {/* Badge Vermelho com Data Atual */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-red-600/30 border border-red-400/50 uppercase tracking-wide">
                <Clock className="w-4 h-4 fill-white/20 text-white shrink-0 animate-pulse" />
                <span>OFERTA LIMITADA - Apenas no dia {todayFormatted}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white pt-1">
              Escolha Sua Oferta Especial
            </h3>
          </div>

          {/* MAIN CARD OFERTA VIP */}
          <div className="relative bg-gradient-to-b from-[#0e172a] via-[#090d18] to-[#070b14] border-2 border-emerald-400/80 rounded-3xl p-5 sm:p-7 md:p-8 shadow-[0_0_50px_rgba(16,185,129,0.2)] max-w-xl mx-auto text-center">
            
            {/* Title & Price Section */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>ACESSO COMPLETO & VITALÍCIO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                Leve agora o Pacote Completo de Libras
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Mais de <strong className="text-white font-bold">1.150 materiais</strong> reunidos em um único acervo pronto para salvar suas aulas.
              </p>

              {/* Price Tag Highlight Compacto */}
              <div className="my-3.5 bg-[#0b1322] border border-slate-800/90 rounded-2xl p-3.5 sm:p-4 max-w-sm mx-auto shadow-inner relative">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1.5 mb-1.5">
                  <span className="font-semibold">Valor normal separado:</span>
                  <span className="line-through text-rose-400/80 font-mono font-bold">R$ 97,00</span>
                </div>

                <div className="flex items-baseline justify-center gap-1.5 my-0.5">
                  <span className="text-xl sm:text-2xl font-black text-emerald-400">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                    27,90
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">à vista</span>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-300 bg-emerald-950/90 border border-emerald-500/40 px-2.5 py-0.5 rounded-full mt-1 shadow-sm">
                  <Gift className="w-3 h-3 text-amber-300" />
                  <span>Economia de R$ 69,10 (71% OFF)</span>
                </div>
              </div>
            </div>

            {/* BENEFIT CARDS (ESTILO EXATO DO PRINT) */}
            <div className="space-y-2.5 text-left my-4 max-w-lg mx-auto">
              {PACK_SUMMARY.map((box, i) => (
                <div
                  key={i}
                  className="bg-[#FFFDF5] border border-[#F6E8CE] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-3.5"
                >
                  {/* Ícone */}
                  <span className="text-2xl sm:text-3xl shrink-0 mt-0.5 select-none leading-none">
                    {box.icon}
                  </span>

                  {/* Texto do Card */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-black text-[#0f284e] leading-snug tracking-tight mb-0.5">
                      {box.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#2b4162] font-semibold leading-snug">
                      {box.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTÃO CTA & COMPROMISSO */}
            <div className="space-y-3 pt-1">
              <button
                onClick={handleAcceptUpsell}
                className="group relative w-full py-3.5 sm:py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 border border-emerald-200 leading-snug"
              >
                <span>SIM, QUERO ADICIONAR POR R$ 27,90</span>
                <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <div>
                <button
                  onClick={handleDecline}
                  className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer transition-colors"
                >
                  Não, obrigado. Quero continuar apenas com minha compra atual.
                </button>
              </div>
            </div>

            {/* TRUST FOOTER BADGES */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-[11px] text-slate-400 font-bold">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-amber-400" /> Checkout Seguro
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-cyan-400" /> Acesso Imediato
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 7 Dias de Garantia
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FOOTER DISCRETO */}
      <footer className="py-6 px-4 text-center text-slate-500 text-xs border-t border-slate-800/80">
        <p className="max-w-md mx-auto leading-relaxed">
          Produto digital. Nenhum material físico será enviado pelo correio. <br />
          Kit Libras na Prática © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Obrigado;