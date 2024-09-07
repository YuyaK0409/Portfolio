// SVG
import next from "@/public/skills/backend/nextjs.svg";
import mongo from "@/public/skills/backend/mongodb.svg";
import mySql from "@/public/skills/backend/mysql.svg";
import laravel from "@/public/skills/backend/laravel.svg";

// Component
import SkillCard from "./SkillCard";
const Backend = () => {
  return (
    <>
      <SkillCard
        className={"bg-white"}
        alt="nextjs"
        label="Nextjs"
        html={next}
      />
      <SkillCard alt="mongodb" label="MongoDB" html={mongo} />
      <SkillCard alt="mysql" label="MySQL" html={mySql} />
      <SkillCard alt="laravel" label="Laravel" html={laravel} />
    </>
  );
};

export default Backend;
