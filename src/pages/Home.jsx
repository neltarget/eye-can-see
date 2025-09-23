import Hero from "../components/Hero";
import TrustFactors from "../components/TrustFactors";
import Testimonials from "../components/Testimonials";
import Services from "./Services";
import Shop from "./Shop";
import AboutSummary from "../components/AboutSummary";

export default function Home() {
  return (
    <section className="space-y-12">
      <Hero />
      <TrustFactors />
      <AboutSummary />
      <Services />
      <Testimonials />
      <Shop />
    </section>
  );
}
