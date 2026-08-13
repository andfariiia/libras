"use client";

import React from "react";
import { X, CheckCircle2, Download, Printer, Zap } from "lucide-react";

interface SampleItem {
  title: string;
  category: string;
  desc: string;
  badge: string;
  icon: string;
}

export const PreviewModal = ({
  item,
  onClose,
  onCtaClick,
}: {
  item: SampleItem | null;
  onClose: () => void;
  onCtaClick: () => void;
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-5 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl">
            {item.icon}
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
              {item.category}
            </span>
            <h3 className="text-xl font-black text-white">{item.title}</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
          {item.desc}
        </p>

        <div className="space-y-2 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> Formato PDF de Alta Resolução (300 DPI)
          </div>
          <div className="flex items-center gap-2 text-cyan-300">
            <CheckCircle2 className="w-4 h-4" /> Pronto para imprimir em papel A4 ou sulfite comum
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Acompanha gabarito de aplicação e instrução de jogos
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onCtaClick();
            }}
            className="flex-1 py-3.5 px-5 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform cursor-pointer"
          >
            GARANTIR ESSE JOGO NO KIT COMPLETO ➔
          </button>
        </div>
      </div>
    </div>
  );
};