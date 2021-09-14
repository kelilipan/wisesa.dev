import { SnippetType } from "@/types/post";
import Image from "next/image";
import Link from "@/components/Link";
const SnippetCard = ({ logo, title, description, tags, slug }: SnippetType) => {
  return (
    <Link className="w-full" href={`/snippet/${slug}`}>
      <div className="flex rounded-md items-start md:items-center flex-col md:flex-row border-gray-200 dark:border-light border-2 border-dashed group p-4  transition duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-light">
        <Image
          className="bg-gray-50 dark:bg-light rounded-full w-14 md:w-16"
          src={logo}
          width="60"
          height="60"
          alt="logo"
        />
        <div className="flex flex-col ml-0 md:ml-4">
          <h4 className="leading-5 md:leading-normal group-hover:underline">
            {title}
          </h4>
          <p>{description}</p>
          <div className="flex space-x-2 mt-2">
            {tags?.map((tag, idx) => (
              <div
                className="rounded-sm text-xs uppercase px-1 font-semibold bg-gray-200 dark:bg-light"
                key={idx}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SnippetCard;
