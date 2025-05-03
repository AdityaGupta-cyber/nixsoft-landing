import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, blogData } from '../../../data/blog';
import Head from 'next/head';

const BlogList: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Blog | Next.js TypeScript Blog</title>
        <meta name="description" content="Read our latest articles on technology and development" />
      </Head>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {blog.author} • {blog.date}
                </p>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`}>
                  <span className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;