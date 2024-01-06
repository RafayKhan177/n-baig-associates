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
import { IconStar } from "@tabler/icons-react";
import classes from "./CarouselCard.module.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Badge, Stack } from "@chakra-ui/react";
import { PropertiesData } from "../../static";

const defaultImage =
  "https://img.freepik.com/free-photo/woman-showing-with-one-hand-mini-house-real-state-concept-ai-generative_123827-24098.jpg?w=1060&t=st=1704098587~exp=1704099187~hmac=d1267153192cae767e4b39daabbcf2a2e0489631363f16e73c028a6583c2f056";

export default function CarouselCard() {
  return (
    <Container className={classes.wrapper} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} style={{ marginLeft: 15 }}>
        {PropertiesData.map((item) => {
          const { title, description, features, price, images, id } = item;
          return (
            <Card
              // bg={"#edf6f9"}
              shadow="md"
              key={id}
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
                        <Image
                          src={image}
                          alt={`Property Picture ${index + 1}`}
                        />
                      </div>
                    ))}
                </AwesomeSlider>
              </Card.Section>

              <Group justify="space-between" mt="lg">
                <Stack direction="row">
                  {features &&
                    features.map((feature) => (
                      <Badge key={feature} variant="subtle" colorScheme="green">
                        {feature}
                      </Badge>
                    ))}
                </Stack>
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
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
