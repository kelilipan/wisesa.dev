import { useEffect } from "react";
import Head from "@/components/Head";
import MDXComponents from "@/components/MDXComponents";
import Link from "@/components/Link";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import config from "@/site.config";
import { MDXPost } from "@/types/post";

import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { BlogJsonLd } from "next-seo";
import { ID, EN } from "@/components/flags";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Post = ({ source, meta }: MDXPost) => {
  useEffect(() => {
    document.documentElement.lang = meta.lang;
    return () => {
      document.documentElement.lang = "en";
    };
  }, [meta.lang]);
  const date = new Date(meta.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section
      id="main-content"
      className=" flex flex-col flex-1 h-full w-full max-w-3xl mx-auto pt-6 px-2 mb-6 md:pt-11 md:px-0"
    >
      <Head
        title={meta.title}
        description={meta.description}
        image={meta.image}
        openGraph={{
          type: "article",
          article: {
            publishedTime: new Date(meta.publishedAt).toISOString(),
            modifiedTime: new Date(meta.publishedAt).toISOString(),
            authors: ["Wisesa"],
            section: "Blog",
          },
        }}
      />
      <BlogJsonLd
        url={config.baseUrl + "/" + meta.slug}
        title={meta.title}
        authorName={"Wisesa"}
        datePublished={new Date(meta.publishedAt).toISOString()}
        dateModified={new Date(meta.publishedAt).toISOString()}
        description={meta.description}
        images={[meta.image]}
      />
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-6xl mt-4 md:mt-6 hover:underline">
          <Link href={`/blog/${meta.slug}`}>{meta.title}</Link>
        </h1>
        <p className="mt-2">{meta.description}</p>
        <div className="flex mt-4 text-sm items-center">
          <p>
            <Link href="/about" className="font-semibold">
              Wisesa
            </Link>{" "}
            / {date}
          </p>
          <p className="ml-auto">
            <Tippy
              content={`This post has ${
                meta.readTime?.words
              } words and written in ${
                meta.lang === "id" ? "Bahasa Indonesia" : "English"
              }. Reading time is calculated using 200WPM Reading speed.`}
            >
              <span>
                {meta.readTime?.text} • {meta.lang === "id" ? <ID /> : <EN />}
              </span>
            </Tippy>
          </p>
        </div>
        <hr className="mt-4 mb-2 dark:border-light" />
      </div>
      <div className="prose dark:prose-dark max-w-full">
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");
  return {
    paths: posts.map((p) => {
      const slug = p.replace(/\.mdx/, "");
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params?.slug);
  return {
    props: { ...post },
  };
};
export default Post;
