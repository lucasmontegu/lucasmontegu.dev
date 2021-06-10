import React from "react";
import { Button, Flex, Stack, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun, FiArrowRight } from "react-icons/fi";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Header = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      className="navbar"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={{sm: 0, md: 8}}
      p={{sm: 8, md: 8}}
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
