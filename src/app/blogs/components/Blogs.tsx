"use client";

import { PageHeader } from "@/components/page-header";
import Pagination from "@/components/Pagination";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import blogPosts from "@/data/blogs.json";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const calculateReadTime = (htmlContent) => {
  // 1. Strip HTML tags to get raw text
  const text = htmlContent.replace(/<[^>]*>/g, "");

  // 2. Count words by splitting at spaces
  const words = text.trim().split(/\s+/).length;

  // 3. Calculate minutes (rounding up)
  const wordsPerMinute = 225; // Medium uses roughly 225-265
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
};

const getSnippet = (html, length = 160) => {
  // 1. Remove HTML tags using Regex
  const plainText = html.replace(/<[^>]*>/g, "");

  // 2. Decode HTML entities (like &amp; or &nbsp;)
  const decodedText = plainText.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");

  // 3. Return a trimmed version with an ellipsis
  return decodedText.length > length
    ? decodedText.substring(0, length) + "..."
    : decodedText;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogPosts);

  // useEffect(() => {
  //   fetch(
  //     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rezainfinity54",
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Medium's feed only returns the 10 most recent posts
  //       setBlogs(data.items);
  //     });
  // }, [blogs.length]);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage,
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Blog"
          description="Thoughts on software development, technology, and lessons learned along the way."
        />

        <div className="grid gap-6">
          {currentBlogs?.map((post) => (
            <article
              key={post?.guid}
              className="group p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post?.pubDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {calculateReadTime(post.content)}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    <Link
                      href={post?.link}
                      className="hover:underline"
                      target="_blank"
                    >
                      {post?.title}
                    </Link>
                  </h2>
                  {/* <Link href={post?.link}></Link> */}
                  {/* <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    <Link>afbcbj</Link>
                    {post?.title}
                  </h2> */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {getSnippet(post?.content)}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {post?.categories.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* <Link
                  href={`/blogs/${post?.guid}`}
                  className="shrink-0 inline-flex items-center text-sm text-primary hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link> */}
              </div>
            </article>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More posts coming soon. Stay tuned!
          </p>
        </div> */}

        <div className="flex gap-2">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
