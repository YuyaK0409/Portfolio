// コンポーネント
import Experience from "./Experience";

const ExperienceSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl text-center font-bold">経歴</h2>
      <div className="w-4/5 lg:w-full lg:px-10 pt-10">
        <Experience />
      </div>
    </div>
  );
};

export default ExperienceSection;
