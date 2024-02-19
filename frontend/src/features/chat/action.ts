"use server";

import { createMessage, getMessages } from "./model/db-message";
import { message } from "./pub/chat-area";

export const createMessageAction = async (messageData: message) => {
  try {
    const createdMessage = await createMessage(messageData);
    return createdMessage;
  } catch (error) {
    console.log(error);
  }
};

export const getAllMessagesAction = async (chatId: string) => {
  try {
    const messages = await getMessages(chatId);
    return messages;
  } catch (error) {
    console.log(error);
  }
};
