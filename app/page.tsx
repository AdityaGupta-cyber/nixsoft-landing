import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Fusion from "@/components/Fusion";
import TextCarousel from "@/components/TextCarousel";
import LogoMarquee from "@/components/LogoMarquee";
import PreFooter from "@/components/PreFooter";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-blue-900 to-blue-800">
      <Navbar />
      <Hero />
      <Marquee />
      <Fusion />
      <LogoMarquee />
      <TextCarousel />
      <PreFooter/>
    </div>
  );

}
