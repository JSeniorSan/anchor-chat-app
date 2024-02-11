"use server";
import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { db } from "@/shared/lib/db";
import { ServerSessionType } from "@/widgets/message-widget/model/friends-types";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    },
    where: {
      NOT: {
        email: currentUser?.email,
      },
    },
  });
  return members;
};

export const createUserFriend = async (
  email: string,
  username: string,
  userId: string,
  image: string
) => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  await db.friend.create({
    include: {
      user: true,
    },
    data: {
      image: image,
      userName: username,
      status: true,
      friendEmail: email,
      userId: currentUser?.id,
    },
  });
  await db.friend.create({
    include: {
      user: true,
    },
    data: {
      image: currentUser?.image,
      userName: currentUser?.name,
      status: true,
      friendEmail: currentUser?.email,
      userId: userId,
    },
  });

  const friends = await db.friend.findMany({
    include: {
      user: true,
    },
  });
  console.log("friends", friends);

  revalidatePath("/social/peoples");
};

export const deleteFriend = async (email: string) => {
  const session: ServerSessionType = await getServerSession(GET);
  console.log("first");

  const currentUser = await db.user.findUnique({
    where: {
      email: session?.user.email,
    },
  });
  console.log("second");

  // await db.friend.deleteMany();

  await db.friend.deleteMany({
    where: {
      userId: currentUser?.id,
      friendEmail: email,
    },
  });
  console.log("third", currentUser?.id, email);

  const opponent = await db.user.findFirst({
    where: {
      email: email,
    },
  });
  console.log("forth", opponent, email);

  await db.friend.deleteMany({
    where: {
      userId: opponent?.id,
      friendEmail: currentUser?.email,
    },
  });

  const allFriendsAfterDelete = await db.friend.findMany({
    include: {
      user: true,
    },
  });
  console.log("fifth", allFriendsAfterDelete);

  revalidatePath("/social/peoples");
};

// -------------------------------------------------------

export const createChat = async (name: string, image: string) => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });
  const chatMember = (await db.chat.findMany()).find(
    (chat) => chat.title === name
  );

  console.log("chatMember1", chatMember);

  if (!chatMember) {
    const chat = await db.chat.create({
      data: {
        title: name,
        members: {
          create: [
            {
              name: currentUser?.name,
              image: currentUser?.image,
              // email: currentUser?.email,
            },
            {
              name: name,
              image: image,
              // email: email,
            },
          ],
        },
      },
      include: {
        members: true,
      },
    });
    console.log("chat", chat, chatMember);
  }

  redirect(`/social/messages/${name.split(" ").join("")}`);
};

export const deleteAllChats = async () => {
  await db.chat.deleteMany();
  revalidatePath("/social/messages");
};
