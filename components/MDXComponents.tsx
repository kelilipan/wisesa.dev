import Link from "./Link";
import { MDXProviderComponents } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
//TODO: type definition for each record
const CustomImage = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="w-full text-center mt-2 mb-4">
      <Image {...props} alt={alt} />
      <p className="text-sm italic">{alt}</p>
    </div>
  );
};

const MDXComponents: MDXProviderComponents = {
  Img: CustomImage,
  a: ({ href, children, ...props }) => {
    const isExternal = !(href?.startsWith("/") || href?.startsWith("#"));
    return (
      <Link href={href as string} isExternal={isExternal} {...props}>
        {children}
      </Link>
    );
  },
  h1: ({ id, children, ...props }) => {
    return (
      <h1 id={id} className="scroll-margin-nav">
        <Link href={`#${id}`} {...props}>
          {children}
        </Link>
      </h1>
    );
  },
  h2: ({ id, children, ...props }) => {
    return (
      <h2 id={id} className="scroll-margin-nav">
        <Link href={`#${id}`} {...props}>
          {children}
        </Link>
      </h2>
    );
  },
  h3: ({ id, children, ...props }) => {
    return (
      <h3 id={id} className="scroll-margin-nav">
        <Link href={`#${id}`} {...props}>
          {children}
        </Link>
      </h3>
    );
  },
  h4: ({ id, children, ...props }) => {
    return (
      <h4 id={id} className="scroll-margin-nav">
        <Link href={`#${id}`} {...props}>
          {children}
        </Link>
      </h4>
    );
  },
  h5: ({ id, children, ...props }) => {
    return (
      <h5 id={id} className="scroll-margin-nav">
        <Link href={`#${id}`} {...props}>
          {children}
        </Link>
      </h5>
    );
  },
  h6: ({ id, children, ...props }) => {
    return (
      <h6 id={id} className="scroll-margin-nav">
        <Link href={`#${id}`} {...props}>
          {children}
        </Link>
      </h6>
    );
  },
};
export default MDXComponents;
