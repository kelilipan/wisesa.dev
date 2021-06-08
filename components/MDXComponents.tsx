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
//TODO: type definition for each record

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
      <Heading as="h1" id={id} size={size} {...props} />
    </Link>
  );
};
const MDXComponents = {
  a: ({ href, children, ...props }: any) => {
    const isExternal = !(href?.startsWith("/") || href?.startsWith("#"));
    return (
      <Link href={href as string} isExternal={isExternal} {...props}>
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
      pl={8}
      py={4}
      {...props}
    />
  ),
};
export default MDXComponents;
