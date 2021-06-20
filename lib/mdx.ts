import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import { MDXPost, MDXSnippet, PostType, SnippetType } from "@/types/post";
import readingTime from "reading-time";

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(
  type: string,
  slug: string | string[] | undefined
): Promise<MDXPost | MDXSnippet> {
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
  if (type === "snippet") {
    return {
      source,
      meta: {
        slug,
        title: data.title,
        description: data.description,
        logo: data.logo,
        tags: data.tags,
      },
    };
  }
  return {
    source,
    meta: {
      slug,
      readTime: readingTime(content),
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      image: data.image,
    },
  };
}

//todo:types
export const getAllFilesFrontMatter = async (
  type: string
): Promise<PostType[] | SnippetType[]> => {
  const files: any[] = fs.readdirSync(path.join(root, "data", type));

  return files.reduce(async (allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);
    return [
      {
        ...data,
        readTime: type === "blog" ? readingTime(content) : null,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
