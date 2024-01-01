"use client";

import { Card, Text, Group, Button, rem } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import classes from "./CarouselCard.module.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Badge, Stack } from "@chakra-ui/react";
const defaultImage =
  "https://img.freepik.com/free-photo/woman-showing-with-one-hand-mini-house-real-state-concept-ai-generative_123827-24098.jpg?w=1060&t=st=1704098587~exp=1704099187~hmac=d1267153192cae767e4b39daabbcf2a2e0489631363f16e73c028a6583c2f056";

const propertyData = [
  {
    id: 1,
    title: "Modern City Apartment",
    description:
      "A stunning and modern apartment located in the heart of the city.",
    price: 350000,
    bedrooms: 2,
    bathrooms: 1.5,
    size: 1200,
    location: "City Center",
    images: [defaultImage, defaultImage, defaultImage],
    features: ["Balcony", "Gym", "Parking"],
    status: "For Sale",
  },
  {
    id: 2,
    title: "Spacious Suburban House",
    description:
      "A spacious house with a beautiful garden, perfect for a family.",
    price: 550000,
    bedrooms: 4,
    bathrooms: 3,
    size: 2500,
    location: "Suburbia",
    images: [defaultImage, defaultImage, defaultImage],
    features: ["Garden", "Fireplace", "Swimming Pool"],
    status: "For Sale",
  },
];

export default function CarouselCard() {
  const {
    id,
    title,
    description,
    price,
    bedrooms,
    bathrooms,
    size,
    location,
    images,
    features,
    status,
  } = propertyData[0]; // Adjusted to access the first property in the array

  return (
    <Card radius="md" withBorder padding="xl" style={{ width: "20rem" }}>
      <Card.Section>
        <AwesomeSlider
          bullets={false}
          organicArrows={false}
          className={classes.carousel}
        >
          {images.map((image, index) => (
            <div key={index} className={classes.carouselSlide}>
              <img src={image} alt={`Property Picture ${index + 1}`} />
            </div>
          ))}
        </AwesomeSlider>
      </Card.Section>

      <Group justify="space-between" mt="lg">
      <Stack direction="row">
        {features.map((feature) => (
          <Badge key={feature} variant="subtle" colorScheme="green">
            {feature}
          </Badge>
        ))}
      </Stack>
        <Text fw={500} fz="lg">
          {title}
        </Text>

        <Group gap={5}>
          <IconStar style={{ width: rem(16), height: rem(16) }} />
          <Text fz="xs" fw={500}>
            4.78
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
     

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {`$${price}`}
          </Text>
          <Text span fz="sm" c="dimmed">
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group>
    </Card>
  );
}
