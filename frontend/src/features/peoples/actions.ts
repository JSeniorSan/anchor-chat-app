import { db } from "@/shared/lib/db";

export const getAllMembers = async () => {
  const members = await db.user.findMany();
  return members;
};
