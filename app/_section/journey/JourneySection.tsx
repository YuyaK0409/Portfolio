"use client";

import { motion } from "framer-motion";

// Compoent
import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";
import SectionWrapper from "@/app/_component/SectionWrapper";

const JourneySection = () => {
  return (
    <SectionWrapper>
      <div id="education" className="w-full flex flex-col items-center pt-10">
        <h2 className="text-3xl text-center font-bold">学歴</h2>
        <div className="w-4/5 lg:w-full lg:px-10 py-10">
          <EducationSection />
        </div>
      </div>
      <div id="experience" className="w-full flex flex-col items-center">
        <h2 className="text-2xl text-center font-bold pt-10">経歴</h2>
        <div className="w-4/5 lg:w-full lg:px-10 py-10">
          <ExperienceSection />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default JourneySection;
