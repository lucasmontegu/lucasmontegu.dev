import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import Link from 'next/link'
import { FiGithub, FiLinkedin } from "react-icons/fi";

interface Props {
  
}

const Footer = (props: Props) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      className="footer"
    >
      <Stack
        direction="row"
        spacing={4}
        align="center"
        className="footer-container-icons"
      >
        <Link href="https://github.com/lucasmontegu"><a target="_blank" rel="noreferrer"><FiGithub size="22" /></a></Link>
        <Link href="https://www.linkedin.com/in/lucasmontegu/"><a target="_blank" rel="noreferrer"><FiLinkedin size="22" /></a></Link>
      </Stack>
      <Stack className="footer-container-copy"><Text size="18">Coded with ❤️ by Lucas Montegú</Text></Stack>
    </Flex>
  )
}

export default Footer;
