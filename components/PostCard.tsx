import { PostType } from "@/types/post";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { AspectRatio, Box, Heading, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { RouteLink } from "./RouteLink";
import { ID, EN } from "./flags";

const PostCard = ({
  title,
  lang,
  slug,
  description,
  image,
  publishedAt,
  readTime,
}: PostType) => {
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const outerBorderColor = useColorModeValue("transparent", "whiteAlpha.200");
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <RouteLink
      borderRadius="5px"
      href={`/blog/${slug}`}
      textDecor="none!important"
      position="relative"
      bottom="0px"
      transition="0.2s ease all"
      _hover={{
        transition: "0.2s ease all",
        bottom: "5px",
      }}
    >
      <Box
        height="full"
        borderRadius="5px"
        shadow="md"
        role="group"
        borderColor={outerBorderColor}
        borderWidth="1px"
      >
        <AspectRatio ratio={1.92 / 1}>
          <Box
            borderTopRadius="5px"
            borderBottomColor={borderColor}
            borderBottomWidth="1px"
            _groupHover={{ opacity: 0.9 }}
          >
            <Image
              alt={title}
              width="512"
              height="267"
              quality="100"
              src={image ? image : "/og-post-default.jpg"}
            />
          </Box>
        </AspectRatio>
        <Box p="2" borderBottomRadius="5px">
          <Heading as="h4" fontSize="lg">
            {title}
          </Heading>
          <Box fontSize="sm" mb="2" opacity="0.8">
            {date} •{" "}
            <Tooltip
              label={`This post has ${readTime?.words} words and written in ${
                lang === "id" ? "Bahasa Indonesia" : "English"
              }. Reading time is calculated using 200WPM Reading speed.`}
              aria-label="Reading time"
            >
              <Text d="inline">
                {readTime?.text} • {lang === "id" ? <ID /> : <EN />}
              </Text>
            </Tooltip>
          </Box>
          <Text>{description}</Text>
        </Box>
      </Box>
    </RouteLink>
  );
};

export default PostCard;
