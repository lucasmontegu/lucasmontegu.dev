import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Footer = () => {
  return (
    <Flex
      as="footer"
      className="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
    >
      <Stack direction="row" spacing={4} align="center" className="footer-social-network">
        <Link href="https://github.com/lucasmontegu">
          <a target="_blank" rel="noreferrer">
            <FiGithub size="22" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/lucasmontegu/">
          <a target="_blank" rel="noreferrer">
            <FiLinkedin size="22" />
          </a>
        </Link>
      </Stack>
      <Stack className="footer-copyright">
        <Text size="18">Coded with 💜 by Lucas Montegú</Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
