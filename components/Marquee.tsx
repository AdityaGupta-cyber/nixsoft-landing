import { HoverEffect } from "./ui/card";
import { Testimonials } from "./ui/testimonial";

export default function Marquee() {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex  justify-center md:py-14 pt-6">
        <h1 className="text-lg text-center md:text-3xl font-semibold text-zinc-600 leading-tight">Welcome to Nixsoft <br /> Your one stop shop for open source solutions</h1>
      </div>


      {/* //marquee grid */}
      <div className="w-full h-full flex justify-center ">
      <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
      </div>


      {/* marquee heading 2 */}
      <div className="w-full h-full flex  justify-center md:py-14 pt-6">
        <h1 className="text-lg text-center md:text-3xl font-semibold text-zinc-600 leading-tight">What Our Clients Say</h1>
      </div>

      {/* marquee grid 2 - testimonials */}
      <div className="w-full h-full flex justify-center ">
        <div className="max-w-7xl mx-auto px-8">
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
export const services = [
    {
      title: "Cloud Solutions",
      description:
        "Protecting your digital assets with advanced security solutions.",
      link: "#",
      pic: "/cybersecurity.jpg"
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive protection against cyber threats and vulnerabilities.",
      link: "#2",
      pic: "/cybersecurity.jpg"
    },
    {
      title: "Software Development",
      description:
        "Enterprise-grade security solutions for your business infrastructure.",
      link: "#3",
      pic: "/cybersecurity.jpg"
    }
  ];

export const testimonials = [
  {
    name: "John Doe",
    testimonial: "Nixsoft's cloud solutions transformed our business operations. Highly recommended!",
    img: "/cybersecurity.jpg"
  },
  {
    name: "Jane Smith",
    testimonial: "Their cybersecurity team is top-notch. We feel much more secure now.",
  },
  {
    name: "Michael Johnson",
    testimonial: "The software development services exceeded our expectations. Great work!",
  },
];
