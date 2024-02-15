import React from "react";
import ChatLayout from "../_ui/layout";
import ChatHeader from "../_ui/chat-header";
import ChatArea from "@/features/chat/pub/chat-area";
import ChatKeyboard from "@/features/chat/pub/chat-keyboard";
import { getSpecificChat } from "@/widgets/message-widget/_ui/actions";
import { headers } from "next/headers";
const ChatAreaWidget = async () => {
  const _headers = headers();
  const currentUrl = _headers.get("x-url");
  const idString = currentUrl?.split("/").at(-1);
  const { specificChat, currentUser } = await getSpecificChat(idString!);

  return (
    <ChatLayout
      chatHeader={
        <ChatHeader
          name={specificChat?.title!}
          image={
            specificChat?.members.find(
              (member) => member.name !== currentUser?.name
            )?.image!
          }
          activity="10 min ago"
        />
      }
      chatArea={<ChatArea />}
      chatKeyboard={<ChatKeyboard />}
    />
  );
};

export default ChatAreaWidget;
