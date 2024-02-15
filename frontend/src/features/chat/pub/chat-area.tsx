"use client";

import { useEffect, useState } from "react";

import { io } from "socket.io-client";

const ChatArea = () => {
  const socket = io("http://localhost:5000");
  useEffect(() => {
    socket.on("connect", async () => {
      console.log("client connected");
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <section className="w-full bg-transparent border-t border-borderColor h-full flex justify-center items-center">
      <h1 className="text-5xl">Chat logic</h1>
    </section>
  );
};

export default ChatArea;
