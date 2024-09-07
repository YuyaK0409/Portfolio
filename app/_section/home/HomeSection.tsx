"use client";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

// Img
import img from "@/public/sample1.jpg";

// Component
import Avator from "./Avator";
import Greeting from "./Greeting";
import TwoSectionWrapper from "@/app/_component/TwoSectionWrapper";

const HomeSection = () => {
  return (
    // <ParallaxBanner
    //   layers={[{ image: img.src, speed: 10 }]}
    //   className="h-screen "
    // >
    <div
      // className="absolute top-0 bg-blue-500/70 text-red-600 w-full h-full flex items-center justify-center"
      id="home"
    >
      <TwoSectionWrapper>
        <Avator />
        <Greeting />
      </TwoSectionWrapper>
    </div>
    // </ParallaxBanner>
  );
};

export default HomeSection;
