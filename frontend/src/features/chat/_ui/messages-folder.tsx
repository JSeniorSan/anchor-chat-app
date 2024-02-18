"use client";
import { createMessage } from "../action";
import ChatMessageUi from "./chat-message-ui";
import { message } from "../pub/chat-area";

const MessagesFolder = ({
  currentChatId,
  allMessages,
  currentUserId,
}: {
  currentChatId: string;
  allMessages: message[];
  currentUserId: string;
}) => {
  //   const [messages, setMessages] = useState<any[]>([]);
  //   useEffect(() => {
  //     const getAllMessages = async () => {
  //       const allMessages = await getMessages(currentChatId);
  //       console.log("messages", allMessages);

  //       setMessages(allMessages!);
  //     };
  //     getAllMessages();
  //   }, []);

  //   useEffect(() => {
  //     setMessages((prev: any) => {
  //       return [...prev, ...allMessages];
  //     });
  //   }, [allMessages]);

  return (
    <section className="w-full bg-transparent border-t border-borderColor h-full flex flex-col justify-between items-center overflow-auto">
      <div className="flex flex-col items-start w-full ">
        {allMessages.map((message: any, i: any) => {
          return (
            <ChatMessageUi
              content={message.content!}
              isMe={message.authorId === currentUserId}
              time={message.createdAt}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MessagesFolder;
