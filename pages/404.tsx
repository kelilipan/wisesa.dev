import Head from "@/components/Head";
import Main from "@/components/Main";
import { RouteLink } from "@/components/RouteLink";
import { Code, Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";

const NotFound = () => {
  const { asPath } = useRouter();
  if (asPath === "/ayo-vaksin-gan") {
    typeof window !== "undefined" &&
      window.location.replace(
        "https://airtable.com/shrjy0wrNa2XdxuWP/tblYbbdsiJefdWFU3/viwtVMYtnCVdBjw4i?blocks=hide"
      );
  }
  return (
    <Main textAlign="center">
      <Head
        title="Whoops... 404 Not Found😭"
        description="Page that you looking for is not found :("
      />
      <Heading mt="6" fontSize={["100px", "120px"]}>
        4😭4
      </Heading>
      <Text mt={2}>
        The page <Code>{asPath}</Code> does not exist.
      </Text>
      <Text>
        <RouteLink href="/" textDecoration="underline">
          Back to home.
        </RouteLink>
      </Text>
    </Main>
  );
};

export default NotFound;
