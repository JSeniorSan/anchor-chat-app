"use server";
import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { db } from "@/shared/lib/db";
import { ServerSessionType } from "@/widgets/message-widget/model/friends-types";
import { getServerSession } from "next-auth";
import { User } from "./model/types";
import { revalidatePath } from "next/cache";

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
  username: string,
  email: string,
  userId: string,
  image: string
) => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  const guardFriend = await db.friend.findFirst({
    where: {
      friendEmail: email,
      userId: userId,
    },
  });

  if (!guardFriend) {
    const createFirstUser = await db.friend.create({
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
    const createSecondUser = await db.friend.create({
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

    //
    console.log(
      "currentUser",
      currentUser,
      "firstFriend",
      createFirstUser,
      "secondFriend",
      createSecondUser
    );
  }

  console.log("current", currentUser);

  // await db.friend.createMany({
  //   data: [
  //     {
  //       status: true,
  //       userName: member.name,
  //       userId: currentUser?.id,
  //       friendEmail: member.email,
  //     },
  //     {
  //       status: true,
  //       userName: currentUser?.name,
  //       userId: member?.id,
  //       friendEmail: currentUser?.email,
  //     },
  //   ],
  // });
  // const friends = await db.friend.findMany();

  revalidatePath("/social/peoples");
};

export const deleteFriend = async (
  userId: string,
  id: string,
  email: string
) => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });
  const friends = await db.friend.deleteMany();
  // const deletedFirstFriend = await db.friend.delete({
  //   where: {
  //     userId: id,
  //   },
  // });
  // const updatedFirstFriend = await db.user.update({
  //   where: {
  //     id: userId,
  //   },
  //   include: {
  //     userFriends: true,
  //   },
  //   data: {
  //     userFriends: {
  //       disconnect: {
  //         id: id,
  //       },
  //     },
  //   },
  // });

  // console.log("deletedFriend", updatedFirstFriend);
  // console.log(
  //   id,
  //   "email",
  //   email,
  //   "friends",
  //   friends,
  //   "id",
  //   id,
  //   "current",
  //   currentUser
  // );
  revalidatePath("/social/peoples");
};

// -------------------------------------------------------

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

// const updateFirstFriendship = await db.user.update({
//   where: {
//     id: currentUser?.id,
//   },
//   include: {
//     userFriends: true,
//   },
//   data: {
//     userFriends: {
//       create: {
//         image: image,
//         userName: username,
//         status: true,
//         friendEmail: email,
//         friendId: currentUser?.id,
//       },
//     },
//   },
// });

// //
// const updateSecondFriendship = await db.user.update({
//   where: {
//     email: email,
//   },
//   include: {
//     userFriends: true,
//   },
//   data: {
//     userFriends: {
//       create: {
//         image: currentUser?.image,
//         userName: currentUser?.name,
//         status: true,
//         friendEmail: currentUser?.email,
//         friendId: userId,
//       },
//     },
//   },
// });
