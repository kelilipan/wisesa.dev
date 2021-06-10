import Head from "@/components/Head";
import Main from "@/components/Main";
import MDXComponents from "@/components/MDXComponents";
import { RouteLink } from "@/components/RouteLink";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { MDXPost } from "@/types/post";
import { Avatar, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";

const Post = ({ source, meta }: MDXPost) => {
  const date = new Date(meta.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Main maxW="3xl">
      <Head
        title={meta.title}
        description={meta.description}
        image={meta.image}
      />
      <Flex direction="column">
        <RouteLink href={`/blog/${meta.slug}`}>
          <Heading fontSize={["4xl", "6xl"]} mt={[4, 6]}>
            {meta.title}
          </Heading>
        </RouteLink>
        <Text>{meta.description}</Text>
        <Flex mt="5">
          <Avatar src="/android-icon-48x48.png" name="Wisesa" size="xs" />
          <Text ml="2">
            <RouteLink href="/about">Wisesa</RouteLink> / {date}
          </Text>
        </Flex>
        <Divider mt="4" mb="2" />
      </Flex>
      <MDXRemote {...source} components={MDXComponents} />
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");
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
