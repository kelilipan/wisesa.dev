import { useRef, useState, forwardRef } from "react";
import Main from "@/components/Main";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Link, Stack, Text, VStack } from "@chakra-ui/layout";
import Head from "@/components/Head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ReactSketchCanvasProps } from "react-sketch-canvas";
import { RouteLink } from "@/components/RouteLink";
import CanvasControl from "@/components/CanvasControl";
import NextHead from "next/head";
//todo: fix type definition
const ReactSketchCanvas = dynamic<ReactSketchCanvasProps>(
  () => import("react-sketch-canvas").then((c) => c.ReactSketchCanvas),
  {
    ssr: false,
  }
);
const Canvas = forwardRef((props, ref) => (
  // @ts-ignore
  <ReactSketchCanvas {...props} ref={ref} />
));

export default function Index() {
  const invertColor = useColorModeValue("none", "invert(10%) brightness(120%)");
  const [color, setColor] = useState("rgba(255, 0, 0, 0.5)");
  const [strokeWidth, setWidth] = useState(4);
  const canvasRef = useRef(null);
  const cursor = useColorModeValue(
    "url('/pencil.png') 0 24, auto",
    "url('/pencil-invert.png') 0 24, auto"
  );
  const clearHandler = () => {
    // @ts-ignore
    canvasRef.current?.retry();
    // @ts-ignore
    const clearCanvas = canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
  };
  return (
    <Main justifyContent={["start", "center"]} sx={{ cursor }}>
      <NextHead>
        <meta
          name="keywords"
          content="anvaqta,anvaqta tangguh,tangguh wisesa,wisesa"
        />
      </NextHead>
      <Head description="A computer science student and a software engineer." />
      <Canvas
        ref={canvasRef}
        /*
      // @ts-ignore */
        width="100vw"
        height="100vh"
        background="transparent"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
        strokeWidth={strokeWidth}
        strokeColor={color}
      />
      <CanvasControl
        clearCanvas={clearHandler}
        color={color}
        setColor={setColor}
        strokeWidth={strokeWidth}
        setWidth={setWidth}
      />
      <Stack
        className="noselect"
        direction={["column-reverse", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
      >
        <VStack
          alignItems={["center", "start"]}
          spacing="4"
          justifyContent="center"
        >
          <Box pos="relative">
            <Heading mb="0">Hi, I'm Wisesa. 🐱</Heading>
            <Box
              position="absolute"
              display={["none", "none", "block"]}
              zIndex={2}
              top="-10px"
              right="20px"
            >
              <Image
                alt="doodle"
                src="/doodle4.svg"
                width="200px"
                height="100px"
              />
            </Box>
            <Text
              textAlign={["center", "left"]}
              mt={["-10px", "-5px"]}
              fontSize="sm"
              fontStyle="italic"
              zIndex={6}
              pos="absolute"
              left={[0, "unset"]}
              right={[0, "unset"]}
            >
              aka.{" "}
              <Link href="https://github.com/svspicious" isExternal>
                svspicious
              </Link>
            </Text>
          </Box>
          <Text fontSize="lg" textAlign={["center", "left"]} maxW="550px">
            A student and a software <i>edgy</i>neer. I love exploring tech
            related stuff and now fall in love with react.js and javascript.
          </Text>
          <Text textAlign={["center", "left"]} maxW="550px">
            Checkout my{" "}
            <RouteLink
              textDecoration="underline"
              href="/projects"
              pos="relative"
              zIndex={6}
              fontWeight="semibold"
            >
              past works
            </RouteLink>{" "}
            or learn more{" "}
            <RouteLink
              textDecoration="underline"
              href="/about"
              pos="relative"
              zIndex={6}
              fontWeight="semibold"
            >
              about me
            </RouteLink>
            .
          </Text>
        </VStack>
        <Box
          filter={invertColor}
          pos="relative"
          width={["300px", "400px"]}
          minWidth={["300px", "400px"]}
        >
          <Image
            alt="doodle"
            src="/me.svg"
            priority
            width="400px"
            height="400px"
          />
          <Box
            position="absolute"
            zIndex={2}
            bottom={["-80px", "-70px"]}
            left={["10px", "55px"]}
          >
            <Image
              priority
              alt="doodle"
              src="/doodle7.svg"
              width="300px"
              height="200px"
            />
          </Box>
        </Box>
      </Stack>
    </Main>
  );
}
