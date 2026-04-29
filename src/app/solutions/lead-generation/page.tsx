import LeadGenHero from "@/components/solutions/leadgen/LeadGenHero";
import LeadGenTrustedBy from "@/components/solutions/leadgen/LeadGenTrustedBy";
import LeadGenProblem from "@/components/solutions/leadgen/LeadGenProblem";
import LeadGenEngine from "@/components/solutions/leadgen/LeadGenEngine";
import LeadGenCoreComponents from "@/components/solutions/leadgen/LeadGenCoreComponents";
import LeadGenIndustries from "@/components/solutions/leadgen/LeadGenIndustries";
import LeadGenWhyChoose from "@/components/solutions/leadgen/LeadGenWhyChoose";
import LeadGenCTA from "@/components/solutions/leadgen/LeadGenCTA";

export const metadata = {
  title: "Lead Generation Systems | Nexus Digital Group",
  description: "End-to-end lead generation systems that drive consistent growth.",
};

export default function LeadGenerationPage() {
  return (
    <main className="bg-white">
      <LeadGenHero />
      <LeadGenTrustedBy />
      <LeadGenProblem />
      <LeadGenEngine />
      <LeadGenCoreComponents />
      <LeadGenIndustries />
      <LeadGenWhyChoose />
      <LeadGenCTA />
    </main>
  );
}
