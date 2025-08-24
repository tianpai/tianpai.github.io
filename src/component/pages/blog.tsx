import PageContainer from "@/component/ui/page-container";
import BlogCard from "@/component/ui/blog-card";
import blogMeta from "@/data/blog-meta.json";

const blogPosts = Object.entries(blogMeta).map(([slug, meta]) => ({
  title: meta.title,
  excerpt: meta.excerpt,
  date: "Aug 2025",
  readTime: meta.readTime,
  slug,
}));

export function BlogPage() {
  return (
    <PageContainer>
      <div className="flex justify-center items-start h-full">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            {...post}
            className="custom-spotlight-card m-5 responsive-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          />
        ))}
      </div>
    </PageContainer>
  );
}
