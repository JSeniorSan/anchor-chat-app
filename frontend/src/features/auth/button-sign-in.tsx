"use client";
import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";

const ButtonSignIn = () => {
  const handleClick = async () => {
    await signIn();
  };

  return (
    <Button variant={"outline"} onClick={handleClick}>
      <LogIn /> Войти
    </Button>
  );
};

export default ButtonSignIn;
