"use client";

import { useLoader } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";

// Loader
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Model
const laptopModel = "./model/laptop.glb";

const LaptopScene = () => {
  const laptop = useLoader(GLTFLoader, laptopModel);

  return (
    <>
      <ambientLight intensity={2} />

      <PresentationControls global enabled={false}>
        <Stage environment={"city"} intensity={0.1}>
          <primitive
            object={laptop.scene}
            scale={0.8}
            rotation={[1.3, 0.7, 0.2]}
            position={[0, 2, 0]}
          />
        </Stage>
      </PresentationControls>

      <OrbitControls />
    </>
  );
};

export default LaptopScene;
