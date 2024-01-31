import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/shared/lib/db";
import { AuthOptions } from "next-auth";

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

        // const user = await db.user.findUnique({
        //   where: {
        //     email,
        //     password,
        //   },
        // });
        // console.log("user", user);
        const user = {
          email: "vip007_007@mail.ru",
          password: "Vbif23_7",
          id: "12345",
        };

        if (user && email === "vip007_007@mail.ru" && password === "Vbif23_7") {
          console.log("sign in", user.id, user.email);
          return { id: user.id, email: user.email };
        } else {
          console.log("register");
          // const newUser = await db.user.create({
          //   data: {
          //     email: email,
          //     password: password,
          //   },
          // });

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
