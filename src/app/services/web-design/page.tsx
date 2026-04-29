import { WdApproach } from "@/components/services/web-design/WdApproach";
import { WdBenefits } from "@/components/services/web-design/WdBenefits";
import { WdCta } from "@/components/services/web-design/WdCta";
import { WdHero } from "@/components/services/web-design/WdHero";
import { WdIncludes } from "@/components/services/web-design/WdIncludes";
import { WdLogoBar } from "@/components/services/web-design/WdLogoBar";
import { WdProblem } from "@/components/services/web-design/WdProblem";
import { WdProcess } from "@/components/services/web-design/WdProcess";
import { WdRecentWork } from "@/components/services/web-design/WdRecentWork";
import { WdSolutions } from "@/components/services/web-design/WdSolutions";

export default function WebDesignPage() {
  return (
    <main className="bg-white">
      <WdHero />
      <WdLogoBar />
      <WdProblem />
      <WdApproach />
      <WdIncludes />
      <WdSolutions />
      <WdBenefits />
      <WdProcess />
      <WdRecentWork />
      <WdCta />
    </main>
  );
}
