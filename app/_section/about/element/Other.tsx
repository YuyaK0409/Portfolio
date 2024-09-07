// SVG
import github from "@/public/skills/other/github.svg";
import visualStudio from "@/public/skills/other/visualstudio.svg";
import window from "@/public/skills/other/windows.svg";

// Component
import SkillCard from "./SkillCard";

const Other = () => {
  return (
    <>
      <SkillCard
        className={"bg-white"}
        alt="github"
        label="Guthub"
        html={github}
      />
      <SkillCard alt="visualstudio" label="Visual Studio" html={visualStudio} />
      <SkillCard alt="windows" label="Windows" html={window} />
    </>
  );
};

export default Other;
