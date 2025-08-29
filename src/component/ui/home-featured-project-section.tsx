import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./project-card";
import { dailyRepoData } from "@/data/project-data";

export default function HomeFeaturedProjectSection() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured Project</h2>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 text-lg opacity-70 hover:opacity-100 transition-opacity"
        >
          <span>View All</span>
          <ArrowRight size={16} />
        </Link>
      </div>
      <ProjectCard {...dailyRepoData} spotlightColor="rgba(0, 229, 255, 0.2)" />
    </div>
  );
}
