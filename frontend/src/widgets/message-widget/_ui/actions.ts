"use server";

import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { db } from "@/shared/lib/db";
import { getServerSession } from "next-auth";
import { ServerSessionType } from "../model/friends-types";

export async function getChats() {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  const chats = await db.chat.findMany({
    where: {
      members: {
        some: {
          email: currentUser?.email,
        },
      },
    },
    include: {
      members: true,
    },
  });
  console.log("chats", chats);

  return chats;
}
