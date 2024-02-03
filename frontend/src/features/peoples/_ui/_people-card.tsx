"use client";
import { UserType } from "@/entities/session/model/types";
import { db } from "@/shared/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { createUserFriend } from "../actions";
import { User } from "../model/types";

export type Member = {
  id: string;
  status: boolean | null;
  userId: string;
  userEmail: string | null;
  userName: string | null;
};

const PeopleCard = ({
  user,
  member,
  type,
}: {
  user?: User;
  type: "friend" | "user";
  member?: Member;
}) => {
  const handleOnClick = async () => {
    if (user) {
      await createUserFriend(user);
    }
  };

  return (
    <Card
      className="w-80 h-64 hover:border-orange-200 transition-all ease-in-out hover:scale-105"
      key={user?.email}
    >
      <CardHeader className="flex gap-3">
        <Avatar>
          <AvatarImage src={user?.image as string | undefined} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>{user?.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Button className="w-32 ">Send a message</Button>
        {type === "user" && (
          <Button className="w-32" onClick={handleOnClick}>
            Add to friends
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
