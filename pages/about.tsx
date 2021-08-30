import Main from "@/components/Main";
import { Flex, Box, Divider } from "@chakra-ui/react";
import Head from "@/components/Head";
import Image from "next/image";

import Doodle1 from "@/components/doodle/Doodle1";
import Knowledgebase from "@/components/about/Knowledgebase";
import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";
const AboutPage = () => {
  return (
    <Main maxW="3xl" mb="6">
      <Head title="About" />
      <style global jsx>
        {`
          .me-image {
            border-radius: 100%;
            filter: grayscale(20%);
          }
        `}
      </style>
      <Flex justifyContent="center" mt={[4, 6]} pos="relative">
        <Image
          src={require("public/me-2.jpg")}
          placeholder="blur"
          width="280"
          height="280"
          alt="me"
          priority
          className="me-image noselect"
        />
        <Box
          width="300px"
          height="200px"
          position="absolute"
          zIndex={2}
          bottom={["-80px", "-90px"]}
          left={0}
          right={0}
          mx="auto"
        >
          <Doodle1 />
        </Box>
      </Flex>
      <Box zIndex="5">
        <AboutMe />
        <Divider my="4" w="50%" mx="auto" />
        <Knowledgebase />
        <Divider my="4" w="50%" mx="auto" />
        <Contact />
      </Box>
    </Main>
  );
};

export default AboutPage;
