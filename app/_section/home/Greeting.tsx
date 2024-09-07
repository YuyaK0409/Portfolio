"use client";

import { Button } from "@/components/ui/button";
import { Link as Scroll } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// Const
import { animateionDelay, animateionDuration } from "@/app/const";

const Greeting = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 w-4/5 lg:w-1/2 lg:ml-10"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animateionDelay, duration: animateionDuration }}
    >
      <div>
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
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "プログラマー",
              2000,
            ]}
            wrapper="span"
            speed={1}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
      </div>
      <p>
        大阪在住のSEです。 様々な案件に参画する機会があり、
        設計書作成、開発、保守、監視などの業務を担当し、
        色々なスキルを身に着けることが出来ました。 主な言語・FWは
        JavaScript、React、Laravel、Javaです。
      </p>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
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
              履歴書をダウンロード
            </a>
          </Button>
        </div>

        {/* オーストラリアの仕事を探す場合は、少なくともLinkedIn は必要 */}
        {/* <div className="flex gap-5 h-auto">
          <Link
            href={"/"}
            className="relative p-3 text-main-color flex justify-center items-center text-[13px] duration-300 delay-150 hover:text-background before:rounded-full before:border-[1px] before:border-main-color before:w-full before:h-full before:absolute before:top-0 before:left-0 before:blur-text before:-z-10 before:duration-300 before:delay-150 hover:before:scale-125 hover:before:bg-main-color"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={"/"}
            className="relative p-3 text-main-color flex justify-center items-center text-[13px] duration-300 delay-150 hover:text-background before:rounded-full before:border-[1px] before:border-main-color before:w-full before:h-full before:absolute before:top-0 before:left-0 before:blur-text before:-z-10 before:duration-300 before:delay-150 hover:before:scale-125 hover:before:bg-main-color"
          >
            <FaInstagram />
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Greeting;
