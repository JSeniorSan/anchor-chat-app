"use client";
import { useMutation } from "@tanstack/react-query";
import { ClientSafeProvider, signIn } from "next-auth/react";

const useOauthSignIn = (provider: ClientSafeProvider) => {
  const oauthMutation = useMutation({
    mutationFn: async () =>
      await signIn(provider.id, {
        callbackUrl: "/social/messages" ?? undefined,
      }),
  });
  return {
    isLoading: oauthMutation.isPending,
    signIn: oauthMutation.mutate,
  };
};

export default useOauthSignIn;
