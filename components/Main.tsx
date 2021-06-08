import { Stack, StackProps } from "@chakra-ui/layout";

const Main = ({ children, ...props }: StackProps) => {
  return (
    <Stack
      pt={["54px", "72px"]}
      flex="1"
      w="full"
      maxW="5xl"
      mx="auto"
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Main;
