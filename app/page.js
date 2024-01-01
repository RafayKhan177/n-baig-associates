"use client"

import Hero from "../components/hero/Hero";
import ContactUs from "../components/contactUs/ContactUs";
import FeaturesCards from "../components/feature/Cards";
import ImageActionBanner from "../components/banner/ActionBanner";
import CarouselCard from "../components/cards/CarouselCard";
import ImagesGrids from "../components/gallary/ImagesGrids"

export default function page() {
  return (
    <div>
      <CarouselCard/>
      <Hero />
      <ImagesGrids/>
      <ImageActionBanner/>
      <ContactUs />
      <FeaturesCards />
    </div>
  );
}
