import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import Link from "@/components/Link";
import { FaBars, FaExternalLinkAlt } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const MobileDrawer = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

const Navbar = () => {
  const color = useColorModeValue("#202020", "white");
  const bgColor = useColorModeValue("whiteAlpha.500", "rgba(29, 29, 29, 0.5)");
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
    <nav className="z-50 border-b-2 border-gray-200 sticky top-0">
      <div className="flex max-w-5xl mx-auto items-center">
        <Link
          href="/"
          className="font-doodle font-semibold text-center text-xl py-2 md:py-4 px-2 hover:bg-gray-300 transition duration-200 ease-in-out"
        >
          Wisesa.dev
        </Link>
        <div className="hidden md:flex w-full justify-between items-center ">
          <div className="flex">
            {links.map((link) => {
              return (
                <Link
                  href={link.url}
                  key={link.url}
                  className="font-semibold text-center text-sm min-w-16 py-5 px-2 hover:bg-gray-300 transition duration-200 ease-in-out"
                >
                  {link.text}
                  {link.text === "Timeline" && (
                    <FaExternalLinkAlt
                      className="ml-2 inline"
                      style={{ fontSize: "10px" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <ThemeSwitcher />
        </div>
        <div className="flex ml-auto md:hidden">
          <button className="h-[44px] px-3 hover:bg-gray-300 transition duration-200 ease-in-out">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
