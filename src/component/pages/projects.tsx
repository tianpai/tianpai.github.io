import { PageContainer } from "@/component/page-container";

export function Project() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="">
        <a href="https://www.github.com/tianpai/dailyrepo">Daily Repo</a>
      </div>
    </div>
  );
}

export function ProjectPage() {
  return (
    <PageContainer>
      <Project />
    </PageContainer>
  );
}
