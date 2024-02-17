import React from "react";

const ChatLayout = ({
  chatHeader,
  chatArea,
}: {
  chatHeader: React.ReactNode;
  chatArea: React.ReactNode;
}) => {
  return (
    <section className="border-l border-borderColor h-screen w-full">
      <div className="flex flex-col h-full w-full">
        {chatHeader}
        {chatArea}
      </div>
    </section>
  );
};

export default ChatLayout;
