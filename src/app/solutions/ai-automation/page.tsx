import AICTA from "@/components/solutions/ai-automation/AICTA";
import AIHero from "@/components/solutions/ai-automation/AIHero";
import AIIndustriesDelivers from "@/components/solutions/ai-automation/AIIndustriesDelivers";
import AIProblem from "@/components/solutions/ai-automation/AIProblem";
import AIProcessWhyImpact from "@/components/solutions/ai-automation/AIProcessWhyImpact";
import AIResults from "@/components/solutions/ai-automation/AIResults";
import AIServices from "@/components/solutions/ai-automation/AIServices";
import AISolution from "@/components/solutions/ai-automation/AISolution";
import AITrustedBy from "@/components/solutions/ai-automation/AITrustedBy";

export default function AIAutomationPage() {
  return (
    <main>
      <AIHero />
      <AITrustedBy />
      <AIProblem />
      <AISolution />
      <AIServices />
      <AIIndustriesDelivers />
      <AIProcessWhyImpact />
      <AIResults />
      <AICTA />
    </main>
  );
}
