import {
  forwardRef,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactElement } from "react";
type Rename<T, K extends keyof T, N extends string> = Pick<
  T,
  Exclude<keyof T, K>
> &
  { [P in N]: T[K] };
type LinkProps = Partial<Rename<NextLinkProps, "as", "asRoute">> &
  Pick<
    NextLinkProps,
    "href" | "passHref" | "prefetch" | "replace" | "scroll" | "shallow"
  > &
  Pick<ChakraLinkProps, "children" | "isExternal" | "variant">;

export const Link = forwardRef<LinkProps, "a">(
  (
    {
      asRoute,
      children,
      href,
      isExternal,
      passHref = true,
      prefetch,
      replace,
      scroll,
      shallow,
      variant,
      ...chakraInternals
    }: LinkProps,
    ref
  ): ReactElement => {
    return (
      <NextLink
        as={asRoute}
        href={href}
        passHref={passHref}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        <ChakraLink
          isExternal={isExternal}
          ref={ref}
          variant={variant}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...chakraInternals}
        >
          {children}
        </ChakraLink>
      </NextLink>
    );
  }
);
