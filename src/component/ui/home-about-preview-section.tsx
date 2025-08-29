import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import SpotlightCard from "./card";

export default function HomeAboutPreviewSection() {
  return (
    <div className="w-full max-w-4xl">
      <SpotlightCard spotlightColor="rgba(255, 165, 0, 0.2)">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Design Philosophy</h2>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              <BookOpen size={20} />
              <span>Learn More</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <p className="text-lg opacity-80 leading-relaxed">
            I'm focused on building tools that change how people relate to
            technology, not just adding more features to the world. Every
            project needs intentional design language and taste, something
            that stands out from generic solutions you'd find anywhere else.
          </p>
        </div>
      </SpotlightCard>
    </div>
  );
}