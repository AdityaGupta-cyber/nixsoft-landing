"use client";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blog";

// Take the latest 3 blog posts
const latestResources = blogData.slice(0, 3).map(post => ({
  title: post.title,
  image: post.imageUrl,
  link: `/blog/${post.slug}`,
  excerpt: post.excerpt
}));

export default function LatestResources() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Resources</h2>
          <p className="text-gray-600">Stay up to date with our latest blog posts and updates</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {latestResources.map((resource, idx) => (
            <Link href={resource.link} key={idx + resource.title} className="group">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{resource.excerpt}</p>
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