"use client";

import React from "react";
import styles from "./side-bar-widget.module.scss";

const LayoutSideBar = ({
  logo,
  mode,
  navElements,
  actions,
  profile,
}: {
  logo?: React.ReactNode;
  mode?: React.ReactNode;
  navElements?: React.ReactNode;
  actions?: React.ReactNode;
  profile?: React.ReactNode;
}) => {
  return (
    <nav className={styles.sideBar}>
      {logo}
      {actions}
      {profile}
      {navElements}
      {mode}
    </nav>
  );
};

export default LayoutSideBar;
