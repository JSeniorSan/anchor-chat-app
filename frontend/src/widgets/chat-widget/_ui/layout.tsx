import React from "react";

const ChatLayout = ({
  chatHeader,
  chatArea,
  chatKeyboard,
}: {
  chatHeader: React.ReactNode;
  chatArea: React.ReactNode;
  chatKeyboard: React.ReactNode;
}) => {
  return (
    <section className="border-l border-borderColor h-screen">
      <div className="flex flex-col h-full">
        {chatHeader}
        {chatArea}
        {chatKeyboard}
      </div>
    </section>
  );
};

export default ChatLayout;
