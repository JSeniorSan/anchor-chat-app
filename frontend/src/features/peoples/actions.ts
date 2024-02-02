import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { UserType } from "@/entities/session/model/types";
import { db } from "@/shared/lib/db";
import { ServerSessionType } from "@/widgets/message-widget/model/friends-types";
import { getServerSession } from "next-auth";

export const getAllMembers = async () => {
  const members = (await db.user.findMany()) as UserType[];
  return members;
};

export const updateUserFriendList = async (member: UserType) => {
  const session: ServerSessionType = await getServerSession(GET);
  const user = await db.user.findFirst({
    where: {
      email: session?.user.email,
    },
  });

  // const newFriend = await db.friend.create({
  //   data: {
  //     userName: member.name!,
  //     user: user,
  //     userId: user?.id,
  //   },
  // });
  // const newFriend = await db.user.update({
  //   where: {
  //     email: session?.user.email,
  //   },
  //   data: {
  //     friends: {
  //       userName: user?.name,
  //       id: user?.id,
  //       session: user?.currentSession,
  //       userEmail: user?.email,
  //     },
  //   },
  // });
};
