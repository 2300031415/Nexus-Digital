import { DtApproach } from "@/components/services/digital-transformation/DtApproach";
import { DtBenefits } from "@/components/services/digital-transformation/DtBenefits";
import { DtChallenge } from "@/components/services/digital-transformation/DtChallenge";
import { DtCta } from "@/components/services/digital-transformation/DtCta";
import { DtHero } from "@/components/services/digital-transformation/DtHero";
import { DtResults } from "@/components/services/digital-transformation/DtResults";
import { DtSolutions } from "@/components/services/digital-transformation/DtSolutions";
import { DtWhatIs } from "@/components/services/digital-transformation/DtWhatIs";

export default function DigitalTransformationPage() {
  return (
    <main className="bg-white">
      <DtHero />
      <DtChallenge />
      <DtWhatIs />
      <DtSolutions />
      <DtBenefits />
      <DtApproach />
      <DtResults />
      <DtCta />
    </main>
  );
}
