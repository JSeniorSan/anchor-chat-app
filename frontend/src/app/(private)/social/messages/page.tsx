import React from "react";
import styles from "./messages.module.scss";
import DialogMenuWidget from "@/widgets/message-widget/pub/dialog-menu-widget";
import ChatAreaWidget from "@/widgets/chat-widget/pub/chat-area-widget";
const Messages = () => {
  return (
    <div className={styles.messages_wrapper}>
      <DialogMenuWidget />
      <ChatAreaWidget />
      <div className="border">SharedChatAreaWidget</div>
    </div>
  );
};

export default Messages;
