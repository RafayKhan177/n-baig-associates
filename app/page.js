import Hero from "components/Hero";
import Brands from "components/Brands";
import PropertyListings from "components/PropertyListings";
import Services from "components/Services";
import About from "components/About";
import FeaturesTab from "components/FeaturesTab";
import FunFact from "components/FunFact";
import Integration from "components/Integration";
import SAM from "components/SAM";
import FAQ from "components/FAQ";
import Pricing from "components/Pricing";
import Contact from "components/Contact";
import Blog from "components/Blog";
import Testimonial from "components/Testimonial";
import HeroVideo from "components/HeroVideo";
import Team from "components/Team";

export default function Home() {
  return (
    <main>
      <section class="relative">
        <HeroVideo />
        <div class="absolute z-99 top-0">
          <Hero />
        </div>
      </section>
      <Brands />
      <PropertyListings />
      <Testimonial />
      <Team />
      <SAM />
      <Blog />
      <Services />
      <FunFact />
      <FAQ />
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      {/* <About /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
    </main>
  );
}
