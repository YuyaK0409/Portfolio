"use client";
import { motion } from "framer-motion";

// SVG
import html from "@/public/skills/frontend/html.svg";
import css from "@/public/skills/frontend/css.svg";
import js from "@/public/skills/frontend/javascript.svg";
import react from "@/public/skills/frontend/react.svg";
import tailwind from "@/public/skills/frontend/tailwindcss.svg";

// Const
import { animateionDelay, animateionDuration } from "@/app/const";

// Component
import SkillCard from "./SkillCard";

const Frontend = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animateionDelay, duration: animateionDuration }}
    >
      <SkillCard alt="html" label="HTML" html={html} />
      <SkillCard alt="css" label="CSS" html={css} />
      <SkillCard alt="js" label="JS" html={js} />
      <SkillCard alt="react" label="REACT" html={react} />
      <SkillCard alt="tailwind" label="TailwindCSS" html={tailwind} />
    </motion.div>
  );
};

export default Frontend;
