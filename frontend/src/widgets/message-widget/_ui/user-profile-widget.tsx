"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import OnlineTag from "@/shared/ui/online-tag";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { LogOut, MoreHorizontal } from "lucide-react";
import { useAppSession } from "@/entities/session/use-app-session";
import { useSignOut } from "@/features/auth/use-sign-out";
import { Skeleton } from "@/shared/ui/skeleton";

const UserProfileWidget = () => {
  const session = useAppSession();
  const { isPending: isLoading, signOut } = useSignOut();
  console.log("session", session);

  const handleClick = () => signOut();
  return (
    <div className="flex justify-between p-3 items-center border-b border-borderColor">
      <div className="flex gap-2 items-center justify-start ">
        <div className="relative w-fit">
          <Avatar className="w-12 h-12 z-0">
            <AvatarImage
              src={session.data?.user.image}
              alt={session.data?.user.name}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <OnlineTag className="absolute bottom-1 right-0 z-10" />
        </div>
        {session.status === "loading" && <Skeleton className="h-12 w-36 m-3" />}
        {session.status !== "loading" && (
          <div className="flex flex-col p-3">
            <p className="text-md">{session.data?.user.name}</p>
            <p className="text-xs text-gray-400">info</p>
          </div>
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border p-3 w-40">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem
            className="flex justify-between"
            onClick={handleClick}
            disabled={isLoading}
          >
            Exit
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfileWidget;
