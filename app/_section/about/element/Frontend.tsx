import Image from "next/image";

// SVG
import html from "@/public/skills/frontend/html.svg";
import css from "@/public/skills/frontend/css.svg";
import js from "@/public/skills/frontend/javascript.svg";
import react from "@/public/skills/frontend/react.svg";
import tailwind from "@/public/skills/frontend/tailwindcss.svg";

// Component
import SkillCard from "./SkillCard";

const Frontend = () => {
  return (
    <>
      <SkillCard alt="html" label="HTML" html={html} />
      <SkillCard alt="css" label="CSS" html={css} />
      <SkillCard alt="js" label="JS" html={js} />
      <SkillCard alt="react" label="REACT" html={react} />
      <SkillCard alt="tailwind" label="TailwindCSS" html={tailwind} />
    </>
  );
};

export default Frontend;
