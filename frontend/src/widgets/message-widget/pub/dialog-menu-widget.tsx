import React from "react";
import DialogMenuLayout from "../_ui/layout";
import UserProfileWidget from "../_ui/user-profile-widget";
import FinderWidget from "../_ui/finder-widget";
import StoriesWidget from "../_ui/stories-widget";
import ChatsWidget from "../_ui/chats-widget";

const DialogMenuWidget = () => {
  return (
    <DialogMenuLayout
      chats={<ChatsWidget />}
      finder={<FinderWidget />}
      stories={<StoriesWidget />}
      userProfile={<UserProfileWidget />}
    />
  );
};

export default DialogMenuWidget;
