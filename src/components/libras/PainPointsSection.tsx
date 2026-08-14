"use client";

import React from "react";
import { XCircle, HelpCircle } from "lucide-react";

const PAIN_POINTS = [
  "Você tem uma criança surda na sala ou em casa e sente que precisa se comunicar melhor com ela",
  "Você quer incluir essa criança nas atividades, mas não sabe quais sinais usar no dia a dia",
  "Você perde tempo procurando materiais de Libras, mas encontra conteúdos difíceis, soltos ou pouco práticos",
  "Você tem medo de errar, travar ou deixar a criança de fora por falta de preparo",
  "Você sabe que inclusão não pode esperar, mas precisa de atividades prontas, visuais e simples de aplicar"
];

export const PainPointsSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-6 md:py-10 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-rose-950/80 border border-rose-500/30 text-rose-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <XCircle className="w-3.5 h-3.5 text-rose-400" /> Dores Reais
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-black mb-2 tracking-tight">
          Você está vivendo essa situação?
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-6">
          Se você se identifica com um ou mais pontos abaixo, saiba que a culpa não é sua. O sistema raramente oferece materiais prontos e verdadeiramente inclusivos.
        </p>

        {/* Pain Points Cards */}
        <div className="space-y-3 max-w-3xl mx-auto text-left mb-6">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg hover:border-rose-500/30 transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                ✕
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed pt-0.5">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-4 sm:p-5 max-w-2xl mx-auto flex items-center gap-3.5 text-left">
          <HelpCircle className="w-7 h-7 text-amber-400 shrink-0 hidden xs:block" />
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
            <strong className="text-amber-300">Chega de passar perrengue ou improvisar na hora da aula!</strong> Com os materiais estruturados do Kit, você economiza horas de planejamento e conquista a atenção do aluno em minutos.
          </p>
        </div>
      </div>
    </section>
  );
};