import React from "react";
import Layout from "../src/components/Layout/index";
import {
  Flex,
  Stack,
  Text,
  Box,
  Heading,
  SimpleGrid,
  Img,
} from "@chakra-ui/react";

export default function Home() {
  const currentAge = new Date().getFullYear() - 1992;
  return (
    <Layout>
      <Flex
        className="hero"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={{ sm: 0, md: 12 }}
        p={{ sm: 4, md: 8 }}
      >
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} flexWrap="wrap">
          <Stack>
            <Heading as="h1" className="hero-title">
              Hi, I'm Lucas 👋
            </Heading>
            <Text className="hero-sub-title">JavaScript Developer</Text>

            <Text className="hero-description">
              I'm a {currentAge} years old, i'm from Argentine and currently
              working at dinocloud in the role of software engineer with
              JavaScript language. I am very passionate about the front end,
              mobile and serverless applications. I'm a fan of the react, ionic
              and react native. I am constantly learning new technologies 🚀
            </Text>
          </Stack>
          <Stack>
            <Box className="hero-right-box">
              <Img
                src="/images/me.png"
                alt="Lucas Montegú"
                width={450}
                className="hero-right-box__image"
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
