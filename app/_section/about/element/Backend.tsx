"use client";
import { motion } from "framer-motion";

// SVG
import next from "@/public/skills/backend/nextjs.svg";
import mongo from "@/public/skills/backend/mongodb.svg";
import mySql from "@/public/skills/backend/mysql.svg";
import laravel from "@/public/skills/backend/laravel.svg";
import java from "@/public/skills/backend/java.svg";

// Const
import { animateionDelay, animateionDuration } from "@/app/const";

// Component
import SkillCard from "./SkillCard";
const Backend = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animateionDelay, duration: animateionDuration }}
    >
      <SkillCard
        className={"bg-white p-2 rounded-2xl"}
        alt="nextjs"
        label="Nextjs"
        html={next}
      />
      <SkillCard alt="mongodb" label="MongoDB" html={mongo} />
      <SkillCard alt="mysql" label="MySQL" html={mySql} />
      <SkillCard alt="laravel" label="Laravel" html={laravel} />
      <SkillCard alt="java" label="Java" html={java} />
    </motion.div>
  );
};

export default Backend;
