"use client";

// Component
import Avator from "./Avator";
import Greeting from "./Greeting";
import TwoSectionWrapper from "@/app/_component/TwoSectionWrapper";

const HomeSection = () => {
  return (
    <div>
      <TwoSectionWrapper>
        <Avator />
        <Greeting />
      </TwoSectionWrapper>
    </div>
  );
};

export default HomeSection;
