"use client";
import { Input } from "@/shared/ui/input";
import {
  ArrowRightCircleIcon,
  Mic,
  Paperclip,
  StickerIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { message } from "../pub/chat-area";

type SendFn = (data: message) => void;

const ChatKeyboard = ({
  onSendMessage,
  currentUserId,
  chatId,
}: {
  onSendMessage: SendFn;
  currentUserId: string;
  chatId: string;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  console.log("message content", inputValue);

  // const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   onSendMessage({
  //     author: "ira",
  //     content: ref.current?.value,
  //     image: "",
  //     time: "9:00",
  //   });
  // };

  const handleClick = () => {
    onSendMessage({
      authorId: currentUserId,
      content: inputValue,
      chatId: chatId,
    });
    setInputValue("");
  };

  return (
    <div
      className="w-full h-auto flex items-center gap-2 p-3 border-borderColor py-6  "
      // onSubmit={handleForm}
    >
      <Paperclip size={"35px"} className="stroke-1" />

      <Input
        type="text"
        placeholder="Write a message"
        className="w-full focus-visible:ring-0"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />

      <ArrowRightCircleIcon
        size={"50px"}
        className="stroke-1 "
        onClick={handleClick}
      />

      <StickerIcon size={"35px"} className="stroke-1" />
      <Mic size={"35px"} className="stroke-1" />
    </div>
  );
};

export default ChatKeyboard;
