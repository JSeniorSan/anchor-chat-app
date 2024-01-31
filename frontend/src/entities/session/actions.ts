import { db } from "@/shared/lib/db";

export async function getUser(email: string, password: string) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  console.log("user2", user);

  if (user && user?.email == email && user?.password == password) {
    return {
      user,
      auth: true,
    };
  } else {
    return {
      auth: false,
    };
  }
}

export async function createUser(email: string, password: string) {
  await db.user.create({
    data: {
      email: email,
      password: password,
    },
  });

  const { user } = await getUser(email, password);

  return user;
}
