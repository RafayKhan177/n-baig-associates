import {
  Card,
  Text,
  Group,
  Button,
  Image,
} from "@mantine/core";
import classes from "./CarouselCard.module.css";
import { motion } from "framer-motion";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SingleListing = ({ item }) => {
  const { title, description, price, images, id } = item;

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
        key={id}
      >
        <Card
          shadow="md"
          radius="md"
          withBorder
          padding="xl"
          style={{ width: "auto" }}
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
