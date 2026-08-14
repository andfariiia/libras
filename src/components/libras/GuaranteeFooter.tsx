"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, ArrowRight } from "lucide-react";

export const GuaranteeFooter = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      <section className="py-10 md:py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Guarantee Card */}
          <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl mb-10 relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <span className="text-[10px] sm:text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1 rounded-full">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </span>

            <h2 className="text-xl sm:text-3xl font-black text-white mt-3 mb-3">
              Risco Zero para Você!
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Teste o <strong>Kit Libras na Prática</strong> por 7 dias inteiros. Se você baixar os PDFs, testar com as crianças e sentir que não valeu a pena, devolvemos 100% do seu investimento sem perguntas nem burocracia.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> Reembolso Simples e Rápido no E-mail
            </div>
          </div>

          {/* Big Final CTA */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-3xl font-black text-white max-w-2xl mx-auto leading-tight">
              Pronta para transformar a inclusão na sua sala ou casa?
            </h3>

            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 rounded-2xl shadow-2xl shadow-cyan-500/25 hover:scale-105 transition-all cursor-pointer uppercase tracking-wide"
            >
              <span>SIM! QUERO GARANTIR MEU KIT COM 71% OFF</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-slate-400 font-medium">
              Acesso imediato enviado para o seu e-mail logo após a confirmação.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-8 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <p className="font-semibold text-slate-300">
            Kit Libras na Prática © {new Date().getFullYear()} — Todos os Direitos Reservados.
          </p>

          <p className="max-w-2xl mx-auto text-[10px] text-slate-500 leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Todos os conteúdos e produtos são de responsabilidade exclusiva da equipe Libras na Prática.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400 pt-1 font-medium">
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
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full text-slate-300 text-xs space-y-4 max-h-[80vh] overflow-y-auto shadow-2xl">
            <h3 className="font-bold text-lg text-white border-b border-slate-800 pb-2">
              {modalType === "terms" ? "Termos de Uso" : "Políticas de Privacidade"}
            </h3>
            <p className="leading-relaxed">
              {modalType === "terms"
                ? "Ao adquirir o Kit Libras na Prática, você recebe licença de uso pessoal e educacional para impressão dos materiais. Fica proibida a revenda ou distribuição comercial dos PDFs digitais sem autorização prévia."
                : "Seus dados estão 100% protegidos com criptografia SSL. Não compartilhamos informações pessoais com terceiros e utilizamos seu e-mail apenas para envio do acesso ao produto."}
            </p>
            <button
              onClick={() => setModalType(null)}
              className="w-full py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black rounded-xl mt-4 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};