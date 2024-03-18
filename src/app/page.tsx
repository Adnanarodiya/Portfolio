import Hero from "./components/hero";
import AboutComp from "./components/aboutComp";
import Timeline from "./components/timeline";
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
