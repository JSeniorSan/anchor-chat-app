"use server";
import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { db } from "@/shared/lib/db";
import { ServerSessionType } from "@/widgets/message-widget/model/friends-types";
import { getServerSession } from "next-auth";
import { User } from "./model/types";

export const getAllMembers = async () => {
  const members = await db.user.findMany({
    include: {
      userFriends: true,
    },
  });
  return members;
};

export const createUserFriend = async (member: User) => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  console.log("currentUser", currentUser);

  const friend = await db.friend.create({
    data: {
      id: member.id,
      status: true,
      userEmail: currentUser?.email,
      userName: member.name,
      userId: currentUser?.id,
    },
  });
  console.log("friend", friend);
};
