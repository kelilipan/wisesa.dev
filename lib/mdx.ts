import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import { MDXPost } from "@/types/post";

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(
  type: string,
  slug: string | string[] | undefined
): Promise<MDXPost> {
  const fileSource = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(fileSource);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-slug"), require("remark-code-titles")],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    source,
    meta: {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      image: data.image,
    },
  };
}
