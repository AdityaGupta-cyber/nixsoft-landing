"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Fusion() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 my-12 p-12">
      <div className="h-full w-full max-w-7xl">
 
        <div className={cn("grid grid-cols-1 lg:grid-cols-3 py-4 md:py-2 gap-2")}>
        <div className={cn(
                "h-full w-full p-6 space-y-2 "
              )}
            >
              <h3 className={cn("font-bold tracking-wide text-2xl  text-blue-500 dark:text-neutral-200")}>
              Transform with confidence.
              </h3>
              <p className={cn(
                "tracking-wide leading-relaxed text-2xl font-semibold text-blue-500 dark:text-neutral-400"
              )}>
                Accelerate agility and innovation.
              </p>
            </div>
          {[
            
            {
              title: "Expert Team",
              description: "Our team of professionals brings years of experience and expertise to every project."
            },
            {
              title: "Client Focused",
              description: "Enterprise open source consulting services for your organisation’s goals."
            },
            {
                title: "Client Focused",
                description: "Your success is our priority. We work closely with you to achieve your goals."
              },
              {
                title: "Client Focused",
                description: "Your success is our priority. We work closely with you to achieve your goals."
              },
              {
                title: "Client Focused",
                description: "Your success is our priority. We work closely with you to achieve your goals."
              }
          ].map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "h-full w-full p-6 space-y-3 "
              )}
            >
              <h3 className={cn("font-medium tracking-wide text-xl text-black dark:text-neutral-200")}>
                {item.title}
              </h3>
              <p className={cn(
                "tracking-wide leading-relaxed text-sm text-neutral-600 dark:text-neutral-400"
              )}>
                {item.description}
              </p>
              <p className={cn("text-sm text-blue-700 tracking-wider dark:text-neutral-400")}>
               <Link href="/">Explore</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
