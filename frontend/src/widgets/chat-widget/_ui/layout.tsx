import React from "react";

const ChatLayout = ({ chatArea }: { chatArea: React.ReactNode }) => {
  return (
    <section className="border-l border-borderColor h-screen w-full ">
      <div className="flex flex-col h-[calc(100vh-93.5px)] w-full ">
        {chatArea}
      </div>
    </section>
  );
};

export default ChatLayout;
