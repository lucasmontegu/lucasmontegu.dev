import React from "react";
import Layout from "../src/components/Layout/index";
import { Flex, Stack, Text, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const currentAge = new Date().getFullYear() - 1992;
  return (
    <Layout>
      <Flex
        className="hero"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={12}
        p={8}
      >
        <SimpleGrid columns={{sm: 1, md: 2}} spacing={10} flexWrap="wrap">
          <Stack pt={20}>
            <Heading as="h1" className="hero-title">
              Hi, I'm Lucas 👋
            </Heading>
            <Text className="hero-sub-title">JavaScript Developer</Text>
            {
              <Text className="hero-description">
                I'm a {currentAge} years old, i'm from Argentine and currently
                working at dinocloud in the role of software engineer with
                JavaScript language. I am very passionate about the front end,
                mobile and serverless applications. I'm a fan of the react,
                ionic and react native. I am constantly learning new
                technologies 🚀
              </Text>
            }
          </Stack>
          <Stack>
            <Box className="hero-right-box">
              <Image
                src="/images/me.jpg"
                alt="Lucas Montegú"
                width={420}
                height={580}
                className="hero-right-box__image"
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
