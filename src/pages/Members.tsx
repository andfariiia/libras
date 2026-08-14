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
  Lock
} from "lucide-react";

export const Members = () => {
  const scrollToContent = () => {
    const el = document.getElementById("conteudos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navbar Bar */}
      <nav className="bg-slate-950/90 border-b border-cyan-500/20 sticky top-0 z-50 text-white py-3 px-4 sm:px-8 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-400 via-cyan-300 to-amber-300 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-500/20">
              🤟
            </div>
            <div>
              <h1 className="font-black text-base sm:text-lg leading-tight text-white tracking-tight">
                Dinâmicas e Jogos Em Libras!
              </h1>
              <span className="text-[10px] text-cyan-300 font-bold tracking-widest uppercase block">
                Área de Membros VIP
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Acesso Confirmado</span>
          </div>
        </div>
      </nav>

      {/* Main Container Container */}
      <div className="relative overflow-hidden pb-16">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* 1. HEADER / SEÇÃO DE BOAS-VINDAS */}
        <section className="pt-8 sm:pt-14 pb-12 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Text & Micro-cards */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-5">
                {/* Tag Superior */}
                <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>Seja Muito Bem-vinda! 🖐️</span>
                </div>

                {/* Título Principal */}
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Sua plataforma{" "}
                  <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                    exclusiva
                  </span>{" "}
                  de Libras
                </h1>

                {/* Subtítulo */}
                <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Aqui você encontra tudo o que precisa para ensinar e praticar Libras de forma simples, divertida e 100% pronta para imprimir. ⚡
                </p>

                {/* 4 Micro-cards de Vantagens */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 text-left">
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Cloud className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-100">Acesso Vitalício</span>
                  </div>

                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-bold text-slate-100">Atualizações Grátis</span>
                  </div>

                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Download className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-slate-100">Download PDF</span>
                  </div>

                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-lg flex flex-col items-start gap-1">
                    <Headphones className="w-5 h-5 text-teal-300" />
                    <span className="text-xs font-bold text-slate-100">Suporte Dedicado</span>
                  </div>
                </div>

                {/* Botão CTA Principal */}
                <div className="pt-3">
                  <button
                    onClick={scrollToContent}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-2xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Acessar Meus Materiais</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Product Image inside Glowing Circle */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  {/* Glowing Background Ring */}
                  <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-teal-500/20 via-cyan-500/20 to-amber-300/20 flex items-center justify-center p-4 backdrop-blur-md border border-cyan-500/30 shadow-2xl relative">
                    <div className="w-full h-full rounded-full bg-slate-900/90 border border-slate-800 overflow-hidden p-3 flex items-center justify-center shadow-inner">
                      <img
                        src="https://i.ibb.co/35WTpLhF/Gemini-Generated-Image-kqkqvbkqkqvbkqkq.png"
                        alt="Kit Dinâmicas e Jogos Em Libras!"
                        className="w-full h-auto object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs px-4 py-2 rounded-2xl shadow-xl border border-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-950 font-bold" />
                    <span>Kit Completo Liberado</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. SEÇÃO: MEUS CONTEÚDOS */}
        <section id="conteudos" className="py-12 px-4 sm:px-6 relative z-10 border-t border-slate-800/80">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="text-xs font-black text-cyan-300 uppercase tracking-widest bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-500/30 shadow-md">
                ÁREA PRINCIPAL
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-1 tracking-tight">
                Meus Conteúdos Práticos
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Escolha o que deseja acessar e faça o download instantâneo dos arquivos em alta resolução.
              </p>
            </div>

            {/* Grid 3 Cards Principais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Dinâmicas de Libras */}
              <div className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md">
                <div>
                  {/* Card Capa Image com material real */}
                  <div className="h-52 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                    <img
                      src="https://i.ibb.co/67DKVwGy/bonus-3-edf-otimizado.webp"
                      alt="Dinâmicas de Libras"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg font-bold">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800">
                      MÓDULO 01
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2 group-hover:text-cyan-300 transition-colors">
                      Dinâmicas de Libras
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      Mais de 100 dinâmicas e jogos práticos para ensinar de forma divertida, inclusiva e significativa.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1qQgbtVMlXbXMyDvSMyy-PXGwEw1RkImG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Acessar Conteúdo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card 2: Jogos de Libras */}
              <div className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md">
                <div>
                  {/* Card Capa Image com material real */}
                  <div className="h-52 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                    <img
                      src="https://i.ibb.co/XfL47vmK/uno-libras-1.webp"
                      alt="Jogos de Libras"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg font-bold">
                      <Gamepad2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800">
                      MÓDULO 02
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2 group-hover:text-cyan-300 transition-colors">
                      Jogos de Libras
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      Jogos educativos como UNO e Bingo adaptados para fixar sinais e ampliar o vocabulário brincando.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1YvmR2NUY1g0n-z_AoOhxH9xQWFdFtDFW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Acessar Conteúdo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card 3: Atividades Práticas */}
              <div className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md">
                <div>
                  {/* Card Capa Image com material real */}
                  <div className="h-52 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                    <img
                      src="https://i.ibb.co/3y2YYF6Q/jogo-dos-sinais-atividades.webp"
                      alt="Atividades Práticas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800">
                      MÓDULO 03
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2 group-hover:text-cyan-300 transition-colors">
                      Atividades Práticas
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      Exercícios, desafios e atividades imprimíveis para aplicar em sala de aula, reforço ou em casa.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1qQgbtVMlXbXMyDvSMyy-PXGwEw1RkImG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
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
        <section className="py-12 px-4 sm:px-6 relative z-10 border-t border-slate-800/80">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="text-xs font-black text-amber-300 uppercase tracking-widest bg-amber-950/80 px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md">
                MATERIAL BÔNUS INCLUSO
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-1 tracking-tight">
                Seus Bônus Exclusivos
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Aproveite também todos os presentes liberados no seu combo.
              </p>
            </div>

            {/* Grid 2 Cards Bônus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Bônus Card 1: Cartazes Imprimíveis */}
              <div className="bg-[#121829] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
                <div>
                  <div className="h-52 bg-slate-950 relative overflow-hidden">
                    <img
                      src="https://i.ibb.co/x8KF09HY/bonus-1-edf-otimizado.webp"
                      alt="Cartazes Imprimíveis"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121829] via-transparent to-black/30" />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg font-bold">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800">
                      BÔNUS EXCLUSIVO 01
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2">
                      Cartazes Imprimíveis
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Cartazes de Libras em alta resolução prontos para imprimir e afixar na sala de aula ou no cantinho de estudos.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1utFp8SPCzKTwkQq7oQL4UUXDxQQK4sZK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Acessar Bônus</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bônus Card 2: Preparação das Mãos */}
              <div className="bg-[#121829] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
                <div>
                  <div className="h-52 bg-slate-950 relative overflow-hidden">
                    <img
                      src="https://i.ibb.co/5x9Q6Pzk/bonus-2-edf-otimizado.webp"
                      alt="Preparação das Mãos"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121829] via-transparent to-black/30" />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg font-bold">
                      <Hand className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800">
                      BÔNUS EXCLUSIVO 02
                    </span>
                    <h3 className="text-xl font-black text-white mt-2 mb-2">
                      Preparação das Mãos para Libras
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Exercícios e orientações práticas para preparar as mãos, melhorar coordenação motora e facilitar os sinais.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://drive.google.com/drive/folders/1-EVh47sgrA_msQqVJNWnhXov28g257yP?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
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
        <footer className="mt-12 pt-8 pb-12 border-t border-slate-800 text-center text-xs text-slate-400 relative z-10">
          <div className="max-w-4xl mx-auto px-4 space-y-3">
            <div className="flex items-center justify-center gap-2 text-amber-300 font-bold">
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Obrigado por fazer parte da nossa comunidade de inclusão!</span>
            </div>
            <p className="text-slate-300 font-medium">
              Dinâmicas e Jogos Em Libras! © {new Date().getFullYear()} — Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-slate-500 max-w-xl mx-auto">
              Precisa de ajuda ou suporte técnico com seus downloads? Entre em contato pelo e-mail oficial de suporte.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Members;