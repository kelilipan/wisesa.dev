import MDXComponents from "@/components/MDXComponents";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { MDXPost } from "@/types/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";

const Post = ({ source, meta }: MDXPost) => {
  console.log(meta);
  return (
    <div>
      <p>This is could be post</p>
      <MDXRemote {...source} components={MDXComponents} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");
  console.log(posts);
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
  const post = await getFileBySlug("blog", params?.slug);
  return {
    props: { ...post },
  };
};
export default Post;
