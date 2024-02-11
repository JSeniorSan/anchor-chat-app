// "use client";
import React from "react";
import { getChats } from "./actions";
import { Button } from "@/shared/ui/button";
import { deleteAllChats } from "@/features/peoples/actions";
import UserChatUi from "./user-chat-ui";

const ChatsWidget = async () => {
  const { chats, currentUser } = await getChats();

  // const handleDelete = async () => {
  //   await deleteAllChats();
  // };

  return (
    <div className=" flex flex-col overflow-hidden hover:overflow-y-scroll overflow-x-hidden h-screen">
      {chats.map((chat) => {
        const requiredMember = chat.members.filter(
          (member) => member.name !== currentUser?.name
        );
        const member = requiredMember[0];
        console.log("memberImage", member);

        return (
          <UserChatUi key={chat.id} name={member.name} image={member.image!} />
        );
      })}
      {/* <Button onClick={handleDelete}>Delete all chats</Button> */}
    </div>
  );
};

export default ChatsWidget;
