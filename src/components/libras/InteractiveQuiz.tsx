"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, PartyPopper } from "lucide-react";

const QUIZ_QUESTIONS = [
  {
    question: "1. Qual é o seu principal objetivo com o aluno / criança?",
    options: [
      { text: "Iniciar a comunicação do zero em Libras", icon: "🌱" },
      { text: "Incluir um aluno surdo em uma turma ouvinte", icon: "🏫" },
      { text: "Ensinar Libras brincando em casa com meu filho(a)", icon: "🏡" },
      { text: "Aumentar a atenção visual e vocabulário de sinais", icon: "🧠" },
    ],
  },
  {
    question: "2. Qual a faixa etária principal das crianças?",
    options: [
      { text: "Educação Infantil (3 a 6 anos)", icon: "🎨" },
      { text: "Ensino Fundamental I (7 a 11 anos)", icon: "📚" },
      { text: "Atendimento Educacional Especializado (AEE)", icon: "🧩" },
      { text: "Idades Mistas / Família Unida", icon: "👨‍👩‍👧" },
    ],
  },
];

export const InteractiveQuiz = ({ onFinish }: { onFinish: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (index: number) => {
    const newAnswers = [...selectedAnswers, index];
    setSelectedAnswers(newAnswers);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-8 md:py-12 bg-slate-950 text-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl relative backdrop-blur-xl">
          {!showResult ? (
            <div>
              {/* Quiz Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                  DIAGNÓSTICO RÁPIDO ({currentStep + 1}/{QUIZ_QUESTIONS.length})
                </span>
                <span className="text-xs font-mono text-slate-400">30 segundos</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white mb-5">
                {QUIZ_QUESTIONS[currentStep].question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-400 hover:bg-slate-800/80 transition-all text-left flex items-center gap-3 group cursor-pointer"
                  >
                    <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                      {opt.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Quiz Recommendation Result */
            <div className="text-center space-y-3 py-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <PartyPopper className="w-7 h-7 font-black" />
              </div>

              <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">
                100% RECOMENDADO PARA O SEU PERFIL!
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                O Kit Libras na Prática se encaixa perfeitamente na sua rotina!
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Baseado nas suas respostas, você terá aproveitamento imediato dos <strong>+240 jogos</strong>, com destaque para o Jogo da Memória e os Cards de Rotina Visuais.
              </p>

              <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-3.5 max-w-md mx-auto text-left text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Desconto de 71% Pré-Aplicado
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Acesso imediato no seu e-mail com 4 Bônus
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onFinish}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black rounded-2xl text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>GARANTIR MEU KIT COM DESCONTO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 py-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Refazer teste
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};