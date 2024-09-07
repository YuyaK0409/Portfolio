"use client";

import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";

// Component
import LaptopScene from "./LaptopScene";

const ThreeDCube: NextPage = () => {
  return (
    <Canvas
      style={{
        width: 100 + "%",
        height: 100 + "%",
      }}
    >
      <LaptopScene />
    </Canvas>
  );
};

export default ThreeDCube;
