"use server";

import { GET } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { db } from "@/shared/lib/db";
import { getServerSession } from "next-auth";
import { ServerSessionType } from "../model/friends-types";

// export async function getFriends() {
//   const session: ServerSessionType = await getServerSession(GET);
//   console.log("session", session);

//   const friends = await db.friend.findMany({
//     where: {
//       userEmail: session?.user?.email,
//     },
//   });
//   console.log(friends);

//   return friends;
// }
