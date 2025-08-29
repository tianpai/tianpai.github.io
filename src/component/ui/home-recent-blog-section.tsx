import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogCard from "./blog-card";
import blogMeta from "@/data/blog-meta.json";

interface RecentBlogSectionProps {
  limit?: number;
}

export default function HomeRecentBlogSection({ limit = 2 }: RecentBlogSectionProps) {
  const recentBlogPosts = Object.entries(blogMeta)
    .map(([slug, meta]) => ({
      title: meta.title,
      excerpt: meta.excerpt,
      date: "Aug 2025",
      readTime: meta.readTime,
      slug,
    }))
    .slice(0, limit);

  if (recentBlogPosts.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Recent Posts</h2>
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-lg opacity-70 hover:opacity-100 transition-opacity"
        >
          <span>Read All</span>
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {recentBlogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            {...post}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          />
        ))}
      </div>
    </div>
  );
}