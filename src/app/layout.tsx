import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { SparklesCore } from "./components/aceternity/sparkles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adnan Arodiya",
  description: "Adnan Arodiya Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en">
      <body className={`${inter.className} min-h-fit`}>
        <div className="relative">
          <div className="w-full absolute inset-0 ">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              particleSize={0}
              speed={0.1}
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
