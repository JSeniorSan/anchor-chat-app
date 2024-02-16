import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { db } from "@/shared/lib/db";
import { ServerSessionType } from "@/widgets/message-widget/model/friends-types";
import { getServerSession } from "next-auth";

export const getCurrentUser = async () => {
  const session: ServerSessionType = await getServerSession(GET);
  const currentUser = await db.user.findFirst({
    include: {
      chats: true,
      userFriends: true,
    },
    where: {
      email: session?.user.email,
    },
  });
  return currentUser;
};
