import React from "react";
import { NavBar } from "@/component/ui/navbar";
import LightRays from "@/component/background/spotlight";

export default function PageContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      <div className="fixed inset-0 z-[-1]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="h-full overflow-y-auto pt-20 pb-20 md:pb-8">{children}</div>
    </div>
  );
}
