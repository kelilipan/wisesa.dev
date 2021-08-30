import { useRef, useState, forwardRef } from "react";
import Main from "@/components/Main";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Link, Stack, Text, VStack } from "@chakra-ui/layout";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ReactSketchCanvasProps } from "react-sketch-canvas";
import { RouteLink } from "@/components/RouteLink";
import CanvasControl from "@/components/CanvasControl";
import NextHead from "next/head";
import Doodle1 from "@/components/doodle/Doodle1";
import Doodle2 from "@/components/doodle/Doodle2";
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
Canvas.displayName = "Canvas";

export default function Index() {
  const invertColor = useColorModeValue("none", "invert(15%) brightness(120%)");
  const [color, setColor] = useState("rgba(255, 0, 0, 0.5)");
  const [strokeWidth, setWidth] = useState(5);
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
          content="anvaqta,anvaqta tangguh,tangguh wisesa,wisesa,anvaqta tangguh wisesa"
        />
      </NextHead>
      <Canvas
        ref={canvasRef}
        /*
      // @ts-ignore */
        width="100%"
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

      <Stack
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
            <Heading className="noselect" fontFamily="doodle">
              Hi, I&apos;m Wisesa. 🐱
            </Heading>
            <Box
              position="absolute"
              display={["none", "none", "block"]}
              zIndex={2}
              top="-10px"
              right="20px"
            >
              <Doodle2 />
            </Box>
          </Box>
          <Text
            className="noselect"
            fontSize="lg"
            // fontWeight="medium"
            textAlign={["center", "left"]}
            maxW="550px"
          >
            A student and a software <i>edgy</i>neer mainly focused on web
            technologies. I love exploring tech related stuff and now fall in
            love with react.js and javascript.
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
            filter="initial"
            position="absolute"
            zIndex={2}
            bottom={["-80px", "-70px"]}
            left={["10px", "55px"]}
          >
            <Doodle1 />
          </Box>
        </Box>
        <CanvasControl
          clearCanvas={clearHandler}
          color={color}
          setColor={setColor}
          strokeWidth={strokeWidth}
          setWidth={setWidth}
        />
      </Stack>
    </Main>
  );
}
