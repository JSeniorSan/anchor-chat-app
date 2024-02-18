"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { MoreHorizontal, Search } from "lucide-react";

const ChatHeaderClient = ({
  opponentName,
  opponentImage,
}: {
  opponentName: string;
  opponentImage: string;
}) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-1 p-3 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={opponentImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col p-2">
          <h2>{opponentName}</h2>
          <h3 className="text-gray-300">10 min ago</h3>
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

export default ChatHeaderClient;
