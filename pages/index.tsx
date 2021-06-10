import React from "react";
import Layout from "../src/components/Layout/index";
import { Flex, Stack, Text, Box, Heading, SimpleGrid, Img } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Home() {
  const currentAge = new Date().getFullYear() - 1992;

  const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };

  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <Flex
          className="hero"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={12}
          p={{sm: 6, md: 8}}
        >
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} flexWrap="wrap">
            <Stack pt={{sm: 0, md: 20}} className="hero-left-section">
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
            <Stack className="hero-right-section">
            <motion.div variants={postVariants}>
              <Box className="hero-right-box">
                <Img
                  src="/images/me.png"
                  alt="Lucas Montegú"
                  boxSize="450px"
                  className="hero-right-box__image"
                />
              </Box>
              </motion.div>
            </Stack>
          </SimpleGrid>
        </Flex>
      </motion.div>
    </Layout>
  );
}
