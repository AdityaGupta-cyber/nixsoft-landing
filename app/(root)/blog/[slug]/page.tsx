import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogData } from '../../../../data/blog';

// Define the params type
interface BlogPostPageParams {
  params: Promise<{ slug: string }>; // params is a Promise in dynamic routes
}

export default async function BlogPostPage({ params }: BlogPostPageParams): Promise<React.ReactNode> {
  // Await the params to resolve the Promise
  const resolvedParams = await params;
  const blog = blogData.find((post) => post.slug === resolvedParams.slug);
  
  if (!blog) {
    notFound();
  }
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to all blogs
      </Link>
      
      <div className="relative h-[400px] w-full mb-8">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center gap-4 text-gray-600 mb-8">
        <span>{blog.author}</span>
        <span>•</span>
        <span>{blog.date}</span>
      </div>
      
      <div className="prose prose-lg max-w-none" 
           dangerouslySetInnerHTML={{ __html: blog.content }}>
      </div>
    </article>
  );
}