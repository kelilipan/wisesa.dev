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
        <b>Wisesa</b> or <b>Esa</b> for short. If you&apos;re my school/college
        friend you maybe know me as <b>Vaq</b> or <b>Anvaq</b>.
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
        with a Bachelor&apos;s degree in Informatics (Computer science) and
        currently working as a <i>Software Engineer - Web Platform</i> (you
        maybe more familiar with &quot;Front-end engineer&quot;) at{" "}
        <Link className="underline" href="https://www.tokopedia.com" isExternal>
          Tokopedia
        </Link>
        . I was previously working as a Software engineer at a start-up called{" "}
        <Link className="underline" href="https://ketringan.com" isExternal>
          Ketringan Indonesia
        </Link>
        .
      </p>
      <p>
        I love exploring everything related to technology. When i was in college
        i join many community and orgs to expand my knowledge, I&apos;m member
        of{" "}
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
    </section>
  );
};

export default AboutMe;
