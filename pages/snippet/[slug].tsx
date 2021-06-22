import Head from "@/components/Head";
import Main from "@/components/Main";
import MDXComponents from "@/components/MDXComponents";
import { RouteLink } from "@/components/RouteLink";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { MDXSnippet } from "@/types/post";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const Snippet = ({ source, meta }: MDXSnippet) => {
  return (
    <Main maxW="3xl" mb="6">
      <Head
        title={meta.title + " · Code Snippets"}
        description={meta.description}
      />
      <Flex justifyContent="space-between" alignItems="center" mt={[4, 6]}>
        <Flex direction="column">
          <RouteLink href={`/snippet/${meta.slug}`}>
            <Heading fontSize={["4xl", "6xl"]}>{meta.title}</Heading>
          </RouteLink>
          <Text>{meta.description}</Text>
        </Flex>
        <Flex
          d={["none", "flex"]}
          bg="whiteAlpha.600"
          boxSize="50px"
          minW="50px"
          minH="50px"
          borderRadius="full"
        >
          {meta.logo !== undefined && (
            <Image src={meta.logo} width="50" height="50" className="rounded" />
          )}
        </Flex>
      </Flex>
      <HStack>
        {meta?.tags?.map((tag, idx) => (
          <Badge key={idx}>{tag}</Badge>
        ))}
      </HStack>
      <Divider pt="4" />
      <Box w="full" pt="2">
        <MDXRemote {...source} components={MDXComponents} />
      </Box>
      <style global jsx>
        {`
          .rounded {
            border-radius: 100%;
          }
        `}
      </style>
    </Main>
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
