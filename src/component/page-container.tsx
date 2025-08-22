import React from "react";
import { NavLinks } from "@/component/navbar";

export function PageContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="relative h-screen">
      <NavLinks />
      {children}
    </div>
  );
}
