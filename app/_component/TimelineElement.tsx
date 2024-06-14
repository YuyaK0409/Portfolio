import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { Span } from "next/dist/trace";

// Type
type Props = {
  odd?: boolean;
  Icon: IconType;
  type: "experience" | "education";
};
const TimelineElement = ({ odd, Icon, type }: Props) => {
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
        transition={{ duration: 0.3, delay: 0.3 }}
        className={`w-[4px] h-full absolute top-0 ${
          odd ? "left-0" : "left-0 md:left-full"
        } ${type === "education" ? "bg-main-color" : "bg-blue-300"}
      `}
      ></motion.p>
      <motion.p
        initial={{ transform: "Scale(0)" }}
        whileInView={{ transform: "Scale(1)" }}
        transition={{ duration: 0.3, delay: 0.1 }}
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

        <small>2024-04-04</small>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateX: odd ? 200 : -200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className={`p-2 border-[1px] ${
          type === "education" ? "border-main-color" : "border-blue-300"
        }`}
      >
        <p className="break-normal">
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd fddddddd
          fddddddd fddddddd fddddddd fddddddd fddddddd{" "}
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineElement;
