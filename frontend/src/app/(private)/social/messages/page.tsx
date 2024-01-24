import React from "react";
import styles from "./messages.module.scss";
const Messages = () => {
  return (
    <div className={styles.messages_wrapper}>
      <div className="border">
        <div className="p-4 w-full">Current user</div>
        <div className="p-4 w-full">Chat list</div>
      </div>
      <div className="border">Chat</div>
      <div className="border">Shared</div>
    </div>
  );
};

export default Messages;
