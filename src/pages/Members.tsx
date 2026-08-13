"use client";

import React from "react";
import {
  Sparkles,
  Cloud,
  Clock,
  Download,
  Headphones,
  ArrowRight,
  BookOpen,
  Gamepad2,
  FileText,
  Image as ImageIcon,
  Hand,
  CheckCircle2,
  ExternalLink,
  Heart,
  Home
} from "lucide-react";

export const Members = () => {
  const scrollToContent = () => {
    const el = document.getElementById("conteudos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-800 antialiased selection:bg-purple-500 selection:text-white">
      {/* Top Navbar Bar */}
      <nav className="bg-[#4C1088] border-b border-purple-800/60 sticky top-0 z-50 text-white py-3 px-4 sm:px-8 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-300 to-amber-400 text-purple-950 flex items-center justify-center font-black text-lg shadow-md">
              🤟
            </div>
            <div>
              <h1 className="font-black text-sm sm:text-base leading-tight">
                Libras na Prática
              </h1>
              <span className="text-[10px] text-purple-200 font-semibold tracking-wider uppercase block">
                Central do Aluno
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-xs font-bold text-purple-200 hover:text-white flex items-center gap-1.5 bg-purple-900/60 px-3.5 py-1.5 rounded-xl border border-purple-700/60 transition-colors"
            >
              <Home className="w-3.5 h-3.5" /> Página Inicial
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container Container with Soft Lilac Background */}
      <div className="bg-gradient-to-b from-[#3D0A63] via-[#5B13A2] to-[#2E074C] text-slate-100 min-h-screen pb-16">
        
        {/* 1. HEADER / SEÇÃO DE BOAS-VINDAS */}
        <section className="pt-8 sm:pt-14 pb-12 px-4 sm:px-6 relative overflow-hidden">
          {/* Subtle Background Glows */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Text & Micro-cards */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-5">
                {/* Tag Superior */}
                <div className="inline-flex items-center gap-2 bg-purple-900/80 border border-purple-400/30 text-purple-200 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>Bem-vinda! 🖐️</span>
                </div>

                {/* Título Principal */}
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Sua plataforma{" "}
                  <span className="text-amber-300 underline decoration-amber-400/60 underline-offset-4">
                    exclusiva
                  </span>{" "}
                  de Libras
                </h1>

                {/* Subtítulo */}
                <p className="text-sm sm:text-base text-purple-100 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Aqui você encontra tudo o que precisa para ensinar Libras de forma prática, divertida e cheia de amor. 💜
                </p>

                {/* 4 Micro-cards de Vantagens */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 text-left">
                  <div className="bg-purple-950/60 backdrop-blur-md border border-purple-400/20 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Cloud className="w-5 h-5 text-cyan-300" />
                    <span className="text-xs font-bold text-white">Acesso Vitalício</span>
                  </div>

                  <div className="bg-purple-950/60 backdrop-blur-md border border-purple-400/20 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Clock className="w-5 h-5 text-amber-300" />
                    <span className="text-xs font-bold text-white">Atualizações Grátis</span>
                  </div>

                  <div className="bg-purple-950/60 backdrop-blur-md border border-purple-400/20 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Download className="w-5 h-5 text-emerald-300" />
                    <span className="text-xs font-bold text-white">Download Imediato</span>
                  </div>

                  <div className="bg-purple-950/60 backdrop-blur-md border border-purple-400/20 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Headphones className="w-5 h-5 text-rose-300" />
                    <span className="text-xs font-bold text-white">Suporte Exclusivo</span>
                  </div>
                </div>

                {/* Botão CTA Principal */}
                <div className="pt-3">
                  <button
                    onClick={scrollToContent}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-purple-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Começar Agora</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Product Image inside Lilac Circle */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  {/* Lilac Glowing Background Circle */}
                  <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-400/40 via-purple-300/30 to-amber-200/30 flex items-center justify-center p-4 backdrop-blur-md border border-purple-300/40 shadow-2xl relative">
                    <div className="w-full h-full rounded-full bg-purple-900/80 border border-purple-400/30 overflow-hidden p-3 flex items-center justify-center shadow-inner">
                      <img
                        src="https://i.ibb.co/35WTpLhF/Gemini-Generated-Image-kqkqvbkqkqvbkqkq.png"
                        alt="Kit Libras na Prática"
                        className="w-full h-auto object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-2 -left-2 bg-amber-400 text-purple-950 font-black text-xs px-4 py-2 rounded-2xl shadow-xl border border-amber-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-950" />
                    <span>Kit Completo Libras</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. SEÇÃO: MEUS CONTEÚDOS */}
        <section id="conteudos" className="py-12 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="text-xs font-black text-amber-300 uppercase tracking-widest bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-400/30 shadow-md">
                ÁREA PRINCIPAL
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-1 tracking-tight">
                〰️ Meus Conteúdos 〰️
              </h2>
              <p className="text-xs sm:text-sm text-purple-200 font-medium">
                Escolha o que deseja acessar e faça o download instantâneo dos arquivos em PDF.
              </p>
            </div>

            {/* Grid 3 Cards Principais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Dinâmicas de Libras */}
              <div className="bg-slate-900/90 rounded-3xl border border-purple-400/30 overflow-hidden shadow-2xl hover:border-amber-300/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Card Capa Image */}
                  <div className="h-48 bg-gradient-to-tr from-purple-900 to-indigo-900 relative overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=80"
                      alt="Dinâmicas de Libras"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-amber-400 text-purple-950 flex items-center justify-center shadow-lg">
                      <BookOpen className="w-6 h-6 font-bold" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider bg-purple-950 px-2.5 py-0.5 rounded-full border border-purple-800">
                      MÓDULO 01
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2 group-hover:text-amber-300 transition-colors">
                      Dinâmicas de Libras
                    </h3>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">
                      Mais de 100 dinâmicas e jogos práticos para ensinar de forma divertida e significativa.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1qQgbtVMlXbXMyDvSMyy-PXGwEw1RkImG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Acessar Conteúdo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card 2: Jogos de Libras */}
              <div className="bg-slate-900/90 rounded-3xl border border-purple-400/30 overflow-hidden shadow-2xl hover:border-amber-300/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Card Capa Image */}
                  <div className="h-48 bg-gradient-to-tr from-purple-900 to-indigo-900 relative overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&auto=format&fit=crop&q=80"
                      alt="Jogos de Libras"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-amber-400 text-purple-950 flex items-center justify-center shadow-lg">
                      <Gamepad2 className="w-6 h-6 font-bold" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider bg-purple-950 px-2.5 py-0.5 rounded-full border border-purple-800">
                      MÓDULO 02
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2 group-hover:text-amber-300 transition-colors">
                      Jogos de Libras
                    </h3>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">
                      Jogos educativos como UNO e Bingo para fixar sinais e ampliar o vocabulário brincando.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1YvmR2NUY1g0n-z_AoOhxH9xQWFdFtDFW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Acessar Conteúdo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card 3: Atividades Práticas */}
              <div className="bg-slate-900/90 rounded-3xl border border-purple-400/30 overflow-hidden shadow-2xl hover:border-amber-300/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Card Capa Image */}
                  <div className="h-48 bg-gradient-to-tr from-purple-900 to-indigo-900 relative overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=80"
                      alt="Atividades Práticas"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-amber-400 text-purple-950 flex items-center justify-center shadow-lg">
                      <FileText className="w-6 h-6 font-bold" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider bg-purple-950 px-2.5 py-0.5 rounded-full border border-purple-800">
                      MÓDULO 03
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2 group-hover:text-amber-300 transition-colors">
                      Atividades Práticas
                    </h3>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">
                      Exercícios, desafios e atividades imprimíveis para usar em sala de aula ou em casa.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1qQgbtVMlXbXMyDvSMyy-PXGwEw1RkImG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Acessar Conteúdo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. SEÇÃO: BÔNUS EXCLUSIVOS */}
        <section className="py-12 px-4 sm:px-6 relative">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="text-xs font-black text-amber-300 uppercase tracking-widest bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-400/30 shadow-md">
                MATERIAL EXTRA
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-1 tracking-tight">
                〰️ Bônus Exclusivos 〰️
              </h2>
              <p className="text-xs sm:text-sm text-purple-200 font-medium">
                Aproveite também todos os seus presentes inclusos no combo.
              </p>
            </div>

            {/* Grid 2 Cards Bônus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Bônus Card 1: Cartazes Imprimíveis */}
              <div className="bg-purple-950/80 rounded-3xl border border-purple-400/30 p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-amber-300/50 transition-all backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-300 to-amber-400 text-purple-950 flex items-center justify-center shrink-0 shadow-lg">
                    <ImageIcon className="w-7 h-7 font-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider">
                      BÔNUS EXCLUSIVO 01
                    </span>
                    <h3 className="text-xl font-black text-white mt-1 mb-2">
                      Cartazes Imprimíveis
                    </h3>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">
                      Cartazes de Libras em alta resolução prontos para imprimir e decorar sua sala ou espaço.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-purple-800/80">
                  <a
                    href="https://drive.google.com/drive/folders/1utFp8SPCzKTwkQq7oQL4UUXDxQQK4sZK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-purple-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Acessar Bônus</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bônus Card 2: Preparação das Mãos */}
              <div className="bg-purple-950/80 rounded-3xl border border-purple-400/30 p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-amber-300/50 transition-all backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-300 to-amber-400 text-purple-950 flex items-center justify-center shrink-0 shadow-lg">
                    <Hand className="w-7 h-7 font-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-300 tracking-wider">
                      BÔNUS EXCLUSIVO 02
                    </span>
                    <h3 className="text-xl font-black text-white mt-1 mb-2">
                      Preparação das Mãos para Libras
                    </h3>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">
                      Exercícios práticos para preparar as mãos, melhorar coordenação e facilitar a execução dos sinais.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-purple-800/80">
                  <a
                    href="https://drive.google.com/drive/folders/1-EVh47sgrA_msQqVJNWnhXov28g257yP?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-purple-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Acessar Bônus</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. RODAPÉ */}
        <footer className="mt-12 pt-8 pb-12 border-t border-purple-800/60 text-center text-xs text-purple-300">
          <div className="max-w-4xl mx-auto px-4 space-y-3">
            <div className="flex items-center justify-center gap-2 text-amber-300 font-bold">
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Obrigado por fazer parte da nossa comunidade inclusiva!</span>
            </div>
            <p className="text-purple-200 font-medium">
              Kit Libras na Prática © {new Date().getFullYear()} — Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-purple-300/80 max-w-xl mx-auto">
              Precisa de ajuda ou suporte técnico com seus downloads? Entre em contato pelo e-mail oficial de suporte ao cliente.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Members;