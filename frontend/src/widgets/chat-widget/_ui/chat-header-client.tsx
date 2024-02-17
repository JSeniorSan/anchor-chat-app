"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { ChatTypes } from "@/widgets/message-widget/model/friends-types";
import { MoreHorizontal, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const ChatHeaderClient = ({ chats }: { chats: any }) => {
  const pathChatId = usePathname().split("/").at(-1);

  const currentChat = chats.find((chat: any) => {
    return chat?.id === pathChatId;
  });

  const { image } = currentChat!.members.find((member: any) => {
    return member.name === currentChat!.title;
  })!;

  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-1 p-3 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image!} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col p-2">
          <h2>{currentChat!.title}</h2>
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