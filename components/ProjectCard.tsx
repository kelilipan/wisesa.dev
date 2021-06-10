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
  return (
    <Stack direction={["column", "row"]} w="full">
      <AspectRatio ratio={16 / 9} w={[null, "512px"]}>
        <Box>
          <Image width="512" height="312" src={image} alt={title} />
        </Box>
      </AspectRatio>
      <Flex pl={[0, 4]} direction="column" w={["100%", "50%"]}>
        {url !== undefined && source !== undefined ? (
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
          <Link isExternal href={url}>
            <Button size="sm" leftIcon={<FaArrowRight />}>
              Visit Project
            </Button>
          </Link>
          <Link isExternal href={source}>
            <Button size="sm" variant="outline" leftIcon={<FaCode />}>
              Source Code
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ProjectCard;
