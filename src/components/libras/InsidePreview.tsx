"use client";

import React, { useState } from "react";
import { Eye, Layers, Sparkles, Check } from "lucide-react";

const SAMPLES = [
  {
    title: "Jogo da Memória dos Sinais",
    category: "Jogos em Dupla",
    desc: "Ideal para fixação de vocabulário básico. Cartas coloridas com ilustração da palavra e a mão correspondente em Libras.",
    badge: "60 Cartas Impressas",
    color: "from-teal-500 to-cyan-600",
    icon: "🧠",
  },
  {
    title: "Bingo do Alfabeto e Sinais",
    category: "Atividade em Grupo",
    desc: "20 cartelas prontas para sorteio. Promove a inclusão das crianças ouvintes e surdas no mesmo momento de lazer.",
    badge: "20 Cartelas + Fichas",
    color: "from-purple-500 to-indigo-600",
    icon: "🎯",
  },
  {
    title: "Cards de Desafio e Diálogo",
    category: "Comunicação Prática",
    desc: "Cartões de bolso com cumprimentos, pedidos de ajuda, sentimentos e combinados da rotina escolar.",
    badge: "48 Cards Visuais",
    color: "from-amber-500 to-orange-600",
    icon: "🃏",
  },
  {
    title: "UNO Adaptado em Libras",
    category: "Jogo Dinâmico",
    desc: "As clássicas regras do UNO associadas aos números e sinais em Libras para aprender enquanto joga.",
    badge: "Baralho Completo",
    color: "from-emerald-500 to-teal-600",
    icon: "🎲",
  },
  {
    title: "Cartazes da Rotina e Emoções",
    category: "Apoio Visual",
    desc: "Cartazes para afixar na parede da sala ou no quarto da criança com os sinais do dia a dia.",
    badge: "15 Cartazes A4",
    color: "from-blue-500 to-cyan-600",
    icon: "🖼️",
  },
  {
    title: "Atividades de Caligrafia e Datilologia",
    category: "Alfabetização",
    desc: "Exercícios lúdicos de ligação de pontos, caça-palavras e reconhecimento do alfabeto em Libras.",
    badge: "50 Páginas Práticas",
    color: "from-rose-500 to-pink-600",
    icon: "📝",
  },
];

export const InsidePreview = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [activeTab, setActiveTab] = useState("todos");

  const filteredSamples = activeTab === "todos" 
    ? SAMPLES 
    : SAMPLES.filter(s => s.category.toLowerCase().includes(activeTab));

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 border border-teal-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Eye className="w-3.5 h-3.5" /> VEJA POR DENTRO
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Veja os jogos e materiais que você recebe
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-10">
          Você recebe jogos como Memória dos Sinais, Bingo do Alfabeto em Libras, Cards de Desafio, Jogo dos Sinais, UNO adaptado, cartazes e atividades de rotina.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "todos", label: "Todos os Jogos (+240)" },
            { id: "dupla", label: "Jogos em Dupla" },
            { id: "grupo", label: "Em Grupo / Bingo" },
            { id: "comunicação", label: "Cards & Rotina" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          {filteredSamples.map((item, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${item.color}`}>
                    {item.badge}
                  </span>
                </div>

                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="w-3.5 h-3.5" /> Arquivo PDF HD
                </span>
                <span className="text-slate-400">Pronto p/ Imprimir</span>
              </div>
            </div>
          ))}
        </div>

        {/* Intermediate Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-cyan-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left border border-teal-500/20">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold flex items-center justify-center sm:justify-start gap-2 text-cyan-300">
              <Sparkles className="w-5 h-5 text-amber-400" />
              🕹️ Arquivos em PDF de alta qualidade
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Baixe no celular, computador ou tablet. Imprima quantas vezes quiser sem limitações.
            </p>
          </div>
          <button
            onClick={onCtaClick}
            className="shrink-0 bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold px-6 py-3 rounded-2xl text-sm transition-transform hover:scale-105 shadow-md cursor-pointer"
          >
            Garantir Acesso Imediato ➔
          </button>
        </div>
      </div>
    </section>
  );
};