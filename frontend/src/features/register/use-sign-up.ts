"use client";
import { db } from "@/shared/lib/db";
import { useMutation } from "@tanstack/react-query";

const useSignUp = (email: string, password: string, username: string) => {
  const mutation = useMutation({
    mutationFn: async () =>
      await db.user.create({
        data: {
          email: email,
          password: password,
        },
      }),
  });
  return {
    isLoading: mutation.isPending,
    createUser: mutation.mutateAsync,
  };
};

export default useSignUp;

// signIn("credentials", {
//     email: email,
//     password: password,
//     usernam: username,
//     callbackUrl: "/api/auth/signin",
//   }),
