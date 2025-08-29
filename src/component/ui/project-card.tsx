import React from "react";
import { Link } from "react-router-dom";
import SpotlightCard from "./card";
import { Compass, CodeXml, LibraryBig, Book, Wrench } from "lucide-react";
import { iconRegistry } from "@/utils/icon-registry";

interface BlogPost {
  title: string;
  slug?: string;
}

interface TechStackIcon {
  iconName: string;
  tooltipText?: string;
}

interface TechStack {
  icons: TechStackIcon[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
  relatedBlogs?: BlogPost[];
  techStack?: TechStack;
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

const TechStackIcons: React.FC<{ techStack: TechStack }> = ({ techStack }) => {
  const getDefaultTechName = (iconName: string) => {
    return iconName
      .replace(/^(Si|Di)/, "")
      .replace(/([A-Z])/g, " $1")
      .trim();
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider opacity-60">
        <Wrench size={16} />
        <span>Tech Stack</span>
      </div>
      <div className="flex space-x-3">
        {techStack.icons.map((techIcon, index) => {
          const { iconName, tooltipText } = techIcon;
          const IconComponent = iconRegistry[iconName as keyof typeof iconRegistry];
          const displayText = tooltipText || getDefaultTechName(iconName);
          return IconComponent ? (
            <div key={index} className="relative group">
              <IconComponent
                size={20}
                className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {displayText}
              </div>
            </div>
          ) : null;
        })}
      </div>
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
          <li key={index}>
            {blog.slug ? (
              <Link
                to={`/blog/${blog.slug}`}
                className="flex items-center space-x-2 text-sm opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
              >
                <Book size={12} className="flex-shrink-0" />
                <span className="shine-hover">{blog.title}</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-2 text-sm opacity-70">
                <Book size={12} className="flex-shrink-0" />
                <span>{blog.title}</span>
              </div>
            )}
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
  techStack,
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

        {techStack && techStack.icons.length > 0 && (
          <TechStackIcons techStack={techStack} />
        )}
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
