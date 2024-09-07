"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Const
import { animateionDelay, animateionDuration } from "@/app/const";

// Image
import profileImg from "@/public/profileImg.png";

const Avator = () => {
  return (
    <div className="w-full flex justify-center py-5 items-center lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: animateionDelay, duration: animateionDuration }}
        className="
        relative aspect-square w-4/5 max-w-[350px] flex justify-center items-center
        lg:w-full lg:max-w-[450px] lg:mr-10
        rounded-full duration-300 border-[1px] border-main-color overflow-hidden
        hover:shadow-avator
      "
      >
        <Image src={profileImg} alt="profile" fill className="object-cover" />
      </motion.div>
    </div>
  );
};

export default Avator;
