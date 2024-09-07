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
    <div className="w-full flex justify-center">
      {category === SkillSetCategory.FRONTEND ? (
        <Frontend />
      ) : category === SkillSetCategory.BACKEND ? (
        <Backend />
      ) : (
        <Other />
      )}
    </div>
  );
};

export default Content;
