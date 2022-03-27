import Link from "@/components/Link";
const AboutMe = () => {
  return (
    <section>
      <h2 id="about" className="scroll-margin-nav">
        <Link className="text-3xl" href="#about">
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>Anvaqta Tangguh Wisesa</b>, you can call me{" "}
        <b>Wisesa</b> or <b>Esa</b> for short. Yes, i changed my nickname :), if
        you&apos;re my school/college friend you maybe know me as <b>Vaq</b> or{" "}
        <b>Anvaq</b> but that&apos;s ok, you can call me anything you want as
        long as it&apos;s my name and not someone else.
      </p>
      <p>
        I grew up in a small village located in{" "}
        <Link
          className="underline"
          isExternal
          href="https://www.google.com/search?q=grobogan+jawa+tengah"
        >
          Grobogan, Jawa Tengah
        </Link>
        . Graduated from{" "}
        <Link
          className="underline"
          isExternal
          href="https://telkomuniversity.ac.id/"
        >
          Telkom University
        </Link>{" "}
        with a Bachelor&apos;s degree in Informatics (Computer science). And
        currently working as a <i>Software Engineer - Web Platform</i> (you
        maybe more familiar with "Front-end engineer") at{" "}
        <Link className="underline" href="https://www.tokopedia.com" isExternal>
          Tokopedia
        </Link>
        {", "}
        I&apos;m previously working as a Software engineer at a start-up called{" "}
        <Link className="underline" href="https://ketringan.com" isExternal>
          Ketringan Indonesia
        </Link>
        .
      </p>
      <p>
        I love exploring tech related stuff. When i was in college i join many
        community and orgs to expand my knowledge, I&apos;m member of{" "}
        <Link
          className="underline"
          href="https://www.instagram.com/cciunitel/?hl=en"
          isExternal
        >
          CCI-Unitel
        </Link>
        , part of{" "}
        <Link
          className="underline"
          href="https://www.instagram.com/pramukatelu/?hl=en"
          isExternal
        >
          Pramuka Tel-U
        </Link>
        , and i&apos;m the (ex) lab.assistant of{" "}
        <Link
          className="underline"
          href="http://ailabtelkom.github.io/"
          isExternal
        >
          Artificial Intelligence TelU
        </Link>
        . Also, I joined many competition such as Competitive programming, UI/UX
        Design, and{" "}
        <Link
          isExternal
          className="underline"
          href="https://youngster.id/news/ketringan-com-juara-di-brixgoogle-cloud-hackathon/"
        >
          Hackathon
        </Link>
        .
      </p>
      <p>
        Outside of software developing thingy, I love playing and{" "}
        <Link
          isExternal
          className="underline"
          href="https://open.spotify.com/user/21xnhzh4qf74t5t4lp2fammai"
        >
          listening music
        </Link>
        . I can (barely) play some music instruments like guitar, ukulele, and
        drum. Also, I love cycling (almost) every weekend.
      </p>
    </section>
  );
};

export default AboutMe;
