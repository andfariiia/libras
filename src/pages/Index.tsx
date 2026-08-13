"use client";

import React from "react";
import { UrgencyHeader } from "@/components/libras/UrgencyHeader";
import { HeroSection } from "@/components/libras/HeroSection";
import { InsidePreview } from "@/components/libras/InsidePreview";
import { PainPointsSection } from "@/components/libras/PainPointsSection";
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
import { InteractiveQuiz } from "@/components/libras/InteractiveQuiz";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById("checkout");
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPlan = (planName: string) => {
    showSuccess(`Redirecionando para o checkout seguro (${planName})...`);
    setTimeout(() => {
      window.open("https://pay.kiwify.com.br", "_blank");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. STICKY TOPBAR OF URGENCY */}
      <UrgencyHeader onCtaClick={scrollToCheckout} />

      {/* 2. HERO SECTION WITH AUDIO NOTE */}
      <HeroSection onCtaClick={scrollToCheckout} />

      {/* 3. INTERACTIVE QUIZ & DIAGNOSTIC WIDGET */}
      <InteractiveQuiz onFinish={scrollToCheckout} />

      {/* 4. PREVIEW SECTION "VEJA POR DENTRO" WITH CLICK MODAL */}
      <InsidePreview onCtaClick={scrollToCheckout} />

      {/* 5. PAIN POINTS "DORES REAIS" */}
      <PainPointsSection onCtaClick={scrollToCheckout} />

      {/* 6. SOLUTION & 3 PILLARS */}
      <SolutionSection />

      {/* 7. DETAILED DELIVERABLES */}
      <DeliverablesSection onCtaClick={scrollToCheckout} />

      {/* 8. REAL EXAMPLES GALLERY */}
      <GallerySection onCtaClick={scrollToCheckout} />

      {/* 9. SOCIAL PROOF & TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. EXCLUSIVE BONUSES */}
      <BonusSection onCtaClick={scrollToCheckout} />

      {/* 11. TWO PATHS COMPARISON */}
      <TwoPathsSection onCtaClick={scrollToCheckout} />

      {/* 12. PRICING TABLE & CHECKOUT ANCHORING */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 13. ABOUT THE CREATOR */}
      <CreatorSection />

      {/* 14. FAQ ACCORDION */}
      <FaqSection />

      {/* 15. GUARANTEE & FOOTER */}
      <GuaranteeFooter onCtaClick={scrollToCheckout} />
    </div>
  );
};

export default Index;