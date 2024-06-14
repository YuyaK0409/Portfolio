// Compoent
import TimelineElement from "../../TimelineElement";

// Icon
import { MdWorkOutline } from "react-icons/md";

const ExperienceSection = () => {
  return (
    <div className="w-full">
      <TimelineElement Icon={MdWorkOutline} type="experience" />
      <TimelineElement odd={true} Icon={MdWorkOutline} type="experience" />
    </div>
  );
};

export default ExperienceSection;
