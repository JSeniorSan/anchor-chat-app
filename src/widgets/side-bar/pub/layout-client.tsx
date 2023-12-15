import React from "react";
import SideBarWidget from "../ui/side-bar-widget";
import style from "./layout-client.module.scss";
const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.sidebarLayout}>
      <SideBarWidget />
      {children}
    </div>
  );
};

export default LayoutClient;
