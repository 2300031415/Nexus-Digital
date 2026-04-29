import HeroSection from "@/components/solutions/workforce/HeroSection";
import ProblemsSection from "@/components/solutions/workforce/ProblemsSection";
import WhatIsAIWorkforce from "@/components/solutions/workforce/WhatIsAIWorkforce";
import WorkforceFlow from "@/components/solutions/workforce/WorkforceFlow";
import WorkforceIncludes from "@/components/solutions/workforce/WorkforceIncludes";
import BuiltForIndustries from "@/components/solutions/workforce/BuiltForIndustries";
import BenefitsSection from "@/components/solutions/workforce/BenefitsSection";
import ProcessSection from "@/components/solutions/workforce/ProcessSection";
import ResultsSection from "@/components/solutions/workforce/ResultsSection";
import FinalCta from "@/components/solutions/workforce/FinalCta";

export const metadata = {
  title: "AI Workforce | Nexus Digital Group",
  description: "Deploy intelligent AI agents that scale your business 24/7.",
};

export default function AIWorkforceSolutionPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ProblemsSection />
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <WhatIsAIWorkforce />
          <WorkforceFlow />
        </div>
      </section>
      <WorkforceIncludes />
      <BuiltForIndustries />
      <BenefitsSection />
      <ProcessSection />
      <ResultsSection />
      <FinalCta />
    </main>
  );
}
