import Navbar from "@/components/Navbar";
import HeroMain from "@/components/HeroMain";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyNexusMain from "@/components/WhyNexusMain";
import ExpectationsSection from "@/components/ExpectationsSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroMain />
      <PainPointsSection />
      <ServicesSection />
      <WhyNexusMain />
      <ExpectationsSection />
      <SocialProofSection />
      <ProcessSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
