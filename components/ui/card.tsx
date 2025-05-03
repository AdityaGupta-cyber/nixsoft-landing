"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title?: string;
    description?: string;
    link?: string;
    icon?: React.ReactNode;
    name?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 md:py-2 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link || idx}
          className={`relative group block p-2 h-full w-full ${
            idx > 2 ? "hidden md:block" : ""
          } ${
            items.length % 2 !== 0 && idx === items.length - 1
              ? 'md:col-span-2 lg:col-span-1'
              : ''
          }`}
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
          <div className="flex justify-center w-full">
            <Card icon={item.icon} className="space-y-1 w-full">
              <CardTitle>{item.title || item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {item.link && (
                <CardLink link={item.link} className="hover:text-underline">
                  Learn More <ArrowForwardIcon />
                </CardLink>
              )}
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  icon,
}: {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden border border-zinc-700 group-hover:border-neutral-100 relative z-20 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900",
        className
      )}
    >
      <div className="relative z-50 flex flex-col items-left">
        <div className="flex items-center">{icon}</div>
        <div className="space-y-2 flex flex-col items-left">{children}</div>
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
    <h4
      className={cn(
        "font-bold tracking-wide flex items-center text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200",
        className
      )}
    >
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
        "tracking-wide leading-relaxed text-sm text-neutral-600 dark:text-neutral-400 flex items-left",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardLink = ({
  className,
  children,
  link,
}: {
  className?: string;
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <a
      href={link}
      key={link}
      className={cn(
        "text-blue-500 hover:text-blue-600 flex items-center gap-2",
        className
      )}
    >
      {children}
    </a>
  );
};

export const services = [
  {
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure for your business needs.",
    link: "#",
    icon: <CloudQueueIcon sx={{ color: "blue" }} />,
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your requirements.",
    link: "#2",
    icon: <CodeIcon sx={{ color: "green" }} />,
  },
  {
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights for better decision-making.",
    link: "#3",
    icon: <StorageIcon sx={{ color: "blue" }} />,
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions.",
    link: "#4",
    icon: <SecurityIcon sx={{ color: "red" }} />,
  },
  {
    title: "IT Consulting",
    description: "Expert guidance for your technology decisions.",
    link: "#5",
    icon: <BusinessIcon sx={{ color: "orange" }} />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance.",
    link: "#6",
    icon: <SupportAgentIcon sx={{ color: "teal" }} />,
  },
];
