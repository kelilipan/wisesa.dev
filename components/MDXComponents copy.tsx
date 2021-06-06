import { Heading, Link } from "@chakra-ui/react";
//TODO: type definition for each record

const CustomHeading = ({ id, ...props }) => {
  return (
    <Link href={`#${id}`}>
      <Heading as="h1" id={id} size="2xl" {...props} />
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
  h1: ({ id, node, ...props }: any) => {
    return (
      <Link href={`#${id}`}>
        <Heading as="h1" id={id} size="2xl" {...props} />
      </Link>
    );
  },
  h2: ({ id, node, ...props }: any) => {
    return (
      <Link href={`#${id}`}>
        <Heading as="h2" id={id} size="xl" {...props} />
      </Link>
    );
  },
  h3: ({ id, node, ...props }: any) => {
    return (
      <Link href={`#${id}`}>
        <Heading as="h3" id={id} size="lg" {...props} />
      </Link>
    );
  },
  h4: ({ id, node, ...props }: any) => {
    return (
      <Link href={`#${id}`}>
        <Heading as="h4" id={id} size="md" {...props} />
      </Link>
    );
  },
  h5: ({ id, node, ...props }: any) => {
    return (
      <Link href={`#${id}`}>
        <Heading as="h5" id={id} size="sm" {...props} />
      </Link>
    );
  },
  h6: ({ id, node, ...props }: any) => {
    return (
      <Link href={`#${id}`}>
        <Heading as="h6" id={id} size="xs" {...props} />
      </Link>
    );
  },
};
export default MDXComponents;
