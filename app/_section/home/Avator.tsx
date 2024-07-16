"use client";
import { motion } from "framer-motion";
const Avator = () => {
  return (
    <div className="w-full flex justify-center py-5 items-center lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="
        relative aspect-square w-4/5 max-w-[350px] flex justify-center items-center duration-300 delay-150 
        lg:w-full lg:max-w-[450px] lg:mr-10
        after:w-full after:h-full after:absolute after:top-0 after:left-0 after:rounded-full after:duration-300 after:delay-300 after:border-[1px] after:border-main-color
        hover:after:shadow-avator
      "
      >
        Avator
      </motion.div>
    </div>
  );
};

export default Avator;
