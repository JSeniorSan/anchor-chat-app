import PeoplesList from "@/features/peoples/peoples-list";
import React from "react";

const Peoples = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-4xl font-bold p-5 border-b-2">All members</div>
      <PeoplesList />
    </div>
  );
};

export default Peoples;
