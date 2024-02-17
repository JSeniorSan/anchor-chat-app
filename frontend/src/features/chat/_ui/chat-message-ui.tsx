const ChatMessageUi = ({
  isMe,
  time,
  content,
}: {
  isMe: boolean;
  time: string;
  content: string;
}) => {
  if (isMe) {
    return (
      <div className="w-full flex justify-end p-5">
        <div className="h-fit min-w-[100px] rounded-lg rounded-tr-none bg-cyan-700  bg-opacity-90 flex justify-between max-w-[300px] p-3 relative">
          <p className="pb-3">{content}</p>
          <span className="text-sm text-gray-50 font-thin absolute right-3 bottom-1">
            {time}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-start p-5">
        <div className="h-16 min-w-[100px] rounded-lg rounded-s-none bg-cyan-700 bg-opacity-90 flex max-w-[300px] relative p-3 justify-between">
          <p className="pb-3">{content}</p>
          <span className="text-sm text-gray-50 font-thin absolute right-3 bottom-1">
            {time}
          </span>
        </div>
      </div>
    );
  }
};

export default ChatMessageUi;
