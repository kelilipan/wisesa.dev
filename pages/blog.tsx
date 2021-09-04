import Head from "@/components/Head";
import Main from "@/components/Main";
import PostCard from "@/components/PostCard";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { PostType } from "@/types/post";
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
      <h1 className="mt-4 md:mt-6 text-4xl md:text-6xl">Blog</h1>
      <p className="mt-2">Some tech stuff and my random thoughts.</p>
      {filteredBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {filteredBlogPosts.map((post: PostType, idx: number) => (
            <PostCard {...post} key={idx} />
          ))}
        </div>
      ) : (
        <p className="pt-4">No blog post.</p>
      )}
    </Main>
  );
};
export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
};

export default Blog;
