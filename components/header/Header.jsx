"use client";
import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Popover,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconBook,
  IconCoin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import SideButton from "./SideButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Buy" },
  { href: "/", label: "Build Your Own" },
  { href: "/", label: "Blogs" },
  { href: "/", label: "Talk To Us" },
  { href: "/", label: "About Us" },
];

export default function HeaderMenu() {
  const nav = useRouter();

  const push = (url) => {
    nav.push(url);
  };

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box style={{ overflow: "hidden", position: "relative" }}>
      <Flex
        bg="#fff"
        alignItems="center"
        justifyContent="space-between"
        m={0}
        p={0}
        textTransform="uppercase"
      >
        {/* Social Media Icons */}
        <Flex alignItems="center" px={1}>
          <Link
            href="https://www.facebook.com/albashirwelfare"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <IconBrandFacebook size={20} color="#3b5998" />
          </Link>
          <Link
            href="https://www.instagram.com/albashirwelfare/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            ml="1rem"
            _hover={{ textDecoration: "none" }}
          >
            <IconBrandInstagram
              size={25}
              style={{ padding: "2px" }}
              color="#e4405f"
            />
          </Link>
          <Link
            href="mailto:your.email@gmail.com"
            ml="1rem"
            style={{
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: ".8rem",
            }}
          >
            <MailOutlineRoundedIcon
              style={{
                color: "gray",
                fontSize: "21px",
                marginRight: "1rem",
              }}
              color="#fff"
            />
            baigassociates@gmail.com
          </Link>
        </Flex>

        {/* Phone Icon */}
        <Flex
          alignItems="center"
          px={1}
          style={{ backgroundColor: "lightgray", height: "2rem" }}
        >
          <IconPhone
            size={22}
            style={{ padding: "2px", color: "#fff" }}
            color="#000"
          />
          <Link
            href="tel:+92 333 5593694"
            style={{ color: "#000", fontSize: ".7rem" }}
            ml="0.5rem"
          >
            +92 333 5593694
          </Link>
        </Flex>
      </Flex>
      <Link href={"/Contribution"}></Link>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          <Link href="/" style={{ width: "12rem" }}>
            <Image
              src="/logo.png"
              width={900}
              height={900}
              alt="logo"
              style={{
                zIndex: 999,
                position: "absolute",
                top: 30,
                width: "auto",
                height: "5rem",
              }}
            />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className={classes.link2}>
                {link.label}
              </Link>
            ))}
          </Group>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SideButton />
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              color={"#000"}
            />
          </div>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="ALBASHIR"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(90vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
        </ScrollArea>
        <Divider my="sm" />
        {/* <Group justify="center" grow pb="xl" px="md">
          <UserButton user={user} />
        </Group> */}
      </Drawer>
    </Box>
  );
}
