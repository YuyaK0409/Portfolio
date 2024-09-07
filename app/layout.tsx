import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

// Provider
import ReactParallaxProvider from "@/provider/ReactParallaxProvider";
import LevaProvider from "@/provider/LevaProvider";

// CSS
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "Portfolio created by Yuya Kawamoto",
};

// Component
import HeaderSection from "./_component/header/HeaderSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-w-screen min-h-screen`}>
        <LevaProvider />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <HeaderSection />
        <ReactParallaxProvider>
          <main className="flex flex-col items-center">{children}</main>
        </ReactParallaxProvider>
      </body>
    </html>
  );
}
