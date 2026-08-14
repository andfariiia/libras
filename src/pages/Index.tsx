"use client";

import React from "react";
import { UrgencyHeader } from "@/components/libras/UrgencyHeader";
import { HeroSection } from "@/components/libras/HeroSection";
import { InsidePreview } from "@/components/libras/InsidePreview";
import { PainPointsSection } from "@/components/libras/PainPointsSection";
import { InteractiveQuiz } from "@/components/libras/InteractiveQuiz";
import { SolutionSection } from "@/components/libras/SolutionSection";
import { DeliverablesSection } from "@/components/libras/DeliverablesSection";
import { GallerySection } from "@/components/libras/GallerySection";
import { TestimonialsSection } from "@/components/libras/TestimonialsSection";
import { BonusSection } from "@/components/libras/BonusSection";
import { TwoPathsSection } from "@/components/libras/TwoPathsSection";
import { PricingSection } from "@/components/libras/PricingSection";
import { CreatorSection } from "@/components/libras/CreatorSection";
import { FaqSection } from "@/components/libras/FaqSection";
import { GuaranteeFooter } from "@/components/libras/GuaranteeFooter";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById("checkout");
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPlan = (planName: string) => {
    let checkoutUrl = "https://pay.kiwify.com.br/o8QVrMK"; // Valor padrão (R$ 27,00)

    if (planName.includes("10")) {
      checkoutUrl = "https://pay.kiwify.com.br/Tch9sHz";
    } else if (planName.includes("17,90") || planName.includes("17.90")) {
      checkoutUrl = "https://pay.kiwify.com.br/n80iYQJ";
    } else if (planName.includes("27")) {
      checkoutUrl = "https://pay.kiwify.com.br/o8QVrMK";
    }

    showSuccess(`Redirecionando para o checkout seguro...`);
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. BARRA FIXA DE URGÊNCIA */}
      <UrgencyHeader onCtaClick={scrollToCheckout} />

      {/* 2. HERO SECTION COM CARROSSEL "VEJA POR DENTRO" */}
      <HeroSection onCtaClick={scrollToCheckout} />

      {/* 3. PAIN POINTS "DORES REAIS" */}
      <PainPointsSection onCtaClick={scrollToCheckout} />

      {/* 4. SOLUÇÃO E PILARES ("MÉTODO EXCLUSIVO") */}
      <SolutionSection />

      {/* 5. ENTREGÁVEIS DETALHADOS ("O QUE VOCÊ VAI RECEBER AGORA MESMO") */}
      <DeliverablesSection onCtaClick={scrollToCheckout} />

      {/* 6. PROVA SOCIAL E DEPOIMENTOS ("AMADO POR PROFESSORAS E MÃES") */}
      <TestimonialsSection />

      {/* 7. BÔNUS EXCLUSIVOS */}
      <BonusSection onCtaClick={scrollToCheckout} />

      {/* 8. COMPARATIVO DE DOIS CAMINHOS */}
      <TwoPathsSection onCtaClick={scrollToCheckout} />

      {/* 9. TABELA DE PREÇOS E CHECKOUT ("OFERTA POR TEMPO LIMITADO") */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 10. SEÇÃO "VEJA POR DENTRO DO MATERIAL" */}
      <InsidePreview onCtaClick={scrollToCheckout} />

      {/* 11. QUIZ INTERATIVO */}
      <InteractiveQuiz onFinish={scrollToCheckout} />

      {/* 12. GALERIA DE EXEMPLOS REAIS */}
      <GallerySection onCtaClick={scrollToCheckout} />

      {/* 13. SOBRE A CRIADORA */}
      <CreatorSection />

      {/* 14. PERGUNTAS FREQUENTES (FAQ) */}
      <FaqSection />

      {/* 15. GARANTIA E RODAPÉ */}
      <GuaranteeFooter onCtaClick={scrollToCheckout} />
    </div>
  );
};

export default Index;