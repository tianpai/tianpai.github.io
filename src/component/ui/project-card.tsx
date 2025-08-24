import React from "react";
import SpotlightCard from "./card";
import { Compass, CodeXml, LibraryBig, Book } from "lucide-react";

interface BlogPost {
  title: string;
  slug?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
  relatedBlogs?: BlogPost[];
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  className?: string;
}

const ProjectHeader: React.FC<{
  title: string;
  websiteUrl: string;
  githubUrl: string;
}> = ({ title, websiteUrl, githubUrl }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-4xl font-bold tracking-tight">{title}</div>
      <div className="flex space-x-3">
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit website"
          className="p-2 rounded-lg"
        >
          <Compass size={20} />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View source code"
          className="p-2 rounded-lg"
        >
          <CodeXml size={20} />
        </a>
      </div>
    </div>
  );
};

const ProjectDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <div className="text-lg opacity-80 max-w-md leading-relaxed">
      {description}
    </div>
  );
};

const RelatedBlogs: React.FC<{ blogs: BlogPost[] }> = ({ blogs }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider opacity-60">
        <LibraryBig size={16} />
        <span>Related Blogs</span>
      </div>
      <ul className="space-y-2">
        {blogs.map((blog, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-sm opacity-70 cursor-pointer"
          >
            <Book size={12} className="flex-shrink-0" />
            <span className="shine-hover">{blog.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  websiteUrl,
  githubUrl,
  relatedBlogs,
  spotlightColor = "rgba(0, 229, 255, 0.2)",
  className = "",
}) => {
  return (
    <SpotlightCard className={className} spotlightColor={spotlightColor}>
      <div className="flex flex-col space-y-6">
        <ProjectHeader
          title={title}
          websiteUrl={websiteUrl}
          githubUrl={githubUrl}
        />
        <ProjectDescription description={description} />
        {relatedBlogs && relatedBlogs.length > 0 && (
          <RelatedBlogs blogs={relatedBlogs} />
        )}
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
