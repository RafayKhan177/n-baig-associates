"use client";

import { SimpleGrid } from "@mantine/core";
import "react-awesome-slider/dist/styles.css";
import SectionHeader from "../Common/SectionHeader";
import SingleListing from "./SingleListing";
import KnowMore from "../Common/KnowMore";
import { useEffect, useState } from "react";
import { getBlogs } from "api/functions/get";

export default function CarouselCard({ all }) {

  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogData = await getBlogs();
      setPropertiesData(
        fetchedBlogData.filter((blog) => blog.category === "PROJECTS")
      );
    };

    fetchData();
  }, [all]);

  const slicedPropertiesData = all
    ? propertiesData :
    propertiesData.slice(0, 3)

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
        <SimpleGrid cols={{ base: 1, sm: 3 }}>
          {slicedPropertiesData.map((item, index) => {
            return <SingleListing key={index} item={item} />;
          })}
        </SimpleGrid>

        {/* Hide the "Know More" button if 'all' is false */}
        {all && <KnowMore />}
      </div>
    </section>
  );
}
