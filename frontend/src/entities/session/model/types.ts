import {
  ChatTypes,
  FriendsType,
} from "@/widgets/message-widget/model/friends-types";

export type UserType = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  password: string | null;
  friends: FriendsType[];
  chats: ChatTypes[];
  currentSession: string;
};
