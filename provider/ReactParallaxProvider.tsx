/**
 * This is a provider for react-scroll-parallax]
 * react-scroll-parallax helps animation
 */

"use client";
import { ParallaxProvider } from "react-scroll-parallax";

// Types
type Props = {
  children: React.ReactNode;
};

const ReactParallaxProvider = ({ children }: Props) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ReactParallaxProvider;
