import { ProjectType } from "@/types/project";
import Image from "next/image";
import Link from "./Link";
import { FaArrowRight, FaCode } from "react-icons/fa";
import clsx from "clsx";
const colorMap: Record<any, string> = {
  react: "bg-blue-300 dark:bg-blue-800",
  "next.js": "bg-yellow-300 dark:bg-yellow-800",
  nextjs: "bg-yellow-300 dark:bg-yellow-800",
  javascript: "bg-yellow-300 dark:bg-yellow-800",
  typescript: "bg-blue-300 dark:bg-blue-800",
  php: "bg-purple-300 dark:bg-purple-800",
  laravel: "bg-yellow-300 dark:bg-yellow-800",
  express: "bg-green-300 dark:bg-green-800",
  "express.js": "bg-green-300 dark:bg-green-800",
  expressjs: "bg-green-300 dark:bg-green-800",
  line: "bg-green-300 dark:bg-green-800",
  python: "bg-blue-300 dark:bg-blue-800",
};
const ProjectCard = ({
  title,
  image,
  source,
  url,
  description,
  technology,
  createdAt,
}: ProjectType) => {
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="flex flex-col md:flex-row w-full border-2 border-dashed border-gray-200 dark:border-light rounded">
      <Image
        className="rounded rounded-b-none md:rounded-r-none"
        width="512"
        height="288"
        src={image}
        alt={title}
        placeholder="blur"
      />
      <div className="p-4 flex flex-col w-full md:w-1/2">
        <h2 className="hover:underline">
          {url !== undefined || source !== undefined ? (
            <Link isExternal href={url ? url : source || "#"}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="text-sm">Created at {date}</p>
        <p className="mt-2">{description}</p>
        <div className="flex flex-wrap mt-2 space-x-2">
          {technology?.map((tech, idx) => (
            <div
              className={clsx(
                `rounded-sm text-xs uppercase px-1 font-bold`,
                colorMap[tech.name.toLowerCase()]
                  ? colorMap[tech.name.toLowerCase()]
                  : "bg-gray-300 dark:bg-light"
              )}
              key={idx}
            >
              {tech.url ? (
                <Link href={tech.url} className="hover:underline" isExternal>
                  {tech.name}
                </Link>
              ) : (
                tech.name
              )}
            </div>
          ))}
        </div>
        <div className="flex mt-4 space-x-4">
          {url && (
            <Link
              className="font-semibold text-lg hover:underline"
              isExternal
              href={url}
            >
              <FaArrowRight className="inline" /> Visit Project
            </Link>
          )}
          {source && (
            <Link
              className="font-semibold text-lg hover:underline"
              isExternal
              href={source}
            >
              <FaCode className="inline" /> Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
