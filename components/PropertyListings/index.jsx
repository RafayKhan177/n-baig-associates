"use client";

import { SimpleGrid } from "@mantine/core";
import "react-awesome-slider/dist/styles.css";
import SectionHeader from "../Common/SectionHeader";
import SingleListing from "./SingleListing";
import KnowMore from "../Common/KnowMore";
import PropertiesData from "./PropertiesData";

export default function CarouselCard() {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <SectionHeader
          headerInfo={{
            title: "Our Services",
            subtitle: "Building Your Dream Space, from Vision to Reality",
            description:
              "We offer a comprehensive range of architectural and construction services to bring your ideas to life.",
          }}
        />
        <p className="h-14 ml-6">...</p>
        <SimpleGrid cols={{ base: 1, sm: 3 }} style={{ marginLeft: 15 }}>
          {PropertiesData.map((item, index) => {
            return <SingleListing key={index} item={item} />;
          })}
        </SimpleGrid>
        <div className="ml-5">
          <KnowMore />
        </div>
      </div>
    </section>
  );
}
