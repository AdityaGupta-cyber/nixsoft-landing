import Hero from "@/components/Hero";

import Marquee from "@/components/Marquee";
import Fusion from "@/components/Fusion";
import LogoMarquee from "@/components/LogoMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import LatestResources from "@/components/LatestResources";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-blue-900 to-blue-800">
      <Hero />
      <Marquee />
      <Fusion />
      <LogoMarquee />
      <WhyChooseUs />
      <LatestResources />
      <GetInTouch />
    </div>
  );
}
