import { useState } from "react";
import { AnimatedHello } from "@/component/hello";
import { AnimationToggle } from "@/component/animation-toggle";
import { PageContainer } from "@/component/page-container";

export function HomePage() {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <PageContainer>
      <AnimationToggle
        isAnimating={isAnimating}
        onToggle={() => setIsAnimating(!isAnimating)}
      />
      <div className="flex justify-center items-center h-full">
        <AnimatedHello isAnimating={isAnimating} />
      </div>
    </PageContainer>
  );
}
