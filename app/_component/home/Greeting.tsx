"use client";

import { Button } from "@/components/ui/button";
import { Link as Scroll } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Greeting = () => {
  return (
    <div className="flex flex-col gap-5 w-4/5 lg:w-1/2 lg:ml-10">
      <motion.div
        initial={{ opacity: 0, translateX: -200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold flex flex-col sm:block">
          <span>こんにちは、</span>

          <span>
            <strong className="text-main-color">河本祐哉</strong>
            です。
          </span>
        </h2>

        <p className="text-xl font-semibold text-main-color">
          <TypeAnimation
            sequence={[
              "システムエンジニア",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "プログラマー",
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, translateX: 200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        大阪在住のプログラマです。 SESとして様々な案件に参画する機会があり、
        色々なスキルを身に着けることができました。
        主に得意な分野はフロントエンドです。
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="flex flex-col gap-5 sm:flex-row sm:items-center"
      >
        <div className="flex gap-5">
          <Button
            asChild
            className="relative cursor-pointer bg-transparent text-background duration-300 delay-150 before:duration-300 before:delay-150 before:content-[''] before:bg-main-color before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:border-2 before:border-main-color before:blur-text hover:bg-transparent hover:text-main-color hover:before:h-0 hover:before:top-full"
          >
            <Scroll
              to={"about"}
              spy={true}
              offset={-65}
              className="to-about-from-greeting"
            >
              自己紹介へ{" "}
            </Scroll>
          </Button>
          <Button
            asChild
            className="relative bg-transparent text-main-color before:duration-300 before:delay-150 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:border-2 before:border-main-color before:blur-text hover:bg-transparent hover:before:h-0 hover:before:top-full"
          >
            <a href="/resume.pdf" download={true}>
              履歴書
            </a>
          </Button>
        </div>

        <div className="flex gap-5 h-auto">
          <Link
            href={"/"}
            className="relative p-2 text-main-color text-[10px] duration-300 delay-150 hover:text-background before:rounded-full before:border-[1px] before:border-main-color before:w-full before:h-full before:absolute before:top-0 before:left-0 before:blur-text before:-z-10 before:duration-300 before:delay-150 hover:before:scale-125 hover:before:bg-main-color"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={"/"}
            className="relative p-2 text-main-color text-[10px] duration-300 delay-150 hover:text-background before:rounded-full before:border-[1px] before:border-main-color before:w-full before:h-full before:absolute before:top-0 before:left-0 before:blur-text before:-z-10 before:duration-300 before:delay-150 hover:before:scale-125 hover:before:bg-main-color"
          >
            <FaInstagram />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Greeting;
