// コンポーネント
import Education from "./Education";

const EducationSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-center font-bold">学歴</h2>
      <div className="w-4/5 lg:w-full lg:px-10 py-10">
        <Education />
      </div>
    </div>
  );
};

export default EducationSection;
