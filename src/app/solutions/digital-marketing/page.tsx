import DMApproach from "@/components/solutions/digital-marketing/DMApproach";
import DMCTA from "@/components/solutions/digital-marketing/DMCTA";
import DMHero from "@/components/solutions/digital-marketing/DMHero";
import DMIndustriesDelivers from "@/components/solutions/digital-marketing/DMIndustriesDelivers";
import DMProblem from "@/components/solutions/digital-marketing/DMProblem";
import DMServices from "@/components/solutions/digital-marketing/DMServices";
import DMTrustedBy from "@/components/solutions/digital-marketing/DMTrustedBy";
import DMWhyChoose from "@/components/solutions/digital-marketing/DMWhyChoose";

export default function DigitalMarketingPage() {
  return (
    <main>
      <DMHero />
      <DMTrustedBy />
      <DMProblem />
      <DMApproach />
      <DMServices />
      <DMIndustriesDelivers />
      <DMWhyChoose />
      <DMCTA />
    </main>
  );
}
