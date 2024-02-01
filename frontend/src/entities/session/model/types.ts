export type UserType =
  | {
      id: string;
      name: string | null;
      email: string | null;
      emailVerified: Date | null;
      image: string | null;
      password: string | null;
      // friends: UserFriendType[];
    }
  | undefined;

export type UserFriendType = {
  id: String;
  user: String;
  name: String;
  email: String;
  image: String;
  session: String;
};
