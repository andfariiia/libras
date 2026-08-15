"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Funciona para qual idade?",
    a: "Os materiais podem ser usados com crianças de diferentes idades, pois são visuais e adaptáveis. A professora ou responsável pode selecionar os jogos e atividades de acordo com o nível de compreensão e desenvolvimento da criança.",
  },
  {
    q: "Preciso saber Libras para aplicar?",
    a: "Não precisa ser especialista. O material foi pensado para professoras e mães que precisam começar de forma prática, usando sinais básicos, cartazes, jogos e atividades guiadas.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, o acesso é enviado automaticamente para o seu e-mail. Você poderá acessar o material pelo celular, computador ou tablet, baixar os arquivos, imprimir e começar a aplicar nas aulas.",
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
    <section className="py-8 md:py-14 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-cyan-300 border border-slate-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 font-bold text-cyan-400 sm:text-lg hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 font-normal">
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