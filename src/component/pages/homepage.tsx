import PageContainer from "@/component/ui/page-container";
import HomeHeroSection from "@/component/ui/home-hero-section";
import HomeTechStackSection from "@/component/ui/home-tech-stack-section";
import HomeFeaturedProjectSection from "@/component/ui/home-featured-project-section";
import HomeRecentBlogSection from "@/component/ui/home-recent-blog-section";
import HomeAboutPreviewSection from "@/component/ui/home-about-preview-section";

export function HomePage() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center space-y-16 p-8">
        <HomeHeroSection />
        <HomeTechStackSection />
        <HomeFeaturedProjectSection />
        <HomeRecentBlogSection />
        <HomeAboutPreviewSection />
      </div>
    </PageContainer>
  );
}
