import React from "react";
import UserChatUi from "./user-chat-ui";
import { getFriends } from "./actions";

const ChatsWidget = async () => {
  const friends = await getFriends();
  console.log("friends", friends);

  return (
    <div className=" flex flex-col overflow-hidden hover:overflow-y-scroll overflow-x-hidden h-screen">
      {friends?.map((friend) => {
        return <UserChatUi name={friend.userName} />;
      })}
    </div>
  );
};

export default ChatsWidget;
