"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Fusion() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 px-6 md:px-12 py-16 md:py-24">
      <div className="h-full max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 py-6">
          <div className="h-full w-full p-6 space-y-4 flex flex-col justify-center">
            <h3 className="font-extrabold tracking-wide text-2xl md:text-3xl text-blue-500 dark:text-neutral-200">
              Transform with confidence. Accelerate agility and innovation.
            </h3>
          </div>
          {[
            {
              title: "Expert Team",
              description: "Enterprise open-source consulting services tailored to your organization's goals."
            },
            {
              title: "Innovative Solutions",
              description: "Leverage cutting-edge technologies to drive efficiency and success."
            },
            {
              title: "Client Focused",
              description: "Your success is our priority. We work closely with you to achieve your goals."
            },
            {
              title: "Scalable Architecture",
              description: "Future-proof your infrastructure with our scalable and flexible solutions."
            },
            {
              title: "Continuous Support",
              description: "Reliable, ongoing support to ensure sustained growth and security."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="h-full w-full p-6 space-y-4  dark:bg-zinc-800 rounded-2xl  hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-extrabold tracking-wide text-xl md:text-2xl text-black dark:text-neutral-200">
                {item.title}
              </h3>
              <p className="tracking-wide leading-relaxed text-md text-gray-700 dark:text-neutral-400">
                {item.description}
              </p>
              <p className="text-md text-blue-700 hover:text-blue-900 transition-colors dark:text-blue-400 dark:hover:text-blue-300 tracking-wider">
                <Link href="/">Explore</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
