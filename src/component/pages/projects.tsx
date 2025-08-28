import PageContainer from "@/component/ui/page-container";
import ProjectCard from "@/component/ui/project-card";

const dailyRepoData = {
  title: "Daily Repo",
  description:
    "Discover tomorrow's tech trends today. Track emerging GitHub repositories before they go viral with powerful analytics and developer insights.",
  websiteUrl: "https://www.dailyrepo.tianpai.io",
  githubUrl: "https://github.com/tianpai/dailyrepo",
  techStack: {
    icons: [
      { iconName: "SiTypescript" },
      { iconName: "SiJavascript" },
      { iconName: "SiReact" },
      { iconName: "SiNodedotjs", tooltipText: "Node.js" },
      { iconName: "SiExpress" },
      { iconName: "SiBun" },
      { iconName: "SiMongodb", tooltipText: "MongoDB" },
      { iconName: "SiTailwindcss", tooltipText: "Tailwind CSS" },
      { iconName: "SiVite" }
    ]
  },
  relatedBlogs: [
    {
      title:
        "Building DailyRepo: A Solo Developer's Journey from Scraper to Full-Stack App",
      slug: "building-dailyrepo-a-solo-developer's-journey-from-scraper-to-full-stack-app",
    },
  ],
};

export function ProjectPage() {
  return (
    <PageContainer>
      <div className="flex justify-center items-start h-full">
        <ProjectCard
          {...dailyRepoData}
          className="custom-spotlight-card m-5 responsive-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        />
      </div>
    </PageContainer>
  );
}
