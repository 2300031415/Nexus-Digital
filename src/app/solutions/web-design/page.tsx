import WebCTA from "@/components/solutions/web-design/WebCTA";
import WebHero from "@/components/solutions/web-design/WebHero";
import WebIndustriesDelivers from "@/components/solutions/web-design/WebIndustriesDelivers";
import WebProblem from "@/components/solutions/web-design/WebProblem";
import WebProcessWhyResults from "@/components/solutions/web-design/WebProcessWhyResults";
import WebServices from "@/components/solutions/web-design/WebServices";
import WebTestimonials from "@/components/solutions/web-design/WebTestimonials";
import WebTrustedBy from "@/components/solutions/web-design/WebTrustedBy";
import WebWhatWeBuild from "@/components/solutions/web-design/WebWhatWeBuild";

export default function WebDesignPage() {
  return (
    <main>
      <WebHero />
      <WebTrustedBy />
      <WebProblem />
      <WebWhatWeBuild />
      <WebServices />
      <WebIndustriesDelivers />
      <WebProcessWhyResults />
      <WebTestimonials />
      <WebCTA />
    </main>
  );
}
