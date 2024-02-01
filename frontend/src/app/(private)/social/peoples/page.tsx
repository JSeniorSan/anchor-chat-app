import PeoplesList from "@/features/peoples/peoples-list";
import React from "react";
import { getAllMembers } from "../../../../features/peoples/actions";

const Peoples = async () => {
  const members = await getAllMembers();

  return (
    <div className="flex flex-col gap-5">
      <div className="text-4xl font-bold p-5 border-b-2">All members</div>
      <PeoplesList members={members} />
    </div>
  );
};

export default Peoples;
