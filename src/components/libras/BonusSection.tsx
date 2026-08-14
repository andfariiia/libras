"use client";

import React from "react";
import { CheckCircle2, Monitor, Sparkles } from "lucide-react";

interface BonusItem {
  num: string;
  category: string;
  title: string;
  highlight: string;
  desc: string;
  value: string;
  image: string;
}

const BONUSES: BonusItem[] = [
  {
    num: "01",
    category: "ROTINA E COMBINADOS",
    title: "Cartazes de Libras (Rotina & Combinados)",
    highlight: "Cartazes visuais com sinais de entrada, lanche, higiene, combinados de convivência e frases essenciais para afixar na parede.",
    desc: "Crie um ambiente 100% receptivo, acolhedor e visual para organizar o dia a dia do aluno surdo e de toda a turma.",
    value: "R$ 29,90",
    image: "https://i.ibb.co/x8KF09HY/bonus-1-edf-otimizado.webp",
  },
  {
    num: "02",
    category: "DESAFIOS LÚDICOS",
    title: "Desafios de Comunicação em Libras",
    highlight: "Cartões de desafios diários para estimular a memória, expressão facial e rapidez de resposta com a turma.",
    desc: "Atividades dinâmicas que transformam o aprendizado de sinais em uma competição saudável e empolgante.",
    value: "R$ 34,90",
    image: "https://i.ibb.co/5x9Q6Pzk/bonus-2-edf-otimizado.webp",
  },
  {
    num: "03",
    category: "JOGOS E CIRCUITOS",
    title: "Dinâmicas Inclusivas em Grupo",
    highlight: "Propostas extras para envolver crianças surdas e ouvintes em atividades conjuntas, estimulando comunicação, interação e participação.",
    desc: "Use cartas, pareamentos, desafios e brincadeiras simples para envolver crianças surdas e ouvintes juntas.",
    value: "R$ 27,90",
    image: "https://i.ibb.co/67DKVwGy/bonus-3-edf-otimizado.webp",
  },
  {
    num: "04",
    category: "DECORAÇÃO E APOIO",
    title: "Cartazes de Sinais para Imprimir",
    highlight: "Coleção de posters decorativos em alta definição com alfabeto dactilológico e numerais em Libras.",
    desc: "Posters ilustrados de alta qualidade prontos para molduras ou fixação direta no quadro de avisos.",
    value: "R$ 24,90",
    image: "https://i.ibb.co/Pvht8nFx/bonus-4-edf-otimizado.webp",
  },
];

export const BonusSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-12 md:py-20 bg-[#0B0F19] text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-500/30 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>BÔNUS EXCLUSIVOS DO COMBO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            Bônus do Combo Libras na Prática
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-medium">
            Garantindo o seu kit <strong className="text-amber-300">HOJE</strong>, você recebe estes 4 bônus incríveis sem nenhum custo adicional:
          </p>
        </div>

        {/* 2x2 Grid of New Card Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto mb-12">
          {BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-[#121829] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              <div>
                {/* Image Top Frame */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-900">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121829] via-transparent to-black/30" />

                  {/* Large Stylized Number Badge Top-Left */}
                  <div className="absolute top-4 left-4 font-black text-4xl sm:text-5xl text-cyan-300/90 font-mono drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-tighter">
                    {bonus.num}
                  </div>

                  {/* Media / Monitor Icon Bottom-Right */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-lg">
                    <Monitor className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Pill Category Tag */}
                  <div className="inline-flex items-center gap-2 bg-[#1A2238] border border-cyan-500/30 px-3.5 py-1 rounded-full text-[11px] font-black text-cyan-300 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{bonus.category}</span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {bonus.title}
                  </h3>

                  {/* Highlight Text (Purple/Cyan) */}
                  <p className="text-xs sm:text-sm font-semibold text-purple-300 leading-relaxed">
                    {bonus.highlight}
                  </p>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-slate-800/80 my-2" />

                  {/* Secondary Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {bonus.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Free Tag Banner */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-bold text-slate-400">
                <span className="text-slate-500 line-through">Valor normal: {bonus.value}</span>
                <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 font-extrabold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% GRATUITO
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Economy Banner */}
        <div className="bg-gradient-to-r from-purple-950/60 via-slate-900 to-cyan-950/60 border border-purple-500/30 rounded-2xl p-4 max-w-xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <span className="text-slate-300 font-semibold">Economia total em bônus inclusos:</span>
          <span className="font-mono font-black text-amber-300 text-sm sm:text-base">R$ 117,60 DE PRESENTE</span>
        </div>
      </div>
    </section>
  );
};