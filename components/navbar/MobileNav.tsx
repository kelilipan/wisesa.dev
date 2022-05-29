import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { FaExternalLinkAlt } from "react-icons/fa";

import Link from "@/components/Link";
import { links, NavLink } from "./Constant";

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false });

const MobileNav = () => {
  const { pathname } = useRouter();
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const navLinks: NavLink[] = [{ url: "/", text: "Home" }, ...links];

  return (
    <nav className="bottom-nav flex md:hidden overflow-x-auto">
      {navLinks.map((link, idx) => (
        <Link
          key={"links-" + idx}
          href={link.url}
          className={clsx(
            "p-4 py-2 transition duration-200 ease-in-out flex items-center",
            pathname === link.url &&
              "font-bold border-b-2 border-light dark:border-gray-300"
          )}
        >
          {link.text}
          {link.text === "Timeline" && (
            <FaExternalLinkAlt
              className="ml-1 inline"
              style={{ fontSize: "10px" }}
            />
          )}
        </Link>
      ))}
      <div
        ref={ref}
        className={clsx(
          "ml-auto sticky p-2 -right-[1px] h-11 bg-white dark:bg-light flex items-center mr-[1px] dark:shadow-dark",
          !inView && "shadow-lg"
        )}
      >
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default MobileNav;
