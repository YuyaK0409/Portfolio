"use client";

import { motion } from "framer-motion";

// Compoent
import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";
import SectionWrapper from "../SectionWrapper";
const Journey = () => {
  return (
    <SectionWrapper>
      <div id="education" className="w-full flex flex-col items-center">
        <motion.h2
          className="text-2xl text-center font-bold pt-5 mb-6"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          Education
        </motion.h2>
        <div className="w-4/5 lg:w-full lg:px-10 bg-">
          <EducationSection />
        </div>
      </div>
      <div id="experience" className="w-full flex flex-col items-center">
        <motion.h2
          className="text-2xl text-center font-bold pt-5 mb-6"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          Experience
        </motion.h2>
        <div className="w-4/5 lg:w-full lg:px-10">
          <ExperienceSection />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Journey;
