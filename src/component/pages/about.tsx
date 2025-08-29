import PageContainer from "../ui/page-container";
import SpotlightCard from "../ui/card";
import { User, Target, Lightbulb, Code } from "lucide-react";

export default function About() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center space-y-8 p-8">
        <h1 className="text-6xl font-bold mb-8 glowing-text">About Me</h1>

        <div className="flex flex-col gap-8 max-w-4xl w-full">
          <SpotlightCard spotlightColor="rgba(255, 105, 180, 0.2)">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User size={24} className="text-pink-400" />
                <h2 className="text-2xl font-bold">Who I Am</h2>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">
                Recent Computer Science graduate from University of Toronto
                currently in an intentional exploration phase. Rather than
                locking into a specific tech stack early, I'm sampling different
                web development technologies broadly. I believe you need to try
                as much as possible before choosing an area to specialize and
                truly polish your expertise in.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 255, 127, 0.2)">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target size={24} className="text-green-400" />
                <h2 className="text-2xl font-bold">My Approach</h2>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">
                I treat software engineering like any other engineering
                discipline: identify the problem first, understand requirements
                deeply, develop high-level tactics, then experiment with
                proof-of-concepts and iterate. This methodical process drives
                everything I build, from stable development pipelines to
                experimental CLI tools.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(255, 165, 0, 0.2)">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Lightbulb size={24} className="text-orange-400" />
                <h2 className="text-2xl font-bold">Design Philosophy</h2>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">
                I'm focused on building tools that change how people relate to
                technology, not just adding more features to the world. Every
                project needs intentional design language and taste, something
                that stands out from generic solutions you'd find anywhere else.
                I don't want to create something generic that blends into the
                app store crowd. My projects tend to solve problems I actually
                face, with thoughtful consideration of how users interact with
                their tools. Currently drawn to backend and app development,
                always thinking about the intersection of technical
                implementation and human experience, while constantly learning
                through books like API design patterns.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(138, 43, 226, 0.2)">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code size={24} className="text-purple-400" />
                <h2 className="text-2xl font-bold">Currently Working On</h2>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">
                My recent project dailyrepo now has a stable development
                pipeline, making feature management seamless. I'm exploring
                proof-of-concepts including a reminder app that fades away if
                forgotten, encouraging internal motivation over external
                dependency, and pimp, a personal infrastructure management CLI
                in Go for instant configuration switching and community config
                sharing. Always building with the goal of changing how people
                interact with their development tools.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </PageContainer>
  );
}
