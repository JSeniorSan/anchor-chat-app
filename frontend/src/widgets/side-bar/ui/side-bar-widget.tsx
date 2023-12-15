"use client";
import Image from "next/image";
import React from "react";
import { Lamp } from "lucide-react";
import Link from "next/link";
import styles from "./side-bar-widget.module.scss";
import { SIDE_BAR_DATA } from "../model/side-bar.data";
import { usePathname } from "next/navigation";
import { cn } from "../../../shared/ui/utils";

const SideBarWidget = () => {
  const pathName = usePathname();
  const size = 30;
  console.log("ef", pathName);

  return (
    <aside className={styles.sideBar}>
      <Link href="/">
        <Image
          src="cube-icon.svg"
          alt=""
          width={0}
          height={0}
          style={{ height: "65px", width: "auto" }}
          priority
        />
      </Link>
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
      <Lamp size={size} strokeWidth={1} />
    </aside>
  );
};

export default SideBarWidget;
