"use client";

import { Suspense, useState } from "react";

// Component
import About from "./About";
import Content from "./Content";
import SectionWrapper from "@/app/_component/SectionWrapper";
import ThreeDCube from "@/app/_component/3DLaptop/ThreeDCube";

// ENUM
import { SkillSetCategory } from "@/type/about.type";

const AboutSection = () => {
  const [category, setCategory] = useState<SkillSetCategory>(
    SkillSetCategory.FRONTEND
  );

  return (
    <SectionWrapper>
      <h2 className="text-3xl text-center font-bold mb-10">自己紹介</h2>
      <div className="w-4/5 flex-1 flex lg:px-10 lg:w-full">
        <div className="hidden lg:flex lg:justify-center lg:items-end lg:w-1/3">
          <Suspense fallback={<p>Loading</p>}>
            <ThreeDCube />
          </Suspense>
        </div>
        <div className="flex-1 flex flex-col">
          <About />
          <div className="pt-10 pb-10">
            <ul className="flex gap-10 justify-center">
              <li
                className={`text-[13px] p-2 border border-main-color rounded-full duration-300 ${
                  category === SkillSetCategory.FRONTEND
                    ? "bg-main-color text-background"
                    : "hover:shadow-about cursor-pointer"
                }`}
                onClick={() => setCategory(SkillSetCategory.FRONTEND)}
              >
                フロント
              </li>
              <li
                className={`text-[13px] p-2 border border-main-color rounded-full duration-300 ${
                  category === SkillSetCategory.BACKEND
                    ? "bg-main-color text-background"
                    : "hover:shadow-about cursor-pointer"
                }`}
                onClick={() => setCategory(SkillSetCategory.BACKEND)}
              >
                バック
              </li>
              <li
                className={`text-[13px] p-2 border border-main-color rounded-full duration-300 ${
                  category === SkillSetCategory.TOOL
                    ? "bg-main-color text-background"
                    : "hover:shadow-about cursor-pointer"
                }`}
                onClick={() => setCategory(SkillSetCategory.TOOL)}
              >
                その他
              </li>
            </ul>
          </div>
          <Content category={category} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
