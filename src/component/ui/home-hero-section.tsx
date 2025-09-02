import { ArrowRight, User, Code } from "lucide-react";
import BaseButton from "./base-button";
import PgpKeyButton from "./pgp-key-button";

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
        Recent Computer Science graduate from University of Toronto currently in
        an intentional exploration phase. Rather than locking into a specific
        tech stack early, I'm sampling different web development technologies
        broadly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <BaseButton
          to="/projects"
          variant="primary"
          icon={<Code size={20} />}
          endIcon={<ArrowRight size={16} />}
        >
          View Projects
        </BaseButton>
        <BaseButton
          to="/about"
          icon={<User size={20} />}
          endIcon={<ArrowRight size={16} />}
        >
          About Me
        </BaseButton>
        <PgpKeyButton />
      </div>
    </div>
  );
}
