"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Download, Printer, Zap, Lock, Sparkles, Star } from "lucide-react";

export const HeroSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/40 to-slate-50">
      {/* Decorative Dot Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.12] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Top BNCC Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-800 border border-emerald-300/60 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs mb-6 backdrop-blur-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>✓ Alinhado à BNCC 2026</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Jogos em Libras:{" "}
          <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-wavy decoration-2">
            aprender brincando, incluir de verdade
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          Mais de 240 jogos em Libras prontos para imprimir. Ajude crianças surdas e ouvintes a aprender, se comunicar e participar juntas com jogos, cards, desafios e atividades visuais fáceis de aplicar.
        </p>

        {/* Quick Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10 text-xs sm:text-sm font-semibold text-slate-700">
          <span className="bg-white/90 shadow-sm border border-slate-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
            <Download className="w-4 h-4 text-teal-600" /> Baixe na hora
          </span>
          <span className="bg-white/90 shadow-sm border border-slate-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
            <Printer className="w-4 h-4 text-cyan-600" /> Imprima ilimitado
          </span>
          <span className="bg-white/90 shadow-sm border border-slate-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" /> Use imediato
          </span>
        </div>

        {/* Visual Product Mockup Card Frame */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 rounded-3xl blur-xl opacity-25 animate-pulse" />
          <div className="relative bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 p-4 sm:p-8 shadow-2xl overflow-hidden">
            {/* Visual simulation of 3D stacked cards: UNO, Memory, Bingo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-left">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-100/70 p-4 rounded-2xl border border-teal-200/60 shadow-md transform transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🃏</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-teal-600 text-white px-2 py-0.5 rounded">PDF Colorido</span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">UNO de Sinais em Libras</h3>
                <p className="text-xs text-slate-600">Cartas adaptadas com datilologia, numerais e comandos de ação.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-100/70 p-4 rounded-2xl border border-purple-200/60 shadow-md transform transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🧠</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-purple-600 text-white px-2 py-0.5 rounded">Lúdico</span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Jogo da Memória dos Sinais</h3>
                <p className="text-xs text-slate-600">60 cartas com pares de imagem real + sinal em Libras ilustrado.</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-100/70 p-4 rounded-2xl border border-amber-200/60 shadow-md transform transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎯</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-amber-600 text-white px-2 py-0.5 rounded">Em Grupo</span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Bingo do Alfabeto em Libras</h3>
                <p className="text-xs text-slate-600">20 cartelas exclusivas para engajar toda a turma ou família.</p>
              </div>
            </div>

            {/* Banner Inside Mockup */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-medium text-slate-200">
                  Inclui suporte visual, gabarito prático e instruções passo a passo para aplicação rápida.
                </span>
              </div>
              <span className="font-mono text-cyan-400 font-bold shrink-0 bg-slate-800 px-3 py-1 rounded-lg border border-cyan-500/30">
                +240 Atividades Visuais
              </span>
            </div>
          </div>
        </div>

        {/* 2x2 Grid Key Advantages */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 text-left">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Sem faculdade de Libras</span>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Pronto para aplicar hoje</span>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Para escola, casa e reforço</span>
          </div>
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Comunicação imediata</span>
          </div>
        </div>

        {/* Social Proof Avatars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" alt="Professora Maria" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Professora Ana" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" alt="Mãe Patricia" />
            <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&auto=format&fit=crop&q=80" alt="Profa Carla" />
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-1.5">4.9 / 5.0</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              Mais de <strong className="text-slate-900 font-bold">2.000 professoras e mães</strong> já estão usando
            </p>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="max-w-xl mx-auto text-center">
          <button
            onClick={onCtaClick}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 text-lg sm:text-xl font-extrabold text-white bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              QUERO OS +240 JOGOS ➔
            </span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          {/* Subtext beneath CTA */}
          <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
            ⚠️ Desconto válido apenas nesta página | Acesso imediato • Compra segura • 7 dias de garantia
          </p>

          {/* Security Badges */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-5 text-[11px] sm:text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> COMPRA SEGURA
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" /> SSL CRIPTOGRAFADO
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> ACESSO IMEDIATO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};