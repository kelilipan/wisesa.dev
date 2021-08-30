import {
  Text,
  Box,
  Link,
  UnorderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import socials from "@/data/socials";
const Contact = () => {
  return (
    <Box pt="4">
      <Link href="#contact">
        <Heading
          id="contact"
          as="h4"
          fontSize="3xl"
          sx={{ scrollMarginTop: ["54px", "70px"] }}
        >
          Contact
        </Heading>
      </Link>
      <Text mt="2">
        I’m always excited to connect with everyone so please don’t hesitate to{" "}
        <Link textDecoration="underline" href="mailto:hi@wisesa.dev">
          get in touch
        </Link>{" "}
        with me by following my social media bellow:
      </Text>
      <UnorderedList mt="2">
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
        <Link textDecoration="underline" href="/resume" isExternal>
          read my resume here
        </Link>
        . Anyway, thanks for visiting my profile :)
      </Text>
    </Box>
  );
};

export default Contact;
