import Navbar from '@/components/Navbar';
import AIHeroSection from '@/components/ai-tools/AIHeroSection';
import ProblemsSection from '@/components/ai-tools/ProblemsSection';
import SolutionSection from '@/components/ai-tools/SolutionSection';
import AIProcessSection from '@/components/ai-tools/AIProcessSection';
import IndustriesAndBenefits from '@/components/ai-tools/IndustriesAndBenefits';
import ApproachAndResults from '@/components/ai-tools/ApproachAndResults';
import FinalCta from '@/components/ai-tools/FinalCta';
import Footer from '@/components/Footer';

export default function AIBusinessToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AIHeroSection />
      <ProblemsSection />
      <SolutionSection />
      <AIProcessSection />
      <IndustriesAndBenefits />
      <ApproachAndResults />
      <FinalCta />
      <Footer />
    </main>
  );
}
