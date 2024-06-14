"use client";

import { Link as Scroll } from "react-scroll";

type Props = {
  hash: string;
  label: string;
  style?: string;
};

const CustomLink = ({ hash, label, style }: Props) => {
  return (
    <Scroll to={hash} spy={true} offset={-65} className={style && style}>
      {label}
    </Scroll>
  );
};

export default CustomLink;
