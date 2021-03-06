import React from "react";
import { Button, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun, FiArrowRight } from "react-icons/fi";

interface Props {}

const Header = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={{sm: 4, md: 8}}
      className="navbar"
      {...props}
    >
      <Stack>
        <h1 className="header-logo">L.</h1>
      </Stack>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
      >
        {/* <Button
          rightIcon={<FiArrowRight />}
          className=""
        >
          Contact me
        </Button> */}
        {colorMode === "light" ? (
          <FiMoon size="22" onClick={toggleColorMode} />
        ) : (
          <FiSun size="22" onClick={toggleColorMode} />
        )}
      </Stack>
    </Flex>
  );
};

export default Header;
