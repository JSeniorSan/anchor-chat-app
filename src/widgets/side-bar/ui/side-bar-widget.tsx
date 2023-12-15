import Image from "next/image";
import React from "react";
import { Lamp } from "lucide-react";
import Link from "next/link";
import style from "./side-bar-widget.module.scss";
import { SIDE_BAR_DATA } from "../model/side-bar.data";
const SideBarWidget = () => {
  const size = 30;
  return (
    <aside className={style.sideBar}>
      <button>
        <Image
          src="cube-icon.svg"
          alt=""
          width={0}
          height={0}
          style={{ height: "65px", width: "auto" }}
          priority
        />
      </button>
      <div>
        {SIDE_BAR_DATA.map((elem) => {
          return (
            <Link href={elem.url}>
              <elem.Icon size={size} strokeWidth={1} />
            </Link>
          );
        })}
      </div>
      <Lamp size={size} strokeWidth={1} />
    </aside>
  );
};

export default SideBarWidget;
