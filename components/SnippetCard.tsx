import { SnippetType } from "@/types/post";
import {
  Badge,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { RouteLink } from "@/components/RouteLink";
const SnippetCard = ({ logo, title, description, tags, slug }: SnippetType) => {
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const bgHoverColor = useColorModeValue("blackAlpha.50", "whiteAlpha.200");
  return (
    <RouteLink
      borderRadius="5px"
      href={`/snippet/${slug}`}
      textDecor="none!important"
      w="full"
    >
      <Stack
        borderRadius="5px"
        alignItems={["flex-start", "center"]}
        direction={["column", "row"]}
        borderColor={borderColor}
        borderWidth="1px"
        role="group"
        p="4"
        transition="0.2s ease all"
        _hover={{
          bgColor: bgHoverColor,
          transition: "0.2s ease all",
        }}
      >
        <Flex
          bg="whiteAlpha.600"
          boxSize={["50px", "60px"]}
          borderRadius="full"
        >
          <Image
            src={logo}
            width="60"
            height="60"
            className="rounded"
            alt="logo"
          />
        </Flex>
        <Flex ml={[null, 4]} direction="column">
          <Heading
            fontSize="xl"
            as="h5"
            _groupHover={{ textDecor: "underline" }}
          >
            {title}
          </Heading>
          <Text>{description}</Text>
          <Stack direction="row" mt="2">
            {tags?.map((tag, idx) => (
              <Badge key={idx}>{tag}</Badge>
            ))}
          </Stack>
        </Flex>
        <style global jsx>
          {`
            .rounded {
              border-radius: 100%;
            }
          `}
        </style>
      </Stack>
    </RouteLink>
  );
};

export default SnippetCard;
