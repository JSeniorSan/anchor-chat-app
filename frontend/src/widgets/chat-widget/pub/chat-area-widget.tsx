import React from "react";
import ChatLayout from "../_ui/layout";
import ChatArea from "@/features/chat/pub/chat-area";
import ChatKeyboard from "@/features/chat/_ui/chat-keyboard";
import { getChats } from "@/widgets/message-widget/_ui/actions";
import ChatHeaderClient from "../_ui/chat-header-client";

const ChatAreaWidget = async () => {
  const { chats, currentUser } = await getChats();

  return (
    <ChatLayout
      chatHeader={
        <ChatHeaderClient chats={chats} currentUserName={currentUser?.name!} />
      }
      chatArea={<ChatArea />}
    />
  );
};

export default ChatAreaWidget;
