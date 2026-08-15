"use client";

import React from "react";
import {
  Package,
  Dices,
  Layers,
  FileText,
  Layout,
  Users,
  CheckCircle2,
  Sparkles,
  Download,
  ArrowUpRight
} from "lucide-react";

const DELIVERABLES = [
  {
    icon: Dices,
    title: "Jogos para Imprimir",
    tag: "Kit Interativo",
    desc: "Memória, bingo, pareamento, associação de imagens e jogos de cartas adaptados para rápida fixação.",
    items: [
      "Jogo da Memória (60 cartas)",
      "Bingo em Libras (20 cartelas)",
      "UNO Adaptado em Libras",
      "Dominó Visual dos Sinais",
    ],
    accentColor: "from-teal-400 to-cyan-400",
    glowColor: "shadow-cyan-500/15",
    iconBg: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-300",
  },
  {
    icon: Layers,
    title: "Cards Visuais de Comunicação",
    tag: "Rotina & Expressões",
    desc: "Sinais práticos, palavras-chave, emoções, frases da rotina e comandos essenciais para o dia a dia.",
    items: [
      "Expressões e Emoções",
      "Cumprimentos e Cortesia",
      "Objetos Escolares e Comandos",
    ],
    accentColor: "from-cyan-400 to-blue-400",
    glowColor: "shadow-blue-500/15",
    iconBg: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-300",
  },
  {
    icon: FileText,
    title: "Atividades Práticas de Fixação",
    tag: "Exercícios em PDF",
    desc: "Exercícios visuais com alfabeto dactilológico, números, verbos e sinais básicos prontos para aplicar.",
    items: [
      "Datilologia e Escrita",
      "Caligrafia com Sinais",
      "Exercícios Visuais de Ligação",
    ],
    accentColor: "from-indigo-400 to-purple-400",
    glowColor: "shadow-indigo-500/15",
    iconBg: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-300",
  },
  {
    icon: Layout,
    title: "Cartazes de Apoio Visual",
    tag: "Decoração & Apoio",
    desc: "Cartazes ilustrados em alta definição para afixar na parede da sala ou no cantinho de estudos em casa.",
    items: [
      "Cartaz Alfabeto A4 em Libras",
      "Cartaz Numerais de 1 a 20",
      "Combinados da Sala Inclusiva",
    ],
    accentColor: "from-amber-300 to-orange-400",
    glowColor: "shadow-amber-500/15",
    iconBg: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300",
  },
  {
    icon: Users,
    title: "Dinâmicas Inclusivas em Grupo",
    tag: "Bônus Especial",
    desc: "Propostas de jogos coletivos para envolver turmas mistas (crianças surdas e ouvintes aprendendo juntas).",
    items: [
      "Guia da Turma Inclusiva",
      "Roteiro de Jogos em Roda",
      "Desafios de Parceria e Empatia",
    ],
    accentColor: "from-emerald-400 to-teal-300",
    glowColor: "shadow-emerald-500/15",
    iconBg: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
  },
];

export const DeliverablesSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-12 md:py-18 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-950/90 via-slate-900 to-teal-950/90 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3 shadow-lg shadow-cyan-500/10">
            <Package className="w-4 h-4 text-cyan-400" />
            <span>CONTEÚDO DO KIT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            O que você vai receber agora mesmo
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Acesso vitalício e imediato aos arquivos digitais em formato <strong className="text-white font-bold">PDF HD (300 DPI)</strong> prontos para baixar, imprimir e aplicar.
          </p>
        </div>

        {/* Deliverables Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {DELIVERABLES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-800/90 shadow-2xl hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${item.glowColor} ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Subtle top corner gradient hover effect */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />

                <div>
                  {/* Top Bar: Icon + Pill Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.iconBg} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>

                  {/* Checklist of Included Items */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      INCLUSO NO MÓDULO:
                    </span>
                    {item.items.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Tag */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-slate-300 font-semibold">
                    <Download className="w-3.5 h-3.5 text-cyan-400" /> PDF de Alta Resolução
                  </span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-md">
                    Imprima Ilimitado
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};