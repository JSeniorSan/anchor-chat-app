import React from "react";
import styles from "./layout-client.module.scss";
import LayoutSideBar from "../_ui/layout";
import { ModeToggle } from "@/features/theme/toggle-theme";
import { LogoIcon } from "@/shared/ui/logo-icon";
import SideBarNavElements from "../_ui/nav-elements";
import Logo from "../_ui/logo";

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.sidebarLayout}>
      <LayoutSideBar
        logo={<Logo icon={<LogoIcon />} />}
        mode={<ModeToggle />}
        navElements={<SideBarNavElements />}
      />
      {children}
    </div>
  );
};

export default LayoutClient;
