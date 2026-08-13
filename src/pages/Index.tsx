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

      {/* 2. HERO SECTION */}
      <HeroSection onCtaClick={scrollToCheckout} />

      {/* 3. PREVIEW SECTION "VEJA POR DENTRO" */}
      <InsidePreview onCtaClick={scrollToCheckout} />

      {/* 4. PAIN POINTS "DORES REAIS" */}
      <PainPointsSection onCtaClick={scrollToCheckout} />

      {/* 5. SOLUTION & 3 PILLARS */}
      <SolutionSection />

      {/* 6. DETAILED DELIVERABLES */}
      <DeliverablesSection onCtaClick={scrollToCheckout} />

      {/* 7. REAL EXAMPLES GALLERY */}
      <GallerySection onCtaClick={scrollToCheckout} />

      {/* 8. SOCIAL PROOF & TESTIMONIALS */}
      <TestimonialsSection />

      {/* 9. EXCLUSIVE BONUSES */}
      <BonusSection onCtaClick={scrollToCheckout} />

      {/* 10. TWO PATHS COMPARISON */}
      <TwoPathsSection onCtaClick={scrollToCheckout} />

      {/* 11. PRICING TABLE & CHECKOUT ANCHORING */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 12. ABOUT THE CREATOR */}
      <CreatorSection />

      {/* 13. FAQ ACCORDION */}
      <FaqSection />

      {/* 14. GUARANTEE & FOOTER */}
      <GuaranteeFooter onCtaClick={scrollToCheckout} />
    </div>
  );
};

export default Index;