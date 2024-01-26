"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { MoreHorizontal, Search } from "lucide-react";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-1 p-3 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col p-2">
          <h2>Name</h2>
          <h3 className="text-gray-300">8 minets ago</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center p-3">
        <div>
          <Search />
        </div>
        <div>
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
