import Main from "@/components/Main";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import data from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Head from "@/components/Head";
const projects = () => {
  const filteredProject = data.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
  );
  return (
    <Main>
      <Head title="Projects" description="Some collection of my past works." />
      <Heading mt={[4, 6]} fontSize={["4xl", "6xl"]}>
        Projects
      </Heading>
      <Text>Some collection of my past works.</Text>
      {filteredProject.length > 0 ? (
        <Stack w="full" spacing={[6, 4]}>
          {filteredProject.map((project, idx) => (
            <ProjectCard {...project} key={idx} />
          ))}
        </Stack>
      ) : (
        <Text>No project.</Text>
      )}
    </Main>
  );
};

export default projects;
