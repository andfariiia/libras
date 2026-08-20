"use client";

import React from "react";
import { MessageSquareText, Star, Quote } from "lucide-react";

const TESTIMONIAL_IMAGES = [
  {
    image: "https://i.ibb.co/MDXKVrF5/Gemini-Generated-Image-y650tfy650tfy650.jpg",
    title: "Depoimento de Professora",
  },
  {
    image: "https://i.ibb.co/JFz2sfFH/Gemini-Generated-Image-fv4fz6fv4fz6fv4f.jpg",
    title: "Depoimento de Educadora Especial",
  },
  {
    image: "https://i.ibb.co/Y4hbgPqc/Gemini-Generated-Image-7242ve7242ve7242.jpg",
    title: "Depoimento de Mãe",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-8 md:py-14 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3 shadow-md">
          <MessageSquareText className="w-3.5 h-3.5 text-cyan-400" />
          <span>RESULTADOS REAIS</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 tracking-tight">
          Amado por <span className="text-cyan-400 underline decoration-cyan-500/40">PROFESSORAS E MÃES</span>
        </h2>

        {/* Inspirational Quote */}
        <div className="max-w-3xl mx-auto mb-6 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 backdrop-blur-md">
          <Quote className="w-5 h-5 text-cyan-400 mx-auto mb-1 opacity-60" />
          <p className="text-xs sm:text-base font-medium text-slate-200 italic leading-relaxed">
            "Um material para quem precisa sair do improviso e começar a se comunicar com mais segurança, acolhimento e clareza."
          </p>
        </div>

        {/* Infinite Scrolling Testimonials Photos Carousel (Right to Left) */}
        <div className="relative w-full overflow-hidden py-3 px-1">
          <div className="animate-marquee-slow flex items-center gap-5 sm:gap-6">
            {[
              ...TESTIMONIAL_IMAGES,
              ...TESTIMONIAL_IMAGES,
              ...TESTIMONIAL_IMAGES,
              ...TESTIMONIAL_IMAGES,
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-72 sm:w-84 shrink-0 bg-slate-950/90 rounded-3xl p-3 border border-slate-800 text-center flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] shadow-2xl hover:border-cyan-500/40 cursor-pointer group"
              >
                <div className="w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 relative shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};