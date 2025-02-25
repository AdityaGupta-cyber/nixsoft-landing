import { HoverEffect, services } from "./ui/card";
import { Testimonials } from "./ui/testimonial";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';  
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessIcon from '@mui/icons-material/Business';
import MemoryIcon from '@mui/icons-material/Memory';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function Marquee() {
  return (
    <div className="w-full h-full ">
     <div className="w-full h-full my-12 md:my-24 ">
     <div className="w-full h-full flex flex-col  justify-center items-center md:py-14 pt-6 ">
        <h1 className="text-xl text-center md:text-4xl font-bold text-black leading-tight">Our Services</h1>
        <p className="text-center text-zinc-600 text-sm py-4 font-medium  md:text-lg tracking-tight">We offer comprehensive technology solutions to help your business grow and succeed in the
      digital landscape.</p>
      </div>


      {/* //marquee grid */}
      <div className="w-full h-full flex justify-center ">
      <div className="mx-auto   px-8">
      <HoverEffect items={service} />
    </div>
      </div>
     </div>


<div className="w-full h-full my-12 md:my-24  bg-zinc-100 py-12">
        {/* marquee heading 2 */}
        <div className="w-full h-full flex flex-col justify-center items-center md:py-14 pt-6">
          <h1 className="text-xl text-center md:text-4xl font-bold text-black leading-tight">Client Testimonials</h1>
          <p className="text-center text-zinc-600 text-sm py-4 font-medium  md:text-lg tracking-tight">We offer comprehensive technology solutions to help your business grow and succeed in the
 digital landscape.</p>
        </div>

        {/* marquee grid 2 - testimonials */}
        <div className="w-full h-full flex justify-center ">
          <div className="max-w-7xl mx-auto px-8">
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
</div>

<div className="w-full h-full my-12 md:my-24 ">
{/* marquee heading 3 */}
<div className="w-full h-full flex flex-col justify-center items-center md:py-14 pt-6">
          <h1 className="text-xl text-center md:text-4xl font-bold text-black leading-tight">Our Solutions That Drive Growth</h1>
          <p className="text-center text-zinc-600 text-sm py-4 font-medium  md:text-lg tracking-tight">Discover how our solutions can help your business grow and succeed in the digital landscape.</p>
        </div>

        {/* marquee grid 3 - solutions */}
        <div className="w-full h-full flex justify-center ">
          <div className="w-full lg:max-w-[60vw] flex items-center justify-center mx-auto px-8">
            <HoverEffect items={solutions} />
          </div>
        </div>
</div>
    </div>
  );
}

const service = [
  {
    title: "Cloud Solutions", 
    description: "Scalable and secure cloud infrastructure for your business needs.",
    icon: <CloudQueueIcon sx={{ color: "blue", fontSize: "2.5rem" }} className="text-xl" />
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your requirements.",
    icon: <CodeIcon sx={{ color: "blue",fontSize: "2.5rem" }} className="text-xl" />
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights for your business decisions.",
    icon: <StorageIcon sx={{ color: "blue",fontSize: "2.5rem" }}  />
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions.",
    icon: <SecurityIcon sx={{ color: "blue",fontSize: "2.5rem" }} />
  },
  {
    title: "IT Consulting",
    description: "Expert guidance for your technology decisions.",
    icon: <BusinessIcon sx={{ color: "blue",fontSize: "2.5rem" }} />
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance.",
    icon: <SupportAgentIcon sx={{ color: "blue",fontSize: "2.5rem" }} />
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


export const solutions =[
  {
    name: "Digital Transformation",
    description: "We help businesses transform their operations and processes to become more efficient and productive.",
    link: "#",
    icon: <MemoryIcon sx={{ color: "blue",fontSize: "2.5rem" }} className="text-xl" />
  },
  {
    name: "Process Automation",
    description: "We help businesses automate their operations and processes to become more efficient and productive.",
    link: "#",
    icon: <FlashOnIcon sx={{ color: "blue",fontSize: "2.5rem" }} className="text-xl" />
  },
  {
    name: "Enterprise Integration",
    description: "We help businesses integrate their operations and processes to become more efficient and productive.",
    link: "#",
    icon: <PeopleOutlineIcon sx={{ color: "blue",fontSize: "2.5rem" }} className="text-xl" />
  }  
  
]