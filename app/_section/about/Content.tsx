// Component
import Frontend from "./element/Frontend";
import Backend from "./element/Backend";
import Other from "./element/Other";

// Type
import { SkillSetCategory } from "@/type/about.type";
type Props = {
  category: SkillSetCategory;
};

// ENUM

const Content = ({ category }: Props) => {
  return (
    <div className="w-full h-[300px] md:h-[150px] relative">
      <div
        className={`duration-300 absolute top-0 left-0 w-full h-full flex flex-wrap justify-between gap-3 ${
          category === SkillSetCategory.FRONTEND
            ? "opacity-100 h-full"
            : "opacity-0 translate-x-6 h-0"
        }`}
      >
        <Frontend />
      </div>
      <div
        className={`duration-300 absolute top-0 left-0 w-full h-full flex flex-wrap justify-between gap-3 ${
          category === SkillSetCategory.BACKEND
            ? "opacity-100 h-full"
            : "opacity-0 translate-x-6 h-0"
        }`}
      >
        <Backend />
      </div>
      <div
        className={`duration-300 absolute top-0 left-0 w-full h-full flex flex-wrap justify-between gap-3 ${
          category === SkillSetCategory.TOOL
            ? "opacity-100 h-full"
            : "opacity-0 translate-x-6 h-0"
        }`}
      >
        <Other />
      </div>
    </div>
  );
};

export default Content;
