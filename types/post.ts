import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostType = {
  slug: string | string[] | undefined;
  title: string;
  description: string;
  publishedAt: string;
  image: string;
  lang: "id" | "en";
  readTime?: {
    text: string;
    time: number;
    words: number;
    minutes: number;
  };
};

export type MDXPost = {
  source: MDXRemoteSerializeResult;
  meta: PostType;
};

export type SnippetType = {
  slug: string | string[] | undefined;
  title: string;
  description: string;
  logo: string;
  tags?: string[];
};

export type MDXSnippet = {
  source: MDXRemoteSerializeResult;
  meta: SnippetType;
};
