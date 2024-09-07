import { IconType } from "react-icons";
import { motion } from "framer-motion";

// Const
import { animateionDelay, animateionDuration } from "../const";

// Type
import { JourneyElementType } from "@/type/journey.types";
type Props = {
  odd?: boolean;
  Icon: IconType;
  type: "experience" | "education";
  element: JourneyElementType;
};
const TimelineElement = ({ odd, Icon, type, element }: Props) => {
  return (
    <div
      className={`relative py-10 w-full max-w-[600px]
        md:w-1/2 md:max-w-[600px] ${
          odd ? "pl-8 md:ml-auto" : "pl-8 md:pl-0 md:pr-8"
        }
    `}
    >
      <motion.p
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ delay: animateionDelay, duration: animateionDuration }}
        viewport={{ once: true }}
        className={`w-[4px] h-full absolute top-0 ${
          odd ? "left-0" : "left-0 md:left-full"
        } ${type === "education" ? "bg-main-color" : "bg-blue-300"}
      `}
      ></motion.p>
      <motion.p
        initial={{ transform: "Scale(0)" }}
        whileInView={{ transform: "Scale(1)" }}
        transition={{ delay: animateionDelay, duration: animateionDuration }}
        viewport={{ once: true }}
        className={`absolute flex  gap-3 items-center top-[-10px] ${
          odd
            ? "left-[-11px]"
            : "left-[-11px] md:right-[-16px] md:flex-row-reverse"
        }
        `}
      >
        <span
          className={`flex justify-center items-center p-1 text-white text-lg text-background rounded-full ${
            type === "education" ? "bg-main-color" : "bg-blue-300"
          }`}
        >
          <Icon />
        </span>

        <small>{`${element.start}～${element.end}`}</small>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateX: odd ? 200 : -200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: animateionDelay, duration: animateionDuration }}
        viewport={{ once: true }}
        className={`p-2 border-[1px] ${
          type === "education" ? "border-main-color" : "border-blue-300"
        }`}
      >
        <h2 className="text-xl">{element.title}</h2>
        <p className="break-normal text-[12px] mt-3">{element.des}</p>
        {element.skills && element.skills.length > 0 && (
          <p className="mt-3 text-[12px]">
            技術：
            {element.skills.map((skill, index) => {
              return (
                <span key={index} className="mr-2 text-red-300">
                  {skill}
                  {/* @ts-ignore */}
                  {index !== element.skills.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default TimelineElement;
