"use client";

import React from "react";
import { Package, Dices, CreditCard, FileText, Layout, HeartHandshake } from "lucide-react";

const DELIVERABLES = [
  {
    icon: "🎲",
    lucide: Dices,
    title: "Jogos para imprimir",
    desc: "Memória, bingo, pareamento, associação de imagens e jogos de cartas adaptados.",
    items: ["Jogo da Memória (60 cartas)", "Bingo em Libras (20 cartelas)", "UNO de Libras", "Dominó dos Sinais"],
    bg: "from-teal-500 to-cyan-600",
  },
  {
    icon: "🃏",
    lucide: CreditCard,
    title: "Cards visuais de comunicação",
    desc: "Sinais práticos, palavras chave, emoções, frases da rotina e comandos do dia a dia.",
    items: ["Expressões e Emoções", "Cumprimentos e Cortesia", "Objeto Escolar e Comandos"],
    bg: "from-cyan-500 to-blue-600",
  },
  {
    icon: "📝",
    lucide: FileText,
    title: "Atividades práticas",
    desc: "Exercícios visuais com alfabeto dactilológico, números, verbos e sinais básicos.",
    items: ["Datilologia e Escrita", "Caligrafia com Sinais", "Exercícios de Fixação Visuais"],
    bg: "from-indigo-500 to-purple-600",
  },
  {
    icon: "🖼️",
    lucide: Layout,
    title: "Cartazes de apoio visual",
    desc: "Cartazes para afixar em sala ou em casa: rotina escolar, combinados, emoções e pedidos.",
    items: ["Cartaz Alfabeto A4", "Cartaz Numerais de 1 a 20", "Combinados da Sala"],
    bg: "from-amber-500 to-orange-600",
  },
  {
    icon: "🤝",
    lucide: HeartHandshake,
    title: "Dinâmicas inclusivas (Bônus)",
    desc: "Propostas de jogos coletivos para envolver turmas mistas (surdos e ouvintes juntos).",
    items: ["Guia da Turma Inclusiva", "Roteiro de Jogos em Roda", "Desafios de Parceria"],
    bg: "from-emerald-500 to-teal-600",
  },
];

export const DeliverablesSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-cyan-100 text-cyan-800 border border-cyan-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Package className="w-3.5 h-3.5 text-cyan-600" /> O QUE VOCÊ VAI RECEBER AGORA MESMO
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Tudo o que vem no Kit de Jogos em Libras
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Acesso vitalício aos arquivos digitais prontos em formato PDF de alta resolução para baixar e imprimir.
        </p>

        {/* Grid of 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {DELIVERABLES.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-50/50 to-white" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] uppercase font-bold text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${item.bg}`}>
                    Acesso Imediato
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.items.map((sub, sIdx) => (
                    <li key={sIdx} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Formato: PDF HD</span>
                <span className="text-teal-600">Imprima Ilimitado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};