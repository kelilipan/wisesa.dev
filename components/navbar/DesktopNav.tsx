import React from "react";
import dynamic from "next/dynamic";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "@/components/Link";
import { links } from "./Constant";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false });

const DesktopNav = () => (
  <nav className="hidden md:block z-50 border-b-2 border-gray-200 dark:border-light border-dashed w-full sticky top-0 bg-white dark:bg-dark">
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
    </div>
  </nav>
);

export default DesktopNav;
