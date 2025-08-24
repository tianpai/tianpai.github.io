import { useParams } from "react-router-dom";
import PageContainer from "@/component/ui/page-container";
import blogMeta from "@/data/blog-meta.json";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const post = slug ? blogMeta[slug as keyof typeof blogMeta] : null;

  if (!post) {
    return (
      <PageContainer>
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Link to="/blog" className="shine-hover">
              ← Back to blog
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="flex justify-center items-start py-12">
        <div className="responsive-card m-5 blog-content-bg p-8 rounded-xl">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 shine-hover text-sm mb-4"
          >
            <ArrowLeft size={16} />
            <span>Back to blog</span>
          </Link>

          <div className="flex items-center space-x-4 text-sm opacity-60">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>Aug 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </PageContainer>
  );
}
