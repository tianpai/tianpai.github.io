import { Link } from "react-router-dom";
import { ArrowRight, User, Code } from "lucide-react";

export default function HomeHeroSection() {
  return (
    <div className="text-center max-w-4xl">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 glowing-text">
        Tianpai Zhang
      </h1>
      <p className="text-2xl md:text-3xl mb-8 opacity-80">
        Building tools that change how people relate to technology
      </p>
      <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl mx-auto">
        Recent Computer Science graduate from University of Toronto
        currently in an intentional exploration phase. Rather than locking
        into a specific tech stack early, I'm sampling different web
        development technologies broadly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
        >
          <Code size={20} />
          <span>View Projects</span>
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center space-x-2 px-6 py-3 border border-neutral-600 hover:border-neutral-500 rounded-lg transition-colors"
        >
          <User size={20} />
          <span>About Me</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}