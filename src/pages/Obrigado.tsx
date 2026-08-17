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
    desc: "Ideias prontas para tornar as aulas mais práticas, inclusivas e participativas.",
  },
  {
    icon: "🖨️",
    title: "+500 Atividades para Imprimir",
    desc: "Exercícios e materiais estruturados para Educação Infantil e Fundamental.",
  },
  {
    icon: "🃏",
    title: "250+ Flashcards de Sinais",
    desc: "Recursos visuais essenciais para ensinar, fixar e revisar vocabulário.",
  },
  {
    icon: "📚",
    title: "Slides + Planejamentos + Extras",
    desc: "Materiais para economizar semanas de preparação e ter sempre uma aula pronta.",
  },
];

export const Obrigado = () => {
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
      {/* 1. TOP BAR: AVISO DE PEDIDO CONFIRMADO & OPORTUNIDADE EXCLUSIVA */}
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

            <div className="relative w-full max-w-[330px] sm:max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden border-2 sm:border-[3px] border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.3)] bg-slate-950">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1216733174?h=e41970d37f&title=0&byline=0&portrait=0&badge=0"
                className="w-full h-full border-0 absolute inset-0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO: UM ACERVO COMPLETO PARA SUAS AULAS DE LIBRAS (DESIGN IDÊNTICO AO PRINT EM 2 COLUNAS) */}
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
                {/* Ícone + Número em destaque azul (se houver) */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                  <span className="text-lg sm:text-2xl">{item.icon}</span>
                  {item.highlight && (
                    <span className="text-base sm:text-2xl font-black text-[#0284c7] tracking-tight">
                      {item.highlight}
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-xs sm:text-base font-black text-[#0f284e] leading-snug mb-1">
                  {item.title}
                </h3>

                {/* Descrição */}
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
            Recursos ilustrados com alfabeto manual, massinha sensorial, dominó de sinais e folhas interativas prontas para impressão.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-1">
            <div className="bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 overflow-hidden shadow-2xl group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 relative">
                <img
                  src="https://i.ibb.co/6cvZK4fh/image.png"
                  alt="Material Dinâmicas Alfabeto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs font-bold text-slate-300 mt-2">
                Alfabeto Manual + Cartões Táteis
              </p>
            </div>

            <div className="bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 overflow-hidden shadow-2xl group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 relative">
                <img
                  src="https://i.ibb.co/67DKVwGy/bonus-3-edf-otimizado.webp"
                  alt="Dinâmicas Inclusivas em Grupo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs font-bold text-slate-300 mt-2">
                Dinâmicas Inclusivas em Grupo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO: QUER ECONOMIZAR HORAS DE PLANEJAMENTO? + CHECKOUT CARD */}
      <section className="py-10 px-3 sm:px-6 bg-slate-900/80 border-t border-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h2 className="text-xl sm:text-4xl font-black text-white tracking-tight mb-1.5">
              Quer economizar horas de planejamento?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Adicione agora o pacote completo de Libras à sua compra e tenha centenas de materiais prontos para usar.
            </p>
          </div>

          <div className="bg-slate-950 border-2 border-emerald-500/60 rounded-3xl p-5 sm:p-9 shadow-2xl relative max-w-2xl mx-auto text-center overflow-hidden">
            <div className="space-y-1.5 mb-5">
              <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                Leve agora o Pacote Completo de Libras
              </h3>
              
              <div className="pt-1">
                <span className="text-xs font-mono text-slate-500 line-through block">
                  Pacote completo R$ 97,00
                </span>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  POR APENAS
                </span>
                <div className="text-4xl sm:text-6xl font-black text-amber-300 tracking-tight my-1">
                  R$ 27,90
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Você recebe um acervo completo para deixar suas aulas de Libras prontas em minutos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left mb-6">
              {PACK_SUMMARY.map((box, i) => (
                <div
                  key={i}
                  className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl flex flex-col justify-start"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-base">{box.icon}</span>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {box.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3.5">
              <button
                onClick={handleAcceptUpsell}
                className="w-full py-4 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-base uppercase tracking-wider shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 border border-emerald-300 leading-snug"
              >
                <span>SIM, QUERO ADICIONAR AS +400 DINÂMICAS</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5] shrink-0" />
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

            <div className="mt-5 pt-4 border-t border-slate-900 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-amber-400" /> Compra 100% segura
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> Acesso imediato no e-mail
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 7 Dias de Garantia
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