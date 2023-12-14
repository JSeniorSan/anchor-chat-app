import Image from "next/image";
import React from "react";

const SideBarWidget = () => {
  return (
    <aside className="w-40 h-full border flex flex-col items-center justify-between gap-5 bg-slate-700 py-5 border-gray-300">
      <div>
        <Image src="cube-icon.svg" alt="" width={60} height={60} />
      </div>
      <div className="flex flex-col gap-10">
        <Image src="users.svg" alt="" width={40} height={40} />
        <Image src="phone.svg" alt="" width={40} height={40} />
        <Image src="cog.svg" alt="" width={40} height={40} />
        <Image src="messages-square.svg" alt="" width={40} height={40} />
      </div>
      <div>
        <Image src="lamp-desk.svg" alt="" width={40} height={40} />
      </div>
    </aside>
  );
};

export default SideBarWidget;
