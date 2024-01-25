import React from "react";
import { friendsArray } from "../model/friends-stories.data";
import UserChatUi from "./user-chat-ui";

const ChatsWidget = () => {
  return (
    <section className=" flex flex-col overflow-hidden hover:overflow-y-scroll overflow-x-hidden h-screen">
      {friendsArray.map((obj) => {
        return <UserChatUi name={obj.name} />;
      })}
    </section>
  );
};

export default ChatsWidget;
