"use client";
import { Button } from "@/shared/ui/button";
import { ClientSafeProvider } from "next-auth/react";
import React from "react";
import useOauthSignIn from "./use-oauth-sign-in";

const ProviderButton = ({ provider }: { provider: ClientSafeProvider }) => {
  const { isLoading, signIn } = useOauthSignIn(provider);

  const handleClick = () => signIn();

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className="w-[250px]"
    >{`Sign in with ${provider.name}`}</Button>
  );
};

export default ProviderButton;
