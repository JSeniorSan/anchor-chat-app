import { Input } from "@/shared/ui/input";
import { Mic, Paperclip, StickerIcon } from "lucide-react";
import React from "react";

const ChatKeyboard = () => {
  return (
    <div className="w-full h-14 flex items-center gap-2 p-3 border-t border-borderColor py-10">
      <Paperclip size={"35px"} className="stroke-1" />
      <Input
        type="text"
        placeholder="Write a message"
        className="w-full focus-visible:ring-0"
      />
      <StickerIcon size={"35px"} className="stroke-1" />
      <Mic size={"35px"} className="stroke-1" />
    </div>
  );
};

export default ChatKeyboard;
