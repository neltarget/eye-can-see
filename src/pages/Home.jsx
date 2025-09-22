import Hero from "../components/Hero";
import TrustFactors from "../components/TrustFactors";
import Testimonials from "../components/Testimonials";
import Doctors from "./Doctors";
import Services from "./Services";
import Shop from "./Shop";
export default function Home() {
  return (
    <section className="space-y-12">
      <Hero />
      <TrustFactors />
      <Services />

      {/* meet the doctor */}
      <div>
        <h2>Meet the Doctor</h2>
        <Doctors />
      </div>
      <Shop />
      <Testimonials />
    </section>
  );
}
