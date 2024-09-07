"use client";

import { useState } from "react";

// Menu
import { menu } from "@/const/menu";

// Icons
import { AlignJustify } from "lucide-react";

// Component
import CustomLink from "@/app/_component/CustomLink";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const style =
    "navbar-item p-1 flex relative transition delay-150 duration-150 hover:text-main-color hover:border-main-color cursor-pointer";
  return (
    <div className="sm:flex-1 flex justify-center items-center">
      <div className="hidden sm:flex justify-center items-center gap-4">
        {menu.map((item) => (
          <CustomLink
            key={item.hash}
            hash={item.hash}
            label={item.label}
            style={style}
          />
        ))}
      </div>
      <div className="sm:hidden">
        <AlignJustify
          className="cursor-pointer hover:text-main-color duration-300"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <ToggleMenu setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
