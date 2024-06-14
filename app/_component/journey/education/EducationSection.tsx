// Compoent
import TimelineElement from "../../TimelineElement";

// Icon
import { MdOutlineSchool } from "react-icons/md";

const EducationSection = () => {
  return (
    <div className="w-full">
      <TimelineElement Icon={MdOutlineSchool} type="education" />
      <TimelineElement odd={true} Icon={MdOutlineSchool} type="education" />
    </div>
  );
};

export default EducationSection;
