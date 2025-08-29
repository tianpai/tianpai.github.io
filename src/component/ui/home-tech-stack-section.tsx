import TechStackLoop from "./tech-stack-loop";

export default function HomeTechStackSection() {
  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Technologies I Explore</h2>
        <p className="text-lg opacity-70">
          A broad sampling of web development technologies and tools
        </p>
      </div>
      <TechStackLoop />
    </div>
  );
}