import Head from "@/components/Head";
import Blob from "@/components/about/Blob";
import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";

const AboutPage = () => {
  return (
    <div
      id="main-content"
      className=" flex flex-col flex-1 h-full w-full max-w-3xl mx-auto  px-2 md:px-0"
    >
      <Head title="About" />
      <div className="flex justify-center relative">
        <Blob />
      </div>
      <div className="prose dark:prose-dark mt-[-4rem] max-w-full z-20">
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
};

export default AboutPage;
