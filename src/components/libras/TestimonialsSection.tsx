"use client";

import React from "react";
import { Star, MessageCircle, Quote, CheckCheck } from "lucide-react";

const WHATSAPP_TESTIMONIALS = [
  {
    name: "Prof. Claudia Ramos",
    role: "Professora do Ensino Fundamental • SP",
    message: "Aline, estou apaixonada pelo material! Eu tinha um aluno surdo no 2º ano e não sabia como interagir. O Bingo e o Jogo da Memória mudaram o clima da sala inteira. A turma toda quis aprender os sinais!",
    time: "14:23",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Mariana Costa",
    role: "Mãe do Gabriel (8 anos) • MG",
    message: "Comprei o kit para usar em casa com meu filho. A gente imprime e joga no final de semana. Ele se sente muito mais confiante para se comunicar. Valeu cada centavo!",
    time: "18:05",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Profa. Luciana Dias",
    role: "Educadora Especial • RJ",
    message: "Material riquíssimo, muito bem organizado em PDF. O UNO em Libras é sucesso absoluto! Já indiquei para todas as colegas da escola.",
    time: "09:41",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Amado por <span className="text-cyan-400 underline decoration-cyan-500/40">PROFESSORAS E MÃES</span>
        </h2>

        {/* Inspirational Quote */}
        <div className="max-w-3xl mx-auto mb-14 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-md">
          <Quote className="w-8 h-8 text-cyan-400 mx-auto mb-2 opacity-60" />
          <p className="text-base sm:text-xl font-medium text-slate-200 italic leading-relaxed">
            "Um material para quem precisa sair do improviso e começar a se comunicar com mais segurança, acolhimento e clareza."
          </p>
        </div>

        {/* WhatsApp Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {WHATSAPP_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-800/90 border border-slate-700/90 rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:border-cyan-500/50 transition-colors"
            >
              <div>
                {/* User Header */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-cyan-400"
                  />
                  <div>
                    <h3 className="font-bold text-slate-100 text-sm">{t.name}</h3>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* WhatsApp Chat Bubble Style */}
                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-2xl p-4 text-emerald-100 text-xs sm:text-sm leading-relaxed relative">
                  <p>"{t.message}"</p>
                  <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-emerald-400 font-mono">
                    <span>{t.time}</span>
                    <CheckCheck className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};