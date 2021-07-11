import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { FaBars, FaExternalLinkAlt } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Doodle2 from "./doodle/Doodle2";

const MobileDrawer = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

const Navbar = () => {
  const color = useColorModeValue("#202020", "white");
  const bgColor = useColorModeValue("whiteAlpha.50", "blackAlpha.50");
  const bgColorFallback = useColorModeValue(
    "whiteAlpha.900",
    "rgba(29, 29, 29, 0.9)"
  );
  const borderBottomColor = useColorModeValue(
    "blackAlpha.50",
    "whiteAlpha.200"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const fontSize = useBreakpointValue(["lg", "xl"]);
  const hoverBg = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const skipColor = useColorModeValue("white", "#202020");
  const buttonStyle: ButtonProps = {
    as: "a",
    borderRadius: "none",
    py: [6, 8],
    px: 2,
    minW: ["50px", "60px"],
    variant: "ghost",
    colorScheme: "blackAlpha",
    color,
    _hover: {
      bgColor: hoverBg,
    },
    _focus: {
      boxShadow: "none",
      textDecor: "underline",
      textDecorationStyle: "dotted",
    },
  };
  const links = [
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Projects",
      url: "/projects",
    },
    {
      text: "Snippets",
      url: "/snippet",
    },
    {
      text: "Timeline",
      url: "https://timeline.wisesa.dev",
    },
    {
      text: "About",
      url: "/about",
    },
  ];
  const router = useRouter();
  const path = router.pathname;
  return (
    <Box
      as="nav"
      bgColor="whiteAlpha.50"
      zIndex="modal"
      w="full"
      sx={{
        "@supports (backdrop-filter: blur(12px))": {
          backdropFilter: "blur(12px)",
          bgColor,
        },
        "@supports (-webkit-backdrop-filter: blur(12px))": {
          WebkitBackdropFilter: "blur(12px)",
          bgColor,
        },
        "@supports not (backdrop-filter: blur(12px))": {
          bgColor: bgColorFallback,
        },
      }}
      borderBottomColor={borderBottomColor}
      borderBottomWidth="2px"
      pos="sticky"
      top={0}
    >
      <Flex mx="auto" w="full" maxW="5xl" pos="relative">
        <Button
          w="full"
          as="a"
          href="#main-content"
          {...buttonStyle}
          opacity="0"
          pos="absolute"
          zIndex="skipLink"
          color={skipColor}
          bgColor={color}
          pointerEvents="none"
          _hover={{}}
          _focus={{
            ...buttonStyle._focus,
            opacity: 1,
            pointerEvents: "auto",
          }}
        >
          Skip to main content
        </Button>
        <Link href="/" passHref>
          <Button {...buttonStyle} fontFamily="doodle" fontSize="xl">
            Wisesa.dev
          </Button>
        </Link>
        {/* normal nav */}
        <Flex d={["none", "flex"]} justifyContent="space-between" flex="1">
          <HStack spacing={0}>
            {links.map((data, idx) => (
              <Link href={data.url} key={idx} passHref>
                <Button
                  {...buttonStyle}
                  textDecor={path === data.url ? "underline" : "none"}
                  fontSize="sm"
                  rel={
                    data.text === "Timeline" ? "noopener noreferrer" : undefined
                  }
                  target={data.text === "Timeline" ? "_blank" : undefined}
                  rightIcon={
                    data.text === "Timeline" ? (
                      <FaExternalLinkAlt size="10px" />
                    ) : undefined
                  }
                >
                  {data.text}
                </Button>
              </Link>
            ))}
          </HStack>
          <ThemeSwitcher ml="auto" mr="2" alignSelf="center" />
        </Flex>
        <Flex
          d={["flex", "none"]}
          justifyContent="flex-end"
          alignItems="center"
          flex="1"
        >
          <IconButton
            {...buttonStyle}
            as="button"
            onClick={onOpen}
            variant="ghost"
            aria-label="Open navigation menu"
            icon={<FaBars />}
          />
        </Flex>
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};

export default Navbar;
