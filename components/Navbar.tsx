import Link from "@/components/Link";
import { FaBars, FaExternalLinkAlt } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";

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

  return (
    <nav className="z-50 border-b-2 border-gray-200 dark:border-light sticky top-0 bg-white dark:bg-dark">
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
          <button className="h-[44px] px-3 hover:bg-gray-300 transition duration-200 ease-in-out">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
