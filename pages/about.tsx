import Main from "@/components/Main";
import Head from "@/components/Head";
import Image from "next/image";
import Doodle1 from "@/components/doodle/Doodle1";
import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";

const AboutPage = () => {
  return (
    <Main className="max-w-3xl mb-6">
      <Head title="About" />
      <style global jsx>
        {`
          .me-image {
            border-radius: 100%;
            filter: grayscale(20%);
          }
        `}
      </style>
      <div className="flex justify-center mt-4 md:mt-6 relative">
        <Image
          src={require("public/me-2.jpg")}
          placeholder="blur"
          width="280"
          height="280"
          alt="me"
          priority
          className="me-image noselect"
        />
        <div className="w-[300px] h-[200px] absolute z-10 bottom-[-80px] md:bottom-[-90px]">
          <Doodle1 />
        </div>
      </div>
      <div className="z-20 space-y-4">
        <AboutMe />
        <Contact />
      </div>
    </Main>
  );
};

export default AboutPage;
