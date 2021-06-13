import Main from "@/components/Main";
import { RouteLink } from "@/components/RouteLink";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

const offline = () => {
  return (
    <Main>
      <Box textAlign="center">
        <Image width={280} height={216} src="/dino.gif" />
        <Text mt="4">Looks like you're offline :((</Text>
        <Text>Click button bellow if you're already online</Text>
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
