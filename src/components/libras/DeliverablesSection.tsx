"use client";

import React from "react";
import {
  Package,
  Dices,
  Layers,
  FileText,
  Layout,
  Users,
  Sparkles,
  Download,
  ArrowUpRight
} from "lucide-react";

const DELIVERABLES = [
  {
    icon: Dices,
    title: "Jogos para imprimir",
    tag: "Jogos Interativos",
    desc: "Memória, bingo, pareamento, associação, desafios e jogos de cartas adaptados para Libras.",
    glowColor: "shadow-cyan-500/15",
    iconBg: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-300",
  },
  {
    icon: Layers,
    title: "Cards visuais de comunicação",
    tag: "Comunicação Direta",
    desc: "Sinais, palavras, emoções, rotina, comandos e situações do dia a dia.",
    glowColor: "shadow-blue-500/15",
    iconBg: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-300",
  },
  {
    icon: FileText,
    title: "Atividades práticas",
    tag: "Folhas em PDF",
    desc: "Folhas prontas para trabalhar alfabeto, números, verbos, sinais básicos e comunicação.",
    glowColor: "shadow-indigo-500/15",
    iconBg: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-300",
  },
  {
    icon: Layout,
    title: "Cartazes de apoio",
    tag: "Apoio Visual",
    desc: "Materiais para rotina escolar, combinados, emoções e pedidos.",
    glowColor: "shadow-amber-500/15",
    iconBg: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300",
  },
  {
    icon: Users,
    title: "Dinâmicas inclusivas — bônus",
    tag: "Bônus Especial",
    desc: "Propostas extras para envolver crianças surdas e ouvintes em atividades conjuntas.",
    glowColor: "shadow-emerald-500/15",
    iconBg: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
  },
];

export const DeliverablesSection = ({ onCtaClick }: { onCtaClick?: () => void }) => {
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Tudo o que vem no{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Kit de Jogos em Libras
            </span>
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
                onClick={onCtaClick}
                className={`group relative bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-800/90 shadow-2xl hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer ${item.glowColor} ${
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