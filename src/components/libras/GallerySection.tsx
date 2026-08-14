"use client";

import React from "react";
import { FileCheck2 } from "lucide-react";

interface SampleItem {
  title: string;
  badge: string;
  tag: string;
  image: string;
  description: string;
}

const REAL_SAMPLES: SampleItem[] = [
  {
    title: "Quebra-Cabeça do Alfabeto em Libras",
    badge: "Mais Vendido",
    tag: "Alfabetização",
    image: "https://i.ibb.co/9Hcs4qdz/jogo-dos-sinais-capa.webp",
    description: "Associação entre a letra do alfabeto, a imagem correspondente e a configuração de mão em Libras.",
  },
  {
    title: "Encaixa Frutas & Alimentos em Libras",
    badge: "Mais Popular",
    tag: "Vocabulário",
    image: "https://i.ibb.co/4njqt1LM/jogo-dos-sinais-cards.webp",
    description: "Cartas estilo dominó de encaixe para aprender nomes de frutas e alimentos do dia a dia.",
  },
  {
    title: "Libras STOP (Adedanha Adaptada)",
    badge: "Super Divertido",
    tag: "Avançado Lúdico",
    image: "https://i.ibb.co/XrgfhVcQ/bingo-libras-1.webp",
    description: "Fichas de jogo do famoso STOP adaptado com categorias visuais em Libras para turmas.",
  },
  {
    title: "Jogo da Memória dos Sinais",
    badge: "Essencial",
    tag: "Raciocínio Visual",
    image: "https://i.ibb.co/q3tNG7v9/memoria-dos-sinais-1.webp",
    description: "Cards duplos para pareamento direto de figuras e sinais em Libras.",
  },
  {
    title: "Atividades Práticas de Fixação",
    badge: "Para Imprimir",
    tag: "Exercícios",
    image: "https://i.ibb.co/3y2YYF6Q/jogo-dos-sinais-atividades.webp",
    description: "Exercícios de fixação e dactilologia prontos para aplicação individual.",
  },
];

export const GallerySection = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  return (
    <section className="py-10 md:py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-950/80 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <FileCheck2 className="w-3.5 h-3.5 text-teal-400" /> Exemplos Reais Do Material
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-black mb-3 max-w-3xl mx-auto tracking-tight">
          Mais de 240 jogos em Libras prontos para imprimir. Veja alguns exemplos reais:
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-8 font-medium">
          Todos os PDFs foram elaborados com fontes legíveis, cores vivas e ilustrações claras para garantir rápido entendimento pelas crianças.
        </p>

        {/* Automatic Infinite Scrolling Carousel (Right to Left) */}
        <div className="relative w-full overflow-hidden py-4 px-1">
          <div className="animate-marquee-slow flex items-center gap-6">
            {[...REAL_SAMPLES, ...REAL_SAMPLES, ...REAL_SAMPLES].map((sample, idx) => (
              <div
                key={idx}
                className="w-64 sm:w-80 shrink-0 bg-slate-950/90 rounded-3xl p-3.5 border border-slate-800 text-left flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500/40 shadow-xl cursor-pointer"
              >
                {/* Header tags */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-bold uppercase text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800/80">
                    {sample.tag}
                  </span>
                  <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
                    {sample.badge}
                  </span>
                </div>

                {/* 4:5 Image Container */}
                <div className="w-full aspect-[4/5] rounded-2xl border border-slate-800 overflow-hidden bg-slate-900 mb-3 relative">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="text-sm font-black text-white leading-tight mb-1">
                    {sample.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-normal line-clamp-2">
                    {sample.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};