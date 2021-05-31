import { Stack, StackProps } from "@chakra-ui/layout";

const Main = ({ children, ...props }: StackProps) => {
  return (
    <Stack flex="1" w="full" {...props}>
      {children}
    </Stack>
  );
};

export default Main;
