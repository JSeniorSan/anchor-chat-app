import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/shared/lib/db";
import { AuthOptions } from "next-auth";
import { UserType } from "./model/types";

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

        try {
          const user = await db.user.findUnique({
            where: {
              email,
            },
          });

          if (user && user?.email == email && user?.password == password) {
            return user as any;
          }
        } catch (error) {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};
