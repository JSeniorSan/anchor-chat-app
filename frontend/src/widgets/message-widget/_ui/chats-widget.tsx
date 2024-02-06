import React from "react";
import UserChatUi from "./user-chat-ui";
import { getChats } from "./actions";

const ChatsWidget = async () => {
  const chats = await getChats();
  console.log("friends", chats);

  return (
    <div className=" flex flex-col overflow-hidden hover:overflow-y-scroll overflow-x-hidden h-screen">
      {chats.map((chat) => {
        return <div>{chat.title}</div>;
      })}
    </div>
  );
};

export default ChatsWidget;
