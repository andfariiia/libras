"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Funciona para qual idade?",
    a: "O Kit foi projetado principalmente para crianças da Educação Infantil e Ensino Fundamental I (3 a 12 anos). Porém, por ser altamente visual e lúdico, serve perfeitamente para jovens e adultos em início de aprendizagem em Libras.",
  },
  {
    q: "Preciso saber Libras para aplicar?",
    a: "Não! O material é 100% intuitivo e acompanha ilustrações claras, datilologia em cada carta e orientações para você aplicar mesmo sem nunca ter feito curso de Libras.",
  },
  {
    q: "Como recebo o acesso?",
    a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com os links para baixar todos os arquivos em PDF HD diretamente no seu celular ou computador.",
  },
  {
    q: "Posso imprimir o material?",
    a: "Com certeza! Os arquivos estão em formato PDF pronto para impressão. Você pode imprimir na sua casa, na escola ou em qualquer gráfica rápida, quantas vezes quiser.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você possui 7 dias de garantia incondicional. Se por qualquer motivo achar que o material não atendeu suas expectativas, basta nos enviar um e-mail para receber 100% do seu dinheiro de volta.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-6 md:py-10 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-cyan-300 border border-slate-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-4xl font-black">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 font-bold text-white text-sm sm:text-base hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};