"use client";
import { motion } from "framer-motion";

// SVG
import github from "@/public/skills/other/github.svg";
import visualStudio from "@/public/skills/other/visual_studio.svg";
import visualStudioCode from "@/public/skills/other/visual_studio_code.svg";
import window from "@/public/skills/other/windows.svg";

// Const
import { animateionDelay, animateionDuration } from "@/app/const";

// Component
import SkillCard from "./SkillCard";

const Other = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animateionDelay, duration: animateionDuration }}
    >
      <SkillCard
        alt="visualstudiocode"
        label="Visual Studio Code"
        html={visualStudio}
      />
      <SkillCard
        alt="visualstudiocode"
        label="Visual Studio Code"
        html={visualStudioCode}
      />
      <SkillCard
        className={"bg-white"}
        alt="github"
        label="Guthub"
        html={github}
      />
      <SkillCard alt="windows" label="Windows" html={window} />
    </motion.div>
  );
};

export default Other;
