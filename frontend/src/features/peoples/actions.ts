"use server";
import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { db } from "@/shared/lib/db";
import { ServerSessionType } from "@/widgets/message-widget/model/friends-types";
import { getServerSession } from "next-auth";
import { User } from "./model/types";
import { revalidatePath } from "next/cache";
import { UserType } from "@/entities/session/model/types";

export const getAllMembers = async () => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });
  const members = await db.user.findMany({
    include: {
      userFriends: true,
      friendUserFriends: true,
    },
    where: {
      NOT: {
        email: currentUser?.email,
      },
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

  if (currentUser?.id !== member.id) {
    const friend = await db.friend.create({
      data: {
        friendId: member.id,
        status: true,
        userEmail: member.email,
        userName: member.name,
        userId: currentUser?.id,
      },
    });
    const backFriend = await db.friend.create({
      data: {
        friendId: currentUser?.id,
        status: true,
        userEmail: currentUser?.email,
        userName: currentUser?.name,
        userId: member?.id,
      },
    });
    console.log("friend", friend, backFriend);
    revalidatePath("/social/peoples");
  }
};

export const deleteFriend = async (id: string) => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });
  const deletedFirstFriend = await db.friend.delete({
    where: {
      id: id,
      userId: currentUser?.id,
    },
  });
  // const deletedSecondFriend = await db.friend.delete({
  //   where: {
  //     id: currentUser?.id,
  //     userId: id,
  //   },
  // });
  revalidatePath("/social/peoples");
  console.log("deletedFriend", deletedFirstFriend);
};

export const createChat = async (companion: any) => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  const chat = await db.chat.create({
    data: {
      title: companion.name,
      members: {
        create: [currentUser, companion],
      },
    },
    include: {
      members: true,
    },
  });
  return chat;
};
