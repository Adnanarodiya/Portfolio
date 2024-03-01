import Hero from "./components/hero";
import AboutComp from "./components/aboutComp";
import Timeline from "./components/timeline";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import FeaturedProject from "./components/featuredProject";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutComp />
      <FeaturedProject />
      {/* <Timeline /> */}
    </div>
  );
}
