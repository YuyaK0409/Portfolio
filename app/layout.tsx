import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Provider
import ReactParallaxProvider from "@/provider/ReactParallaxProvider";

// CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Component
import Header from "./_component/header/Header";
import Footer from "./_component/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-w-screen min-h-screen`}>
        {/* <Header />
        <ReactParallaxProvider>
          <main className="flex flex-col items-center">{children}</main>
        </ReactParallaxProvider>
        <Footer /> */}
        ko
      </body>
    </html>
  );
}
