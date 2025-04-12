import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";
import AppDownloadSection from "@/components/AppDownloadSection";

import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropositionSection />
        <FeaturesSection />
        <TestimonialSection />
        <FAQSection />
        <CallToActionSection />
        <AppDownloadSection />
      </main>
      <FooterSection />
    </div>
  );
}