import FriendsList from "@/features/friends/friends-list";
import { getAllMembers } from "@/features/peoples/actions";
import PeoplesList from "@/features/peoples/peoples-list";
import React from "react";

const Peoples = async () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-4xl font-bold p-5 border">All members</div>
      <PeoplesList />
      <FriendsList />
    </div>
  );
};

export default Peoples;
