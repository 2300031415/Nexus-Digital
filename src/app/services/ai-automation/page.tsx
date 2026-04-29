import { AiCta } from "@/components/services/ai-automation/AiCta";
import { AiHero } from "@/components/services/ai-automation/AiHero";
import { AiIndustries } from "@/components/services/ai-automation/AiIndustries";
import { AiLogoBar } from "@/components/services/ai-automation/AiLogoBar";
import { AiProblem } from "@/components/services/ai-automation/AiProblem";
import { AiProcess } from "@/components/services/ai-automation/AiProcess";
import { AiResults } from "@/components/services/ai-automation/AiResults";
import { AiSolution } from "@/components/services/ai-automation/AiSolution";
import { AiSolutionCards } from "@/components/services/ai-automation/AiSolutionCards";

export const metadata = {
  title: "AI & Automation | Nexus Digital Group",
  description: "AI-powered systems that automate operations, reduce costs, and scale your business.",
};

export default function AiAutomationPage() {
  return (
    <main className="bg-white">
      <AiHero />
      <AiLogoBar />
      <AiProblem />
      <AiSolution />
      <AiSolutionCards />
      <AiIndustries />
      <AiProcess />
      <AiResults />
      <AiCta />
    </main>
  );
}
