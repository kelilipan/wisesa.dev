import { animate } from "@/utils/animateBlob";
import { useEffect, useState } from "react";
import Image from "next/image";
//https://georgefrancis.dev/writing/build-a-smooth-animated-blob-with-svg-and-js/

const Blob = () => {
  const [noiseStep, setNoiseStep] = useState(0.005);
  useEffect(() => {
    animate(noiseStep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <style global jsx>{`
        .me-picture {
          clip-path: url(#blob);
        }
      `}</style>

      <Image
        onMouseEnter={() => {
          console.log("123");
          setNoiseStep(0.01);
        }}
        alt="me"
        className="me-picture"
        src={require("public/me-2.jpg")}
        width="400"
        height="400"
        placeholder="blur"
      />

      <svg width="0" height="0" viewBox="0 0 400 400">
        <defs>
          <clipPath id="blob">
            <path d="" transform="scale(2.2)" id="mask-blob" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Blob;
