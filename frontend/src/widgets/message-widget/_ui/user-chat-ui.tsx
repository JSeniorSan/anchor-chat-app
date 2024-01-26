import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import React from "react";

const UserChatUi = ({ name }: { name: string }) => {
  return (
    <div className="p-3 transition-all ease-in-out flex w-full hover:bg-slate-400 hover:cursor-pointer items-center border-y border-borderColor">
      <Avatar className="w-16 h-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex justify-between p-3 w-full">
        <div className="flex flex-col gap-1">
          <div>{name}</div>
          <div> message</div>
        </div>
        <div className="flex flex-col gap-1">
          <div> time</div>
          <div> tag</div>
        </div>
      </div>
    </div>
  );
};

export default UserChatUi;
