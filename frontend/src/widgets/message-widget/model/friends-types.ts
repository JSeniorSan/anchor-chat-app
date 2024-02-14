import { UserType } from "@/entities/session/model/types";

export type FriendsType = {
  id: string;
  user?: UserType;
  session?: string;
  userId: string;
  userEmail: string;
  userName: string;
};

export type ChatTypes = {
  id: string;
  title: string;
  messages: MessageType[];
  createdAt: Date;
  updatedAt: Date;
  members: UserType[];
};

export type MessageType = {
  id: string;
  createdAt: Date;
  content?: string;
  author: UserType;
  authorId: string;
  chat?: ChatTypes;
  chatId?: string;
};

export type SessionUserType = {
  name: string;
  email: string;
  image: string | null;
};

export type ServerSessionType = {
  user: SessionUserType;
} | null;
