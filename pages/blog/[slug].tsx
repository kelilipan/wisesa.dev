import Head from "@/components/Head";
import Main from "@/components/Main";
import MDXComponents from "@/components/MDXComponents";
import { RouteLink } from "@/components/RouteLink";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { MDXPost } from "@/types/post";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";

const Post = ({ source, meta }: MDXPost) => {
  const date = new Date(meta.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Main maxW="3xl" mb="6">
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
        <Flex mt="5" fontSize="sm" alignItems="center">
          <Avatar src="/android-icon-48x48.png" name="Wisesa" boxSize="24px" />
          <Text ml="2">
            <RouteLink href="/about">Wisesa</RouteLink> / {date}
          </Text>
          <Text ml="auto">
            <Tooltip
              label={`This post has ${meta.readTime?.words} words. Reading time is calculated using 200WPM Reading speed.`}
              aria-label="Reading time"
            >
              {meta.readTime?.text}
            </Tooltip>
          </Text>
        </Flex>
        <Divider mt="4" mb="2" />
      </Flex>
      <Box w="full">
        <MDXRemote {...source} components={MDXComponents} />
      </Box>
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
