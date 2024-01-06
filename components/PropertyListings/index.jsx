"use client";

import { Container, SimpleGrid } from "@mantine/core";
import classes from "./CarouselCard.module.css";
import "react-awesome-slider/dist/styles.css";
import { PropertiesData } from "../../static";
import SectionHeader from "../Common/SectionHeader";
import SingleListing from "./SingleListing";

const defaultImage =
  "https://img.freepik.com/free-photo/woman-showing-with-one-hand-mini-house-real-state-concept-ai-generative_123827-24098.jpg?w=1060&t=st=1704098587~exp=1704099187~hmac=d1267153192cae767e4b39daabbcf2a2e0489631363f16e73c028a6583c2f056";

export default function CarouselCard() {
  return (
    <Container className={classes.wrapper} size="lg">
      {/* <!-- Section Title Start --> */}
      <SectionHeader
        headerInfo={{
          title: "Our Services",
          subtitle: "Building Your Dream Space, from Vision to Reality",
          description:
            "We offer a comprehensive range of architectural and construction services to bring your ideas to life.",
        }}
      />
      <SimpleGrid cols={{ base: 1, sm: 3 }} style={{ marginLeft: 15 }}>
        {PropertiesData.map((item, index) => {
          return <SingleListing key={index} item={item} />;
        })}
      </SimpleGrid>
    </Container>
  );
}
