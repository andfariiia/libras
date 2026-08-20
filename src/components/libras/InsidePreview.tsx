"use client";

import React, { useState } from "react";
import { Eye, Check, Maximize2 } from "lucide-react";
import { PreviewModal } from "./PreviewModal";

const SAMPLES = [
  {
    title: "Jogo da Memória dos Sinais",
    category: "Jogos em Dupla",
    desc: "Ideal para fixação de vocabulário básico. Cartas coloridas com ilustração da palavra e a mão correspondente em Libras.",
    badge: "60 Cartas Impressas",
    color: "from-teal-500 to-cyan-500",
    icon: "🧠",
  },
  {
    title: "Bingo do Alfabeto e Sinais",
    category: "Atividade em Grupo",
    desc: "20 cartelas prontas para sorteio. Promove a inclusão das crianças ouvintes e surdas no mesmo momento de lazer.",
    badge: "20 Cartelas + Fichas",
    color: "from-indigo-500 to-purple-500",
    icon: "🎯",
  },
  {
    title: "Cards de Desafio e Diálogo",
    category: "Comunicação Prática",
    desc: "Cartões de bolso com cumprimentos, pedidos de ajuda, sentimentos e combinados da rotina escolar.",
    badge: "48 Cards Visuais",
    color: "from-amber-500 to-orange-500",
    icon: "🃏",
  },
  {
    title: "UNO Adaptado em Libras",
    category: "Jogo Dinâmico",
    desc: "As clássicas regras do UNO associadas aos números e sinais em Libras para aprender enquanto joga.",
    badge: "Baralho Completo",
    color: "from-emerald-500 to-teal-500",
    icon: "🎲",
  },
  {
    title: "Cartazes da Rotina e Emoções",
    category: "Apoio Visual",
    desc: "Cartazes para afixar na parede da sala ou no quarto da criança com os sinais do dia a dia.",
    badge: "15 Cartazes A4",
    color: "from-cyan-500 to-blue-500",
    icon: "🖼️",
  },
  {
    title: "Atividades de Caligrafia e Datilologia",
    category: "Alfabetização",
    desc: "Exercícios lúdicos de ligação de pontos, caça-palavras e reconhecimento do alfabeto em Libras.",
    badge: "50 Páginas Práticas",
    color: "from-rose-500 to-pink-500",
    icon: "📝",
  },
];

export const InsidePreview = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedSample, setSelectedSample] = useState<(typeof SAMPLES)[0] | null>(null);

  const filteredSamples = activeTab === "todos" 
    ? SAMPLES 
    : SAMPLES.filter(s => s.category.toLowerCase().includes(activeTab));

  return (
    <>
      <section className="py-10 md:py-16 bg-slate-900 border-y border-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5 text-cyan-400" /> Veja Por Dentro do Material
          </div>

          {/* Section Title */}
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-tight">
            Veja os jogos e materiais que você recebe
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto mb-8">
            Clique em qualquer jogo abaixo para ver detalhes e dicas de utilização com os seus alunos.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "todos", label: "Todos os Jogos (+240)" },
              { id: "dupla", label: "Jogos em Dupla" },
              { id: "grupo", label: "Em Grupo / Bingo" },
              { id: "comunicação", label: "Cards & Rotina" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                    : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Samples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 text-left">
            {filteredSamples.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSample(item)}
                className="group bg-slate-950/70 rounded-3xl border border-slate-800/80 p-5 shadow-xl hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between backdrop-blur-md cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl shadow-inner">
                      {item.icon}
                    </div>
                    <span className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full text-slate-950 bg-gradient-to-r ${item.color} shadow-sm`}>
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5 mb-1.5 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {item.title}
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                    <Check className="w-3.5 h-3.5" /> Clique p/ ver detalhes
                  </span>
                  <span className="text-cyan-400 font-bold group-hover:underline text-[11px]">Ampliar ➔</span>
                </div>
              </div>
            ))}
          </div>

          {/* Intermediate Banner */}
          <div className="bg-gradient-to-r from-teal-950 via-slate-950 to-cyan-950 border border-teal-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative overflow-hidden">
            <div className="space-y-1 z-10">
              <h4 className="text-lg font-black flex items-center justify-center sm:justify-start gap-2 text-cyan-300">
                <Eye className="w-4 h-4 text-amber-400" />
                Arquivos Digitais em Alta Resolução
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Baixe no celular, tablet ou computador. Imprima quantas vezes precisar.
              </p>
            </div>
            <button
              onClick={onCtaClick}
              className="z-10 shrink-0 bg-gradient-to-r from-teal-400 to-cyan-300 text-slate-950 font-black px-6 py-3 rounded-2xl text-xs sm:text-sm transition-transform hover:scale-105 shadow-xl shadow-cyan-500/20 cursor-pointer"
            >
              GARANTIR ACESSO AGORA ➔
            </button>
          </div>
        </div>
      </section>

      {/* Preview Modal Lightbox */}
      <PreviewModal
        item={selectedSample}
        onClose={() => setSelectedSample(null)}
        onCtaClick={onCtaClick}
      />
    </>
  );
};