export type UserType =
  | {
      id: string;
      username: string | null;
      name: string | null;
      email: string | null;
      emailVerified: Date | null;
      image: string | null;
      password: string | null;
    }
  | undefined;
