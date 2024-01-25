import React from "react";
import styles from "./messages.module.scss";
import DialogMenuWidget from "@/widgets/message-widget/pub/dialog-menu-widget";
const Messages = () => {
  return (
    <div className={styles.messages_wrapper}>
      <DialogMenuWidget />
      <div className="border">Chat</div>
      <div className="border">Shared</div>
    </div>
  );
};

export default Messages;
