"use client";

import React from "react";
import { Award, Heart, BookOpen } from "lucide-react";

export const CreatorSection = () => {
  return (
    <section className="py-6 md:py-10 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-8 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center gap-6">
          {/* Creator Avatar Frame */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-teal-400 via-cyan-400 to-indigo-500 shadow-xl shadow-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                alt="Aline Fernandes"
                className="w-full h-full rounded-full object-cover border-2 border-slate-950"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 text-amber-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-amber-400/40 shadow-md flex items-center gap-1">
              <Award className="w-3 h-3" /> Especialista
            </div>
          </div>

          {/* Description Content */}
          <div className="text-center md:text-left space-y-2">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
              QUEM CRIOU O MATERIAL
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Aline Fernandes
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Educadora especializada em inclusão escolar e materiais práticos para professoras e famílias. Com mais de 8 anos de experiência no ensino inclusivo, desenvolveu o método "Libras na Prática" para transformar a teoria complexa em jogos fáceis e acessíveis.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs font-bold text-slate-200">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Heart className="w-3.5 h-3.5 text-rose-400" /> +2.000 Alunas
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <BookOpen className="w-3.5 h-3.5 text-teal-400" /> 100% Didático
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};