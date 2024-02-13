"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { cn } from "@/shared/ui/utils";
import Link from "next/link";
import React from "react";
import { redirect, usePathname } from "next/navigation";

const UserChatUi = ({
  name,
  id,
  image,
  lastMessage,
}: {
  name?: string | null;
  id?: string;
  image?: string | undefined;
  lastMessage?: string | undefined;
}) => {
  const pathname = usePathname();

  return (
    <Link href={`/social/messages/${name}`}>
      <div
        className={cn(
          "p-3 transition-all ease-in-out flex w-full hover:border-slate-400  hover:cursor-pointer items-center border-y border-borderColor",
          {
            ["border-slate-400"]: pathname === `/social/messages/${name}`,
          }
        )}
      >
        <Avatar className="w-16 h-16">
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex justify-between p-3 w-full">
          <div className="flex flex-col gap-1">
            <div>{name}</div>
            <div className="text-sm text-gray-300 font-thin">
              {lastMessage ?? "message"}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div> time</div>
            <div className="text-xs font-light text-green-300">Online</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserChatUi;
