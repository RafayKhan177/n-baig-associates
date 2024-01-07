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

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <PropertyListings />
      <Testimonial />
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
