"use client";

import React from "react";
import { FileCheck2, Sparkles } from "lucide-react";

const REAL_SAMPLES = [
  {
    title: "Quebra-Cabeça do Alfabeto em Libras",
    badge: "Mais Vendido",
    tag: "Alfabetização",
    imageBg: "from-teal-600 to-cyan-700",
    description: "Associação entre a letra do alfabeto, a imagem correspondente e a configuração de mão em Libras.",
  },
  {
    title: "Encaixa Frutas & Alimentos em Libras",
    badge: "Mais Popular",
    tag: "Vocabulário",
    imageBg: "from-cyan-600 to-indigo-700",
    description: "Cartas estilo domino de encaixe para aprender nomes de frutas e alimentos do dia a dia.",
  },
  {
    title: "Libras STOP (Adedanha Adaptada)",
    badge: "Super Divertido",
    tag: "Avançado Lúdico",
    imageBg: "from-purple-600 to-indigo-800",
    description: "Fichas de jogo do famoso STOP adaptado com categorias visuais em Libras para turmas.",
  },
];

export const GallerySection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-950/80 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
          <FileCheck2 className="w-3.5 h-3.5 text-teal-400" /> Exemplos Reais Do Material
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-black mb-4 max-w-3xl mx-auto tracking-tight">
          Mais de 240 jogos em Libras prontos para imprimir. Veja alguns exemplos reais:
        </h2>

        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-14">
          Todos os PDFs foram elaborados com fontes legíveis, cores vivas e ilustrações claras para garantir rápido entendimento pelas crianças.
        </p>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {REAL_SAMPLES.map((sample, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Card Header Preview Box */}
              <div className={`h-48 bg-gradient-to-br ${sample.imageBg} p-6 text-white flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono font-bold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    PDF IMPRESSÃO
                  </span>
                  <span className="text-xs font-black bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow-md">
                    {sample.badge}
                  </span>
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-200">
                    {sample.tag}
                  </span>
                  <h3 className="text-xl font-black text-white leading-tight mt-1">
                    {sample.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {sample.description}
                </p>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pt-4 border-t border-slate-800">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    ✓ Alta Definição
                  </span>
                  <span className="text-slate-400">Pronto p/ Imprimir</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};