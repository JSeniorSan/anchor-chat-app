import { Input } from "@/shared/ui/input";
import {
  ArrowRightCircleIcon,
  Mic,
  Paperclip,
  StickerIcon,
} from "lucide-react";
import React from "react";

const ChatKeyboard = () => {
  return (
    <div className="w-full h-auto flex items-center gap-2 p-3 border-borderColor py-6">
      <Paperclip size={"35px"} className="stroke-1" />
      <Input
        type="text"
        placeholder="Write a message"
        className="w-full focus-visible:ring-0"
      />
      <ArrowRightCircleIcon size={"50px"} className="stroke-1" />
      <StickerIcon size={"35px"} className="stroke-1" />
      <Mic size={"35px"} className="stroke-1" />
    </div>
  );
};

export default ChatKeyboard;
