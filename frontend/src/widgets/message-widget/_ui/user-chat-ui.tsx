"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserChatUi = ({ name, id }: { name?: string | null; id?: string }) => {
  const currentPathname = usePathname();
  const chechPath = currentPathname.split("/")[3] ?? false;
  const pathname = chechPath ? `/social/messages/${id}` : currentPathname;
  console.log("path", chechPath);

  return (
    <Link href={`${pathname}`}>
      <div className="p-3 transition-all ease-in-out flex w-full hover:border-slate-400  hover:cursor-pointer items-center border-y border-borderColor">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex justify-between p-3 w-full">
          <div className="flex flex-col gap-1">
            <div>{name}</div>
            <div> message</div>
          </div>
          <div className="flex flex-col gap-1">
            <div> time</div>
            <div> tag</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserChatUi;
