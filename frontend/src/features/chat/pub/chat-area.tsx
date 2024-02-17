"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatKeyboard from "../_ui/chat-keyboard";
import ChatMessageUi from "../_ui/chat-message-ui";

export interface message {
  author: string;
  content: string | undefined;
  image: string;
  time: string;
}

const ChatArea = ({
  currentUserName,
  currentUserImage,
}: {
  currentUserName: string;
  currentUserImage: string;
}) => {
  const [chatArr, setChatArr] = useState<message[]>([]);
  const [socket, setSocket] = useState<any>(undefined);

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

  return (
    <section className="w-full bg-transparent border-t border-borderColor h-full flex flex-col justify-between items-center">
      <div className="flex flex-col items-start w-full">
        {chatArr.map((chat, i) => {
          return (
            <ChatMessageUi
              content={chat.content!}
              isMe={chat.author === currentUserName}
              time={chat.time}
              key={i}
            />
          );
        })}
      </div>
      <ChatKeyboard
        onSendMessage={handleSendMessage}
        currentUserName={currentUserName}
        currentUserImage={currentUserImage}
      />
    </section>
  );
};

export default ChatArea;
