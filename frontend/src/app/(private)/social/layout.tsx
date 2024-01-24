import LayoutClient from "@/widgets/side-bar/pub/layout-client";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutClient>{children}</LayoutClient>;
};

export default layout;
