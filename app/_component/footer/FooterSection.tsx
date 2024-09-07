"use client";

import { Link as Scroll } from "react-scroll";
import { LuMoveUp } from "react-icons/lu";

const FooterSection = () => {
  const style = "cursor-pointer";
  return (
    <footer>
      <div className="flex-1 w-full gap-2 flex justify-center pb-5">
        <span className="p-2 rounded-full border-2 border-red-200 hover:bg-red-50/30">
          <Scroll
            to={"home"}
            spy={true}
            offset={-100}
            className="cursor-pointer"
          >
            <LuMoveUp />
          </Scroll>
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
