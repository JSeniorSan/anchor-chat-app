import { db } from "@/shared/lib/db";
import { message } from "./pub/chat-area";
import { UserType } from "@/entities/session/model/types";

export interface messageFromDb extends message {
  author: UserType;
  createdAt: Date;
  id: string;
}

export const createMessage = async (messageData: message) => {
  try {
    const message = await db.message.create({
      include: {
        author: true,
      },
      data: messageData,
    });
    return message;
  } catch (error) {
    console.log(error);
  }
};
export const getMessages = async (chatId: string) => {
  const messages = await db.message.findMany({
    include: {
      author: true,
    },
    where: {
      chatId: chatId,
    },
  });
  return messages;
};
