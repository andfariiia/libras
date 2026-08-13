"use client";

import React from "react";
import { Package } from "lucide-react";

const DELIVERABLES = [
  {
    icon: "🎲",
    title: "Jogos para imprimir",
    desc: "Memória, bingo, pareamento, associação de imagens e jogos de cartas adaptados.",
    items: ["Jogo da Memória (60 cartas)", "Bingo em Libras (20 cartelas)", "UNO de Libras", "Dominó dos Sinais"],
    bg: "from-teal-500 to-cyan-500",
  },
  {
    icon: "🃏",
    title: "Cards visuais de comunicação",
    desc: "Sinais práticos, palavras chave, emoções, frases da rotina e comandos do dia a dia.",
    items: ["Expressões e Emoções", "Cumprimentos e Cortesia", "Objeto Escolar e Comandos"],
    bg: "from-cyan-500 to-blue-500",
  },
  {
    icon: "📝",
    title: "Atividades práticas",
    desc: "Exercícios visuais com alfabeto dactilológico, números, verbos e sinais básicos.",
    items: ["Datilologia e Escrita", "Caligrafia com Sinais", "Exercícios de Fixação Visuais"],
    bg: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🖼️",
    title: "Cartazes de apoio visual",
    desc: "Cartazes para afixar em sala ou em casa: rotina escolar, combinados, emoções e pedidos.",
    items: ["Cartaz Alfabeto A4", "Cartaz Numerais de 1 a 20", "Combinados da Sala"],
    bg: "from-amber-500 to-orange-500",
  },
  {
    icon: "🤝",
    title: "Dinâmicas inclusivas (Bônus)",
    desc: "Propostas de jogos coletivos para envolver turmas mistas (surdos e ouvintes juntos).",
    items: ["Guia da Turma Inclusiva", "Roteiro de Jogos em Roda", "Desafios de Parceria"],
    bg: "from-emerald-500 to-teal-500",
  },
];

export const DeliverablesSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-10 md:py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Package className="w-3.5 h-3.5 text-cyan-400" /> O QUE VOCÊ VAI RECEBER AGORA MESMO
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-black mb-3 tracking-tight">
          Tudo o que vem no Kit de Jogos em Libras
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10">
          Acesso vitalício aos arquivos digitais prontos em formato PDF de alta resolução para baixar e imprimir.
        </p>

        {/* Grid of 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {DELIVERABLES.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-900/80 rounded-3xl p-6 border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-slate-950 border border-slate-800 text-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] uppercase font-black text-slate-950 px-2.5 py-0.5 rounded-full bg-gradient-to-r ${item.bg}`}>
                    Acesso Imediato
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.items.map((sub, sIdx) => (
                    <li key={sIdx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Formato: PDF HD</span>
                <span className="text-cyan-400 font-bold">Imprima Ilimitado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};