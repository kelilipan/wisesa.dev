import { ProjectType } from "@/types/project";
import {
  AspectRatio,
  Box,
  Stack,
  Link,
  Heading,
  Badge,
  Text,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaArrowRight, FaCode } from "react-icons/fa";
const colorMap: Record<any, string> = {
  react: "blue",
  "next.js": "yellow",
  nextjs: "yellow",
  javascript: "yellow",
  typescript: "blue",
  php: "purple",
  laravel: "orange",
  express: "green",
  "express.js": "green",
  expressjs: "green",
  line: "green",
  python: "blue",
};
const ProjectCard = ({
  title,
  image,
  source,
  url,
  description,
  technology,
  createdAt,
}: ProjectType) => {
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const borderColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  return (
    <Stack
      direction={["column", "row"]}
      w="full"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="5px"
    >
      <AspectRatio ratio={16 / 9} w={[null, "512px"]}>
        <Box borderRadius={["5px 5px 0 0 ", "5px 0 0 5px"]}>
          <Image
            width="512"
            height="288"
            src={image}
            alt={title}
            placeholder="blur"
          />
        </Box>
      </AspectRatio>
      <Flex pl={[2, 4]} py={[2, 4]} direction="column" w={["100%", "50%"]}>
        {url !== undefined || source !== undefined ? (
          <Link isExternal href={url ? url : source}>
            <Heading>{title}</Heading>
          </Link>
        ) : (
          <Heading>{title}</Heading>
        )}
        <Text fontSize="sm" mt="-5px">
          Created at {date}
        </Text>
        <Text mt="2">{description}</Text>
        <Stack direction="row" flexWrap="wrap" mt="2">
          {technology?.map((tech, idx) => (
            <Badge key={idx} colorScheme={colorMap[tech.name.toLowerCase()]}>
              {tech.url ? (
                <Link href={tech.url} isExternal>
                  {tech.name}
                </Link>
              ) : (
                tech.name
              )}
            </Badge>
          ))}
        </Stack>
        <Stack direction="row" mt="4">
          {url && (
            <Link isExternal href={url}>
              <Button size="sm" leftIcon={<FaArrowRight />}>
                Visit Project
              </Button>
            </Link>
          )}
          {source && (
            <Link isExternal href={source}>
              <Button size="sm" variant="outline" leftIcon={<FaCode />}>
                Source Code
              </Button>
            </Link>
          )}
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ProjectCard;
