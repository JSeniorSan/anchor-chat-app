"use client";

import ChatMessageUi from "./chat-message-ui";
import { messageFromDb } from "../model/db-message";
import { infoMessage } from "../pub/chat-area";
import { useEffect } from "react";
import { useScrollChat } from "../pub/useScrollChat";

const MessagesFolder = ({
  allMessages,
  currentUserId,
  infoMessage,
}: {
  setAllMessages: (data: any[]) => void;
  currentChatId: string;
  allMessages: messageFromDb[];
  currentUserId: string;
  infoMessage: infoMessage[];
}) => {
  const ref = useScrollChat(allMessages);

  return (
    <section
      className="w-full bg-transparent border-t border-borderColor h-full flex flex-col justify-between items-center overflow-auto scroll-smooth"
      ref={ref}
    >
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
