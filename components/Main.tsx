import { Stack, StackProps } from "@chakra-ui/layout";

const Main = ({ children, ...props }: StackProps) => {
  return (
    <Stack
      id="main-content"
      pt={["24px", "42px"]}
      px={[2, 0]}
      flex="1"
      h="full"
      w="full"
      maxW="5xl"
      mx="auto"
      sx={{ scrollMarginTop: ["20px", "40px"] }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Main;
