"use client";

import { ParallaxProvider } from "react-scroll-parallax";

type Props = {
  children: React.ReactNode;
};
const ReactParallaxProvider = ({ children }: Props) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ReactParallaxProvider;
