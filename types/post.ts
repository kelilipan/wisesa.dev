import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostType = {
  slug: string | string[] | undefined;
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
};

export type MDXPost = {
  source: MDXRemoteSerializeResult;
  meta: PostType;
};
