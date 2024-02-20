"use client";

import ChatMessageUi from "./chat-message-ui";
import { messageFromDb } from "../model/db-message";
// import { useEffect, useLayoutEffect } from "react";
// import { getAllMessagesAction } from "../action";

const MessagesFolder = ({
  // currentChatId,
  allMessages,
  currentUserId,
}: // setAllMessages,
{
  setAllMessages: (data: any[]) => void;
  currentChatId: string;
  allMessages: messageFromDb[];
  currentUserId: string;
}) => {
  console.log("conyent", allMessages);

  return (
    <section className="w-full bg-transparent border-t border-borderColor h-full flex flex-col justify-between items-center overflow-auto ">
      <div className="flex flex-col items-start w-full ">
        {allMessages.map((message: any, i: any) => {
          return (
            <ChatMessageUi
              content={message?.content}
              isMe={message?.authorId === currentUserId}
              time={message?.createdAt}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MessagesFolder;
