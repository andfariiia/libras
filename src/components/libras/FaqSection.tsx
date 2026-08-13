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
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" /> TIRE SUAS DÚVIDAS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-teal-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
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