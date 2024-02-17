"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatKeyboard from "../_ui/chat-keyboard";

export interface message {
  author: string;
  content: string | undefined;
  image: string;
  time: string;
}

const ChatArea = () => {
  const [chatArr, setChatArr] = useState<message[]>([]);
  const socket = io("http://localhost:5000");

  useEffect(() => {
    socket.on("connect", async () => {
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
            <h1 key={i} className="p-5">
              {chat.content}
            </h1>
          );
        })}
      </div>
      <ChatKeyboard onSendMessage={handleSendMessage} />
    </section>
  );
};

export default ChatArea;
