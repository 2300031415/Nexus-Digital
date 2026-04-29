import DTApproach from "@/components/solutions/digital-transformation/DTApproach";
import DTBenefits from "@/components/solutions/digital-transformation/DTBenefits";
import DTChallenge from "@/components/solutions/digital-transformation/DTChallenge";
import DTCTA from "@/components/solutions/digital-transformation/DTCTA";
import DTHero from "@/components/solutions/digital-transformation/DTHero";
import DTResults from "@/components/solutions/digital-transformation/DTResults";
import DTSolutions from "@/components/solutions/digital-transformation/DTSolutions";
import DTWhatIs from "@/components/solutions/digital-transformation/DTWhatIs";

export default function DigitalTransformationPage() {
  return (
    <main>
      <DTHero />
      <DTChallenge />
      <DTWhatIs />
      <DTSolutions />
      <DTBenefits />
      <DTApproach />
      <DTResults />
      <DTCTA />
    </main>
  );
}
