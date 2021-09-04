import { PostType } from "@/types/post";
import Image from "next/image";
import { ID, EN } from "./flags";
import Link from "./Link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const PostCard = ({
  title,
  lang,
  slug,
  description,
  image,
  publishedAt,
  readTime,
}: PostType) => {
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link className="rounded" href={`/blog/${slug}`}>
      <div className="group h-full rounded-md border-gray-300 border transition duration-200 ease-in-out hover:bg-gray-200">
        <div className="flex border-b rounded-t group-hover:opacity-90">
          <Image
            className="rounded-t"
            alt={title}
            width="512"
            height="267"
            quality="100"
            src={image ? image : "/og-post-default.jpg"}
          />
        </div>

        <div className="p-2 rounded-b">
          <h4>{title}</h4>
          <div className="text-sm mb-2 text-gray-700">
            <Tippy
              content={`This post has ${readTime?.words} words and written in ${
                lang === "id" ? "Bahasa Indonesia" : "English"
              }. Reading time is calculated using 200WPM Reading speed.`}
            >
              <span>
                {date} • {readTime?.text} • {lang === "id" ? <ID /> : <EN />}
              </span>
            </Tippy>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
