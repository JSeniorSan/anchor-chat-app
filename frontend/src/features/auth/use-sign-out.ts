"use client";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useSignOut = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: () =>
      signOut({
        callbackUrl: "/",
      }),
    onSuccess: async () => {
      router.push("/api/auth/signin");
    },
  });
  return {
    signOut: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
};
