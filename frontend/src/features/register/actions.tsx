"use server";
import { db } from "@/shared/lib/db";
import { createUserType } from "./model/types";

export async function createUser(data: createUserType) {
  await db.user.create({
    data: data,
  });
}
