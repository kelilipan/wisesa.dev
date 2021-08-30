import Head from "@/components/Head";
import Main from "@/components/Main";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { SnippetType } from "@/types/post";
import { Heading, Text, VStack } from "@chakra-ui/react";
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
      <Heading mt={[4, 6]} fontSize={["4xl", "6xl"]}>
        Code Snippets
      </Heading>
      <Text>
        These are a collection of code snippets I&apos;ve used in the past and
        saved.
      </Text>
      {filteredSnippet.length > 0 ? (
        <VStack alignItems="self-start" pt="4">
          {filteredSnippet.map((snippet: SnippetType, idx: number) => (
            <SnippetCard {...snippet} key={idx} />
          ))}
        </VStack>
      ) : (
        <Text pt="4">No snippet.</Text>
      )}
    </Main>
  );
};
export const getStaticProps = async () => {
  const snippets = await getAllFilesFrontMatter("snippet");
  return { props: { snippets } };
};

export default Snippet;
