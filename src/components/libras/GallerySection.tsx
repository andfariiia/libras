"use client";

import React from "react";
import { Sparkles, FileCheck2 } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-800 border border-teal-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <FileCheck2 className="w-3.5 h-3.5 text-teal-600" /> EXEMPLOS REAIS DO MATERIAL
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 max-w-3xl mx-auto">
          Mais de 240 jogos em Libras prontos para imprimir. Veja alguns exemplos reais:
        </h2>

        <p className="text-base text-slate-600 max-w-2xl mx-auto mb-12">
          Todos os PDFs foram elaborados com fontes legíveis, cores vivas e ilustrações claras para garantir rápido entendimento pelas crianças.
        </p>

        {/* Gallery Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {REAL_SAMPLES.map((sample, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Graphical Header Representing High Quality Printable */}
              <div className={`h-48 bg-gradient-to-br ${sample.imageBg} p-6 text-white flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-white/10 rounded-full blur-lg" />
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono font-bold bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    PDF IMPRESSÃO
                  </span>
                  <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full shadow-sm">
                    {sample.badge}
                  </span>
                </div>
                <div className="relative z-10">
                  <span className="text-[11px] uppercase tracking-wider text-cyan-200 font-semibold">
                    {sample.tag}
                  </span>
                  <h3 className="text-xl font-extrabold text-white leading-tight mt-1">
                    {sample.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {sample.description}
                </p>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200/80">
                  <span className="text-emerald-600 flex items-center gap-1">
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