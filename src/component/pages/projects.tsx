import PageContainer from "@/component/ui/page-container";
import ProjectCard from "@/component/ui/project-card";
import { dailyRepoData } from "@/data/project-data";

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
