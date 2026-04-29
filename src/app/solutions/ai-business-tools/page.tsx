import HeroSection from "@/components/solutions/tools/HeroSection";
import ProblemsSection from "@/components/solutions/tools/ProblemsSection";
import SolutionSection from "@/components/solutions/tools/SolutionSection";
import ProcessSection from "@/components/solutions/tools/ProcessSection";
import IndustriesAndBenefits from "@/components/solutions/tools/IndustriesAndBenefits";
import ApproachAndResults from "@/components/solutions/tools/ApproachAndResults";
import FinalCta from "@/components/solutions/tools/FinalCta";

export const metadata = {
  title: "AI Business Tools | Nexus Digital Group",
  description: "Powerful AI tools that help your business automate tasks.",
};

export default function AIBusinessToolsPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ProcessSection />
      <IndustriesAndBenefits />
      <ApproachAndResults />
      <FinalCta />
    </main>
  );
}
