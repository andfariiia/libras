"use client";

import React from "react";
import { Award, Heart, BookOpen } from "lucide-react";

export const CreatorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg flex flex-col md:flex-row items-center gap-8">
          {/* Creator Avatar Frame with Neon Border */}
          <div className="relative shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-teal-500 via-cyan-500 to-indigo-500 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                alt="Aline Fernandes"
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-300/40 shadow-sm flex items-center gap-1">
              <Award className="w-3 h-3" /> Especialista
            </div>
          </div>

          {/* Description Content */}
          <div className="text-center md:text-left space-y-3">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              QUEM CRIOU O MATERIAL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Aline Fernandes
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Educadora especializada em inclusão escolar e materiais práticos para professoras e famílias. Com mais de 8 anos de experiência no ensino inclusivo, desenvolveu o método "Libras na Prática" para transformar a teoria complexa em jogos fáceis e acessíveis.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1 text-teal-700">
                <Heart className="w-4 h-4 text-rose-500" /> +2.000 Alunas
              </span>
              <span className="flex items-center gap-1 text-teal-700">
                <BookOpen className="w-4 h-4 text-cyan-600" /> 100% Didático
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};