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
import Image, { ImageProps } from "next/image";
//TODO: type definition for each record
const CustomImage = (props: ImageProps) => {
  return (
    <Box w="full" textAlign="center" mt="2" mb="4">
      <Image {...props} />
      <Text fontSize="sm" fontStyle="italic">
        {props.alt}
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
      <Heading as="h1" id={id} size={size} {...props} mt={[4, 6]} />
    </Link>
  );
};
const MDXComponents = {
  Img: CustomImage,
  a: ({ href, children, ...props }: any) => {
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
  h1: ({ id, ...props }: any) => {
    return <CustomHeading size="2xl" id={id} {...props} />;
  },
  h2: ({ id, ...props }: any) => {
    return <CustomHeading size="xl" id={id} {...props} />;
  },
  h3: ({ id, ...props }: any) => {
    return <CustomHeading size="lg" id={id} {...props} />;
  },
  h4: ({ id, ...props }: any) => {
    return <CustomHeading size="md" id={id} {...props} />;
  },
  h5: ({ id, ...props }: any) => {
    return <CustomHeading size="sm" id={id} {...props} />;
  },
  h6: ({ id, ...props }: any) => {
    return <CustomHeading size="xs" id={id} {...props} />;
  },
  p: Text,
  ul: (props: any) => {
    return <UnorderedList pl={4} {...props} />;
  },
  ol: (props: any) => {
    return <OrderedList pl={4} {...props} />;
  },
  li: (props: any) => {
    return <ListItem {...props} />;
  },
  hr: (props: any) => {
    return (
      <Box py={2}>
        <Divider mx="auto" {...props} />
      </Box>
    );
  },
  blockquote: (props: any) => (
    <Box
      borderLeftColor="gray.400"
      borderLeftWidth={2}
      pl={6}
      py={4}
      {...props}
    />
  ),
};
export default MDXComponents;
