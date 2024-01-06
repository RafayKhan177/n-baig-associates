"use client";

import {
  Card,
  Text,
  Group,
  Button,
  rem,
  Image,
  Container,
  SimpleGrid,
} from "@mantine/core";
import classes from "./CarouselCard.module.css";
import { motion } from "framer-motion";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Badge, Stack } from "@chakra-ui/react";
import { PropertiesData } from "../../static";
import SectionHeader from "../Common/SectionHeader";

const SingleListing = ({ item }) => {
  const { title, description, features, price, images, id } = item;

  return (
    <div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        // className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
        key={id}
      >
        <Card
          shadow="md"
          radius="md"
          withBorder
          padding="xl"
          style={{ width: "22rem" }}
        >
          <Card.Section>
            <AwesomeSlider
              bullets={false}
              organicArrows={false}
              className={classes.carousel}
            >
              {images &&
                images.map((image, index) => (
                  <div key={index} className={classes.carouselSlide}>
                    <Image src={image} alt={`Property Picture ${index + 1}`} />
                  </div>
                ))}
            </AwesomeSlider>
          </Card.Section>

          <Group justify="space-between" mt="lg">
            <Text fw={500} fz="lg">
              {title}
            </Text>
          </Group>

          <Text fz="sm" c="dimmed" mt="sm">
            {description}
          </Text>

          <Group justify="space-between" mt="md">
            <div>
              <Text fz="xl" span fw={500} className={classes.price}>
                {`$${price}`}
              </Text>
            </div>

            <Button radius="md" bg={"dark"}>
              More Details
            </Button>
          </Group>
        </Card>
      </motion.div>
    </div>
  );
};

export default SingleListing;
