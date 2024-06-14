"use client";

import { Link as Scroll } from "react-scroll";

const HeaderLogo = () => {
  return (
    <>
      <Scroll
        to="home"
        spy={true}
        offset={-65}
        className="text-3xl font-bold mr-auto cursor-pointer z-50"
      >
        Yuya
        <span className="text-main-color blur-text ml-2">Kawamoto</span>
      </Scroll>
    </>
  );
};

export default HeaderLogo;
