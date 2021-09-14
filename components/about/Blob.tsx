import animate from "@/utils/animateBlob";
import { useEffect } from "react";

//https://georgefrancis.dev/writing/build-a-smooth-animated-blob-with-svg-and-js/

const Blob = () => {
  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(120)">
          <stop id="gradientStop1" offset="0%" stopColor="var(--startColor)" />
          <stop id="gradientStop2" offset="100%" stopColor="var(--stopColor)" />
        </linearGradient>
        {/* <pattern id="me" patternUnits="userSpaceOnUse" width="300" height="300">
          <image href="/me-2.jpg" width="200" height="200" x="0" y="0" />
        </pattern> */}
      </defs>
      <path d="" id="mask-blob" fill="url('#gradient')"></path>
    </svg>
  );
};

export default Blob;
