import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MDXProviderComponents } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
//TODO: type definition for each record
const CustomImage = ({ alt, ...props }: ImageProps) => {
  return (
    <Box w="full" textAlign="center" mt="2" mb="4">
      <Image {...props} alt={alt} />
      <Text fontSize="sm" fontStyle="italic">
        {alt}
      </Text>
    </Box>
  );
};
const CustomHeading = ({
  id,
  size,
  ...props
}: {
  id: string;
  size: string;
  children: React.ReactElement | null;
}): React.ReactElement | null => {
  return (
    <Link href={`#${id}`}>
      <Heading
        as="h1"
        id={id}
        size={size}
        {...props}
        mt={[4, 6]}
        mb={2}
        sx={{ scrollMarginTop: ["54px", "70px"] }}
      />
    </Link>
  );
};
const MDXComponents: MDXProviderComponents = {
  Img: CustomImage,
  a: ({ href, children, ...props }) => {
    const isExternal = !(href?.startsWith("/") || href?.startsWith("#"));
    return (
      <Link
        href={href as string}
        isExternal={isExternal}
        textDecoration="underline"
        {...props}
      >
        {children}
      </Link>
    );
  },
  h1: ({ id, ...props }) => {
    return <CustomHeading size="2xl" id={id} {...props} />;
  },
  h2: ({ id, ...props }) => {
    return <CustomHeading size="xl" id={id} {...props} />;
  },
  h3: ({ id, ...props }) => {
    return <CustomHeading size="lg" id={id} {...props} />;
  },
  h4: ({ id, ...props }) => {
    return <CustomHeading size="md" id={id} {...props} />;
  },
  h5: ({ id, ...props }) => {
    return <CustomHeading size="sm" id={id} {...props} />;
  },
  h6: ({ id, ...props }) => {
    return <CustomHeading size="xs" id={id} {...props} />;
  },
  p: (props) => <Text mb={4} {...props} />,
  ul: (props) => {
    return <UnorderedList pl={4} {...props} />;
  },
  ol: (props) => {
    return <OrderedList pl={4} {...props} />;
  },
  li: (props) => {
    return <ListItem {...props} />;
  },
  hr: (props) => {
    return (
      <Box py={2}>
        <Divider mx="auto" {...props} />
      </Box>
    );
  },
  blockquote: (props) => (
    <Box
      my="4"
      borderLeftColor="gray.400"
      borderLeftWidth={2}
      pl={6}
      py={4}
      sx={{ "&>p": { mb: 0 } }} //remove mb text inside
      {...props}
    />
  ),
};
export default MDXComponents;
