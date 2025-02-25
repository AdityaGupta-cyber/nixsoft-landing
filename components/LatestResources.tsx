"use client";
import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "The Future of Cloud Technology in 2025 and beyond.",
    image: "https://plus.unsplash.com/premium_photo-1712254285399-f5f181730830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    link: "/blog/cloud-tech-2024",
  },
  {
    title: "Best Practices in Modern Website Development",
    image: "https://plus.unsplash.com/premium_photo-1712254285399-f5f181730830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/web-dev-practices",
  },
  {
    title: "Implementing Artificial Intelligence in Database Operations",
    image: "https://plus.unsplash.com/premium_photo-1712254285399-f5f181730830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/ai-database",
  },
];

export default function LatestResources() {
  return (
    <div className="w-full py-16 bg-white ">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Resources</h2>
          <p className="text-gray-600">Stay up to date with our latest blog posts and updates</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <Link href={resource.link} key={idx+resource.title} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {resource.title}
                  </h3>
                  <span className="text-blue-600 group-hover:underline">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 