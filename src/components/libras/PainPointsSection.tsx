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
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-slate-50 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 border border-rose-200/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <XCircle className="w-3.5 h-3.5 text-rose-600" /> × DORES REAIS
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Você está vivendo essa situação?
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Se você se identifica com um ou mais pontos abaixo, saiba que a culpa não é sua. O sistema raramente oferece materiais prontos e verdadeiramente inclusivos.
        </p>

        {/* List of Pain Points Cards */}
        <div className="space-y-4 max-w-3xl mx-auto text-left mb-12">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
                ✕
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed pt-1">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto flex items-center gap-4 text-left">
          <HelpCircle className="w-8 h-8 text-amber-600 shrink-0 hidden xs:block" />
          <p className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
            <strong>Chega de passar perrengue ou improvisar na hora da aula!</strong> Com os materiais estruturados do Kit, você economiza horas de planejamento e conquista a atenção do aluno em minutos.
          </p>
        </div>
      </div>
    </section>
  );
};