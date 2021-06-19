import Head from "@/components/Head";
import Main from "@/components/Main";
import PostCard from "@/components/PostCard";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { PostType } from "@/types/post";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
interface BlogProps {
  posts: PostType[] | [];
}
const Blog = ({ posts }: BlogProps) => {
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <Main>
      <Head
        title="Blog"
        description="Some tech stuff and my random thoughts."
      />
      <Heading mt={[4, 6]} fontSize={["4xl", "6xl"]}>
        Blog
      </Heading>
      <Text>Some tech stuff and my random thoughts.</Text>
      {filteredBlogPosts.length > 0 ? (
        <SimpleGrid columns={[1, 2]} gap="4">
          {filteredBlogPosts.map((post: PostType, idx: number) => (
            <PostCard {...post} key={idx} />
          ))}
        </SimpleGrid>
      ) : (
        <Text pt="4">No blog post.</Text>
      )}
    </Main>
  );
};
export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
};

export default Blog;
