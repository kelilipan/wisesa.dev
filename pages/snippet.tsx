import Head from "@/components/Head";
import Main from "@/components/Main";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { SnippetType } from "@/types/post";
import SnippetCard from "@/components/SnippetCard";
interface SnippetProps {
  snippets: SnippetType[] | [];
}
const Snippet = ({ snippets }: SnippetProps) => {
  const filteredSnippet = snippets.sort((a, b) => {
    return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
  });
  return (
    <Main>
      <Head
        title="Code Snippets"
        description="A collection of code snippets that I've used before like automation scripts etc"
      />
      <h1 className="mt-4 md:mt-6 text-4xl md:text-6xl"> Code Snippets</h1>
      <p className="mt-2">
        These are a collection of code snippets I&apos;ve used in the past and
        saved.
      </p>
      {filteredSnippet.length > 0 ? (
        <div className="flex flex-col space-y-2 py-4">
          {filteredSnippet.map((snippet: SnippetType, idx: number) => (
            <SnippetCard {...snippet} key={idx} />
          ))}
        </div>
      ) : (
        <p className="pt-4">No snippet.</p>
      )}
    </Main>
  );
};
export const getStaticProps = async () => {
  const snippets = await getAllFilesFrontMatter("snippet");
  return { props: { snippets } };
};

export default Snippet;
