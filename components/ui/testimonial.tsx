"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// import LeftQuote from "/quote-left.svg";

export function Testimonials({ testimonials }: { testimonials: { name: string, testimonial: string, img?: string }[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-3 py-4 md:py-2 gap-2")}>
      {testimonials.map((testimonial, idx) => (
        <div
          key={testimonial.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-slate-800/[0.8] block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className={cn(
            "h-full w-full overflow-hidden border border-zinc-700 group-hover:border-neutral-400 relative z-20 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          )}>
            <div className="relative z-50">
              <div className="p-2 space-y-2">
                <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden relative">
  {testimonial?.img ? (
    <Image
      src={testimonial.img}
      alt="testimonial"
      height={40}
      width={40}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <span className="text-xl font-bold text-gray-600">
      {testimonial.name[0]}
    </span>
  )}
</div>
<div className="flex flex-col">
                  <h4 className={cn("font-bold tracking-wide text-base sm:text-xl text-black dark:text-neutral-200")}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Baby Carer</p>
                  </div>
                  <div className="ml-auto">
                    {/* <LeftQuote className="fill-[rgb(25,118,210)] w-6 h-6" /> */}
                    <Image src={'/quote-left.svg'}  alt="quote" width={20} height={20} />
                  </div>
                </div>
                <p className={cn(
                  "tracking-wide leading-relaxed text-sm text-neutral-600 dark:text-neutral-400"
                )}>
                {testimonial.testimonial}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
