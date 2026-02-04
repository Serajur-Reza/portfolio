import { PageHeader } from "@/components/page-header";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Blogs from "./components/Blogs";

const blogPosts = [
  {
    title: "Building Scalable Microservices with Go and Kubernetes",
    excerpt:
      "A deep dive into designing and deploying microservices that can handle millions of requests. Learn best practices for service discovery, load balancing, and fault tolerance.",
    date: "2024-01-15",
    readTime: "12 min read",
    slug: "scalable-microservices-go-kubernetes",
    tags: ["Go", "Kubernetes", "Architecture"],
  },
  {
    title: "The Complete Guide to React Server Components",
    excerpt:
      "Understanding the new paradigm of React Server Components and how they change the way we build React applications. Includes practical examples and performance comparisons.",
    date: "2024-01-08",
    readTime: "15 min read",
    slug: "react-server-components-guide",
    tags: ["React", "Next.js", "Performance"],
  },
  {
    title: "Advanced TypeScript Patterns for Large-Scale Applications",
    excerpt:
      "Explore advanced TypeScript patterns including conditional types, mapped types, and template literal types. Perfect for teams working on enterprise applications.",
    date: "2023-12-20",
    readTime: "10 min read",
    slug: "advanced-typescript-patterns",
    tags: ["TypeScript", "Best Practices"],
  },
  {
    title: "Optimizing PostgreSQL for High-Traffic Applications",
    excerpt:
      "Learn how to tune PostgreSQL for maximum performance. Covers indexing strategies, query optimization, connection pooling, and caching techniques.",
    date: "2023-12-05",
    readTime: "18 min read",
    slug: "postgresql-optimization",
    tags: ["PostgreSQL", "Database", "Performance"],
  },
  {
    title: "Building a CI/CD Pipeline from Scratch",
    excerpt:
      "Step-by-step guide to creating a robust CI/CD pipeline using GitHub Actions, Docker, and cloud deployment. Includes testing, security scanning, and rollback strategies.",
    date: "2023-11-18",
    readTime: "14 min read",
    slug: "cicd-pipeline-from-scratch",
    tags: ["DevOps", "CI/CD", "Automation"],
  },
  {
    title: "Introduction to Rust for Web Developers",
    excerpt:
      "A practical introduction to Rust programming for developers coming from JavaScript or Python. Covers ownership, borrowing, and building web APIs with Actix.",
    date: "2023-11-02",
    readTime: "20 min read",
    slug: "rust-for-web-developers",
    tags: ["Rust", "WebAssembly", "Backend"],
  },
];

export default function BlogsPage() {
  return (
    <>
      <Blogs />
    </>
    // <section className="py-16 sm:py-24">
    //   <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    //     <PageHeader
    //       title="Blog"
    //       description="Thoughts on software development, technology, and lessons learned along the way."
    //     />

    //     <div className="grid gap-6">
    //       {blogPosts.map((post) => (
    //         <article
    //           key={post?.slug}
    //           className="group p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
    //         >
    //           <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
    //             <div className="flex-1">
    //               <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
    //                 <span className="flex items-center gap-1">
    //                   <Calendar className="w-4 h-4" />
    //                   {formatDate(post?.date)}
    //                 </span>
    //                 <span className="flex items-center gap-1">
    //                   <Clock className="w-4 h-4" />
    //                   {post?.readTime}
    //                 </span>
    //               </div>
    //               <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
    //                 <Link
    //                   href={`/blogs/${post?.slug}`}
    //                   className="hover:underline"
    //                 >
    //                   {post?.title}
    //                 </Link>
    //               </h2>
    //               <p className="text-muted-foreground leading-relaxed mb-4">
    //                 {post?.excerpt}
    //               </p>
    //               <div className="flex flex-wrap items-center gap-2">
    //                 {post?.tags.map((tag) => (
    //                   <span
    //                     key={tag}
    //                     className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
    //                   >
    //                     {tag}
    //                   </span>
    //                 ))}
    //               </div>
    //             </div>
    //             <Link
    //               href={`/blogs/${post?.slug}`}
    //               className="flex-shrink-0 inline-flex items-center text-sm text-primary hover:underline"
    //             >
    //               Read more
    //               <ArrowRight className="ml-1 w-4 h-4" />
    //             </Link>
    //           </div>
    //         </article>
    //       ))}
    //     </div>

    //     <div className="mt-12 text-center">
    //       <p className="text-muted-foreground">
    //         More posts coming soon. Stay tuned!
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}
