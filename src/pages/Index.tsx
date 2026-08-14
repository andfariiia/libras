"use client";

import React from "react";
import { UrgencyHeader } from "@/components/libras/UrgencyHeader";
import { HeroSection } from "@/components/libras/HeroSection";
import { TripleCarouselSection } from "@/components/libras/TripleCarouselSection";
import { PainPointsSection } from "@/components/libras/PainPointsSection";
import { SolutionSection } from "@/components/libras/SolutionSection";
import { DeliverablesSection } from "@/components/libras/DeliverablesSection";
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

      {/* 2. HERO SECTION */}
      <HeroSection onCtaClick={scrollToCheckout} />

      {/* 3. SEÇÃO DOS 3 CARROSSEIS ("+ de 240 Atividades e Jogos em Libras") */}
      <TripleCarouselSection onCtaClick={scrollToCheckout} />

      {/* 4. PAIN POINTS "DORES REAIS" */}
      <PainPointsSection onCtaClick={scrollToCheckout} />

      {/* 5. SOLUÇÃO E PILARES ("MÉTODO EXCLUSIVO") */}
      <SolutionSection />

      {/* 6. ENTREGÁVEIS DETALHADOS ("O QUE VOCÊ VAI RECEBER AGORA MESMO") */}
      <DeliverablesSection onCtaClick={scrollToCheckout} />

      {/* 7. PROVA SOCIAL E DEPOIMENTOS ("AMADO POR PROFESSORAS E MÃES") */}
      <TestimonialsSection />

      {/* 8. BÔNUS EXCLUSIVOS */}
      <BonusSection onCtaClick={scrollToCheckout} />

      {/* 9. COMPARATIVO DE DOIS CAMINHOS */}
      <TwoPathsSection onCtaClick={scrollToCheckout} />

      {/* 10. TABELA DE PREÇOS E CHECKOUT ("OFERTA POR TEMPO LIMITADO") */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 11. SOBRE A CRIADORA ("QUEM CRIOU O MATERIAL") */}
      <CreatorSection />

      {/* 12. PERGUNTAS FREQUENTES ("TIRE SUAS DÚVIDAS") */}
      <FaqSection />

      {/* 13. GARANTIA E RODAPÉ */}
      <GuaranteeFooter onCtaClick={scrollToCheckout} />
    </div>
  );
};

export default Index;