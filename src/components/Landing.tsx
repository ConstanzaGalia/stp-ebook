import React from "react";
import OfferSection from "./OfferSection";
import MisionVisionSection from "./MisionVisionSection";
import ECGDivider from "./ECGDivider";
import ContactSection from "./ContactSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <div className="w-full bg-white text-gray-900">
      <HeroSection />
      
      <MisionVisionSection />

      <ECGDivider />

      <OfferSection />

      <CTASection />

      <ContactSection />

      <Footer />

    </div>
  );
}
