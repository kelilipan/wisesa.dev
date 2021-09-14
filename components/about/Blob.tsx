import { spline } from "@/utils/spline";
import { useEffect, useRef, useState } from "react";
import SimplexNoise from "simplex-noise";
//https://georgefrancis.dev/writing/build-a-smooth-animated-blob-with-svg-and-js/

const Blob = () => {
  const animation = useRef<any>();
  const [noiseStep, setNoiseStep] = useState(0.005);

  const simplex = new SimplexNoise();

  const points = createPoints();

  function map(
    n: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  function noise(x: number, y: number) {
    return simplex.noise2D(x, y);
  }

  function createPoints() {
    const points = [];
    // how many points do we need
    const numPoints = 6;
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 75;

    for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;

      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;

      // store the point's position
      points.push({
        x: x,
        y: y,
        // we need to keep a reference to the point's original point for when we modulate the values later
        originX: x,
        originY: y,
        // more on this in a moment!
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    return points;
  }

  const animate = () => {
    //render path
    document
      .getElementById("mask-blob")
      ?.setAttribute("d", spline(points, 1, true));

    // for every point...
    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
      // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
      const x = map(nX, -1, 1, point.originX - 10, point.originX + 10);
      const y = map(nY, -1, 1, point.originY - 10, point.originY + 10);

      // update the point's current coordinates
      point.x = x;
      point.y = y;

      // progress the point's x, y values through "time"
      point.noiseOffsetX += noiseStep;
      point.noiseOffsetY += noiseStep;
    }
    animation.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animation.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation.current);
  }, []);
  return (
    <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]">
      <defs>
        <pattern id="me" patternUnits="userSpaceOnUse" width="300" height="300">
          <image href="/me-2.jpg" width="200" height="200" x="0" y="0" />
        </pattern>
      </defs>
      <path d="" id="mask-blob" fill="url('#me')"></path>
    </svg>
  );
};

export default Blob;
