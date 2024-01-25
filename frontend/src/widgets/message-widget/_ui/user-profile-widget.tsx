import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import OnlineTag from "@/shared/ui/online-tag";
import React from "react";
import MenuItems from "./menu-items";

const UserProfileWidget = () => {
  return (
    <div className="flex justify-between p-3 items-center border-b border-borderColor">
      <div className="flex gap-2 items-center justify-start ">
        <div className="relative w-fit">
          <Avatar className="w-12 h-12 z-0">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <OnlineTag className="absolute bottom-1 right-0 z-10" />
        </div>

        <div className="flex flex-col p-3">
          <p className="text-md">Name</p>
          <p className="text-xs text-gray-400">Info</p>
        </div>
      </div>
      <MenuItems />
    </div>
  );
};

export default UserProfileWidget;
