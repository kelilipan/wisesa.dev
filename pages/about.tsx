import Main from "@/components/Main";
import {
  Text,
  Heading,
  Flex,
  Box,
  Link,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Head from "@/components/Head";
import Image from "next/image";
import socials from "@/data/socials";
import Doodle1 from "@/components/doodle/Doodle1";
const about = () => {
  const languages = ["C++", "JavaScript", "PHP", "Python", "SQL"];
  const tools = [
    "Docker",
    "Firebase",
    "Figma",
    "Git",
    "Notion",
    "Trello",
    "vscode",
  ];
  const frameworks = [
    "Bootstrap",
    "Chakra-UI",
    "Laravel",
    "Lumen",
    "Next.js",
    "Tailwind CSS",
  ];
  const learnings = [
    "Artificial Intelligence",
    "Docker",
    "Emotion css",
    "GraphQL",
    "Microservice",
    "SCRUM",
    <b>TypeScript</b>,
  ];
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
      <Text pt="4">
        Hello, my name is <b>Anvaqta Tangguh Wisesa</b>, you can call me{" "}
        <b>Wisesa</b> or <b>Esa</b> for short. Yes, i changed my nickname haha,
        if you're my school/college friend you maybe know me as <b>Vaq</b> or{" "}
        <b>Anvaq</b> but that's ok, you can call me anything you want as long as
        it's my name and not someone else <i>wkw</i>.
      </Text>
      <Text>
        I grew up in a small village located in{" "}
        <Link
          textDecoration="underline"
          isExternal
          href="https://www.google.com/search?q=grobogan+jawa+tengah"
        >
          Grobogan, Jawa Tengah
        </Link>
        . I'm currently pursuing my Bachelor's degree in Informatics (Computer
        science) at{" "}
        <Link
          textDecoration="underline"
          isExternal
          href="https://telkomuniversity.ac.id/"
        >
          Telkom University
        </Link>{" "}
        also working as a Software engineer at a start-up called{" "}
        <Link
          textDecoration="underline"
          href="https://ketringan.com"
          isExternal
        >
          Ketringan Indonesia
        </Link>
        .
      </Text>
      <Text>
        I love exploring tech related stuff. When i was in college i join many
        community and laboratory to expand my knowledge, I'm member of{" "}
        <Link
          textDecoration="underline"
          href="https://www.instagram.com/cciunitel/?hl=en"
          isExternal
        >
          CCI-Unitel
        </Link>
        , part of{" "}
        <Link
          textDecoration="underline"
          href="https://www.instagram.com/pramukatelu/?hl=en"
          isExternal
        >
          Pramuka Tel-U
        </Link>
        , and i'm the (ex) lab.assistant of{" "}
        <Link
          textDecoration="underline"
          href="http://ailabtelkom.github.io/"
          isExternal
        >
          Artificial Intelligence TelU
        </Link>
        . Also, I joined many competition such as Competitive programming, UI/UX
        Design, and{" "}
        <Link
          textDecoration="underline"
          href="https://youngster.id/news/ketringan-com-juara-di-brixgoogle-cloud-hackathon/"
        >
          Hackathon
        </Link>
        .
      </Text>

      <Text mt="2">
        Here are several tools that I used (and currently learning how to use
        it):
      </Text>
      <SimpleGrid columns={[2, 4]} pt="2">
        <Box>
          <Heading as="h5" fontSize="xl">
            Languages
          </Heading>
          {languages.map((lang, idx) => (
            <Text key={idx}>{lang}</Text>
          ))}
        </Box>
        <Box>
          <Heading as="h5" fontSize="xl">
            Tools
          </Heading>
          {tools.map((tool, idx) => (
            <Text key={idx}>{tool}</Text>
          ))}
        </Box>
        <Box>
          <Heading as="h5" fontSize="xl">
            Frameworks
          </Heading>
          {frameworks.map((framework, idx) => (
            <Text key={idx}>{framework}</Text>
          ))}
        </Box>
        <Box>
          <Heading as="h5" fontSize="xl">
            Currently Learning
          </Heading>
          {learnings.map((learning, idx) => (
            <Text key={idx}>{learning}</Text>
          ))}
        </Box>
      </SimpleGrid>
      <Box pt="4">
        <Text>
          I’m always excited to connect with everyone so please don’t hesitate
          to{" "}
          <Link textDecoration="underline" href="mailto:hi@wisesa.dev">
            get in touch
          </Link>{" "}
          with me by following my social media bellow:
        </Text>
        <UnorderedList>
          {socials.map((data, idx) => (
            <ListItem key={idx}>
              {data.name} -{" "}
              <Link textDecoration="underline" href={data.url} isExternal>
                {data.url}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Text mt="2">
          Also, you can{" "}
          <Link
            textDecoration="underline"
            href="http://gg.gg/wisesa-cv"
            isExternal
          >
            read my cv here
          </Link>
          . Anyway, thanks for visiting my profile :)
        </Text>
      </Box>
    </Main>
  );
};

export default about;
