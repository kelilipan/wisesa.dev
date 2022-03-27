import Main from "@/components/layouts/Main";
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
      <h1 className="mt-4 md:mt-6 text-4xl md:text-6xl">Projects</h1>
      <p>Some collection of my past works.</p>
      {filteredProject.length > 0 ? (
        <div className="flex flex-col space-y-2 py-4">
          {filteredProject.map((project, idx) => (
            <ProjectCard {...project} key={idx} />
          ))}
        </div>
      ) : (
        <p>No project.</p>
      )}
    </Main>
  );
};

export default projects;
