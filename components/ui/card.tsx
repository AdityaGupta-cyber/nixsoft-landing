"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    pic?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1  lg:grid-cols-3 py-4 md:py-2 gap-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
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
          <Card pic={item.pic}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  pic
}: {
  className?: string;
  children: React.ReactNode;
  pic?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden  border border-zinc-700 group-hover:border-neutral-400 relative z-20 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900",
        className
      )}
    >
      {pic && (
        <div className="relative  w-full mb-2 flex justify-center px-3 ">
        <Image
          src={pic as string}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        </div>
      )}
      <div className="relative z-50">
        <div className="p-2 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide flex items-center justify-center text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " tracking-wide leading-relaxed text-center text-sm text-neutral-600 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return <Image src={children} alt="card image" className={cn("rounded-xl object-cover",className)} width={400} height={500} />;
};
