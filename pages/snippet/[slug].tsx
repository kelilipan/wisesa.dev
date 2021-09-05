import Head from "@/components/Head";
import MDXComponents from "@/components/MDXComponents";
import Link from "@/components/Link";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { MDXSnippet } from "@/types/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const Snippet = ({ source, meta }: MDXSnippet) => {
  return (
    <section
      id="main-content"
      className="flex flex-col flex-1 h-full w-full max-w-3xl mx-auto pt-6 px-2 mb-6 md:pt-11 md:px-0"
    >
      <Head
        title={meta.title + " · Code Snippets"}
        description={meta.description}
      />
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-6xl mt-4 md:mt-6 hover:underline">
            <Link href={`/snippet/${meta.slug}`}>{meta.title}</Link>
          </h1>
          <p>{meta.description}</p>
        </div>
        <div className="hidden md:block">
          {meta.logo !== undefined && (
            <Image
              src={meta.logo}
              width="50"
              height="50"
              className=" bg-gray-50 rounded-full w-14 md:w-16"
              alt="logo"
            />
          )}
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
        {meta?.tags?.map((tag, idx) => (
          <div
            className="rounded-sm text-xs uppercase px-1 font-semibold bg-gray-200 dark:bg-light"
            key={idx}
          >
            {tag}
          </div>
        ))}
      </div>
      <hr className="my-4 dark:border-light" />
      <div className="prose dark:prose-dark max-w-full">
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("snippet");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug("snippet", params?.slug);
  return {
    props: { ...post },
  };
};
export default Snippet;
