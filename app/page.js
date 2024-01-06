import About from "components/About";
import Blog from "components/Blog";
import Brands from "components/Brands";
// import Feature from "components/Feature";
import CTA from "components/CTA";
import Contact from "components/Contact";
import FAQ from "components/FAQ";
import FeaturesTab from "components/FeaturesTab";
import FunFact from "components/FunFact";
import Hero from "components/Hero";
import Pricing from "components/Pricing";
import Testimonial from "components/Testimonial";
import ActionBanner from "components/ActionBanner";
import PropertyListings from "components/PropertyListings";

export default function page() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <ActionBanner/>
      <FeaturesTab />
      <PropertyListings/>
      <FunFact />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
