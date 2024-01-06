"use client";
import About from "components/About";
import Blog from "components/Blog";
import Brands from "components/Brands";
import CTA from "components/CTA";
import Contact from "components/Contact";
import FAQ from "components/FAQ";
import FeaturesTab from "components/FeaturesTab";
import FunFact from "components/FunFact";
import Hero from "components/Hero";
import Pricing from "components/Pricing";
import Testimonial from "components/Testimonial";

export default function page() {
  return (
    <main>
      <Hero />
      <Brands />
      {/* <Feature /> */}
      <About />
      <FeaturesTab />
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
