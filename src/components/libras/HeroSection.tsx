"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Download, Printer, Zap, Lock, Star, ArrowRight } from "lucide-react";

interface CarouselItem {
  title: string;
  image?: string;
  customContent?: React.ReactNode;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    title: "Jogo da Memória dos Sinais em Libras",
    image: "https://i.ibb.co/q3tNG7v9/memoria-dos-sinais-1.webp",
  },
  {
    title: "Cards e Atividades Visuais da Rotina",
    image: "https://i.ibb.co/27sZ12B5/image.png",
  },
  {
    title: "Jogos Didáticos & Material Lúdico Ilustrado",
    image: "https://i.ibb.co/FbfBhJSM/image.png",
  },
  {
    title: "Card Ilustrado — Jogo da Memória dos Sinais",
    customContent: (
      <div className="w-full h-64 bg-slate-50 rounded-2xl border-2 border-cyan-500/70 p-3 flex flex-col items-center justify-center relative shadow-inner">
        <div className="w-28 h-28 rounded-full bg-cyan-100/80 flex items-center justify-center text-5xl mb-3 shadow-xs">
          👧🏻
        </div>
        <div className="bg-white px-6 py-1.5 rounded-xl border border-slate-200 font-extrabold text-slate-800 text-sm shadow-xs tracking-wider">
          AMIGO
        </div>
      </div>
    ),
  },
  {
    title: "Cards Coloridos de Sinais e Cores",
    customContent: (
      <div className="w-full h-64 bg-slate-50 rounded-2xl p-2.5 grid grid-cols-3 gap-1.5 border border-slate-200">
        {[
          { text: "Lilás", bg: "bg-purple-200 text-purple-900 border-dashed border-purple-400" },
          { text: "Cinza", bg: "bg-gray-200 text-gray-800 border-dashed border-gray-400" },
          { text: "Rosa", bg: "bg-pink-200 text-pink-900 border-dashed border-pink-400" },
          { text: "Preto", bg: "bg-slate-900 text-white font-bold" },
          { text: "Marrom", bg: "bg-amber-800 text-amber-100 font-bold" },
          { text: "Branco", bg: "bg-white text-slate-700 border border-slate-300" },
          { text: "Roxo", bg: "bg-purple-600 text-white font-bold" },
          { text: "Laranja", bg: "bg-orange-400 text-slate-900 font-bold" },
          { text: "Amarelo", bg: "bg-yellow-200 text-yellow-900 border border-yellow-400" },
          { text: "Azul", bg: "bg-blue-500 text-white font-bold" },
          { text: "Verde", bg: "bg-emerald-500 text-white font-bold" },
          { text: "Vermelho", bg: "bg-rose-600 text-white font-bold" },
        ].map((c, i) => (
          <div key={i} className={`${c.bg} rounded-lg flex items-center justify-center text-[10px] font-black p-1 text-center`}>
            {c.text}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Baralho UNO Adaptado em Libras",
    customContent: (
      <div className="w-full h-64 bg-gradient-to-br from-rose-500 via-amber-400 to-teal-500 rounded-2xl p-4 flex flex-col items-center justify-center text-white font-black text-center relative shadow-md">
        <div className="bg-slate-950/90 border border-white/60 px-4 py-2 rounded-2xl text-xl shadow-md mb-2">
          🎲 UNO LIBRAS
        </div>
        <p className="text-[11px] font-medium text-slate-100 max-w-[180px]">Baralho completo com datilologia, números e ações</p>
      </div>
    ),
  },
  {
    title: "Bingo do Alfabeto em Libras (20 Cartelas)",
    customContent: (
      <div className="w-full h-64 bg-slate-50 rounded-2xl p-3 border border-slate-200 flex flex-col items-center justify-between">
        <div className="bg-indigo-600 text-white font-black px-4 py-1 rounded-lg text-xs tracking-wider uppercase">
          BINGO LIBRAS
        </div>
        <div className="grid grid-cols-4 gap-1.5 w-full my-auto">
          {["A 🤟", "B ✊", "C 🖐️", "D ✌️", "E 🤏", "F 🤞", "G 👆", "H 👈"].map((b, i) => (
            <div key={i} className="bg-white border border-indigo-200 rounded-lg p-1.5 text-center font-bold text-[9px] text-slate-800">
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export const HeroSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Background Mesh Gradients & Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulseGlow" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Top BNCC Pill */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Alinhado 100% à BNCC 2026</span>
        </div>

        {/* H1 Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] max-w-4xl mx-auto mb-4">
          Jogos em Libras:{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            aprender brincando, incluir de verdade
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-6 text-balance">
          Mais de 240 jogos em Libras prontos para imprimir. Ajude crianças surdas e ouvintes a aprender, se comunicar e participar juntas com jogos, cards, desafios e atividades visuais fáceis de aplicar.
        </p>

        {/* Product Mockup Display */}
        <div className="my-6 max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-amber-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          
          <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-3xl p-3 sm:p-4 shadow-2xl backdrop-blur-2xl overflow-hidden">
            <img
              src="https://i.ibb.co/35WTpLhF/Gemini-Generated-Image-kqkqvbkqkqvbkqkq.png"
              alt="Kit Jogos em Libras na Prática"
              className="w-full h-auto rounded-2xl object-cover shadow-lg transform group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>

        {/* SOCIAL PROOF & MAIN CTA BLOCK */}
        <div className="max-w-xl mx-auto text-center my-8">
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-cyan-500/50 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" alt="Professora Maria" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-cyan-500/50 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Professora Ana" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-cyan-500/50 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" alt="Mãe Patricia" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-cyan-500/50 object-cover" src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&auto=format&fit=crop&q=80" alt="Profa Carla" />
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-200 ml-1.5">4.9 / 5.0</span>
              </div>
              <p className="text-xs font-medium text-slate-400">
                Mais de <strong className="text-white font-bold">2.000 professoras e mães</strong> já estão usando
              </p>
            </div>
          </div>

          {/* Main CTA Button */}
          <button
            onClick={onCtaClick}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 tracking-wide uppercase">
              QUERO OS +240 JOGOS
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          <p className="text-[11px] text-slate-400 mt-3 font-medium">
            ⚠️ Desconto exclusivo nesta página • Acesso imediato • 7 dias de garantia
          </p>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> COMPRA SEGURA
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> SSL 256-BIT
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> ACESSO IMEDIATO
            </span>
          </div>
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8 text-xs sm:text-sm font-semibold text-slate-200">
          <span className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-lg">
            <Download className="w-4 h-4 text-cyan-400" /> Baixe na hora
          </span>
          <span className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-lg">
            <Printer className="w-4 h-4 text-teal-400" /> Imprima ilimitado
          </span>
          <span className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
            <Zap className="w-4 h-4 text-amber-400" /> Use imediato
          </span>
        </div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 text-left">
          {[
            "Sem faculdade de Libras",
            "Pronto para aplicar hoje",
            "Para escola, casa e reforço",
            "Comunicação imediata",
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-3.5 flex items-center gap-2.5 backdrop-blur-md">
              <div className="w-6 h-6 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs shrink-0 border border-teal-500/30">
                ✓
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* SHOWCASE CAROUSEL SECTION */}
        <div className="pt-6 border-t border-slate-800/80 relative">
          {/* Header Pill */}
          <span className="text-[11px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full shadow-xs">
            VEJA POR DENTRO
          </span>

          {/* Section Heading */}
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-2 tracking-tight">
            Veja os jogos e materiais que você recebe
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-8 font-medium">
            Você recebe jogos como Memória dos Sinais, Bingo do Alfabeto em Libras, Cards de Desafio, Jogo dos Sinais, UNO adaptado, cartazes e atividades de rotina.
          </p>

          {/* Automatic Infinite Scrolling Carousel (Right to Left) */}
          <div className="relative w-full overflow-hidden py-4 px-2">
            <div className="animate-marquee-slow flex items-center gap-6">
              {[...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS].map((item, idx) => (
                <div
                  key={idx}
                  className="w-72 sm:w-80 shrink-0 bg-white rounded-3xl p-3.5 border border-slate-200/90 text-center flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] shadow-xs cursor-pointer"
                >
                  {/* Card Visual Content Container */}
                  <div className="mb-3">
                    {item.image ? (
                      <div className="w-full h-64 rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      item.customContent
                    )}
                  </div>

                  {/* Caption underneath card */}
                  <p className="text-xs font-extrabold text-slate-800 leading-snug px-2 pt-0.5 pb-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};