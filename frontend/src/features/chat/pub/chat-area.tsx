"use client";

import { useEffect, useState } from "react";
import ChatKeyboard from "../_ui/chat-keyboard";
import ChatHeaderClient from "@/widgets/chat-widget/_ui/chat-header-client";
import { usePathname } from "next/navigation";
import MessagesFolder from "../_ui/messages-folder";
import { createMessageAction, getAllMessagesAction } from "../action";
import { messageFromDb } from "../model/db-message";
import { socket } from "@/entities/socket/create-socket";

export interface message {
  authorId: string;
  content: string | undefined;
  chatId: string;
}

const ChatArea = ({
  chats,
  currentUserName,
  currentUserId,
}: {
  chats: any;
  currentUserName: string;
  currentUserId: string;
}) => {
  const [chatArr, setChatArr] = useState<messageFromDb[]>([]);
  const pathChatId = usePathname().split("/").at(-1);
  const currentChat = chats.find((chat: any) => {
    return chat?.id === pathChatId;
  });

  const currentOpponent = currentChat.members.find(
    (member: any) => member.name !== currentUserName
  );

  useEffect(() => {
    const getAllMessagesFn = async () => {
      const allMessagesFromDb = await getAllMessagesAction(pathChatId!);
      setChatArr(allMessagesFromDb! as any);
    };

    getAllMessagesFn();

    socket.on("connect", () => {
      console.log("client connected");
    });

    socket.on("responseEvent", async (data: messageFromDb) => {
      console.log("responseMessage");

      setChatArr((prev: any) => {
        return [...prev, data];
      });
    });

    return () => {
      socket.off("responseEvent");
    };
  }, []);

  const handleSendMessage = async (data: message) => {
    const responseMessage = await createMessageAction(data);
    socket.emit("sendMessage", responseMessage);
  };

  return (
    <div className="h-[calc(100vh-200.5px)] w-full">
      <ChatHeaderClient
        opponentName={currentOpponent.name}
        opponentImage={currentOpponent.image}
      />

      <div className="w-full bg-transparent border-t border-borderColor h-full flex flex-col justify-between items-center ">
        <MessagesFolder
          currentChatId={currentChat.id}
          allMessages={chatArr}
          currentUserId={currentUserId}
          setAllMessages={setChatArr}
        />
      </div>
      <ChatKeyboard
        chatId={currentChat.id}
        currentUserId={currentUserId}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatArea;
