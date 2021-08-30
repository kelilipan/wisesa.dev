import { Text, Link, Heading } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <>
      <Link href="#about">
        <Heading
          id="about"
          as="h4"
          fontSize="3xl"
          sx={{ scrollMarginTop: ["54px", "70px"] }}
        >
          About
        </Heading>
      </Link>
      <Text mt="2">
        Hello, my name is <b>Anvaqta Tangguh Wisesa</b>, you can call me{" "}
        <b>Wisesa</b> or <b>Esa</b> for short. Yes, i changed my nickname haha,
        if you&apos;re my school/college friend you maybe know me as <b>Vaq</b> or{" "}
        <b>Anvaq</b> but that&apos;s ok, you can call me anything you want as long as
        it&apos;s my name and not someone else <i>wkw</i>.
      </Text>
      <Text mt="2">
        I grew up in a small village located in{" "}
        <Link
          textDecoration="underline"
          isExternal
          href="https://www.google.com/search?q=grobogan+jawa+tengah"
        >
          Grobogan, Jawa Tengah
        </Link>
        . I&apos;m currently pursuing my Bachelor&apos;s degree in Informatics (Computer
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
      <Text mt="2">
        I love exploring tech related stuff. When i was in college i join many
        community and laboratory to expand my knowledge, I&apos;m member of{" "}
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
        , and i&apos;m the (ex) lab.assistant of{" "}
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
          isExternal
          textDecoration="underline"
          href="https://youngster.id/news/ketringan-com-juara-di-brixgoogle-cloud-hackathon/"
        >
          Hackathon
        </Link>
        .
      </Text>
      <Text mt="2">
        Outside of software developing thingy, I love playing and{" "}
        <Link
          isExternal
          textDecoration="underline"
          href="https://open.spotify.com/user/21xnhzh4qf74t5t4lp2fammai"
        >
          listening music
        </Link>
        . I can (barely) play some music instruments like guitar, ukulele, and
        drum. Also, I love cycling (almost) every weekend.
      </Text>
    </>
  );
};

export default AboutMe;
