import Link from "@/components/Link";
import { FaBars, FaExternalLinkAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useState } from "react";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false });
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });
const Navbar = () => {
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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="z-50 border-b-2 border-gray-200 dark:border-light fixed top-0 bg-white dark:bg-dark">
        <div className="flex max-w-5xl mx-auto items-center">
          <Link
            href="/"
            className="font-doodle font-semibold text-center text-xl py-2 md:py-4 px-2 hover:bg-gray-300 dark:hover:bg-light transition duration-200 ease-in-out"
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
                    isExternal={link.text === "Timeline"}
                    className="font-semibold text-center text-sm min-w-16 py-5 px-2 hover:bg-gray-300 dark:hover:bg-light transition duration-200 ease-in-out"
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
            <button
              onClick={() => setShowMenu(true)}
              aria-label="open navigation menu"
              className="h-[44px] px-3 hover:bg-gray-300 dark:hover:bg-light transition duration-200 ease-in-out"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;
