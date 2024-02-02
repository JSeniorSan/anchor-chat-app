import styles from "./messages.module.scss";
import DialogMenuWidget from "@/widgets/message-widget/pub/dialog-menu-widget";

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.messages_wrapper}>
      <DialogMenuWidget />
      {children}
    </div>
  );
};

export default MessagesLayout;
