import { useRef, useState, forwardRef } from "react";
import Main from "@/components/layouts/Main";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ReactSketchCanvasProps } from "react-sketch-canvas";
import Link from "@/components/Link";
import CanvasControl from "@/components/CanvasControl";
import NextHead from "next/head";

//todo: fix type definition
const ReactSketchCanvas = dynamic<ReactSketchCanvasProps>(
  () => import("react-sketch-canvas").then((c) => c.ReactSketchCanvas),
  {
    ssr: false,
  }
);

const Doodle1 = dynamic(() => import("@/components/doodle/Doodle1"), {
  ssr: false,
});

const Doodle2 = dynamic(() => import("@/components/doodle/Doodle2"), {
  ssr: false,
});

const Canvas = forwardRef((props, ref) => (
  // @ts-ignore
  <ReactSketchCanvas {...props} ref={ref} />
));
Canvas.displayName = "Canvas";

export default function Index() {
  const [color, setColor] = useState("rgba(255, 0, 0, 0.5)");
  const canvasRef = useRef(null);
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
    <Main className="justify-start md:justify-center cursor-pencil dark:cursor-pencil-dark">
      <NextHead>
        <meta
          name="keywords"
          content="anvaqta,anvaqta tangguh,tangguh wisesa,wisesa,anvaqta tangguh wisesa"
        />
      </NextHead>
      <Canvas
        ref={canvasRef}
        // @ts-ignore
        canvasColor="transparent"
        width="100%"
        height="100vh"
        style={{
          background: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
        strokeWidth={5}
        strokeColor={color}
      />

      <div className="w-full flex flex-col-reverse md:flex-row justify-end md:justify-between items-center">
        <div className="flex flex-col items-center md:items-start space-y-4 justify-center">
          <div className="relative">
            <h1 className="noselect font-doodle mt-1 text-3xl md:text-4xl">
              Hi, I&apos;m Wisesa. 🐱
            </h1>
            <div className="absolute hidden lg:block z-[2] top-[-8px] right-6">
              <Doodle2 />
            </div>
          </div>
          <p className="noselect text-md md:text-lg text-center md:text-left max-w-[550px]">
            A software <i>edgy</i>neer who love cats. Love to explore anything
            about technology, but focused more on web technologies.
          </p>
          <p className="text-center md:text-left max-w-[550px]">
            Checkout my{" "}
            <Link
              className="underline relative z-10 font-semibold"
              href="/projects"
            >
              past works
            </Link>{" "}
            or learn more{" "}
            <Link
              href="/about"
              className="underline relative z-10 font-semibold"
            >
              about me
            </Link>
            .
          </p>
        </div>
        <div className="relative w-[300px] md:w-[400px] noselect text-center">
          <Image alt="doodle" src="/me.svg" priority width={300} height={400} />
          <div className="absolute z-10 bottom-[-60px] md:bottom-[-50px] left-[10px] md:left-[50px]">
            <Doodle1 />
          </div>
        </div>
        <CanvasControl
          clearCanvas={clearHandler}
          color={color}
          setColor={setColor}
        />
      </div>
    </Main>
  );
}
