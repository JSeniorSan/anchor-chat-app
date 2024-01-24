"use client";

import React from "react";
import styles from "./side-bar-widget.module.scss";
import { SIDE_BAR_DATA } from "../model/side-bar.data";
import Link from "next/link";
import { cn } from "@/shared/ui/utils";
import { usePathname } from "next/navigation";

const SideBarNavElements = () => {
  const pathName = usePathname();
  const size = 30;

  return (
    <div>
      {SIDE_BAR_DATA.map((elem, i) => {
        return (
          <Link href={elem.url} key={i}>
            <elem.Icon
              size={size}
              strokeWidth={1}
              className={cn({
                [styles.active]: pathName === elem.url,
              })}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarNavElements;
