import React from "react";
import ChatLayout from "../_ui/layout";
import ChatArea from "@/features/chat/pub/chat-area";
import { getChats } from "@/widgets/message-widget/_ui/actions";

const ChatAreaWidget = async () => {
  const { chats, currentUser } = await getChats();

  return (
    <ChatLayout
      chatArea={
        <ChatArea
          chats={chats}
          currentUserName={currentUser?.name!}
          currentUserId={currentUser?.id!}
        />
      }
    />
  );
};

export default ChatAreaWidget;
