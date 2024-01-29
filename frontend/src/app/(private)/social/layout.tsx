"use client";
import LayoutClient from "@/widgets/side-bar/pub/layout-client";
import React, { useLayoutEffect } from "react";
import AuthHoc from "@/entities/auth-hoc/auth-hoc";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutClient>{children}</LayoutClient>;
};

export default AuthHoc(Layout);
