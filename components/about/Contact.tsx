import Link from "@/components/Link";
import socials from "@/data/socials";

const Contact = () => {
  return (
    <section>
      <h2 id="contact" className="scroll-margin-nav">
        <Link className="text-3xl" href="#contact">
          Contact
        </Link>
      </h2>
      <p>
        I’m always excited to connect with everyone so please don’t hesitate to{" "}
        <Link className="underline" href="mailto:hi@wisesa.dev">
          get in touch
        </Link>{" "}
        with me by following my social media bellow:
      </p>
      <ul className="break-words">
        {socials.map((data, idx) => (
          <li key={idx}>
            {data.name} -{" "}
            <Link className="underline" href={data.url} isExternal>
              {data.url.replace("mailto:", "")}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Also, you can{" "}
        <Link className="underline" href="/resume" isExternal>
          read my resume here
        </Link>
        . Anyway, thanks for visiting my profile :)
      </p>
    </section>
  );
};

export default Contact;
