import React from "react";
import ChatLayout from "../_ui/layout";
import ChatHeader from "../_ui/chat-header";
import ChatArea from "@/features/chat/pub/chat-area";
import ChatKeyboard from "@/features/chat/pub/chat-keyboard";

const ChatAreaWidget = () => {
  return (
    <ChatLayout
      chatHeader={<ChatHeader />}
      chatArea={<ChatArea />}
      chatKeyboard={<ChatKeyboard />}
    />
  );
};

export default ChatAreaWidget;
