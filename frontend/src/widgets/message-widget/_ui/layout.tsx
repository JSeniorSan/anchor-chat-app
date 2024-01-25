import React from "react";

const DialogMenuLayout = ({
  userProfile,
  stories,
  finder,
  chats,
}: {
  userProfile?: React.ReactNode;
  stories?: React.ReactNode;
  finder?: React.ReactNode;
  chats?: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col w-full h-screen ">
      {userProfile}
      {finder}
      {stories}
      {chats}
    </section>
  );
};

export default DialogMenuLayout;
