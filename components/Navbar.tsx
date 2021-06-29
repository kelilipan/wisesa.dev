import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import {
  IconButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";

import dynamic from "next/dynamic";

const MobileDrawer = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

const Navbar = () => {
  const color = useColorModeValue("black", "white");
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
  const fontSize = useBreakpointValue(["lg", "xl"]);
  const hoverBg = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
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
    _focus: { boxShadow: "none" },
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
      text: "About",
      url: "/about",
    },
  ];
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
      <Flex mx="auto" w="full" maxW="5xl">
        <Link href="/" passHref>
          <Button {...buttonStyle} fontFamily="doodle" fontSize={fontSize}>
            Wisesa.dev
          </Button>
        </Link>
        {/* normal nav */}
        <Flex d={["none", "flex"]} justifyContent="space-between" flex="1">
          <HStack spacing={0}>
            {links.map((data, idx) => (
              <Link href={data.url} key={idx} passHref>
                <Button {...buttonStyle} fontSize="sm">
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
