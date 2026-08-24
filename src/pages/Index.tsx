"use client";

import React from "react";
import { UrgencyHeader } from "@/components/libras/UrgencyHeader";
import { HeroSection } from "@/components/libras/HeroSection";
import { PainPointsSection } from "@/components/libras/PainPointsSection";
import { DeliverablesSection } from "@/components/libras/DeliverablesSection";
import { TestimonialsSection } from "@/components/libras/TestimonialsSection";
import { TripleCarouselSection } from "@/components/libras/TripleCarouselSection";
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
    let checkoutUrl = "https://pay.kirvano.com/2813ffcb-eb1e-49a2-8c5b-567510732a45"; // Oferta de R$ 27,90 (Padrão)

    if (planName.includes("10")) {
      checkoutUrl = "https://pay.kirvano.com/6cdd8567-6983-4b39-aeca-dee902a469a7"; // Oferta de R$ 10
    } else if (planName.includes("17,90") || planName.includes("17.90") || planName.includes("17")) {
      checkoutUrl = "https://pay.kirvano.com/253caae9-16db-4bd3-ac61-8b854802f282"; // Oferta de R$ 17
    } else if (planName.includes("27")) {
      checkoutUrl = "https://pay.kirvano.com/2813ffcb-eb1e-49a2-8c5b-567510732a45"; // Oferta de R$ 27,90
    }

    // Captura os parâmetros de UTM/SRC presentes na URL atual
    const queryParams = window.location.search;
    const finalUrl = queryParams
      ? checkoutUrl + (checkoutUrl.includes("?") ? "&" : "?") + queryParams.replace("?", "")
      : checkoutUrl;

    showSuccess(`Redirecionando para o checkout seguro...`);
    setTimeout(() => {
      window.location.href = finalUrl;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. BARRA FIXA DE URGÊNCIA */}
      <UrgencyHeader onCtaClick={scrollToCheckout} />

      {/* 2. HERO SECTION */}
      <HeroSection onCtaClick={scrollToCheckout} />

      {/* 3. PAIN POINTS "DORES REAIS" */}
      <PainPointsSection onCtaClick={scrollToCheckout} />

      {/* 4. ENTREGÁVEIS DETALHADOS ("O QUE VOCÊ VAI RECEBER AGORA MESMO") */}
      <DeliverablesSection onCtaClick={scrollToCheckout} />

      {/* 5. PROVA SOCIAL E DEPOIMENTOS ("AMADO POR PROFESSORAS E MÃES") */}
      <TestimonialsSection />

      {/* 6. SEÇÃO DOS 3 CARROSSEIS ("O QUE VOCÊ VAI RECEBER NO KIT COMPLETO") */}
      <TripleCarouselSection onCtaClick={scrollToCheckout} />

      {/* 7. BÔNUS EXCLUSIVOS DO COMBO */}
      <BonusSection onCtaClick={scrollToCheckout} />

      {/* 8. COMPARATIVO DE DOIS CAMINHOS */}
      <TwoPathsSection onCtaClick={scrollToCheckout} />

      {/* 9. TABELA DE PREÇOS E CHECKOUT ("OFERTA POR TEMPO LIMITADO") */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 10. SOBRE A CRIADORA ("QUEM CRIOU O MATERIAL") */}
      <CreatorSection />

      {/* 11. PERGUNTAS FREQUENTES ("TIRE SUAS DÚVIDAS") */}
      <FaqSection />

      {/* 12. GARANTIA E RODAPÉ */}
      <GuaranteeFooter onCtaClick={scrollToCheckout} />
    </div>
  );
};

export default Index;