import { Box, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Box p="4">
      <Text textAlign="center" fontSize="sm" fontFamily="doodle">
        <Text as="span" fontFamily="body">
          ©
        </Text>
        2021 Anvaqta Tangguh Wisesa. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
