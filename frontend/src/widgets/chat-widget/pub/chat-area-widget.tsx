import React from "react";
import ChatLayout from "../_ui/layout";
import ChatHeader from "../_ui/chat-header";
import ChatArea from "@/features/chat/pub/chat-area";
import ChatKeyboard from "@/features/chat/pub/chat-keyboard";
import {
  getChats,
  getSpecificChat,
} from "@/widgets/message-widget/_ui/actions";
import { headers } from "next/headers";
const ChatAreaWidget = async () => {
  // const { chats, currentUser } = await getChats();
  // console.log("chats_all", chats);
  const _headers = headers();
  const currentUrl = _headers.get("x-url");
  const idString = currentUrl?.split("/").at(0);
  console.log("id_string", idString);

  // const chat = await getSpecificChat();

  return (
    <ChatLayout
      chatHeader={<ChatHeader name="vanya" image="" activity="10 min ago" />}
      chatArea={<ChatArea />}
      chatKeyboard={<ChatKeyboard />}
    />
  );
};

export default ChatAreaWidget;
