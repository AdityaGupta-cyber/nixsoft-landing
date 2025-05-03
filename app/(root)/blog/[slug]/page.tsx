import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogPost, blogData } from '../../../../data/blog';

interface BlogPostPageParams {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: BlogPostPageParams) {
  const blog = blogData.find((post) => post.slug === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: `${blog.title} | Next.js TypeScript Blog`,
    description: blog.excerpt,
  };
}

export function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageParams) {
  const blog = blogData.find((post) => post.slug === params.slug);
  
  if (!blog) {
    notFound();
  }
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to all blogs
      </Link>
      
      <div className="relative h-64 w-full mb-8">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Featured Image</span>
        </div>
      </div>
      
      <div className="prose prose-lg max-w-none" 
           dangerouslySetInnerHTML={{ __html: blog.content }}>
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-gray-600">
          Published on {blog.date} by {blog.author}
        </p>
      </div>
    </article>
  );
}