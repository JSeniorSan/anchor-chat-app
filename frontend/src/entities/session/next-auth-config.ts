import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/shared/lib/db";
import { AuthOptions } from "next-auth";
import { createUser, getUser } from "./actions";

export const nextAuthConfig: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
  adapter: PrismaAdapter(db) as AuthOptions["adapter"],
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log("scheme", email, password);

        const { auth, user } = await getUser(email, password);

        console.log("user", user, auth);

        if (auth) {
          return user;
        } else {
          console.log("register");
          await createUser(password, email);

          return null as any;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};
