import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./Cards.module.css";

const mockdata = [
  {
    title: "Find Your Dream Home,",
    description:
      "Get personalized recommendations based on your unique needs and preferences.",
    icon: IconGauge,
  },
  {
    title: "Work with Trusted Experts",
    description:
      "Our experienced agents are here to guide you through every step of the process.",
    icon: IconUser,
  },
  {
    title: " Enjoy a Seamless Experience    ",
    description:
      "Our innovative platform makes buying or selling a home easier than ever.",
    icon: IconCookie,
  },
];

export default function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        className="caret-blue-500"
        color="#fff"
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} c={"#fff"} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <section className="bg-gradient-to-r bg-green-500 my-4 p-4 w-full">
      <Group justify="center">
        <Badge variant="filled" size="lg" className="bg-yellow-500 text-white">
          Best company ever
        </Badge>
      </Group>

      <Title
        order={2}
        className={`${classes.title} text-white`}
        ta="center"
        mt="sm"
      >
        Integrate effortlessly with any technology stack
      </Title>

      <Text
        c="rgb(215, 215, 215)"
        className={`${classes.description} text-gray-100`}
        ta="center"
        mt="md"
      >
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </section>
  );
}
