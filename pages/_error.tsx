import Main from "@/components/Main";
import { RouteLink } from "@/components/RouteLink";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const offline = () => {
  return (
    <Main>
      <Box textAlign="center">
        <Image
          width={"280px"}
          height={"216px"}
          src="/dino.gif"
          mx="auto"
          alt="offline dino"
        />
        <Text mt="4">Uh... something happens :((</Text>
        <RouteLink href="/">
          <Button variant="outline" size="sm" mt="2" leftIcon={<FaHome />}>
            Home
          </Button>
        </RouteLink>
      </Box>
    </Main>
  );
};

export default offline;
