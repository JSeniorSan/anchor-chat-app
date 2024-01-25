import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/shared/lib/db";
import { AuthOptions } from "next-auth";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(db) as AuthOptions["adapter"],
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};
