import NextLink, { LinkProps } from "next/link";
export type CustomLinkProps = {
  href?: string;
  children: React.ReactNode;
  isExternal?: boolean;
} & React.ComponentPropsWithoutRef<"a"> &
  LinkProps;

const Link = ({
  href,
  isExternal = false,
  children,
  ...props
}: CustomLinkProps) => {
  const externalProps = isExternal && {
    rel: "noopener noreferrer",
    target: "_blank",
  };

  const isRouteLink = href.startsWith("/");

  if (isRouteLink && !isExternal) {
    return (
      <NextLink href={href} passHref>
        <a {...props}>{children}</a>
      </NextLink>
    );
  }
  return (
    <a href={href} {...props} {...externalProps}>
      {children}
    </a>
  );
};

export default Link;
