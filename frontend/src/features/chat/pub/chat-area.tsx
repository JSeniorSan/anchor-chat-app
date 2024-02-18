"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatKeyboard from "../_ui/chat-keyboard";
import ChatHeaderClient from "@/widgets/chat-widget/_ui/chat-header-client";
import { usePathname } from "next/navigation";
import MessagesFolder from "../_ui/messages-folder";

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
  const [chatArr, setChatArr] = useState<message[]>([]);
  const [socket, setSocket] = useState<any>(undefined);

  const pathChatId = usePathname().split("/").at(-1);
  console.log("path", pathChatId);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    setSocket(socket);

    socket.on("connect", () => {
      console.log("client connected");
    });

    socket.on("responseEvent", (data: message) => {
      setChatArr((prev) => {
        return [...prev, data];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = (data: message) => {
    socket.emit("sendMessage", data);
  };

  const currentChat = chats.find((chat: any) => {
    return chat?.id === pathChatId;
  });
  console.log("currentChat", currentChat);

  const currentOpponent = currentChat.members.find(
    (member: any) => member.name !== currentUserName
  );

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
        />
      </div>
      <ChatKeyboard
        onSendMessage={handleSendMessage}
        chatId={currentChat.id}
        currentUserId={currentUserId}
      />
    </div>
  );
};

export default ChatArea;
