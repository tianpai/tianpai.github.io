import React from "react";
import { Link } from "react-router-dom";
import SpotlightCard from "./card";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  slug,
  spotlightColor = "rgba(0, 229, 255, 0.2)",
  className = "",
}) => {
  return (
    <SpotlightCard className={className} spotlightColor={spotlightColor}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4 text-sm opacity-60">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold tracking-tight leading-tight">
          {title}
        </h3>

        <p className="text-base opacity-80 leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        <div className="pt-2">
          <Link
            to={`/blog/${slug}`}
            className="shine-hover text-sm font-medium cursor-pointer"
          >
            Read more →
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default BlogCard;
