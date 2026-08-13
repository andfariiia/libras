"use client";

import React, { useState } from "react";
import { ShieldCheck, Lock, Award, Heart } from "lucide-react";
import { showSuccess } from "@/utils/toast";

export const GuaranteeFooter = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Guarantee Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-500/30 shadow-xl mb-14 relative overflow-hidden">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-md">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Risco Zero para Você!
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Teste o <strong>Kit Libras na Prática</strong> por 7 dias inteiros. Se você baixar os PDFs, testar com as crianças e sentir que não valeu a pena, devolvemos 100% do seu investimento sem perguntas nem burocracia.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-xl">
              <Award className="w-4 h-4 text-emerald-600" /> Reembolso Simples e Rápido no E-mail
            </div>
          </div>

          {/* Big Final CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Pronta para transformar a inclusão na sua sala ou casa?
            </h3>

            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-extrabold text-white bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 rounded-2xl shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              SIM! QUERO GARANTIR MEU KIT COM 71% OFF ➔
            </button>

            <p className="text-xs text-slate-500 font-medium">
              Acesso imediato enviado para o seu e-mail logo após a confirmação.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="font-semibold text-slate-300">
            Kit Libras na Prática © {new Date().getFullYear()} — Todos os Direitos Reservados.
          </p>

          <p className="max-w-2xl mx-auto text-[11px] text-slate-500 leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Todos os conteúdos e produtos são de responsabilidade exclusiva da equipe Libras na Prática.
          </p>

          <div className="flex justify-center gap-6 text-xs text-slate-400 pt-2 font-medium">
            <button onClick={() => setModalType("terms")} className="hover:text-cyan-400 underline cursor-pointer">
              Termos de Uso
            </button>
            <span>•</span>
            <button onClick={() => setModalType("privacy")} className="hover:text-cyan-400 underline cursor-pointer">
              Políticas de Privacidade
            </button>
          </div>
        </div>
      </footer>

      {/* Modal for Legal Documents */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full text-slate-800 text-xs space-y-4 max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-lg text-slate-900 border-b pb-2">
              {modalType === "terms" ? "Termos de Uso" : "Políticas de Privacidade"}
            </h3>
            <p className="leading-relaxed">
              {modalType === "terms"
                ? "Ao adquirir o Kit Libras na Prática, você recebe licença de uso pessoal e educacional para impressão dos materiais. Fica proibida a revenda ou distribuição comercial dos PDFs digitais sem autorização prévia."
                : "Seus dados estão 100% protegidos com criptografia SSL. Não compartilhamos informações pessoais com terceiros e utilizamos seu e-mail apenas para envio do acesso ao produto."}
            </p>
            <button
              onClick={() => setModalType(null)}
              className="w-full py-2 bg-slate-900 text-white font-bold rounded-xl mt-4 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};